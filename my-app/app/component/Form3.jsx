export default function ADRFormPage3() {
  const s = {
    page: {
      background: "#fff",
      fontFamily: "'Times New Roman', Times, serif",
      fontSize: "16px",
      color: "#000",
      padding: "16px 20px",
      maxWidth: "1000px",
      margin: "0 auto",
      border: "1px solid #aaa",
    },
    headerTitle: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "24px",
      letterSpacing: "0.4px",
      marginBottom: "1px",
    },
    headerSub: {
      textAlign: "center",
      fontSize: "16px",
      marginBottom: "1px",
    },
    headerItalic: {
      textAlign: "center",
      fontStyle: "italic",
      fontWeight: "bold",
      fontSize: "16px",
      marginBottom: "8px",
    },
    sectionHeader: {
      background: "#000",
      color: "#fff",
      fontWeight: "bold",
      fontSize: "16px",
      padding: "1.5px 5px",
      marginBottom: "3px",
      marginTop: "6px",
      display: "flex",
      justifyContent: "space-between",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "16px",
      marginBottom: "3px",
    },
    th: {
      border: "0.8px solid #000",
      background: "#e8e8e8",
      padding: "2px 3px",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "16px",
      verticalAlign: "bottom",
    },
    td: {
      border: "0.8px solid #000",
      padding: "1px 2px",
      height: "18px",
    },
    tdInput: {
      border: "none",
      outline: "none",
      width: "100%",
      fontSize: "16px",
      background: "transparent",
      fontFamily: "inherit",
      padding: 0,
      height: "16px",
    },
    boxField: {
      border: "0.8px solid #000",
      padding: "4px 6px",
      marginBottom: "4px",
      minHeight: "60px",
      position: "relative",
    },
    boxLabel: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "2px",
    },
    contNote: {
      fontSize: "16px",
      fontStyle: "italic",
      color: "#444",
      marginLeft: "4px",
    },
    textarea: {
      border: "none",
      outline: "none",
      width: "100%",
      resize: "none",
      fontSize: "16px",
      fontFamily: "inherit",
      background: "transparent",
      padding: "1px",
    },
  };

  function TableInput({ name }) {
    return <input name={name} style={s.tdInput} />;
  }

  return (
    <div style={s.page}>

      {/* ── HEADER ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1.5px solid #000", paddingBottom: "5px", marginBottom: "5px" }}>
        {/* Logo */}
        <div style={{
          width: "40px", height: "40px", 
          borderRadius: "50%", display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: "16px", textAlign: "center",
          flexShrink: 0, color: "#333",
        }}>
          <img src="/clip.png" alt="" />
        </div>

        <div style={{ flex: 1 }}>
          <div style={s.headerTitle}>SUSPECTED ADVERSE DRUG REACTION REPORTING FORM</div>
          <div style={s.headerSub}>
            Thank of this form of adverse reporting to adverse drug reactions caused by therapeutic goods manufactured in Pakistan
          </div>
          <div style={s.headerItalic}>For Health Care Professionals (Additional page)</div>
        </div>
      </div>

      {/* ── B. SUSPECTED DRUGS (continued) ── */}
      <div style={s.sectionHeader}>
        <span>B. SUSPECTED DRUG(S)/VACCINE(S)/ALTERNATIVE MEDICINE(S)</span>
        <span style={{ fontStyle: "italic", fontWeight: "normal", fontSize: "16px" }}>(continued)</span>
      </div>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={{ ...s.th, width: "22%" }}>
              Drug/Vaccine/Alternative<br />Medicine<br /><span style={{ fontWeight: "normal", fontSize: "16px" }}>(Brand/Generic/Common Name)</span>
            </th>
            <th style={s.th}>Batch No.</th>
            <th style={s.th}>Manufacturer/<br />Importer</th>
            <th style={s.th}>Route of<br />Administration &<br />Daily Doses</th>
            <th style={s.th}>Dosage<br />&<br />Strength</th>
            <th style={s.th}>Start Date</th>
            <th style={s.th}>Stop Date</th>
            <th style={s.th}>Prescribed For</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((r) => (
            <tr key={r}>
              {Array(8).fill(0).map((_, i) => {
                const colNames = ["drugName", "batchNo", "manufacturer", "route", "dosage", "startDate", "stopDate", "prescribedFor"];
                return (
                  <td key={i} style={s.td}><TableInput name={`drug_${colNames[i]}_${r}`} /></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── C. SUSPECTED REACTIONS (continued) ── */}
      <div style={s.sectionHeader}>
        <span>C. SUSPECTED REACTION(S)</span>
        <span style={{ fontStyle: "italic", fontWeight: "normal", fontSize: "16px" }}>(continued)</span>
      </div>

      {/* Box 3 – Describe the reaction */}
      <div style={s.boxField}>
        <div style={s.boxLabel}>
          3. Describe the reaction(s)
          <span style={s.contNote}>(continued)</span>
        </div>
        <textarea name="reactionDescriptionCont" style={{ ...s.textarea, height: "60px" }} />
      </div>

      {/* Box – Other relevant history */}
      <div style={s.boxField}>
        <div style={s.boxLabel}>
          4. Other relevant history patient (Allergies, Smoking, Alcohol, Renal/Liver Problems and Pre Existing Medical Problems)
          <span style={s.contNote}>(continued)</span>
        </div>
        <textarea name="medicalHistoryCont" style={{ ...s.textarea, height: "44px" }} />
      </div>

      {/* Box 5 – Relevant Tests */}
      <div style={s.boxField}>
        <div style={s.boxLabel}>
          5. Relevant Tests/Laboratory Data with Dates
          <span style={s.contNote}>(continued)</span>
        </div>
        <textarea name="labDataCont" style={{ ...s.textarea, height: "60px" }} />
      </div>

      {/* ── D. OTHER CONCOMITANT DRUGS (continued) ── */}
      <div style={s.sectionHeader}>
        <span>D. OTHER CONCOMITANT DRUG(S)/VACCINE(S)/ALTERNATIVE MEDICINE(S)</span>
        <span style={{ fontStyle: "italic", fontWeight: "normal", fontSize: "16px" }}>(continued)</span>
      </div>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={{ ...s.th, width: "22%" }}>
              Drug/Vaccine/Alternative<br />Medicine<br /><span style={{ fontWeight: "normal", fontSize: "16px" }}>(Brand/Generic/Common Name)</span>
            </th>
            <th style={s.th}>Batch No.</th>
            <th style={s.th}>Manufacturer/<br />Importer</th>
            <th style={s.th}>Route of<br />Administration &<br />Daily Doses</th>
            <th style={s.th}>Dosage<br />&<br />Strength</th>
            <th style={s.th}>Start Date</th>
            <th style={s.th}>Stop Date</th>
            <th style={s.th}>Prescribed For</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((r) => (
            <tr key={r}>
              {Array(8).fill(0).map((_, i) => {
                const colNames = ["drugName", "batchNo", "manufacturer", "route", "dosage", "startDate", "stopDate", "prescribedFor"];
                return (
                  <td key={i} style={s.td}><TableInput name={`concomitant_${colNames[i]}_${r}`} /></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── E. SUSPECTED MEDICAL DEVICE(S) ── */}
      <div style={s.sectionHeader}>
        <span>E. SUSPECTED MEDICAL DEVICE(S)</span>
      </div>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={{ ...s.th, width: "20%" }}>
              Medical Device<br />Common/Generic/Brand Name
            </th>
            <th style={s.th}>Lot/No.<br />Batch No.</th>
            <th style={s.th}>Manufacturer/<br />Importer</th>
            <th style={s.th}>Model No.</th>
            <th style={s.th}>Unique<br />Identifier No.</th>
            <th style={s.th}>Serial No.</th>
            <th style={s.th}>ID Implanted<br />enter date</th>
            <th style={s.th}>ID Explanted<br />enter date</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2].map((r) => (
            <tr key={r}>
              {Array(8).fill(0).map((_, i) => {
                const colNames = ["deviceName", "batchNo", "manufacturer", "modelNo", "uniqueId", "serialNo", "implantedDate", "explantedDate"];
                return (
                  <td key={i} style={{ ...s.td, height: "22px" }}><TableInput name={`device_${colNames[i]}_${r}`} /></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}