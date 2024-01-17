import {Obor} from "./components/Obor.tsx";
import {JmenoAprijmeni} from "./components/JmenoAprijmeni.tsx";
import {SkolniRok} from "./components/SkolniRok.tsx";
import {Predmet} from "./components/Predmet.tsx";
import {VedouciPrace} from "./components/VedouciPrace.tsx";
import {ObsahPrace} from "./components/ObsahPrace.tsx";
import {TemaPrace} from "./components/TemaPrace.tsx";
import {PraktickaCast} from "./components/PraktickaCast.tsx";
import {Form, Formik} from "formik";
import axios from "axios";
import {initialValues, schema, ValuesInterface} from "./configs.ts";

function submitForm(values: ValuesInterface) {
  console.log(values)
  axios.post("/register", values)
    .then((response) => console.log(response))
}

export const FormApp = () => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={(values: ValuesInterface) => submitForm(values)}
    >
      {({errors, touched}) => (
        <Form>
          <div className="min-h-screen h-fit flex w-full justify-center my-5 drop-shadow-xl">
            <div className="min-w-fit md:min-w-[700px] bg-neutral p-2 rounded-2xl">
              <h1 className="text-center text-4xl font-bold mt-3">Vytvořit novou práci</h1>
              <div>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex flex-col">
                    <JmenoAprijmeni {...{errors, touched}} />
                    <SkolniRok {...{errors, touched}} />
                    <Obor {...{errors, touched}} />
                    <Predmet {...{errors, touched}} />
                    <TemaPrace {...{errors, touched}} />
                    <VedouciPrace {...{errors, touched}}/>
                  </div>
                  <div className="flex flex-col">
                    <PraktickaCast {...{errors, touched}} />
                    <ObsahPrace {...{errors, touched}} />
                  </div>
                </div>
                <div className="w-full flex justify-center mt-8">
                  <button type="submit" className="btn">Vytvořit</button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}