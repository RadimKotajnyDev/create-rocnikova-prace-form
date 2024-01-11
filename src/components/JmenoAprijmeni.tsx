import {Input} from "react-daisyui";

export const JmenoAprijmeni = () => {
  return (
    <>
      <div className="flex w-[330px] component-preview p-4 gap-2 font-sans">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-lg">Jméno a příjmení</span>
          </label>
          <Input placeholder="např. Jan Novák" className="p-2 px-4 rounded-xl drop-shadow-lg"/>
        </div>
      </div>
    </>
  )
}