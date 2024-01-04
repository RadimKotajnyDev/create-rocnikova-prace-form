import {Input, Select} from "react-daisyui";

export const Predmet = () => {
  return (
    <>
      <div className="flex w-[330px] component-preview p-4 gap-2 font-sans">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-lg">Předmět</span>
          </label>
          <Input className="p-2 px-4 rounded-xl"/>
        </div>
      </div>
    </>
  )
}