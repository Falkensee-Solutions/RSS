import { InquiryForm } from "../InquiryForm";

export function InquirySection() {
  return (
    <section id="anfrage" className="section bg-white">
      <div className="container-rss">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Anfrageformular</p>
          <h2 className="mt-3">Möchten Sie das Format bei sich anbieten?</h2>
          <p id="form-intro" className="mt-6 text-lg text-rss-ink/85">
            Sie möchten „Raum. Stille. Stimme.“ bei sich vor Ort anbieten?
            Füllen Sie das Formular aus. Die Anfrage ist unverbindlich. Wir
            melden uns zeitnah, um Rahmen, Raum, Zielgruppe und mögliche
            Termine gemeinsam zu klären.
          </p>
        </div>

        <div className="mt-12">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
