"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Updated Course Type with specific structure
interface Course {
    _id: string;
    title: string;
    category: string;
    prices: string;
    bootcampAvailability: string;
    courseDetails: {
        overview: string;
        accessPeriod: {
            days: string;
            price: string;
            _id: string;
        }[];
        gcbLab: {
            image: string;
            labs: {
                title: string;
                description: string;
                imageUrl: string;
                _id: string;
            }[];
        };
        onDemandLab: {
            title: string;
            price: string;
            _id: string;
        }[];
    };
    author: {
        title: string;
        description: string;
        imageUrl: string;
    };
    termsAndConditions: string[];
    howLearn: {
        title: string;
        points: string[];
        _id: string;
    }[];
    certification: {
        title: string;
        description: string;
        image: string;
        _id: string;
    }[];
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

    // Updated to use Course type instead of Product
    filteredProducts: Course[];
    allProducts: Course[]; // New state for all products without filters
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

    // Updated: filtered course data with specific Course type
    const [filteredProducts, setFilteredProducts] = useState<Course[]>([]);
    const [allProducts, setAllProducts] = useState<Course[]>([]); // New state for all products
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const resetFilters = () => {
        setSelectedTitle("All Products");
        setSelectedDifficulty("all");
        setSelectedDiscount("all_prices");
        setSelectedBootcamp("all_bootcamps");
    };

    // Fetch all products once on component mount
    useEffect(() => {
        const fetchAllProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const fullUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products`;
                const response = await axios.get(fullUrl);
                const products = response.data?.data || [];
                setAllProducts(products);
            } catch (err) {
                console.error("Error fetching all products:", err);
                setError("Failed to fetch all products.");
            } finally {
                setLoading(false);
            }
        };

        fetchAllProducts();
    }, []);

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
                allProducts, // Added new state to the context
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