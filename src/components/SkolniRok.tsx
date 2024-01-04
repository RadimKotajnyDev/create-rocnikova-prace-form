import {Select} from "react-daisyui";

export const SkolniRok = () => {
  return (
    <div className="flex w-[330px] component-preview p-4 gap-2 font-sans">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-lg">Školní rok</span>
        </label>
        <div className="relative w-full block">
          <Select className="p-2 px-4 appearance-none rounded-xl w-full" defaultValue={'default'} onChange={console.log}>
            <option value={'default'} disabled>
              ------------------------------
            </option>
            <option value="2019/2020">2019/2020</option>
            <option value="2020/2021">2020/2021</option>
            <option value="2021/2022">2021/2022</option>
            <option value="2022/2023">2022/2023</option>
            <option value="2023/2024">2023/2024</option>
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