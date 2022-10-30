'use strict';


// Helpers
//import helper from './helpers/helper';
import Utils from './helpers/utils';
import reference from './modules/reference';
import header from './modules/header';
import popup from './modules/popup';
import isi from './modules/isi';

$(() => {

   //private
   var self,
      el,
      hamMenu,
      touchclick =
      ('ontouchend' in document.documentElement) ?
      'touchend' :
      (window.navigator.pointerEnabled) ?
      'pointerup' :
      'click',
      nextButton;

   class Main {

      constructor() {
         //set vars
         self = this;
         el = $('.slide');
         hamMenu = el.find('.ham-menu');
         nextButton = el.find('.next-button');
         reference();
         header();
         popup();
         isi();

         nextButton.on(touchclick, (e) => {
            let tracking = {};
            const target = $(e.target).data('target');
            // switch (target) {
            //    case '03_rheum_hcp_iva_shes_scheduled_for_relief':
            //       tracking = {
            //          id: 'button',
            //          type: 'MNK commitment "next"',
            //          description: 'mnk_commitment_rheum>slide_introduction>next button'
            //       };
            //       break;
            //    case '12_rheum_hcp_iva_potential_moa':
            //       tracking = {
            //          id: 'button',
            //          type: 'Rheum home Next button',
            //          description: 'rheum_scheduled_relief>slide_home>next button'
            //       };
            //    break;
            //    case '13_rheum_hcp_iva_potential_moa_1':
            //       tracking = {
            //          id: 'button',
            //          type: 'Rheum home Next button',
            //          description: 'moa_introduction>slide_moa>moa introduction next button'
            //       };
            //    break;
            //    case '14_rheum_hcp_iva_potential_moa_2':
            //       tracking = {
            //          id: 'button',
            //          type: 'Melanocortin peptide next button',
            //          description: 'potential_moa>slide_moa>next button'
            //       };
            //       break;
            //    case '15_rheum_hcp_iva_potential_moa_3':
            //       tracking = {
            //          id: 'button',
            //          type: 'Endogenous Cortisol next button ',
            //          description: 'moa_endogenous_cortisol>slide_moa>EC_ next button'
            //       };
            //       break;
            //    case '16_rheum_hcp_iva_potential_moa_4':
            //       tracking = {
            //          id: 'button',
            //          type: 'Direct Cell Modulation next button',
            //          description: 'moa_direct_cell_modulation>slide_moa>DCM_next button'
            //       };
            //       break;
            //    case '23_rheum_hcp_iva_dm_pm_study_design':
            //       tracking = {
            //          id: 'button',
            //          type: 'Immunomodulatory Effect next button',
            //          description: 'moa_ immunomodulatory_effect>slide_moa>IE_next button'
            //       };
            //       break;
            //    case '26_rheum_hcp_iva_dm_pm_study_assesstments':
            //       tracking = {
            //          id: 'button',
            //          type: 'DM/PM study design: next button',
            //          description: 'dm_pm_study_design>slide_dm_pm_studies>study design_next button'
            //       };
            //       break;
            //    case '28_rheum_hcp_iva_dm_pm_patient_characteristics':
            //       tracking = {
            //          id: 'button',
            //          type: 'DM/PM study assessments: next button',
            //          description: 'dm_pm_study_assessment>slide_dm_pm_studies>study assessments_next button'
            //       };
            //       break;
            //    case '30_rheum_hcp_iva_dm_pm_study_results_safety':
            //       tracking = {
            //          id: 'button',
            //          type: 'DM/PM chronic and persistent disease next button',
            //          description: 'dm_pm_patient_characteristics>slide_dm_pm_studies>patient_characteristics_next button'
            //       };
            //       break;
            //    case '34_rheum_hcp_iva_dm_pm_case_study_1':
            //       tracking = {
            //          id: 'button',
            //          type: 'DM/PM results next button',
            //          description: 'dm_pm_results>slide_dm_pm_studies>results_next button'
            //       };
            //       break;
            //    case '36_rheum_hcp_iva_dm_pm_case_study_2':
            //       tracking = {
            //          id: 'button',
            //          type: 'DM/PM case study 1 next button',
            //          description: 'dm_pm_case_studies>slide_dm_pm_studies>case studies_age 53_next button'
            //       };
            //       break;
            //    case '38_rheum_hcp_iva_sle_study_design':
            //       tracking = {
            //          id: 'button',
            //          type: 'DM/PM case study 2 next button',
            //          description: 'dm_pm_case_studies>slide_dm_pm_studies>case studies_age 47_next button'
            //       };
            //       break;
            //    case '41_rheum_hcp_iva_sle_study_assesstments':
            //       tracking = {
            //          id: 'button',
            //          type: 'SLE study design next button',
            //          description: 'sle_study_design>slide_sle_studies>study design_next button'
            //       };
            //       break;
            //    case '43_rheum_hcp_iva_sle_patient_characteristics':
            //       tracking = {
            //          id: 'button',
            //          type: 'SLE study assessments next button',
            //          description: 'sle_study_assessments>slide_sle_studies>study assessments_next button'
            //       };
            //       break;
            //    case '45_rheum_hcp_iva_sle_study_results_safety':
            //       tracking = {
            //          id: 'button',
            //          type: 'SLE patient characteristics next button',
            //          description: 'sle_patient_characteristics>slide_sle_studies>patient characteristics_next button'
            //       };
            //       break;
            //    case '48_rheum_hcp_iva_sle_case_study_1_patient_characteristics':
            //       tracking = {
            //          id: 'button',
            //          type: 'SLE results next button',
            //          description: 'sle_results>slide_sle_studies>results_next button'
            //       };
            //       break;
            //    case '50_rheum_hcp_iva_sle_case_study_1_acthar_treatment':
            //       tracking = {
            //          id: 'button',
            //          type: 'SLE case study 1 patient characteristics age 57 next button',
            //          description: 'sle_case_studies>slide_sle_studies>case study 1_patients characteristics_next button'
            //       };
            //       break;
            //    case '54_rheum_hcp_iva_sle_case_study_2_patient_characteristics':
            //       tracking = {
            //          id: 'button',
            //          type: 'SLE case study 1 acthar treatment next button',
            //          description: 'sle_case_studies>slide_sle_studies>case study 1_acthar treatment_next button'
            //       };
            //       break;
            //    case '56_rheum_hcp_iva_sle_case_study_2_acthar_treatment':
            //       tracking = {
            //          id: 'button',
            //          type: 'SLE case study 2 patient characteristics age 46 next button',
            //          description: 'sle_case_studies>slide_sle_studies>case study 2_patients characteristics_next button'
            //       };
            //       break;
            //    case '61_rheum_hcp_iva_sarcoidosis_study_design':
            //       tracking = {
            //          id: 'button',
            //          type: 'SLE case study 2 acthar treatment next button',
            //          description: 'sle_case_studies>slide_sle_studies>case study 2_next button'
            //       };
            //       break;
            //    case '63_rheum_hcp_iva_sarcoidosis_study_assesstments':
            //       tracking = {
            //          id: 'button',
            //          type: 'Sarc study design next button',
            //          description: 'sarc_study_design>slide_sarc_studies>study design_next button'
            //       };
            //       break;
            //    case '65_rheum_hcp_iva_sarcoidosis_patient_characteristics':
            //       tracking = {
            //          id: 'button',
            //          type: 'Sarc study assessments next button',
            //          description: 'sarc_study_assessments>slide_sarc_studies>study assessments_next button'
            //       };
            //       break;
            //    case '67_rheum_hcp_iva_sarcoidosis_study_results':
            //       tracking = {
            //          id: 'button',
            //          type: 'Sarc patient characteristics next button',
            //          description: 'sarc_patient_characteristics>slide_sarc_studies>patients characteristics_next button'
            //       };
            //       break;
            //    case '70_rheum_hcp_iva_sarcoidosis_safety_findings':
            //       tracking = {
            //          id: 'button',
            //          type: 'Sarc results next button',
            //          description: 'sarc_study_results>slide_sarc_studies>results_next button'
            //       };
            //       break;
            //    case '71_rheum_hcp_iva_ra_study_design':
            //       tracking = {
            //          id: 'button',
            //          type: 'Sarc safety findings next button',
            //          description: 'sarc_safety_findings>slide_sarc_studies>safety findings_next button'
            //       };
            //       break;
            //    case '74_rheum_hcp_iva_ra_interim_study_assesstments':
            //       tracking = {
            //          id: 'button',
            //          type: 'RA study design next button',
            //          description: 'ra_study_design>slide_ra_studies_>study design next button'
            //       };
            //       break;
            //    case '75_rheum_hcp_iva_chat_pt_disposition':
            //       tracking = {
            //          id: 'button',
            //          type: 'RA study assessments next button ',
            //          description: 'ra_study_assessments>slide_ra_studies_>study assessments next button'
            //       };
            //       break;
            //    case '76_rheum_hcp_iva_ra_patient_characteristics':
            //       tracking = {
            //          id: 'button',
            //          type: 'RA study disposition next button',
            //          description: 'ra_study_disposition>slide_ra_studies_>study disposition next button'
            //       };
            //       break;
            //    case '77_rheum_hcp_iva_ra_patient_demographics':
            //       tracking = {
            //          id: 'button',
            //          type: 'RA DMARDs Permitted next button ',
            //          description: 'ra_study_DMARDs>slide_ra_studies_>DMARDs permitted next button'
            //       };
            //       break;
            //    case '78_rheum_hcp_iva_ra_study_results':
            //       tracking = {
            //          id: 'button',
            //          type: 'RA patient demographics next button',
            //          description: 'ra_patient_demographics>slide_ra_studies_>patient demographics next button'
            //       };
            //       break;
            //    case '79_rheum_hcp_iva_ra_open_label_treatment_period':
            //       tracking = {
            //          id: 'button',
            //          type: 'RA Part 1 Efficacy next button',
            //          description: 'ra_part_1_efficacy>slide_ra_studies_>part 1 efficacy_next button'
            //       };
            //       break;
            //    case '80_rheum_hcp_iva_ra_double_blind_withdrawal_period_1':
            //       tracking = {
            //          id: 'button',
            //          type: 'RA patient-reported outcomes next button',
            //          description: 'ra_patient_reported_outcomes>slide_ra_studies_>patient reported_next button'
            //       };
            //       break;
            //    case '81_rheum_hcp_iva_ra_double_blind_withdrawal_period_2':
            //       tracking = {
            //          id: 'button',
            //          type: 'RA Part 2 Efficacy next button',
            //          description: 'ra_part_2_efficacy>slide_ra_studies_>part 1 efficacy_next button'
            //       };
            //       break;
            //    case '83_rheum_hcp_iva_ra_safety_limitations':
            //       tracking = {
            //          id: 'button',
            //          type: 'RA Flare Rate next button',
            //          description: 'ra_flare_rate>slide_ra_studies_>flare rate next button'
            //       };
            //       break;
            //    case '86_rheum_hcp_iva_rheumatology_dosing':
            //       tracking = {
            //          id: 'button',
            //          type: 'RA Saftey Endpoints next button',
            //          description: 'ra_safety_endpoints>slide_ra_studies_>safety endpoints next button'
            //       };
            //       break;
            //    case '88_rheum_hcp_iva_acthar_support_services':
            //       tracking = {
            //          id: 'button',
            //          type: 'Dosing next button',
            //          description: 'rheum_dosing>slide_dosing>next button'
            //       };
            //       break;
            //    default:
            //       break;
            // }
            veevaUtils.gotoSlide(target, tracking);
         });

         hamMenu.on(touchclick, function () {
            self.toggleMenu();
         });

         el.on(touchclick, '.main-menu-modal.open', function (e) {
            if ($(e.target).is($(this))) {
               self.toggleMenu();
            }
         });

         //initial setup
         el.on(touchclick, '.main-menu-modal.open', function (e) {
            if ($(e.target).is($(this))) {
               self.toggleMenu();
            }
         });

         self.scaleWindow();

         //listeners
         FastClick.attach(document.body); //fastclick for mobile
         document.addEventListener('touchmove', e => e.preventDefault(), false); //prevent webview window from scrolling
         $('a[href="#"]').on(touchclick, e => e.preventDefault()); //prevent default behavior for anchor tags with hash
      }

      //----- handlers ------//

      scaleWindow() {
         var initialWidth = 1024;
         $('body').css('zoom', window.innerWidth / initialWidth);
      }


      toggleMenu() {

         hamMenu.toggleClass('open');
         hamMenu.find('.nav-icon').toggleClass('open');
         hamMenu.parent().parent().find('.main-menu-modal').toggleClass('open');
      }

      //----- utils ------//

   }

   let main = new Main();
   let utils = new Utils();


});
