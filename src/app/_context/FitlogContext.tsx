"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
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

  // Completed workouts
  completedWorkouts: Workout[];
  addToCompleted: (workout: Workout) => void;
  removeFromCompleted: (id: number) => void;
  isCompleted: (id: number) => boolean;
}

// Context
const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

// Provider
export function FitLogProvider({ children }: { children: ReactNode }) {
  // API DATA
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // SAVED WORKOUTS
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    const saved = localStorage.getItem("fitlog-saved");
    return saved ? JSON.parse(saved) : [];
  });

  // TODAY'S PLAN
  const [planWorkouts, setPlanWorkouts] = useState<Workout[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    const plan = localStorage.getItem("fitlog-plan");
    return plan ? JSON.parse(plan) : [];
  });

  // COMPLETED WORKOUTS
  const [completedWorkouts, setCompletedWorkouts] = useState<Workout[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    const completed = localStorage.getItem("fitlog-completed");
    return completed ? JSON.parse(completed) : [];
  });

  // FETCH WORKOUTS
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }
        const data: Workout[] = await response.json();
        setWorkouts(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchWorkouts();
  }, []);

  // LOCALSTORAGE PERSISTENCE

  // Save saved workouts whenever they change
  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(savedWorkouts));
  }, [savedWorkouts]);
  // Save today's plan whenever it changes
  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(planWorkouts));
  }, [planWorkouts]);
  // Save completed workouts whenever they change
  useEffect(() => {
    localStorage.setItem("fitlog-completed", JSON.stringify(completedWorkouts));
  }, [completedWorkouts]);

  // SAVED WORKOUT FUNCTIONS
  const addToSaved = useCallback((workout: Workout) => {
    setSavedWorkouts((current) => {
      // Don't add the same workout twice
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }
      return [...current, workout];
    });
  }, []);
  const removeFromSaved = useCallback((id: number) => {
    setSavedWorkouts((current) =>
      current.filter((workout) => workout.id !== id),
    );
  }, []);
  const isSaved = useCallback(
    (id: number) => {
      return savedWorkouts.some((workout) => workout.id === id);
    },
    [savedWorkouts],
  );

  // TODAY'S PLAN FUNCTIONS
  const addToPlan = useCallback((workout: Workout) => {
    setPlanWorkouts((current) => {
      // Don't add the same workout twice
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }
      return [...current, workout];
    });
  }, []);
  const removeFromPlan = useCallback((id: number) => {
    setPlanWorkouts((current) =>
      current.filter((workout) => workout.id !== id),
    );
  }, []);
  const isInPlan = useCallback(
    (id: number) => {
      return planWorkouts.some((workout) => workout.id === id);
    },
    [planWorkouts],
  );

  // COMPLETED WORKOUT FUNCTIONS
  const addToCompleted = useCallback((workout: Workout) => {
    setCompletedWorkouts((current) => {
      // Don't mark the same workout as completed twice
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }
      return [...current, workout];
    });
  }, []);
  const removeFromCompleted = useCallback((id: number) => {
    setCompletedWorkouts((current) =>
      current.filter((workout) => workout.id !== id),
    );
  }, []);
  const isCompleted = useCallback(
    (id: number) => {
      return completedWorkouts.some((workout) => workout.id === id);
    },
    [completedWorkouts],
  );

  // CONTEXT VALUE
  // Memoizing the value prevents the context from creating a completely new object on every provider render.
  const contextValue = useMemo<FitLogContextType>(
    () => ({
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

      // Completed workouts
      completedWorkouts,
      addToCompleted,
      removeFromCompleted,
      isCompleted,
    }),
    [
      workouts,
      loading,
      error,

      savedWorkouts,
      addToSaved,
      removeFromSaved,
      isSaved,

      planWorkouts,
      addToPlan,
      removeFromPlan,
      isInPlan,

      completedWorkouts,
      addToCompleted,
      removeFromCompleted,
      isCompleted,
    ],
  );

  return (
    <FitLogContext.Provider value={contextValue}>
      {children}
    </FitLogContext.Provider>
  );
}

// Custom hook
export function useFitLog() {
  const context = useContext(FitLogContext);
  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }
  return context;
}
