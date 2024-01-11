import {Select} from "react-daisyui";

let Arr: Array<string> = []
let today = new Date
let year = today.getFullYear()
for (let i: number = 0; i < 20; i++) {
  let stringDate = (year - i - 1).toString() + "/" + (year - i).toString()
  Arr.push(stringDate)
}
export const SkolniRok = () => {
  return (
    <div className="flex w-[330px] component-preview p-4 gap-2 font-sans">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-lg">Školní rok</span>
        </label>
        <div className="relative w-full block">
          <Select className="p-2 px-4 appearance-none rounded-xl w-full" defaultValue={'default'}
                  onChange={console.log}>
            <option value={'default'} disabled>
              ------------------------------
            </option>
            {Arr && Arr.map((currentString, index) => (
              <option key={index} value={currentString}>{currentString}</option>
            ))}
          </Select>
          <div className="pointer-events-none z-30 absolute inset-y-0 right-0 flex items-center pr-3 text-white">
            <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M9.293 12.95l3.354-3.354a.5.5 0 0 0-.708-.708L9 11.543 5.646 8.197a.5.5 0 0 0-.708.708l3.354 3.353a.5.5 0 0 0 .708 0z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}