interface WorkoutDetailsInstructionsProps {
  instructions: string[];
}

export default function WorkoutDetailsInstructions({
  instructions,
}: WorkoutDetailsInstructionsProps) {
  return (
    <div className="mt-8">
      <h2 className="font-body text-base font-bold uppercase tracking-wide">
        Instructions
      </h2>

      <ol className="mt-4 space-y-4">
        {instructions.map((instruction, index) => (
          <li
            key={index}
            className="flex gap-2 font-body text-sm leading-6 text-[#c2c5cc]"
          >
            <span className="text-center text-[#858a94] w-4">{index + 1}.</span>
            <span>{instruction}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
