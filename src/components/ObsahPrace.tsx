import {Field} from "formik";

export const ObsahPrace = () => {
  return (
    <>
      <div className="flex w-[330px] component-preview p-4 font-sans flex-col">
        <label className="label">
            <span className="label-text text-lg">Obsah práce</span>
          </label>
        <Field as="textarea"
               name={`data.obsah`}
               className="input rounded-lg p-2 min-h-[225px] drop-shadow-lg" size="lg" />
      </div>
    </>
  )
}