# Database list

_Auto-generated from `data/*.json` by `scripts/build.mjs` — do not edit by hand. 233 databases, last built 2026-11-05._


## ICU, Perioperative & Emergency Care

Detailed, de-identified records from intensive care units, operating rooms and emergency departments: vitals, labs, medications, notes and outcomes.

| Database | Access | Description | Article |
|---|---|---|---|
| [MIMIC-IV](https://physionet.org/content/mimiciv/) | Credentialed | The flagship open critical-care database: de-identified EHR data for patients admitted to the ICU or emergency department of Beth Israel Deaconess Medical Center, Boston (2008–2019). Includes demographics, vitals, labs, medications, procedures, diagnoses and survival, organised in modular hospital (hosp) and ICU (icu) tables. | [Johnson AEW et al. Sci Data 2023;10:1](https://doi.org/10.1038/s41597-022-01899-x) |
| [MIMIC-III](https://physionet.org/content/mimiciii/) | Credentialed | The predecessor of MIMIC-IV covering ~46,000 ICU patients at BIDMC (2001–2012), including bedside charting, labs, medications and >2 million free-text clinical notes. Still the most cited ICU dataset and the basis of many benchmarks. | [Johnson AEW et al. Sci Data 2016;3:160035](https://doi.org/10.1038/sdata.2016.35) |
| [MIMIC-IV Clinical Database Demo](https://physionet.org/content/mimic-iv-demo/) | Open | A 100-patient subset of MIMIC-IV with identical structure, released openly so anyone can learn the schema and test code before applying for full access. | — |
| [MIMIC-IV-ED](https://physionet.org/content/mimic-iv-ed/) | Credentialed | Emergency department module of MIMIC-IV with ~425,000 ED stays: triage, vital signs, medication reconciliation, dispensed medications and diagnoses. Links to MIMIC-IV hospital and ICU records. | — |
| [MIMIC-IV-Note](https://physionet.org/content/mimic-iv-note/) | Credentialed | De-identified free-text discharge summaries (~330,000) and radiology reports (~2.3 million) linked to MIMIC-IV patients — a major resource for clinical NLP and LLM research. | — |
| [MIMIC-IV-ECHO](https://physionet.org/content/mimic-iv-echo/) | Credentialed | Echocardiogram DICOM studies (~500,000 videos) from patients in MIMIC-IV, linkable to their EHR data and notes for multimodal cardiac research. | — |
| [eICU-CRD](https://physionet.org/content/eicu-crd/) | Credentialed | Multi-centre ICU data for >200,000 admissions across 208 US hospitals (2014–2015) collected through the Philips eICU telehealth programme. Complements single-centre MIMIC for external validation. | [Pollard TJ et al. Sci Data 2018;5:180178](https://doi.org/10.1038/sdata.2018.178) |
| [AmsterdamUMCdb](https://amsterdammedicaldatascience.nl/) | Application | The first freely accessible European ICU database: ~23,000 ICU admissions at Amsterdam UMC (2003–2016) with high-resolution vitals, ventilator settings, labs and drugs (~1 billion data points). | [Thoral PJ et al. Crit Care Med 2021;49:e563](https://doi.org/10.1097/CCM.0000000000004916) |
| [HiRID](https://physionet.org/content/hirid/) | Credentialed | Data for ~34,000 ICU admissions at Bern University Hospital with physiological parameters sampled every 2 minutes — notably higher resolution than most ICU datasets. Developed for early warning of circulatory failure. | [Hyland SL et al. Nat Med 2020;26:364](https://doi.org/10.1038/s41591-020-0789-4) |
| [SICdb](https://physionet.org/content/sicdb/) | Credentialed | ICU data for ~27,000 admissions at University Hospital Salzburg (2013–2021) including per-minute vital signs, therapies, labs and cost-related information. | [Rodemund N et al. Intensive Care Med 2023;49:987](https://doi.org/10.1007/s00134-023-07046-3) |
| [PIC](https://physionet.org/content/picdb/) | Credentialed | A large paediatric ICU database from the Children's Hospital of Zhejiang University School of Medicine (2010–2018) covering ~13,000 children, structured similarly to MIMIC. | [Zeng X et al. Sci Data 2020;7:14](https://doi.org/10.1038/s41597-020-0355-4) |
| [VitalDB](https://vitaldb.net/dataset/) | Open | High-fidelity intraoperative data from 6,388 surgical patients at Seoul National University Hospital: synchronised waveforms (ECG, arterial pressure, EEG/BIS, ventilator), numeric vitals, anaesthetic drugs and perioperative clinical data. | [Lee HC et al. Sci Data 2022;9:279](https://doi.org/10.1038/s41597-022-01411-5) |
| [INSPIRE](https://physionet.org/content/inspire/) | Credentialed | Perioperative research dataset of ~130,000 surgical cases from Seoul National University Hospital, combining intraoperative vitals with pre- and post-operative EHR data and outcomes. | [Lim L et al. Sci Data 2024;11:655](https://doi.org/10.1038/s41597-024-03517-4) |
| [MC-MED](https://physionet.org/content/mc-med/) | Credentialed | 118,385 adult ED visits at Stanford (2020–2022) pairing continuous vitals and waveforms (ECG, PPG, respiration) with structured EHR data and radiology reports. | [Kansal A et al. Sci Data 2025](https://doi.org/10.1038/s41597-025-05419-5) |
| [MOVER](https://archive.ics.uci.edu/dataset/877) | Application | Operating-room data from ~58,000 surgical patients at UC Irvine Medical Center, including intraoperative waveforms, vitals, medications and perioperative EHR records. | [Samad M et al. JAMIA Open 2023;6:ooad084](https://doi.org/10.1093/jamiaopen/ooad084) |
| [PhysioNet/CinC Challenge 2019 (Sepsis)](https://physionet.org/content/challenge-2019/) | Open | Hourly ICU data for ~40,000 patients from three hospital systems, released for early prediction of sepsis. A compact, ready-to-model benchmark. | [Reyna MA et al. Crit Care Med 2020;48:210](https://doi.org/10.1097/CCM.0000000000004145) |

## EHR, Cohorts, Registries & Synthetic Data

Large longitudinal research cohorts, national registries, multi-site EHR enclaves and realistic synthetic records for prototyping.

| Database | Access | Description | Article |
|---|---|---|---|
| [All of Us Research Hub](https://www.researchallofus.org/) | Registration | NIH programme building a cohort of 1 million+ diverse US participants with EHRs, surveys, physical measurements, wearables and whole-genome sequences, analysed in a cloud Researcher Workbench. | [All of Us Investigators. N Engl J Med 2019;381:668](https://doi.org/10.1056/NEJMsr1809937) |
| [N3C](https://ncats.nih.gov/research/research-activities/n3c) | Application | A secure enclave harmonising EHR data from >20 million patients (COVID-19 positive and controls) across US health systems into the OMOP model. | [Haendel MA et al. JAMIA 2021;28:427](https://doi.org/10.1093/jamia/ocaa196) |
| [Synthea](https://synthea.mitre.org/downloads) | Open | Open-source synthetic patient generator plus downloadable synthetic populations (e.g. SyntheticMass) with complete lifetime records in FHIR, C-CDA and CSV — no privacy restrictions. | [Walonoski J et al. JAMIA 2018;25:230](https://doi.org/10.1093/jamia/ocx079) |
| [CMS DE-SynPUF](https://www.cms.gov/data-research/statistics-trends-and-reports/medicare-claims-synthetic-public-use-files) | Open | Synthetic Medicare beneficiary, inpatient, outpatient, carrier and prescription-drug claims (2008–2010) that mirror the structure of real CMS claims for training and software development. | — |
| [Diabetes 130-US Hospitals (1999–2008)](https://archive.ics.uci.edu/dataset/296/diabetes+130-us+hospitals+for+years+1999-2008) | Open | ~100,000 diabetic inpatient encounters from 130 US hospitals with labs, medications and 30-day readmission outcome — a classic teaching and ML benchmark. | [Strack B et al. Biomed Res Int 2014:781670](https://doi.org/10.1155/2014/781670) |
| [SEER](https://seer.cancer.gov/data/) | Application | Population-based cancer registry data covering ~48% of the US population: incidence, stage, treatment and survival since 1975, analysable with the free SEER*Stat software. | — |
| [NCI CDAS (PLCO & NLST)](https://cdas.cancer.gov/) | Application | Individual-level data, images and biospecimen information from the PLCO cancer screening trial (~155,000 participants) and the National Lung Screening Trial (~54,000 participants). | [NLST Research Team. N Engl J Med 2011;365:395](https://doi.org/10.1056/NEJMoa1102873) |
| [NHLBI BioLINCC](https://biolincc.nhlbi.nih.gov/) | Application | Individual-level data from >250 NHLBI-funded cohorts and trials such as Framingham, ARIC, MESA, CARDIA, WHI and SPRINT — a gold mine for cardiovascular and lung epidemiology. | — |
| [NIDDK Central Repository](https://repository.niddk.nih.gov/) | Application | Data and biosamples from NIDDK-funded studies in diabetes, obesity, kidney, liver and digestive diseases (e.g. DPP, TODAY, CRIC). | — |
| [PPMI](https://www.ppmi-info.org/access-data-specimens/download-data) | Application | Longitudinal clinical, imaging (DaTscan, MRI), genetic and biomarker data from thousands of people with and at risk of Parkinson's disease. | [Marek K et al. Prog Neurobiol 2011;95:629](https://doi.org/10.1016/j.pneurobio.2011.09.005) |
| [NACC](https://naccdata.org/) | Application | Standardised longitudinal clinical and neuropathology data from US Alzheimer's Disease Research Centers (>50,000 participants). | — |
| [PRO-ACT](https://ncri1.partners.org/ProACT) | Registration | Harmonised records of >11,000 ALS patients pooled from completed clinical trials — the largest ALS clinical trial dataset. | [Atassi N et al. Neurology 2014;83:1719](https://doi.org/10.1212/WNL.0000000000000951) |
| [UCI Heart Disease (Cleveland)](https://archive.ics.uci.edu/dataset/45/heart+disease) | Open | Small classic dataset of 303 patients from Cleveland (plus Hungary, Switzerland, Long Beach) with 14 clinical attributes for predicting coronary artery disease — widely used in teaching. | — |

## Population & Public-Health Surveys

Nationally representative household, health-examination and ageing surveys — the backbone of epidemiology and health-policy research.

| Database | Access | Description | Article |
|---|---|---|---|
| [NHANES](https://wwwn.cdc.gov/nchs/nhanes/) | Open | Continuous US survey combining interviews, physical examinations and laboratory tests (~5,000 people per year) on nutrition, chronic disease, biomarkers and environmental exposures. | — |
| [BRFSS](https://www.cdc.gov/brfss/annual_data/annual_data.htm) | Open | The world's largest continuously conducted telephone health survey (>400,000 US adults per year) on risk behaviours, chronic conditions and preventive-service use. | — |
| [NHIS](https://www.cdc.gov/nchs/nhis/) | Open | Annual cross-sectional household survey on the health status, health-care access and insurance of the US civilian population since 1957. | — |
| [MEPS](https://meps.ahrq.gov/mepsweb/) | Open | Panel survey of US families, their medical providers and employers detailing health-care use, expenditures, insurance and prescribed medicines. | — |
| [YRBSS](https://www.cdc.gov/yrbs/data/) | Open | Biennial school-based survey of US high-school students on violence, substance use, sexual behaviour, diet, physical activity and mental health. | — |
| [NSDUH](https://www.datafiles.samhsa.gov/) | Open | Annual nationally representative US survey of tobacco, alcohol and drug use, mental illness and treatment, with public-use files and an online analysis tool. | — |
| [Add Health](https://addhealth.cpc.unc.edu/data/) | Registration | Nationally representative cohort of US adolescents (grades 7–12 in 1994–95) followed into adulthood with social, behavioural, biomarker and genetic data across five waves. | [Harris KM et al. Int J Epidemiol 2019;48:1415](https://doi.org/10.1093/ije/dyz115) |
| [DHS Program](https://dhsprogram.com/data/) | Application | Nationally representative household surveys from 90+ low- and middle-income countries (incl. Pakistan, India's NFHS, Bangladesh, Nigeria) on fertility, maternal and child health, nutrition, HIV and malaria, with GPS cluster data. | [Corsi DJ et al. Int J Epidemiol 2012;41:1602](https://doi.org/10.1093/ije/dys184) |
| [UNICEF MICS](https://mics.unicef.org/surveys) | Registration | Household surveys in 100+ countries producing internationally comparable indicators on children and women: nutrition, immunisation, WASH, education and child protection. | — |
| [WHO NCD Microdata Repository (STEPS)](https://extranet.who.int/ncdsmicrodata/index.php/catalog) | Application | Microdata from WHO STEPwise surveys of non-communicable disease risk factors (tobacco, diet, blood pressure, glucose) in dozens of countries, plus GSHS school surveys. | — |
| [HRS](https://hrs.isr.umich.edu/data-products) | Registration | Longitudinal panel of ~20,000 Americans over 50 tracking health, cognition, work, wealth and family since 1992; the template for a global family of ageing studies. | [Sonnega A et al. Int J Epidemiol 2014;43:576](https://doi.org/10.1093/ije/dyu067) |
| [ELSA](https://www.elsa-project.ac.uk/accessing-elsa-data) | Registration | Biennial panel of people aged 50+ in England since 2002 covering health, biomarkers, cognition, economics and social participation; harmonised with HRS. | [Steptoe A et al. Int J Epidemiol 2013;42:1640](https://doi.org/10.1093/ije/dys168) |
| [SHARE](https://share-eric.eu/data/data-access) | Registration | Cross-national panel of ~140,000 people aged 50+ in 28 European countries and Israel on health, socio-economic status and social networks. | [Börsch-Supan A et al. Int J Epidemiol 2013;42:992](https://doi.org/10.1093/ije/dyt088) |
| [CHARLS](https://charls.pku.edu.cn/en/) | Registration | Nationally representative survey of Chinese residents aged 45+ (~19,000 people) with health, biomarkers, function, income and family data since 2011. | [Zhao Y et al. Int J Epidemiol 2014;43:61](https://doi.org/10.1093/ije/dys203) |
| [CHNS](https://www.cpc.unc.edu/projects/china) | Registration | Longitudinal household survey (1989 onward) on nutrition, health, economics and the effects of social change across Chinese provinces. | [Popkin BM et al. Int J Epidemiol 2010;39:1435](https://doi.org/10.1093/ije/dyp322) |
| [KNHANES](https://knhanes.kdca.go.kr/knhanes/main.do) | Registration | South Korea's national health-examination survey (since 1998) with interviews, physical exams, labs and nutrition data, modelled on NHANES. | [Kweon S et al. Int J Epidemiol 2014;43:69](https://doi.org/10.1093/ije/dyt228) |
| [Gateway to Global Aging Data](https://g2aging.org/) | Registration | Harmonised data files and documentation for the HRS family of ageing studies (HRS, ELSA, SHARE, CHARLS, LASI, MHAS, KLoSA and more) for cross-country comparison. | — |
| [IPUMS Health Surveys](https://healthsurveys.ipums.org/) | Registration | Harmonised, documented versions of NHIS (1963–present) and MEPS with a custom data-extract builder that makes multi-year analysis simple. | — |

## Global Health & Vital Statistics

Aggregated indicators, burden-of-disease estimates, mortality and cancer statistics for countries and regions worldwide.

| Database | Access | Description | Article |
|---|---|---|---|
| [WHO Global Health Observatory](https://www.who.int/data/gho) | Open | WHO's portal of 1,000+ health indicators for 194 member states — mortality, disease burden, health systems, SDG targets — with an OData API. | — |
| [GBD Results (IHME)](https://vizhub.healthdata.org/gbd-results/) | Registration | Estimates of deaths, DALYs, prevalence and risk-factor burden for 370+ diseases and injuries in 204 countries from 1990 onward. | [GBD 2021 Diseases and Injuries Collaborators. Lancet 2024;403:2133](https://doi.org/10.1016/S0140-6736(24)00757-8) |
| [Global Health Data Exchange (GHDx)](https://ghdx.healthdata.org/) | Open | IHME's searchable catalogue of the world's surveys, censuses, vital registration and disease registries, linking to source data wherever available. | — |
| [World Bank Health, Nutrition & Population Statistics](https://databank.worldbank.org/source/health-nutrition-and-population-statistics) | Open | Country-level time series on health financing, service coverage, nutrition, population dynamics and outcomes, downloadable via DataBank or API. | — |
| [Our World in Data](https://ourworldindata.org/) | Open | Curated, well-documented global datasets and charts on health topics (causes of death, vaccination, COVID-19, child mortality, life expectancy) with GitHub-hosted data. | [Mathieu E et al. Nat Hum Behav 2021;5:947](https://doi.org/10.1038/s41562-021-01122-8) |
| [WHO Mortality Database](https://platform.who.int/mortality) | Open | Deaths by country, year, sex, age and ICD cause as reported by national civil-registration systems since 1950. | — |
| [Human Mortality Database](https://www.mortality.org/) | Registration | High-quality, harmonised life tables, death counts and population exposures for ~40 countries, the reference source for demographic mortality research. | — |
| [Global Cancer Observatory (GLOBOCAN)](https://gco.iarc.who.int/) | Open | IARC's estimates of cancer incidence, mortality and prevalence for 185 countries, plus Cancer Over Time, Cancer Tomorrow and Cancer Survival modules. | [Bray F et al. CA Cancer J Clin 2024;74:229](https://doi.org/10.3322/caac.21834) |
| [CDC WONDER](https://wonder.cdc.gov/) | Open | Online query system for US public-health data: births, deaths (multiple cause), cancer statistics, vaccine adverse events, environmental and population data. | — |
| [NCHS Vital Statistics Online](https://www.cdc.gov/nchs/data_access/vitalstatsonline.htm) | Open | Public-use micro-data files for every US birth, death and fetal death record, released annually by NCHS. | — |
| [CDC PLACES](https://www.cdc.gov/places/) | Open | Model-based small-area estimates of 40 chronic-disease measures for US counties, cities, census tracts and ZIP codes. | — |
| [UNAIDS AIDSinfo](https://aidsinfo.unaids.org/) | Open | Country-level HIV estimates — prevalence, incidence, AIDS deaths, treatment cascade and key populations — from UNAIDS modelling. | — |
| [Eurostat Health Statistics](https://ec.europa.eu/eurostat/web/health/database) | Open | EU-wide statistics on causes of death, health-care resources and expenditure, health status (EHIS) and accidents at work. | — |
| [HealthData.gov](https://healthdata.gov/) | Open | US federal catalogue of thousands of health datasets from HHS agencies (CDC, CMS, FDA, NIH) with API access. | — |
| [CMS Data (data.cms.gov)](https://data.cms.gov/) | Open | Public Medicare and Medicaid datasets: provider utilisation and payments, Part D prescribers, hospital quality and cost reports. | — |

## Radiology & Medical Imaging

Chest X-ray, CT, MRI, mammography, ultrasound and echocardiography collections, many with labels or segmentations.

| Database | Access | Description | Article |
|---|---|---|---|
| [MIMIC-CXR](https://physionet.org/content/mimic-cxr/) | Credentialed | 377,110 chest radiographs (DICOM) with 227,835 free-text radiology reports from BIDMC, linkable to MIMIC-IV. A JPG version with NLP-derived labels (MIMIC-CXR-JPG) is also available. | [Johnson AEW et al. Sci Data 2019;6:317](https://doi.org/10.1038/s41597-019-0322-0) |
| [CheXpert](https://stanfordmlgroup.github.io/competitions/chexpert/) | Registration | 224,316 chest radiographs of 65,240 Stanford patients labelled for 14 observations with uncertainty labels; the basis of a well-known benchmark. | [Irvin J et al. AAAI 2019;33:590](https://doi.org/10.1609/aaai.v33i01.3301590) |
| [NIH ChestX-ray14](https://nihcc.app.box.com/v/ChestXray-NIHCC) | Open | 112,120 frontal chest X-rays from 30,805 patients at the NIH Clinical Center with 14 text-mined disease labels and some bounding boxes. | [Wang X et al. CVPR 2017](https://doi.org/10.1109/CVPR.2017.369) |
| [PadChest](https://bimcv.cipf.es/bimcv-projects/padchest/) | Application | 160,000+ chest X-rays from Hospital San Juan (Spain) with Spanish reports and 174 radiographic findings, 27% manually annotated by radiologists. | [Bustos A et al. Med Image Anal 2020;66:101797](https://doi.org/10.1016/j.media.2020.101797) |
| [VinDr-CXR](https://physionet.org/content/vindr-cxr/) | Credentialed | 18,000 chest X-rays from two Vietnamese hospitals with radiologist bounding-box annotations for 22 local findings and 6 global diagnoses. | [Nguyen HQ et al. Sci Data 2022;9:429](https://doi.org/10.1038/s41597-022-01498-w) |
| [VinDr-Mammo](https://physionet.org/content/vindr-mammo/) | Registration | 5,000 four-view full-field digital mammography exams with BI-RADS, density and finding-level annotations from Vietnamese hospitals. | [Nguyen HT et al. Sci Data 2023;10:277](https://doi.org/10.1038/s41597-023-02100-7) |
| [RSNA Pneumonia Detection Challenge](https://www.kaggle.com/c/rsna-pneumonia-detection-challenge) | Registration | ~30,000 chest X-rays (from NIH ChestX-ray14) re-annotated by radiologists with bounding boxes for lung opacity suggestive of pneumonia. | [Shih G et al. Radiol Artif Intell 2019;1:e180041](https://doi.org/10.1148/ryai.2019180041) |
| [The Cancer Imaging Archive (TCIA)](https://www.cancerimagingarchive.net/) | Open | Large archive of de-identified cancer imaging collections (CT, MRI, PET, pathology) — e.g. LIDC-IDRI, CBIS-DDSM, NLST — often linked to TCGA genomics and clinical data. | [Clark K et al. J Digit Imaging 2013;26:1045](https://doi.org/10.1007/s10278-013-9622-7) |
| [LIDC-IDRI](https://www.cancerimagingarchive.net/collection/lidc-idri/) | Open | 1,018 thoracic CT scans with lung-nodule annotations by four radiologists — the standard dataset for lung-nodule detection (LUNA16 derives from it). | [Armato SG et al. Med Phys 2011;38:915](https://doi.org/10.1118/1.3528204) |
| [CBIS-DDSM](https://www.cancerimagingarchive.net/collection/cbis-ddsm/) | Open | Curated, DICOM-converted subset of the Digital Database for Screening Mammography with updated ROI segmentations and pathology-verified labels. | [Lee RS et al. Sci Data 2017;4:170177](https://doi.org/10.1038/sdata.2017.177) |
| [EMBED](https://registry.opendata.aws/emory-breast-imaging-dataset-embed/) | Application | 3.4 million screening and diagnostic mammograms from 116,000 racially diverse women with BI-RADS, pathology and demographic data. | [Jeong JJ et al. Radiol Artif Intell 2023;5:e220047](https://doi.org/10.1148/ryai.220047) |
| [Medical Segmentation Decathlon](http://medicaldecathlon.com/) | Open | Ten 3D segmentation tasks (brain tumour, heart, liver, hippocampus, prostate, lung, pancreas, hepatic vessels, spleen, colon) for benchmarking generalisable algorithms. | [Antonelli M et al. Nat Commun 2022;13:4128](https://doi.org/10.1038/s41467-022-30695-9) |
| [TotalSegmentator dataset](https://zenodo.org/records/10047292) | Open | 1,228 CT scans with segmentations of 117 anatomical structures (organs, bones, muscles, vessels), released alongside the popular TotalSegmentator tool. | [Wasserthal J et al. Radiol Artif Intell 2023;5:e230024](https://doi.org/10.1148/ryai.230024) |
| [KiTS](https://kits-challenge.org/) | Open | Contrast-enhanced abdominal CT scans with expert segmentations of kidneys, tumours and cysts (KiTS19/21/23). | [Heller N et al. Med Image Anal 2021;67:101821](https://doi.org/10.1016/j.media.2020.101821) |
| [LiTS](https://competitions.codalab.org/competitions/17094) | Registration | 131 training and 70 test contrast-enhanced abdominal CT scans with liver and tumour segmentations from seven institutions. | [Bilic P et al. Med Image Anal 2023;84:102680](https://doi.org/10.1016/j.media.2022.102680) |
| [LUNA16](https://luna16.grand-challenge.org/) | Registration | 888 CT scans from LIDC-IDRI with standardised nodule annotations and an evaluation framework for nodule detection. | [Setio AAA et al. Med Image Anal 2017;42:1](https://doi.org/10.1016/j.media.2017.06.015) |
| [fastMRI](https://fastmri.med.nyu.edu/) | Registration | Raw k-space and DICOM data for knee, brain, prostate and breast MRI from NYU Langone, built for accelerated MRI reconstruction research. | [Knoll F et al. Radiol Artif Intell 2020;2:e190007](https://doi.org/10.1148/ryai.2020190007) |
| [EchoNet-Dynamic](https://echonet.github.io/dynamic/) | Registration | 10,030 apical four-chamber echocardiography videos with expert tracings, ejection fraction and volumes from Stanford Medicine. | [Ouyang D et al. Nature 2020;580:252](https://doi.org/10.1038/s41586-020-2145-8) |
| [CAMUS](https://www.creatis.insa-lyon.fr/Challenge/camus/) | Registration | 2D echocardiographic sequences from 500 patients with expert segmentations of left ventricle, myocardium and left atrium. | [Leclerc S et al. IEEE Trans Med Imaging 2019;38:2198](https://doi.org/10.1109/TMI.2019.2900516) |
| [ACDC](https://www.creatis.insa-lyon.fr/Challenge/acdc/) | Registration | Cine cardiac MRI from 150 patients across five diagnostic groups with ventricular and myocardial segmentations. | [Bernard O et al. IEEE Trans Med Imaging 2018;37:2514](https://doi.org/10.1109/TMI.2018.2837502) |
| [BUSI](https://scholar.cu.edu.eg/?q=afahmy/pages/dataset) | Open | 780 breast ultrasound images from 600 women in Egypt, labelled normal, benign or malignant with ground-truth masks. | [Al-Dhabyani W et al. Data Brief 2020;28:104863](https://doi.org/10.1016/j.dib.2019.104863) |
| [Kermany OCT & Paediatric Chest X-ray](https://data.mendeley.com/datasets/rscbjbr9sj/2) | Open | 108,000+ labelled retinal OCT images (CNV, DME, drusen, normal) and 5,800 paediatric chest X-rays (pneumonia vs normal) from the landmark Cell transfer-learning paper. | [Kermany DS et al. Cell 2018;172:1122](https://doi.org/10.1016/j.cell.2018.02.010) |
| [MURA](https://stanfordmlgroup.github.io/competitions/mura/) | Registration | 40,561 musculoskeletal radiographs of the upper extremity from 12,173 patients labelled normal/abnormal by radiologists. | [Rajpurkar P et al. arXiv 2017](https://arxiv.org/abs/1712.06957) |
| [Stanford AIMI Shared Datasets](https://aimi.stanford.edu/shared-datasets) | Registration | Portal hosting many Stanford imaging datasets free for research: CheXpert, EchoNet, DDI, CT colonography, knee MRI, BrainMetShare and more. | — |
| [Open-i (incl. IU X-ray)](https://openi.nlm.nih.gov/) | Open | NLM search engine over 3.7 million images from PubMed Central articles plus the Indiana University chest X-ray collection (7,470 images with reports). | [Demner-Fushman D et al. JAMIA 2016;23:304](https://doi.org/10.1093/jamia/ocv080) |
| [MedMNIST v2](https://medmnist.com/) | Open | 18 standardised, lightweight 2D and 3D biomedical image datasets (pathology, chest X-ray, dermatology, retina, CT organs…) in MNIST-like format for fast prototyping and teaching. | [Yang J et al. Sci Data 2023;10:41](https://doi.org/10.1038/s41597-022-01721-8) |
| [COVIDx](https://github.com/lindawangg/COVID-Net) | Open | Open benchmark of tens of thousands of chest X-rays and CT scans assembled from multiple public sources for COVID-19 detection (COVID-Net). | [Wang L et al. Sci Rep 2020;10:19549](https://doi.org/10.1038/s41598-020-76550-z) |
| [BIMCV-COVID19+](https://bimcv.cipf.es/bimcv-projects/bimcv-covid19/) | Open | Chest X-ray and CT studies of COVID-19 patients from the Valencian region with radiological findings, reports and lab results. | — |
| [MedPix](https://medpix.nlm.nih.gov/) | Open | Free open-access database of ~59,000 medical images and ~12,000 teaching cases indexed by diagnosis, organ system and modality. | — |

## Pathology, Dermatology & Ophthalmology

Whole-slide histopathology, dermoscopic and clinical skin images, retinal fundus and OCT collections.

| Database | Access | Description | Article |
|---|---|---|---|
| [CAMELYON16/17](https://camelyon17.grand-challenge.org/Data/) | Open | Whole-slide images of sentinel lymph nodes from breast-cancer patients with pixel-level metastasis annotations (1,399 WSIs) from Dutch medical centres. | [Ehteshami Bejnordi B et al. JAMA 2017;318:2199](https://doi.org/10.1001/jama.2017.14585) |
| [PANDA](https://www.kaggle.com/c/prostate-cancer-grade-assessment) | Registration | ~11,000 prostate biopsy whole-slide images from Radboud and Karolinska with ISUP grade and Gleason labels. | [Bulten W et al. Nat Med 2022;28:154](https://doi.org/10.1038/s41591-021-01620-2) |
| [PatchCamelyon (PCam)](https://github.com/basveeling/pcam) | Open | 327,680 96×96 histopathology patches derived from CAMELYON16 with binary metastasis labels — an MNIST-sized pathology benchmark. | [Veeling BS et al. MICCAI 2018](https://doi.org/10.1007/978-3-030-00934-2_24) |
| [BreakHis](https://web.inf.ufpr.br/vri/databases/breast-cancer-histopathological-database-breakhis/) | Open | 7,909 microscopic images of breast tumour tissue from 82 patients at four magnifications, labelled benign or malignant with subtypes. | [Spanhol FA et al. IEEE Trans Biomed Eng 2016;63:1455](https://doi.org/10.1109/TBME.2015.2496264) |
| [ISIC Archive](https://www.isic-archive.com/) | Open | The largest public collection of dermoscopic images of skin lesions (>400,000), with diagnoses and metadata, home of the annual ISIC melanoma challenges. | — |
| [HAM10000](https://doi.org/10.7910/DVN/DBW86T) | Open | 10,015 dermoscopic images of common pigmented skin lesions across 7 diagnostic categories, >50% histopathology-confirmed. | [Tschandl P et al. Sci Data 2018;5:180161](https://doi.org/10.1038/sdata.2018.161) |
| [Fitzpatrick 17k](https://github.com/mattgroh/fitzpatrick17k) | Open | 16,577 clinical skin-condition images across 114 conditions annotated with Fitzpatrick skin type to study fairness in dermatology AI. | [Groh M et al. CVPR Workshops 2021](https://arxiv.org/abs/2104.09957) |
| [DDI](https://ddi-dataset.github.io/) | Registration | 656 biopsy-proven clinical images emphasising Fitzpatrick skin types V–VI and uncommon diseases, built to expose bias in dermatology algorithms. | [Daneshjou R et al. Sci Adv 2022;8:eabq6147](https://doi.org/10.1126/sciadv.abq6147) |
| [PAD-UFES-20](https://data.mendeley.com/datasets/zr7vgbcyr2/1) | Open | 2,298 smartphone images of skin lesions from 1,373 Brazilian patients with clinical metadata across six diagnoses. | [Pacheco AGC et al. Data Brief 2020;32:106221](https://doi.org/10.1016/j.dib.2020.106221) |
| [EyePACS Diabetic Retinopathy (Kaggle)](https://www.kaggle.com/c/diabetic-retinopathy-detection) | Registration | ~88,000 retinal fundus photographs graded 0–4 for diabetic retinopathy, released for the 2015 Kaggle competition. | — |
| [APTOS 2019 Blindness Detection](https://www.kaggle.com/c/aptos2019-blindness-detection) | Registration | ~5,600 fundus images from rural Indian screening programmes (Aravind Eye Hospital) graded for diabetic retinopathy severity. | — |
| [IDRiD](https://ieee-dataport.org/open-access/indian-diabetic-retinopathy-image-dataset-idrid) | Registration | 516 high-resolution fundus images with pixel-level lesion annotations, DR/DME grades and optic disc/fovea locations. | [Porwal P et al. Data 2018;3:25](https://doi.org/10.3390/data3030025) |
| [Messidor-2](https://www.adcis.net/en/third-party/messidor2/) | Registration | 1,748 macula-centred fundus images from 874 diabetic examinations, widely used to validate DR screening algorithms. | [Decencière E et al. Image Anal Stereol 2014;33:231](https://doi.org/10.5566/ias.1155) |
| [DRIVE](https://drive.grand-challenge.org/) | Registration | 40 colour fundus images with manual retinal-vessel segmentations — the classic vessel-segmentation benchmark. | [Staal J et al. IEEE Trans Med Imaging 2004;23:501](https://doi.org/10.1109/TMI.2004.825627) |
| [REFUGE](https://refuge.grand-challenge.org/) | Registration | 1,200 fundus images with glaucoma labels and optic disc/cup segmentations from Chinese hospitals. | [Orlando JI et al. Med Image Anal 2020;59:101570](https://doi.org/10.1016/j.media.2019.101570) |

## Neuroimaging & Neuroscience

Brain MRI, fMRI, PET and EEG collections for ageing, dementia, development and psychiatric research.

| Database | Access | Description | Article |
|---|---|---|---|
| [ADNI](https://adni.loni.usc.edu/data-samples/adni-data/) | Application | Longitudinal MRI, PET, CSF/blood biomarkers, genetics and cognitive data from >2,000 participants (normal, MCI, Alzheimer's) since 2004. | [Petersen RC et al. Neurology 2010;74:201](https://doi.org/10.1212/WNL.0b013e3181cb3e25) |
| [OASIS](https://sites.wustl.edu/oasisbrains/) | Registration | Brain MRI (and PET in OASIS-3/4) with clinical and cognitive data across normal ageing and Alzheimer's disease, from Washington University's Knight ADRC. | [Marcus DS et al. J Cogn Neurosci 2007;19:1498](https://doi.org/10.1162/jocn.2007.19.9.1498) |
| [OpenNeuro](https://openneuro.org/) | Open | Open platform hosting 1,000+ BIDS-formatted neuroimaging datasets (MRI, MEG, EEG, iEEG, PET) contributed by researchers worldwide. | [Markiewicz CJ et al. eLife 2021;10:e71774](https://doi.org/10.7554/eLife.71774) |
| [Human Connectome Project](https://www.humanconnectome.org/study/hcp-young-adult) | Registration | High-quality multimodal MRI (structural, resting/task fMRI, diffusion) and behavioural data from ~1,200 healthy young adults, plus Lifespan and disease extensions. | [Van Essen DC et al. NeuroImage 2013;80:62](https://doi.org/10.1016/j.neuroimage.2013.05.041) |
| [ABIDE](https://fcon_1000.projects.nitrc.org/indi/abide/) | Registration | Resting-state fMRI and structural MRI from >2,000 individuals with autism and typical controls aggregated from 24+ international sites. | [Di Martino A et al. Mol Psychiatry 2014;19:659](https://doi.org/10.1038/mp.2013.78) |
| [ABCD Study](https://abcdstudy.org/) | Application | Largest long-term study of brain development in the US: ~11,800 children followed from age 9–10 with MRI, cognition, mental health, substance use and genetics. | [Casey BJ et al. Dev Cogn Neurosci 2018;32:43](https://doi.org/10.1016/j.dcn.2018.03.001) |
| [NIMH Data Archive (NDA)](https://nda.nih.gov/) | Application | Federated archive of human-subjects mental-health research data (clinical, imaging, genomics) from hundreds of NIH-funded studies, including ABCD and HCP lifespan. | — |
| [IXI Dataset](https://brain-development.org/ixi-dataset/) | Open | ~600 MR images (T1, T2, PD, MRA, DTI) from healthy subjects scanned at three London hospitals. | — |
| [BraTS](https://www.synapse.org/brats) | Registration | Multi-institutional multiparametric MRI (T1, T1-Gd, T2, FLAIR) of gliomas and other brain tumours with expert segmentations of tumour sub-regions. | [Menze BH et al. IEEE Trans Med Imaging 2015;34:1993](https://doi.org/10.1109/TMI.2014.2377694) |
| [TUH EEG Corpus](https://isip.piconepress.com/projects/nedc/html/tuh_eeg/) | Registration | The world's largest open clinical EEG corpus (>30,000 recordings) from Temple University Hospital with physician reports; subsets annotated for seizures, artefacts and abnormality. | [Obeid I, Picone J. Front Neurosci 2016;10:196](https://doi.org/10.3389/fnins.2016.00196) |
| [CHB-MIT Scalp EEG Database](https://physionet.org/content/chbmit/) | Open | Long-term scalp EEG of 22 paediatric subjects with intractable seizures at Boston Children's Hospital, with annotated seizure onsets. | — |
| [Siena Scalp EEG Database](https://physionet.org/content/siena-scalp-eeg/) | Open | EEG recordings of 14 adult epilepsy patients from the University of Siena with seizure annotations by neurologists. | [Detti P et al. Processes 2020;8:846](https://doi.org/10.3390/pr8070846) |
| [EEG Motor Movement/Imagery Dataset](https://physionet.org/content/eegmmidb/) | Open | 1,500+ 64-channel EEG recordings from 109 volunteers performing real and imagined motor tasks; widely used for brain–computer interface research. | [Schalk G et al. IEEE Trans Biomed Eng 2004;51:1034](https://doi.org/10.1109/TBME.2004.827072) |

## Physiological Signals & Wearables

ECG, PPG, EEG/sleep, heart and lung sounds, bedside waveforms and consumer-wearable recordings.

| Database | Access | Description | Article |
|---|---|---|---|
| [MIT-BIH Arrhythmia Database](https://physionet.org/content/mitdb/) | Open | 48 half-hour two-lead ambulatory ECG recordings with beat-by-beat cardiologist annotations — the reference standard for arrhythmia-detection algorithms since 1980. | [Moody GB, Mark RG. IEEE Eng Med Biol Mag 2001;20:45](https://doi.org/10.1109/51.932724) |
| [PTB-XL](https://physionet.org/content/ptb-xl/) | Open | 21,799 clinical 12-lead, 10-second ECGs from 18,869 patients with SCP-ECG diagnostic, form and rhythm statements annotated by cardiologists. | [Wagner P et al. Sci Data 2020;7:154](https://doi.org/10.1038/s41597-020-0495-6) |
| [MIMIC-IV-ECG](https://physionet.org/content/mimic-iv-ecg/) | Open | ~800,000 diagnostic 12-lead ECGs from ~160,000 patients linked to MIMIC-IV, with machine measurements and cardiologist report text. | — |
| [Chapman–Shaoxing 12-lead ECG Database](https://physionet.org/content/ecg-arrhythmia/) | Open | 12-lead ECGs from >45,000 patients at Shaoxing People's Hospital with rhythm and diagnostic labels from expert physicians. | [Zheng J et al. Sci Data 2020;7:48](https://doi.org/10.1038/s41597-020-0386-x) |
| [CODE-15%](https://zenodo.org/records/4916206) | Open | 345,779 12-lead ECGs from 233,770 Brazilian patients (a 15% sample of the CODE telehealth cohort) with labels for six abnormalities and mortality follow-up. | [Ribeiro AH et al. Nat Commun 2020;11:1760](https://doi.org/10.1038/s41467-020-15432-4) |
| [PhysioNet/CinC Challenge 2020–2021 (12-lead ECG)](https://physionet.org/content/challenge-2021/) | Open | ~88,000 annotated ECGs pooled from multiple international databases (CPSC, INCART, PTB, Georgia, Chapman, Ningbo) with SNOMED-CT diagnostic labels. | [Perez Alday EA et al. Physiol Meas 2020;41:124003](https://doi.org/10.1088/1361-6579/abc960) |
| [PhysioNet/CinC Challenge 2017 (AF)](https://physionet.org/content/challenge-2017/) | Open | 8,528 short single-lead ECGs from AliveCor devices labelled normal, AF, other rhythm or noisy. | [Clifford GD et al. Comput Cardiol 2017;44](https://doi.org/10.22489/CinC.2017.065-469) |
| [Icentia11k](https://physionet.org/content/icentia11k-continuous-ecg/) | Open | Continuous single-lead ECG from 11,000 patients (up to two weeks each) with ~2.7 billion labelled beats — a huge resource for self-supervised ECG learning. | [Tan S et al. arXiv 2019](https://arxiv.org/abs/1910.09570) |
| [MIMIC-III & MIMIC-IV Waveform Databases](https://physionet.org/content/mimic4wdb/) | Open | Bedside-monitor waveforms (ECG, ABP, PPG, respiration) and numeric trends recorded from ICU patients, partly matched to the clinical databases. | — |
| [BIDMC PPG and Respiration Dataset](https://physionet.org/content/bidmc/) | Open | 53 eight-minute recordings of ECG, PPG and impedance pneumography with manual breath annotations, extracted from MIMIC-II. | [Pimentel MAF et al. IEEE Trans Biomed Eng 2017;64:1914](https://doi.org/10.1109/TBME.2016.2613124) |
| [Sleep-EDF Expanded](https://physionet.org/content/sleep-edfx/) | Open | 197 whole-night polysomnographic recordings (EEG, EOG, chin EMG) with hypnograms scored by technicians — the standard sleep-staging benchmark. | [Kemp B et al. IEEE Trans Biomed Eng 2000;47:1185](https://doi.org/10.1109/10.867928) |
| [National Sleep Research Resource (NSRR)](https://sleepdata.org/) | Application | Polysomnography and clinical data from >40,000 sleep studies across major cohorts (SHHS, MESA, CFS, CHAT, MrOS, APPLES). | [Zhang GQ et al. JAMIA 2018;25:1351](https://doi.org/10.1093/jamia/ocy064) |
| [Apnea-ECG Database](https://physionet.org/content/apnea-ecg/) | Open | 70 overnight single-lead ECG recordings with minute-by-minute apnoea annotations for ECG-based sleep-apnoea detection. | — |
| [CTU-UHB Intrapartum Cardiotocography Database](https://physionet.org/content/ctu-uhb-ctgdb/) | Open | 552 intrapartum CTG recordings (fetal heart rate and uterine contractions) with umbilical-artery pH and clinical outcomes from Brno University Hospital. | [Chudáček V et al. BMC Pregnancy Childbirth 2014;14:16](https://doi.org/10.1186/1471-2393-14-16) |
| [PhysioNet/CinC Challenge 2016 (Heart Sounds)](https://physionet.org/content/challenge-2016/) | Open | 3,000+ phonocardiogram recordings from multiple databases labelled normal or abnormal. | [Liu C et al. Physiol Meas 2016;37:2181](https://doi.org/10.1088/0967-3334/37/12/2181) |
| [CirCor DigiScope Phonocardiogram Dataset](https://physionet.org/content/circor-heart-sound/) | Open | 5,272 heart-sound recordings from 1,568 children in Brazil with murmur annotations (timing, grade, shape) by experts. | [Oliveira J et al. IEEE J Biomed Health Inform 2022;26:2524](https://doi.org/10.1109/JBHI.2021.3137048) |
| [ICBHI 2017 Respiratory Sound Database](https://bhichallenge.med.auth.gr/) | Open | 920 annotated lung-sound recordings from 126 patients (healthy, COPD, asthma, pneumonia, etc.) with crackle and wheeze labels. | [Rocha BM et al. Physiol Meas 2019;40:035001](https://doi.org/10.1088/1361-6579/ab03ea) |
| [COUGHVID](https://zenodo.org/records/4048312) | Open | 25,000+ crowdsourced cough recordings with self-reported COVID-19 status and expert annotations on a subset. | [Orlandic L et al. Sci Data 2021;8:156](https://doi.org/10.1038/s41597-021-00937-4) |
| [Coswara](https://github.com/iiscleap/Coswara-Data) | Open | Breathing, cough, vowel and counting audio from ~2,700 Indian participants with COVID-19 status and symptoms. | [Bhattacharya D et al. Sci Data 2023;10:397](https://doi.org/10.1038/s41597-023-02266-0) |
| [WESAD](https://archive.ics.uci.edu/dataset/465/wesad+wearable+stress+and+affect+detection) | Open | Wrist- and chest-worn multimodal sensor data (BVP, EDA, ECG, EMG, respiration, temperature, accelerometry) from 15 subjects during stress and amusement. | [Schmidt P et al. ICMI 2018](https://doi.org/10.1145/3242969.3242985) |
| [PPG-DaLiA](https://archive.ics.uci.edu/dataset/495/ppg+dalia) | Open | Wrist PPG, accelerometer and chest ECG from 15 subjects during daily-life activities for motion-robust heart-rate estimation. | [Reiss A et al. Sensors 2019;19:3079](https://doi.org/10.3390/s19143079) |
| [LifeSnaps](https://zenodo.org/records/7229547) | Open | Four months of Fitbit data (steps, sleep, heart rate, SpO2, temperature) plus surveys and ecological momentary assessments from 71 participants in the wild. | [Yfantidou S et al. Sci Data 2022;9:663](https://doi.org/10.1038/s41597-022-01764-x) |
| [UCI Human Activity Recognition (Smartphones)](https://archive.ics.uci.edu/dataset/240/human+activity+recognition+using+smartphones) | Open | Smartphone accelerometer and gyroscope signals from 30 volunteers performing six daily activities — a classic activity-recognition dataset. | — |

## Genomics & Multi-Omics

Germline and cancer genomics, transcriptomics, proteomics, metabolomics, single-cell atlases and GWAS summary statistics.

| Database | Access | Description | Article |
|---|---|---|---|
| [NCI Genomic Data Commons (TCGA & more)](https://portal.gdc.cancer.gov/) | Open | Harmonised genomic and clinical data from TCGA (33 cancer types, ~11,000 patients), TARGET, CPTAC and other NCI programmes, with web portal and API. | [Grossman RL et al. N Engl J Med 2016;375:1109](https://doi.org/10.1056/NEJMp1607591) |
| [cBioPortal for Cancer Genomics](https://www.cbioportal.org/) | Open | Interactive portal for exploring and downloading processed multidimensional cancer genomics datasets from 400+ studies, with clinical annotations. | [Cerami E et al. Cancer Discov 2012;2:401](https://doi.org/10.1158/2159-8290.CD-12-0095) |
| [ICGC ARGO](https://platform.icgc-argo.org/) | Registration | International Cancer Genome Consortium platform with clinically annotated tumour genomes from >100,000 patients (successor to the PCAWG/ICGC 25K data). | [ICGC/TCGA PCAWG Consortium. Nature 2020;578:82](https://doi.org/10.1038/s41586-020-1969-6) |
| [COSMIC](https://cancer.sanger.ac.uk/cosmic) | Registration | Expert-curated database of somatic mutations in human cancer, including Cancer Gene Census, mutational signatures and drug-resistance mutations. | [Tate JG et al. Nucleic Acids Res 2019;47:D941](https://doi.org/10.1093/nar/gky1015) |
| [1000 Genomes / IGSR](https://www.internationalgenome.org/) | Open | Whole-genome sequences of 3,202 individuals from 26 populations, the reference catalogue of human genetic variation maintained by the International Genome Sample Resource. | [1000 Genomes Project Consortium. Nature 2015;526:68](https://doi.org/10.1038/nature15393) |
| [gnomAD](https://gnomad.broadinstitute.org/) | Open | Allele frequencies and constraint metrics from >800,000 exomes and genomes across diverse ancestries — essential for variant interpretation. | [Karczewski KJ et al. Nature 2020;581:434](https://doi.org/10.1038/s41586-020-2308-7) |
| [TOPMed BRAVO](https://bravo.sph.umich.edu/) | Registration | Variant browser and allele frequencies from >150,000 deeply sequenced genomes in NHLBI's TOPMed programme; individual-level data via dbGaP. | [Taliun D et al. Nature 2021;590:290](https://doi.org/10.1038/s41586-021-03205-y) |
| [ClinVar](https://www.ncbi.nlm.nih.gov/clinvar/) | Open | Public archive of relationships between human genetic variants and phenotypes with supporting evidence and clinical-significance assertions from labs worldwide. | [Landrum MJ et al. Nucleic Acids Res 2018;46:D1062](https://doi.org/10.1093/nar/gkx1153) |
| [GWAS Catalog](https://www.ebi.ac.uk/gwas/) | Open | Curated collection of all published genome-wide association studies with >600,000 variant–trait associations and full summary statistics for many studies. | [Sollis E et al. Nucleic Acids Res 2023;51:D977](https://doi.org/10.1093/nar/gkac1010) |
| [PGS Catalog](https://www.pgscatalog.org/) | Open | Open database of published polygenic scores with variant weights, metadata and performance metrics for thousands of traits. | [Lambert SA et al. Nat Genet 2021;53:420](https://doi.org/10.1038/s41588-021-00783-5) |
| [FinnGen (summary statistics)](https://www.finngen.fi/en/access_results) | Open | GWAS summary statistics for ~2,400 disease endpoints from ~500,000 Finnish biobank participants linked to national health registries. | [Kurki MI et al. Nature 2023;613:508](https://doi.org/10.1038/s41586-022-05473-8) |
| [Pan-UK Biobank (summary statistics)](https://pan.ukbb.broadinstitute.org/) | Open | Multi-ancestry GWAS summary statistics for >7,000 phenotypes in UK Biobank across six continental ancestry groups — free, even though UK Biobank itself is fee-based. | — |
| [GTEx Portal](https://gtexportal.org/) | Open | Gene expression and eQTLs across 54 non-diseased tissues from ~1,000 post-mortem donors, showing how genetic variation regulates expression. | [GTEx Consortium. Science 2020;369:1318](https://doi.org/10.1126/science.aaz1776) |
| [ENCODE](https://www.encodeproject.org/) | Open | Encyclopedia of DNA Elements: functional genomics data (ChIP-seq, ATAC-seq, RNA-seq, Hi-C) mapping regulatory elements across human and mouse cell types. | [ENCODE Project Consortium. Nature 2012;489:57](https://doi.org/10.1038/nature11247) |
| [Gene Expression Omnibus (GEO)](https://www.ncbi.nlm.nih.gov/geo/) | Open | NCBI's public repository of >200,000 functional-genomics studies (microarray, RNA-seq, methylation, single-cell) submitted with publications. | [Barrett T et al. Nucleic Acids Res 2013;41:D991](https://doi.org/10.1093/nar/gks1193) |
| [ArrayExpress (BioStudies)](https://www.ebi.ac.uk/biostudies/arrayexpress) | Open | EMBL-EBI archive of functional-genomics experiments — Europe's counterpart to GEO — now served through the BioStudies platform. | — |
| [Sequence Read Archive (SRA)](https://www.ncbi.nlm.nih.gov/sra) | Open | The largest public repository of raw high-throughput sequencing reads, with cloud-hosted copies on AWS and Google Cloud. | — |
| [dbGaP](https://www.ncbi.nlm.nih.gov/gap/) | Application | NIH archive of individual-level genotype, sequence and phenotype data from >1,500 studies (e.g. Framingham, TOPMed, GTEx raw data). | [Mailman MD et al. Nat Genet 2007;39:1181](https://doi.org/10.1038/ng1007-1181) |
| [European Genome-phenome Archive (EGA)](https://ega-archive.org/) | Application | Repository of controlled-access human genetic and phenotypic data from biomedical studies worldwide (e.g. H3Africa, many cancer cohorts). | [Freeberg MA et al. Nucleic Acids Res 2022;50:D980](https://doi.org/10.1093/nar/gkab1059) |
| [Human Cell Atlas Data Portal](https://data.humancellatlas.org/) | Open | Single-cell and spatial transcriptomics data from millions of cells across human tissues, contributing to a reference map of every cell type. | [Regev A et al. eLife 2017;6:e27041](https://doi.org/10.7554/eLife.27041) |
| [CZ CELLxGENE Discover](https://cellxgene.cziscience.com/) | Open | Curated, standardised collection of 1,000+ single-cell datasets (100M+ cells) with in-browser exploration and a Python/R Census API. | — |
| [Human Protein Atlas](https://www.proteinatlas.org/) | Open | Maps of protein expression across human tissues, cells, organelles, blood and cancers using antibody-based imaging and transcriptomics. | [Uhlén M et al. Science 2015;347:1260419](https://doi.org/10.1126/science.1260419) |
| [Proteomic Data Commons (CPTAC)](https://pdc.cancer.gov/) | Open | Mass-spectrometry proteomics and phosphoproteomics data from CPTAC tumour cohorts, harmonised and linked to GDC genomic data. | — |
| [PRIDE Archive](https://www.ebi.ac.uk/pride/) | Open | The world's largest repository of mass-spectrometry proteomics data, part of the ProteomeXchange consortium. | [Perez-Riverol Y et al. Nucleic Acids Res 2022;50:D543](https://doi.org/10.1093/nar/gkab1038) |
| [MetaboLights](https://www.ebi.ac.uk/metabolights/) | Open | Cross-species, cross-technique repository for metabolomics experiments with raw spectra, metadata and reference metabolite information. | [Yurekten O et al. Nucleic Acids Res 2024;52:D640](https://doi.org/10.1093/nar/gkad1045) |
| [Human Microbiome Project](https://www.hmpdacc.org/) | Open | Metagenomic and 16S data from body sites of healthy adults (HMP1) and multi-omic disease cohorts (iHMP: IBD, prediabetes, pregnancy). | [Human Microbiome Project Consortium. Nature 2012;486:207](https://doi.org/10.1038/nature11234) |
| [DepMap Portal](https://depmap.org/portal/) | Open | Cancer Dependency Map: CRISPR/RNAi gene-dependency screens, drug sensitivity and multi-omic profiles for 1,000+ cancer cell lines (incl. CCLE). | [Tsherniak A et al. Cell 2017;170:564](https://doi.org/10.1016/j.cell.2017.06.010) |
| [GDSC](https://www.cancerrxgene.org/) | Open | Drug-response data for ~1,000 cancer cell lines against hundreds of anticancer compounds, with genomic markers of sensitivity. | [Yang W et al. Nucleic Acids Res 2013;41:D955](https://doi.org/10.1093/nar/gks1111) |
| [Open Targets Platform](https://platform.opentargets.org/) | Open | Integrates genetics, omics, literature and drug data to score and prioritise target–disease associations for drug discovery. | [Ochoa D et al. Nucleic Acids Res 2023;51:D1353](https://doi.org/10.1093/nar/gkac1046) |
| [ImmPort](https://www.immport.org/) | Registration | Repository of immunology study data (clinical trials and mechanistic studies) from NIAID-funded research, curated into a standard model. | [Bhattacharya S et al. Sci Data 2018;5:180015](https://doi.org/10.1038/sdata.2018.15) |

## Clinical Trials & Individual Participant Data

Trial registries and platforms that share individual participant data from completed trials.

| Database | Access | Description | Article |
|---|---|---|---|
| [ClinicalTrials.gov](https://clinicaltrials.gov/) | Open | Registry and results database of >500,000 clinical studies in 220+ countries, with a modern REST API and bulk downloads. | [Zarin DA et al. N Engl J Med 2011;364:852](https://doi.org/10.1056/NEJMsa1012065) |
| [AACT](https://aact.ctti-clinicaltrials.org/) | Open | A relational (PostgreSQL) copy of the entire ClinicalTrials.gov database refreshed daily, ideal for research on trial design and reporting. | [Tasneem A et al. PLoS One 2012;7:e33677](https://doi.org/10.1371/journal.pone.0033677) |
| [WHO ICTRP](https://trialsearch.who.int/) | Open | Single search portal over primary trial registries worldwide (incl. CTRI, ChiCTR, EU CTR, ISRCTN, ANZCTR, PACTR). | — |
| [Vivli](https://vivli.org/) | Application | Independent non-profit platform to search and request de-identified individual participant data from 7,000+ trials contributed by pharma, academia and funders (now also hosting GSK's former CSDR requests). | [Bierer BE et al. N Engl J Med 2016;374:2411](https://doi.org/10.1056/NEJMp1605348) |
| [YODA Project](https://yoda.yale.edu/) | Application | Independent review and sharing of individual participant data from trials contributed by Johnson & Johnson, Medtronic, Procter & Gamble and others. | — |
| [Project Data Sphere](https://www.projectdatasphere.org/) | Registration | Open platform sharing patient-level data from oncology trial comparator (and some experimental) arms, with built-in analytics tools. | — |
| [NCTN/NCORP Data Archive](https://nctn-data-archive.nci.nih.gov/) | Application | Individual-level data from completed NCI-funded cancer clinical trials run by US cooperative groups. | — |
| [NIDA Data Share](https://datashare.nida.nih.gov/) | Open | De-identified data from completed trials of the NIDA Clinical Trials Network on substance-use disorder treatments. | — |

## Clinical Text, Literature & Terminologies

Clinical notes corpora, biomedical QA benchmarks, the literature itself and the standard vocabularies that tie data together.

| Database | Access | Description | Article |
|---|---|---|---|
| [n2c2 / i2b2 NLP Datasets](https://portal.dbmi.hms.harvard.edu/projects/n2c2-nlp/) | Application | Annotated de-identified clinical notes from the i2b2/n2c2 shared tasks: de-identification, medication extraction, temporal relations, obesity, smoking status, emrQA and more. | — |
| [MedNLI](https://physionet.org/content/mednli/) | Credentialed | 14,049 clinician-annotated natural language inference pairs built from MIMIC-III notes. | [Romanov A, Shivade C. EMNLP 2018](https://doi.org/10.18653/v1/D18-1187) |
| [PubMed Baseline](https://pubmed.ncbi.nlm.nih.gov/download/) | Open | Annual XML baseline plus daily updates of 37 million+ biomedical citations and abstracts — the raw material for literature mining and biomedical language models. | — |
| [PMC Open Access Subset](https://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/) | Open | Millions of full-text journal articles from PubMed Central licensed for reuse and text mining, in XML and plain text. | — |
| [CORD-19](https://github.com/allenai/cord19) | Open | COVID-19 Open Research Dataset: ~1 million scholarly articles on COVID-19 and coronaviruses with full text, released by AI2 (final release 2022). | [Wang LL et al. ACL NLP-COVID Workshop 2020](https://arxiv.org/abs/2004.10706) |
| [MedQA (USMLE)](https://github.com/jind11/MedQA) | Open | Multiple-choice questions from US, Chinese and Taiwanese medical licensing exams — the most common benchmark for medical LLMs. | [Jin D et al. Appl Sci 2021;11:6421](https://doi.org/10.3390/app11146421) |
| [MedMCQA](https://medmcqa.github.io/) | Open | 194,000 multiple-choice questions from Indian AIIMS and NEET-PG entrance exams spanning 21 medical subjects with explanations. | [Pal A et al. CHIL 2022 (PMLR 174)](https://arxiv.org/abs/2203.14371) |
| [PubMedQA](https://pubmedqa.github.io/) | Open | Biomedical research question-answering dataset (yes/no/maybe) built from PubMed abstracts, with 1,000 expert-labelled instances. | [Jin Q et al. EMNLP-IJCNLP 2019](https://doi.org/10.18653/v1/D19-1259) |
| [BioASQ](http://participants-area.bioasq.org/) | Registration | Annual challenge datasets for large-scale semantic indexing (MeSH) and biomedical question answering with expert-curated gold answers. | — |
| [MTSamples](https://www.mtsamples.com/) | Open | ~5,000 sample transcribed medical reports across 40 specialties — handy for teaching clinical NLP without any data-use agreement. | — |
| [UMLS Metathesaurus](https://www.nlm.nih.gov/research/umls/) | Registration | Integrates 200+ biomedical vocabularies (SNOMED CT, ICD, MeSH, RxNorm, LOINC…) into concepts with cross-mappings, plus the Semantic Network and SPECIALIST lexicon. | [Bodenreider O. Nucleic Acids Res 2004;32:D267](https://doi.org/10.1093/nar/gkh061) |
| [ICD-11](https://icd.who.int/) | Open | WHO's current International Classification of Diseases with browser, coding tool and a free API for integration in health information systems. | — |
| [LOINC](https://loinc.org/downloads/) | Registration | Universal code system for laboratory tests, clinical measurements and documents, required by many interoperability standards. | — |
| [MeSH](https://www.nlm.nih.gov/databases/download/mesh.html) | Open | NLM's controlled vocabulary thesaurus used to index PubMed, available as XML, RDF and via API. | — |

## Drugs, Chemistry & Pharmacovigilance

Adverse-event reports, drug labels, drug–target and side-effect knowledge bases, and prescribing data.

| Database | Access | Description | Article |
|---|---|---|---|
| [openFDA](https://open.fda.gov/) | Open | Public APIs and bulk downloads for FDA data: adverse event reports (drugs, devices, food), recalls, drug labels and NDC directory. | [Kass-Hout TA et al. JAMIA 2016;23:596](https://doi.org/10.1093/jamia/ocv153) |
| [FAERS](https://fis.fda.gov/extensions/FPD-QDE-FAERS/FPD-QDE-FAERS.html) | Open | Quarterly raw files of spontaneous adverse-event and medication-error reports submitted to FDA since 2004 — the main source for disproportionality analyses. | — |
| [VAERS](https://vaers.hhs.gov/data.html) | Open | US national early-warning system collecting reports of adverse events after vaccination, with downloadable raw data since 1990. | — |
| [EudraVigilance (adrreports.eu)](https://www.adrreports.eu/) | Open | Public access to aggregated suspected adverse-reaction reports for medicines authorised in the European Economic Area. | — |
| [VigiAccess](https://www.vigiaccess.org/) | Open | Public window into VigiBase, the WHO global database of 35 million+ individual case safety reports from 150+ countries. | — |
| [nSIDES (OFFSIDES & TWOSIDES)](https://nsides.io/) | Open | Data-mined drug side-effect (OFFSIDES) and drug–drug interaction (TWOSIDES) signals derived from FAERS with confounding correction. | [Tatonetti NP et al. Sci Transl Med 2012;4:125ra31](https://doi.org/10.1126/scitranslmed.3003377) |
| [SIDER](http://sideeffects.embl.de/) | Open | Side effects and indications of marketed medicines extracted from drug package inserts and mapped to MedDRA. | [Kuhn M et al. Nucleic Acids Res 2016;44:D1075](https://doi.org/10.1093/nar/gkv1075) |
| [DrugBank Online](https://go.drugbank.com/) | Registration | Comprehensive drug knowledge base: chemistry, targets, pharmacology, interactions and pathways for ~16,000 drugs. | [Knox C et al. Nucleic Acids Res 2024;52:D1265](https://doi.org/10.1093/nar/gkad976) |
| [ChEMBL](https://www.ebi.ac.uk/chembl/) | Open | Manually curated database of bioactive drug-like molecules with >20 million bioactivity measurements against targets. | [Zdrazil B et al. Nucleic Acids Res 2024;52:D1180](https://doi.org/10.1093/nar/gkad1004) |
| [PubChem](https://pubchem.ncbi.nlm.nih.gov/) | Open | The world's largest free chemistry database: compounds, substances, bioassays, patents and safety information. | [Kim S et al. Nucleic Acids Res 2023;51:D1373](https://doi.org/10.1093/nar/gkac956) |
| [DailyMed](https://dailymed.nlm.nih.gov/) | Open | Official FDA-approved structured product labels (package inserts) for prescription and OTC drugs, downloadable in SPL XML. | — |
| [RxNorm](https://www.nlm.nih.gov/research/umls/rxnorm/) | Registration | Normalised names and identifiers for clinical drugs linking many drug vocabularies, with the free RxNav APIs. | [Nelson SJ et al. JAMIA 2011;18:441](https://doi.org/10.1136/amiajnl-2011-000116) |
| [WHO ATC/DDD Index](https://atcddd.fhi.no/atc_ddd_index/) | Open | The Anatomical Therapeutic Chemical classification and Defined Daily Doses used worldwide for drug-utilisation research. | — |

## Infectious Diseases & Antimicrobial Resistance

Pathogen genomes, surveillance line lists, AMR, tuberculosis, malaria, influenza and historical notifiable-disease data.

| Database | Access | Description | Article |
|---|---|---|---|
| [WHO Global Tuberculosis Data](https://www.who.int/teams/global-programme-on-tuberculosis-and-lung-health/data) | Open | Country-reported TB notifications, treatment outcomes, drug resistance, TB/HIV, financing and WHO incidence estimates since 2000. | — |
| [WHO FluNet](https://www.who.int/tools/flunet) | Open | Weekly virological surveillance data on influenza (and SARS-CoV-2/RSV) from national influenza centres in 150+ countries since 1995. | — |
| [Malaria Atlas Project](https://malariaatlas.org/) | Open | Geospatial estimates of malaria prevalence, incidence and intervention coverage plus parasite-rate and vector-occurrence surveys, with an R package. | — |
| [WHO GLASS](https://www.who.int/initiatives/glass) | Open | Country-reported surveillance data on resistance in priority bacterial pathogens and antimicrobial consumption, with an interactive dashboard. | — |
| [ResistanceMap](https://resistancemap.onehealthtrust.org/) | Open | Interactive maps and trends of antibiotic resistance and antibiotic consumption for countries worldwide, including the Drug Resistance Index. | — |
| [Vivli AMR Register](https://amr.vivli.org/) | Application | Industry AMR surveillance datasets (e.g. Pfizer ATLAS, GSK SOAR, J&J, Paratek) with millions of isolate-level susceptibility results. | — |
| [BV-BRC](https://www.bv-brc.org/) | Open | Integrated genomes, AMR phenotypes, protein families and analysis tools for bacterial and viral pathogens (merger of PATRIC, IRD and ViPR). | [Olson RD et al. Nucleic Acids Res 2023;51:D678](https://doi.org/10.1093/nar/gkac1003) |
| [NCBI Pathogen Detection](https://www.ncbi.nlm.nih.gov/pathogens/) | Open | Real-time clustering of bacterial and fungal pathogen genomes from food, environment and patients, with AMR gene calls (AMRFinderPlus). | — |
| [NCBI Virus](https://www.ncbi.nlm.nih.gov/labs/virus/) | Open | Portal for searching and downloading viral sequences (incl. SARS-CoV-2, influenza, dengue, mpox) with metadata. | — |
| [GISAID](https://gisaid.org/) | Registration | Global initiative sharing influenza, SARS-CoV-2, RSV, mpox and other virus genomes with associated epidemiological metadata. | [Shu Y, McCauley J. Euro Surveill 2017;22:30494](https://doi.org/10.2807/1560-7917.ES.2017.22.13.30494) |
| [Nextstrain](https://nextstrain.org/) | Open | Real-time phylogenetic tracking of pathogen evolution (SARS-CoV-2, influenza, mpox, dengue, measles…) with open curated datasets and tools. | [Hadfield J et al. Bioinformatics 2018;34:4121](https://doi.org/10.1093/bioinformatics/bty407) |
| [Project Tycho](https://www.tycho.pitt.edu/) | Registration | Digitised US notifiable-disease reports since 1888 and global disease counts standardised for research on historical epidemics and vaccination impact. | [van Panhuis WG et al. N Engl J Med 2013;369:2152](https://doi.org/10.1056/NEJMms1215400) |
| [Delphi Epidata (COVIDcast)](https://delphi.cmu.edu/) | Open | API of real-time US epidemic indicators — cases, hospitalisations, claims, symptom surveys, influenza-like illness — from Carnegie Mellon's Delphi group. | [Reinhart A et al. PNAS 2021;118:e2111452118](https://doi.org/10.1073/pnas.2111452118) |
| [JHU CSSE COVID-19 Data (archived)](https://github.com/CSSEGISandData/COVID-19) | Open | The iconic global daily COVID-19 case and death time series (Jan 2020–Mar 2023) that powered the Johns Hopkins dashboard. | [Dong E et al. Lancet Infect Dis 2020;20:533](https://doi.org/10.1016/S1473-3099(20)30120-1) |
| [ECDC Surveillance Atlas of Infectious Diseases](https://atlas.ecdc.europa.eu/) | Open | Interactive EU/EEA surveillance data for ~50 communicable diseases including AMR (EARS-Net), with downloadable tables. | — |
| [Global.health](https://global.health/) | Open | Open, de-identified line-list case data for outbreaks (COVID-19, mpox, Marburg, H5N1) curated from public sources. | — |

## Data Repositories & Portals

General platforms that host or index many health datasets — good places to keep searching.

| Database | Access | Description | Article |
|---|---|---|---|
| [PhysioNet](https://physionet.org/) | Open | The home of MIMIC, eICU and hundreds of open and credentialed physiological, clinical and imaging datasets, plus annual Computing in Cardiology challenges. | [Goldberger AL et al. Circulation 2000;101:e215](https://doi.org/10.1161/01.CIR.101.23.e215) |
| [UCI Machine Learning Repository](https://archive.ics.uci.edu/) | Open | Long-running repository of 600+ curated datasets, including dozens of classic clinical ones (breast cancer Wisconsin, heart disease, diabetes, CKD, hepatitis). | — |
| [Grand Challenge](https://grand-challenge.org/challenges/) | Registration | Platform hosting hundreds of biomedical image-analysis challenges with downloadable datasets and leaderboard evaluation. | — |
| [Synapse](https://www.synapse.org/) | Registration | Collaborative research platform hosting data for DREAM challenges, AMP-AD, BraTS and many consortia, with fine-grained access controls. | — |
| [Kaggle Datasets](https://www.kaggle.com/datasets?tags=4202-Health) | Registration | Community data platform with thousands of medical datasets and competition data (RSNA, SIIM, APTOS, PANDA) plus free GPU notebooks. | — |
| [ICPSR](https://www.icpsr.umich.edu/) | Registration | The world's largest archive of social and behavioural science data, including health and ageing collections (NACDA) and many NIH-funded studies. | — |
| [UK Data Service](https://ukdataservice.ac.uk/) | Registration | UK's largest collection of social, economic and population data — including ELSA, Understanding Society, Health Survey for England and birth cohorts. | — |
| [Health Data Research Gateway](https://healthdatagateway.org/) | Application | Searchable catalogue of UK health datasets (NHS, cohorts, biobanks, trials) with standardised metadata and a common data-access request workflow. | — |
| [Registry of Open Data on AWS (life sciences)](https://registry.opendata.aws/?search=tags:life%20sciences) | Open | Cloud-hosted public datasets you can analyse in place — e.g. gnomAD, 1000 Genomes, TCGA open tier, CAMELYON, EMBED, NIH CXR. | — |
| [Zenodo](https://zenodo.org/) | Open | CERN-run general-purpose open repository where many medical datasets (TotalSegmentator, CODE-15%, COUGHVID…) are deposited with DOIs. | — |
