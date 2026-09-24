"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import type { Workout } from "@/app/_types/types";

interface FitLogContextType {
  // API data
  workouts: Workout[];
  loading: boolean;
  error: string | null;

  // Saved workouts
  savedWorkouts: Workout[];
  addToSaved: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;
  isSaved: (id: number) => boolean;

  // Today's plan
  planWorkouts: Workout[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  isInPlan: (id: number) => boolean;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined,
);

export function FitLogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load saved workouts from localStorage
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const saved = localStorage.getItem("fitlog-saved");

    return saved ? JSON.parse(saved) : [];
  });

  // Load plan workouts from localStorage
  const [planWorkouts, setPlanWorkouts] = useState<Workout[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const plan = localStorage.getItem("fitlog-plan");

    return plan ? JSON.parse(plan) : [];
  });

  // Fetch workouts
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(
          "https://api.abcz.workers.dev/api/fitlog",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const data: Workout[] = await response.json();

        setWorkouts(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchWorkouts();
  }, []);

  // Save saved workouts
  useEffect(() => {
    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(savedWorkouts),
    );
  }, [savedWorkouts]);

  // Save today's plan
  useEffect(() => {
    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(planWorkouts),
    );
  }, [planWorkouts]);

  // -------------------------
  // SAVED WORKOUTS
  // -------------------------

  const addToSaved = (workout: Workout) => {
    setSavedWorkouts((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });
  };

  const removeFromSaved = (id: number) => {
    setSavedWorkouts((current) =>
      current.filter((workout) => workout.id !== id),
    );
  };

  const isSaved = (id: number) => {
    return savedWorkouts.some((workout) => workout.id === id);
  };

  // -------------------------
  // TODAY'S PLAN
  // -------------------------

  const addToPlan = (workout: Workout) => {
    setPlanWorkouts((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });
  };

  const removeFromPlan = (id: number) => {
    setPlanWorkouts((current) =>
      current.filter((workout) => workout.id !== id),
    );
  };

  const isInPlan = (id: number) => {
    return planWorkouts.some((workout) => workout.id === id);
  };

  return (
    <FitLogContext.Provider
      value={{
        // API data
        workouts,
        loading,
        error,

        // Saved workouts
        savedWorkouts,
        addToSaved,
        removeFromSaved,
        isSaved,

        // Today's plan
        planWorkouts,
        addToPlan,
        removeFromPlan,
        isInPlan,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider",
    );
  }

  return context;
}