"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/lib/site";

export function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="section bg-mid" aria-label="Perguntas frequentes">
      <div className="wrap">
        <div data-anim="up">
          <span className="sec-label">Dúvidas</span>
          <h2 className="sec-h2">Perguntas frequentes</h2>
          <p className="sec-lead">
            Respostas diretas para as dúvidas mais comuns antes de contratar um advogado.
          </p>
        </div>
        <div className="faq-list" role="list">
          {faqs.map((faq, i) => (
            <div
              className={`faq-item${openFaq === i ? " open" : ""}`}
              key={i}
              role="listitem"
            >
              <button
                className="faq-btn"
                aria-expanded={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <div className="faq-answer" aria-hidden={openFaq !== i}>
                <div className="faq-answer-inner">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
