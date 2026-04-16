/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { useResponsive } from "./useResponsive";
import { Field } from 'formik'; // ← remove this if unused
export default function ADRForm() {
  const screenSize = useResponsive();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const scale = screenSize.isMobile ? 0.75 : screenSize.isTablet ? 0.85 : 1;
  const pagePadding = screenSize.isMobile
    ? "10px 12px"
    : screenSize.isTablet
      ? "16px 16px"
      : "18px 22px";

  const s = {
    page: {
      background: "#fff",
      fontFamily: "'Times New Roman', Times, serif",
      fontSize: `${16 * scale}px`,
      color: "#000",
      padding: pagePadding,
      maxWidth: "1000px",
      margin: "0 auto",
      border: "1px solid #000",
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      width: `${100 / scale}%`,
    },
    headerRow: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      borderBottom: "1.5px solid #000",
      paddingBottom: "4px",
      marginBottom: "6px",
      gap: "12px",
    },
    logo: {
      width: "60px",
      height: "60px",
      // border: "1px solid #555",
      // borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "16px",
      textAlign: "center",
      flexShrink: 0,
      padding: "4px",
      color: "#333",
    },
    titleBlock: { flex: 3, textAlign: "center", minWidth: "260px" },
    mainTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      letterSpacing: "1.5px",
      lineHeight: 1.1,
    },
    subtitle: {
      fontSize: "11px",
      fontStyle: "italic",
      marginTop: "22px",
    },
    subHeaderRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "4px",
      gap: "12px",
      fontSize: "10px",
      textTransform: "none",
    },
    tagLineLeft: {
      // flex: 1,
      textAlign: "left",
      lineHeight: 1.2,
      marginLeft: "74px",
      fontSize: "16px",
      letterSpacing: "0.05em",
width:"100%"
    },
    tagLineRight: {
      flex: 1,
      textAlign: "right",
      lineHeight: 1.2,
      paddingRight: "75px",
      fontSize: "12px",
      letterSpacing: "0.09em",
    },
    certBox: {
      border: "1px solid #000",
      padding: "8px 10px",
      fontSize: "11px",
      textAlign: "left",
      minWidth: "180px",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },
    certTitle: {
      fontStyle: "italic",
      fontWeight: "bold",
      fontSize: "11px",
      lineHeight: 1.1,
      textAlign: "left",
    },
    reportRow: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "11px",
    },
    reportInput: {
      border: "none",
      borderBottom: "1px solid #000",
      outline: "none",
      width: "140px",
      fontSize: "11px",
      background: "transparent",
      padding: "0 1px",
      height: "16px",
    },
    emailRow: {
      fontSize: "11px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "2px 0 8px 0",
      gap: "12px",
    },
    sectionHeader: {
      background: "#000",
      color: "#fff",
      fontWeight: "bold",
      fontSize: "16px",
      padding: "1px 5px",
      marginBottom: "3px",
      marginTop: "5px",
      letterSpacing: "0.3px",
    },
    row: {
      display: "flex",
      gap: "4px",
      marginBottom: "3px",
      alignItems: "flex-end",
      flexWrap: "wrap",
    },
    field: { display: "flex", flexDirection: "column", gap: "1px" },
    label: { fontSize: "16px", whiteSpace: "nowrap" },
    input: {
      border: "none",
      borderBottom: "0.8px solid #000",
      outline: "none",
      fontSize: "16px",
      background: "transparent",
      minWidth: "60px",
      padding: "0 1px",
      height: "16px",
    },
    textarea: {
      border: "0.8px solid #000",
      outline: "none",
      fontSize: "16px",
      background: "transparent",
      width: "100%",
      resize: "none",
      padding: "2px",
      fontFamily: "inherit",
    },
    checkbox: {
      width: "10px",
      height: "10px",
      marginRight: "3px",
      cursor: "pointer",
    },
    checkRow: {
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
      marginBottom: "2px",
    },
    table: { width: "100%", borderCollapse: "collapse", fontSize: "16px" },
    th: {
      border: "0.8px solid #000",
      background: "#e8e8e8",
      padding: "2px 3px",
      fontWeight: "bold",
      fontSize: "16px",
      textAlign: "center",
    },
    td: {
      border: "0.8px solid #000",
      padding: "2px 3px",
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
    twoCol: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" },
    boxSection: {
      border: "0.8px solid #000",
      padding: "4px 6px",
      marginBottom: "3px",
    },
    subLabel: {
      fontSize: "12px",
      fontWeight: "bold",
      textDecoration: "underline",
      marginBottom: "2px",
    },
    noteText: { fontSize: "12px", fontStyle: "italic", color: "#333" },
    signatureRow: {
      display: "flex",
      gap: "10px",
      marginTop: "4px",
      alignItems: "flex-end",
    },
  };

  function Field({ label, name, width = 80, style = {} }) {
    return (
      <div style={{ ...s.field, ...style }}>
        {label && <span style={s.label}>{label}</span>}
        <input name={name} style={{ ...s.input, width }} />
      </div>
    );
  }

  function CheckItem({ label, name, value }) {
    const [checked, setChecked] = useState(false);
    return (
      <label style={s.checkRow}>
        <input
          type="checkbox"
          name={name}
          value={value || label}
          style={s.checkbox}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {label}
      </label>
    );
  }
  const FField  = ({ label, name, width, style }) => (
  <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, whiteSpace: "nowrap", ...style }}>
    {label}
    <input
      name={name}
      style={{
        width,
        border: "none",
        borderBottom: "1px solid black",
        outline: "none",
        background: "transparent",
        fontSize: 14,
      }}
    />
  </label>
);
// Rename your local one to avoid the clash
const FormField = ({ label, name, width }) => (
  <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, whiteSpace: "nowrap" }}>
    {label}
    <input
      name={name}
      style={{
        width,
        border: "none",
        borderBottom: "1px solid black",
        outline: "none",
        background: "transparent",
        fontSize: 14,
      }}
    />
  </label>
);
  function TableInput({ name, style = {} }) {
    return <input name={name} style={{ ...s.tdInput, ...style }} />;
  }

  return (
    <div style={s.page}>
      {/* ── HEADER ── */}
      <div style={s.headerRow}>
        <div style={s.logo}>
          <img src="/clip.png" alt="Logo" />
        </div>
        <div style={s.titleBlock}>
          <div style={s.mainTitle}>
            SUSPECTED ADVERSE DRUG REACTION REPORTING FORM
          </div>
          <div style={s.subHeaderRow}>
           <span style={s.tagLineLeft}>
  This form is for voluntary reporting of adverse drug reactions{"   "}
  caused by therapeutic goods marketed in Pakistan.
</span>
            <span style={s.tagLineRight}>
              
            </span>
          </div>
          <div style={s.subtitle}>For Healthcare Professionals</div>
        </div>
        {/* <div style={s.certBox}>
          <div style={s.certTitle}>ForOfficeUseOnly</div>
          <div style={s.reportRow}>
            <span>ReportNo.</span>
            <input style={s.reportInput} />
          </div>
        </div> */}
      </div>

      {/* email row */}
      <div style={s.emailRow}>
        <span>Email: registry@globalpharmaceuticals.com</span>
        {/* <span>Fax/Tel: <input style={{ ...s.input, width: "100px", fontSize: "11px" }} /></span> */}
        <div style={s.certBox}>
          <div style={s.certTitle}>ForOfficeUseOnly</div>
          <div style={s.reportRow}>
            <span>ReportNo.</span>
            <input style={s.reportInput} />
          </div>
        </div>
      </div>

      {/* ── A. PATIENT DETAILS ── */}
      <div style={s.sectionHeader}>A. PATIENT DETAILS</div>
  <div style={{ ...s.row, alignItems: "center", gap: 12 }}>
  <FormField label="Patient Name/Initials:" name="patientName" width={120} />
  <FormField label="Identification No./Medical Hospital ID:" name="patientId" width={120} />
  <FormField label="Age:" name="patientAge" width={40} />
  <FormField label="Weight(kg):" name="patientWeight" width={50} />
</div>
      <div style={s.row}>
        <div style={s.field}>
          <span style={s.label}>Sex:</span>
          <div style={{ display: "flex", gap: "8px" }}>
            <label style={s.checkRow}>
              <input
                type="radio"
                name="patientSex"
                value="Male"
                style={s.checkbox}
              />{" "}
              Male
            </label>
            <label style={s.checkRow}>
              <input
                type="radio"
                name="patientSex"
                value="Female"
                style={s.checkbox}
              />{" "}
              Female
            </label>
            <span style={{ fontSize: "9px" }}>
              — pregnant or on oral contraceptives?
            </span>
            <label style={s.checkRow}>
              <input
                type="radio"
                name="pregnant"
                value="Yes"
                style={s.checkbox}
              />{" "}
              Yes
            </label>
            <label style={s.checkRow}>
              <input
                type="radio"
                name="pregnant"
                value="No"
                style={s.checkbox}
              />{" "}
              No
            </label>
          </div>
        </div>
      </div>

      {/* ── B. SUSPECTED DRUG TABLE ── */}
      <div style={s.sectionHeader}>
        B. SUSPECTED DRUG(S)/VACCINE(S) / ALTERNATIVE MEDICINE (Tick applicable
        column)
      </div>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Drug Name (Brand/Generic)</th>
            <th style={s.th}>Manufacturer</th>
            <th style={s.th}>Batch/Lot No.</th>
            <th style={s.th}>Route of Administration</th>
            <th style={s.th}>Start Date</th>
            <th style={s.th}>Stop Date</th>
            <th style={s.th}>Prescribe/Given For</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((r) => (
            <tr key={r}>
              <td style={s.td}>
                <TableInput name={`drugName_${r}`} />
              </td>
              <td style={s.td}>
                <TableInput name={`manufacturer_${r}`} />
              </td>
              <td style={s.td}>
                <TableInput name={`batchLot_${r}`} />
              </td>
              <td style={s.td}>
                <TableInput name={`adminRoute_${r}`} />
              </td>
              <td style={s.td}>
                <TableInput name={`startDate_${r}`} />
              </td>
              <td style={s.td}>
                <TableInput name={`stopDate_${r}`} />
              </td>
              <td style={s.td}>
                <TableInput name={`prescribed_${r}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── C. SUSPECTED REACTION(S) ── */}
      <div style={s.sectionHeader}>
        C. SUSPECTED REACTION(S) (Include relevant test/laboratory results if
        available)
      </div>
      <div style={s.twoCol}>
        {/* Left col */}
        <div>
          <div style={s.subLabel}>
            1. Describe the Reaction(s) (use medical terminology)
          </div>
          <textarea
            name="reactionDescription"
            style={{ ...s.textarea, height: "44px" }}
          />
          <div style={{ ...s.row, marginTop: "4px" }}>
            <Field
              label="Date of onset of reaction:"
              name="reactionOnset"
              width={90}
            />
            <Field
              label="Date of recovery:"
              name="reactionRecovery"
              width={90}
            />
          </div>

          <div style={{ marginTop: "4px" }}>
            <div style={s.subLabel}>
              3. Other relevant history (e.g., diagnosis, allergies, Smoking,
              Alcohol, Renal/Liver Problems and any Existing Medical Problems)
            </div>
            <textarea
              name="medicalHistory"
              style={{ ...s.textarea, height: "40px" }}
            />
          </div>

          <div style={{ marginTop: "4px" }}>
            <div style={s.subLabel}>
              4. Relevant test/Laboratory data with Dates (include relevant
              results)
            </div>
            <textarea
              name="labData"
              style={{ ...s.textarea, height: "36px" }}
            />
          </div>
        </div>

        {/* Right col */}
        <div>
          <div style={s.subLabel}>
            2. Describe the outcome (Check all that apply)
          </div>
          <CheckItem
            label="Patient recovered without treatment"
            name="outcome"
            value="recovered_without_treatment"
          />
          <CheckItem
            label="Patient recovered with treatment"
            name="outcome"
            value="recovered_with_treatment"
          />
          <CheckItem
            label="Patient recovering"
            name="outcome"
            value="recovering"
          />
          <CheckItem
            label="Patient not recovered"
            name="outcome"
            value="not_recovered"
          />
          <CheckItem
            label="Fatal (date of death:___________)"
            name="outcome"
            value="fatal"
          />
          <CheckItem
            label="Reaction caused or prolonged hospitalisation"
            name="outcome"
            value="hospitalisation"
          />
          <CheckItem
            label="Reaction resulted in permanent disability"
            name="outcome"
            value="disability"
          />
          <CheckItem
            label="Congenital anomaly/birth defect"
            name="outcome"
            value="congenital_anomaly"
          />
          <CheckItem
            label="Life threatening"
            name="outcome"
            value="life_threatening"
          />
          <CheckItem
            label="Other (specify below):"
            name="outcome"
            value="other"
          />
          <textarea
            name="outcomeOther"
            style={{ ...s.textarea, height: "22px", marginTop: "2px" }}
          />

          <div style={{ marginTop: "6px" }}>
            <div style={s.subLabel}>5. Abate </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["Positive", "Negative", "Unknown", "N/A"].map((opt) => (
                <label key={opt} style={s.checkRow}>
                  <input
                    type="radio"
                    name="dechallenge"
                    value={opt}
                    style={s.checkbox}
                  />{" "}
                  {opt}
                </label>
              ))}
            </div>
            <div style={s.subLabel}>6. Reappearing</div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["Positive", "Negative", "Unknown", "N/A"].map((opt) => (
                <label key={opt} style={s.checkRow}>
                  <input
                    type="radio"
                    name="rechallenge"
                    value={opt}
                    style={s.checkbox}
                  />{" "}
                  {opt}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── D. OTHER CONCOMITANT DRUGS ── */}
      <div style={s.sectionHeader}>
        D. OTHER CONCOMITANT DRUG(S)/VACCINE(S)/ALTERNATIVE MEDICINE
      </div>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Medicine</th>
            <th style={s.th}>Route/Dose</th>
            <th style={s.th}>Indication</th>
            <th style={s.th}>Route of Administration</th>
            <th style={s.th}>Start Date</th>
            <th style={s.th}>Stop Date</th>
            <th style={s.th}>Prescribe/Given For</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2].map((r) => (
            <tr key={r}>
              <td style={s.td}>
                <TableInput name={`concomitantMedicine_${r}`} />
              </td>
              <td style={s.td}>
                <TableInput name={`concomitantRoute_${r}`} />
              </td>
              <td style={s.td}>
                <TableInput name={`concomitantIndication_${r}`} />
              </td>
              <td style={s.td}>
                <TableInput name={`concomitantAdmin_${r}`} />
              </td>
              <td style={s.td}>
                <TableInput name={`concomitantStart_${r}`} />
              </td>
              <td style={s.td}>
                <TableInput name={`concomitantStop_${r}`} />
              </td>
              <td style={s.td}>
                <TableInput name={`concomitantPrescribed_${r}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── E. SUSPECTED MEDICAL ADVICE ── */}
      <div style={s.sectionHeader}>
        E. SUSPECTED MEDICAL ADVICE (Fill this data where Homeopathic / Herbal
        only)
      </div>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Caution/Concern/Description</th>
            <th style={s.th}>Lot/Batch</th>
            <th style={s.th}>Manufacturer</th>
            <th style={s.th}>Route</th>
            <th style={s.th}>Identification/Type</th>
            <th style={s.th}>Serial No.</th>
            <th style={s.th}>ID number</th>
            <th style={s.th}> Implanted date</th>
            <th style={s.th}>Explanted date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <td key={i} style={s.td}>
                  <TableInput
                    name={`herbal_${["description", "batch", "manufacturer", "route", "identification", "serial", "id_number", "id_date","id_date"][i]}`}
                  />
                </td>
              ))}
          </tr>
        </tbody>
      </table>

      {/* ── F. REPORTER DETAILS ── */}
      <div style={s.sectionHeader}>F. REPORTER DETAILS</div>
<div style={s.twoCol}>
  <div>
    <div style={s.row}>
      <FormField label="Name:" name="reporterName" width={160} style={{ flex: 1 }} />
    </div>
    <div style={s.row}>
      <FormField label="Profession/Speciality:" name="reporterProfession" width={160} style={{ flex: 1 }} />
    </div>
    <div style={s.row}>
      <FormField label="Institution/Hospital:" name="reporterInstitution" width={160} style={{ flex: 1 }} />
    </div>
    <div style={s.row}>
      <FormField label="How do you wish to be contacted? Phone/Fax/Email:" name="reporterContact" width={160} style={{ flex: 1 }} />
    </div>
  </div>
  <div>
    <div style={s.row}>
      <FormField label="Professional Address:" name="reporterAddress" width={160} style={{ flex: 1 }} />
    </div>
    <div style={s.row}>
      <FormField label="" name="reporterAddressLine2" width={160} style={{ flex: 1 }} />
    </div>
    <div style={s.row}>
      <FormField label="Email:" name="reporterEmail" width={160} style={{ flex: 1 }} />
    </div>
    <div style={s.row}>
      <FormField label="Location/City:" name="reporterCity" width={100} />
      <FormField label="Country:" name="reporterCountry" width={80} />
    </div>
  </div>
</div>

      {/* Signature row */}
      <div style={s.signatureRow}>
        <Field label="Signature:" name="reporterSignature" width={140} />
        <Field label="Date:" name="reporterDate" width={100} />
      </div>

      {/* Footer note */}
      <div
        style={{
          ...s.noteText,
          marginTop: "6px",
          borderTop: "0.8px solid #000",
          paddingTop: "4px",
        }}
      >
        The information provided is confidential and will only be used for the
        purpose of reporting to the Country Licensing Authority.
      </div>
    </div>
  );
}
