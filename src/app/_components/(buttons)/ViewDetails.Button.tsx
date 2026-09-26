import { Workout } from "@/app/_types/types";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";

interface ViewDetailsButtonProps {
  workout: Workout;
}

export default function ViewDetailsButton({ workout }: ViewDetailsButtonProps) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`/${workout.id}`);
        toast.success(`Viewing details`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Bounce,
        });
      }}
      className={`w-full lg:min-w-32 lg:w-full text-nowrap flex justify-center items-center gap-1.5 rounded-md px-6 py-3 font-body font-semibold text-sm leading-4.5 border border-[#353b46] text-[#d0d3d8] hover:border-[#5a616d] hover:text-white transition`}
    >
      View Details
    </button>
  );
}
