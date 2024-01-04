import React from "react"

import {Obor} from "./components/Obor.tsx";
import {JmenoAprijmeni} from "./components/JmenoAprijmeni.tsx";
import {SkolniRok} from "./components/SkolniRok.tsx";
import {DatumNarozeni} from "./components/DatumNarozeni.tsx";
import {Predmet} from "./components/Predmet.tsx";
import {VedouciPrace} from "./components/VedouciPrace.tsx";
import {ObsahPrace} from "./components/ObsahPrace.tsx";
import {TemaPrace} from "./components/TemaPrace.tsx";
import {PraktickaCast} from "./components/PraktickaCast.tsx";

export const FormContext = React.createContext({
  form: {},
  handleFormChange: () => {}
})

export const Form = () => {
  return (
    <div className="min-h-screen h-fit flex w-full justify-center my-5">
      <div className="min-w-[700px] bg-neutral p-2 rounded-2xl">
        <h1 className="text-center text-4xl font-bold mt-3">Vytvořit novou práci</h1>
        <form>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <JmenoAprijmeni/>
              <Obor/>
            </div>
            <div className="flex flex-col">
              <DatumNarozeni/>
              <SkolniRok/>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Predmet />
              <VedouciPrace />
            </div>
          </div>
          <TemaPrace />
          <div className="flex flex-col">
            <div className="flex flex-row">
              <ObsahPrace />
              <PraktickaCast />
            </div>
            <div className="flex flex-row">

            </div>
          </div>
          <div className="w-full flex justify-center mt-2">
            <button type="submit" className="btn">Vytvořit</button>
          </div>
        </form>
      </div>
    </div>
  )
}