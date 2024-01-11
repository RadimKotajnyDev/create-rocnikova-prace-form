import React from "react"

import {Obor} from "./components/Obor.tsx";
import {JmenoAprijmeni} from "./components/JmenoAprijmeni.tsx";
import {SkolniRok} from "./components/SkolniRok.tsx";
import {Predmet} from "./components/Predmet.tsx";
import {VedouciPrace} from "./components/VedouciPrace.tsx";
import {ObsahPrace} from "./components/ObsahPrace.tsx";
import {TemaPrace} from "./components/TemaPrace.tsx";
import {PraktickaCast} from "./components/PraktickaCast.tsx";
import {Formik} from "formik";

interface ValuesInterface {
  id: number
  jmeno: string
  prijmeni: string
  obor: string
  trida: string
  skolni_rok: string
  datum_narozeni: string
  predmet: string
  tema: string
  obsah: string
  prakticka_cast: string
  vedouci: string
}


const initialValues = {
  data: {
    id: 0,
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

function submitForm(Values: ValuesInterface) {
  console.log(Values)
}

export const Form = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => submitForm()}
    >
      <div className="min-h-screen h-fit flex w-full justify-center my-5 drop-shadow-xl">
        <div className="min-w-[700px]  bg-neutral p-2 rounded-2xl">
          <h1 className="text-center text-4xl font-bold mt-3">Vytvořit novou práci</h1>
          <form className="">
            <div className="flex flex-row justify-center">
              <div className="flex flex-col items-center">
                <JmenoAprijmeni/>
                <Obor/>
              </div>
              <div className="flex flex-col">
                <SkolniRok/>
                <TemaPrace/>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-center">
                <Predmet/>
                <VedouciPrace/>
              </div>
            </div>
            <div className="flex justify-center">
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-row justify-center">
                <ObsahPrace/>
                <PraktickaCast/>
              </div>
              <div className="flex flex-row justify-center">

              </div>
            </div>
            <div className="w-full flex justify-center mt-8">
              <button type="submit" className="btn">Vytvořit</button>
            </div>
          </form>
        </div>
      </div>
    </Formik>
  )
}