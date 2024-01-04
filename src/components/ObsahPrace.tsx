import {Textarea} from "react-daisyui";

export const ObsahPrace = () => {
  return (
    <>
      <div className="flex w-[330px] component-preview p-4 font-sans flex-col">
        <label className="label">
            <span className="label-text text-lg">Obsah práce</span>
          </label>
        <Textarea className="rounded-lg p-2 min-h-[225px]" size="lg" />
      </div>
    </>
  )
}