"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Product Type (based on your API response structure)
interface Product {
    _id: string;
    title: string;
    category: string;
    prices: string;
    bootcampAvailability: string;
    courseDetails: any;
    author: any;
    termsAndConditions: string[];
    howLearn: any[];
    certification: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface FilterContextType {
    selectedTitle: string;
    setSelectedTitle: (val: string) => void;
    selectedDifficulty: string;
    setSelectedDifficulty: (val: string) => void;
    selectedDiscount: string;
    setSelectedDiscount: (val: string) => void;
    selectedBootcamp: string;
    setSelectedBootcamp: (val: string) => void;
    resetFilters: () => void;

    // New global state values
    filteredProducts: Product[];
    loading: boolean;
    error: string | null;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
    // Filter UI state
    const [selectedTitle, setSelectedTitle] = useState("All Products");
    const [selectedDifficulty, setSelectedDifficulty] = useState("all");
    const [selectedDiscount, setSelectedDiscount] = useState("all_prices");
    const [selectedBootcamp, setSelectedBootcamp] = useState("all_bootcamps");

    // New: filtered product data
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const resetFilters = () => {
        setSelectedTitle("All Products");
        setSelectedDifficulty("all");
        setSelectedDiscount("all_prices");
        setSelectedBootcamp("all_bootcamps");
    };

    // Fetch products whenever filter values change
    useEffect(() => {
        const fetchFiltered = async () => {
            setLoading(true);
            setError(null);

            try {
                const queryParams: Record<string, string> = {};
                if (selectedDifficulty !== "all") queryParams.category = selectedDifficulty;
                if (selectedDiscount !== "all_prices") queryParams.prices = selectedDiscount;
                if (selectedBootcamp !== "all_bootcamps") queryParams.bootcampAvailability = selectedBootcamp;

                const searchParams = new URLSearchParams(queryParams).toString();
                const fullUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products${searchParams ? `?${searchParams}` : ""}`;

                const response = await axios.get(fullUrl);
                const products = response.data?.data || [];

                setFilteredProducts(products);
            } catch (err) {
                console.error("Error fetching filtered data:", err);
                setError("Failed to fetch products.");
            } finally {
                setLoading(false);
            }
        };

        fetchFiltered();
    }, [selectedDifficulty, selectedDiscount, selectedBootcamp]);

    return (
        <FilterContext.Provider
            value={{
                selectedTitle,
                setSelectedTitle,
                selectedDifficulty,
                setSelectedDifficulty,
                selectedDiscount,
                setSelectedDiscount,
                selectedBootcamp,
                setSelectedBootcamp,
                resetFilters,
                filteredProducts,
                loading,
                error,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) throw new Error("useFilter must be used inside FilterProvider");
    return context;
};
