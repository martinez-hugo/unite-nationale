import React from 'react';

export default function SignatureForm() {
  return (
    <section className="flex flex-col items-start p-6 mt-36 max-w-full bg-white rounded-lg border border-solid shadow-md border-zinc-200 w-[711px] max-md:px-5 max-md:mt-10">
      <div className="flex flex-col self-stretch w-full max-md:max-w-full">
        <h2 className="flex-1 shrink gap-2.5 self-stretch w-full text-2xl font-bold text-zinc-900 max-md:max-w-full">
          En tant qu'élu(e) local(e), rejoignez l'Unité nationale, le mouvement des territoires en première ligne face au harcèlement scolaire !
        </h2>
        <p className="flex-1 shrink gap-2.5 self-stretch mt-3 w-full text-xs font-medium text-zinc-500 max-md:max-w-full">
          Remplissez ce formulaire pour signer la tribune et apparaître parmi les signataires. Vos coordonnées resteront confidentielles
        </p>
      </div>
      <form className="flex flex-col mt-6 max-w-full w-[250px]">
        <label htmlFor="firstName" className="gap-2.5 self-start whitespace-nowrap text-zinc-900 text-xs font-medium">
          Prénom
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="Votre prénom"
          className="flex overflow-hidden flex-col justify-center items-start px-1 py-px mt-2 w-full rounded-md border border-solid border-zinc-200 max-w-[250px] text-zinc-500"
        />
        <div className="flex gap-10 justify-between items-start mt-6 max-w-full text-sm font-medium whitespace-nowrap w-[250px]">
          <button type="button" className="gap-2.5 self-stretch px-4 py