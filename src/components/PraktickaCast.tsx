import {Field} from "formik";

export const PraktickaCast = () => {
  return (
    <>
      <div className="flex w-[330px] component-preview p-4 font-sans flex-col">
        <label className="label">
          <span className="label-text text-lg">Praktická část</span>
        </label>
        <Field as="textarea"
               name={`prakticka_cast`}
               className="input rounded-lg p-2 min-h-[225px] drop-shadow-lg" size="lg"/>
      </div>
    </>
  )
}