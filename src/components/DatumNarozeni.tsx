import {Input} from "react-daisyui";

export const DatumNarozeni = () => {
    return (
        <>
            <div className="flex w-[330px] component-preview p-4 gap-2 font-sans">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">Datum Narození</span>
                    </label>
                    <Input className="p-2 appearance-none px-4 rounded-xl" type="date"/>
                </div>
            </div>
        </>
    )
}