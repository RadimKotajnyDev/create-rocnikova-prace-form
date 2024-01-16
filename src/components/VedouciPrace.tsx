import {Field} from "formik";

export const VedouciPrace = () => {
  return (
    <>
      <div className="flex w-[330px] component-preview p-4 gap-2 font-sans">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-lg">Vedoucí práce</span>
          </label>
          <Field name={`data.vedouci`} className="input p-2 px-4 rounded-xl drop-shadow-lg"/>
        </div>
      </div>
    </>
  )
}