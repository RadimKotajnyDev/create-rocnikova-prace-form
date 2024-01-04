import {Input} from "react-daisyui";

export const TemaPrace = () => {
  return (
    <>
      <div className="flex w-[660px] component-preview p-4 gap-2 font-sans">
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text text-lg">Téma práce</span>
          </label>
          <Input className="p-2 px-4 rounded-xl"/>
        </div>
      </div>
    </>
  )
}