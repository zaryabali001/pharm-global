/* eslint-disable */
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
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
  // GASTRO INTESTINAL SYSTEM
  { name: 'Pelton-C', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Domperidone Maleate + Cinnarizine', form: 'Tablet', reg: '32891', essential: false, packSize: '10\'s', description: 'Pelton-C is a combination medication containing Domperidone Maleate and Cinnarizine. Domperidone is a dopamine antagonist that acts as an anti-nauseant and prokinetic agent, while Cinnarizine is a calcium channel blocker with antihistamine properties used for vertigo and motion sickness. This combination is particularly effective for treating symptoms associated with vestibular disorders and gastrointestinal motility issues.' },
  { name: 'Fadiphine 10mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Famotidine 10mg', form: 'Tablet', reg: '20259', essential: false, packSize: '14\'s', description: 'Fadiphine 10mg contains Famotidine, a histamine H2-receptor antagonist that inhibits gastric acid secretion. It is used for the treatment of gastroesophageal reflux disease (GERD), peptic ulcer disease, and other conditions where reduction of gastric acid is beneficial. Famotidine provides relief from heartburn, acid indigestion, and sour stomach.' },
  { name: 'Fadiphine 20mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Famotidine 20mg', form: 'Tablet', reg: '16830', essential: false, packSize: '14\'s', description: 'Fadiphine 20mg is a higher strength formulation of Famotidine, providing enhanced acid suppression for more severe cases of acid-related disorders. It competitively inhibits histamine at H2 receptors of the parietal cells, reducing both basal and stimulated gastric acid secretion. This medication is particularly effective for erosive esophagitis and pathological hypersecretory conditions.' },
  { name: 'Fadiphine 40mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Famotidine 40mg', form: 'Tablet', reg: '16831', essential: false, packSize: '14\'s', description: 'Fadiphine 40mg offers maximum strength acid suppression with Famotidine 40mg. This formulation is designed for severe acid-related conditions requiring potent H2 receptor blockade. It provides rapid and sustained relief from excessive gastric acid production, making it suitable for acute treatment of duodenal ulcers and Zollinger-Ellison syndrome.' },
  { name: 'Aptizole 40mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Pantoprazole 40mg', form: 'Tablet', reg: '33392', essential: false, packSize: '14\'s', description: 'Aptizole 40mg contains Pantoprazole, a proton pump inhibitor (PPI) that suppresses gastric acid secretion by specific inhibition of the H+/K+-ATPase enzyme system. It is indicated for the treatment of erosive esophagitis, GERD, and pathological hypersecretory conditions including Zollinger-Ellison syndrome. Pantoprazole provides long-lasting acid suppression with once-daily dosing.' },
  { name: 'Protole 20mg Capsules', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Omeprazole 20mg', form: 'Capsule', reg: '114170', essential: true, packSize: '14\'s', description: 'Protole 20mg Capsules contain Omeprazole, a proton pump inhibitor that irreversibly blocks the enzyme system responsible for acid production in the stomach. It is used for the treatment of duodenal and gastric ulcers, GERD, and erosive esophagitis. Omeprazole provides effective acid suppression and healing of acid-related damage to the gastrointestinal tract.' },
  { name: 'Protole 40mg Capsules', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Omeprazole 40mg', form: 'Capsule', reg: '66482', essential: true, packSize: '14\'s', description: 'Protole 40mg Capsules provide higher dose Omeprazole for more severe acid-related conditions. This formulation offers enhanced acid suppression for the treatment of refractory ulcers, severe GERD, and hypersecretory states. The enteric-coated capsules ensure optimal delivery to the site of action in the stomach.' },
  { name: 'Protole 40mg Injection', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Omeprazole 40mg', form: 'Injection', reg: '87348', essential: true, packSize: '1\'s', description: 'Protole 40mg Injection is a sterile parenteral formulation of Omeprazole for intravenous administration. It is indicated for the short-term treatment of patients with GERD who are unable to take oral medication, and for the prevention of rebleeding in patients with bleeding peptic ulcers following therapeutic endoscopy. The injection provides rapid acid suppression in critical care settings.' },
  { name: 'Esocue 40mg Injection', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Esomeprazole 40mg', form: 'Injection', reg: '87349', essential: false, packSize: '1\'s', description: 'Esocue 40mg Injection contains Esomeprazole, the S-isomer of Omeprazole, offering enhanced pharmacokinetic properties. This injectable formulation is used for the treatment of GERD in patients requiring intravenous therapy, and for the prevention of rebleeding following endoscopic treatment of bleeding ulcers. Esomeprazole provides superior acid control compared to racemic Omeprazole.' },
  { name: 'Dudex 30mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Dexlansoprazole 30mg', form: 'Capsule', reg: '87769', essential: false, packSize: '14\'s', description: 'Dudex 30mg contains Dexlansoprazole, a dual delayed-release formulation of the R-enantiomer of Lansoprazole. This innovative PPI provides extended acid suppression with a dual release mechanism - initial release in the duodenum and second release several hours later. It is indicated for the treatment of heartburn associated with symptomatic non-erosive GERD, healing of erosive esophagitis, and maintenance of healed erosive esophagitis.' },
  { name: 'Dudex 60mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Dexlansoprazole 60mg', form: 'Capsule', reg: '87770', essential: false, packSize: '14\'s', description: 'Dudex 60mg provides the highest strength Dexlansoprazole for maximum acid suppression. The dual delayed-release technology ensures prolonged therapeutic effect, making it particularly effective for severe GERD cases and refractory acid-related disorders. This formulation offers convenient once-daily dosing with sustained symptom relief.' },
  { name: 'Rapid 20mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Omeprazole 20mg + Sodium Bicarbonate 1100mg', form: 'Capsule', reg: '60806', essential: false, packSize: '14\'s', description: 'Rapid 20mg combines Omeprazole with Sodium Bicarbonate for enhanced acid suppression and faster onset of action. The bicarbonate component helps neutralize existing stomach acid while Omeprazole inhibits further acid production. This combination is particularly effective for rapid relief of heartburn and acid-related symptoms, with improved bioavailability compared to Omeprazole alone.' },
  { name: 'Rapid 40mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Omeprazole 40mg + Sodium Bicarbonate 1100mg', form: 'Capsule', reg: '60807', essential: false, packSize: '14\'s', description: 'Rapid 40mg offers higher strength combination therapy with Omeprazole 40mg and Sodium Bicarbonate. This formulation provides potent and rapid acid suppression for severe GERD and erosive esophagitis. The dual mechanism ensures both immediate acid neutralization and sustained inhibition of acid production, offering comprehensive symptom relief.' },
  { name: 'Pelton 10mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Domperidone 10mg', form: 'Tablet', reg: '16836', essential: false, packSize: '10\'s', description: 'Pelton 10mg contains Domperidone, a dopamine antagonist that acts as a prokinetic agent. It enhances gastrointestinal motility and facilitates gastric emptying, making it effective for treating nausea, vomiting, and dyspepsia. Domperidone does not cross the blood-brain barrier, resulting in fewer central nervous system side effects compared to other antiemetics.' },
  { name: 'Pelton-V', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Domperidone maleate 12.72mg', form: 'Tablet', reg: '22328', essential: false, packSize: '10\'s', description: 'Pelton-V contains Domperidone maleate in a formulation designed for enhanced bioavailability. This prokinetic agent improves gastric motility and coordination of antral and duodenal contractions. It is indicated for the relief of nausea and vomiting, and for the symptomatic treatment of delayed gastric emptying in adults.' },
  { name: 'Pelton Suspension', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Domperidone 5mg/5ml', form: 'Suspension', reg: '24801', essential: false, packSize: '60ml', description: 'Pelton Suspension provides Domperidone in a liquid formulation suitable for patients who have difficulty swallowing tablets. The 5mg/5ml concentration allows for flexible dosing based on patient needs. It is particularly useful for pediatric patients and adults requiring precise dose titration for nausea and vomiting control.' },
  { name: 'Pelton-V Suspension', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Domperidone 5mg/5ml', form: 'Suspension', reg: '30007', essential: false, packSize: '60ml', description: 'Pelton-V Suspension offers the same therapeutic benefits as Pelton Suspension with improved palatability and bioavailability. This formulation is ideal for patients requiring liquid medication for gastrointestinal motility disorders, providing effective relief from nausea, vomiting, and symptoms of delayed gastric emptying.' },
  { name: 'Pelton-C Suspension', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Cinnarizine 10mg + Domperidone 5mg/5ml', form: 'Suspension', reg: '47730', essential: false, packSize: '60ml', description: 'Pelton-C Suspension combines Cinnarizine and Domperidone for comprehensive treatment of vertigo and gastrointestinal symptoms. Cinnarizine acts on the vestibular system to reduce dizziness and vertigo, while Domperidone improves gastric motility. This combination is particularly effective for patients experiencing both vestibular and gastrointestinal symptoms.' },
  { name: 'Mediclop Injection', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Metoclopramide HCl 10mg', form: 'Injection', reg: '33759', essential: true, packSize: '10\'s', description: 'Mediclop Injection contains Metoclopramide HCl, a central and peripheral dopamine antagonist that enhances gastrointestinal motility. It is indicated for the prevention of postoperative nausea and vomiting, and for the treatment of symptomatic gastroesophageal reflux. The injectable formulation allows for rapid onset in acute care settings.' },
  { name: 'Miso 200mcg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Misoprostol 200mcg', form: 'Tablet', reg: '66326', essential: true, packSize: '4\'s', description: 'Miso 200mcg contains Misoprostol, a synthetic prostaglandin E1 analog that protects the gastric mucosa and reduces gastric acid secretion. It is primarily used for the prevention of NSAID-induced gastric ulcers in patients requiring long-term NSAID therapy. Misoprostol also has uterine contractile properties and is used off-label for other indications.' },
  { name: 'Vonoglob 10mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Vonoprazan 10mg', form: 'Tablet', reg: '118775', essential: false, packSize: '14\'s', description: 'Vonoglob 10mg contains Vonoprazan, a potassium-competitive acid blocker (P-CAB) that provides potent and sustained acid suppression. Unlike traditional PPIs, Vonoprazan inhibits acid secretion by competitively blocking the potassium-binding site of H+/K+-ATPase. It offers faster onset and more consistent acid control, making it effective for GERD, peptic ulcers, and H. pylori eradication therapy.' },
  { name: 'Vonoglob 20mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Vonoprazan 20mg', form: 'Tablet', reg: '118776', essential: false, packSize: '14\'s', description: 'Vonoglob 20mg provides higher dose Vonoprazan for enhanced acid suppression in refractory cases. This formulation offers maximum therapeutic effect for severe GERD, erosive esophagitis, and acid-related disorders requiring potent acid blockade. The P-CAB mechanism provides superior acid control compared to traditional proton pump inhibitors.' },
  { name: 'Globiphlor 80/80mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Phloroglucinol 80mg + Trimethylphloroglucinol 80mg', form: 'Tablet', reg: '107001', essential: false, packSize: '10\'s', description: 'Globiphlor 80/80mg combines Phloroglucinol and Trimethylphloroglucinol, both antispasmodic agents that relax smooth muscle in the gastrointestinal tract. This combination is effective for the symptomatic treatment of irritable bowel syndrome (IBS), functional dyspepsia, and acute spasmodic pain in the digestive tract. The dual action provides comprehensive relief from abdominal cramps and discomfort.' },
  { name: 'Globiphlor 40/0.04mg Injection', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Phloroglucinol 40mg + Trimethylphloroglucinol', form: 'Injection', reg: '107002', essential: false, packSize: '5\'s', description: 'Globiphlor Injection provides parenteral administration of Phloroglucinol and Trimethylphloroglucinol for acute spasmodic conditions. This injectable formulation offers rapid relief from severe abdominal pain, biliary colic, and renal colic. The intravenous or intramuscular route ensures quick onset of action in emergency situations requiring immediate spasm relief.' },
  { name: 'Glodium 2mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Loperamide HCl 2mg', form: 'Capsule', reg: '77816', essential: true, packSize: '10\'s', description: 'Glodium 2mg contains Loperamide HCl, an opioid receptor agonist that slows intestinal motility and reduces fluid secretion in the gut. It is indicated for the treatment of acute diarrhea and chronic diarrhea associated with inflammatory bowel disease. Loperamide provides symptomatic relief by reducing stool frequency and improving stool consistency.' },
  { name: 'Tamsol-D', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Dutasteride 0.5mg + Tamsulosin 0.4mg', form: 'Capsule', reg: '80305', essential: false, packSize: '30\'s', description: 'Tamsol-D is a combination therapy containing Dutasteride and Tamsulosin for the treatment of benign prostatic hyperplasia (BPH). Dutasteride inhibits 5-alpha-reductase, reducing prostate size, while Tamsulosin relaxes prostate smooth muscle. This dual mechanism provides comprehensive relief from urinary symptoms associated with prostate enlargement.' },
  { name: 'Piractim 800mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Piracetam 800mg', form: 'Tablet', reg: '30478', essential: false, packSize: '10\'s', description: 'Piractim 800mg contains Piracetam, a nootropic agent that enhances cognitive function and cerebral metabolism. While primarily used for neurological conditions, it also has applications in gastrointestinal disorders. Piracetam improves microcirculation and has been used off-label for various cognitive and vascular disorders.' },
  { name: 'Piractim Syrup', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Piracetam 1gm/5ml', form: 'Syrup', reg: '38406', essential: false, packSize: '100ml', description: 'Piractim Syrup provides Piracetam in a liquid formulation for flexible dosing. The 1gm/5ml concentration allows for precise dose adjustment based on patient needs. This formulation is particularly suitable for pediatric patients and adults who prefer liquid medication for cognitive enhancement.' },
  { name: 'Piractim 1gm Injection', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Piracetam 1gm', form: 'Injection', reg: '32039', essential: false, packSize: '5\'s', description: 'Piractim 1gm Injection offers parenteral administration of Piracetam for patients unable to take oral medication. This formulation ensures rapid absorption and is used in acute neurological conditions requiring immediate cognitive support. The injectable form provides reliable bioavailability in critical care situations.' },
  { name: 'Citolin 500mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Citicoline Sodium 500mg', form: 'Tablet', reg: '48336', essential: false, packSize: '10\'s', description: 'Citolin 500mg contains Citicoline, a naturally occurring compound that supports brain function and neural repair. It is used for cognitive enhancement and neuroprotection. Citicoline plays a role in phospholipid synthesis and neurotransmitter function, making it beneficial for various neurological conditions.' },
  { name: 'Citolin 250mg Injection', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Citicoline 250mg', form: 'Injection', reg: '24082', essential: false, packSize: '5\'s', description: 'Citolin 250mg Injection provides parenteral Citicoline for enhanced bioavailability and rapid therapeutic effect. This formulation is indicated for acute neurological conditions requiring immediate neuroprotection and cognitive support. The injectable form ensures optimal delivery to the central nervous system.' },
  { name: 'Citolin 1gm Injection', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Citicoline 1000mg', form: 'Injection', reg: '30541', essential: false, packSize: '5\'s', description: 'Citolin 1gm Injection offers high-dose Citicoline for severe neurological conditions. This formulation provides maximum therapeutic concentration for neuroprotection and cognitive enhancement. It is particularly useful in acute stroke, traumatic brain injury, and other conditions requiring intensive neurosupportive therapy.' },
  { name: 'Vonoglob', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Vonoprazan Fumarate', form: 'Tablet', reg: '118775', essential: false, packSize: '14\'s', description: 'Vonoglob contains Vonoprazan Fumarate, a novel potassium-competitive acid blocker that provides superior acid suppression compared to traditional PPIs. It offers faster onset of action and more consistent pH control, making it effective for acid-related disorders including GERD, peptic ulcers, and H. pylori eradication.' },
  { name: 'Glomov 500mg/20mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Naproxen 500mg + Esomeprazole 20mg', form: 'Tablet', reg: '109338', essential: false, packSize: '10\'s', description: 'Glomov 500mg/20mg combines Naproxen, a NSAID with analgesic and anti-inflammatory properties, with Esomeprazole, a PPI for gastric protection. This formulation provides effective pain relief while protecting against NSAID-induced gastrointestinal complications. It is indicated for conditions requiring both analgesia and gastroprotection.' },
  { name: 'Glomov 375mg/20mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Naproxen 375mg + Esomeprazole 20mg', form: 'Tablet', reg: '109339', essential: false, packSize: '10\'s', description: 'Glomov 375mg/20mg offers a lower dose Naproxen combination for patients requiring reduced NSAID exposure. The Esomeprazole component provides adequate gastric protection while maintaining therapeutic efficacy for pain and inflammation. This formulation balances efficacy with gastrointestinal safety.' },
  { name: 'Artinil-K 50mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Diclofenac Potassium 50mg', form: 'Tablet', reg: '5982', essential: false, packSize: '10\'s', description: 'Artinil-K 50mg contains Diclofenac Potassium, a NSAID with potent analgesic and anti-inflammatory properties. It inhibits cyclooxygenase enzymes, reducing prostaglandin synthesis and providing relief from pain and inflammation. Diclofenac is widely used for musculoskeletal disorders, dental pain, and various inflammatory conditions.' },
  { name: 'Nalbin 10mg Injection', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Nalbuphine HCl 10mg', form: 'Injection', reg: '16832', essential: false, packSize: '10\'s', description: 'Nalbin 10mg Injection contains Nalbuphine HCl, a mixed opioid agonist-antagonist analgesic. It provides pain relief with a lower risk of respiratory depression compared to pure opioid agonists. Nalbuphine is indicated for moderate to severe pain management in various clinical settings.' },
  { name: 'Nalbin 20mg Injection', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Nalbuphine HCl 20mg', form: 'Injection', reg: '23653', essential: false, packSize: '10\'s', description: 'Nalbin 20mg Injection provides higher dose Nalbuphine for more severe pain management. This formulation offers enhanced analgesic effect while maintaining the safety profile of mixed opioid agonists. It is particularly useful for postoperative pain and other acute pain conditions requiring parenteral analgesia.' },
  { name: 'Anzonil 3mg', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Bromazepam 3mg', form: 'Tablet', reg: '41540', essential: false, packSize: '10\'s', description: 'Anzonil 3mg contains Bromazepam, a benzodiazepine with anxiolytic properties. It enhances GABAergic neurotransmission, providing relief from anxiety and tension. Bromazepam is indicated for the short-term treatment of anxiety disorders and may also be used for its sedative properties in certain clinical situations.' },
  { name: 'Norbac 250mg IM', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Ceftriaxone 250mg', form: 'Injection', reg: '25928', essential: true, packSize: '1\'s', description: 'Norbac 250mg IM contains Ceftriaxone, a third-generation cephalosporin antibiotic with broad-spectrum activity. It is effective against Gram-positive and Gram-negative bacteria, including resistant strains. Ceftriaxone is indicated for various bacterial infections including urinary tract infections, respiratory tract infections, and skin/soft tissue infections.' },
  { name: 'Norbac 500mg IM', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Ceftriaxone 500mg', form: 'Injection', reg: '25929', essential: true, packSize: '1\'s', description: 'Norbac 500mg IM provides higher dose Ceftriaxone for more severe infections. This formulation offers enhanced antibacterial coverage for complicated infections requiring aggressive antibiotic therapy. The intramuscular route ensures reliable absorption and therapeutic concentrations.' },
  { name: 'Norbac 1gm IM', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Ceftriaxone 1gm', form: 'Injection', reg: '25930', essential: true, packSize: '1\'s', description: 'Norbac 1gm IM delivers maximum dose Ceftriaxone for critical infections. This high-strength formulation is indicated for severe bacterial infections, sepsis, and infections in immunocompromised patients. The gram dose provides optimal pharmacokinetic properties for serious systemic infections.' },
  { name: 'Norbac 1gm IV', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Ceftriaxone 1gm IV', form: 'Injection', reg: '33793', essential: true, packSize: '1\'s', description: 'Norbac 1gm IV offers intravenous administration of Ceftriaxone for rapid and reliable therapeutic levels. This formulation is essential for hospitalized patients requiring immediate antibiotic therapy. The IV route ensures 100% bioavailability and is preferred for critically ill patients.' },
  { name: 'Norbac 250mg IV', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Ceftriaxone 250mg IV', form: 'Injection', reg: '33391', essential: true, packSize: '1\'s', description: 'Norbac 250mg IV provides intravenous Ceftriaxone for patients requiring parenteral antibiotic therapy. This formulation ensures complete and rapid absorption, making it ideal for acute infections requiring immediate intervention. The IV administration guarantees therapeutic drug levels.' },
  { name: 'Norbac 500mg IV', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Ceftriaxone 500mg IV', form: 'Injection', reg: '33792', essential: true, packSize: '1\'s', description: 'Norbac 500mg IV delivers intermediate dose Ceftriaxone intravenously for balanced therapeutic effect. This formulation is suitable for moderate to severe infections in hospitalized patients. The IV route provides predictable pharmacokinetics and optimal clinical outcomes.' },
  { name: 'Norbac 2gm IV', category: 'GASTRO INTESTINAL SYSTEM', generic: 'Ceftriaxone 2gm IV', form: 'Injection', reg: '94175', essential: true, packSize: '1\'s', description: 'Norbac 2gm IV provides the highest dose Ceftriaxone for life-threatening infections. This formulation is indicated for severe sepsis, meningitis, and multi-drug resistant infections. The 2-gram dose ensures maximum antibacterial activity against the most challenging pathogens.' },

  // ANTI ALLERGICS
  { name: 'Alergocit 5mg', category: 'ANTI ALLERGICS', generic: 'Levocetirizine 2HCl 5mg', form: 'Tablet', reg: '38935', essential: false },
  { name: 'Sebesta 10mg', category: 'ANTI ALLERGICS', generic: 'Ebastine 10mg', form: 'Tablet', reg: '24348', essential: false },
  { name: 'Levozine 5mg', category: 'ANTI ALLERGICS', generic: 'Levocetirizine Dihydrochloride 5mg', form: 'Tablet', reg: '38129', essential: false },
  { name: 'Lodine 10mg', category: 'ANTI ALLERGICS', generic: 'Loratadine 10mg', form: 'Tablet', reg: '41738', essential: false },
  { name: 'Monokast 10mg', category: 'ANTI ALLERGICS', generic: 'Montelukast Sodium 10mg', form: 'Tablet', reg: '38131', essential: false },

  // CARDIOVASCULAR
  { name: 'Rovast 5mg', category: 'CARDIOVASCULAR', generic: 'Rosuvastatin 5mg', form: 'Tablet', reg: '54808', essential: false },
  { name: 'Rovast 10mg', category: 'CARDIOVASCULAR', generic: 'Rosuvastatin 10mg', form: 'Tablet', reg: '54731', essential: false },
  { name: 'Rovast 20mg', category: 'CARDIOVASCULAR', generic: 'Rosuvastatin 20mg', form: 'Tablet', reg: '54735', essential: false },

  // NEURO
  { name: 'Sulprex 25mg', category: 'NEURO', generic: 'Levosulpiride 25mg', form: 'Tablet', reg: '66680', essential: false, packSize: '10\'s', description: 'Sulprex 25mg contains Levosulpiride, the active enantiomer of sulpiride with enhanced antipsychotic and prokinetic properties. It is indicated for the treatment of dyspepsia, gastroesophageal reflux, and psychotic disorders. Levosulpiride provides effective symptom relief with improved tolerability compared to racemic sulpiride.' },
  { name: 'Sulprex 50mg', category: 'NEURO', generic: 'Levosulpiride 50mg', form: 'Tablet', reg: '54732', essential: false, packSize: '10\'s', description: 'Sulprex 50mg offers higher dose Levosulpiride for enhanced therapeutic effect. This formulation is particularly effective for severe dyspeptic symptoms and moderate psychotic episodes. The increased dose ensures optimal receptor occupancy for comprehensive symptom control.' },
  { name: 'Aloram 0.25mg', category: 'NEURO', generic: 'Alprazolam 0.25mg', form: 'Tablet', reg: '41929', essential: false, packSize: '10\'s', description: 'Aloram 0.25mg contains Alprazolam, a benzodiazepine that enhances GABAergic neurotransmission. It is indicated for the short-term treatment of anxiety disorders and panic attacks. Alprazolam provides rapid anxiolytic effect with a favorable safety profile when used appropriately.' },
  { name: 'Aloram 0.5mg', category: 'NEURO', generic: 'Alprazolam 0.5mg', form: 'Tablet', reg: '41930', essential: false, packSize: '10\'s', description: 'Aloram 0.5mg provides intermediate dose Alprazolam for moderate anxiety symptoms. This formulation balances therapeutic efficacy with minimal sedative effects. It is suitable for patients requiring consistent anxiolytic therapy without excessive daytime drowsiness.' },
  { name: 'Aloram 1mg', category: 'NEURO', generic: 'Alprazolam 1mg', form: 'Tablet', reg: '41931', essential: false, packSize: '10\'s', description: 'Aloram 1mg delivers maximum dose Alprazolam for severe anxiety and panic disorders. This formulation is indicated for patients with refractory symptoms requiring potent benzodiazepine therapy. The higher dose ensures rapid and sustained anxiolytic effect.' },
  { name: 'Deroxat CR 12.5mg', category: 'NEURO', generic: 'Paroxetine 12.5mg', form: 'Tablet', reg: '69947', essential: false, packSize: '10\'s', description: 'Deroxat CR 12.5mg contains Paroxetine in controlled-release formulation, a selective serotonin reuptake inhibitor (SSRI). It is indicated for major depressive disorder, obsessive-compulsive disorder, and social anxiety disorder. The controlled-release mechanism provides sustained therapeutic levels with reduced side effects.' },
  { name: 'Deroxat CR 25mg', category: 'NEURO', generic: 'Paroxetine 25mg', form: 'Tablet', reg: '69949', essential: false, packSize: '10\'s', description: 'Deroxat CR 25mg offers higher dose Paroxetine for enhanced antidepressant effect. This formulation is suitable for patients with moderate to severe depression requiring aggressive therapy. The controlled-release technology ensures optimal pharmacokinetics throughout the dosing interval.' },
  { name: 'Esolex 5mg', category: 'NEURO', generic: 'Escitalopram 5mg', form: 'Tablet', reg: '38941', essential: false, packSize: '10\'s', description: 'Esolex 5mg contains Escitalopram, the S-enantiomer of Citalopram with superior serotonin reuptake inhibition. It is indicated for major depressive disorder and generalized anxiety disorder. Escitalopram offers improved efficacy and tolerability compared to racemic citalopram.' },
  { name: 'Esolex 10mg', category: 'NEURO', generic: 'Escitalopram 10mg', form: 'Tablet', reg: '38940', essential: false, packSize: '10\'s', description: 'Esolex 10mg provides standard dose Escitalopram for optimal therapeutic effect. This formulation is effective for moderate to severe depression and anxiety disorders. The higher dose ensures maximum serotonin reuptake inhibition for comprehensive symptom relief.' },
  { name: 'Peridal 1mg', category: 'NEURO', generic: 'Risperidone 1mg', form: 'Tablet', reg: '23861', essential: true, packSize: '10\'s', description: 'Peridal 1mg contains Risperidone, an atypical antipsychotic that antagonizes dopamine and serotonin receptors. It is indicated for schizophrenia, bipolar disorder, and irritability associated with autism. Risperidone provides effective symptom control with a favorable metabolic profile.' },
  { name: 'Peridal 2mg', category: 'NEURO', generic: 'Risperidone 2mg', form: 'Tablet', reg: '23862', essential: true, packSize: '10\'s', description: 'Peridal 2mg offers intermediate dose Risperidone for balanced therapeutic effect. This formulation is suitable for patients requiring moderate antipsychotic coverage. The dose provides optimal receptor occupancy while minimizing side effects.' },
  { name: 'Peridal 3mg', category: 'NEURO', generic: 'Risperidone 3mg', form: 'Tablet', reg: '23863', essential: true, packSize: '10\'s', description: 'Peridal 3mg delivers higher dose Risperidone for severe psychotic symptoms. This formulation is indicated for refractory schizophrenia and acute manic episodes. The increased dose ensures comprehensive symptom control in challenging cases.' },
  { name: 'Peridal 4mg', category: 'NEURO', generic: 'Risperidone 4mg', form: 'Tablet', reg: '23864', essential: true, packSize: '10\'s', description: 'Peridal 4mg provides maximum dose Risperidone for intensive antipsychotic therapy. This formulation is essential for severe, treatment-resistant psychosis. The high dose ensures adequate receptor blockade for optimal clinical response.' },
  { name: 'Duron 20mg', category: 'NEURO', generic: 'Duloxetine 20mg', form: 'Capsule', reg: '69895', essential: false, packSize: '10\'s', description: 'Duron 20mg contains Duloxetine, a serotonin-norepinephrine reuptake inhibitor (SNRI) used for the treatment of major depressive disorder, generalized anxiety disorder, and neuropathic pain. It works by increasing the levels of serotonin and norepinephrine in the brain, helping to improve mood and reduce pain perception.' },
  { name: 'Duron 30mg', category: 'NEURO', generic: 'Duloxetine 30mg', form: 'Capsule', reg: '69896', essential: false, packSize: '10\'s', description: 'Duron 30mg provides higher dose Duloxetine for enhanced therapeutic effect in depression and anxiety disorders. This formulation offers improved symptom control for patients requiring more potent antidepressant therapy. The enteric-coated capsule ensures optimal absorption and tolerability.' },
  { name: 'Ecogab 50mg', category: 'NEURO', generic: 'Pregabalin 50mg', form: 'Capsule', reg: '79416', essential: false, packSize: '10\'s', description: 'Ecogab 50mg contains Pregabalin, an anticonvulsant medication that binds to voltage-gated calcium channels in the central nervous system. It is indicated for the treatment of neuropathic pain, fibromyalgia, and as adjunctive therapy for partial-onset seizures. Pregabalin provides effective pain relief with anxiolytic properties.' },
  { name: 'Ecogab 75mg', category: 'NEURO', generic: 'Pregabalin 75mg', form: 'Capsule', reg: '79417', essential: false, packSize: '10\'s', description: 'Ecogab 75mg offers intermediate dose Pregabalin for balanced therapeutic effect. This formulation is particularly effective for diabetic neuropathy and postherpetic neuralgia. The capsule design ensures consistent dosing and improved patient compliance.' },
  { name: 'Eppra 250mg', category: 'NEURO', generic: 'Levetiracetam 250mg', form: 'Tablet', reg: '66485', essential: true, packSize: '10\'s', description: 'Eppra 250mg contains Levetiracetam, a pyrrolidine derivative that modulates synaptic neurotransmitter release. It is indicated as adjunctive therapy for partial-onset seizures in adults and children, and for myoclonic seizures. Levetiracetam offers excellent tolerability with minimal drug interactions.' },
  { name: 'Eppra 500mg', category: 'NEURO', generic: 'Levetiracetam 500mg', form: 'Tablet', reg: '66486', essential: true, packSize: '10\'s', description: 'Eppra 500mg provides higher dose Levetiracetam for optimal seizure control. This formulation is suitable for monotherapy and adjunctive treatment of epilepsy. The tablet form ensures precise dosing and ease of administration.' },
  { name: 'Eppra 500mg Injection', category: 'NEURO', generic: 'Levetiracetam 500mg/5ml', form: 'Injection', reg: '116615', essential: true, packSize: '5\'s', description: 'Eppra 500mg Injection offers parenteral Levetiracetam for patients unable to take oral medication. This formulation is essential for status epilepticus and acute seizure management in hospitalized patients. The concentrated solution allows for rapid intravenous administration.' },
  { name: 'Mibeglo 25mg', category: 'NEURO', generic: 'Mirabegron 25mg', form: 'Tablet', reg: '109401', essential: false, packSize: '10\'s', description: 'Mibeglo 25mg contains Mirabegron, a beta-3 adrenergic agonist that relaxes the detrusor muscle of the bladder. It is indicated for the treatment of overactive bladder with symptoms of urge urinary incontinence, urgency, and urinary frequency. Mirabegron provides effective symptom relief without the anticholinergic side effects.' },
  { name: 'Mibeglo 50mg', category: 'NEURO', generic: 'Mirabegron 50mg', form: 'Tablet', reg: '109402', essential: false, packSize: '10\'s', description: 'Mibeglo 50mg offers higher dose Mirabegron for enhanced therapeutic effect in overactive bladder. This formulation provides maximum symptom control for patients with severe urinary urgency and incontinence. The extended-release tablet ensures sustained therapeutic levels throughout the day.' },

  // STERILE
  { name: 'Transolide 500mg Capsule', category: 'STERILE', generic: 'Tranexamic Acid 500mg', form: 'Capsule', reg: '38938', essential: false, packSize: '10\'s', description: 'Transolide 500mg Capsule contains Tranexamic Acid, an antifibrinolytic agent that inhibits plasminogen activation. It is indicated for the treatment of menorrhagia, hereditary angioedema, and to reduce blood loss in various surgical procedures. Tranexamic acid helps stabilize blood clots and prevent excessive bleeding.' },
  { name: 'Transolide 500mg Injection', category: 'STERILE', generic: 'Tranexamic Acid 500mg', form: 'Injection', reg: '59436', essential: true, packSize: '5\'s', description: 'Transolide 500mg Injection provides parenteral Tranexamic Acid for acute bleeding situations. This formulation is essential for emergency treatment of hemorrhage, trauma, surgery, and obstetrics. The intravenous administration ensures rapid therapeutic effect in critical bleeding scenarios.' },

  // STEROIDAL
  { name: 'Begent Cream', category: 'STEROIDAL', generic: 'Betamethasone Dipropionate 0.064% + Gentamicin 1.7mg', form: 'Cream', reg: '63187', essential: true, packSize: '5g', description: 'Begent Cream combines Betamethasone, a potent corticosteroid, with Gentamicin, an aminoglycoside antibiotic. This topical formulation is indicated for the treatment of inflammatory skin conditions with secondary bacterial infection. The combination provides both anti-inflammatory and antibacterial effects for comprehensive dermatological therapy.' },

  // ANTIBIOTICS
  { name: 'Cialox 500mg', category: 'ANTIBIOTICS', generic: 'Ciprofloxacin 500mg', form: 'Tablet', reg: '41061', essential: false, packSize: '10\'s', description: 'Cialox 500mg contains Ciprofloxacin, a fluoroquinolone antibiotic with broad-spectrum activity against Gram-negative and some Gram-positive bacteria. It is indicated for urinary tract infections, respiratory tract infections, skin and soft tissue infections, and gastrointestinal infections. Ciprofloxacin offers excellent tissue penetration and oral bioavailability.' },
  { name: 'Cure-B 0.5mg', category: 'ANTIBIOTICS', generic: 'Entecavir 0.5mg', form: 'Tablet', reg: '63497', essential: true, packSize: '10\'s', description: 'Cure-B 0.5mg contains Entecavir, a nucleoside analog reverse transcriptase inhibitor used for the treatment of chronic hepatitis B virus (HBV) infection. It inhibits HBV DNA polymerase, reducing viral replication and improving liver function. Entecavir is highly effective with a low resistance profile.' },
  { name: 'Levaq 250mg', category: 'ANTIBIOTICS', generic: 'Levofloxacin 250mg', form: 'Tablet', reg: '66322', essential: true, packSize: '10\'s', description: 'Levaq 250mg contains Levofloxacin, the L-isomer of Ofloxacin with enhanced antibacterial activity. It is indicated for community-acquired pneumonia, acute bacterial sinusitis, complicated urinary tract infections, and skin infections. Levofloxacin provides excellent coverage against respiratory pathogens including atypical organisms.' },
  { name: 'Levaq 500mg', category: 'ANTIBIOTICS', generic: 'Levofloxacin 500mg', form: 'Tablet', reg: '66323', essential: true, packSize: '10\'s', description: 'Levaq 500mg provides higher dose Levofloxacin for severe infections requiring aggressive antibiotic therapy. This formulation offers optimal pharmacokinetic properties for the treatment of nosocomial pneumonia, complicated skin infections, and chronic bacterial prostatitis. The enhanced potency ensures efficacy against resistant pathogens.' },
  { name: 'Linzy 600mg', category: 'ANTIBIOTICS', generic: 'Linezolid 600mg', form: 'Tablet', reg: '63415', essential: true, packSize: '10\'s', description: 'Linzy 600mg contains Linezolid, an oxazolidinone antibiotic effective against Gram-positive bacteria including MRSA and VRE. It is indicated for the treatment of nosocomial pneumonia, complicated skin and soft tissue infections, and vancomycin-resistant Enterococcus faecium infections. Linezolid offers excellent oral bioavailability and tissue penetration.' },
  { name: 'Nafcin 250mg', category: 'ANTIBIOTICS', generic: 'Ciprofloxacin 250mg', form: 'Tablet', reg: '25576', essential: false, packSize: '10\'s', description: 'Nafcin 250mg provides lower dose Ciprofloxacin for less severe infections. This formulation is suitable for uncomplicated urinary tract infections and mild respiratory infections. The reduced dose minimizes the risk of adverse effects while maintaining therapeutic efficacy.' },
  { name: 'Nafcin 500mg', category: 'ANTIBIOTICS', generic: 'Ciprofloxacin 500mg', form: 'Tablet', reg: '25577', essential: false, packSize: '10\'s', description: 'Nafcin 500mg contains standard dose Ciprofloxacin for moderate to severe bacterial infections. It offers broad-spectrum coverage against urinary tract pathogens, gastrointestinal bacteria, and respiratory organisms. The tablet formulation ensures consistent dosing and high bioavailability.' },
  { name: 'Xymox 400mg', category: 'ANTIBIOTICS', generic: 'Moxifloxacin 400mg', form: 'Tablet', reg: '48330', essential: true, packSize: '5\'s', description: 'Xymox 400mg contains Moxifloxacin, a fourth-generation fluoroquinolone with enhanced activity against Gram-positive bacteria and atypical pathogens. It is indicated for community-acquired pneumonia, acute bacterial sinusitis, and complicated skin infections. Moxifloxacin offers excellent tissue penetration and once-daily dosing convenience.' },
  { name: 'Phusilan Cream', category: 'ANTIBIOTICS', generic: 'Fusidic Acid 20mg', form: 'Cream', reg: '26991', essential: false, packSize: '5g', description: 'Phusilan Cream contains Fusidic Acid, a steroidal antibiotic effective against Gram-positive bacteria including Staphylococcus and Streptococcus species. It is indicated for the topical treatment of impetigo, infected eczema, and other superficial skin infections. Fusidic acid provides excellent skin penetration with minimal systemic absorption.' },
  { name: 'Phusilan-H Cream', category: 'ANTIBIOTICS', generic: 'Fusidic Acid 20mg + Hydrocortisone Acetate 10mg', form: 'Cream', reg: '24081', essential: false, packSize: '5g', description: 'Phusilan-H Cream combines Fusidic Acid with Hydrocortisone for enhanced treatment of infected inflammatory skin conditions. The corticosteroid component reduces inflammation while the antibiotic eliminates bacterial infection. This combination is particularly effective for infected eczema and dermatitis.' },
  { name: 'Tineacort Cream', category: 'ANTIBIOTICS', generic: 'Miconazole 2% + Hydrocortisone 1%', form: 'Cream', reg: '26982', essential: true, packSize: '10g', description: 'Tineacort Cream combines Miconazole, an antifungal agent, with Hydrocortisone, a mild corticosteroid. It is indicated for the treatment of inflammatory fungal skin infections such as candidiasis and dermatophytosis with associated inflammation. The dual action provides both antifungal and anti-inflammatory effects.' },
  { name: 'Maxophine 100mg Suspension', category: 'ANTIBIOTICS', generic: 'Cefixime 100mg/5ml', form: 'Suspension', reg: '30553', essential: true, packSize: '30ml', description: 'Maxophine 100mg Suspension contains Cefixime, a third-generation cephalosporin antibiotic. The 100mg/5ml concentration allows for flexible pediatric dosing. It is indicated for otitis media, pharyngitis, urinary tract infections, and uncomplicated gonorrhea. The suspension form ensures accurate dosing for children.' },
  { name: 'Maxophine Plus 200mg Suspension', category: 'ANTIBIOTICS', generic: 'Cefixime 200mg/5ml', form: 'Suspension', reg: '54728', essential: true, packSize: '30ml', description: 'Maxophine Plus 200mg Suspension provides higher concentration Cefixime for enhanced therapeutic effect. This formulation is particularly useful for children requiring higher doses or those with resistant infections. The concentrated suspension maintains excellent palatability while ensuring therapeutic efficacy.' },
  { name: 'Maxophine 200mg Capsule', category: 'ANTIBIOTICS', generic: 'Cefixime 200mg', form: 'Capsule', reg: '56623', essential: true, packSize: '6\'s', description: 'Maxophine 200mg Capsule offers adult dosing of Cefixime for various bacterial infections. It provides excellent activity against common respiratory and urinary pathogens. The capsule formulation ensures optimal absorption and bioavailability for consistent therapeutic levels.' },
  { name: 'Maxophine 400mg Capsule', category: 'ANTIBIOTICS', generic: 'Cefixime 400mg', form: 'Capsule', reg: '30562', essential: true, packSize: '6\'s', description: 'Maxophine 400mg Capsule delivers high-dose Cefixime for severe or resistant infections. This formulation is indicated for complicated urinary tract infections and gonorrhea. The increased dose ensures efficacy against organisms with reduced susceptibility to cephalosporins.' },
  { name: 'Falcitrin Injection', category: 'ANTIBIOTICS', generic: 'Artemether 80mg/ml', form: 'Injection', reg: '56277', essential: false, packSize: '1\'s', description: 'Falcitrin Injection contains Artemether, an artemisinin derivative used for the treatment of severe malaria. It rapidly reduces parasitemia by interfering with parasite heme metabolism. The injectable formulation is essential for the emergency treatment of complicated falciparum malaria in critical care settings.' },
  { name: 'Lincolide 600mg Injection', category: 'ANTIBIOTICS', generic: 'Lincomycin 600mg', form: 'Injection', reg: '28147', essential: false, packSize: '2\'s', description: 'Lincolide 600mg Injection contains Lincomycin, a lincosamide antibiotic effective against anaerobic bacteria and some Gram-positive aerobes. It is indicated for serious infections caused by susceptible organisms, particularly in patients allergic to penicillin. Lincomycin provides good tissue penetration for bone and joint infections.' },
  { name: 'Merem 500mg Injection', category: 'ANTIBIOTICS', generic: 'Meropenem 500mg', form: 'Injection', reg: '38073', essential: true, packSize: '1\'s', description: 'Merem 500mg Injection contains Meropenem, a carbapenem antibiotic with broad-spectrum activity against Gram-negative, Gram-positive, and anaerobic bacteria. It is indicated for complicated intra-abdominal infections, nosocomial pneumonia, and meningitis. Meropenem offers excellent stability against beta-lactamases.' },
  { name: 'Merem 1gm Injection', category: 'ANTIBIOTICS', generic: 'Meropenem 1gm', form: 'Injection', reg: '38139', essential: true, packSize: '1\'s', description: 'Merem 1gm Injection provides high-dose Meropenem for severe infections and empirical therapy. This formulation is essential for critically ill patients with multi-drug resistant infections. The gram dose ensures optimal pharmacokinetic properties for life-threatening bacterial infections.' },
  { name: 'Glopez 1gm Injection', category: 'ANTIBIOTICS', generic: 'Cefoperazone 500mg + Sulbactam 500mg', form: 'Injection', reg: '42554', essential: false, packSize: '1\'s', description: 'Glopez 1gm Injection combines Cefoperazone, a third-generation cephalosporin, with Sulbactam, a beta-lactamase inhibitor. This combination extends the spectrum to include beta-lactamase producing organisms. It is indicated for intra-abdominal infections, urinary tract infections, and respiratory tract infections.' },
  { name: 'Glopez 2gm Injection', category: 'ANTIBIOTICS', generic: 'Cefoperazone 1gm + Sulbactam 1gm', form: 'Injection', reg: '42555', essential: false, packSize: '1\'s', description: 'Glopez 2gm Injection delivers double-strength combination therapy for severe infections. This formulation provides enhanced antibacterial activity against resistant pathogens. The higher dose is particularly effective for nosocomial infections and polymicrobial sepsis.' },
  { name: 'Zoycin 2.25gm Injection', category: 'ANTIBIOTICS', generic: 'Piperacillin 2gm + Tazobactam 250mg', form: 'Injection', reg: '66340', essential: true, packSize: '1\'s', description: 'Zoycin 2.25gm Injection combines Piperacillin, an extended-spectrum penicillin, with Tazobactam, a beta-lactamase inhibitor. This combination provides broad-spectrum coverage against Gram-negative, Gram-positive, and anaerobic bacteria. It is indicated for complicated intra-abdominal infections, nosocomial pneumonia, and skin/soft tissue infections.' },
  { name: 'Zoycin 4.5gm Injection', category: 'ANTIBIOTICS', generic: 'Piperacillin 4gm + Tazobactam 500mg', form: 'Injection', reg: '66599', essential: true, packSize: '1\'s', description: 'Zoycin 4.5gm Injection offers maximum dose combination therapy for life-threatening infections. This formulation is essential for empirical treatment of febrile neutropenia and multi-drug resistant infections. The high dose ensures therapeutic levels against the most challenging pathogens.' },
  { name: 'Cure-C Forte', category: 'ANTIBIOTICS', generic: 'Sofosbuvir 400mg + Velpatasvir 100mg', form: 'Tablet', reg: '97677', essential: true, packSize: '28\'s', description: 'Cure-C Forte combines Sofosbuvir and Velpatasvir for the treatment of chronic hepatitis C virus (HCV) infection. Sofosbuvir inhibits HCV NS5B polymerase while Velpatasvir inhibits NS5A protein. This pangenotypic regimen offers high cure rates across all HCV genotypes with a favorable safety profile.' },
  { name: 'Viro-B 300mg', category: 'ANTIBIOTICS', generic: 'Tenofovir Disoproxil Fumarate 300mg', form: 'Tablet', reg: '89582', essential: true, packSize: '30\'s', description: 'Viro-B 300mg contains Tenofovir, a nucleotide analog reverse transcriptase inhibitor used for HIV and HBV treatment. It inhibits viral DNA polymerase, preventing viral replication. Tenofovir is a cornerstone of antiretroviral therapy with excellent long-term safety and efficacy.' },
  { name: 'Fungicure 150mg', category: 'ANTIBIOTICS', generic: 'Fluconazole 150mg', form: 'Capsule', reg: '24808', essential: true, packSize: '1\'s', description: 'Fungicure 150mg contains Fluconazole, a triazole antifungal agent with excellent oral bioavailability. It is indicated for the treatment of vaginal candidiasis, oropharyngeal candidiasis, and cryptococcal meningitis. Fluconazole offers convenient single-dose therapy for many fungal infections.' },
  { name: 'Terbister 125mg Tablet', category: 'ANTIBIOTICS', generic: 'Terbinafine 125mg', form: 'Tablet', reg: '121883', essential: false, packSize: '10\'s', description: 'Terbister 125mg Tablet contains Terbinafine, an allylamine antifungal that inhibits squalene epoxidase. It is indicated for the treatment of onychomycosis and dermatophytosis. Terbinafine provides excellent tissue penetration and persistent antifungal activity.' },
  { name: 'Terbister 250mg Tablet', category: 'ANTIBIOTICS', generic: 'Terbinafine 250mg', form: 'Tablet', reg: '121884', essential: false, packSize: '7\'s', description: 'Terbister 250mg Tablet offers standard dose Terbinafine for optimal treatment duration. This formulation is particularly effective for toenail onychomycosis requiring 12-week therapy. The higher dose ensures adequate drug levels for complete mycological cure.' },
  { name: 'Terbister 1% Cream', category: 'ANTIBIOTICS', generic: 'Terbinafine Hydrochloride 10mg/g', form: 'Cream', reg: '121548', essential: true, packSize: '10g', description: 'Terbister 1% Cream provides topical Terbinafine for superficial fungal infections. It is indicated for tinea corporis, tinea cruris, and tinea pedis. The cream formulation allows for direct application to affected areas with minimal systemic absorption.' },

  // NSAIDS
  { name: 'Artinil-K 75mg', category: 'NSAIDS', generic: 'Diclofenac Potassium 75mg', form: 'Tablet', reg: '21634', essential: false, packSize: '10\'s', description: 'Artinil-K 75mg contains Diclofenac Potassium, a NSAID with rapid onset of action due to its potassium salt formulation. It provides effective relief from pain and inflammation associated with musculoskeletal disorders, dental pain, and menstrual pain. The enteric-coated tablet minimizes gastrointestinal side effects.' },
  { name: 'Cox-2 100mg', category: 'NSAIDS', generic: 'Nimesulide 100mg', form: 'Tablet', reg: '24584', essential: false, packSize: '10\'s', description: 'Cox-2 100mg contains Nimesulide, a preferential COX-2 inhibitor with potent analgesic and anti-inflammatory properties. It is indicated for the treatment of acute pain, osteoarthritis, and primary dysmenorrhea. Nimesulide offers effective pain relief with a favorable gastrointestinal safety profile.' },
  { name: 'Gloral Forte', category: 'NSAIDS', generic: 'Paracetamol 650mg + Orphenadrine Citrate 50mg', form: 'Tablet', reg: '75279', essential: false, packSize: '10\'s', description: 'Gloral Forte combines Paracetamol, a centrally acting analgesic, with Orphenadrine, a muscle relaxant. This formulation provides comprehensive relief from musculoskeletal pain, tension headaches, and muscle spasms. The combination offers enhanced analgesic effect with reduced individual drug doses.' },
  { name: 'Gloral', category: 'NSAIDS', generic: 'Orphenadrine Citrate 35mg + Paracetamol 450mg', form: 'Tablet', reg: '66681', essential: false, packSize: '10\'s', description: 'Gloral combines Orphenadrine Citrate with Paracetamol for synergistic pain relief. Orphenadrine provides muscle relaxation while Paracetamol offers central analgesia. This combination is particularly effective for tension headaches, cervical spondylosis, and musculoskeletal pain syndromes.' },
  { name: 'Mobix 7.5mg', category: 'NSAIDS', generic: 'Meloxicam 7.5mg', form: 'Tablet', reg: '30032', essential: false, packSize: '10\'s', description: 'Mobix 7.5mg contains Meloxicam, a preferential COX-2 inhibitor with excellent anti-inflammatory and analgesic properties. It is indicated for the treatment of osteoarthritis, rheumatoid arthritis, and ankylosing spondylitis. Meloxicam offers once-daily dosing convenience with sustained therapeutic effect.' },
  { name: 'Mobix 15mg', category: 'NSAIDS', generic: 'Meloxicam 15mg', form: 'Tablet', reg: '30033', essential: false, packSize: '10\'s', description: 'Mobix 15mg provides higher dose Meloxicam for enhanced anti-inflammatory effect. This formulation is suitable for patients requiring more aggressive therapy for rheumatoid arthritis and other inflammatory conditions. The increased dose ensures optimal symptom control in severe cases.' },
  { name: 'P-Cyclo 20mg', category: 'NSAIDS', generic: 'Piroxicam as Betacyclodextrin 20mg', form: 'Tablet', reg: '48328', essential: false, packSize: '10\'s', description: 'P-Cyclo 20mg contains Piroxicam formulated with betacyclodextrin for improved solubility and bioavailability. This NSAID provides long-lasting anti-inflammatory and analgesic effects. It is indicated for osteoarthritis, rheumatoid arthritis, and acute musculoskeletal pain with once-daily dosing.' },
  { name: 'Promig 550mg', category: 'NSAIDS', generic: 'Naproxen Sodium 550mg', form: 'Tablet', reg: '41666', essential: false, packSize: '10\'s', description: 'Promig 550mg contains Naproxen Sodium, a NSAID with excellent anti-inflammatory properties and long half-life. It is indicated for rheumatoid arthritis, osteoarthritis, ankylosing spondylitis, and acute gout. Naproxen provides sustained pain relief with twice-daily dosing convenience.' },
  { name: 'Pentacin Injection', category: 'NSAIDS', generic: 'Pentazocine Lactate 30mg/ml', form: 'Injection', reg: '42814', essential: false, packSize: '1\'s', description: 'Pentacin Injection contains Pentazocine, a mixed opioid agonist-antagonist analgesic. It provides effective pain relief for moderate to severe pain with a lower risk of respiratory depression compared to pure agonists. The injectable formulation allows for rapid onset in acute pain management.' },
  { name: 'Artinil-K Gel', category: 'NSAIDS', generic: 'Diclofenac Diethylammonium 1.16g/g', form: 'Gel', reg: '24805', essential: false, packSize: '20g', description: 'Artinil-K Gel provides topical Diclofenac for localized pain relief. The gel formulation allows direct application to affected areas for osteoarthritis, sprains, and strains. Diclofenac penetrates the skin to reduce inflammation and pain at the site of application.' },
  { name: 'Mobicam Gel', category: 'NSAIDS', generic: 'Piroxicam 0.5%', form: 'Gel', reg: '24807', essential: false, packSize: '20g', description: 'Mobicam Gel contains Piroxicam in a topical formulation for localized anti-inflammatory effect. It is indicated for osteoarthritis of superficial joints, tendinitis, and bursitis. The gel provides targeted relief with minimal systemic absorption and side effects.' },
  { name: 'Articure 2ml Injection', category: 'NSAIDS', generic: 'Diclofenac Sodium 75mg + Lidocaine HCl 20mg', form: 'Injection', reg: '30532', essential: false, packSize: '5\'s', description: 'Articure 2ml Injection combines Diclofenac with Lidocaine for enhanced intramuscular administration. Lidocaine reduces injection pain while Diclofenac provides systemic anti-inflammatory effect. This formulation is ideal for acute musculoskeletal pain requiring parenteral therapy.' },
  { name: 'Fevonor Injection', category: 'NSAIDS', generic: 'Paracetamol 300mg + Lignocaine HCl 20mg', form: 'Injection', reg: '30006', essential: false, packSize: '10\'s', description: 'Fevonor Injection combines Paracetamol with Lidocaine for intravenous pain management. Lidocaine facilitates administration while Paracetamol provides effective analgesia. This formulation is particularly useful for postoperative pain and fever management in hospitalized patients.' },
  { name: 'Mobicam 20mg Injection', category: 'NSAIDS', generic: 'Piroxicam 20mg/ml', form: 'Injection', reg: '22844', essential: false, packSize: '6\'s', description: 'Mobicam 20mg Injection provides parenteral Piroxicam for acute inflammatory conditions. The injectable formulation ensures rapid therapeutic levels for severe pain and inflammation. It is indicated for postoperative pain, acute gout, and exacerbation of chronic inflammatory conditions.' },
  { name: 'Duoglob 75mg/20mg MR', category: 'NSAIDS', generic: 'Diclofenac Sodium 75mg + Omeprazole 20mg', form: 'Capsule', reg: '121882', essential: false, packSize: '10\'s', description: 'Duoglob 75mg/20mg MR combines Diclofenac with Omeprazole in a modified-release formulation. Omeprazole protects against NSAID-induced gastrointestinal complications while Diclofenac provides sustained anti-inflammatory effect. This combination ensures both efficacy and gastrointestinal safety.' },
  { name: 'Mobicam 20mg Capsule', category: 'NSAIDS', generic: 'Piroxicam 20mg', form: 'Capsule', reg: '17457', essential: false, packSize: '10\'s', description: 'Mobicam 20mg Capsule offers oral Piroxicam for long-term anti-inflammatory therapy. The capsule formulation provides sustained release for once-daily dosing convenience. It is indicated for chronic inflammatory conditions requiring continuous NSAID therapy.' },
  { name: 'Rama-D 50mg Capsule', category: 'NSAIDS', generic: 'Tramadol HCl 50mg', form: 'Capsule', reg: '26986', essential: false, packSize: '10\'s', description: 'Rama-D 50mg Capsule contains Tramadol, a centrally acting opioid analgesic. It provides effective relief from moderate to severe pain through mu-opioid receptor agonism and serotonin/norepinephrine reuptake inhibition. Tramadol offers a favorable safety profile compared to traditional opioids.' },
  { name: 'Opinor Injection', category: 'NSAIDS', generic: 'Buprenorphine HCl 0.3mg/ml', form: 'Injection', reg: '41538', essential: false, packSize: '5\'s', description: 'Opinor Injection contains Buprenorphine, a partial opioid agonist with high affinity for mu receptors. It provides potent analgesia for moderate to severe pain with a ceiling effect on respiratory depression. The injectable formulation allows for flexible dosing in pain management.' },
  { name: 'Toralac 30mg Injection', category: 'NSAIDS', generic: 'Ketorolac Tromethamine 30mg/ml', form: 'Injection', reg: '50290', essential: false, packSize: '10\'s', description: 'Toralac 30mg Injection contains Ketorolac, a potent NSAID for short-term pain management. It provides rapid and effective analgesia for postoperative pain and acute musculoskeletal injuries. The injectable formulation is limited to 5 days of use due to gastrointestinal risks.' },
  { name: 'Rama-D 100mg Injection', category: 'NSAIDS', generic: 'Tramadol HCl 100mg', form: 'Injection', reg: '26987', essential: false, packSize: '5\'s', description: 'Rama-D 100mg Injection provides higher dose Tramadol for severe pain management. The parenteral formulation ensures rapid onset and reliable absorption. It is indicated for postoperative pain, cancer pain, and other acute pain conditions requiring opioid analgesia.' },

  // MUSCLE RELAXANTS
  { name: 'Tizadin 2mg', category: 'MUSCLE RELAXANTS', generic: 'Tizanidine HCl 2mg', form: 'Tablet', reg: '28366', essential: false, packSize: '10\'s', description: 'Tizadin 2mg contains Tizanidine, a centrally acting muscle relaxant that reduces spasticity through alpha-2 adrenergic agonism. It is indicated for the treatment of spasticity associated with multiple sclerosis, spinal cord injury, and other neurological conditions. Tizanidine provides effective muscle relaxation with sedative properties.' },
  { name: 'Cidekel 4mg', category: 'MUSCLE RELAXANTS', generic: 'Thiocolchicoside 4mg', form: 'Capsule', reg: '30563', essential: false, packSize: '10\'s', description: 'Cidekel 4mg contains Thiocolchicoside, a muscle relaxant with anti-inflammatory properties derived from colchicine. It acts centrally and peripherally to reduce muscle spasms and inflammation. Thiocolchicoside is indicated for painful muscle contractures and musculoskeletal disorders.' },

  // ANTI-DIABETICS
  { name: 'Incrit-M 50/500mg', category: 'ANTI-DIABETICS', generic: 'Sitagliptin 50mg + Metformin 500mg', form: 'Tablet', reg: '99560', essential: false, packSize: '10\'s', description: 'Incrit-M 50/500mg combines Sitagliptin, a DPP-4 inhibitor, with Metformin for comprehensive type 2 diabetes management. Sitagliptin enhances incretin action while Metformin improves insulin sensitivity. This combination provides better glycemic control with complementary mechanisms of action.' },
  { name: 'Incrit-M 50/1000mg', category: 'ANTI-DIABETICS', generic: 'Sitagliptin 50mg + Metformin 1000mg', form: 'Tablet', reg: '99561', essential: false, packSize: '10\'s', description: 'Incrit-M 50/1000mg offers higher dose Metformin with Sitagliptin for enhanced glycemic control. This formulation is suitable for patients requiring aggressive diabetes management. The increased Metformin dose provides better insulin sensitization while maintaining the incretin effect.' },
  { name: 'Jazin-M 12.5mg/500mg', category: 'ANTI-DIABETICS', generic: 'Empagliflozin 12.5mg + Metformin 500mg', form: 'Tablet', reg: '113846', essential: false, packSize: '10\'s', description: 'Jazin-M 12.5mg/500mg combines Empagliflozin, an SGLT2 inhibitor, with Metformin for dual-action diabetes therapy. Empagliflozin promotes urinary glucose excretion while Metformin improves insulin sensitivity. This combination offers comprehensive glycemic control with cardiovascular benefits.' },
  { name: 'Jazin-M 12.5mg/1000mg', category: 'ANTI-DIABETICS', generic: 'Empagliflozin 12.5mg + Metformin 1000mg', form: 'Tablet', reg: '113846', essential: false, packSize: '10\'s', description: 'Jazin-M 12.5mg/1000mg provides higher dose Metformin with Empagliflozin for optimal diabetes management. This formulation maximizes the complementary effects of both medications. The increased Metformin dose enhances insulin sensitivity while Empagliflozin provides continuous glucose lowering through urinary excretion.' },

  // MINERALS & SUPPLEMENTS
  { name: 'Mecomed 500mcg Tablet', category: 'MINERALS & SUPPLEMENTS', generic: 'Mecobalamin 500mcg', form: 'Tablet', reg: '41670', essential: false, packSize: '10\'s', description: 'Mecomed 500mcg Tablet contains Mecobalamin, the active form of vitamin B12 essential for neurological function and red blood cell formation. It is indicated for vitamin B12 deficiency, peripheral neuropathy, and megaloblastic anemia. Mecobalamin provides superior bioavailability compared to cyanocobalamin.' },
  { name: 'Mecomed 500mcg Injection', category: 'MINERALS & SUPPLEMENTS', generic: 'Mecobalamin 500mcg/ml', form: 'Injection', reg: '30200', essential: false, packSize: '5\'s', description: 'Mecomed 500mcg Injection offers parenteral Mecobalamin for rapid correction of vitamin B12 deficiency. The injectable formulation ensures 100% bioavailability and is essential for patients with malabsorption syndromes or severe deficiency. It provides immediate therapeutic levels for neurological symptom relief.' },
  { name: 'Calciferol Injection', category: 'MINERALS & SUPPLEMENTS', generic: 'Cholecalciferol 5mg/ml', form: 'Injection', reg: '56536', essential: true, packSize: '1\'s', description: 'Calciferol Injection contains Cholecalciferol (vitamin D3) for the treatment of vitamin D deficiency and rickets. The high-dose injectable formulation provides rapid correction of severe deficiency states. It is essential for patients with malabsorption or those requiring immediate vitamin D supplementation.' },
  { name: 'Xefra 250mg', category: 'MINERALS & SUPPLEMENTS', generic: 'Deferasirox 250mg', form: 'Tablet', reg: '87320', essential: true, packSize: '28\'s', description: 'Xefra 250mg contains Deferasirox, an oral iron chelator used for the treatment of chronic iron overload in transfusion-dependent patients. It binds excess iron and promotes its excretion. Deferasirox offers convenient once-daily dosing for long-term iron chelation therapy.' },
  { name: 'Xefra 500mg', category: 'MINERALS & SUPPLEMENTS', generic: 'Deferasirox 500mg', form: 'Tablet', reg: '87321', essential: true, packSize: '28\'s', description: 'Xefra 500mg provides higher dose Deferasirox for patients with severe iron overload. This formulation offers enhanced chelation capacity for aggressive iron removal. The increased dose ensures optimal control of iron levels in heavily transfused patients.' },
  { name: 'G-fer Injection', category: 'MINERALS & SUPPLEMENTS', generic: 'Elemental Iron (as Sucrose) 100mg/ml', form: 'Injection', reg: '46017', essential: false, packSize: '5\'s', description: 'G-fer Injection contains iron sucrose complex for the treatment of iron deficiency anemia. The sucrose formulation minimizes infusion reactions and allows rapid iron repletion. It is indicated for patients who cannot tolerate oral iron or require immediate correction of severe anemia.' },

  // UROLOGICALS
  { name: 'Solicept 5mg', category: 'UROLOGICALS', generic: 'Solifenacin Succinate 5mg', form: 'Tablet', reg: '66335', essential: false, packSize: '10\'s', description: 'Solicept 5mg contains Solifenacin, a muscarinic receptor antagonist that relaxes the bladder smooth muscle. It is indicated for the treatment of overactive bladder with symptoms of urinary urgency, frequency, and urge incontinence. Solifenacin provides effective symptom relief with once-daily dosing.' },
  { name: 'Solicept 10mg', category: 'UROLOGICALS', generic: 'Solifenacin Succinate 10mg', form: 'Tablet', reg: '66336', essential: false, packSize: '10\'s', description: 'Solicept 10mg offers higher dose Solifenacin for enhanced bladder control. This formulation is suitable for patients with severe overactive bladder symptoms requiring more potent antimuscarinic effect. The increased dose ensures optimal therapeutic response.' },
  { name: 'Sildin 4mg', category: 'UROLOGICALS', generic: 'Silodosin 4mg', form: 'Capsule', reg: '111887', essential: false, packSize: '10\'s', description: 'Sildin 4mg contains Silodosin, a selective alpha-1A adrenergic receptor antagonist that relaxes prostate smooth muscle. It is indicated for the treatment of benign prostatic hyperplasia (BPH) symptoms including urinary frequency, urgency, and weak stream. Silodosin provides rapid symptom improvement with minimal cardiovascular effects.' },
  { name: 'Sildin 8mg', category: 'UROLOGICALS', generic: 'Silodosin 8mg', form: 'Capsule', reg: '111888', essential: false, packSize: '10\'s', description: 'Sildin 8mg provides higher dose Silodosin for maximum prostate relaxation. This formulation offers enhanced relief from BPH symptoms in patients requiring more aggressive therapy. The increased dose ensures optimal urethral relaxation and urinary flow improvement.' },
  { name: 'Tamsol 0.4mg', category: 'UROLOGICALS', generic: 'Tamsulosin HCl 0.4mg', form: 'Capsule', reg: '75421', essential: false, packSize: '10\'s', description: 'Tamsol 0.4mg contains Tamsulosin, a selective alpha-1A and alpha-1B adrenergic receptor antagonist. It relaxes prostate and bladder neck smooth muscle, improving urinary flow in BPH patients. Tamsulosin provides sustained symptom relief with minimal effect on blood pressure.' },
  { name: 'Tamsol-S 0.4mg/6mg', category: 'UROLOGICALS', generic: 'Tamsulosin 0.4mg + Solifenacin 6mg', form: 'Tablet', reg: '96667', essential: false, packSize: '10\'s', description: 'Tamsol-S 0.4mg/6mg combines Tamsulosin with Solifenacin for comprehensive treatment of BPH with overactive bladder. Tamsulosin improves urinary flow while Solifenacin controls bladder overactivity. This combination addresses both voiding and storage symptoms of BPH.' },
];

const CATEGORIES_LIST = [...new Set(ALL_PRODUCTS.map(p => p.category))];

export default function Products() {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const alphabetRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const router = useRouter();

  // Reset category filter when letter changes to avoid showing empty filtered state
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

  // Only show categories that have at least one product starting with the selected letter
  const availableCategories = CATEGORIES_LIST.filter(cat =>
    ALL_PRODUCTS.some(p =>
      p.category === cat &&
      p.name.toUpperCase().startsWith(selectedLetter)
    )
  );

  // Count scoped to the selected letter
  const categoryCount = (cat: string) =>
    ALL_PRODUCTS.filter(p =>
      p.category === cat &&
      p.name.toUpperCase().startsWith(selectedLetter)
    ).length;

  // Total products for the selected letter
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
            {/* All Categories button — scoped to selected letter */}
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

            {/* Only render categories that have products for the selected letter */}
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

            {/* Empty state for sidebar when no categories match */}
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
                    key={`${product.name}-${product.reg}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="bg-white border border-gray-100 rounded-md p-4 shadow-sm hover:shadow-md hover:border-red-100 transition-all cursor-pointer group"
                    onClick={() => router.push(`/detailedproduct/${encodeURIComponent(product.name)}`)}
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
                          {/* <span className={`text-lg px-2 py-0.5 rounded-full ${
                            product.essential
                              ? 'bg-green-50 text-green-700'
                              : 'bg-gray-50 text-gray-500'
                          }`}> */}
                            {/* {product.essential ? 'Essential' : 'Non-Essential'} */}
                          {/* </span> */}
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