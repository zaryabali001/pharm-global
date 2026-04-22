/* eslint-disable */
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/navigation';

interface Product {
  name: string;
  category: string;
  generic: string;
  form: string;
  reg: string;
  essential: boolean;
  image?: string;
  packSize?: string;
  description?: string;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const ALL_PRODUCTS: Product[] = [

  // ─── ANTI ALLERGICS ───────────────────────────────────────────────────────
  { name: 'Alergocit 5mg', category: 'ANTI ALLERGICS', generic: 'Levocetirizine 2HCl 5mg', form: 'Tablet', reg: '38935', essential: false, packSize: "10's, 20's", description: 'Each Film coated Tablet contains: Levocetrizine 2HCL 5mg.' },
  { name: 'Sebesta 10mg', category: 'ANTI ALLERGICS', generic: 'Ebastine 10mg', form: 'Tablet', reg: '24348', essential: false, packSize: "1x10's", description: 'Each tablet contains: Ebastine 10mg (JP Specs).' },
  { name: 'Sulprex 50mg', category: 'ANTI ALLERGICS', generic: '', form: 'Tablet', reg: '24348', essential: false, packSize: "2x10's", description: 'Each tablet contains: Levosulpiride 5mg (Innovator\'s Specs)' },
  { name: 'Sulprex 25mg ', category: 'ANTI ALLERGICS', generic: '', form: 'Tablet', reg: '24348', essential: false, packSize: "1*10's, 2X10's", description: 'Each tablet contains: Levosulpiride 25mg (Innovator\'s Specs)' },
  { name: 'Levozine 5mg', category: 'ANTI ALLERGICS', generic: 'Levocetirizine Dihydrochloride 5mg', form: 'Tablet', reg: '38129', essential: false, packSize: "10's", description: 'Each film coated tablet contains: Levocetrizine dihydrochloride....5mg.' },
  { name: 'Lodine 10mg', category: 'ANTI ALLERGICS', generic: 'Loratadine 10mg', form: 'Tablet', reg: '41738', essential: false, packSize: "10's", description: 'Each film coated tablet contains: Loratidine......10mg.' },
  // { name: 'Monokast 10mg', category: 'ANTI ALLERGICS', generic: 'Montelukast Sodium 10mg', form: 'Tablet', reg: '38131', essential: false, packSize: "14's", description: 'Monokast 10mg contains Montelukast, a leukotriene receptor antagonist. It is indicated for asthma prophylaxis and allergic rhinitis. Montelukast provides effective symptom control with once-daily dosing.' },

  // ─── CARDIOVASCULAR ──────────────────────────────────────────────────────
  { name: 'Rovast 5mg', category: 'CARDIOVASCULAR', generic: 'Rosuvastatin (as Calcium) 5mg', form: 'Tablet', reg: '54808', essential: false, packSize: "1x10's", description: 'Each tablet contains: Rosuvastatin (as Calcium) 5mg (USP Specification).' },
  { name: 'Rovast 10mg', category: 'CARDIOVASCULAR', generic: 'Rosuvastatin (as Calcium) 10mg', form: 'Tablet', reg: '54731', essential: false, packSize: "1x10's", description: 'Each tablet contains: Rosuvastatin (as Calcium) 10mg (USP Specification).' },
  { name: 'Rovast 20mg', category: 'CARDIOVASCULAR', generic: 'Rosuvastatin (as Calcium) 20mg', form: 'Tablet', reg: '54735', essential: false, packSize: "10's", description: 'Each tablet contains: Rosuvastatin (as Calcium) 20mg (USP Specification) .' },
  { name: 'Transolide 500mg', category: 'CARDIOVASCULAR', generic: ' Tranexamic Acid 500mg', form: 'Capsule', reg: '38938', essential: false, packSize: "2x10's, 5 x 10's", description: 'Each capsule contains: Tranexamic Acid 500mg' },
  { name: 'Transolide 500mg inj', category: 'CARDIOVASCULAR', generic: ' Tranexamic Acid 500mg', form: 'Injection', reg: '59436', essential: false, packSize: "5mlx10's", description: 'Each 5ml contains: Tranexamic acid(BP) 500mg(JP Specs)' },
  { name: 'Transolide 250mg ', category: 'CARDIOVASCULAR', generic: ' Tranexamic Acid 500mg', form: 'Capsules', reg: '038937', essential: false, packSize: "100's", description: 'Each Capsule Contains:Tranexamic Acid.....250mg ' },
  { name: 'Transolide 250mg inj ', category: 'CARDIOVASCULAR', generic: ' Tranexamic Acid 500mg', form: 'Injection', reg: '038938', essential: false, packSize: "50 ml", description: 'Each 5ml Contains: Tranexamic Acid.....250mg ' },

  // ─── STERILE ─────────────────────────────────────────────────────────────
  // { name: 'Transolide 250mg Capsules', category: 'STERILE', generic: 'Tranexamic Acid 250mg', form: 'Capsule', reg: '038937', essential: false, packSize: "100's", description: 'Transolide 250mg Capsules offer lower-dose Tranexamic Acid for maintenance therapy and prophylactic use. Tranexamic Acid effectively reduces blood loss in various clinical settings by inhibiting plasminogen activation.' },
  // { name: 'Transolide 250mg Injection', category: 'STERILE', generic: 'Tranexamic Acid 250mg', form: 'Injection', reg: '038938', essential: false, packSize: '50ml', description: 'Transolide 250mg Injection provides Tranexamic Acid by the intravenous route for surgical prophylaxis and acute bleeding episodes. The injection ensures immediate antifibrinolytic effects.' },
  // { name: 'Transolide 500mg Capsules', category: 'STERILE', generic: 'Tranexamic Acid 500mg', form: 'Capsule', reg: '38938', essential: false, packSize: "2x10's, 5x10's", description: 'Transolide 500mg Capsules contain Tranexamic Acid, an antifibrinolytic agent that prevents clot breakdown. It is indicated for the treatment of menorrhagia, hereditary angioedema, and bleeding associated with surgical procedures.' },
  // { name: 'Transolide 500mg Injection', category: 'STERILE', generic: 'Tranexamic Acid (BP) 500mg', form: 'Injection', reg: '59436', essential: true, packSize: "5mlx10's", description: 'Transolide 500mg Injection provides parenteral Tranexamic Acid for acute bleeding situations. This formulation is essential for emergency treatment of haemorrhage in trauma, surgery, and obstetrics. The intravenous route ensures rapid therapeutic effect.' },

  // ─── NEURO ───────────────────────────────────────────────────────────────
  { name: 'Aloram 0.25mg', category: 'NEURO', generic: 'Alprazolam 0.25mg', form: 'Tablet', reg: '41929', essential: false, packSize: "3x10's", description: 'Aloram 0.25mg contains Alprazolam, a benzodiazepine that enhances GABAergic neurotransmission. It is indicated for the short-term treatment of anxiety disorders and panic attacks. Alprazolam provides rapid anxiolytic effects with good tolerability.' },
  { name: 'Aloram 0.5mg', category: 'NEURO', generic: 'Alprazolam 0.5mg', form: 'Tablet', reg: '41930', essential: false, packSize: "3x10's", description: 'Aloram 0.5mg offers moderate-dose Alprazolam for anxiety management. This formulation provides balanced anxiolytic effects suitable for various anxiety disorders. Alprazolam ensures effective symptom control with minimal sedation.' },
  { name: 'Aloram 1mg', category: 'NEURO', generic: 'Alprazolam 1mg', form: 'Tablet', reg: '41931', essential: false, packSize: "3x10's", description: 'Aloram 1mg delivers maximum dose Alprazolam for severe anxiety and panic disorders. This formulation is indicated for patients with refractory symptoms requiring potent benzodiazepine therapy.' },
  { name: 'Anzonil 3mg', category: 'NEURO', generic: 'Bromazepam 3mg', form: 'Tablet', reg: '41540', essential: false, packSize: "3x10's", description: 'Anzonil 3mg contains Bromazepam, a benzodiazepine with anxiolytic properties. It is indicated for the short-term treatment of anxiety states and tension. Bromazepam provides effective anxiety relief with a good safety profile.' },
  { name: 'Citolin 500mg', category: 'NEURO', generic: 'Citicoline Sodium eq. to Citicoline 500mg', form: 'Tablet', reg: '48336', essential: false, packSize: "10's", description: 'Citolin 500mg contains Citicoline, a naturally occurring neuroprotective compound that supports brain function and neural repair. It is used for cognitive enhancement and neuroprotection in stroke recovery and neurodegenerative disorders.' },
  { name: 'Deroxat CR 12.5mg', category: 'NEURO', generic: 'Paroxetine (as HCl) 12.5mg', form: 'Tablet', reg: '69947', essential: false, packSize: "30's", description: 'Deroxat CR 12.5mg contains Paroxetine in a controlled-release formulation, a selective serotonin reuptake inhibitor (SSRI). It is indicated for major depressive disorder, obsessive-compulsive disorder, and anxiety disorders. The controlled-release mechanism provides sustained therapeutic levels with reduced side effects.' },
  { name: 'Deroxat CR 25mg', category: 'NEURO', generic: 'Paroxetine (as HCl) 25mg', form: 'Tablet', reg: '69949', essential: false, packSize: "31's", description: 'Deroxat CR 25mg offers higher-dose Paroxetine for enhanced antidepressant effect. This formulation is suitable for patients with moderate to severe depression requiring more aggressive therapy.' },
  { name: 'Esolex 5mg', category: 'NEURO', generic: 'Escitalopram (as oxalate) 5mg', form: 'Tablet', reg: '38941', essential: false, packSize: "14's", description: 'Esolex 5mg provides lower-dose Escitalopram for initial therapy or sensitive patients. This formulation is ideal for gradual dose titration. Escitalopram, the S-enantiomer of Citalopram, offers effective depression and anxiety management with minimal side effects.' },
  { name: 'Esolex 10mg', category: 'NEURO', generic: 'Escitalopram (as oxalate) 10mg', form: 'Tablet', reg: '38940', essential: false, packSize: "14's", description: 'Esolex 10mg contains standard-dose Escitalopram, a selective serotonin reuptake inhibitor (SSRI). It is indicated for major depressive disorder and generalised anxiety disorder. Escitalopram provides potent antidepressant effects with excellent tolerability.' },
  { name: 'Citolin 250mg Injection', category: 'NEURO', generic: 'Citicoline (as Citicoline Sodium) 250mg', form: 'Injection', reg: '24082', essential: false, packSize: "1x5's", description: 'Citolin 250mg Injection provides parenteral Citicoline for enhanced bioavailability and rapid therapeutic effect. This formulation is indicated for acute neurological conditions requiring immediate neuroprotection and cognitive support.' },
  { name: 'Citolin 1gm Injection', category: 'NEURO', generic: 'Citicoline Sodium eq. to Citicoline 1000mg', form: 'Injection', reg: '30541', essential: false, packSize: "4mlx1's", description: 'Citolin 1gm Injection offers high-dose Citicoline for severe neurological conditions such as acute stroke and traumatic brain injury. The concentrated formulation provides maximum therapeutic neuroprotective activity.' },
  { name: 'Peridal 1mg', category: 'NEURO', generic: 'Risperidone 1mg', form: 'Tablet', reg: '23861', essential: true, packSize: "3x6's", description: 'Peridal 1mg contains Risperidone, an atypical antipsychotic that antagonises dopamine D2 and serotonin 5-HT2A receptors. It is indicated for schizophrenia, bipolar disorder, and irritability associated with autism.' },
  { name: 'Peridal 2mg', category: 'NEURO', generic: 'Risperidone 2mg', form: 'Tablet', reg: '23862', essential: true, packSize: "3x6's", description: 'Peridal 2mg offers intermediate-dose Risperidone for balanced antipsychotic therapy. This formulation provides effective symptom control for schizophrenia and related disorders.' },
  { name: 'Peridal 3mg', category: 'NEURO', generic: 'Risperidone 3mg', form: 'Tablet', reg: '23863', essential: true, packSize: "3x6's", description: 'Peridal 3mg delivers higher-dose Risperidone for severe psychotic symptoms. This formulation is indicated for refractory schizophrenia and acute manic episodes.' },
  { name: 'Peridal 4mg', category: 'NEURO', generic: 'Risperidone 4mg', form: 'Tablet', reg: '23864', essential: true, packSize: "3x6's", description: 'Peridal 4mg provides maximum-dose Risperidone for intensive antipsychotic therapy. This formulation is essential for severe, treatment-resistant psychosis.' },
  { name: 'Piractim 800mg', category: 'NEURO', generic: 'Piracetam 800mg', form: 'Tablet', reg: '30478', essential: false, packSize: "3x10's", description: 'Piractim 800mg contains Piracetam, a nootropic agent that enhances cognitive function and cerebral metabolism. It is indicated for cognitive impairment, vertigo, and as adjunctive therapy in cortical myoclonus.' },
  { name: 'Piractim Syrup', category: 'NEURO', generic: 'Piracetam 1g/5ml', form: 'Syrup', reg: '38406', essential: false, packSize: '120ml', description: 'Piractim Syrup provides Piracetam in a liquid formulation for flexible dosing. The 1g/5ml concentration allows precise dose adjustment. This formulation is particularly suitable for paediatric patients and adults who prefer liquid medication.' },
  { name: 'Duron 20mg', category: 'NEURO', generic: 'Duloxetine (as HCl pellets) 20mg', form: 'Capsule', reg: '69895', essential: false, packSize: "10's, 14's, 28's", description: 'Duron 20mg contains Duloxetine, a serotonin-norepinephrine reuptake inhibitor (SNRI) used for major depressive disorder, generalised anxiety disorder, and neuropathic pain. It works by increasing levels of serotonin and norepinephrine in the brain.' },
  { name: 'Duron 30mg', category: 'NEURO', generic: 'Duloxetine (as HCl pellets) 30mg', form: 'Capsule', reg: '69896', essential: false, packSize: "10's, 20's", description: 'Duron 30mg provides higher-dose Duloxetine for enhanced therapeutic effect in depression and anxiety disorders. The enteric-coated capsule ensures optimal absorption and tolerability.' },
  { name: 'Duron 60mg', category: 'NEURO', generic: 'Duloxetine (as HCl pellets) 60mg', form: 'Capsule', reg: '069897', essential: false, packSize: "10's, 14's, 28's", description: 'Duron 60mg provides maximum-dose Duloxetine for severe depression and neuropathic pain. This formulation offers robust antidepressant and analgesic effects with once-daily dosing.' },
  { name: 'Ecogab 50mg', category: 'NEURO', generic: 'Pregabalin 50mg', form: 'Capsule', reg: '79416', essential: false, packSize: "14's", description: 'Ecogab 50mg contains Pregabalin, an anticonvulsant that binds to voltage-gated calcium channels in the central nervous system. It is indicated for neuropathic pain, fibromyalgia, and adjunctive therapy for partial-onset seizures.' },
  { name: 'Ecogab 75mg', category: 'NEURO', generic: 'Pregabalin 75mg', form: 'Capsule', reg: '79417', essential: false, packSize: "14's", description: 'Ecogab 75mg offers intermediate-dose Pregabalin for balanced therapeutic effect. This formulation is particularly effective for diabetic neuropathy and postherpetic neuralgia.' },
  { name: 'Eppra 250mg', category: 'NEURO', generic: 'Levetiracetam 250mg', form: 'Tablet', reg: '66485', essential: true, packSize: "30's, 10's", description: 'Eppra 250mg contains Levetiracetam, a pyrrolidine derivative that modulates synaptic neurotransmitter release. It is indicated as adjunctive therapy for partial-onset and myoclonic seizures. Levetiracetam offers excellent tolerability with minimal drug interactions.' },
  { name: 'Eppra 500mg', category: 'NEURO', generic: 'Levetiracetam 500mg', form: 'Tablet', reg: '66486', essential: true, packSize: "30's, 10's", description: 'Eppra 500mg provides higher-dose Levetiracetam for optimal seizure control. This formulation is suitable for monotherapy and adjunctive treatment of epilepsy.' },
  { name: 'Eppra 500mg/5ml Injection', category: 'NEURO', generic: 'Levetiracetam 500mg', form: 'Injection', reg: '116615', essential: true, packSize: "1's vial", description: 'Eppra 500mg/5ml Injection offers parenteral Levetiracetam for patients unable to take oral medication. This formulation is essential for status epilepticus and acute seizure management in hospitalised patients.' },
  { name: 'Mibeglo 25mg', category: 'NEURO', generic: 'Mirabegron 25mg', form: 'Tablet', reg: '109401', essential: false, packSize: "10's, 20's, 30's", description: 'Mibeglo 25mg contains Mirabegron, a beta-3 adrenergic agonist that relaxes the detrusor muscle of the bladder. It is indicated for overactive bladder with symptoms of urge urinary incontinence, urgency, and frequency. Mirabegron provides effective symptom relief without anticholinergic side effects.' },
  { name: 'Mibeglo 50mg', category: 'NEURO', generic: 'Mirabegron 50mg', form: 'Tablet', reg: '109402', essential: false, packSize: "10's, 20's, 30's", description: 'Mibeglo 50mg offers higher-dose Mirabegron for enhanced bladder relaxation. This formulation is suitable for patients with severe overactive bladder symptoms requiring more potent therapy.' },
  { name: 'Piractim 1gm Injection', category: 'NEURO', generic: 'Piracetam 1gm', form: 'Injection', reg: '32039', essential: false, packSize: "12x5ml", description: 'Piractim 1gm Injection offers parenteral Piracetam for patients unable to take oral medication or in acute neurological conditions requiring immediate cognitive support.' },
  { name: 'Sulprex 25mg', category: 'NEURO', generic: 'Levosulpiride 25mg', form: 'Tablet', reg: '66680', essential: false, packSize: "1x10's, 2x10's", description: 'Sulprex 25mg contains Levosulpiride, the active enantiomer of sulpiride, with antipsychotic and prokinetic properties. It is indicated for dyspepsia, gastro-oesophageal reflux, and psychotic disorders.' },
  { name: 'Sulprex 50mg', category: 'NEURO', generic: 'Levosulpiride 50mg', form: 'Tablet', reg: '54732', essential: false, packSize: "2x10's", description: 'Sulprex 50mg offers higher-dose Levosulpiride for enhanced therapeutic effect. This formulation is particularly effective for severe dyspeptic symptoms and moderate psychotic episodes.' },

  // ─── GIT ─────────────────────────────────────────────────────────────────
  { name: 'Aptizole 40mg', category: 'GIT', generic: 'Pantoprazole Sodium sesquihydrate eq. to Pantoprazole 40mg', form: 'Tablet', reg: '33392', essential: false, packSize: "14's", description: 'Aptizole 40mg contains Pantoprazole, a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+-ATPase enzyme. It is indicated for erosive oesophagitis, GERD, and pathological hypersecretory conditions. Pantoprazole provides long-lasting acid suppression with once-daily dosing.' },
  { name: 'Dudex 30mg', category: 'GIT', generic: 'Dexlansoprazole 30mg', form: 'Capsule', reg: '87769', essential: false, packSize: "30's", description: 'Dudex 30mg contains Dexlansoprazole, a dual delayed-release PPI. The innovative dual-release mechanism provides initial release in the duodenum followed by a second release hours later. It is indicated for heartburn associated with GERD and healing of erosive oesophagitis.' },
  { name: 'Dudex 60mg', category: 'GIT', generic: 'Dexlansoprazole 60mg', form: 'Capsule', reg: '87770', essential: false, packSize: "30's", description: 'Dudex 60mg provides the highest strength Dexlansoprazole for maximum acid suppression. The dual delayed-release technology ensures prolonged therapeutic effect, making it particularly effective for severe GERD and refractory acid-related disorders.' },
  { name: 'Esocue 40mg Injection', category: 'GIT', generic: 'Esomeprazole Sodium eq. to Esomeprazole 40mg', form: 'Injection', reg: '87349', essential: false, packSize: "1's", description: 'Esocue 40mg Injection contains Esomeprazole, the S-isomer of Omeprazole, for patients requiring intravenous PPI therapy. It is used for GERD and prevention of rebleeding following endoscopic treatment of bleeding ulcers.' },
  { name: 'Fadiphine 10mg', category: 'GIT', generic: 'Famotidine 10mg', form: 'Tablet', reg: '20259', essential: false, packSize: "2x10's", description: 'Fadiphine 10mg contains Famotidine, a histamine H2-receptor antagonist that inhibits gastric acid secretion. It is used for GERD, peptic ulcer disease, and other conditions where reduction of gastric acid is beneficial.' },
  { name: 'Fadiphine 20mg', category: 'GIT', generic: 'Famotidine 20mg', form: 'Tablet', reg: '16830', essential: false, packSize: "20's", description: 'Fadiphine 20mg is a higher-strength Famotidine formulation for more severe acid-related disorders. It competitively inhibits histamine at H2 receptors of the parietal cells, reducing both basal and stimulated gastric acid secretion.' },
  { name: 'Fadiphine 40mg', category: 'GIT', generic: 'Famotidine 40mg', form: 'Tablet', reg: '16831', essential: false, packSize: "10's", description: 'Fadiphine 40mg offers maximum-strength Famotidine for severe acid suppression. This formulation is designed for erosive oesophagitis and Zollinger-Ellison syndrome, providing rapid and sustained relief.' },
  { name: 'Globiphlor 80/80mg', category: 'GIT', generic: 'Hydrated Phloroglucinol 80mg + Trimethylphloroglucinol 80mg', form: 'Tablet', reg: '107001', essential: false, packSize: "30's", description: 'Globiphlor 80/80mg combines two antispasmodic agents that relax smooth muscle in the gastrointestinal tract. It is effective for irritable bowel syndrome, functional dyspepsia, and acute spasmodic pain in the digestive tract.' },
  { name: 'Globiphlor 40/0.04mg Injection', category: 'GIT', generic: 'Dihydrated Phloroglucinol 40mg + Trimethylphloroglucinol 0.04mg', form: 'Injection', reg: '107002', essential: false, packSize: "10's", description: 'Globiphlor Injection provides parenteral antispasmodic therapy for acute severe abdominal pain, biliary colic, and renal colic. The intravenous or intramuscular route ensures quick onset of action.' },
  { name: 'Glodium 2mg', category: 'GIT', generic: 'Loperamide HCl 2mg', form: 'Capsule', reg: '77816', essential: true, packSize: "6x10's", description: 'Glodium 2mg contains Loperamide HCl, an opioid receptor agonist that slows intestinal motility and reduces fluid secretion in the gut. It is indicated for acute and chronic diarrhoea.' },
  { name: 'Mediclop Injection', category: 'GIT', generic: 'Metoclopramide HCl 10mg', form: 'Injection', reg: '33759', essential: true, packSize: "2mlx10's, 2mlx20's", description: 'Mediclop Injection contains Metoclopramide HCl, a central and peripheral dopamine antagonist that enhances gastrointestinal motility. It is indicated for prevention of postoperative nausea and vomiting and symptomatic gastro-oesophageal reflux.' },
  { name: 'Miso 200mcg', category: 'GIT', generic: 'Misoprostol 200mcg', form: 'Tablet', reg: '66326', essential: true, packSize: "10's, 28's", description: 'Miso 200mcg contains Misoprostol, a synthetic prostaglandin E1 analog that protects the gastric mucosa and reduces gastric acid secretion. It is primarily used for prevention of NSAID-induced gastric ulcers.' },
  { name: 'Pelton 10mg', category: 'GIT', generic: 'Domperidone 10mg', form: 'Tablet', reg: '16836', essential: false, packSize: "5x10's, 10x10's", description: 'Pelton 10mg contains Domperidone, a dopamine antagonist that acts as a prokinetic agent. It enhances gastrointestinal motility and facilitates gastric emptying, making it effective for treating nausea, vomiting, and dyspepsia.' },
  { name: 'Pelton-C', category: 'GIT', generic: 'Domperidone Maleate 19.10mg + Cinnarizine 20mg', form: 'Tablet', reg: '32891', essential: false, packSize: "5x10's, 10x10's, 7x10's", description: 'Pelton-C combines Domperidone with Cinnarizine for comprehensive treatment of vestibular and gastrointestinal symptoms. It is indicated for vertigo, motion sickness, and dyspepsia.' },
  { name: 'Pelton-V', category: 'GIT', generic: 'Domperidone maleate 12.72mg', form: 'Tablet', reg: '22328', essential: false, packSize: "5x10's, 10x10's, 70's", description: 'Pelton-V contains Domperidone maleate for enhanced prokinetic effects. This formulation is indicated for nausea, vomiting, and gastrointestinal motility disorders, providing effective gastric emptying and symptom relief.' },
  { name: 'Pelton Suspension', category: 'GIT', generic: 'Domperidone 5mg/5ml', form: 'Suspension', reg: '24801', essential: false, packSize: '120ml', description: 'Pelton Suspension provides Domperidone in a liquid formulation suitable for patients who have difficulty swallowing tablets, including paediatric patients. The 5mg/5ml concentration allows for flexible dosing.' },
  { name: 'Pelton V Suspension', category: 'GIT', generic: 'Domperidone (as maleate) 5mg/5ml', form: 'Suspension', reg: '30007', essential: false, packSize: '120ml', description: 'Pelton V Suspension offers improved palatability Domperidone formulation for patients of all age groups requiring prokinetic therapy.' },
  { name: 'Pelton-C Suspension', category: 'GIT', generic: 'Cinnarizine 10mg + Domperidone (as maleate) 5mg/5ml', form: 'Suspension', reg: '47730', essential: false, packSize: '120ml, 60ml', description: 'Pelton-C Suspension combines Cinnarizine and Domperidone for vestibular and gastrointestinal symptom relief. This formulation is indicated for vertigo with associated nausea and motion sickness.' },
  { name: 'Protole 20mg Capsules', category: 'GIT', generic: 'Omeprazole (enteric coated pellets) 20mg', form: 'Capsule', reg: '114170', essential: true, packSize: "14's", description: 'Protole 20mg Capsules contain enteric-coated Omeprazole pellets that irreversibly block the H+/K+-ATPase enzyme. It is used for duodenal and gastric ulcers, GERD, and erosive oesophagitis.' },
  { name: 'Protole 40mg Capsules', category: 'GIT', generic: 'Omeprazole 40mg', form: 'Capsule', reg: '66482', essential: true, packSize: "2x7's, 10's, 14x4's", description: 'Protole 40mg Capsules provide higher-dose Omeprazole for more severe acid-related conditions including refractory ulcers and hypersecretory states.' },
  { name: 'Protole 40mg Injection', category: 'GIT', generic: 'Omeprazole sodium eq. to Omeprazole 40mg', form: 'Injection', reg: '87348', essential: true, packSize: "1's", description: 'Protole 40mg Injection is a sterile parenteral Omeprazole formulation for intravenous administration. It is indicated for patients with GERD unable to take oral medication and for prevention of rebleeding in bleeding peptic ulcers.' },
  { name: 'Rapid 20mg', category: 'GIT', generic: 'Omeprazole 20mg + Sodium Bicarbonate 1100mg', form: 'Capsule', reg: '60806', essential: false, packSize: "10's, 14's", description: 'Rapid 20mg combines Omeprazole with Sodium Bicarbonate for enhanced acid suppression and faster onset. The bicarbonate provides immediate acid neutralisation while Omeprazole inhibits further acid production.' },
  { name: 'Rapid 40mg', category: 'GIT', generic: 'Omeprazole 40mg + Sodium Bicarbonate 1100mg', form: 'Capsule', reg: '60807', essential: false, packSize: "10's, 2x7's", description: 'Rapid 40mg offers higher-strength combination therapy with Omeprazole 40mg and Sodium Bicarbonate for severe GERD and erosive oesophagitis, providing both immediate and sustained acid control.' },
  { name: 'Vonoglob 10mg', category: 'GIT', generic: 'Vonoprazan Fumarate eq. to Vonoprazan 10mg', form: 'Tablet', reg: '118775', essential: false, packSize: "14's", description: 'Vonoglob 10mg contains Vonoprazan, a potassium-competitive acid blocker (P-CAB) that provides potent and sustained acid suppression. Unlike traditional PPIs, Vonoprazan inhibits acid secretion by competitively blocking the potassium-binding site of H+/K+-ATPase.' },
  { name: 'Vonoglob 20mg', category: 'GIT', generic: 'Vonoprazan Fumarate eq. to Vonoprazan 20mg', form: 'Tablet', reg: '118776', essential: false, packSize: "14's", description: 'Vonoglob 20mg provides higher-dose Vonoprazan for enhanced acid suppression in refractory cases. The P-CAB mechanism offers superior acid control with faster onset compared to traditional proton pump inhibitors.' },

  // ─── STEROIDAL ───────────────────────────────────────────────────────────
  { name: 'Begent Cream', category: 'STEROIDAL', generic: 'Betamethasone Dipropionate 0.064% + Gentamicin Sulphate 1.7mg/g', form: 'Cream', reg: '63187', essential: true, packSize: '15gm', description: 'Begent Cream combines Betamethasone, a potent corticosteroid, with Gentamicin, an aminoglycoside antibiotic. This topical formulation is indicated for inflammatory skin conditions with secondary bacterial infection, providing both anti-inflammatory and antibacterial effects.' },

  // ─── ANTIBIOTICS ─────────────────────────────────────────────────────────
  { name: 'Cialox 500mg', category: 'ANTIBIOTICS', generic: 'Ciprofloxacin (as HCl) 500mg', form: 'Tablet', reg: '41061', essential: false, packSize: "10's", description: 'Cialox 500mg contains Ciprofloxacin, a fluoroquinolone antibiotic with broad-spectrum activity against Gram-negative and some Gram-positive bacteria. It is indicated for urinary tract, respiratory tract, skin, and gastrointestinal infections.' },
  { name: 'Cure-B 0.5mg', category: 'ANTIBIOTICS', generic: 'Entecavir (as Monohydrate) 0.5mg', form: 'Tablet', reg: '63497', essential: true, packSize: "3x10's", description: 'Cure-B 0.5mg contains Entecavir, a nucleoside analog reverse transcriptase inhibitor used for the treatment of chronic hepatitis B virus (HBV) infection. It inhibits HBV DNA polymerase, reducing viral replication with a low resistance profile.' },
  { name: 'Cure-C Forte', category: 'ANTIBIOTICS', generic: 'Sofosbuvir 400mg + Velpatasvir 100mg', form: 'Tablet', reg: '97677', essential: true, packSize: "28's", description: 'Cure-C Forte combines Sofosbuvir and Velpatasvir for the treatment of chronic hepatitis C virus (HCV) infection. This pangenotypic regimen offers high cure rates across all HCV genotypes with a favourable safety profile.' },
  { name: 'Falcitrin Injection', category: 'ANTIBIOTICS', generic: 'Artemether 80mg/ml', form: 'Injection', reg: '56277', essential: false, packSize: "1mlx1's, 1mlx6's", description: 'Falcitrin Injection contains Artemether, an artemisinin derivative used for the treatment of severe malaria. It rapidly reduces parasitaemia and is essential for emergency treatment of complicated falciparum malaria.' },
  { name: 'Fungicure 150mg', category: 'ANTIBIOTICS', generic: 'Fluconazole 150mg', form: 'Capsule', reg: '24808', essential: true, packSize: "1's, 4's", description: 'Fungicure 150mg contains Fluconazole, a triazole antifungal with excellent oral bioavailability. It is indicated for vaginal candidiasis, oropharyngeal candidiasis, and cryptococcal meningitis, offering convenient single-dose therapy for many fungal infections.' },
  { name: 'Glopez 1gm Injection', category: 'ANTIBIOTICS', generic: 'Cefoperazone (as Sodium) 500mg + Sulbactam (as Sodium) 500mg', form: 'Injection', reg: '42554', essential: false, packSize: 'Vial', description: 'Glopez 1gm Injection combines Cefoperazone, a third-generation cephalosporin, with Sulbactam, a beta-lactamase inhibitor. This combination extends the spectrum to include beta-lactamase-producing organisms, indicated for intra-abdominal, urinary tract, and respiratory infections.' },
  { name: 'Glopez 2gm Injection', category: 'ANTIBIOTICS', generic: 'Cefoperazone (as Sodium) 1000mg + Sulbactam (as Sodium) 1000mg', form: 'Injection', reg: '42555', essential: false, packSize: 'Vial', description: 'Glopez 2gm Injection delivers double-strength combination therapy for severe nosocomial infections and polymicrobial sepsis, providing enhanced antibacterial activity against resistant pathogens.' },
  { name: 'Levaq 250mg', category: 'ANTIBIOTICS', generic: 'Levofloxacin (as hemihydrate) 250mg', form: 'Tablet', reg: '66322', essential: true, packSize: "10's", description: 'Levaq 250mg contains Levofloxacin, the L-isomer of Ofloxacin with enhanced antibacterial activity. It is indicated for community-acquired pneumonia, acute bacterial sinusitis, complicated urinary tract infections, and skin infections.' },
  { name: 'Levaq 500mg', category: 'ANTIBIOTICS', generic: 'Levofloxacin (as hemihydrate) 500mg', form: 'Tablet', reg: '66323', essential: true, packSize: "10's", description: 'Levaq 500mg provides higher-dose Levofloxacin for severe infections including nosocomial pneumonia, complicated skin infections, and chronic bacterial prostatitis.' },
  { name: 'Lincolide 600mg Injection', category: 'ANTIBIOTICS', generic: 'Lincomycin (as HCl) 600mg', form: 'Injection', reg: '28147', essential: false, packSize: "2mlx1's, 2mlx10's, 2mlx25's, 2mlx50's", description: 'Lincolide 600mg Injection contains Lincomycin, a lincosamide antibiotic effective against anaerobic bacteria and some Gram-positive aerobes. It is indicated for serious infections, particularly in patients allergic to penicillin, with good tissue penetration for bone and joint infections.' },
  { name: 'Linzy 600mg', category: 'ANTIBIOTICS', generic: 'Linezolid 600mg', form: 'Tablet', reg: '63415', essential: true, packSize: "12's", description: 'Linzy 600mg contains Linezolid, an oxazolidinone antibiotic effective against Gram-positive bacteria including MRSA and VRE. It is indicated for nosocomial pneumonia, complicated skin and soft tissue infections, and vancomycin-resistant Enterococcus faecium infections.' },
  { name: 'Maxophine 100mg/5ml Suspension', category: 'ANTIBIOTICS', generic: 'Cefixime 100mg/5ml', form: 'Suspension', reg: '30553', essential: true, packSize: '30ml, 60ml', description: 'Maxophine 100mg/5ml Suspension contains Cefixime, a third-generation cephalosporin antibiotic. The 100mg/5ml concentration allows for flexible paediatric dosing. It is indicated for otitis media, pharyngitis, urinary tract infections, and uncomplicated gonorrhoea.' },
  { name: 'Maxophine Plus 200mg/5ml Suspension', category: 'ANTIBIOTICS', generic: 'Cefixime (as trihydrate) 200mg/5ml', form: 'Suspension', reg: '54728', essential: true, packSize: '30ml', description: 'Maxophine Plus 200mg/5ml Suspension provides higher-concentration Cefixime for enhanced therapeutic effect, particularly useful for children requiring higher doses or those with resistant infections.' },
  { name: 'Maxophine 200mg Capsules', category: 'ANTIBIOTICS', generic: 'Cefixime (as trihydrate) 200mg', form: 'Capsule', reg: '56623', essential: true, packSize: "10's", description: 'Maxophine 200mg Capsules offer adult dosing of Cefixime for various bacterial infections including common respiratory and urinary pathogens.' },
  { name: 'Maxophine 400mg Capsules', category: 'ANTIBIOTICS', generic: 'Cefixime 400mg', form: 'Capsule', reg: '30562', essential: true, packSize: "1x6's, 5's", description: 'Maxophine 400mg Capsules deliver high-dose Cefixime for severe or resistant infections, including complicated urinary tract infections and gonorrhoea.' },
  { name: 'Merem 500mg Injection', category: 'ANTIBIOTICS', generic: 'Meropenem 500mg', form: 'Injection', reg: '38073', essential: true, packSize: 'Vial', description: 'Merem 500mg Injection contains Meropenem, a carbapenem antibiotic with broad-spectrum activity against Gram-negative, Gram-positive, and anaerobic bacteria. It is indicated for complicated intra-abdominal infections, nosocomial pneumonia, and meningitis.' },
  { name: 'Merem 1gm Injection', category: 'ANTIBIOTICS', generic: 'Meropenem 1gm', form: 'Injection', reg: '38139', essential: true, packSize: "1's", description: 'Merem 1gm Injection provides high-dose Meropenem for severe infections and empirical therapy in critically ill patients with multi-drug resistant infections.' },
  { name: 'Nafcin 250mg', category: 'ANTIBIOTICS', generic: 'Ciprofloxacin HCl eq. to Ciprofloxacin 250mg', form: 'Tablet', reg: '25576', essential: false, packSize: "10's", description: 'Nafcin 250mg provides lower-dose Ciprofloxacin suitable for uncomplicated urinary tract infections and mild respiratory infections.' },
  { name: 'Nafcin 500mg', category: 'ANTIBIOTICS', generic: 'Ciprofloxacin HCl eq. to Ciprofloxacin 500mg', form: 'Tablet', reg: '25577', essential: false, packSize: "10's", description: 'Nafcin 500mg contains standard-dose Ciprofloxacin offering broad-spectrum coverage against urinary tract pathogens, gastrointestinal bacteria, and respiratory organisms.' },
  { name: 'Norbac 0.25gm IM', category: 'ANTIBIOTICS', generic: 'Ceftriaxone Sodium eq. to Ceftriaxone 250mg', form: 'Injection', reg: '25928', essential: true, packSize: '1 vial, 7 Vials', description: 'Norbac 0.25gm IM contains Ceftriaxone, a third-generation cephalosporin with broad-spectrum activity. It is effective for community-acquired infections and surgical prophylaxis via the intramuscular route.' },
  { name: 'Norbac 0.5gm IM', category: 'ANTIBIOTICS', generic: 'Ceftriaxone Sodium eq. to Ceftriaxone 500mg', form: 'Injection', reg: '25929', essential: true, packSize: '1 vial, 7 Vials', description: 'Norbac 0.5gm IM provides standard-dose Ceftriaxone for intramuscular administration in various bacterial infections.' },
  { name: 'Norbac 1.0gm IM', category: 'ANTIBIOTICS', generic: 'Ceftriaxone Sodium eq. to Ceftriaxone 1000mg', form: 'Injection', reg: '25930', essential: true, packSize: '1 vial, 7 Vials', description: 'Norbac 1.0gm IM offers higher-dose Ceftriaxone for severe infections requiring aggressive antibiotic therapy via the intramuscular route.' },
  { name: 'Norbac 250mg IV', category: 'ANTIBIOTICS', generic: 'Ceftriaxone Sodium USP eq. to Ceftriaxone 250mg', form: 'Injection', reg: '33391', essential: true, packSize: "1's", description: 'Norbac 250mg IV provides intravenous Ceftriaxone for patients requiring parenteral antibiotic therapy with complete and rapid absorption.' },
  { name: 'Norbac 500mg IV', category: 'ANTIBIOTICS', generic: 'Ceftriaxone Sodium USP eq. to Ceftriaxone 500mg', form: 'Injection', reg: '33792', essential: true, packSize: "1's", description: 'Norbac 500mg IV delivers intermediate-dose Ceftriaxone intravenously for moderate to severe infections in hospitalised patients.' },
  { name: 'Norbac 1gm IV', category: 'ANTIBIOTICS', generic: 'Ceftriaxone Sodium USP eq. to Ceftriaxone 1000mg', form: 'Injection', reg: '33793', essential: true, packSize: "1's", description: 'Norbac 1gm IV offers high-dose intravenous Ceftriaxone for severe systemic infections, ensuring 100% bioavailability and therapeutic drug levels.' },
  { name: 'Norbac 2gm IV', category: 'ANTIBIOTICS', generic: 'Ceftriaxone (as sodium) 2gm', form: 'Injection', reg: '94175', essential: true, packSize: "1's", description: 'Norbac 2gm IV provides the highest-dose Ceftriaxone for life-threatening infections including severe sepsis, meningitis, and multi-drug resistant infections.' },
  { name: 'Phusilan Cream', category: 'ANTIBIOTICS', generic: 'Fusidic Acid 20mg/g', form: 'Cream', reg: '26991', essential: false, packSize: '5gm, 15gm', description: 'Phusilan Cream contains Fusidic Acid, a steroidal antibiotic effective against Gram-positive bacteria including Staphylococcus and Streptococcus species. It is indicated for impetigo, infected eczema, and other superficial skin infections.' },
  { name: 'Phusilan-H Cream', category: 'ANTIBIOTICS', generic: 'Fusidic Acid 20mg + Hydrocortisone Acetate 10mg/g', form: 'Cream', reg: '24081', essential: false, packSize: '5gm, 15gm', description: 'Phusilan-H Cream combines Fusidic Acid with Hydrocortisone for enhanced treatment of infected inflammatory skin conditions such as infected eczema and dermatitis.' },
  { name: 'Terbister 125mg', category: 'ANTIBIOTICS', generic: 'Terbinafine HCl eq. to Terbinafine 125mg', form: 'Tablet', reg: '121883', essential: false, packSize: "10's", description: 'Terbister 125mg contains Terbinafine, an allylamine antifungal that inhibits squalene epoxidase. It is indicated for onychomycosis and dermatophytosis with excellent tissue penetration.' },
  { name: 'Terbister 250mg', category: 'ANTIBIOTICS', generic: 'Terbinafine HCl eq. to Terbinafine 250mg', form: 'Tablet', reg: '121884', essential: false, packSize: "10's", description: 'Terbister 250mg Tablet offers standard-dose Terbinafine for optimal treatment of toenail onychomycosis requiring 12-week therapy. The higher dose ensures adequate drug levels for complete mycological cure.' },
  { name: 'Terbister 1% Cream', category: 'ANTIBIOTICS', generic: 'Terbinafine Hydrochloride 10mg/g', form: 'Cream', reg: '121548', essential: true, packSize: '15gm', description: 'Terbister 1% Cream provides topical Terbinafine for superficial fungal infections including tinea corporis, tinea cruris, and tinea pedis with minimal systemic absorption.' },
  { name: 'Tineacort Cream', category: 'ANTIBIOTICS', generic: 'Miconazole (Nitrate) 2% + Hydrocortisone 1%', form: 'Cream', reg: '26982', essential: true, packSize: '15gm', description: 'Tineacort Cream combines Miconazole, an antifungal agent, with Hydrocortisone for treatment of inflammatory fungal skin infections such as candidiasis and dermatophytosis with associated inflammation.' },
  { name: 'Viro-B 300mg', category: 'ANTIBIOTICS', generic: 'Tenofovir Disoproxil Fumarate 300mg', form: 'Tablet', reg: '89582', essential: true, packSize: "30's", description: 'Viro-B 300mg contains Tenofovir, a nucleotide analog reverse transcriptase inhibitor used for HIV-1 infection and chronic hepatitis B. Tenofovir is a cornerstone of antiretroviral therapy with excellent long-term safety and efficacy.' },
  { name: 'Xymox 400mg', category: 'ANTIBIOTICS', generic: 'Moxifloxacin 400mg', form: 'Tablet', reg: '48330', essential: true, packSize: "5's", description: 'Xymox 400mg contains Moxifloxacin, a fourth-generation fluoroquinolone with enhanced activity against Gram-positive bacteria and atypical pathogens. It is indicated for community-acquired pneumonia, acute bacterial sinusitis, and complicated skin infections.' },
  { name: 'Zoycin 2.25gm Injection', category: 'ANTIBIOTICS', generic: 'Piperacillin 2.0gm + Tazobactam 250mg', form: 'Injection', reg: '66340', essential: true, packSize: 'per vial', description: 'Zoycin 2.25gm Injection combines Piperacillin, an extended-spectrum penicillin, with Tazobactam, a beta-lactamase inhibitor. It provides broad-spectrum coverage and is indicated for complicated intra-abdominal infections, nosocomial pneumonia, and skin/soft tissue infections.' },
  { name: 'Zoycin 4.5gm Injection', category: 'ANTIBIOTICS', generic: 'Piperacillin 4.0gm + Tazobactam 500mg', form: 'Injection', reg: '66599', essential: true, packSize: "1's vial", description: 'Zoycin 4.5gm Injection offers maximum-dose combination therapy for life-threatening infections, febrile neutropenia, and multi-drug resistant infections.' },

  // ─── NSAIDS ──────────────────────────────────────────────────────────────
  { name: 'Artinil-K 50mg', category: 'NSAIDS', generic: 'Diclofenac Potassium 50mg', form: 'Tablet', reg: '5982', essential: false, packSize: "20's, 30's", description: 'Artinil-K 50mg contains Diclofenac Potassium, an NSAID with potent analgesic and anti-inflammatory properties. It inhibits cyclooxygenase enzymes, reducing prostaglandin synthesis and providing relief from pain and inflammation in musculoskeletal disorders and dental pain.' },
  { name: 'Artinil-K 75mg', category: 'NSAIDS', generic: 'Diclofenac Potassium 75mg', form: 'Tablet', reg: '21634', essential: false, packSize: "10's, 2x10's, 30's", description: 'Artinil-K 75mg contains Diclofenac Potassium with rapid onset of action due to the potassium salt formulation. It provides effective relief from moderate to severe pain and inflammation.' },
  { name: 'Artinil-K Gel', category: 'NSAIDS', generic: 'Diclofenac Diethylammonium Salt 1.16g/g (eq. to Diclofenac Sodium 1g/g)', form: 'Gel', reg: '24805', essential: false, packSize: '20gm', description: 'Artinil-K Gel provides topical Diclofenac for localised pain relief in osteoarthritis, sprains, and strains. Diclofenac penetrates the skin to reduce inflammation and pain at the site of application with minimal systemic absorption.' },
  { name: 'Articure 2ml Injection', category: 'NSAIDS', generic: 'Diclofenac Sodium 75mg + Lidocaine HCl 20mg', form: 'Injection', reg: '30532', essential: false, packSize: "2mlx10's, 2mlx20's", description: 'Articure 2ml Injection combines Diclofenac with Lidocaine for enhanced intramuscular administration. Lidocaine reduces injection pain while Diclofenac provides systemic anti-inflammatory effect for acute musculoskeletal pain.' },
  { name: 'Cox-2 100mg', category: 'NSAIDS', generic: 'Nimesulide 100mg', form: 'Tablet', reg: '24584', essential: false, packSize: "2x10's, 3x10's", description: 'Cox-2 100mg contains Nimesulide, a preferential COX-2 inhibitor with potent analgesic and anti-inflammatory properties. It is indicated for acute pain, osteoarthritis, and primary dysmenorrhoea.' },
  { name: 'Duoglob 75mg/20mg MR', category: 'NSAIDS', generic: 'Diclofenac Sodium 75mg + Omeprazole 20mg', form: 'Capsule', reg: '121882', essential: false, packSize: "10's", description: 'Duoglob 75mg/20mg MR combines Diclofenac in a modified-release formulation with Omeprazole. Omeprazole protects against NSAID-induced gastrointestinal complications while Diclofenac provides sustained anti-inflammatory effect.' },
  { name: 'Fevonor Injection', category: 'NSAIDS', generic: 'Paracetamol 300mg + Lignocaine HCl 20mg', form: 'Injection', reg: '30006', essential: false, packSize: "2mlx1's, 2mlx10's", description: 'Fevonor Injection combines Paracetamol with Lignocaine for intravenous pain and fever management. This formulation is particularly useful for postoperative pain management in hospitalised patients.' },
  { name: 'Gloral', category: 'NSAIDS', generic: 'Orphenadrine Citrate 35mg + Paracetamol 450mg', form: 'Tablet', reg: '66681', essential: false, packSize: "10x10's", description: 'Gloral combines Orphenadrine Citrate with Paracetamol for synergistic pain relief. Orphenadrine provides muscle relaxation while Paracetamol offers central analgesia, making it effective for tension headaches and musculoskeletal pain syndromes.' },
  { name: 'Gloral Forte', category: 'NSAIDS', generic: 'Paracetamol 650mg + Orphenadrine Citrate 50mg', form: 'Tablet', reg: '75279', essential: false, packSize: "10's, 50's, 100's", description: 'Gloral Forte combines Paracetamol with Orphenadrine Citrate for comprehensive musculoskeletal pain relief. The combination offers enhanced analgesic effect with reduced individual drug doses for tension headaches and muscle spasms.' },
  { name: 'Glomov 375mg/20mg', category: 'NSAIDS', generic: 'Naproxen 375mg + Esomeprazole 20mg', form: 'Tablet', reg: '109339', essential: false, packSize: "28's", description: 'Glomov 375mg/20mg combines lower-dose Naproxen with Esomeprazole for gastroprotected NSAID therapy in patients requiring reduced NSAID exposure.' },
  { name: 'Glomov 500mg/20mg', category: 'NSAIDS', generic: 'Naproxen 500mg + Esomeprazole 20mg', form: 'Tablet', reg: '109338', essential: false, packSize: "28's", description: 'Glomov 500mg/20mg combines Naproxen with Esomeprazole for effective pain relief while protecting against NSAID-induced gastrointestinal complications. Indicated for osteoarthritis and rheumatoid arthritis with GI risk.' },
  { name: 'Mobicam Gel', category: 'NSAIDS', generic: 'Piroxicam 0.5%', form: 'Gel', reg: '24807', essential: false, packSize: '25gm', description: 'Mobicam Gel contains Piroxicam in a topical formulation for localised anti-inflammatory effect. It is indicated for osteoarthritis of superficial joints, tendinitis, and bursitis with targeted relief and minimal systemic absorption.' },
  { name: 'Mobicam 20mg Capsule', category: 'NSAIDS', generic: 'Piroxicam 20mg', form: 'Capsule', reg: '17457', essential: false, packSize: "20's", description: 'Mobicam 20mg Capsule offers oral Piroxicam for long-term anti-inflammatory therapy in chronic inflammatory conditions including osteoarthritis and rheumatoid arthritis.' },
  { name: 'Mobicam 20mg Injection', category: 'NSAIDS', generic: 'Piroxicam 20mg/ml', form: 'Injection', reg: '22844', essential: false, packSize: "1mlx5's, 1mlx10's", description: 'Mobicam 20mg Injection provides parenteral Piroxicam for acute inflammatory conditions including postoperative pain, acute gout, and exacerbation of chronic inflammatory conditions.' },
  { name: 'Mobix 7.5mg', category: 'NSAIDS', generic: 'Meloxicam 7.5mg', form: 'Tablet', reg: '30032', essential: false, packSize: "10's", description: 'Mobix 7.5mg contains Meloxicam, a preferential COX-2 inhibitor. It is indicated for osteoarthritis, rheumatoid arthritis, and ankylosing spondylitis with once-daily dosing and improved gastrointestinal tolerability.' },
  { name: 'Mobix 15mg', category: 'NSAIDS', generic: 'Meloxicam 15mg', form: 'Tablet', reg: '30033', essential: false, packSize: "10's", description: 'Mobix 15mg provides higher-dose Meloxicam for enhanced anti-inflammatory effect in rheumatoid arthritis and other severe inflammatory conditions.' },
  { name: 'Nalbin 10mg Injection', category: 'NSAIDS', generic: 'Nalbuphine HCl 10mg/ml', form: 'Injection', reg: '16832', essential: false, packSize: "1's, 10's, 12's", description: 'Nalbin 10mg Injection contains Nalbuphine HCl, a mixed opioid agonist-antagonist analgesic providing pain relief with a lower risk of respiratory depression compared to pure opioid agonists.' },
  { name: 'Nalbin 20mg Injection', category: 'NSAIDS', generic: 'Nalbuphine HCl 20mg/ml', form: 'Injection', reg: '23653', essential: false, packSize: "1's, 10's, 12's", description: 'Nalbin 20mg Injection provides higher-dose Nalbuphine for severe postoperative pain and acute pain conditions requiring parenteral analgesia.' },
  { name: 'Opinor Injection', category: 'NSAIDS', generic: 'Buprenorphine (as HCl) 0.3mg/ml', form: 'Injection', reg: '41538', essential: false, packSize: "5's", description: 'Opinor Injection contains Buprenorphine, a partial opioid agonist with high affinity for mu receptors. It provides potent analgesia for moderate to severe pain with a ceiling effect on respiratory depression.' },
  { name: 'P-Cyclo 20mg', category: 'NSAIDS', generic: 'Piroxicam as Betacyclodextrin 20mg', form: 'Tablet', reg: '48328', essential: false, packSize: "2x10's", description: 'P-Cyclo 20mg contains Piroxicam formulated with betacyclodextrin for improved solubility and bioavailability. It provides long-lasting anti-inflammatory and analgesic effects with once-daily dosing.' },
  { name: 'Pentacin Injection', category: 'NSAIDS', generic: 'Pentazocine (as Lactate) 30mg/ml', form: 'Injection', reg: '42814', essential: false, packSize: "1mlx5's", description: 'Pentacin Injection contains Pentazocine, a mixed opioid agonist-antagonist analgesic providing effective pain relief for moderate to severe pain with lower abuse potential than pure agonists.' },
  { name: 'Promig 550mg', category: 'NSAIDS', generic: 'Naproxen Sodium 550mg eq. to Naproxen 500mg', form: 'Tablet', reg: '41666', essential: false, packSize: "2x10's", description: 'Promig 550mg contains Naproxen Sodium, an NSAID with excellent anti-inflammatory properties and long half-life. It is indicated for rheumatoid arthritis, osteoarthritis, ankylosing spondylitis, and acute gout.' },
  { name: 'Rama-D 50mg Capsule', category: 'NSAIDS', generic: 'Tramadol HCl 50mg', form: 'Capsule', reg: '26986', essential: false, packSize: "1x10's, 2x10's", description: 'Rama-D 50mg Capsule contains Tramadol, a centrally acting opioid analgesic providing effective relief from moderate to severe pain through mu-opioid receptor agonism and serotonin/norepinephrine reuptake inhibition.' },
  { name: 'Rama-D 100mg Injection', category: 'NSAIDS', generic: 'Tramadol HCl 100mg', form: 'Injection', reg: '26987', essential: false, packSize: "1x5's, 1x10's", description: 'Rama-D 100mg Injection provides parenteral Tramadol for severe postoperative pain and cancer pain requiring rapid-onset opioid analgesia.' },
  { name: 'Toralac 30mg Injection', category: 'NSAIDS', generic: 'Ketorolac Tromethamine 30mg/ml', form: 'Injection', reg: '50290', essential: false, packSize: "5x1ml, 1mlx10's", description: 'Toralac 30mg Injection contains Ketorolac, a potent NSAID for short-term parenteral pain management. It provides rapid and effective analgesia for postoperative pain, limited to 5 days of use.' },

  // ─── MUSCLE RELAXANTS ────────────────────────────────────────────────────
  { name: 'Cidekel 4mg', category: 'MUSCLE RELAXANTS', generic: 'Thiocolchicoside 4mg', form: 'Capsule', reg: '30563', essential: false, packSize: "1x10's", description: 'Cidekel 4mg contains Thiocolchicoside, a muscle relaxant with anti-inflammatory properties derived from colchicine. It acts centrally and peripherally to reduce muscle spasms and inflammation in musculoskeletal disorders.' },
  { name: 'Tizadin 2mg', category: 'MUSCLE RELAXANTS', generic: 'Tizanidine (as HCl) 2mg', form: 'Tablet', reg: '28366', essential: false, packSize: "10's", description: 'Tizadin 2mg contains Tizanidine, a centrally acting muscle relaxant that reduces spasticity through alpha-2 adrenergic agonism. It is indicated for spasticity associated with multiple sclerosis, spinal cord injury, and other neurological conditions.' },

  // ─── ANTI-DIABETICS ──────────────────────────────────────────────────────
  { name: 'Incrit-M 50/500mg', category: 'ANTI-DIABETICS', generic: 'Sitagliptin 50mg + Metformin HCl 500mg', form: 'Tablet', reg: '99560', essential: false, packSize: "14's, 28's", description: 'Incrit-M 50/500mg combines Sitagliptin, a DPP-4 inhibitor, with Metformin for comprehensive type 2 diabetes management. Sitagliptin enhances incretin action while Metformin improves insulin sensitivity.' },
  { name: 'Incrit-M 50/1000mg', category: 'ANTI-DIABETICS', generic: 'Sitagliptin 50mg + Metformin HCl 1000mg', form: 'Tablet', reg: '99561', essential: false, packSize: "14's, 28's", description: 'Incrit-M 50/1000mg offers higher-dose Metformin with Sitagliptin for enhanced glycaemic control in patients requiring more aggressive diabetes management.' },
  { name: 'Jazin-M 12.5mg/500mg', category: 'ANTI-DIABETICS', generic: 'Empagliflozin 12.5mg + Metformin 500mg', form: 'Tablet', reg: '113846', essential: false, packSize: "10's, 14's, 28's", description: 'Jazin-M 12.5mg/500mg combines Empagliflozin, an SGLT2 inhibitor, with Metformin for dual-action diabetes therapy. Empagliflozin promotes urinary glucose excretion while Metformin improves insulin sensitivity, offering comprehensive glycaemic control with cardiovascular benefits.' },
  { name: 'Jazin-M 12.5mg/1000mg', category: 'ANTI-DIABETICS', generic: 'Empagliflozin 12.5mg + Metformin 1000mg', form: 'Tablet', reg: '113846', essential: false, packSize: "14's, 28's", description: 'Jazin-M 12.5mg/1000mg provides higher-dose Metformin with Empagliflozin to maximise complementary effects and optimise diabetes management.' },

  // ─── MINERALS & SUPPLEMENTS ──────────────────────────────────────────────
  { name: 'Calciferol Injection', category: 'MINERALS & SUPPLEMENTS', generic: 'Cholecalciferol 5mg/ml', form: 'Injection', reg: '56536', essential: true, packSize: "1mlx1's, 1mlx5's, 1mlx10's", description: 'Calciferol Injection contains Cholecalciferol (vitamin D3) for the treatment of vitamin D deficiency and rickets. The high-dose injectable formulation provides rapid correction of severe deficiency states in patients with malabsorption.' },
  { name: 'G-fer Injection', category: 'MINERALS & SUPPLEMENTS', generic: 'Elemental Iron (as Sucrose) 100mg/ml', form: 'Injection', reg: '46017', essential: false, packSize: "5mlx5's", description: 'G-fer Injection contains iron sucrose complex for the treatment of iron deficiency anaemia. The sucrose formulation minimises infusion reactions and allows rapid iron repletion in patients who cannot tolerate oral iron.' },
  { name: 'Mecomed 500mcg Tablet', category: 'MINERALS & SUPPLEMENTS', generic: 'Mecobalamin 500mcg', form: 'Tablet', reg: '41670', essential: false, packSize: "10x10, 30's", description: 'Mecomed 500mcg Tablet contains Mecobalamin, the active form of vitamin B12 essential for neurological function and red blood cell formation. It is indicated for vitamin B12 deficiency, peripheral neuropathy, and megaloblastic anaemia.' },
  { name: 'Mecomed 500mcg Injection', category: 'MINERALS & SUPPLEMENTS', generic: 'Mecobalamin 500mcg/ml', form: 'Injection', reg: '30200', essential: false, packSize: "1mlx10's", description: 'Mecomed 500mcg Injection offers parenteral Mecobalamin for rapid correction of vitamin B12 deficiency. The injectable formulation ensures 100% bioavailability and is essential for patients with malabsorption syndromes.' },
  { name: 'Xefra 250mg', category: 'MINERALS & SUPPLEMENTS', generic: 'Deferasirox 250mg', form: 'Tablet', reg: '87320', essential: true, packSize: "1's, 28's", description: 'Xefra 250mg contains Deferasirox, an oral iron chelator used for treatment of chronic iron overload in transfusion-dependent patients. It offers convenient once-daily dosing for long-term iron chelation therapy.' },
  { name: 'Xefra 500mg', category: 'MINERALS & SUPPLEMENTS', generic: 'Deferasirox 500mg', form: 'Tablet', reg: '87321', essential: true, packSize: "1's, 28's", description: 'Xefra 500mg provides higher-dose Deferasirox for patients with severe iron overload, offering enhanced chelation capacity for aggressive iron removal in heavily transfused patients.' },

  // ─── UROLOGICALS ─────────────────────────────────────────────────────────
  { name: 'Sildin 4mg', category: 'UROLOGICALS', generic: 'Silodosin 4mg', form: 'Capsule', reg: '111887', essential: false, packSize: "10's, 20's, 30's", description: 'Sildin 4mg contains Silodosin, a selective alpha-1A adrenergic receptor antagonist that relaxes prostate smooth muscle. It is indicated for benign prostatic hyperplasia (BPH) symptoms with rapid improvement and minimal cardiovascular effects.' },
  { name: 'Sildin 8mg', category: 'UROLOGICALS', generic: 'Silodosin 8mg', form: 'Capsule', reg: '111888', essential: false, packSize: "10's", description: 'Sildin 8mg provides higher-dose Silodosin for maximum prostate relaxation and enhanced relief from BPH symptoms in patients requiring more potent therapy.' },
  { name: 'Solicept 5mg', category: 'UROLOGICALS', generic: 'Solifenacin Succinate 5mg', form: 'Tablet', reg: '66335', essential: false, packSize: "10's, 20's, 30's", description: 'Solicept 5mg contains Solifenacin, a muscarinic receptor antagonist that relaxes bladder smooth muscle. It is indicated for overactive bladder with symptoms of urinary urgency, frequency, and urge incontinence.' },
  { name: 'Solicept 10mg', category: 'UROLOGICALS', generic: 'Solifenacin Succinate 10mg', form: 'Tablet', reg: '66336', essential: false, packSize: "10's, 20's, 30's", description: 'Solicept 10mg offers higher-dose Solifenacin for enhanced bladder control in patients with severe overactive bladder symptoms requiring more potent antimuscarinic effect.' },
  { name: 'Tamsol 0.4mg', category: 'UROLOGICALS', generic: 'Tamsulosin HCl 0.4mg', form: 'Capsule', reg: '75421', essential: false, packSize: "10's, 20's, 3x10's", description: 'Tamsol 0.4mg contains Tamsulosin, a selective alpha-1A and alpha-1B adrenergic receptor antagonist. It relaxes prostate and bladder neck smooth muscle, improving urinary flow in BPH patients with minimal effect on blood pressure.' },
  { name: 'Tamsol-D', category: 'UROLOGICALS', generic: 'Dutasteride 0.5mg + Tamsulosin HCl 0.4mg', form: 'Capsule', reg: '80305', essential: false, packSize: "10's, 20's, 30's", description: 'Tamsol-D combines Dutasteride and Tamsulosin for comprehensive BPH treatment. Dutasteride reduces prostate size by inhibiting 5-alpha-reductase while Tamsulosin relaxes prostate smooth muscle for improved urinary flow.' },
  { name: 'Tamsol-S 0.4mg/6mg', category: 'UROLOGICALS', generic: 'Tamsulosin HCl 0.4mg + Solifenacin Succinate 6mg', form: 'Tablet', reg: '96667', essential: false, packSize: "10's", description: 'Tamsol-S 0.4mg/6mg combines Tamsulosin with Solifenacin for comprehensive treatment of BPH with overactive bladder. Tamsulosin improves voiding while Solifenacin controls bladder storage symptoms.' },

];

const CATEGORIES_LIST = [...new Set(ALL_PRODUCTS.map(p => p.category))];

export default function Products() {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const alphabetRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const router = useRouter();

  // Restore the selected letter from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLetter = localStorage.getItem('lastProductLetter');
      if (savedLetter && ALPHABET.includes(savedLetter)) {
        setSelectedLetter(savedLetter);
      }
    }
  }, []);

  useEffect(() => {
    setCategoryFilter('');
  }, [selectedLetter]);

  const scrollToLetter = (letter: string) => {
    const idx = ALPHABET.indexOf(letter);
    const btn = alphabetRefs.current[idx];
    if (btn) btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const changeLetter = (direction: number) => {
    const currentIndex = ALPHABET.indexOf(selectedLetter);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + ALPHABET.length) % ALPHABET.length;
    const nextLetter = ALPHABET[nextIndex];
    setSelectedLetter(nextLetter);
    scrollToLetter(nextLetter);
  };

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesLetter = product.name.toUpperCase().startsWith(selectedLetter);
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.generic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !categoryFilter || product.category === categoryFilter;
    return matchesLetter && matchesSearch && matchesCategory;
  });

  const hasResults = filteredProducts.length > 0;

  const availableCategories = CATEGORIES_LIST.filter(cat =>
    ALL_PRODUCTS.some(p =>
      p.category === cat &&
      p.name.toUpperCase().startsWith(selectedLetter)
    )
  );

  const categoryCount = (cat: string) =>
    ALL_PRODUCTS.filter(p =>
      p.category === cat &&
      p.name.toUpperCase().startsWith(selectedLetter)
    ).length;

  const letterTotal = ALL_PRODUCTS.filter(p =>
    p.name.toUpperCase().startsWith(selectedLetter)
  ).length;

  return (
    <div className="min-h-screen bg-white font-sans text-[#1F2937]">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col text-justify md:flex-row items-center bg-gray-100 overflow-hidden">
        <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 bg-gray-100 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-5xl font-bold text-[#9D0B0F] mb-6"
          >
            Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-[18px] text-[#1F2937] max-w-xl"
          >
            From a small marketing venture to one of Pakistan&apos;s fast-growing pharmaceutical manufacturers producing a wide range of medicines and healthcare products for patients across the country.
          </motion.p>
        </div>
        <div className="w-full md:w-1/2 h-75 md:h-125 relative">
          <img
            src="/our-product.webp"
            alt="Pharmaceutical Production"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row gap-12">

        {/* Left Sidebar */}
        <aside className="w-full lg:w-1/4">
          <h2 className="font-outfit text-[40px] font-bold text-[#9D0B0F] mb-2">All Products</h2>
          <p className="font-outfit text-[16px] text-black/60 mb-6 leading-relaxed">
            Explore Our Range Of High-Quality Products Designed To Meet Diverse Healthcare Needs.
          </p>
          <div className="w-12 h-1 bg-[#9D0B0F] mb-6" />

          {/* Category List */}
          <nav className="space-y-1">
            <button
              onClick={() => setCategoryFilter('')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-all text-left ${
                categoryFilter === ''
                  ? 'bg-[#9D0B0F] text-white font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>All Categories</span>
              <span className={`text-sm px-2 py-0.5 rounded-full shrink-0 ml-2 ${
                categoryFilter === ''
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {letterTotal}
              </span>
            </button>

            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat === categoryFilter ? '' : cat)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-lg transition-all text-left ${
                  categoryFilter === cat
                    ? 'bg-[#9D0B0F] text-white font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="leading-snug capitalize">{cat.toLowerCase()}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ml-2 ${
                  categoryFilter === cat
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {categoryCount(cat)}
                </span>
              </button>
            ))}

            {availableCategories.length === 0 && (
              <p className="text-lg text-gray-400 px-3 py-2">
                No categories for &ldquo;{selectedLetter}&rdquo;
              </p>
            )}
          </nav>

          {/* Stats */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-lg text-gray-500 mb-1">Total Products</p>
            <p className="text-2xl font-bold text-[#9D0B0F]">{ALL_PRODUCTS.length}</p>
            <p className="text-lg text-gray-500 mt-2 mb-1">Showing</p>
            <p className="text-xl font-bold text-gray-700">{filteredProducts.length}</p>
          </div>
        </aside>

        {/* Right Content */}
        <section className="w-full lg:w-3/4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-gray-100 pb-8">
            {/* Alphabet Nav */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <button onClick={() => changeLetter(-1)} className="p-1 hover:bg-gray-100 rounded-full transition-colors shrink-0">
                <ChevronLeft size={20} className="text-gray-400" />
              </button>
              <div
                className="flex items-center gap-1 overflow-x-auto scroll-smooth px-15 hide-scrollbar"
                style={{ maxWidth: '600px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {ALPHABET.map((letter, idx) => (
                  <button
                    key={letter}
                    ref={(el) => { alphabetRefs.current[idx] = el; }}
                    onClick={() => { setSelectedLetter(letter); scrollToLetter(letter); }}
                    className={`w-12 h-12 flex items-center justify-center rounded-full text-xl font-medium transition-all shrink-0 ${
                      selectedLetter === letter
                        ? 'text-[#9D0B0F] font-bold scale-110'
                        : 'text-gray-300 hover:text-gray-600'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
              <button onClick={() => changeLetter(1)} className="p-1 hover:bg-gray-100 rounded-full transition-colors shrink-0">
                <ChevronRight size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search by name or generic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-md text-sm focus:ring-2 focus:ring-red-800/20 transition-all outline-none"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-12">
            {!hasResults ? (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No products found for &ldquo;{selectedLetter}&rdquo;</p>
                <p className="text-gray-300 text-sm mt-2">Try a different letter or search term</p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredProducts.map((product: Product, idx: number) => (
                  <motion.div
                    key={`${product.name}-${product.reg}-${idx}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="bg-white border border-gray-100 rounded-md p-4 shadow-sm hover:shadow-md hover:border-red-100 transition-all cursor-pointer group"
                    onClick={() => {
                      // Save the first letter of the product before navigating
                      const firstLetter = product.name.charAt(0).toUpperCase();
                      localStorage.setItem('lastProductLetter', firstLetter);
                      router.push(`/detailedproduct/${encodeURIComponent(product.name)}`);
                    }}
                  >
                    <div className="flex gap-4 items-start">
                      {product.image && (
                        <div className="flex-shrink-0 w-16 h-16 bg-gray-50 rounded-md overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-lg font-medium text-gray-700 group-hover:text-[#9D0B0F] transition-colors">
                            {product.name}
                          </span>
                          <span className="text-lg px-2 py-0.5 rounded-full bg-red-50 text-[#9D0B0F]">
                            {product.form}
                          </span>
                        </div>
                        <p className="text-lg text-gray-400 mt-0.5 truncate">{product.generic}</p>
                      </div>
                      <ChevronRight size={14} className="text-gray-300 group-hover:text-[#9D0B0F] transition-colors ml-3 shrink-0" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; width: 0; height: 0; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Footer />
    </div>
  );
}