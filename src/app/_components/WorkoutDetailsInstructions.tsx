interface WorkoutDetailsInstructionsProps {
  instructions: string[];
}

export default function WorkoutDetailsInstructions({
  instructions,
}: WorkoutDetailsInstructionsProps) {
  return (
    <div className="mt-6">
      <h2 className="font-body text-base font-bold uppercase tracking-wide">
        Instructions
      </h2>

      <ol className="mt-2 space-y-2">
        {instructions.map((instruction, index) => (
          <li
            key={index}
            className="flex gap-2 font-body text-sm leading-5 text-[#9CA3AF]"
          >
            <span className="text-center text-[#9CA3AF] w-4">{index + 1}.</span>
            <span>{instruction}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
