export default function ADRGuidelinesPage() {
  return (
    <div
      style={{
        background: "#fff",
        fontFamily: "'Times New Roman', Times, serif",
        fontSize: "16px",
        color: "#000",
        padding: "22px 30px",
        maxWidth: "1000px",
        margin: "0 auto",
        border: "1px solid #aaa",
        lineHeight: "1.55",
      }}
    >
      {/* SECOND FOLD HERE */}
      <div style={{ fontStyle: "italic", fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}>
        SECOND FOLD HERE
      </div>

      {/* Main title */}
     <div style={ { fontSize: "24px", fontWeight: "bold", letterSpacing: "0.9px", lineHeight: 1.1}}>
            SUSPECTED ADVERSE DRUG REACTION REPORTING FORM
          </div>

      {/* Subtitle quote */}
      <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", marginBottom: "12px", letterSpacing: "0.5px" }}>
        &rdquo;ADVERSE DRUG REACTION (ADR) REPORTING IS ETHICAL AND MORAL DUTY OF HEALTHCARE PROFESSIONALS&ldquo;
      </div>

      {/* Please use this form */}
      <p style={{ marginBottom: "4px", fontSize: "16px" }}>
        Please use this form for reporting:
      </p>

      <ul style={{ marginLeft: "22px", marginBottom: "10px", fontSize: "16px", lineHeight: "1.7" }}>
        <li>
          Suspected Adverse Drug Reactions  with{" "}
          <strong>THERAPEUTIC GOODS</strong>
        </li>
        <li>
          Suspected Adverse Drug Reactions with{" "}
          <strong>NEW THERAPEUTIC GOODS</strong>
        </li>
        <li>
          Suspected Adverse Drug Reactions for {" "}
          <strong>ALL VACCINES</strong>
        </li>
        <li>
          <strong>LACK OF EFFICACY</strong> in the case of vaccines, contraceptives, antibiotics, and life saving medicines.
        </li>
        <li>
          Adverse outcomes due to suspected <strong>QUALITY PROBLEM</strong> in therapeutic good.
        </li>
        <li>
          Adverse outcomes as a result of an overdose, abuse, misuse, off-label use or medication errors.
        </li>
      </ul>

      {/* Checkmark bullets */}
      <div style={{ marginBottom: "7px", fontSize: "16px" }}>
        <p style={{ marginBottom: "5px" }}>
          <span style={{ marginRight: "4px" }}>✓</span>
          <strong>THERAPEUTIC GOODS</strong> include the following: Drugs, Vaccine, Biological or alternative medicine or medical devices or biologicals or other related products as may be notified by DRAP
        </p>
        <p style={{ marginBottom: "5px" }}>
          <span style={{ marginRight: "4px" }}>✓</span>
          Fatal reactions, life-threatening, disabling or incapacitating, result in or prolong hospitalization, congenital anomaly or birth defect and other serious medically important conditions are considered serious.
        </p>
        <p style={{ marginBottom: "5px" }}>
          <span style={{ marginRight: "4px" }}>✓</span>
          Health care professionals shall comment on the causal relationship of each suspected drug/vaccine/alternative medicine with each reaction as per the World Health Organization (WHO) causality assessment scale  which comprises of the following six categories, namely:
        </p>
      </div>

      {/* WHO categories row */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          fontSize: "16px",
          marginBottom: "16px",
          paddingLeft: "10px",
          flexWrap: "wrap",
        }}
      >
        {[
          "i. Certain",
          "ii. Probable",
          "iii. Possible",
          "iv. Unlikely",
          "v. Unclassified",
          "vi. Unclassifiable",
        ].map((cat) => (
          <span key={cat} style={{ marginRight: "6px" }}>
            {cat}
          </span>
        ))}
      </div>

      {/* Bold centre line */}
      <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", marginBottom: "12px" }}>
        For the Greater Good &amp; in Public Interest, Please Report ADRs to DRAP even if you are unsure.
      </div>

      {/* For more information */}
      <p style={{ marginBottom: "5px", fontSize: "16px" }}>
        For More Information / Queries, please contact:
      </p>

      <div style={{ paddingLeft: "16px", marginBottom: "16px", fontSize: "16px" }}>
        <strong>Email:  registry@globalpharmaceuticals.com</strong>
      </div>

      {/* FIRST FOLD HERE */}
      <div
        style={{
          textAlign: "center",
          fontStyle: "italic",
          fontWeight: "bold",
          fontSize: "16px",
          borderTop: "0.8px dashed #777",
          paddingTop: "6px",
          marginTop: "6px",
        }}
      >
        FIRST FOLD HERE
      </div>
    </div>
  );
}