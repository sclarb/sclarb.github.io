
function get_VARS() {

	Get_KPIValues(days_in_ar.value, dia_total_ar.value, dia_total_charges.value, dia_start_date.value, dia_end_date.value, dia_comments.value,
		average_charge_per_rvu.value, acpr_total_payments.value, acpr_total_rvus.value, acpr_comments.value,
		average_charge_per_visit.value, acpv_total_charges.value, acpv_total_visits.value, acpv_comments.value,
		average_receipt_per_visit.value, arpv_total_payments.value, arpv_total_visits.value, arpv_comments.value,
		average_monthly_charges.value, amc_total_charges.value, amc_end_date.value, amc_start_date.value, amc_comments.value,
		net_collection.value, nc_total_payments.value, nc_collectible_writeoffs.value, nc_comments.value,
		denial_rate.value, dr_claims_denied.value, dr_total_visits.value, dr_comments.value,
		percent_of_ar.value, par_total_ar.value, par_total_ar_last_day.value, par_comments.value,
		average_rvu_per_visit.value, avrvu_total_rvus.value, avrvu_total_visits.value, avrvu_comments.value,
		patient_ar_percent.value, pt_total_ar.value, pt_total_patient.value, pt_comments.value);
		}; //close get_VARS which calls Get_KPIValues by passing in DOM values

function Get_KPIValues(days_in_ar_int, dia_total_ar_int, dia_total_charges_int, dia_start_date, dia_end_date, dia_comments_input, 
		average_charge_int, acpr_total_payments_int, acpr_total_rvus_int, acpr_comments_input,
		average_charge_per_visit_int, acpv_total_charges_int, acpv_total_visits_int, acpv_comments_input,
		average_receipt_per_visit_int, arpv_total_payments_int, arpv_total_visits_int, arpv_comments_input,
		average_monthly_charges_int, amc_total_charges_int, amc_end_date, amc_start_date, amc_comments_input,
		net_collection_rate_int, nc_total_payments_int, nc_collectible_writeoffs_int, nc_comments_input,
		denial_rate_int, dr_claims_denied_int, dr_total_visits_int, dr_comments_input,
		percent_of_ar_int, par_total_ar_percent_int, par_total_ar_last_day_percent_int, par_comments_input,
		average_rvu_per_visit_int, avrvu_total_rvus_int, avrvu_total_visits_int, avrvu_comments_input,
		patient_ar_percent_int, pt_total_ar_int, pt_total_patient_ar_int, pt_comments_input){

	KPI = {
	    AR: {
	        days_in_ar: days_in_ar_int,
	        total_ar: dia_total_ar_int,
	        total_charges: dia_total_charges_int,
	        start_date: dia_start_date,
	        end_date: dia_end_date,
	        comments: dia_comments_input
	    },

	    RVU: {
			average_charge_per_rvu: average_charge_int,
			total_payments: acpr_total_payments_int,
			total_rvus: acpr_total_rvus_int,
			comments: acpr_comments_input
		},

		AverageChargePerVisit: {
			average_charge_per_visit: average_charge_per_visit_int,
			total_charges: acpv_total_charges_int,
			total_visits: acpv_total_visits_int,
			comments: acpv_comments_input
		},

		AverageReceiptPerVisit: {
			average_receipt_per_visit: average_receipt_per_visit_int,
			total_payments: arpv_total_payments_int,
			total_visits: arpv_total_visits_int,
			comments: arpv_comments_input
		},

		AverageMonthlyCharges: {
			average_monthly_charges: average_monthly_charges_int,
			total_charges: amc_total_charges_int,
			end_date: amc_end_date,
			start_date: amc_start_date,
			comments: amc_comments_input
		},

		NetCollectionRate: {
			net_collection_rate: net_collection_rate_int,
			total_payments: nc_total_payments_int,
			collectible_writeoffs: nc_collectible_writeoffs_int,
			comments: nc_comments_input
		},

		DenialRate: {
			denial_rate: denial_rate_int,
			claims_denied: dr_claims_denied_int,
			total_visits: dr_total_visits_int,
			comments: dr_comments_input
		},

		ARPercentage: {
			percent_of_ar: percent_of_ar_int,
			total_ar: par_total_ar_percent_int,
			total_ar_last_day_percent: par_total_ar_last_day_percent_int,
			comments: par_comments_input
		},

		AverageRVUpervisit: {  
			average_rvu_per_visit: average_rvu_per_visit_int,
			total_rvus: avrvu_total_rvus_int,
			total_visits: avrvu_total_visits_int,
			comments: avrvu_comments_input
		},

		PatientARpercent: {
			patient_ar_percent: patient_ar_percent_int,
			total_ar: pt_total_ar_int,
			total_patient_ar: pt_total_patient_ar_int,
			comments: pt_comments_input
		},
				}; // close KPI object
		return KPI; //return object
	} 	// close Get_KPIvalues function

