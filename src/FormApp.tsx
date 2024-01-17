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
import * as yup from "yup"


const schema = yup.object().shape({
  data: yup.object().shape({
    jmeno_prijmeni: yup.string().required(),
    obor: yup.string().required(),
    trida: yup.string().required(),
    skolni_rok: yup.string().required(),
    predmet: yup.string().required(),
    tema: yup.string().required(),
    obsah: yup.string().required(),
    prakticka_cast: yup.string().required(),
    vedouci: yup.string().required()
  })
})

interface ValuesInterface {
  data: {
    jmeno_prijmeni: string,
    obor: string,
    trida: string,
    skolni_rok: string,
    predmet: string,
    tema: string,
    obsah: string,
    prakticka_cast: string,
    vedouci: string
  }
}


const initialValues = {
  data: {
    jmeno_prijmeni: "",
    obor: "",
    trida: "",
    skolni_rok: "",
    predmet: "",
    tema: "",
    obsah: "",
    prakticka_cast: "",
    vedouci: ""
  }
}

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
            <div className="min-w-[700px]  bg-neutral p-2 rounded-2xl">
              <h1 className="text-center text-4xl font-bold mt-3">Vytvořit novou práci</h1>
              <div className="">
                <div className="flex flex-row justify-center">
                  <div className="flex flex-col items-center">
                    <JmenoAprijmeni {...{errors, touched}} />
                    <Obor {...{errors, touched}} />
                  </div>
                  <div className="flex flex-col">
                    <SkolniRok {...{errors, touched}}/>
                    <TemaPrace {...{errors, touched}}/>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-center">
                    <Predmet {...{errors, touched}}/>
                    <VedouciPrace {...{errors, touched}}/>
                  </div>
                </div>
                <div className="flex justify-center">
                </div>
                <div className="flex flex-col ">
                  <div className="flex flex-row justify-center">
                    <ObsahPrace {...{errors, touched}}/>
                    <PraktickaCast {...{errors, touched}}/>
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