import {
    pgTable,
    pgSchema,
    serial,
    integer,
    varchar,
    boolean,
    numeric,
    date,
    unique,
    text,
    doublePrecision,
    timestamp,
    type AnyPgColumn,
    foreignKey,
    smallint,
    index,
    bigint,
    check,
    bigserial,
    json,
    char,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const e360 = pgSchema("e360");

export const additionaldataforsapintegrationAdditionaldataidSeqInE360 = e360.sequence("additionaldataforsapintegration_additionaldataid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const addresstypemasterAddresstypemasterPkeySeqInE360 = e360.sequence("addresstypemaster_addresstypemaster_pkey_seq", {
    startWith: "2",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const bandmasterPkeySeqInE360 = e360.sequence("bandmaster_pkey_seq", { startWith: "21", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const bugroupmasterBusinessunitgroupPkeySeqInE360 = e360.sequence("bugroupmaster_businessunitgroup_pkey_seq", {
    startWith: "7",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const bumasterBusinessunitPkeySeqInE360 = e360.sequence("bumaster_businessunit_pkey_seq", { startWith: "7", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const citymasterComcityPkeySeqInE360 = e360.sequence("citymaster_comcity_pkey_seq", { startWith: "41", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const companycontactsCompanycontactpersonsPkeySeqInE360 = e360.sequence("companycontacts_companycontactpersons_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const companymasterCompanyPkeySeqInE360 = e360.sequence("companymaster_company_pkey_seq", { startWith: "7", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const comuserprojectmappingComuserprojectmappingidSeqInE360 = e360.sequence("comuserprojectmapping_comuserprojectmappingid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const costcentermasterCostcenterPkeySeqInE360 = e360.sequence("costcentermaster_costcenter_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const countrymasterComcountryPkeySeqInE360 = e360.sequence("countrymaster_comcountry_pkey_seq", {
    startWith: "12",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const customercontactsCustomercontactpersonsPkeySeqInE360 = e360.sequence("customercontacts_customercontactpersons_pkey_seq", {
    startWith: "87",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const customerdocumentsCustomerdocumentattachmentsPkeySeqInE360 = e360.sequence("customerdocuments_customerdocumentattachments_pkey_seq", {
    startWith: "7",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const customergroupcontactsCustomergroupcontactpersonsPkeySeqInE360 = e360.sequence("customergroupcontacts_customergroupcontactpersons_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
});
export const customergroupdocumentsCustomergroupdocumentattachmentsPkeySeInE360 = e360.sequence("customergroupdocuments_customergroupdocumentattachments_pkey_se", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
});
export const customergroupmasterCustomergroupPkeySeqInE360 = e360.sequence("customergroupmaster_customergroup_pkey_seq", {
    startWith: "82",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const customermasterCustomerPkeySeqInE360 = e360.sequence("customermaster_customer_pkey_seq", {
    startWith: "110",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const custratePkeySeqInE360 = e360.sequence("custrate_pkey_seq", { startWith: "251", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const custrolePkeySeqInE360 = e360.sequence("custrole_pkey_seq", { startWith: "186", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const customersubscriptionCustomersubscriptionidSeq1InE360 = e360.sequence("customersubscription_customersubscriptionid_seq1", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const datcourseDatcoursemasterPkeySeqInE360 = e360.sequence("datcourse_datcoursemaster_pkey_seq", {
    startWith: "46",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const datcurrencyDatcomcurrencyPkeySeqInE360 = e360.sequence("datcurrency_datcomcurrency_pkey_seq", {
    startWith: "4",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const dateducationDateducationmasterPkeySeqInE360 = e360.sequence("dateducation_dateducationmaster_pkey_seq", {
    startWith: "5",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const exchangeratePtaskPkeySeqInE360 = e360.sequence("exchangerate_ptask_pkey_seq", { startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const datgenderDatcomgenderPkeySeqInE360 = e360.sequence("datgender_datcomgender_pkey_seq", { startWith: "3", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const datlanguageDatcomlanguagePkeySeqInE360 = e360.sequence("datlanguage_datcomlanguage_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const datmenupermissionDatmenupermissionidSeqInE360 = e360.sequence("datmenupermission_datmenupermissionid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
});
export const datmenusDatmenuidSeqInE360 = e360.sequence("datmenus_datmenuid_seq", { startWith: "1", increment: "1", minValue: "1", maxValue: "9223372036854775807", cache: "1", cycle: false });
export const datmoduleDatmoduleidSeqInE360 = e360.sequence("datmodule_datmoduleid_seq", { startWith: "1", increment: "1", minValue: "1", maxValue: "9223372036854775807", cache: "1", cycle: false });
export const datmodulealiasDatmodulealiasidSeqInE360 = e360.sequence("datmodulealias_datmodulealiasid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
});
export const datprojectbilltypeDatprojectbillingtypePkeySeqInE360 = e360.sequence("datprojectbilltype_datprojectbillingtype_pkey_seq", {
    startWith: "3",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const datreportmasterReportidSeqInE360 = e360.sequence("datreportmaster_reportid_seq", { startWith: "4", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const datspecialisationDatspecialisationPkeySeqInE360 = e360.sequence("datspecialisation_datspecialisation_pkey_seq", {
    startWith: "987",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const datstatusmasterStatusidSeqInE360 = e360.sequence("datstatusmaster_statusid_seq", { startWith: "12", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const datsubscriptionpackageDatsubscriptionpackageidSeqInE360 = e360.sequence("datsubscriptionpackage_datsubscriptionpackageid_seq", {
    startWith: "3",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const datsubscriptionpackagehistoryDatsubscriptionpackagehistorySeqInE360 = e360.sequence("datsubscriptionpackagehistory_datsubscriptionpackagehistory_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const datsubscriptionpackagemoduleDatsubscriptionpackagemoduleidSeqInE360 = e360.sequence("datsubscriptionpackagemodule_datsubscriptionpackagemoduleid_seq", {
    startWith: "25",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const datsubscriptionpackagemodulehDatsubscriptionpackagemodulehSeqInE360 = e360.sequence("datsubscriptionpackagemoduleh_datsubscriptionpackagemoduleh_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const datusertypeDatusertypePkeySeqInE360 = e360.sequence("datusertype_datusertype_pkey_seq", {
    startWith: "5",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const deliverymodemasterDeliverymodemasterPkeySeqInE360 = e360.sequence("deliverymodemaster_deliverymodemaster_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const deliveryrolemasterDeliveryroleidSeqInE360 = e360.sequence("deliveryrolemaster_deliveryroleid_seq", {
    startWith: "66",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const demandmasterDemandidSeqInE360 = e360.sequence("demandmaster_demandid_seq", { startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const demandroledetailDemandroledetailidSeqInE360 = e360.sequence("demandroledetail_demandroledetailid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const demandroleresponsibilitiesDemandroleresponsibilitiesidSeqInE360 = e360.sequence("demandroleresponsibilities_demandroleresponsibilitiesid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const demandskillsDemandskillidSeqInE360 = e360.sequence("demandskills_demandskillid_seq", { startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const departmentmasterDepartmentPkeySeqInE360 = e360.sequence("departmentmaster_department_pkey_seq", {
    startWith: "27",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const designationmasterDesignationmasterPkeySeqInE360 = e360.sequence("designationmaster_designationmaster_pkey_seq", {
    startWith: "102",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const roleskillmapRsPkeySeqInE360 = e360.sequence("roleskillmap_rs_pkey_seq", { startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const documenttypemasterDocumenttypemasterPkeySeqInE360 = e360.sequence("documenttypemaster_documenttypemaster_pkey_seq", {
    startWith: "5",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const dummytestDummytestidSeqInE360 = e360.sequence("dummytest_dummytestid_seq", { startWith: "10", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const expertisePkeySeqInE360 = e360.sequence("expertise_pkey_seq", { startWith: "10", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const forgotpasswordForgotpasswordPkeySeqInE360 = e360.sequence("forgotpassword_forgotpassword_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const forgotpasswordlinkForgotpasswordlinkidSeqInE360 = e360.sequence("forgotpasswordlink_forgotpasswordlinkid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const holidaymasterHolidaymasterPkeySeqInE360 = e360.sequence("holidaymaster_holidaymaster_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const industrymasterIndustryidSeqInE360 = e360.sequence("industrymaster_industryid_seq", { startWith: "10", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const levelmasterLevelmasterPkeySeqInE360 = e360.sequence("levelmaster_levelmaster_pkey_seq", {
    startWith: "6",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const locationmasterComlocationPkeySeqInE360 = e360.sequence("locationmaster_comlocation_pkey_seq", {
    startWith: "4",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const nationalitymasterNationalityPkeySeqInE360 = e360.sequence("nationalitymaster_nationality_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const opportunityOpportunityPkeySeqInE360 = e360.sequence("opportunity_opportunity_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const orgcostrateOrgcostrateidSeqInE360 = e360.sequence("orgcostrate_orgcostrateid_seq", { startWith: "4", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const overheadmasterOverheadmasterPkeySeqInE360 = e360.sequence("overheadmaster_overheadmaster_pkey_seq", {
    startWith: "9",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const productmasterProductmasterPkeySeqInE360 = e360.sequence("productmaster_productmaster_pkey_seq", {
    startWith: "6",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projectactivityProjectactivityPkeySeqInE360 = e360.sequence("projectactivity_projectactivity_pkey_seq", {
    startWith: "139",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projectactivityversionProjectactivityversionidSeqInE360 = e360.sequence("projectactivityversion_projectactivityversionid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projectattributeIdPkeySeqInE360 = e360.sequence("projectattribute_id_pkey_seq", { startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const projectbudgetProjectbudgetidSeqInE360 = e360.sequence("projectbudget_projectbudgetid_seq", {
    startWith: "2",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projectbudgetdetailsProjectbudgetdetailidSeqInE360 = e360.sequence("projectbudgetdetails_projectbudgetdetailid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projectbudgetversionProjectbudgetversionidSeqInE360 = e360.sequence("projectbudgetversion_projectbudgetversionid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projectcontactPkeySeqInE360 = e360.sequence("projectcontact_pkey_seq", { startWith: "312", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const projectdocumentsProjectdocumentattachmentsPkeySeqInE360 = e360.sequence("projectdocuments_projectdocumentattachments_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projecteffortPeffortPkeySeqInE360 = e360.sequence("projecteffort_peffort_pkey_seq", { startWith: "153", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const projecteffortPeffortdetailsPkeySeqInE360 = e360.sequence("projecteffort_peffortdetails_pkey_seq", {
    startWith: "3140",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projectestimationEstimationPkeySeqInE360 = e360.sequence("projectestimation_estimation_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projectestimationdetailsEstimationdetPkeySeqInE360 = e360.sequence("projectestimationdetails_estimationdet_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projectexpensePexpPkeySeqInE360 = e360.sequence("projectexpense_pexp_pkey_seq", { startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const projectholidaysProjectholidaymasterPkeySeqInE360 = e360.sequence("projectholidays_projectholidaymaster_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projectmasterProjectPkeySeqInE360 = e360.sequence("projectmaster_project_pkey_seq", { startWith: "246", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const projectmilesPtaskPkeySeqInE360 = e360.sequence("projectmiles_ptask_pkey_seq", { startWith: "14", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const projectplanversionProjectplanversionidSeqInE360 = e360.sequence("projectplanversion_projectplanversionid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projectproductmappingProjectproductmappingidSeqInE360 = e360.sequence("projectproductmapping_projectproductmappingid_seq", {
    startWith: "16",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projectprofitabilityProjectprofitabilityidSeqInE360 = e360.sequence("projectprofitability_projectprofitabilityid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projectrevenueProjrevidSeqInE360 = e360.sequence("projectrevenue_projrevid_seq", { startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const proleidPkeySeqInE360 = e360.sequence("proleid_pkey_seq", { startWith: "247", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const proletaskPkeySeqInE360 = e360.sequence("proletask_pkey_seq", { startWith: "1196", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const projectroleversionidPkeySeqInE360 = e360.sequence("projectroleversionid_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "9223372036854775807",
    cache: "1",
    cycle: false,
});
export const projectstaffProjectstaffPkeySeqInE360 = e360.sequence("projectstaff_projectstaff_pkey_seq", {
    startWith: "304",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const projecttasksPtaskPkeySeqInE360 = e360.sequence("projecttasks_ptask_pkey_seq", { startWith: "204", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const projecttypemasterProjecttypePkeySeqInE360 = e360.sequence("projecttypemaster_projecttype_pkey_seq", {
    startWith: "9",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const regionmasterComregionPkeySeqInE360 = e360.sequence("regionmaster_comregion_pkey_seq", {
    startWith: "15",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const roleidRoleidPkeySeqInE360 = e360.sequence("roleid_roleid_pkey_seq", { startWith: "1", increment: "1", minValue: "1", maxValue: "9223372036854775807", cache: "1", cycle: false });
export const rolemasterRoleidSeqInE360 = e360.sequence("rolemaster_roleid_seq", { startWith: "8", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const rolemenupermissionsRolemenupermissionsidSeqInE360 = e360.sequence("rolemenupermissions_rolemenupermissionsid_seq", {
    startWith: "58",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const rolemenusRolemenuidSeqInE360 = e360.sequence("rolemenus_rolemenuid_seq", { startWith: "48", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const roleusermappingRoleusermappingidSeqInE360 = e360.sequence("roleusermapping_roleusermappingid_seq", {
    startWith: "353",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const sapuserworkassignmentSapuserworkassignmentidSeqInE360 = e360.sequence("sapuserworkassignment_sapuserworkassignmentid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const skillareamasterPkeySeqInE360 = e360.sequence("skillareamaster_pkey_seq", { startWith: "14", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const skillmasterSkillmasterPkeySeqInE360 = e360.sequence("skillmaster_skillmaster_pkey_seq", {
    startWith: "27",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const slgroupmasterServicelinegroupPkeySeqInE360 = e360.sequence("slgroupmaster_servicelinegroup_pkey_seq", {
    startWith: "8",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const slmasterServicelinePkeySeqInE360 = e360.sequence("slmaster_serviceline_pkey_seq", { startWith: "14", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const sourcemasterSourcemasterPkeySeqInE360 = e360.sequence("sourcemaster_sourcemaster_pkey_seq", {
    startWith: "10",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const staffcostrateUcrPkeySeqInE360 = e360.sequence("staffcostrate_ucr_pkey_seq", { startWith: "4", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const statemasterComstatePkeySeqInE360 = e360.sequence("statemaster_comstate_pkey_seq", { startWith: "27", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const subscriptionpackagemoduleSubscriptionpackagemenuidSeqInE360 = e360.sequence("subscriptionpackagemodule_subscriptionpackagemenuid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const taskgroupmasterTaskgroupmasterPkeySeqInE360 = e360.sequence("taskgroupmaster_taskgroupmaster_pkey_seq", {
    startWith: "54",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const taskmasterTaskmasterPkeySeqInE360 = e360.sequence("taskmaster_taskmaster_pkey_seq", { startWith: "170", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const tasktypemasterTasktypemasterPkeySeqInE360 = e360.sequence("tasktypemaster_tasktypemaster_pkey_seq", {
    startWith: "3",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const techgroupPkeySeqInE360 = e360.sequence("techgroup_pkey_seq", { startWith: "7", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const technologymasterTechnologymasterPkeySeqInE360 = e360.sequence("technologymaster_technologymaster_pkey_seq", {
    startWith: "35",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const tenantcontactsTenantcontactpersonsPkeySeqInE360 = e360.sequence("tenantcontacts_tenantcontactpersons_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const tenantemailidconfigurationTenantemailidconfigurationidSeqInE360 = e360.sequence("tenantemailidconfiguration_tenantemailidconfigurationid_seq", {
    startWith: "2",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const tenantsubscriptionTenantsubscriptionidSeqInE360 = e360.sequence("tenantsubscription_tenantsubscriptionid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const tenantsubscriptionhistoryTenantsubscriptionhistoryidSeqInE360 = e360.sequence("tenantsubscriptionhistory_tenantsubscriptionhistoryid_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const timetypemasterTimetypemasterPkeySeqInE360 = e360.sequence("timetypemaster_timetypemaster_pkey_seq", {
    startWith: "2",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const useraddressComuseraddressPkeySeqInE360 = e360.sequence("useraddress_comuseraddress_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const usercertificationComusercertificationPkeySeqInE360 = e360.sequence("usercertification_comusercertification_pkey_seq", {
    startWith: "165",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const usereducationComusereducationPkeySeqInE360 = e360.sequence("usereducation_comusereducation_pkey_seq", {
    startWith: "678",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const usermasterComuserPkeySeqInE360 = e360.sequence("usermaster_comuser_pkey_seq", { startWith: "1323", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const userpayrollProllPkeySeqInE360 = e360.sequence("userpayroll_proll_pkey_seq", { startWith: "1", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const userpreferenceComuserpreferencePkeySeqInE360 = e360.sequence("userpreference_comuserpreference_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const userprevexperienceComuserprevexperiencePkeySeqInE360 = e360.sequence("userprevexperience_comuserprevexperience_pkey_seq", {
    startWith: "461",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const userrightsmenupermissionsUserrightsmenupermissionsidSeqInE360 = e360.sequence("userrightsmenupermissions_userrightsmenupermissionsid_seq", {
    startWith: "2",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const userskillUserskillidSeqInE360 = e360.sequence("userskill_userskillid_seq", { startWith: "80", increment: "1", minValue: "1", maxValue: "2147483647", cache: "1", cycle: false });
export const userskillattributesUserskillattributesidSeqInE360 = e360.sequence("userskillattributes_userskillattributesid_seq", {
    startWith: "143",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const userskilltechnologyComuserskilltechnologyPkeySeqInE360 = e360.sequence("userskilltechnology_comuserskilltechnology_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const weeklyholidaymasterWeeklyholidayconfigPkeySeqInE360 = e360.sequence("weeklyholidaymaster_weeklyholidayconfig_pkey_seq", {
    startWith: "1",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const workertypemasterWorkertypemasterPkeySeqInE360 = e360.sequence("workertypemaster_workertypemaster_pkey_seq", {
    startWith: "2",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});
export const workforcegroupmasterWfgidPkeyInE360 = e360.sequence("workforcegroupmaster_wfgid_pkey", {
    startWith: "3",
    increment: "1",
    minValue: "1",
    maxValue: "999999999999",
    cache: "1",
    cycle: false,
});
export const workmodemasterWorkmodemasterPkeySeqInE360 = e360.sequence("workmodemaster_workmodemaster_pkey_seq", {
    startWith: "3",
    increment: "1",
    minValue: "1",
    maxValue: "2147483647",
    cache: "1",
    cycle: false,
});

export const additionaldataforsapintegrationInE360 = e360.table("additionaldataforsapintegration", {
    additionaldataid: serial().primaryKey().notNull(),
    createuser: integer(),
    tenantid: integer(),
    customershortcode: varchar(),
    projectactivityshortcode: varchar(),
    projectshortcode: varchar(),
    projectlocation: integer(),
    servicelineid: integer(),
    projecttypeid: integer(),
    datprojectbillingtypeid: integer(),
    billtoclient: boolean(),
    clientapproval: boolean(),
    estdeffort: numeric(),
    taskgroupid: integer(),
    tasktypeid: integer(),
    datusertype: integer(),
    businessunitgroupid: integer(),
    levelid: integer(),
    datcurrencyid: integer(),
});

export const alldatesInE360 = e360.table("alldates", {
    date1: date(),
});

export const allocationSummaryInE360 = e360.table(
    "allocation_summary",
    {
        id: serial().primaryKey().notNull(),
        userid: integer().notNull(),
        monthYear: text("month_year").notNull(),
        totalAllocation: doublePrecision("total_allocation").default(0).notNull(),
        totalUtilization: doublePrecision("total_utilization").default(0).notNull(),
        ad1: doublePrecision(),
        ud1: doublePrecision(),
        ad2: doublePrecision(),
        ud2: doublePrecision(),
        ad3: doublePrecision(),
        ud3: doublePrecision(),
        ad4: doublePrecision(),
        ud4: doublePrecision(),
        ad5: doublePrecision(),
        ud5: doublePrecision(),
        ad6: doublePrecision(),
        ud6: doublePrecision(),
        ad7: doublePrecision(),
        ud7: doublePrecision(),
        ad8: doublePrecision(),
        ud8: doublePrecision(),
        ad9: doublePrecision(),
        ud9: doublePrecision(),
        ad10: doublePrecision(),
        ud10: doublePrecision(),
        ad11: doublePrecision(),
        ud11: doublePrecision(),
        ad12: doublePrecision(),
        ud12: doublePrecision(),
        ad13: doublePrecision(),
        ud13: doublePrecision(),
        ad14: doublePrecision(),
        ud14: doublePrecision(),
        ad15: doublePrecision(),
        ud15: doublePrecision(),
        ad16: doublePrecision(),
        ud16: doublePrecision(),
        ad17: doublePrecision(),
        ud17: doublePrecision(),
        ad18: doublePrecision(),
        ud18: doublePrecision(),
        ad19: doublePrecision(),
        ud19: doublePrecision(),
        ad20: doublePrecision(),
        ud20: doublePrecision(),
        ad21: doublePrecision(),
        ud21: doublePrecision(),
        ad22: doublePrecision(),
        ud22: doublePrecision(),
        ad23: doublePrecision(),
        ud23: doublePrecision(),
        ad24: doublePrecision(),
        ud24: doublePrecision(),
        ad25: doublePrecision(),
        ud25: doublePrecision(),
        ad26: doublePrecision(),
        ud26: doublePrecision(),
        ad27: doublePrecision(),
        ud27: doublePrecision(),
        ad28: doublePrecision(),
        ud28: doublePrecision(),
        ad29: doublePrecision(),
        ud29: doublePrecision(),
        ad30: doublePrecision(),
        ud30: doublePrecision(),
        ad31: doublePrecision(),
        ud31: doublePrecision(),
        comtenantid: integer(),
        isactiveflag: boolean(),
        createdtimestamp: timestamp({ mode: "string" }),
    },
    (table) => [unique("unique_userid_month").on(table.userid, table.monthYear)]
);

export const bandmasterInE360 = e360.table(
    "bandmaster",
    {
        bandmasterid: integer()
            .default(sql`nextval('bandmaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        bandname: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        slno: integer(),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_bandmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_bandmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_bandmaster_modifiedcomuserid",
        }),
    ]
);

export const authUserUserPermissionsInE360 = e360.table(
    "auth_user_user_permissions",
    {
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        id: bigint({ mode: "number" })
            .primaryKey()
            .generatedByDefaultAsIdentity({ name: "auth_user_user_permissions_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 9223372036854775807, cache: 1 }),
        userId: integer("user_id").notNull(),
        permissionId: integer("permission_id").notNull(),
    },
    (table) => [
        index("auth_user_user_permissions_permission_id_1fbb5f2c").using("btree", table.permissionId.asc().nullsLast().op("int4_ops")),
        index("auth_user_user_permissions_user_id_a95ead1b").using("btree", table.userId.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.permissionId],
            foreignColumns: [authPermissionInE360.id],
            name: "auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm",
        }),
        foreignKey({
            columns: [table.userId],
            foreignColumns: [authUserInE360.id],
            name: "auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id",
        }),
        unique("auth_user_user_permissions_user_id_permission_id_14a6b632_uniq").on(table.userId, table.permissionId),
    ]
);

export const autoemailreceiverdetailInE360 = e360.table("autoemailreceiverdetail", {
    autoemailreceiverdetailid: serial().primaryKey().notNull(),
    reportname: varchar({ length: 250 }),
    receiveremailid: varchar({ length: 250 }),
    isactive: boolean(),
    comtenantid: integer(),
});

export const autotimesheetcronjobexecutionlogInE360 = e360.table("autotimesheetcronjobexecutionlog", {
    autotimesheetcronjobexecutionlogid: serial().primaryKey().notNull(),
    comtenantid: integer(),
    cronjobname: varchar({ length: 100 }),
    executedtime: timestamp({ mode: "string" }),
});

export const authGroupInE360 = e360.table(
    "auth_group",
    {
        id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "auth_group_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
        name: varchar({ length: 150 }).notNull(),
    },
    (table) => [index("auth_group_name_a6ea08ec_like").using("btree", table.name.asc().nullsLast().op("varchar_pattern_ops")), unique("auth_group_name_key").on(table.name)]
);

export const authUserGroupsInE360 = e360.table(
    "auth_user_groups",
    {
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        id: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "auth_user_groups_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 9223372036854775807, cache: 1 }),
        userId: integer("user_id").notNull(),
        groupId: integer("group_id").notNull(),
    },
    (table) => [
        index("auth_user_groups_group_id_97559544").using("btree", table.groupId.asc().nullsLast().op("int4_ops")),
        index("auth_user_groups_user_id_6a12ed8b").using("btree", table.userId.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.groupId],
            foreignColumns: [authGroupInE360.id],
            name: "auth_user_groups_group_id_97559544_fk_auth_group_id",
        }),
        foreignKey({
            columns: [table.userId],
            foreignColumns: [authUserInE360.id],
            name: "auth_user_groups_user_id_6a12ed8b_fk_auth_user_id",
        }),
        unique("auth_user_groups_user_id_group_id_94350c0c_uniq").on(table.userId, table.groupId),
    ]
);

export const authUserInE360 = e360.table(
    "auth_user",
    {
        id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "auth_user_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
        password: varchar({ length: 128 }).notNull(),
        lastLogin: timestamp("last_login", { withTimezone: true, mode: "string" }),
        isSuperuser: boolean("is_superuser").notNull(),
        username: varchar({ length: 150 }).notNull(),
        firstName: varchar("first_name", { length: 150 }).notNull(),
        lastName: varchar("last_name", { length: 150 }).notNull(),
        email: varchar({ length: 254 }).notNull(),
        isStaff: boolean("is_staff").notNull(),
        isActive: boolean("is_active").notNull(),
        dateJoined: timestamp("date_joined", { withTimezone: true, mode: "string" }).notNull(),
    },
    (table) => [index("auth_user_username_6821ab7c_like").using("btree", table.username.asc().nullsLast().op("varchar_pattern_ops")), unique("auth_user_username_key").on(table.username)]
);

export const addresstypemasterInE360 = e360.table(
    "addresstypemaster",
    {
        addresstypeid: integer()
            .default(sql`nextval('addresstypemaster_addresstypemaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        addresstype: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_addresstypemaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_addresstypemaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_addresstypemaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_addresstypemaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_addresstypemaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_addresstypemaster_modifiedcomuserid",
        }),
    ]
);

export const announcementsInE360 = e360.table(
    "announcements",
    {
        announcementid: serial().primaryKey().notNull(),
        announcementtext: varchar().notNull(),
        comtenantid: integer(),
        announcementlink: varchar(),
        sequence: integer(),
        expirydate: date(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_announcements_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_announcements_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_announcements_modifiedcomuserid",
        }),
    ]
);

export const bugroupmasterInE360 = e360.table(
    "bugroupmaster",
    {
        businessunitgroupid: integer()
            .default(sql`nextval('bugroupmaster_businessunitgroup_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        businessunitgroupname: varchar({ length: 50 }).notNull(),
        groupheadid: integer(),
        groupcontactpersonid: integer(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        businessunitgroupheadcomuserid: bigint({ mode: "number" }),
    },
    (table) => [
        index("indx_bugroupmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_bugroupmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_bugroupmaster_groupcontactpersonid").using("btree", table.groupcontactpersonid.asc().nullsLast().op("int4_ops")),
        index("indx_bugroupmaster_groupheadid").using("btree", table.groupheadid.asc().nullsLast().op("int4_ops")),
        index("indx_bugroupmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.businessunitgroupheadcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_bugroupmaster_businessunitgroupheadcomuserid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_bugroupmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_bugroupmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.groupcontactpersonid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_bugroupmaster_groupcontactpersonid",
        }),
        foreignKey({
            columns: [table.groupheadid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_bugroupmaster_groupheadid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_bugroupmaster_modifiedcomuserid",
        }),
    ]
);

export const bumasterInE360 = e360.table(
    "bumaster",
    {
        businessunitid: integer()
            .default(sql`nextval('bumaster_businessunit_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        businessunitgroupid: integer().notNull(),
        businessunitname: varchar({ length: 50 }).notNull(),
        businessunitheadid: integer(),
        businessunitcontactpersonid: integer(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        code: varchar({ length: 20 }),
    },
    (table) => [
        index("indx_bumaster_businessunitcontactpersonid").using("btree", table.businessunitcontactpersonid.asc().nullsLast().op("int4_ops")),
        index("indx_bumaster_businessunitgroupid").using("btree", table.businessunitgroupid.asc().nullsLast().op("int4_ops")),
        index("indx_bumaster_businessunitheadid").using("btree", table.businessunitheadid.asc().nullsLast().op("int4_ops")),
        index("indx_bumaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_bumaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_bumaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.businessunitcontactpersonid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_bumaster_businessunitcontactpersonid",
        }),
        foreignKey({
            columns: [table.businessunitgroupid],
            foreignColumns: [bugroupmasterInE360.businessunitgroupid],
            name: "fk_bumaster_businessunitgroupid",
        }),
        foreignKey({
            columns: [table.businessunitheadid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_bumaster_businessunitheadid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_bumaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_bumaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_bumaster_modifiedcomuserid",
        }),
    ]
);

export const companyholidaysInE360 = e360.table(
    "companyholidays",
    {
        companyholidaysid: serial().primaryKey().notNull(),
        companyid: integer().notNull(),
        holiday: date(),
        reason: varchar({ length: 100 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_companyholidays_companyid").using("btree", table.companyid.asc().nullsLast().op("int4_ops")),
        index("indx_companyholidays_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_companyholidays_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_companyholidays_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_companyholidays_companyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_companyholidays_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_companyholidays_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_companyholidays_modifiedcomuserid",
        }),
    ]
);

export const companyweekdaysInE360 = e360.table(
    "companyweekdays",
    {
        companyweekdaysid: serial().primaryKey().notNull(),
        companyid: integer().notNull(),
        sunholiday: boolean(),
        monholiday: boolean(),
        tueholiday: boolean(),
        wedholiday: boolean(),
        thuholiday: boolean(),
        friholiday: boolean(),
        satholiday: boolean(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        noofhoursperday: numeric({ precision: 9, scale: 2 }),
        basecurrencyid: integer(),
    },
    (table) => [
        index("indx_companyweekdays_companyid").using("btree", table.companyid.asc().nullsLast().op("int4_ops")),
        index("indx_companyweekdays_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_companyweekdays_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_companyweekdays_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_companyweekdays_companyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_companyweekdays_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_companyweekdays_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_companyweekdays_modifiedcomuserid",
        }),
    ]
);

export const companymasterInE360 = e360.table(
    "companymaster",
    {
        companyid: integer()
            .default(sql`nextval('companymaster_company_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comtenantid: integer().notNull(),
        companyname: varchar({ length: 250 }).notNull(),
        parentcompanyname: varchar({ length: 250 }),
        shortname: varchar({ length: 20 }),
        companycode: varchar({ length: 20 }),
        addressStreet: varchar("address_street", { length: 50 }),
        addressPobox: varchar("address_pobox", { length: 50 }),
        address3: varchar({ length: 50 }),
        pincode: varchar({ length: 50 }),
        phoneno: varchar({ length: 50 }),
        comcityid: integer(),
        comstateid: smallint(),
        comcountryid: smallint(),
        region: varchar({ length: 250 }),
        mobile1: varchar({ length: 50 }),
        fax: varchar({ length: 50 }),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        isdeleteflag: boolean(),
        deletedtimestamp: timestamp({ mode: "string" }),
        deletedcomuserid: smallint(),
        defaultcomcurrencyid: smallint().notNull(),
        notes: varchar({ length: 100 }),
        incorporationdate: date(),
        financialyear: varchar({ length: 15 }),
    },
    (table) => [
        index("indx_companymaster_comcityid").using("btree", table.comcityid.asc().nullsLast().op("int4_ops")),
        index("indx_companymaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_companymaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_companymaster_defaultcomcurrencyid").using("btree", table.defaultcomcurrencyid.asc().nullsLast().op("int2_ops")),
        index("indx_companymaster_deletedcomuserid").using("btree", table.deletedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_companymaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comcityid],
            foreignColumns: [citymasterInE360.comcityid],
            name: "fk_companymaster_comcityid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_companymaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_companymaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.defaultcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_companymaster_defaultcomcurrencyid",
        }),
        foreignKey({
            columns: [table.deletedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_companymaster_deletedcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_companymaster_modifiedcomuserid",
        }),
    ]
);

export const comuserprojectmappingInE360 = e360.table(
    "comuserprojectmapping",
    {
        comuserprojectmappingid: integer()
            .default(sql`nextval('comuserprojectmapping_comuserprojectmappingid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comuserid: integer().notNull(),
        comprojectid: integer().notNull(),
        comtenantid: integer().notNull(),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_comuserprojectmapping_comtenantid",
        }),
    ]
);

export const cronjobconfigurationInE360 = e360.table("cronjobconfiguration", {
    cronjobconfiguration: serial().primaryKey().notNull(),
    comtenantid: integer(),
    cronjobname: varchar({ length: 100 }),
    modifiedcomuserid: integer(),
});

export const cronjobexecutionlogInE360 = e360.table("cronjobexecutionlog", {
    cronjobexecutionlogid: serial().primaryKey().notNull(),
    comtenantid: integer(),
    cronjobname: varchar({ length: 100 }),
    executedtime: timestamp({ mode: "string" }),
});

export const customerdocumentsInE360 = e360.table(
    "customerdocuments",
    {
        customerdocumentattachmentsid: integer()
            .default(sql`nextval('customerdocuments_customerdocumentattachments_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        customerid: integer().notNull(),
        comtenantid: integer().notNull(),
        documenttype: integer().notNull(),
        filename: varchar({ length: 500 }).notNull(),
        filepath: varchar({ length: 200 }).notNull(),
        versionno: varchar({ length: 25 }),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        isdeletedflag: boolean(),
        deletedcomuserid: smallint(),
        deletedtimestamp: timestamp({ mode: "string" }),
        notes: varchar({ length: 100 }),
        fileformat: varchar({ length: 500 }),
        status: integer(),
    },
    (table) => [
        index("indx_customerdocuments_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_customerdocuments_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_customerdocuments_customerid").using("btree", table.customerid.asc().nullsLast().op("int4_ops")),
        index("indx_customerdocuments_deletedcomuserid").using("btree", table.deletedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_customerdocuments_documenttype").using("btree", table.documenttype.asc().nullsLast().op("int4_ops")),
        index("indx_customerdocuments_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_customerdocuments_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customerdocuments_createdcomuserid",
        }),
        foreignKey({
            columns: [table.customerid],
            foreignColumns: [customermasterInE360.customerid],
            name: "fk_customerdocuments_customerid",
        }),
        foreignKey({
            columns: [table.deletedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customerdocuments_deletedcomuserid",
        }),
        foreignKey({
            columns: [table.documenttype],
            foreignColumns: [documenttypemasterInE360.documenttypeid],
            name: "fk_customerdocuments_documenttype",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customerdocuments_modifiedcomuserid",
        }),
    ]
);

export const costcentermasterInE360 = e360.table(
    "costcentermaster",
    {
        costcenterid: integer()
            .default(sql`nextval('costcentermaster_costcenter_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comtenantid: integer().notNull(),
        costcentername: varchar({ length: 250 }).notNull(),
        costcentercode: varchar({ length: 20 }),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_costcentermaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_costcentermaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_costcentermaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_costcentermaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_costcentermaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_costcentermaster_modifiedcomuserid",
        }),
    ]
);

export const countrymasterInE360 = e360.table(
    "countrymaster",
    {
        comcountryid: integer()
            .default(sql`nextval('countrymaster_comcountry_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comregionid: integer().notNull(),
        countryname: varchar({ length: 100 }).notNull(),
        countrycode: varchar({ length: 100 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_countrymaster_comregionid").using("btree", table.comregionid.asc().nullsLast().op("int4_ops")),
        index("indx_countrymaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_countrymaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_countrymaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comregionid],
            foreignColumns: [regionmasterInE360.comregionid],
            name: "fk_countrymaster_comregionid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_countrymaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_countrymaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_countrymaster_modifiedcomuserid",
        }),
    ]
);

export const customercontactsInE360 = e360.table(
    "customercontacts",
    {
        customercontactpersonid: integer()
            .default(sql`nextval('customercontacts_customercontactpersons_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        customerid: integer().notNull(),
        comtenantid: integer().notNull(),
        contactpersonname: varchar({ length: 250 }).notNull(),
        designation: varchar({ length: 250 }),
        phoneno: varchar({ length: 50 }),
        email: varchar({ length: 500 }).notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        contacttype: varchar({ length: 500 }),
        isprimary: boolean(),
    },
    (table) => [
        index("indx_customercontacts_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_customercontacts_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_customercontacts_customerid").using("btree", table.customerid.asc().nullsLast().op("int4_ops")),
        index("indx_customercontacts_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_customercontacts_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customercontacts_createdcomuserid",
        }),
        foreignKey({
            columns: [table.customerid],
            foreignColumns: [customermasterInE360.customerid],
            name: "fk_customercontacts_customerid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customercontacts_modifiedcomuserid",
        }),
    ]
);

export const customerholidaysInE360 = e360.table(
    "customerholidays",
    {
        customerholidaysid: serial().primaryKey().notNull(),
        customerid: integer().notNull(),
        holiday: date(),
        reason: varchar({ length: 100 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_customerholidays_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_customerholidays_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_customerholidays_customerid").using("btree", table.customerid.asc().nullsLast().op("int4_ops")),
        index("indx_customerholidays_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_customerholidays_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customerholidays_createdcomuserid",
        }),
        foreignKey({
            columns: [table.customerid],
            foreignColumns: [customermasterInE360.customerid],
            name: "fk_customerholidays_customerid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customerholidays_modifiedcomuserid",
        }),
    ]
);

export const customergroupcontactsInE360 = e360.table(
    "customergroupcontacts",
    {
        customergroupcontactpersonid: integer()
            .default(sql`nextval('customergroupcontacts_customergroupcontactpersons_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        customergroupid: integer().notNull(),
        comtenantid: integer().notNull(),
        contactpersonname: varchar({ length: 250 }).notNull(),
        designation: varchar({ length: 250 }),
        phoneno: varchar({ length: 50 }),
        email: varchar({ length: 500 }).notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        contacttype: varchar({ length: 500 }),
        isprimary: boolean(),
    },
    (table) => [
        index("indx_customergroupcontacts_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_customergroupcontacts_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_customergroupcontacts_customergroupid").using("btree", table.customergroupid.asc().nullsLast().op("int4_ops")),
        index("indx_customergroupcontacts_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_customergroupcontacts_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customergroupcontacts_createdcomuserid",
        }),
        foreignKey({
            columns: [table.customergroupid],
            foreignColumns: [customergroupmasterInE360.customergroupid],
            name: "fk_customergroupcontacts_customergroupid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customergroupcontacts_modifiedcomuserid",
        }),
    ]
);

export const dateducationInE360 = e360.table(
    "dateducation",
    {
        dateducationmasterid: integer()
            .default(sql`nextval('dateducation_dateducationmaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        educationmaster: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_dateducation_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_dateducation_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_dateducation_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_dateducation_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_dateducation_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_dateducation_modifiedcomuserid",
        }),
    ]
);

export const customermasterInE360 = e360.table(
    "customermaster",
    {
        customerid: integer()
            .default(sql`nextval('customermaster_customer_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comtenantid: integer().notNull(),
        customername: varchar({ length: 250 }).notNull(),
        customergroupid: integer().notNull(),
        shortname: varchar({ length: 20 }),
        addressStreet: varchar("address_street", { length: 250 }),
        addressPobox: varchar("address_pobox", { length: 250 }),
        address3: varchar({ length: 200 }),
        pincode: varchar({ length: 50 }),
        phoneno: varchar({ length: 50 }),
        comcityid: integer(),
        comstateid: smallint(),
        comcountryid: smallint(),
        mobile1: varchar({ length: 50 }),
        fax: varchar({ length: 50 }),
        source: varchar({ length: 50 }),
        customeridinsourcesystem: varchar({ length: 100 }),
        accountmanagerid: integer(),
        contactpersonid: integer(),
        defaultcomcurrencyid: smallint(),
        email: varchar(),
        paymentDays: integer("payment_days"),
        gstType: varchar("gst_type"),
        gstNumber: varchar("gst_number"),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        comregionid: integer(),
        industryid: integer(),
        companyid: integer(),
        businessunitid: integer(),
        customercode: varchar({ length: 20 }),
        isSapcustomer: boolean("is_sapcustomer"),
        financialyear: varchar({ length: 15 }),
    },
    (table) => [
        index("indx_customermaster_accountmanagerid").using("btree", table.accountmanagerid.asc().nullsLast().op("int4_ops")),
        index("indx_customermaster_comcityid").using("btree", table.comcityid.asc().nullsLast().op("int4_ops")),
        index("indx_customermaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_customermaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_customermaster_customergroupid").using("btree", table.customergroupid.asc().nullsLast().op("int4_ops")),
        index("indx_customermaster_defaultcomcurrencyid").using("btree", table.defaultcomcurrencyid.asc().nullsLast().op("int2_ops")),
        index("indx_customermaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.accountmanagerid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customermaster_accountmanagerid",
        }),
        foreignKey({
            columns: [table.businessunitid],
            foreignColumns: [bumasterInE360.businessunitid],
            name: "fk_customermaster_businessunitid",
        }),
        foreignKey({
            columns: [table.comcityid],
            foreignColumns: [citymasterInE360.comcityid],
            name: "fk_customermaster_comcityid",
        }),
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_customermaster_companyid",
        }),
        foreignKey({
            columns: [table.comregionid],
            foreignColumns: [regionmasterInE360.comregionid],
            name: "fk_customermaster_comregionid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_customermaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customermaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.customergroupid],
            foreignColumns: [customergroupmasterInE360.customergroupid],
            name: "fk_customermaster_customergroupid",
        }),
        foreignKey({
            columns: [table.defaultcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_customermaster_defaultcomcurrencyid",
        }),
        foreignKey({
            columns: [table.industryid],
            foreignColumns: [industrymasterInE360.industryid],
            name: "fk_customermaster_industryid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customermaster_modifiedcomuserid",
        }),
    ]
);

export const customergroupmasterInE360 = e360.table(
    "customergroupmaster",
    {
        customergroupid: integer()
            .default(sql`nextval('customergroupmaster_customergroup_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comtenantid: integer().notNull(),
        customergroupname: varchar({ length: 250 }).notNull(),
        accountmanagerid: integer(),
        contactpersonid: integer(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_customergroupmaster_accountmanagerid").using("btree", table.accountmanagerid.asc().nullsLast().op("int4_ops")),
        index("indx_customergroupmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_customergroupmaster_contactpersonid").using("btree", table.contactpersonid.asc().nullsLast().op("int4_ops")),
        index("indx_customergroupmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_customergroupmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.accountmanagerid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customergroupmaster_accountmanagerid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_customergroupmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.contactpersonid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customergroupmaster_contactpersonid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customergroupmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customergroupmaster_modifiedcomuserid",
        }),
    ]
);

export const customergroupdocumentsInE360 = e360.table(
    "customergroupdocuments",
    {
        customergroupdocumentattachmentsid: integer()
            .default(sql`nextval('customergroupdocuments_customergroupdocumentattachments_pkey_se'::regclass)`)
            .primaryKey()
            .notNull(),
        customergroupid: integer().notNull(),
        comtenantid: integer().notNull(),
        documenttype: integer().notNull(),
        filename: varchar({ length: 500 }).notNull(),
        filepath: varchar({ length: 200 }).notNull(),
        versionno: varchar({ length: 25 }),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        isdeletedflag: boolean(),
        deletedcomuserid: smallint(),
        deletedtimestamp: timestamp({ mode: "string" }),
        notes: varchar({ length: 100 }),
        fileformat: varchar({ length: 500 }),
        status: integer(),
    },
    (table) => [
        index("indx_customergroupdocuments_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_customergroupdocuments_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_customergroupdocuments_customergroupid").using("btree", table.customergroupid.asc().nullsLast().op("int4_ops")),
        index("indx_customergroupdocuments_deletedcomuserid").using("btree", table.deletedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_customergroupdocuments_documenttype").using("btree", table.documenttype.asc().nullsLast().op("int4_ops")),
        index("indx_customergroupdocuments_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_customergroupdocuments_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customergroupdocuments_createdcomuserid",
        }),
        foreignKey({
            columns: [table.customergroupid],
            foreignColumns: [customergroupmasterInE360.customergroupid],
            name: "fk_customergroupdocuments_customergroupid",
        }),
        foreignKey({
            columns: [table.deletedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customergroupdocuments_deletedcomuserid",
        }),
        foreignKey({
            columns: [table.documenttype],
            foreignColumns: [documenttypemasterInE360.documenttypeid],
            name: "fk_customergroupdocuments_documenttype",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customergroupdocuments_modifiedcomuserid",
        }),
    ]
);

export const customerratesInE360 = e360.table(
    "customerrates",
    {
        custrateid: integer()
            .default(sql`nextval('custrate_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        croleid: integer(),
        levelid: integer().notNull(),
        billHr: doublePrecision("bill_hr").notNull(),
        comcurrencyid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        comtenantid: integer(),
        customerid: integer(),
        locationid: integer(),
        isonsite: boolean(),
        rateunit: integer(),
        countryid: integer(),
        skillareamasterid: integer(),
        techgroupid: integer(),
        minBandid: integer("min_bandid"),
        maxBandid: integer("max_bandid"),
    },
    (table) => [
        foreignKey({
            columns: [table.comcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_customerrates_comcurrencyid",
        }),
        foreignKey({
            columns: [table.countryid],
            foreignColumns: [countrymasterInE360.comcountryid],
            name: "fk_customerrates_countryid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customerrates_createdcomuserid",
        }),
        foreignKey({
            columns: [table.croleid],
            foreignColumns: [customerrolesInE360.custroleid],
            name: "fk_customerrates_croleid",
        }),
        foreignKey({
            columns: [table.levelid],
            foreignColumns: [levelmasterInE360.levelmasterid],
            name: "fk_customerrates_levelid",
        }),
        foreignKey({
            columns: [table.locationid],
            foreignColumns: [locationmasterInE360.comlocationid],
            name: "fk_customerrates_locationid",
        }),
        foreignKey({
            columns: [table.maxBandid],
            foreignColumns: [bandmasterInE360.bandmasterid],
            name: "fk_customerrates_maxbandid",
        }),
        foreignKey({
            columns: [table.minBandid],
            foreignColumns: [bandmasterInE360.bandmasterid],
            name: "fk_customerrates_minbandid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customerrates_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.skillareamasterid],
            foreignColumns: [skillareamasterInE360.skillareamasterid],
            name: "fk_customerrates_skillareamasterid",
        }),
        foreignKey({
            columns: [table.techgroupid],
            foreignColumns: [techgroupmasterInE360.techgroupid],
            name: "fk_customerrates_techgroupid",
        }),
    ]
);

export const customerrolesInE360 = e360.table(
    "customerroles",
    {
        custroleid: integer()
            .default(sql`nextval('custrole_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        customerid: integer().notNull(),
        rolename: varchar({ length: 100 }),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        comtenantid: integer(),
        deliveryroleid: integer(),
        datprojectbillingtypeid: integer(),
        poreference: varchar({ length: 200 }),
    },
    (table) => [
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customerroles_createdcomuserid",
        }),
        foreignKey({
            columns: [table.customerid],
            foreignColumns: [customermasterInE360.customerid],
            name: "fk_customerroles_customerid",
        }),
        foreignKey({
            columns: [table.deliveryroleid],
            foreignColumns: [deliveryrolemasterInE360.deliveryroleid],
            name: "fk_customerroles_deliveryroleid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customerroles_modifiedcomuserid",
        }),
    ]
);

export const customersubscriptionInE360 = e360.table(
    "customersubscription",
    {
        customersubscriptionid: integer()
            .default(sql`nextval('customersubscription_customersubscriptionid_seq1'::regclass)`)
            .primaryKey()
            .notNull(),
        comtenantid: integer().notNull(),
        datsubscriptionpackageid: integer().notNull(),
        subscriptionfromdate: date(),
        subscriptiontodate: date(),
        graceperiodindays: smallint(),
        istrialaccount: boolean(),
        activeflag: boolean(),
        isadvancesubscriptionrenew: boolean().default(false).notNull(),
        createdtimestamp: timestamp({ mode: "string" }),
        createdcomuserid: smallint(),
        deletedcomuserid: smallint(),
        deletedtimestamp: timestamp({ mode: "string" }),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_customersubscription_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customersubscription_createdcomuserid",
        }),
        foreignKey({
            columns: [table.deletedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customersubscription_deletedcomuserid",
        }),
    ]
);

export const customerweekdaysInE360 = e360.table(
    "customerweekdays",
    {
        customerweekdaysid: serial().primaryKey().notNull(),
        customerid: integer().notNull(),
        sunholiday: boolean(),
        monholiday: boolean(),
        tueholiday: boolean(),
        wedholiday: boolean(),
        thuholiday: boolean(),
        friholiday: boolean(),
        satholiday: boolean(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        noofhoursperday: numeric({ precision: 9, scale: 2 }),
    },
    (table) => [
        index("indx_customerweekdays_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_customerweekdays_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_customerweekdays_customerid").using("btree", table.customerid.asc().nullsLast().op("int4_ops")),
        index("indx_customerweekdays_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_customerweekdays_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customerweekdays_createdcomuserid",
        }),
        foreignKey({
            columns: [table.customerid],
            foreignColumns: [customermasterInE360.customerid],
            name: "fk_customerweekdays_customerid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_customerweekdays_modifiedcomuserid",
        }),
    ]
);

export const datcourseInE360 = e360.table(
    "datcourse",
    {
        datcoursemasterid: integer()
            .default(sql`nextval('datcourse_datcoursemaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        dateducationmasterid: integer().notNull(),
        coursemaster: varchar({ length: 500 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_datcourse_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_datcourse_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_datcourse_dateducationmasterid").using("btree", table.dateducationmasterid.asc().nullsLast().op("int4_ops")),
        index("indx_datcourse_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_datcourse_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datcourse_createdcomuserid",
        }),
        foreignKey({
            columns: [table.dateducationmasterid],
            foreignColumns: [dateducationInE360.dateducationmasterid],
            name: "fk_datcourse_dateducationmasterid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datcourse_modifiedcomuserid",
        }),
    ]
);

export const datexchangerateInE360 = e360.table(
    "datexchangerate",
    {
        exchangerateid: integer()
            .default(sql`nextval('exchangerate_ptask_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        currencyfrom: integer().notNull(),
        currencyto: integer().notNull(),
        conversionrate: numeric({ precision: 10, scale: 4 }).notNull(),
        validfrom: date(),
        validto: date(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        comtenantid: integer(),
    },
    (table) => [
        index("indx_datexchangerate_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_datexchangerate_fromcurid").using("btree", table.currencyfrom.asc().nullsLast().op("int4_ops")),
        index("indx_datexchangerate_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_datexchangerate_tocurid").using("btree", table.currencyto.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datexchangerate_createdcomuserid",
        }),
        foreignKey({
            columns: [table.currencyfrom],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_datexchangerate_currencyfrom",
        }),
        foreignKey({
            columns: [table.currencyto],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_datexchangerate_currencyto",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datexchangerate_modifiedcomuserid",
        }),
    ]
);

export const datgenderInE360 = e360.table(
    "datgender",
    {
        datcomgenderid: smallint()
            .default(sql`nextval('datgender_datcomgender_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        gender: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_datgender_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_datgender_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_datgender_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_datgender_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datgender_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datgender_modifiedcomuserid",
        }),
    ]
);

export const datmoduleInE360 = e360.table(
    "datmodule",
    {
        datmoduleid: integer()
            .default(sql`nextval('datmodule_datmoduleid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        datmodulealiasid: integer().notNull(),
        modulename: varchar({ length: 50 }),
        parentmoduleid: integer(),
        modulecode: varchar({ length: 10 }),
        displayorder: integer(),
        activeflag: boolean(),
        comtenantid: integer().notNull(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_datmodule_comtenantid",
        }),
        foreignKey({
            columns: [table.datmodulealiasid],
            foreignColumns: [datmodulealiasInE360.datmodulealiasid],
            name: "fk_datmodule_datmodulealiasid",
        }),
    ]
);

export const datmenupermissionInE360 = e360.table(
    "datmenupermission",
    {
        datmenupermissionid: integer()
            .default(sql`nextval('datmenupermission_datmenupermissionid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        datmenuid: integer().notNull(),
        permissionname: varchar({ length: 150 }),
        activeflag: boolean(),
        comtenantid: integer().notNull(),
        notes: varchar({ length: 100 }),
        displayorder: integer(),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_datmenupermission_comtenantid",
        }),
        foreignKey({
            columns: [table.datmenuid],
            foreignColumns: [datmenusInE360.datmenuid],
            name: "fk_datmenupermission_datmenuid",
        }),
    ]
);

export const datmenusInE360 = e360.table(
    "datmenus",
    {
        datmenuid: integer()
            .default(sql`nextval('datmenus_datmenuid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        datmoduleid: integer().notNull(),
        menuname: varchar({ length: 150 }),
        tcode: varchar({ length: 50 }),
        relativepage: varchar(),
        activeflag: boolean(),
        displayorder: integer(),
        comtenantid: integer().notNull(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_datmenus_comtenantid",
        }),
        foreignKey({
            columns: [table.datmoduleid],
            foreignColumns: [datmoduleInE360.datmoduleid],
            name: "fk_datmenus_datmoduleid",
        }),
    ]
);

export const datmodulealiasInE360 = e360.table(
    "datmodulealias",
    {
        datmodulealiasid: smallint()
            .default(sql`nextval('datmodulealias_datmodulealiasid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        modulealiasname: varchar({ length: 50 }),
        code: varchar({ length: 10 }),
        activeflag: boolean(),
        comtenantid: integer().notNull(),
        notes: varchar({ length: 100 }),
        displayorder: smallint(),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_datmodulealias_comtenantid",
        }),
    ]
);

export const datspecialisationInE360 = e360.table(
    "datspecialisation",
    {
        datspecialisationid: integer()
            .default(sql`nextval('datspecialisation_datspecialisation_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        datcoursemasterid: integer().notNull(),
        dateducationmasterid: integer().notNull(),
        specialisation: varchar({ length: 500 }).notNull(),
        activeflag: boolean().notNull(),
        comtenantid: integer().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_datspecialisation_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_datspecialisation_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_datspecialisation_datcoursemasterid").using("btree", table.datcoursemasterid.asc().nullsLast().op("int4_ops")),
        index("indx_datspecialisation_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_datspecialisation_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datspecialisation_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcoursemasterid],
            foreignColumns: [datcourseInE360.datcoursemasterid],
            name: "fk_datspecialisation_datcoursemasterid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datspecialisation_modifiedcomuserid",
        }),
    ]
);

export const datsubscriptionpackagehistoryInE360 = e360.table("datsubscriptionpackagehistory", {
    datsubscriptionpackagehistoryid: integer()
        .default(sql`nextval('datsubscriptionpackagehistory_datsubscriptionpackagehistory_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    datsubscriptionpackageid: integer(),
    packagename: varchar({ length: 250 }),
    activeflag: boolean(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
    deletedcomuserid: smallint(),
    deletedtimestamp: timestamp({ mode: "string" }),
    deletedflag: boolean(),
    noofusers: integer(),
    priceperuser: numeric(),
    currencyid: integer(),
});

export const datsubscriptionpackagemodulehistoryInE360 = e360.table("datsubscriptionpackagemodulehistory", {
    datsubscriptionpackagemodulehsitoryid: integer()
        .default(sql`nextval('datsubscriptionpackagemoduleh_datsubscriptionpackagemoduleh_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    datsubscriptionpackagehistoryid: integer(),
    datsubscriptionpackagemoduleid: integer(),
    datsubscriptionpackageid: integer(),
    datmoduleid: integer().notNull(),
});

export const datsubscriptionpackageInE360 = e360.table(
    "datsubscriptionpackage",
    {
        datsubscriptionpackageid: integer()
            .default(sql`nextval('datsubscriptionpackage_datsubscriptionpackageid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        packagename: varchar({ length: 250 }),
        activeflag: boolean(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        deletedcomuserid: smallint(),
        deletedtimestamp: timestamp({ mode: "string" }),
        deletedflag: boolean(),
        noofusers: integer(),
        priceperuser: numeric(),
        currencyid: integer(),
    },
    (table) => [
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datsubscriptionpackage_createdcomuserid",
        }),
        foreignKey({
            columns: [table.deletedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datsubscriptionpackage_deletedcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datsubscriptionpackage_modifiedcomuserid",
        }),
    ]
);

export const demandmatchInE360 = e360.table(
    "demandmatch",
    {
        demandmatchid: serial().primaryKey().notNull(),
        demandid: integer().notNull(),
        userid: integer().notNull(),
        matchscore: integer(),
        matchstatus: integer(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_demandmatch_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_demandmatch_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_demandmatch_demandid").using("btree", table.demandid.asc().nullsLast().op("int4_ops")),
        index("indx_demandmatch_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_demandmatch_userid").using("btree", table.userid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_demandmatch_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_demandmatch_createdcomuserid",
        }),
        foreignKey({
            columns: [table.demandid],
            foreignColumns: [demandmasterInE360.demandid],
            name: "fk_demandmatch_demandid",
        }),
        foreignKey({
            columns: [table.matchstatus],
            foreignColumns: [datstatusmasterInE360.statusid],
            name: "fk_demandmatch_matchstatus",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_demandmatch_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.userid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_demandmatch_userid",
        }),
    ]
);

export const deliveryrolemasterInE360 = e360.table(
    "deliveryrolemaster",
    {
        deliveryroleid: integer()
            .default(sql`nextval('deliveryrolemaster_deliveryroleid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        rolename: varchar({ length: 500 }),
        activeflag: boolean(),
        comtenantid: integer().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_deliveryrolemaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_deliveryrolemaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_deliveryrolemaster_comtenantid",
        }),
    ]
);

export const demandroledetailInE360 = e360.table(
    "demandroledetail",
    {
        demandroledetailid: integer()
            .default(sql`nextval('demandroledetail_demandroledetailid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        demandid: integer().notNull(),
        jobtitle: varchar({ length: 100 }),
        experienceinyear: integer(),
        rolesummary: varchar({ length: 1000 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: integer().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: integer(),
        minBandid: integer("min_bandid"),
        maxBandid: integer("max_bandid"),
    },
    (table) => [
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_demandroledetail_createdcomuserid",
        }),
        foreignKey({
            columns: [table.demandid],
            foreignColumns: [demandmasterInE360.demandid],
            name: "fk_demandroledetail_demandid",
        }),
        foreignKey({
            columns: [table.maxBandid],
            foreignColumns: [bandmasterInE360.bandmasterid],
            name: "fk_demandroledetail_max_bandid",
        }),
        foreignKey({
            columns: [table.minBandid],
            foreignColumns: [bandmasterInE360.bandmasterid],
            name: "fk_demandroledetail_min_bandid",
        }),
    ]
);

export const demandmatchconfigurationInE360 = e360.table(
    "demandmatchconfiguration",
    {
        demandmatchconfigurationid: serial().primaryKey().notNull(),
        comtenantid: integer(),
        parametername: varchar({ length: 500 }),
        conditions: varchar({ length: 500 }),
        isactiveflag: boolean(),
        notes: varchar({ length: 500 }),
        createdtimestamp: timestamp({ mode: "string" }),
        createdcomuserid: smallint(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        emptypeUsage: varchar("emptype_usage"),
        emptypeWeightage: integer("emptype_weightage"),
        workforcegroupUsage: varchar("workforcegroup_usage"),
        workforcegroupWeightage: integer("workforcegroup_weightage"),
        servicelineUsage: varchar("serviceline_usage"),
        servicelineWeightage: integer("serviceline_weightage"),
        allocationUsage: varchar("allocation_usage"),
        allocationWeightage: integer("allocation_weightage"),
        workmodeUsage: varchar("workmode_usage"),
        workmodeWeightage: integer("workmode_weightage"),
        locationUsage: varchar("location_usage"),
        locationWeightage: integer("location_weightage"),
        minbandUsage: varchar("minband_usage"),
        minbandWeightage: integer("minband_weightage"),
        maxbandUsage: varchar("maxband_usage"),
        maxbandWeightage: integer("maxband_weightage"),
        skillUsage: varchar("skill_usage"),
        skillWeightage: integer("skill_weightage"),
        technologyUsage: varchar("technology_usage"),
        technologyWeightage: integer("technology_weightage"),
        domainUsage: varchar("domain_usage"),
        domainWeightage: integer("domain_weightage"),
        minexpUsage: varchar("minexp_usage"),
        minexpWeightage: integer("minexp_weightage"),
        maxexpUsage: varchar("maxexp_usage"),
        maxexpWeightage: integer("maxexp_weightage"),
        includenoticeperiod: boolean(),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "demandmatchconfiguration_comtenantid_fkey",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "demandmatchconfiguration_createdcomuserid_fkey",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "demandmatchconfiguration_modifiedcomuserid_fkey",
        }),
    ]
);

export const datsubscriptionpackagemoduleInE360 = e360.table(
    "datsubscriptionpackagemodule",
    {
        datsubscriptionpackagemoduleid: integer()
            .default(sql`nextval('datsubscriptionpackagemodule_datsubscriptionpackagemoduleid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        datsubscriptionpackageid: integer(),
        datmoduleid: integer().notNull(),
    },
    (table) => [
        foreignKey({
            columns: [table.datsubscriptionpackageid],
            foreignColumns: [datsubscriptionpackageInE360.datsubscriptionpackageid],
            name: "fk_datsubscriptionpackagemodule_datsubscriptionpackageid",
        }),
    ]
);

export const datusertypeInE360 = e360.table(
    "datusertype",
    {
        datusertypeid: integer()
            .default(sql`nextval('datusertype_datusertype_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        usertype: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_datusertype_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_datusertype_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_datusertype_datusertypeid").using("btree", table.datusertypeid.asc().nullsLast().op("int4_ops")),
        index("indx_datusertype_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_datusertype_usertype").using("btree", table.usertype.asc().nullsLast().op("text_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_datusertype_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datusertype_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datusertype_modifiedcomuserid",
        }),
    ]
);

export const deliverymodemasterInE360 = e360.table(
    "deliverymodemaster",
    {
        deliverymodemasterid: integer()
            .default(sql`nextval('deliverymodemaster_deliverymodemaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        deliverymode: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_deliverymodemaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_deliverymodemaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_deliverymodemaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_deliverymodemaster_modifiedcomuserid",
        }),
    ]
);

export const demandmasterInE360 = e360.table(
    "demandmaster",
    {
        demandid: integer()
            .default(sql`nextval('demandmaster_demandid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        demandcode: varchar({ length: 20 }).notNull(),
        workertypeid: integer().notNull(),
        companyid: integer().notNull(),
        requesttype: varchar({ length: 1 }).notNull(),
        businessunitid: integer(),
        servicelineid: integer(),
        startdate: date().notNull(),
        opportunityid: integer(),
        projectid: integer(),
        departmentid: integer(),
        billrate: numeric({ precision: 13, scale: 3 }),
        datcomcurrencyid: integer(),
        billingunit: integer(),
        allocation: numeric().notNull(),
        workmodeid: integer().notNull(),
        priority: varchar({ length: 1 }).notNull(),
        locationid: integer(),
        assignedto: integer(),
        assigneddate: date(),
        demandstatusid: integer(),
        cityid: integer().notNull(),
        isBillable: boolean("is_billable").notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: integer().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: integer(),
        notes: varchar({ length: 100 }),
        peopleno: integer(),
        isonsite: boolean(),
        workforcegroupid: integer(),
    },
    (table) => [
        index("indx_demandmaster_businessunitid").using("btree", table.businessunitid.asc().nullsLast().op("int4_ops")),
        index("indx_demandmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_demandmaster_servicelineid").using("btree", table.servicelineid.asc().nullsLast().op("int4_ops")),
        index("indx_demandmaster_workertypeid").using("btree", table.workertypeid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.assignedto],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_demandmaster_assignedto",
        }),
        foreignKey({
            columns: [table.businessunitid],
            foreignColumns: [bumasterInE360.businessunitid],
            name: "fk_demandmaster_businessunitid",
        }),
        foreignKey({
            columns: [table.cityid],
            foreignColumns: [citymasterInE360.comcityid],
            name: "fk_demandmaster_cityid",
        }),
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_demandmaster_companyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_demandmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_demandmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_demandmaster_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.demandstatusid],
            foreignColumns: [datstatusmasterInE360.statusid],
            name: "fk_demandmaster_demandstatusid",
        }),
        foreignKey({
            columns: [table.departmentid],
            foreignColumns: [departmentmasterInE360.departmentid],
            name: "fk_demandmaster_departmentid",
        }),
        foreignKey({
            columns: [table.locationid],
            foreignColumns: [locationmasterInE360.comlocationid],
            name: "fk_demandmaster_locationid",
        }),
        foreignKey({
            columns: [table.opportunityid],
            foreignColumns: [opportunityInE360.opportunityid],
            name: "fk_demandmaster_opportunityid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_demandmaster_projectid",
        }),
        foreignKey({
            columns: [table.servicelineid],
            foreignColumns: [slmasterInE360.servicelineid],
            name: "fk_demandmaster_servicelineid",
        }),
        foreignKey({
            columns: [table.workertypeid],
            foreignColumns: [workertypemasterInE360.workertypeid],
            name: "fk_demandmaster_workertypeid",
        }),
        foreignKey({
            columns: [table.workforcegroupid],
            foreignColumns: [workforcegroupmasterInE360.wfgid],
            name: "fk_demandmaster_workforcegroupid",
        }),
        foreignKey({
            columns: [table.workmodeid],
            foreignColumns: [workmodemasterInE360.workmodeid],
            name: "fk_demandmaster_workmodeid",
        }),
    ]
);

export const demandmatchconfigincludestatusInE360 = e360.table(
    "demandmatchconfigincludestatus",
    {
        demandmatchconfigincludestatusid: serial().primaryKey().notNull(),
        demandmatchconfigurationid: integer(),
        includestatusid: integer(),
    },
    (table) => [
        foreignKey({
            columns: [table.demandmatchconfigurationid],
            foreignColumns: [demandmatchconfigurationInE360.demandmatchconfigurationid],
            name: "fk_demandmatchconfigincludestatus_demandmatchconfigurationid",
        }),
        foreignKey({
            columns: [table.includestatusid],
            foreignColumns: [datstatusmasterInE360.statusid],
            name: "fk_demandmatchconfigincludestatus_includestatusid",
        }),
    ]
);

export const demandmatchconfigincludeusertypeInE360 = e360.table(
    "demandmatchconfigincludeusertype",
    {
        demandmatchconfigdatusertypeid: serial().primaryKey().notNull(),
        demandmatchconfigurationid: integer(),
        datusertypeid: integer(),
    },
    (table) => [
        foreignKey({
            columns: [table.datusertypeid],
            foreignColumns: [datusertypeInE360.datusertypeid],
            name: "fk_demandmatchconfigincludeusertype_datusertypeid",
        }),
        foreignKey({
            columns: [table.demandmatchconfigurationid],
            foreignColumns: [demandmatchconfigurationInE360.demandmatchconfigurationid],
            name: "fk_demandmatchconfigincludeusertype_demandmatchconfigurationid",
        }),
    ]
);

export const demandmatchdetailsInE360 = e360.table(
    "demandmatchdetails",
    {
        demandmatchdetailsid: serial().primaryKey().notNull(),
        demandmatchid: integer().notNull(),
        demandid: integer().notNull(),
        userid: integer(),
        matchstatus: integer(),
        statusstartdate: timestamp({ mode: "string" }),
        statusenddate: timestamp({ mode: "string" }),
        approverid: integer(),
        approvalstatus: integer(),
        approveddate: timestamp({ mode: "string" }),
        approvercomments: varchar({ length: 1000 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: integer().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: integer(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        foreignKey({
            columns: [table.demandmatchid],
            foreignColumns: [demandmatchInE360.demandmatchid],
            name: "fk_demandmatchdetails_demandmatchid",
        }),
        foreignKey({
            columns: [table.userid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_demandmatchdetails_userid",
        }),
    ]
);

export const documenttypemasterInE360 = e360.table(
    "documenttypemaster",
    {
        documenttypeid: integer()
            .default(sql`nextval('documenttypemaster_documenttypemaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        documenttype: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        type: varchar({ length: 1 }),
    },
    (table) => [
        index("indx_documenttypemaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_documenttypemaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_documenttypemaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_documenttypemaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_documenttypemaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_documenttypemaster_modifiedcomuserid",
        }),
    ]
);

export const djangoMigrationsInE360 = e360.table("django_migrations", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "django_migrations_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 9223372036854775807, cache: 1 }),
    app: varchar({ length: 255 }).notNull(),
    name: varchar({ length: 255 }).notNull(),
    applied: timestamp({ withTimezone: true, mode: "string" }).notNull(),
});

export const djangoSessionInE360 = e360.table(
    "django_session",
    {
        sessionKey: varchar("session_key", { length: 40 }).primaryKey().notNull(),
        sessionData: text("session_data").notNull(),
        expireDate: timestamp("expire_date", { withTimezone: true, mode: "string" }).notNull(),
    },
    (table) => [
        index("django_session_expire_date_a5c62663").using("btree", table.expireDate.asc().nullsLast().op("timestamptz_ops")),
        index("django_session_session_key_c0390e0f_like").using("btree", table.sessionKey.asc().nullsLast().op("varchar_pattern_ops")),
    ]
);

export const dummytestInE360 = e360.table("dummytest", {
    dummytestid: integer()
        .default(sql`nextval('dummytest_dummytestid_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    testusername: varchar({ length: 50 }),
    notes: varchar({ length: 50 }),
});

export const emaildraftInE360 = e360.table(
    "emaildraft",
    {
        emaildraftid: serial().primaryKey().notNull(),
        emailcategory: varchar(),
        senderemailid: varchar({ length: 255 }),
        recipientemailid: varchar({ length: 255 }),
        ccemailid: varchar({ length: 255 }),
        subject: text(),
        body: text(),
        comtenantid: integer(),
        created: timestamp({ mode: "string" }).default(sql`CURRENT_TIMESTAMP`),
    },
    (table) => [index("indx_emaildraft_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops"))]
);

export const emailsendInE360 = e360.table(
    "emailsend",
    {
        emailsendid: serial().primaryKey().notNull(),
        emailcategory: varchar(),
        emaildraftid: integer(),
        senderemailid: varchar({ length: 255 }),
        recipientemailid: varchar({ length: 255 }),
        ccemailid: varchar({ length: 255 }),
        subject: text(),
        body: text(),
        comtenantid: integer(),
        sendtimestamp: timestamp({ mode: "string" }),
        createdtimestamp: timestamp({ mode: "string" }),
    },
    (table) => [
        index("indx_emailsend_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_emailsend_emaildraftid").using("btree", table.emaildraftid.asc().nullsLast().op("int4_ops")),
    ]
);

export const expertisemasterInE360 = e360.table("expertisemaster", {
    expertiseid: integer()
        .default(sql`nextval('expertise_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    expertise: varchar({ length: 50 }).notNull(),
    comtenantid: integer().notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
    parentid: integer(),
    parenttype: varchar({ length: 50 }).notNull(),
});

export const djangoAdminLogInE360 = e360.table(
    "django_admin_log",
    {
        id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "django_admin_log_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
        actionTime: timestamp("action_time", { withTimezone: true, mode: "string" }).notNull(),
        objectId: text("object_id"),
        objectRepr: varchar("object_repr", { length: 200 }).notNull(),
        actionFlag: smallint("action_flag").notNull(),
        changeMessage: text("change_message").notNull(),
        contentTypeId: integer("content_type_id"),
        userId: integer("user_id").notNull(),
    },
    (table) => [
        index("django_admin_log_content_type_id_c4bce8eb").using("btree", table.contentTypeId.asc().nullsLast().op("int4_ops")),
        index("django_admin_log_user_id_c564eba6").using("btree", table.userId.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.contentTypeId],
            foreignColumns: [djangoContentTypeInE360.id],
            name: "django_admin_log_content_type_id_c4bce8eb_fk_django_co",
        }),
        foreignKey({
            columns: [table.userId],
            foreignColumns: [authUserInE360.id],
            name: "django_admin_log_user_id_c564eba6_fk_auth_user_id",
        }),
        check("django_admin_log_action_flag_check", sql`action_flag >= 0`),
    ]
);

export const departmentmasterInE360 = e360.table(
    "departmentmaster",
    {
        departmentid: integer()
            .default(sql`nextval('departmentmaster_department_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        department: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        costcenterId: integer("costcenter_id"),
        departmentheadid: integer(),
        departmentcode: varchar({ length: 20 }),
    },
    (table) => [
        index("indx_departmentmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_departmentmaster_costcenter_id").using("btree", table.costcenterId.asc().nullsLast().op("int4_ops")),
        index("indx_departmentmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_departmentmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_departmentmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.costcenterId],
            foreignColumns: [costcentermasterInE360.costcenterid],
            name: "fk_departmentmaster_costcenter_id",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_departmentmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_departmentmaster_modifiedcomuserid",
        }),
    ]
);

export const demandroleresponsibilitiesInE360 = e360.table(
    "demandroleresponsibilities",
    {
        demandroleresponsibilitiesid: integer()
            .default(sql`nextval('demandroleresponsibilities_demandroleresponsibilitiesid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        demandroledetailid: integer().notNull(),
        demandid: integer().notNull(),
        responsibilities: varchar({ length: 750 }),
    },
    (table) => [
        foreignKey({
            columns: [table.demandroledetailid],
            foreignColumns: [demandroledetailInE360.demandroledetailid],
            name: "fk_demandroleresponsibilities_demandroledetailid",
        }),
    ]
);

export const demandskillsInE360 = e360.table(
    "demandskills",
    {
        demandskillid: integer()
            .default(sql`nextval('demandskills_demandskillid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        demandid: integer().notNull(),
        skillmasterid: integer().notNull(),
        technologymasterid: integer(),
        domainid: integer(),
        importance: smallint(),
        expertise: varchar({ length: 200 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
    },
    (table) => [
        index("indx_demandskills_demandid").using("btree", table.demandid.asc().nullsLast().op("int4_ops")),
        index("indx_demandskills_skillmasterid").using("btree", table.skillmasterid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_demandskills_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_demandskills_createdcomuserid",
        }),
        foreignKey({
            columns: [table.demandid],
            foreignColumns: [demandmasterInE360.demandid],
            name: "fk_demandskills_demandid",
        }),
        foreignKey({
            columns: [table.domainid],
            foreignColumns: [industrymasterInE360.industryid],
            name: "fk_demandskills_domain",
        }),
        foreignKey({
            columns: [table.skillmasterid],
            foreignColumns: [skillmasterInE360.skillmasterid],
            name: "fk_demandskills_skillmasterid",
        }),
        foreignKey({
            columns: [table.technologymasterid],
            foreignColumns: [technologymasterInE360.technologymasterid],
            name: "fk_demandskills_technologymasterid",
        }),
    ]
);

export const designationmasterInE360 = e360.table(
    "designationmaster",
    {
        designationmasterid: integer()
            .default(sql`nextval('designationmaster_designationmaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        designation: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_designationmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_designationmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_designationmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_designationmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_designationmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_designationmaster_modifiedcomuserid",
        }),
    ]
);

export const designationskillmapInE360 = e360.table(
    "designationskillmap",
    {
        roleskillid: integer()
            .default(sql`nextval('roleskillmap_rs_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        designationid: integer().notNull(),
        levelid: integer().notNull(),
        skillid: integer().notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_roleskillmap_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_roleskillmap_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_roleskillmap_designationid").using("btree", table.designationid.asc().nullsLast().op("int4_ops")),
        index("indx_roleskillmap_levelid").using("btree", table.levelid.asc().nullsLast().op("int4_ops")),
        index("indx_roleskillmap_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_roleskillmap_skillid").using("btree", table.skillid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_designationskillmap_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_designationskillmap_createdcomuserid",
        }),
        foreignKey({
            columns: [table.designationid],
            foreignColumns: [designationmasterInE360.designationmasterid],
            name: "fk_designationskillmap_designationid",
        }),
        foreignKey({
            columns: [table.levelid],
            foreignColumns: [levelmasterInE360.levelmasterid],
            name: "fk_designationskillmap_levelid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_designationskillmap_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.skillid],
            foreignColumns: [skillmasterInE360.skillmasterid],
            name: "fk_designationskillmap_skillid",
        }),
    ]
);

export const documentserialnosettingInE360 = e360.table("documentserialnosetting", {
    documentserialnosettingid: serial().primaryKey().notNull(),
    documenttype: varchar({ length: 100 }).notNull(),
    manualautostatus: varchar({ length: 1 }).notNull(),
    documentprefix: varchar({ length: 7 }).notNull(),
    comtenantid: integer(),
    categorycoderequiredflag: boolean(),
    grouprequiredflag: boolean(),
    companycoderequiredflag: boolean(),
    companyshortnamerequiredflag: boolean(),
    typecoderequiredflag: boolean(),
    leadingzero: smallint(),
    seperatorcharacter: varchar({ length: 1 }),
    serialnogeneratecompanywiseortenantwise: varchar({ length: 1 }),
    createdcomuserid: integer(),
    createddate: timestamp({ mode: "string" }),
    modifiedcomuserid: integer(),
    modifieddate: timestamp({ mode: "string" }),
    tenantidrequiredflag: boolean(),
    tenantcoderequiredflag: boolean(),
});

export const forgotpasswordInE360 = e360.table(
    "forgotpassword",
    {
        forgotpasswordlinkid: integer()
            .default(sql`nextval('forgotpassword_forgotpassword_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comuserid: integer().notNull(),
        passwordresetlink: varchar({ length: 500 }),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_forgotpassword_comuserid").using("btree", table.comuserid.asc().nullsLast().op("int4_ops")),
        index("indx_forgotpassword_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_forgotpassword_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_forgotpassword_comuserid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_forgotpassword_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_forgotpassword_modifiedcomuserid",
        }),
    ]
);

export const forgotpasswordlinkInE360 = e360.table(
    "forgotpasswordlink",
    {
        forgotpasswordlinkid: integer()
            .default(sql`nextval('forgotpasswordlink_forgotpasswordlinkid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comuserid: integer(),
        passwordresetlink: varchar({ length: 2500 }),
        createddate: timestamp({ mode: "string" }),
        activeflag: boolean(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        comtenantid: integer(),
    },
    (table) => [
        index("idx_forgotpasswordlink_activeflag").using("btree", table.activeflag.asc().nullsLast().op("bool_ops")),
        index("idx_forgotpasswordlink_createddate").using("btree", table.createddate.asc().nullsLast().op("timestamp_ops")),
        index("idx_forgotpasswordlink_passwordresetlink").using("btree", table.passwordresetlink.asc().nullsLast().op("text_ops")),
        index("idx_forgotpasswordlink_usermaster_id").using("btree", table.comuserid.asc().nullsLast().op("int4_ops")),
    ]
);

export const fppperccomplitioncalculationdataInE360 = e360.table("fppperccomplitioncalculationdata", {
    fppperccomplitioncalculationdataid: bigserial({ mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    projectid: bigint({ mode: "number" }),
    comtenantid: integer(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    projectroleid: bigint({ mode: "number" }),
    noofholydays: doublePrecision(),
    overtime: doublePrecision(),
    regular: doublePrecision(),
    cumovertime: doublePrecision(),
    cumholidays: doublePrecision(),
    workingdaysperhours: doublePrecision(),
    currprojecthours: numeric({ precision: 18, scale: 3 }),
    prevmonthactualhours: numeric({ precision: 18, scale: 3 }),
    curmonthactualhours: numeric({ precision: 18, scale: 3 }),
    actualcurrprojecthours: numeric({ precision: 18, scale: 3 }),
    plannedefforthours: numeric({ precision: 18, scale: 3 }),
    totalactualplannedeffort: numeric({ precision: 18, scale: 3 }),
    percofcompletion: numeric({ precision: 18, scale: 3 }),
    prevmonthpercofcomplition: numeric({ precision: 18, scale: 3 }),
    curmonthperccomplition: numeric({ precision: 18, scale: 3 }),
    totalEstimateamount: numeric("total_estimateamount", { precision: 18, scale: 3 }),
    revenue: numeric({ precision: 18, scale: 3 }),
    yearmonthid: integer(),
});

export const fpprevenueprocesseddataInE360 = e360.table("fpprevenueprocesseddata", {
    fpprevenueprocesseddataid: serial().primaryKey().notNull(),
    comtenantid: integer(),
    projectid: integer(),
    rolename: varchar(),
    projroleid: integer(),
    estdeffort: numeric({ precision: 18, scale: 3 }),
    peopleno: integer(),
    allocation: numeric(),
    plannedeffort: numeric({ precision: 18, scale: 3 }),
    currprojecthours: numeric(),
    salerate: numeric({ precision: 18, scale: 3 }),
    rateunitid: integer(),
    timesheet: numeric({ precision: 18, scale: 3 }),
    monthlyworkingdays: integer(),
    percAgainstTotal: numeric("perc_against_total", { precision: 18, scale: 6 }),
    weeklyworkinghours: numeric({ precision: 18, scale: 3 }),
    revenue: numeric({ precision: 18, scale: 3 }),
    totalrevenue: numeric({ precision: 18, scale: 3 }),
    percOfComplation: numeric("perc_of_complation", { precision: 18, scale: 6 }),
    totalestdamount: numeric({ precision: 18, scale: 3 }),
    yearid: integer(),
    monthid: integer(),
    basecurrencyid: integer(),
    datcurrencyid: integer(),
    oldrate: numeric(),
    exchangerate: numeric(),
});

export const nationalitymasterInE360 = e360.table(
    "nationalitymaster",
    {
        nationalityid: smallint()
            .default(sql`nextval('nationalitymaster_nationality_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        nationality: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_nationalitymaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_nationalitymaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_nationalitymaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_nationalitymaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_nationalitymaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_nationalitymaster_modifiedcomuserid",
        }),
    ]
);

export const miscetasktypeidInE360 = e360.table("miscetasktypeid", {
    coalesce: integer(),
});

export const holidaymasterInE360 = e360.table(
    "holidaymaster",
    {
        holidaymasterid: integer()
            .default(sql`nextval('holidaymaster_holidaymaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        companyid: integer().notNull(),
        locationid: integer().notNull(),
        holiday: date(),
        reason: varchar({ length: 100 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_holidaymaster_companyid").using("btree", table.companyid.asc().nullsLast().op("int4_ops")),
        index("indx_holidaymaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_holidaymaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_holidaymaster_locationid").using("btree", table.locationid.asc().nullsLast().op("int4_ops")),
        index("indx_holidaymaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_holidaymaster_companyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_holidaymaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_holidaymaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.locationid],
            foreignColumns: [locationmasterInE360.comlocationid],
            name: "fk_holidaymaster_locationid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_holidaymaster_modifiedcomuserid",
        }),
    ]
);

export const outputJsonInE360 = e360.table("output_json", {
    jsonBuildObject: json("json_build_object"),
});

export const profitabilitydetailsummaryInE360 = e360.table("profitabilitydetailsummary", {
    id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
    comtenantid: integer(),
    method: varchar({ length: 2 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    projectprofitabilityid: bigint({ mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    datprojectbillingtypeid: bigint({ mode: "number" }),
    description: varchar({ length: 200 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    projectid: bigint({ mode: "number" }),
    type: varchar({ length: 20 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    projroleid: bigint({ mode: "number" }),
    amountPrevmonth: numeric("amount_prevmonth", { precision: 18, scale: 3 }),
    amountCurmonth: numeric("amount_curmonth", { precision: 18, scale: 3 }),
    yearmonthid: integer(),
});

export const profitabilitymonthendInE360 = e360.table("profitabilitymonthend", {
    profitabilitymonthendid: serial().primaryKey().notNull(),
    monthid: integer(),
    yearid: integer(),
    comtenantid: integer().notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
});

export const levelmasterInE360 = e360.table(
    "levelmaster",
    {
        levelmasterid: integer()
            .default(sql`nextval('levelmaster_levelmaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        levelname: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        leveltype: char({ length: 1 }),
        minExp: integer("min_exp"),
        maxExp: integer("max_exp"),
    },
    (table) => [
        index("indx_levelmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_levelmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_levelmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_levelmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_levelmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_levelmaster_modifiedcomuserid",
        }),
    ]
);

export const locationmasterInE360 = e360.table(
    "locationmaster",
    {
        comlocationid: integer()
            .default(sql`nextval('locationmaster_comlocation_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comcityid: integer().notNull(),
        locationname: varchar({ length: 100 }).notNull(),
        locationcode: varchar({ length: 100 }),
        activeflag: boolean(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_locationmaster_comcityid").using("btree", table.comcityid.asc().nullsLast().op("int4_ops")),
        index("indx_locationmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_locationmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_locationmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comcityid],
            foreignColumns: [citymasterInE360.comcityid],
            name: "fk_locationmaster_comcityid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_locationmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_locationmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_locationmaster_modifiedcomuserid",
        }),
    ]
);

export const opportunityInE360 = e360.table(
    "opportunity",
    {
        opportunityid: integer()
            .default(sql`nextval('opportunity_opportunity_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        opportunityname: varchar({ length: 500 }).notNull(),
        opportunitycode: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        totalopportunityvalue: numeric({ precision: 18, scale: 3 }),
        opportunitystatus: varchar({ length: 50 }).notNull(),
        winprobabilitypercentage: numeric({ precision: 6, scale: 2 }),
        salesmanagerid: integer(),
        sourceofopportunity: varchar({ length: 500 }),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        customerid: integer(),
        datcomcurrencyid: integer(),
    },
    (table) => [
        index("indx_opportunity_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_opportunity_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_opportunity_createdcomuserid",
        }),
        foreignKey({
            columns: [table.customerid],
            foreignColumns: [customermasterInE360.customerid],
            name: "fk_opportunity_customerid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_opportunity_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_opportunity_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.salesmanagerid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_opportunity_salesmanagerid",
        }),
    ]
);

export const leavetypemasterInE360 = e360.table(
    "leavetypemaster",
    {
        leavetypeid: serial().primaryKey().notNull(),
        leavetypename: varchar({ length: 500 }),
        islop: boolean(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_leavetypemaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_leavetypemaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_leavetypemaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_leavetypemaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_leavetypemaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_leavetypemaster_modifiedcomuserid",
        }),
    ]
);

export const orgcostrateInE360 = e360.table(
    "orgcostrate",
    {
        orgcostrateid: integer()
            .default(sql`nextval('orgcostrate_orgcostrateid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comtenantid: integer().notNull(),
        companyid: integer().notNull(),
        designationid: integer(),
        bandid: integer(),
        cost: numeric({ precision: 18, scale: 3 }).notNull(),
        comcurrencyid: integer().notNull(),
        unit: smallint().notNull(),
        startdate: date().notNull(),
        enddate: date().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        countryid: integer(),
        skillareamasterid: integer(),
        techgroupid: integer(),
    },
    (table) => [
        foreignKey({
            columns: [table.bandid],
            foreignColumns: [bandmasterInE360.bandmasterid],
            name: "fk_orgcostrate_bandid",
        }),
        foreignKey({
            columns: [table.comcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_orgcostrate_comcurrencyid",
        }),
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_orgcostrate_companyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_orgcostrate_comtenantid",
        }),
        foreignKey({
            columns: [table.countryid],
            foreignColumns: [countrymasterInE360.comcountryid],
            name: "fk_orgcostrate_countryid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_orgcostrate_createdcomuserid",
        }),
        foreignKey({
            columns: [table.designationid],
            foreignColumns: [designationmasterInE360.designationmasterid],
            name: "fk_orgcostrate_designationid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_orgcostrate_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.skillareamasterid],
            foreignColumns: [skillareamasterInE360.skillareamasterid],
            name: "fk_orgcostrate_skillareamasterid",
        }),
        foreignKey({
            columns: [table.techgroupid],
            foreignColumns: [techgroupmasterInE360.techgroupid],
            name: "fk_orgcostrate_techgroupid",
        }),
    ]
);

export const overheadmasterInE360 = e360.table(
    "overheadmaster",
    {
        overheadmasterid: integer()
            .default(sql`nextval('overheadmaster_overheadmaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        overhead: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        costtype: varchar({ length: 1 }),
    },
    (table) => [
        index("indx_overheadmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_overheadmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_overheadmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_overheadmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_overheadmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_overheadmaster_modifiedcomuserid",
        }),
    ]
);

export const productmasterInE360 = e360.table(
    "productmaster",
    {
        productmasterid: integer()
            .default(sql`nextval('productmaster_productmaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        productname: varchar({ length: 50 }).notNull(),
        technology: integer().notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_productmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_productmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_productmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_productmaster_techid").using("btree", table.technology.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_productmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_productmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_productmaster_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.technology],
            foreignColumns: [technologymasterInE360.technologymasterid],
            name: "fk_productmaster_technology",
        }),
    ]
);

export const profitabilitydetailsInE360 = e360.table(
    "profitabilitydetails",
    {
        profitabilitydetailsid: serial().primaryKey().notNull(),
        type: varchar(),
        description: varchar(),
        amount: numeric(),
        yearid: integer(),
        monthid: integer(),
        userid: integer(),
        projectprofitabilityid: integer(),
        projroleid: integer(),
        overheadid: integer(),
        projectcurrencyid: integer(),
        basecurrencyid: integer(),
        exchangerate: numeric({ precision: 12, scale: 6 }),
        orgcurrencyid: integer(),
        allocation: numeric({ precision: 18, scale: 3 }),
    },
    (table) => [
        foreignKey({
            columns: [table.projectprofitabilityid],
            foreignColumns: [projectprofitabilityInE360.projectprofitabilityid],
            name: "fk_profitabilitydetails_projectprofitabilityid",
        }),
    ]
);

export const profitabilityprocessrequiredprojectsInE360 = e360.table("profitabilityprocessrequiredprojects", {
    profitabilityprocessrequiredprojectid: serial().primaryKey().notNull(),
    monthid: integer(),
    yearid: integer(),
    projectid: integer(),
    comtenantid: integer().notNull(),
    processrequired: boolean(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 500 }),
});

export const projectactivityversionInE360 = e360.table(
    "projectactivityversion",
    {
        projectactivityversionid: integer()
            .default(sql`nextval('projectactivityversion_projectactivityversionid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectid: integer().notNull(),
        projectplanversionid: integer(),
        versionno: smallint(),
        activityid: integer(),
        activityname: varchar({ length: 250 }).notNull(),
        activitycode: varchar({ length: 20 }),
        activitydesc: varchar({ length: 5000 }),
        startdate: date().notNull(),
        enddate: date().notNull(),
        activityownerid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        comtenantid: integer(),
    },
    (table) => [
        index("indx_projectactivityversion_activityownerid").using("btree", table.activityownerid.asc().nullsLast().op("int4_ops")),
        index("indx_projectactivityversion_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectactivityversion_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectactivityversion_projectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.activityownerid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectactivityversion_activityownerid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectactivityversion_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectactivityversion_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectactivityversion_projectid",
        }),
    ]
);

export const projectattributesInE360 = e360.table(
    "projectattributes",
    {
        projectattributeid: integer()
            .default(sql`nextval('projectattribute_id_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectid: integer().notNull(),
        technologyid: integer(),
        productid: integer(),
        license: boolean(),
        linkedproject: integer(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_projectattributes_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_projectattributes_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectattributes_linkprojectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        index("indx_projectattributes_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectattributes_productid").using("btree", table.productid.asc().nullsLast().op("int4_ops")),
        index("indx_projectattributes_projectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        index("indx_projectattributes_techid").using("btree", table.technologyid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_projectattributes_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectattributes_createdcomuserid",
        }),
        foreignKey({
            columns: [table.linkedproject],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectattributes_linkedproject",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectattributes_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.productid],
            foreignColumns: [productmasterInE360.productmasterid],
            name: "fk_projectattributes_productid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectattributes_projectid",
        }),
        foreignKey({
            columns: [table.technologyid],
            foreignColumns: [technologymasterInE360.technologymasterid],
            name: "fk_projectattributes_technologyid",
        }),
    ]
);

export const projectbudgetdetailsInE360 = e360.table(
    "projectbudgetdetails",
    {
        projectbudgetdetailid: integer()
            .default(sql`nextval('projectbudgetdetails_projectbudgetdetailid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectbudgetid: integer().notNull(),
        projectid: integer().notNull(),
        overheadid: integer(),
        monthid: integer(),
        yearid: integer(),
        amount: numeric(),
        datcomcurrencyid: integer(),
        createdcomuserid: integer(),
        createdtimestamp: timestamp({ mode: "string" }),
    },
    (table) => [
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_projectbudgetdetails_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.overheadid],
            foreignColumns: [overheadmasterInE360.overheadmasterid],
            name: "fk_projectbudgetdetails_overheadid",
        }),
        foreignKey({
            columns: [table.projectbudgetid],
            foreignColumns: [projectbudgetInE360.projectbudgetid],
            name: "fk_projectbudgetdetails_projectbudgetid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectbudgetdetails_projectid",
        }),
    ]
);

export const projectbudgetversionInE360 = e360.table(
    "projectbudgetversion",
    {
        projectbudgetversionid: integer()
            .default(sql`nextval('projectbudgetversion_projectbudgetversionid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectid: integer(),
        projectplanversionid: integer(),
        versionno: smallint(),
        projectbudgetid: integer(),
        description: varchar({ length: 500 }),
        overheadid: integer().notNull(),
        plannedeffort: numeric(),
        plannedcost: numeric().notNull(),
        datcomcurrencyid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        units: integer(),
        rate: numeric(),
    },
    (table) => [
        index("indx_projectbudgetversion_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectbudgetversion_datcomcurrencyid").using("btree", table.datcomcurrencyid.asc().nullsLast().op("int4_ops")),
        index("indx_projectbudgetversion_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectbudgetversion_overheadid").using("btree", table.overheadid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectbudgetversion_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_projectbudgetversion_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectbudgetversion_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.overheadid],
            foreignColumns: [overheadmasterInE360.overheadmasterid],
            name: "fk_projectbudgetversion_overheadid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectbudgetversion_projectid",
        }),
    ]
);

export const projectcustomercontactsInE360 = e360.table(
    "projectcustomercontacts",
    {
        projectcontactid: integer()
            .default(sql`nextval('projectcontact_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectid: integer().notNull(),
        contacttype: varchar({ length: 250 }).notNull(),
        contactpersonname: varchar({ length: 250 }).notNull(),
        designation: varchar({ length: 250 }),
        phoneno: varchar({ length: 50 }),
        email: varchar({ length: 500 }).notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        comtenantid: integer(),
    },
    (table) => [
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectcustomercontacts_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectcustomercontacts_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectcustomercontacts_projectid",
        }),
    ]
);

export const projectdocumentsInE360 = e360.table(
    "projectdocuments",
    {
        projectdocumentattachmentsid: integer()
            .default(sql`nextval('projectdocuments_projectdocumentattachments_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectid: integer().notNull(),
        comtenantid: integer().notNull(),
        documenttype: integer().notNull(),
        filename: varchar({ length: 500 }).notNull(),
        filepath: varchar({ length: 200 }).notNull(),
        versionno: varchar({ length: 25 }),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        isdeletedflag: boolean(),
        deletedcomuserid: smallint(),
        deletedtimestamp: timestamp({ mode: "string" }),
        notes: varchar({ length: 100 }),
        fileformat: varchar({ length: 500 }),
        status: integer(),
    },
    (table) => [
        index("indx_projectdocuments_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_projectdocuments_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectdocuments_deletedcomuserid").using("btree", table.deletedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectdocuments_documenttype").using("btree", table.documenttype.asc().nullsLast().op("int4_ops")),
        index("indx_projectdocuments_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectdocuments_projectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_projectdocuments_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectdocuments_createdcomuserid",
        }),
        foreignKey({
            columns: [table.deletedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectdocuments_deletedcomuserid",
        }),
        foreignKey({
            columns: [table.documenttype],
            foreignColumns: [documenttypemasterInE360.documenttypeid],
            name: "fk_projectdocuments_documenttype",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectdocuments_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectdocuments_projectid",
        }),
    ]
);

export const projecteffortInE360 = e360.table(
    "projecteffort",
    {
        effortid: integer()
            .default(sql`nextval('projecteffort_peffort_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projstaffid: integer(),
        projectid: integer(),
        comuserid: integer().notNull(),
        startdate: date(),
        enddate: date(),
        approverremarks: text(),
        approved: boolean(),
        approverid: integer(),
        approvedtimestamp: timestamp({ mode: "string" }),
        clientapproved: boolean(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 500 }),
        comtenantid: integer().notNull(),
        status: integer(),
        prevstatusid: integer(),
        postedtosap: boolean(),
        entrytype: varchar({ length: 50 }),
    },
    (table) => [
        index("indx_projecteffort_approverid").using("btree", table.approverid.asc().nullsLast().op("int4_ops")),
        index("indx_projecteffort_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projecteffort_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projecteffort_projstaffid").using("btree", table.projstaffid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.approverid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projecteffort_approverid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_projecteffort_comtenantid",
        }),
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projecteffort_comuserid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projecteffort_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projecteffort_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projecteffort_projectid",
        }),
        foreignKey({
            columns: [table.projstaffid],
            foreignColumns: [projectstaffInE360.projectstaffid],
            name: "fk_projecteffort_projstaffid",
        }),
    ]
);

export const projecteffortdetailsInE360 = e360.table(
    "projecteffortdetails",
    {
        effortdetailid: integer()
            .default(sql`nextval('projecteffort_peffortdetails_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projeffortid: integer().notNull(),
        projtaskid: integer(),
        efforthours: doublePrecision().notNull(),
        effortdate: timestamp({ mode: "string" }).notNull(),
        staffremarks: text(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 500 }),
        referencenumber: varchar({ length: 100 }),
        projecttaskid: integer(),
        starttime: numeric({ precision: 12, scale: 2 }),
        endtime: numeric({ precision: 12, scale: 2 }),
        timecategorymasterid: integer(),
    },
    (table) => [
        index("indx_projecteffortdetails_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projecteffortdetails_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projecteffortdetails_projstaffid").using("btree", table.projeffortid.asc().nullsLast().op("int4_ops")),
        index("indx_projecteffortdetails_projtaskid").using("btree", table.projtaskid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projecteffortdetails_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projecteffortdetails_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projecttaskid],
            foreignColumns: [projecttasksInE360.projecttaskid],
            name: "fk_projecteffortdetails_projecttaskid",
        }),
        foreignKey({
            columns: [table.projeffortid],
            foreignColumns: [projecteffortInE360.effortid],
            name: "fk_projecteffortdetails_projeffortid",
        }),
        foreignKey({
            columns: [table.projtaskid],
            foreignColumns: [taskmasterInE360.taskid],
            name: "fk_projecteffortdetails_projtaskid",
        }),
        foreignKey({
            columns: [table.timecategorymasterid],
            foreignColumns: [timecategorymasterInE360.timecategorymasterid],
            name: "fk_projecteffortdetails_timecategorymasterid",
        }),
    ]
);

export const projectactivityInE360 = e360.table(
    "projectactivity",
    {
        activityid: integer()
            .default(sql`nextval('projectactivity_projectactivity_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectid: integer().notNull(),
        activityname: varchar({ length: 250 }).notNull(),
        activitycode: varchar({ length: 20 }),
        activitydesc: varchar({ length: 5000 }),
        startdate: date(),
        enddate: date(),
        activityownerid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        comtenantid: integer(),
    },
    (table) => [
        index("indx_projectactivity_activityownerid").using("btree", table.activityownerid.asc().nullsLast().op("int4_ops")),
        index("indx_projectactivity_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectactivity_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectactivity_projectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectactivity_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectactivity_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectactivity_projectid",
        }),
    ]
);

export const projectbudgetInE360 = e360.table(
    "projectbudget",
    {
        projectbudgetid: integer()
            .default(sql`nextval('projectbudget_projectbudgetid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectid: integer(),
        description: varchar({ length: 500 }),
        overheadid: integer().notNull(),
        plannedeffort: numeric(),
        plannedcost: numeric().notNull(),
        datcomcurrencyid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        units: integer(),
        rate: numeric(),
        comtenantid: integer(),
        isbillable: boolean(),
    },
    (table) => [
        index("indx_projectbudget_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectbudget_datcomcurrencyid").using("btree", table.datcomcurrencyid.asc().nullsLast().op("int4_ops")),
        index("indx_projectbudget_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectbudget_overheadid").using("btree", table.overheadid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectbudget_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_projectbudget_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectbudget_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.overheadid],
            foreignColumns: [overheadmasterInE360.overheadmasterid],
            name: "fk_projectbudget_overheadid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectbudget_projectid",
        }),
    ]
);

export const projectestimationdetailsInE360 = e360.table(
    "projectestimationdetails",
    {
        estimationdetailid: integer()
            .default(sql`nextval('projectestimationdetails_estimationdet_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectestimationid: integer().notNull(),
        overheadid: integer().notNull(),
        plannedeffort: numeric(),
        plannedcost: numeric().notNull(),
        datcomcurrencyid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        units: integer(),
        rate: numeric(),
    },
    (table) => [
        index("indx_projectestimationdetails_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectestimationdetails_datcomcurrencyid").using("btree", table.datcomcurrencyid.asc().nullsLast().op("int4_ops")),
        index("indx_projectestimationdetails_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectestimationdetails_overheadid").using("btree", table.overheadid.asc().nullsLast().op("int4_ops")),
        index("indx_projectestimationdetails_projectestimationid").using("btree", table.projectestimationid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectestimationdetails_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_projectestimationdetails_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectestimationdetails_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.overheadid],
            foreignColumns: [overheadmasterInE360.overheadmasterid],
            name: "fk_projectestimationdetails_overheadid",
        }),
        foreignKey({
            columns: [table.projectestimationid],
            foreignColumns: [projectestimationInE360.estimationid],
            name: "fk_projectestimationdetails_projectestimationid",
        }),
    ]
);

export const projectexpenseInE360 = e360.table(
    "projectexpense",
    {
        projexpenseid: integer()
            .default(sql`nextval('projectexpense_pexp_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectid: integer().notNull(),
        overheadid: integer().notNull(),
        monthid: integer().notNull(),
        amount: numeric().notNull(),
        datcomcurrencyid: integer().notNull(),
        taggeduser: integer(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        comtenantid: integer(),
        companyid: integer(),
        description: varchar({ length: 500 }),
        yearid: integer(),
        transactionid: varchar({ length: 200 }),
        externalsystemcode: varchar({ length: 500 }),
        transactiondate: timestamp({ mode: "string" }),
    },
    (table) => [
        index("indx_projectexpense_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectexpense_datcomcurrencyid").using("btree", table.datcomcurrencyid.asc().nullsLast().op("int4_ops")),
        index("indx_projectexpense_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectexpense_overheadid").using("btree", table.overheadid.asc().nullsLast().op("int4_ops")),
        index("indx_projectexpense_projectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        index("indx_projectexpense_taggeduser").using("btree", table.taggeduser.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_projectexpense_companyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_projectexpense_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectexpense_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_projectexpense_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectexpense_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.overheadid],
            foreignColumns: [overheadmasterInE360.overheadmasterid],
            name: "fk_projectexpense_overheadid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectexpense_projectid",
        }),
        foreignKey({
            columns: [table.taggeduser],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectexpense_taggeduser",
        }),
    ]
);

export const projectholidaysInE360 = e360.table(
    "projectholidays",
    {
        projectholidaymasterid: integer()
            .default(sql`nextval('projectholidays_projectholidaymaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectid: integer().notNull(),
        holiday: date(),
        reason: varchar({ length: 100 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_projectholidays_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_projectholidays_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectholidays_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectholidays_projectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_projectholidays_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectholidays_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectholidays_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectholidays_projectid",
        }),
    ]
);

export const projectprofitabilityInE360 = e360.table(
    "projectprofitability",
    {
        projectprofitabilityid: serial().primaryKey().notNull(),
        comtenantid: integer().notNull(),
        projectid: integer().notNull(),
        monthid: integer(),
        yearid: integer(),
        datcomcurrencyid: integer(),
        method: char({ length: 1 }),
        submethod: varchar({ length: 1 }),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        margin1: numeric({ precision: 18, scale: 3 }),
        margin2: numeric({ precision: 18, scale: 3 }),
        datprojectbillingtypeid: integer(),
        recognizedrevenuePrevmonth: numeric("recognizedrevenue_prevmonth"),
        recognizedrevenueCurmonth: numeric("recognizedrevenue_curmonth"),
        totalrecognizedrevenue: numeric(),
        directcostPrevmonth: numeric("directcost_prevmonth"),
        directcostCurmonth: numeric("directcost_curmonth"),
        totaldirectcost: numeric(),
        indirectcostPrevmonth: numeric("indirectcost_prevmonth"),
        indirectcostCurmonth: numeric("indirectcost_curmonth"),
        totalindirectcost: numeric(),
        plannedrevenue: numeric({ precision: 18, scale: 3 }),
        basecurrencyid: integer(),
        exchangerate: numeric({ precision: 12, scale: 6 }),
        margin1Curmonth: numeric("margin1_curmonth", { precision: 18, scale: 3 }),
        margin2Curmonth: numeric("margin2_curmonth", { precision: 18, scale: 3 }),
    },
    (table) => [
        index("indx_projectprofitability_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectprofitability_datcomcurrencyid").using("btree", table.datcomcurrencyid.asc().nullsLast().op("int4_ops")),
        index("indx_projectprofitability_projectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectprofitability_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_projectprofitability_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectprofitability_projectid",
        }),
    ]
);

export const projectmilestonesInE360 = e360.table(
    "projectmilestones",
    {
        projectmilestoneid: integer()
            .default(sql`nextval('projectmiles_ptask_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectid: integer().notNull(),
        milestonename: varchar({ length: 200 }).notNull(),
        milestonedesc: varchar({ length: 250 }),
        projecttaskid: integer(),
        plannedcompletiondate: date().notNull(),
        actualcompletiondate: date(),
        billingmilestone: boolean().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        comtenantid: integer(),
        milestoneamount: numeric({ precision: 18, scale: 3 }),
        datcomcurrencyid: integer(),
        confirmed: boolean(),
    },
    (table) => [
        index("indx_projectmilestones_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectmilestones_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectmilestones_projectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        index("indx_projectmilestones_projecttaskid").using("btree", table.projecttaskid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmilestones_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_projectmilestones_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmilestones_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectmilestones_projectid",
        }),
        foreignKey({
            columns: [table.projecttaskid],
            foreignColumns: [projecttasksInE360.projecttaskid],
            name: "fk_projectmilestones_projecttaskid",
        }),
    ]
);

export const projectplanversionInE360 = e360.table(
    "projectplanversion",
    {
        projectplanversionid: integer()
            .default(sql`nextval('projectplanversion_projectplanversionid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        versionno: smallint(),
        projectid: integer(),
        description: varchar({ length: 500 }),
        submittedflag: boolean(),
        submittedtimestamp: timestamp({ mode: "string" }).notNull(),
        submittedcomuserid: smallint().notNull(),
        approvedflag: boolean(),
        approvedtimestamp: timestamp({ mode: "string" }),
        approvedcomuserid: smallint(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        plannedrevenue: numeric(),
        plannedcost: numeric(),
        datcomcurrencyid: integer(),
        plannedeffort: numeric(),
        grossmargin1: numeric(),
        grossmargin2: numeric(),
        approvercomments: varchar({ length: 500 }),
    },
    (table) => [
        index("indx_projectplanversion_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectplanversion_projectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectplanversion_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_projectplanversion_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectplanversion_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectplanversion_projectid",
        }),
    ]
);

export const projectproductmappingInE360 = e360.table(
    "projectproductmapping",
    {
        projectproductmappingid: integer()
            .default(sql`nextval('projectproductmapping_projectproductmappingid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectid: integer().notNull(),
        productmasterid: integer().notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_projectproductmapping_comtenantid",
        }),
        foreignKey({
            columns: [table.productmasterid],
            foreignColumns: [productmasterInE360.productmasterid],
            name: "fk_projectproductmapping_productmasterid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectproductmapping_projectid",
        }),
    ]
);

export const projectestimationInE360 = e360.table(
    "projectestimation",
    {
        estimationid: integer()
            .default(sql`nextval('projectestimation_estimation_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectid: integer().notNull(),
        plannedeffort: numeric().notNull(),
        plannedrevenue: numeric().notNull(),
        datcomcurrencyid: integer().notNull(),
        grossmargin1: numeric().notNull(),
        grossmargin2: numeric(),
        approved: boolean().notNull(),
        approverid: integer(),
        approvedtimestamp: timestamp({ mode: "string" }),
        rejectionreason: text(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        comtenantid: integer(),
        approverremarks: varchar({ length: 250 }),
        planneddirectcost: numeric({ precision: 18, scale: 3 }),
        plannedindirectcost: numeric({ precision: 18, scale: 3 }),
    },
    (table) => [
        index("indx_projectestimation_approverid").using("btree", table.approverid.asc().nullsLast().op("int4_ops")),
        index("indx_projectestimation_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectestimation_datcomcurrencyid").using("btree", table.datcomcurrencyid.asc().nullsLast().op("int4_ops")),
        index("indx_projectestimation_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectestimation_projectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.approverid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectestimation_approverid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectestimation_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_projectestimation_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectestimation_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectestimation_projectid",
        }),
    ]
);

export const projectprofitablitycostdetailInE360 = e360.table("projectprofitablitycostdetail", {
    projectprofitablitycostdetailid: serial().primaryKey().notNull(),
    userid: integer(),
    projroleid: integer(),
    projectid: integer(),
    totaldays: integer(),
    noofdaysworked: integer(),
    totaldaysexcludeleave: integer(),
    noofworkingdays: integer(),
    allocation: numeric({ precision: 12, scale: 3 }),
    orgcostrate: numeric({ precision: 18, scale: 3 }),
    unit: integer(),
    leavedays: integer(),
    totalnoofdaysinthismonth: integer(),
    noofweeklyholidays: integer(),
    billable: boolean(),
    bandid: integer(),
    skillarea: integer(),
    techgroupid: integer(),
    countryid: integer(),
    stddirectcost: numeric({ precision: 18, scale: 3 }),
    yearid: integer(),
    monthid: integer(),
    comtenantid: integer(),
    allocationpercentage: numeric({ precision: 18, scale: 3 }),
    actualcost: numeric({ precision: 18, scale: 3 }),
    payrollsalary: numeric(),
    isdateofjoincurrmonth: boolean(),
    basecurrencyid: integer(),
    datcurrencyid: integer(),
    oldrate: numeric(),
    exchangerate: numeric(),
});

export const projectprofitablityeffortrevenuedataInE360 = e360.table("projectprofitablityeffortrevenuedata", {
    projectprofitablityeffortrevenuedataid: serial().primaryKey().notNull(),
    comuserid: integer(),
    currprojecthours: numeric(),
    salerate: numeric({ precision: 12, scale: 3 }),
    rateunitid: integer(),
    monthlyworkingdays: integer(),
    weeklyworkinghours: numeric({ precision: 12, scale: 2 }),
    projroleid: integer(),
    projectid: integer(),
    comtenantid: integer(),
    monthid: integer(),
    yearid: integer(),
    recognizedrevenue: integer(),
    basecurrencyid: integer(),
    datcurrencyid: integer(),
    oldrate: numeric(),
    exchangerate: numeric(),
});

export const projectmasterInE360 = e360.table(
    "projectmaster",
    {
        projectid: integer()
            .default(sql`nextval('projectmaster_project_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        customerid: integer().notNull(),
        comtenantid: integer().notNull(),
        companyid: integer().notNull(),
        businessunitid: integer(),
        servicelineid: integer(),
        departmentid: integer(),
        projecttypeid: integer().notNull(),
        datprojectbillingtypeid: integer().notNull(),
        projectname: varchar({ length: 250 }).notNull(),
        projectcode: varchar({ length: 20 }),
        projectdescription: varchar({ length: 5000 }),
        locationid: integer(),
        startdate: date().notNull(),
        enddate: date().notNull(),
        projectstatus: integer().notNull(),
        defaultcomcurrencyid: smallint().notNull(),
        totalestimateamt: numeric({ precision: 18, scale: 3 }).notNull(),
        totalactualamt: numeric({ precision: 18, scale: 3 }).notNull(),
        reasonforrejection: varchar({ length: 500 }),
        projectmanagerid: integer().notNull(),
        deliverymanagerid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        custProject: boolean("cust_project").notNull(),
        category: char({ length: 1 }),
        billingcycle: varchar({ length: 50 }),
        deliverymodemasterid: integer(),
        licensingrevenue: boolean(),
        opportunityid: integer(),
        pmocontactpersonid: integer(),
        isSapproject: boolean("is_sapproject"),
        techgroupid: integer(),
        projectsubtype: varchar({ length: 250 }),
        pmo1: integer(),
        pmo2: integer(),
        pmo3: integer(),
        timetemplatemasterid: integer(),
        shiftstarttime: numeric({ precision: 12, scale: 2 }),
        shiftendtime: numeric({ precision: 12, scale: 2 }),
        timezone: varchar({ length: 100 }),
        commercialspaymentterm: varchar({ length: 50 }),
    },
    (table) => [
        index("indx_projectmaster_businessunitid").using("btree", table.businessunitid.asc().nullsLast().op("int4_ops")),
        index("indx_projectmaster_companyid").using("btree", table.companyid.asc().nullsLast().op("int4_ops")),
        index("indx_projectmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_projectmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectmaster_customerid").using("btree", table.customerid.asc().nullsLast().op("int4_ops")),
        index("indx_projectmaster_datprojectbillingtypeid").using("btree", table.datprojectbillingtypeid.asc().nullsLast().op("int4_ops")),
        index("indx_projectmaster_defaultcomcurrencyid").using("btree", table.defaultcomcurrencyid.asc().nullsLast().op("int2_ops")),
        index("indx_projectmaster_deliverymanagerid").using("btree", table.deliverymanagerid.asc().nullsLast().op("int4_ops")),
        index("indx_projectmaster_departmentid").using("btree", table.departmentid.asc().nullsLast().op("int4_ops")),
        index("indx_projectmaster_locationid").using("btree", table.locationid.asc().nullsLast().op("int4_ops")),
        index("indx_projectmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectmaster_projectmanagerid").using("btree", table.projectmanagerid.asc().nullsLast().op("int4_ops")),
        index("indx_projectmaster_projecttypeid").using("btree", table.projecttypeid.asc().nullsLast().op("int4_ops")),
        index("indx_projectmaster_servicelineid").using("btree", table.servicelineid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.businessunitid],
            foreignColumns: [bumasterInE360.businessunitid],
            name: "fk_projectmaster_businessunitid",
        }),
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_projectmaster_companyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_projectmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.customerid],
            foreignColumns: [customermasterInE360.customerid],
            name: "fk_projectmaster_customerid",
        }),
        foreignKey({
            columns: [table.datprojectbillingtypeid],
            foreignColumns: [datprojectbilltypeInE360.datprojectbillingtypeid],
            name: "fk_projectmaster_datprojectbillingtypeid",
        }),
        foreignKey({
            columns: [table.defaultcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_projectmaster_defaultcomcurrencyid",
        }),
        foreignKey({
            columns: [table.deliverymanagerid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmaster_deliverymanagerid",
        }),
        foreignKey({
            columns: [table.deliverymodemasterid],
            foreignColumns: [deliverymodemasterInE360.deliverymodemasterid],
            name: "fk_projectmaster_deliverymodemasterid",
        }),
        foreignKey({
            columns: [table.departmentid],
            foreignColumns: [departmentmasterInE360.departmentid],
            name: "fk_projectmaster_departmentid",
        }),
        foreignKey({
            columns: [table.locationid],
            foreignColumns: [locationmasterInE360.comlocationid],
            name: "fk_projectmaster_locationid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmaster_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.opportunityid],
            foreignColumns: [opportunityInE360.opportunityid],
            name: "fk_projectmaster_opportunityid",
        }),
        foreignKey({
            columns: [table.pmo1],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmaster_pmo1",
        }),
        foreignKey({
            columns: [table.pmo2],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmaster_pmo2",
        }),
        foreignKey({
            columns: [table.pmo3],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmaster_pmo3",
        }),
        foreignKey({
            columns: [table.pmocontactpersonid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmaster_pmocontactpersonid",
        }),
        foreignKey({
            columns: [table.projectmanagerid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmaster_projectmanagerid",
        }),
        foreignKey({
            columns: [table.projecttypeid],
            foreignColumns: [projecttypemasterInE360.projecttypeid],
            name: "fk_projectmaster_projecttypeid",
        }),
        foreignKey({
            columns: [table.servicelineid],
            foreignColumns: [slmasterInE360.servicelineid],
            name: "fk_projectmaster_servicelineid",
        }),
        foreignKey({
            columns: [table.techgroupid],
            foreignColumns: [techgroupmasterInE360.techgroupid],
            name: "fk_projectmaster_techgroupid",
        }),
        foreignKey({
            columns: [table.timetemplatemasterid],
            foreignColumns: [timetemplatemasterInE360.timetemplatemasterid],
            name: "projectmaster_timetemplatemasterid_fkey",
        }),
    ]
);

export const projectmasterversionInE360 = e360.table(
    "projectmasterversion",
    {
        projectmasterversionid: bigserial({ mode: "bigint" }).primaryKey().notNull(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        projectid: bigint({ mode: "number" }),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        versionmasterid: bigint({ mode: "number" }),
        versionno: smallint(),
        customerid: integer().notNull(),
        comtenantid: integer().notNull(),
        companyid: integer().notNull(),
        businessunitid: integer(),
        servicelineid: integer(),
        departmentid: integer(),
        projecttypeid: integer().notNull(),
        datprojectbillingtypeid: integer().notNull(),
        projectname: varchar({ length: 250 }).notNull(),
        projectcode: varchar({ length: 20 }),
        projectdescription: varchar({ length: 5000 }),
        locationid: integer(),
        startdate: date().notNull(),
        enddate: date().notNull(),
        projectstatus: integer().notNull(),
        defaultcomcurrencyid: smallint().notNull(),
        totalestimateamt: numeric({ precision: 18, scale: 3 }).notNull(),
        totalactualamt: numeric({ precision: 18, scale: 3 }).notNull(),
        reasonforrejection: varchar({ length: 500 }),
        projectmanagerid: integer().notNull(),
        deliverymanagerid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        custProject: boolean("cust_project").notNull(),
        category: char({ length: 1 }),
        billingcycle: varchar({ length: 50 }),
        deliverymodemasterid: integer(),
        licensingrevenue: boolean(),
        opportunityid: integer(),
        pmocontactpersonid: integer(),
        isSapproject: boolean("is_sapproject"),
        techgroupid: integer(),
        projectsubtype: varchar({ length: 250 }),
        pmo1: integer(),
        pmo2: integer(),
        pmo3: integer(),
        timetemplatemasterid: integer(),
        shiftstarttime: numeric({ precision: 12, scale: 2 }),
        shiftendtime: numeric({ precision: 12, scale: 2 }),
        timezone: varchar({ length: 100 }),
        commercialspaymentterm: varchar({ length: 50 }),
    },
    (table) => [
        foreignKey({
            columns: [table.businessunitid],
            foreignColumns: [bumasterInE360.businessunitid],
            name: "fk_projectmasterversion_businessunitid",
        }),
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_projectmasterversion_companyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_projectmasterversion_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmasterversion_createdcomuserid",
        }),
        foreignKey({
            columns: [table.customerid],
            foreignColumns: [customermasterInE360.customerid],
            name: "fk_projectmasterversion_customerid",
        }),
        foreignKey({
            columns: [table.datprojectbillingtypeid],
            foreignColumns: [datprojectbilltypeInE360.datprojectbillingtypeid],
            name: "fk_projectmasterversion_datprojectbillingtypeid",
        }),
        foreignKey({
            columns: [table.defaultcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_projectmasterversion_defaultcomcurrencyid",
        }),
        foreignKey({
            columns: [table.deliverymanagerid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmasterversion_deliverymanagerid",
        }),
        foreignKey({
            columns: [table.deliverymodemasterid],
            foreignColumns: [deliverymodemasterInE360.deliverymodemasterid],
            name: "fk_projectmasterversion_deliverymodemasterid",
        }),
        foreignKey({
            columns: [table.departmentid],
            foreignColumns: [departmentmasterInE360.departmentid],
            name: "fk_projectmasterversion_departmentid",
        }),
        foreignKey({
            columns: [table.locationid],
            foreignColumns: [locationmasterInE360.comlocationid],
            name: "fk_projectmasterversion_locationid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmasterversion_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.opportunityid],
            foreignColumns: [opportunityInE360.opportunityid],
            name: "fk_projectmasterversion_opportunityid",
        }),
        foreignKey({
            columns: [table.pmo1],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmasterversion_pmo1",
        }),
        foreignKey({
            columns: [table.pmo2],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmasterversion_pmo2",
        }),
        foreignKey({
            columns: [table.pmo3],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmasterversion_pmo3",
        }),
        foreignKey({
            columns: [table.pmocontactpersonid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmasterversion_pmocontactpersonid",
        }),
        foreignKey({
            columns: [table.projectmanagerid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectmasterversion_projectmanagerid",
        }),
        foreignKey({
            columns: [table.projecttypeid],
            foreignColumns: [projecttypemasterInE360.projecttypeid],
            name: "fk_projectmasterversion_projecttypeid",
        }),
        foreignKey({
            columns: [table.servicelineid],
            foreignColumns: [slmasterInE360.servicelineid],
            name: "fk_projectmasterversion_servicelineid",
        }),
        foreignKey({
            columns: [table.techgroupid],
            foreignColumns: [techgroupmasterInE360.techgroupid],
            name: "fk_projectmasterversion_techgroupid",
        }),
        foreignKey({
            columns: [table.versionmasterid],
            foreignColumns: [versionmasterInE360.versionmasterid],
            name: "fk_projectmasterversion_versionmasterid",
        }),
        foreignKey({
            columns: [table.timetemplatemasterid],
            foreignColumns: [timetemplatemasterInE360.timetemplatemasterid],
            name: "projectmasterversion_timetemplatemasterid_fkey",
        }),
    ]
);

export const projectprofitablityplannedrevenuedetailInE360 = e360.table("projectprofitablityplannedrevenuedetail", {
    projectprofitablityplannedrevenuedetailid: serial().primaryKey().notNull(),
    projectid: integer(),
    projectroleid: integer(),
    rate: numeric({ precision: 12, scale: 3 }),
    allocation: numeric({ precision: 12, scale: 3 }),
    rateunitid: integer(),
    rateinhrs: numeric({ precision: 12, scale: 3 }),
    plannedeffort: numeric({ precision: 26, scale: 3 }),
    plannedrevenue: numeric({ precision: 26, scale: 3 }),
    peopleno: integer(),
    comtenantid: integer(),
    monthid: integer(),
    yearid: integer(),
    basecurrencyid: integer(),
    datcurrencyid: integer(),
    oldrate: numeric(),
    exchangerate: numeric(),
});

export const projectroleInE360 = e360.table(
    "projectrole",
    {
        projectroleid: integer()
            .default(sql`nextval('proleid_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectid: integer().notNull(),
        crateid: integer(),
        workmodeid: integer(),
        billratehr: numeric(),
        datcomcurrencyid: integer().notNull(),
        peopleno: integer().notNull(),
        allocation: doublePrecision().notNull(),
        startdate: timestamp({ mode: "string" }).notNull(),
        enddate: timestamp({ mode: "string" }).notNull(),
        staffcostid: integer(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        croleid: integer(),
        customerid: integer(),
        rolename: varchar({ length: 100 }),
        levelid: integer(),
        costHr: doublePrecision("cost_hr"),
        comtenantid: integer(),
        isonsite: boolean(),
        resourceid: varchar({ length: 20 }),
        allocationcostelement: varchar({ length: 30 }),
        controllingarea: varchar({ length: 30 }),
        billable: boolean(),
        rateunitid: integer(),
        countryid: integer(),
        skillareamasterid: integer(),
        techgroupid: integer(),
        minBandid: integer("min_bandid"),
        maxBandid: integer("max_bandid"),
        plannedeffort: numeric(),
    },
    (table) => [
        index("indx_projectrole_crateid").using("btree", table.crateid.asc().nullsLast().op("int4_ops")),
        index("indx_projectrole_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectrole_datcomcurrencyid").using("btree", table.datcomcurrencyid.asc().nullsLast().op("int4_ops")),
        index("indx_projectrole_estimationdetailid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        index("indx_projectrole_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectrole_staffid").using("btree", table.staffcostid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.countryid],
            foreignColumns: [countrymasterInE360.comcountryid],
            name: "fk_projectrole_countryid",
        }),
        foreignKey({
            columns: [table.crateid],
            foreignColumns: [customerratesInE360.custrateid],
            name: "fk_projectrole_crateid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectrole_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_projectrole_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.levelid],
            foreignColumns: [levelmasterInE360.levelmasterid],
            name: "fk_projectrole_levelid",
        }),
        foreignKey({
            columns: [table.maxBandid],
            foreignColumns: [bandmasterInE360.bandmasterid],
            name: "fk_projectrole_maxbandid",
        }),
        foreignKey({
            columns: [table.minBandid],
            foreignColumns: [bandmasterInE360.bandmasterid],
            name: "fk_projectrole_minbandid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectrole_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectrole_projectid",
        }),
        foreignKey({
            columns: [table.skillareamasterid],
            foreignColumns: [skillareamasterInE360.skillareamasterid],
            name: "fk_projectrole_skillareamasterid",
        }),
        foreignKey({
            columns: [table.staffcostid],
            foreignColumns: [orgcostrateInE360.orgcostrateid],
            name: "fk_projectrole_staffcostid",
        }),
        foreignKey({
            columns: [table.techgroupid],
            foreignColumns: [techgroupmasterInE360.techgroupid],
            name: "fk_projectrole_techgroupid",
        }),
        foreignKey({
            columns: [table.workmodeid],
            foreignColumns: [workmodemasterInE360.workmodeid],
            name: "fk_projectrole_workmodeid",
        }),
    ]
);

export const projectroleactualeffortmonthsplitInE360 = e360.table(
    "projectroleactualeffortmonthsplit",
    {
        projectroleactualeffortmonthsplittid: bigserial({ mode: "bigint" }).primaryKey().notNull(),
        projectroleid: integer(),
        profitabilityyearmonthid: integer(),
        projectid: integer(),
        comtenantid: integer(),
        yearmonthid: integer(),
        effort: numeric({ precision: 18, scale: 3 }),
        plannedeffort: numeric({ precision: 18, scale: 3 }),
        actualeffort: numeric({ precision: 18, scale: 3 }),
    },
    (table) => [
        index("indx_projectroleactualeffortmonthsplit_projectroleid").using("btree", table.projectroleid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_projectroleactualeffortmonthsplit_comtenantid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectroleactualeffortmonthsplit_projectid",
        }),
        foreignKey({
            columns: [table.projectroleid],
            foreignColumns: [projectroleInE360.projectroleid],
            name: "fk_projectroleactualeffortmonthsplit_projroleid",
        }),
    ]
);

export const rolemasterInE360 = e360.table(
    "rolemaster",
    {
        roleid: integer()
            .default(sql`nextval('roleid_roleid_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        rolename: varchar({ length: 500 }),
        code: varchar({ length: 50 }),
        activeflag: boolean(),
        comtenantid: integer().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        istenantadmin: boolean(),
        issystemadmin: boolean(),
        ismmadmin: boolean(),
        isfinancemanager: boolean(),
        isdeliverymanger: boolean(),
        istalentmanger: boolean(),
        ispeoplemanager: boolean(),
        issalesmanager: boolean(),
        ispractisehead: boolean(),
        isemployee: boolean(),
        isbuhead: boolean(),
        isservicelinehead: boolean(),
        ispmo: boolean(),
        issystemrole: boolean(),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_rolemaster_comtenantid",
        }),
    ]
);

export const projecttasksInE360 = e360.table(
    "projecttasks",
    {
        projecttaskid: integer()
            .default(sql`nextval('projecttasks_ptask_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectactivityid: integer().notNull(),
        taskid: integer().notNull(),
        taskseq: integer().notNull(),
        taskcode: varchar({ length: 20 }),
        startdate: date().notNull(),
        enddate: date().notNull(),
        billtoclient: boolean().notNull(),
        clientapproval: boolean().notNull(),
        estdeffort: numeric().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        projectid: integer(),
        status: integer(),
        complexity: integer(),
    },
    (table) => [
        index("indx_projecttasks_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projecttasks_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projecttasks_projectactivityid").using("btree", table.projectactivityid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projecttasks_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projecttasks_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectactivityid],
            foreignColumns: [projectactivityInE360.activityid],
            name: "fk_projecttasks_projectactivityid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projecttasks_projectid",
        }),
        foreignKey({
            columns: [table.taskid],
            foreignColumns: [taskmasterInE360.taskid],
            name: "fk_projecttasks_taskid",
        }),
    ]
);

export const projecttypemasterInE360 = e360.table(
    "projecttypemaster",
    {
        projecttypeid: integer()
            .default(sql`nextval('projecttypemaster_projecttype_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projecttype: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_projecttypemaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_projecttypemaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projecttypemaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_projecttypemaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projecttypemaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projecttypemaster_modifiedcomuserid",
        }),
    ]
);

export const rolemenupermissionsInE360 = e360.table(
    "rolemenupermissions",
    {
        rolemenupermissionsid: integer()
            .default(sql`nextval('rolemenupermissions_rolemenupermissionsid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        rolemenuid: integer().notNull(),
        roleid: integer().notNull(),
        datmenuid: integer(),
        datmenupermissionid: integer(),
    },
    (table) => [
        foreignKey({
            columns: [table.roleid],
            foreignColumns: [rolemasterInE360.roleid],
            name: "fk_rolemenupermissions_roleid",
        }),
    ]
);

export const rolenameValInE360 = e360.table("rolename_val", {
    rolename: varchar({ length: 100 }),
});

export const projectstaffInE360 = e360.table(
    "projectstaff",
    {
        projectstaffid: integer()
            .default(sql`nextval('projectstaff_projectstaff_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projroleid: integer().notNull(),
        userid: integer(),
        allocation: doublePrecision().notNull(),
        startdate: timestamp({ mode: "string" }).notNull(),
        enddate: timestamp({ mode: "string" }).notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 500 }),
        projectid: integer(),
        comtenantid: integer(),
        isonsite: boolean(),
        levelid: integer(),
        staffingstatusid: integer(),
        demandid: integer(),
        plannedstartdate: date(),
        plannedenddate: date(),
        plannedallocation: doublePrecision(),
        releasedate: date(),
    },
    (table) => [
        index("indx_projectstaff_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectstaff_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectstaff_projroleid").using("btree", table.projroleid.asc().nullsLast().op("int4_ops")),
        index("indx_projectstaff_userid").using("btree", table.userid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_projectstaff_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectstaff_createdcomuserid",
        }),
        foreignKey({
            columns: [table.demandid],
            foreignColumns: [demandmasterInE360.demandid],
            name: "fk_projectstaff_demandid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectstaff_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectstaff_projectid",
        }),
        foreignKey({
            columns: [table.projroleid],
            foreignColumns: [projectroleInE360.projectroleid],
            name: "fk_projectstaff_projroleid",
        }),
        foreignKey({
            columns: [table.userid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectstaff_userid",
        }),
    ]
);

export const projectrevenueInE360 = e360.table(
    "projectrevenue",
    {
        projrevid: integer()
            .default(sql`nextval('projectrevenue_projrevid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectid: integer().notNull(),
        monthid: integer().notNull(),
        yearid: integer().notNull(),
        recognizedrevenue: numeric({ precision: 18, scale: 3 }),
        actualrevenue: numeric({ precision: 18, scale: 3 }).notNull(),
        invoiceno: varchar({ length: 200 }),
        transactionid: varchar({ length: 200 }),
        transactiondate: date(),
        profitcentercode: varchar({ length: 200 }),
        datcomcurrencyid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        plannedrevenue: numeric({ precision: 18, scale: 3 }),
        description: varchar({ length: 200 }),
        invoicedate: timestamp({ mode: "string" }),
    },
    (table) => [
        index("indx_projectrevenue_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectrevenue_datcomcurrencyid").using("btree", table.datcomcurrencyid.asc().nullsLast().op("int4_ops")),
        index("indx_projectrevenue_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectrevenue_projectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectrevenue_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_projectrevenue_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectrevenue_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectrevenue_projectid",
        }),
    ]
);

export const projectroleeffortmonthsplitInE360 = e360.table(
    "projectroleeffortmonthsplit",
    {
        projectroleeffortmonthsplitid: serial().primaryKey().notNull(),
        projectroleid: integer(),
        comtenantid: integer(),
        yearmonth: integer(),
        effort: numeric({ precision: 18, scale: 3 }),
    },
    (table) => [
        index("indx_projectroleeffortmonthsplit_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_projectroleeffortmonthsplit_projectroleid").using("btree", table.projectroleid.asc().nullsLast().op("int4_ops")),
        index("indx_projectroleeffortmonthsplit_yearmonth").using("btree", table.yearmonth.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_projectroleeffortmonthsplit_comtenantid",
        }),
        foreignKey({
            columns: [table.projectroleid],
            foreignColumns: [projectroleInE360.projectroleid],
            name: "fk_projectroleeffortmonthsplit_projroleid",
        }),
    ]
);

export const projectroletasksInE360 = e360.table(
    "projectroletasks",
    {
        roletaskid: integer()
            .default(sql`nextval('proletask_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projroleid: integer().notNull(),
        projtaskid: integer().notNull(),
        isactive: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createduser: integer().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        updateduser: integer(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        foreignKey({
            columns: [table.createduser],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectroletasks_createduser",
        }),
        foreignKey({
            columns: [table.projroleid],
            foreignColumns: [projectroleInE360.projectroleid],
            name: "fk_projectroletasks_projroleid",
        }),
        foreignKey({
            columns: [table.projtaskid],
            foreignColumns: [projecttasksInE360.projecttaskid],
            name: "fk_projectroletasks_projtaskid",
        }),
        foreignKey({
            columns: [table.updateduser],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectroletasks_updateduser",
        }),
    ]
);

export const projectroleversionInE360 = e360.table(
    "projectroleversion",
    {
        projectroleversionid: integer()
            .default(sql`nextval('projectroleversionid_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        projectplanversionid: integer(),
        versionno: smallint(),
        projectroleid: integer(),
        projectid: integer().notNull(),
        crateid: integer(),
        workmodeid: integer(),
        billratehr: numeric().notNull(),
        datcomcurrencyid: integer().notNull(),
        peopleno: integer().notNull(),
        allocation: doublePrecision().notNull(),
        startdate: timestamp({ mode: "string" }).notNull(),
        enddate: timestamp({ mode: "string" }).notNull(),
        staffcostid: integer(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        croleid: integer(),
        customerid: integer(),
        rolename: varchar({ length: 100 }),
        levelid: integer(),
        costHr: doublePrecision("cost_hr"),
        comtenantid: integer(),
        isonsite: boolean(),
        resourceid: varchar({ length: 20 }),
        allocationcostelement: varchar({ length: 30 }),
        controllingarea: varchar({ length: 30 }),
        billable: boolean(),
        countryid: integer(),
        skillareamasterid: integer(),
        techgroupid: integer(),
        minBandid: integer("min_bandid"),
        maxBandid: integer("max_bandid"),
        plannedeffort: numeric(),
        rateunitid: integer(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        versionmasterid: bigint({ mode: "number" }),
    },
    (table) => [
        index("indx_projectroleversion_crateid").using("btree", table.crateid.asc().nullsLast().op("int4_ops")),
        index("indx_projectroleversion_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectroleversion_datcomcurrencyid").using("btree", table.datcomcurrencyid.asc().nullsLast().op("int4_ops")),
        index("indx_projectroleversion_estimationdetailid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        index("indx_projectroleversion_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_projectroleversion_staffid").using("btree", table.staffcostid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.countryid],
            foreignColumns: [countrymasterInE360.comcountryid],
            name: "fk_projectroleversion_countryid",
        }),
        foreignKey({
            columns: [table.crateid],
            foreignColumns: [customerratesInE360.custrateid],
            name: "fk_projectroleversion_crateid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectroleversion_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_projectroleversion_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.levelid],
            foreignColumns: [levelmasterInE360.levelmasterid],
            name: "fk_projectroleversion_levelid",
        }),
        foreignKey({
            columns: [table.maxBandid],
            foreignColumns: [bandmasterInE360.bandmasterid],
            name: "fk_projectroleversion_maxbandid",
        }),
        foreignKey({
            columns: [table.minBandid],
            foreignColumns: [bandmasterInE360.bandmasterid],
            name: "fk_projectroleversion_minbandid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_projectroleversion_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_projectroleversion_projectid",
        }),
        foreignKey({
            columns: [table.skillareamasterid],
            foreignColumns: [skillareamasterInE360.skillareamasterid],
            name: "fk_projectroleversion_skillareamasterid",
        }),
        foreignKey({
            columns: [table.staffcostid],
            foreignColumns: [staffcostrateInE360.costrateid],
            name: "fk_projectroleversion_staffcostid",
        }),
        foreignKey({
            columns: [table.techgroupid],
            foreignColumns: [techgroupmasterInE360.techgroupid],
            name: "fk_projectroleversion_techgroupid",
        }),
        foreignKey({
            columns: [table.versionmasterid],
            foreignColumns: [versionmasterInE360.versionmasterid],
            name: "fk_projectroleversion_versionmasterid",
        }),
        foreignKey({
            columns: [table.workmodeid],
            foreignColumns: [workmodemasterInE360.workmodeid],
            name: "fk_projectroleversion_workmodeid",
        }),
    ]
);

export const rolemenusInE360 = e360.table(
    "rolemenus",
    {
        rolemenuid: integer()
            .default(sql`nextval('rolemenus_rolemenuid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        roleid: integer().notNull(),
        datmenuid: integer(),
        isfullrights: boolean(),
    },
    (table) => [
        foreignKey({
            columns: [table.roleid],
            foreignColumns: [rolemasterInE360.roleid],
            name: "fk_rolemenus_roleid",
        }),
    ]
);

export const sapintegrationcredentialsInE360 = e360.table("sapintegrationcredentials", {
    sapintegrationcredentialsid: serial().primaryKey().notNull(),
    apiurl: varchar({ length: 200 }),
    username: varchar({ length: 200 }),
    password: varchar({ length: 200 }),
    comtenantid: integer(),
    plantcode: varchar({ length: 20 }),
    companycode: varchar({ length: 20 }),
});

export const servicelineskillareamappingInE360 = e360.table(
    "servicelineskillareamapping",
    {
        servicelineskillareamappingid: serial().primaryKey().notNull(),
        servicelineid: integer(),
        skillareamasterid: integer(),
    },
    (table) => [
        foreignKey({
            columns: [table.servicelineid],
            foreignColumns: [slmasterInE360.servicelineid],
            name: "fk_servicelineskillareamapping_servicelineid",
        }),
    ]
);

export const sourcemasterInE360 = e360.table(
    "sourcemaster",
    {
        sourcemasterid: integer()
            .default(sql`nextval('sourcemaster_sourcemaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        sourcename: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_sourcemaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_sourcemaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_sourcemaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_sourcemaster_modifiedcomuserid",
        }),
    ]
);

export const statusidVarInE360 = e360.table("statusid_var", {
    statusid: integer(),
});

export const subscriptionpackagemoduleInE360 = e360.table("subscriptionpackagemodule", {
    subscriptionpackagemenuid: integer()
        .default(sql`nextval('subscriptionpackagemodule_subscriptionpackagemenuid_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    subscriptionpackageid: integer(),
    datmoduleid: integer().notNull(),
});

export const tempActivityidInE360 = e360.table("temp_activityid", {
    projectactivityid: integer().primaryKey().notNull(),
    startdate: date(),
    enddate: date(),
    createddate: timestamp({ mode: "string" }),
    projectid: integer(),
});

export const statemasterInE360 = e360.table(
    "statemaster",
    {
        comstateid: integer()
            .default(sql`nextval('statemaster_comstate_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comcountryid: integer().notNull(),
        statename: varchar({ length: 100 }).notNull(),
        statecode: varchar({ length: 100 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_statemaster_comcountryid").using("btree", table.comcountryid.asc().nullsLast().op("int4_ops")),
        index("indx_statemaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_statemaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_statemaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comcountryid],
            foreignColumns: [countrymasterInE360.comcountryid],
            name: "fk_statemaster_comcountryid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_statemaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_statemaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_statemaster_modifiedcomuserid",
        }),
    ]
);

export const skillareamasterInE360 = e360.table("skillareamaster", {
    skillareamasterid: integer()
        .default(sql`nextval('skillareamaster_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    skillarea: varchar({ length: 50 }).notNull(),
    comtenantid: integer().notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
});

export const techgroupmasterInE360 = e360.table("techgroupmaster", {
    techgroupid: integer()
        .default(sql`nextval('techgroup_pkey_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    techarea: varchar({ length: 50 }).notNull(),
    comtenantid: integer().notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
});

export const slmasterInE360 = e360.table(
    "slmaster",
    {
        servicelineid: integer()
            .default(sql`nextval('slmaster_serviceline_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        servicelinegroupid: integer().notNull(),
        servicelinename: varchar({ length: 50 }).notNull(),
        servicelineheadid: integer(),
        servicelinecontactpersonid: integer(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        slcode: varchar({ length: 20 }),
        isrevenuerequired: boolean(),
    },
    (table) => [
        index("indx_slmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_slmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_slmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_slmaster_servicelinecontactpersonid").using("btree", table.servicelinecontactpersonid.asc().nullsLast().op("int4_ops")),
        index("indx_slmaster_servicelinegroupid").using("btree", table.servicelinegroupid.asc().nullsLast().op("int4_ops")),
        index("indx_slmaster_servicelineheadid").using("btree", table.servicelineheadid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_slmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_slmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_slmaster_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.servicelinecontactpersonid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_slmaster_servicelinecontactpersonid",
        }),
        foreignKey({
            columns: [table.servicelinegroupid],
            foreignColumns: [slgroupmasterInE360.servicelinegroupid],
            name: "fk_slmaster_servicelinegroupid",
        }),
        foreignKey({
            columns: [table.servicelineheadid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_slmaster_servicelineheadid",
        }),
    ]
);

export const skillmasterInE360 = e360.table(
    "skillmaster",
    {
        skillmasterid: integer()
            .default(sql`nextval('skillmaster_skillmaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        skill: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        skillarea: integer().notNull(),
        skilltype: varchar({ length: 100 }),
        skillcode: varchar({ length: 20 }),
    },
    (table) => [
        index("indx_skillmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_skillmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_skillmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_skillmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_skillmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_skillmaster_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.skillarea],
            foreignColumns: [skillareamasterInE360.skillareamasterid],
            name: "fk_skillmaster_skillarea",
        }),
    ]
);

export const technologymasterInE360 = e360.table(
    "technologymaster",
    {
        technologymasterid: integer()
            .default(sql`nextval('technologymaster_technologymaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        technology: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        techgroup: integer(),
        technologycode: varchar({ length: 20 }),
    },
    (table) => [
        index("indx_technologymaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_technologymaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_technologymaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_technologymaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_technologymaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_technologymaster_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.techgroup],
            foreignColumns: [techgroupmasterInE360.techgroupid],
            name: "fk_technologymaster_techgroup",
        }),
    ]
);

export const taskmasterInE360 = e360.table(
    "taskmaster",
    {
        taskid: integer()
            .default(sql`nextval('taskmaster_taskmaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        taskgroupid: integer().notNull(),
        taskdesc: varchar({ length: 250 }).notNull(),
        tasktypeid: integer().notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        taskcode: varchar({ length: 20 }),
    },
    (table) => [
        index("indx_taskmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_taskmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_taskmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_taskmaster_taskgroupid").using("btree", table.taskgroupid.asc().nullsLast().op("int4_ops")),
        index("indx_taskmaster_tasktypeid").using("btree", table.tasktypeid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_taskmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_taskmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_taskmaster_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.taskgroupid],
            foreignColumns: [taskgroupmasterInE360.taskgroupid],
            name: "fk_taskmaster_taskgroupid",
        }),
        foreignKey({
            columns: [table.tasktypeid],
            foreignColumns: [tasktypemasterInE360.tasktypeid],
            name: "fk_taskmaster_tasktypeid",
        }),
    ]
);

export const staffcostrateInE360 = e360.table(
    "staffcostrate",
    {
        costrateid: integer()
            .default(sql`nextval('staffcostrate_ucr_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        designationid: integer().notNull(),
        skillid: integer().notNull(),
        techid: integer(),
        cityid: integer().notNull(),
        costHr: doublePrecision("cost_hr").notNull(),
        comcurrencyid: integer().notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        band: integer(),
        stdBillrate: integer("std_billrate"),
    },
    (table) => [
        index("indx_usercostrate_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_usercostrate_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_usercostrate_currid").using("btree", table.comcurrencyid.asc().nullsLast().op("int4_ops")),
        index("indx_usercostrate_designationid").using("btree", table.designationid.asc().nullsLast().op("int4_ops")),
        index("indx_usercostrate_locid").using("btree", table.cityid.asc().nullsLast().op("int4_ops")),
        index("indx_usercostrate_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_usercostrate_skillid").using("btree", table.skillid.asc().nullsLast().op("int4_ops")),
        index("indx_usercostrate_techid").using("btree", table.techid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.band],
            foreignColumns: [bandmasterInE360.bandmasterid],
            name: "fk_staffcostrate_band",
        }),
        foreignKey({
            columns: [table.cityid],
            foreignColumns: [citymasterInE360.comcityid],
            name: "fk_staffcostrate_cityid",
        }),
        foreignKey({
            columns: [table.comcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_staffcostrate_comcurrencyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_staffcostrate_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_staffcostrate_createdcomuserid",
        }),
        foreignKey({
            columns: [table.designationid],
            foreignColumns: [designationmasterInE360.designationmasterid],
            name: "fk_staffcostrate_designationid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_staffcostrate_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.skillid],
            foreignColumns: [skillmasterInE360.skillmasterid],
            name: "fk_staffcostrate_skillid",
        }),
        foreignKey({
            columns: [table.techid],
            foreignColumns: [technologymasterInE360.technologymasterid],
            name: "fk_staffcostrate_techid",
        }),
    ]
);

export const roleusermappingInE360 = e360.table(
    "roleusermapping",
    {
        roleusermappingid: integer()
            .default(sql`nextval('roleusermapping_roleusermappingid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        roleid: integer().notNull(),
        comuserid: integer().notNull(),
        activeflag: boolean(),
        comtenantid: integer().notNull(),
        createdtimestamp: timestamp({ mode: "string" }),
        createdcomuserid: smallint(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_roleusermapping_comtenantid",
        }),
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_roleusermapping_comuserid",
        }),
        foreignKey({
            columns: [table.roleid],
            foreignColumns: [rolemasterInE360.roleid],
            name: "fk_roleusermapping_roleid",
        }),
    ]
);

export const sapuserworkassignmentInE360 = e360.table(
    "sapuserworkassignment",
    {
        sapuserworkassignmentid: integer()
            .default(sql`nextval('sapuserworkassignment_sapuserworkassignmentid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        companyid: integer(),
        comuserid: integer(),
        companycode: varchar(),
        workassignmentcode: varchar(),
        costcentercode: varchar(),
        comtenantid: integer(),
    },
    (table) => [
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_sapuserworkassignment_companyid",
        }),
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_sapuserworkassignment_comuserid",
        }),
    ]
);

export const slgroupmasterInE360 = e360.table(
    "slgroupmaster",
    {
        servicelinegroupid: integer()
            .default(sql`nextval('slgroupmaster_servicelinegroup_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        servicelinegroupname: varchar({ length: 50 }).notNull(),
        groupheadid: integer(),
        groupcontactpersonid: integer(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        servicelineheadid: integer(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        servicelinegroupheadcomuserid: bigint({ mode: "number" }),
    },
    (table) => [
        index("indx_slgroupmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_slgroupmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_slgroupmaster_groupcontactpersonid").using("btree", table.groupcontactpersonid.asc().nullsLast().op("int4_ops")),
        index("indx_slgroupmaster_groupheadid").using("btree", table.groupheadid.asc().nullsLast().op("int4_ops")),
        index("indx_slgroupmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_slgroupmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_slgroupmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.groupcontactpersonid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_slgroupmaster_groupcontactpersonid",
        }),
        foreignKey({
            columns: [table.groupheadid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_slgroupmaster_groupheadid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_slgroupmaster_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.servicelinegroupheadcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_slgroupmaster_servicelinegroupheadcomuserid",
        }),
    ]
);

export const slprojectprofitabilityInE360 = e360.table(
    "slprojectprofitability",
    {
        slprojectprofitabilityid: serial().primaryKey().notNull(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        projectprofitabilityid: bigint({ mode: "number" }),
        servicelineid: integer(),
        comtenantid: integer().notNull(),
        projectid: integer().notNull(),
        monthid: integer(),
        yearid: integer(),
        datcomcurrencyid: integer(),
        method: char({ length: 1 }),
        submethod: varchar({ length: 1 }),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        margin1: numeric({ precision: 18, scale: 3 }),
        margin2: numeric({ precision: 18, scale: 3 }),
        datprojectbillingtypeid: integer(),
        recognizedrevenuePrevmonth: numeric("recognizedrevenue_prevmonth"),
        recognizedrevenueCurmonth: numeric("recognizedrevenue_curmonth"),
        totalrecognizedrevenue: numeric(),
        directcostPrevmonth: numeric("directcost_prevmonth"),
        directcostCurmonth: numeric("directcost_curmonth"),
        totaldirectcost: numeric(),
        indirectcostPrevmonth: numeric("indirectcost_prevmonth"),
        indirectcostCurmonth: numeric("indirectcost_curmonth"),
        totalindirectcost: numeric(),
        plannedrevenue: numeric({ precision: 18, scale: 3 }),
        basecurrencyid: integer(),
        exchangerate: numeric({ precision: 12, scale: 6 }),
        margin1Curmonth: numeric("margin1_curmonth", { precision: 18, scale: 3 }),
        margin2Curmonth: numeric("margin2_curmonth", { precision: 18, scale: 3 }),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        projroleid: bigint({ mode: "number" }),
    },
    (table) => [
        index("indx_slprojectprofitability_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_slprojectprofitability_datcomcurrencyid").using("btree", table.datcomcurrencyid.asc().nullsLast().op("int4_ops")),
        index("indx_slprojectprofitability_projectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_slprojectprofitability_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_slprojectprofitability_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_slprojectprofitability_projectid",
        }),
    ]
);

export const taskgroupmasterInE360 = e360.table(
    "taskgroupmaster",
    {
        taskgroupid: integer()
            .default(sql`nextval('taskgroupmaster_taskgroupmaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        taskgroupdesc: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        defaulttask: boolean(),
    },
    (table) => [
        index("indx_taskgroupmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_taskgroupmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_taskgroupmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_taskgroupmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_taskgroupmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_taskgroupmaster_modifiedcomuserid",
        }),
    ]
);

export const tasktypemasterInE360 = e360.table(
    "tasktypemaster",
    {
        tasktypeid: integer()
            .default(sql`nextval('tasktypemaster_tasktypemaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        tasktype: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_tasktypemaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_tasktypemaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_tasktypemaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_tasktypemaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_tasktypemaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_tasktypemaster_modifiedcomuserid",
        }),
    ]
);

export const tempCustomerRevenueInE360 = e360.table("temp_customer_revenue", {
    customerid: integer(),
    customername: varchar({ length: 1000 }),
    revenue: numeric({ precision: 18, scale: 2 }),
    plannedrevenue: numeric({ precision: 18, scale: 2 }),
    actualrevenue: numeric({ precision: 18, scale: 2 }),
});

export const tempDatexchangerateInE360 = e360.table("temp_datexchangerate", {
    fromcurrencyid: integer(),
    tocurrencyid: integer(),
    exchangerate: numeric(),
    startdate: date(),
    enddate: date(),
});

export const tempDatexchangerateProfitablityInE360 = e360.table("temp_datexchangerate_profitablity", {
    fromcurrencyid: integer(),
    tocurrencyid: integer(),
    exchangerate: numeric(),
    startdate: date(),
    enddate: date(),
});

export const tempEducationSpecializationDataInE360 = e360.table("temp_education_specialization_data", {
    description: text(),
    datatype: text(),
    course: text(),
    parenttype: text(),
    educationid: integer(),
    coursemasterid: integer(),
});

export const tempProjectRevenueInE360 = e360.table("temp_project_revenue", {
    projectid: integer(),
    projectname: varchar({ length: 1000 }),
    revenue: numeric({ precision: 18, scale: 2 }),
    plannedrevenue: numeric({ precision: 18, scale: 2 }),
    actualrevenue: numeric({ precision: 18, scale: 2 }),
});

export const tempProjectTimesheetDataInE360 = e360.table("temp_project_timesheet_data", {
    projectid: integer(),
    comtenantid: integer(),
    yearmonthid: integer(),
});

export const tempProjectidInE360 = e360.table("temp_projectid", {
    projectid: integer(),
    projectname: varchar({ length: 1000 }),
    projectcode: varchar({ length: 100 }),
    projecttypeid: integer(),
    companyid: integer(),
    servicelineid: integer(),
    businessunitid: integer(),
    datprojectbillingtypeid: integer(),
    projectmanagerid: integer(),
    customerid: integer(),
    customername: varchar(),
});

export const tempProjectprofitabilityreportInE360 = e360.table("temp_projectprofitabilityreport", {
    projectprofitabilityid: integer(),
    projectid: integer(),
    method: varchar(),
});

export const tempProjectrevenuereportInE360 = e360.table("temp_projectrevenuereport", {
    projectprofitabilityid: integer(),
    projectid: integer(),
    method: varchar(),
    actualrevenue: numeric({ precision: 18, scale: 2 }),
    yearmonth: integer(),
});

export const tempProjidInE360 = e360.table("temp_projid", {
    projectid: integer(),
});

export const tempSelecteddemandidsInE360 = e360.table("temp_selecteddemandids", {
    demandid: integer().primaryKey().notNull(),
});

export const tempSkillTemplateInE360 = e360.table("temp_skill_template", {
    skillmasterid: text(),
    skill: text(),
    skillarea: text(),
    skilltype: text(),
    blank1: text(),
    blank2: text(),
    skillAreaMaster: text("skill_area_master"),
    skillareamasterid: integer(),
});

export const tempTimesheetApprovaldetailsInE360 = e360.table("temp_timesheet_approvaldetails", {
    effortid: integer(),
    statusname: varchar({ length: 255 }),
    approverremarks: varchar({ length: 500 }),
    approved: boolean(),
    comtenantid: integer(),
    approverid: integer(),
});

export const tempTimesheetDataInE360 = e360.table("temp_timesheet_data", {
    timesheetbillinginputid: integer(),
    projectid: integer(),
    projectcode: varchar({ length: 50 }),
    comuserid: integer(),
    yearmonthid: integer(),
    projectstaffid: integer(),
    projectroleid: integer(),
    billableeffort: numeric(),
    nonbillableeffort: numeric(),
    billrate: numeric(),
    notes: varchar(),
    status: integer(),
    statusname: varchar({ length: 100 }),
    comtenantid: integer(),
    projectname: varchar({ length: 200 }),
    rolename: varchar({ length: 200 }),
    approveduser: varchar({ length: 200 }),
    approveremployeecode: varchar({ length: 50 }),
    submitteduser: varchar({ length: 200 }),
    submittedemployeecode: varchar({ length: 50 }),
    username: varchar({ length: 200 }),
    employeecode: varchar({ length: 50 }),
    submissionremarks: varchar(),
    approverremarks: varchar(),
    pmremarks: varchar(),
    dmremarks: varchar(),
    pmname: varchar({ length: 250 }),
    pmemployeecode: varchar({ length: 50 }),
    pmuserid: integer(),
    dmuserid: integer(),
    dmname: varchar({ length: 250 }),
    dmemployeecode: varchar({ length: 50 }),
    billingtype: varchar({ length: 100 }),
    datcomcurrencyid: integer(),
    rateunitid: integer(),
    basecurrencyid: integer(),
    basecurrency: varchar({ length: 50 }),
    currency: varchar({ length: 50 }),
    rateunitname: varchar({ length: 50 }),
    createddate: timestamp({ mode: "string" }),
    monthenddone: boolean(),
    recognizedrevenueCurmonthBc: numeric("recognizedrevenue_curmonth_bc", { precision: 18, scale: 3 }),
    recognizedrevenueCurmonthPc: numeric("recognizedrevenue_curmonth_pc", { precision: 18, scale: 3 }),
});

export const tempTimesheetDetailsInE360 = e360.table("temp_timesheet_details", {
    rowid: serial().notNull(),
    comuserid: integer(),
    startdate: date(),
    enddate: date(),
    entrytype: varchar({ length: 255 }),
    projstaffid: integer(),
    projectid: integer(),
    statusname: varchar({ length: 255 }),
    prevstatusname: varchar({ length: 255 }),
    projecttaskid: integer(),
    timetypeid: integer(),
    projtaskid: integer(),
    taskdesc: text(),
    isactiveflag: boolean(),
    staffremarks: text(),
    referencenumber: varchar({ length: 255 }),
    timesheetdetails: json(),
    effortid: integer(),
    statusid: integer(),
    prevstatusid: integer(),
    approverremarks: varchar({ length: 255 }),
    approved: boolean(),
    comtenantid: integer(),
});

export const tempUserleavedataInE360 = e360.table("temp_userleavedata", {
    employeeCode: varchar("employee_code"),
    employeeName: varchar("employee_name"),
    leavetype: varchar(),
    leavestartdate: date(),
    leaveenddate: date(),
    noofdays: numeric({ precision: 12, scale: 2 }),
    leavereason: varchar({ length: 100 }),
    leavestatus: varchar(),
    comtenantid: integer().notNull(),
    notes: varchar({ length: 100 }),
    createdcomuserid: integer(),
    lopstatus: varchar({ length: 10 }),
    comuserid: integer(),
    leavestatusid: integer(),
    leavetypeid: integer(),
    islop: boolean(),
    isactiveflag: boolean(),
    fromsession: varchar({ length: 100 }),
    tosession: varchar({ length: 100 }),
});

export const tempcostrateuploadInE360 = e360.table("tempcostrateupload", {
    band: varchar({ length: 10 }),
    skillarea: varchar({ length: 500 }),
    techgroup: varchar({ length: 500 }),
    country: varchar({ length: 500 }),
    rate: numeric({ precision: 18, scale: 2 }),
    currency: varchar({ length: 100 }),
    unit: varchar({ length: 100 }),
    startdate: date(),
    enddate: date(),
    status: varchar({ length: 100 }),
    bandid: integer(),
    skillareadid: integer(),
    techgroupid: integer(),
    countryid: integer(),
    currencyid: integer(),
});

export const templateCustomerContactInE360 = e360.table("template_customer_contact", {
    customerName: varchar("customer_name", { length: 100 }),
    contactPersonName: varchar("contact_person_name", { length: 100 }),
    contacttype: varchar({ length: 100 }),
    designation: varchar({ length: 100 }),
    email: varchar({ length: 100 }),
    phone: varchar({ length: 100 }),
    isprimary: varchar({ length: 100 }),
    customerid: integer(),
});

export const templateCustomerMasterInE360 = e360.table("template_customer_master", {
    customerName: varchar("customer_name", { length: 100 }),
    industry: varchar({ length: 100 }),
    addressLine1: varchar("address_line_1", { length: 100 }),
    addressLine2: varchar("address_line_2", { length: 100 }),
    phone: varchar({ length: 100 }),
    email: varchar({ length: 100 }),
    city: varchar({ length: 100 }),
    state: varchar({ length: 100 }),
    country: varchar({ length: 100 }),
    defaultCurrency: varchar("default_currency", { length: 100 }),
    paymentDays: varchar("payment_days", { length: 100 }),
    taxType: varchar("tax_type", { length: 100 }),
    taxNumber: varchar("tax_number", { length: 100 }),
    accountcustomerGroup: varchar("accountcustomer_group", { length: 100 }),
    accountManager: varchar("account_manager", { length: 100 }),
    empId: varchar("emp_id", { length: 100 }),
    emailId: varchar("email_id", { length: 100 }),
    shortCityCode: varchar("short_city_code", { length: 10 }),
    shortName: varchar("short_name", { length: 10 }),
    comcountryid: integer(),
    accountmanagerid: integer(),
    customergroupid: integer(),
    datcomcurrencyid: integer(),
    industryid: integer(),
    comstateid: integer(),
    comcityid: integer(),
});

export const templateCustomerRoleInE360 = e360.table("template_customer_role", {
    customerName: varchar("customer_name", { length: 100 }),
    customerRole: varchar("customer_role", { length: 100 }),
    roleLevel: varchar("role_level", { length: 100 }),
    primarySkill: varchar("primary_skill", { length: 100 }),
    technology: varchar({ length: 100 }),
    billRatehr: varchar("bill_ratehr", { length: 100 }),
    currency: varchar({ length: 100 }),
    unit: varchar({ length: 100 }),
    location: varchar({ length: 100 }),
    typeofcustomerproject: varchar({ length: 100 }),
    customerid: integer(),
    croleid: integer(),
    levelid: integer(),
    comcurrencyid: integer(),
    locationid: integer(),
    rateunit: integer(),
    countryid: integer(),
    skillareamasterid: integer(),
    techgroupid: integer(),
});

export const templateCustomermasterDataInE360 = e360.table("template_customermaster_data", {
    company: varchar(),
    customerName: varchar("customer_name"),
    source: varchar(),
    account: varchar(),
    industry: varchar(),
    bu: varchar(),
    addressLine1: varchar("address_line_1"),
    addressLine2: varchar("address_line_2"),
    phone: varchar(),
    email: varchar(),
    city: varchar(),
    state: varchar(),
    country: varchar(),
    defaultCurrency: varchar("default_currency"),
    accountcustomerGroup: varchar("accountcustomer_group"),
    accountManager: varchar("account_manager"),
    paymentdays: varchar(),
    shortCityCode: varchar("short_city_code", { length: 10 }),
    shortName: varchar("short_name", { length: 10 }),
    comcountryid: integer(),
    accountmanagerid: integer(),
    customergroupid: integer(),
    datcomcurrencyid: integer(),
    industryid: integer(),
    comstateid: integer(),
    comcityid: integer(),
    bumasterid: integer(),
    companyid: integer(),
    customercode: varchar(),
});

export const templateEmployeeCertificatesInE360 = e360.table("template_employee_certificates", {
    employeeNumber: varchar("employee_number"),
    fullName: varchar("full_name"),
    email: varchar(),
    typeOfCertificate: varchar("type_of_certificate"),
    agency: varchar(),
    expiryDate: varchar("expiry_date"),
    attachmentsCount: varchar("attachments_count"),
    comuserid: integer(),
});

export const templateEmployeeEducationInE360 = e360.table("template_employee_education", {
    employeeNumber: varchar("employee_number"),
    fullName: varchar("full_name"),
    jobtitle: varchar(),
    businessUnit: varchar("business_unit"),
    department: varchar(),
    subDepartment: varchar("sub_department"),
    location: varchar(),
    email: varchar(),
    degree: varchar(),
    branchSpecialization: varchar("branch_specialization"),
    yearOfJoining: date("year_of_joining").notNull(),
    yearOfCompletion: date("year_of_completion").notNull(),
    cgpaPercentage: varchar("cgpa_percentage"),
    universityCollege: varchar("university_college"),
    comuserid: integer(),
    dateducationmasterid: integer(),
    datcoursemasterid: integer(),
    datspecialisationid: integer(),
});

export const templateEmployeePrevexperienceInE360 = e360.table("template_employee_prevexperience", {
    employeeNumber: varchar("employee_number"),
    fullName: varchar("full_name"),
    designation: varchar(),
    businessUnit: varchar("business_unit"),
    department: varchar(),
    subDepartment: varchar("sub_department"),
    locationName: varchar("location_name"),
    email: varchar(),
    companyName: varchar("company_name"),
    jobTitle: varchar("job_title"),
    dateOfJoining: date("date_of_joining"),
    dateOfRelieving: date("date_of_relieving"),
    location: varchar(),
    description: varchar(),
    comuserid: integer(),
});

export const templateProjectDetailInE360 = e360.table("template_project_detail", {
    projectName: varchar("project_name", { length: 100 }),
    projectCategory: varchar("project_category", { length: 100 }),
    projectSubtype: varchar("project_subtype", { length: 100 }),
    company: varchar({ length: 100 }),
    customerName: varchar("customer_name", { length: 100 }),
    accountName: varchar("account_name", { length: 100 }),
    billingType: varchar("billing_type", { length: 100 }),
    businessUnit: varchar("business_unit", { length: 100 }),
    serviceLine: varchar("service_line", { length: 100 }),
    startDate: varchar("start_date"),
    endDate: varchar("end_date"),
    pmName: varchar("pm_name", { length: 100 }),
    empid1: varchar({ length: 100 }),
    email1: varchar({ length: 100 }),
    dmName: varchar("dm_name", { length: 100 }),
    empid2: varchar({ length: 100 }),
    email2: varchar({ length: 100 }),
    code: varchar({ length: 100 }),
    customerid: integer(),
    companyid: integer(),
    businessunitid: integer(),
    servicelineid: integer(),
    projecttypeid: integer(),
    datprojectbillingtypeid: integer(),
    projectmanagerid: integer(),
    deliverymanagerid: integer(),
    startdate: date(),
    enddate: date(),
    projectId: integer("project_id"),
});

export const templateProjectPhaseTaskInE360 = e360.table("template_project_phase_task", {
    projectName: varchar("project_name", { length: 100 }),
    phase: varchar(),
    taskGroup: varchar("task_group"),
    tasks: varchar(),
    reference: varchar(),
    taskStartDate: varchar("task_start_date", { length: 100 }),
    taskEndDate: varchar("task_end_date", { length: 100 }),
    estEffort: varchar("est_effort"),
    billableTask: varchar("billable_task", { length: 100 }),
    clientApprovalNeededForTimesheet: varchar("client_approval_needed_for_timesheet", { length: 100 }),
    code: varchar({ length: 120 }),
    projectid: integer(),
    taskgroupid: integer(),
    taskid: integer(),
    tasktypeid: integer(),
    projectactivityid: integer(),
    comtenantid: integer(),
    activityownerid: integer(),
});

export const templateProjectRoleInE360 = e360.table("template_project_role", {
    projectName: varchar("project_name", { length: 100 }),
    customerRole: varchar("customer_role", { length: 100 }),
    level: varchar({ length: 100 }),
    primarySkill: varchar("primary_skill", { length: 100 }),
    technology: varchar({ length: 100 }),
    domain: varchar({ length: 100 }),
    billRate: varchar("bill_rate", { length: 100 }),
    currency: varchar({ length: 100 }),
    onsite: boolean(),
    city: varchar(),
    location: varchar({ length: 100 }),
    people: varchar({ length: 100 }),
    roleStartDate: varchar("role_start_date", { length: 100 }),
    roleEndDate: varchar("role_end_date", { length: 100 }),
    allocation: varchar({ length: 100 }),
    projectroleid: integer(),
    domainid: integer(),
    crateid: integer(),
    projectid: integer(),
    cityid: integer(),
    datcomcurrencyid: integer(),
    croleid: integer(),
    customerid: integer(),
    levelid: integer(),
    skillid: integer(),
    techid: integer(),
    startdate: date(),
    enddate: date(),
    deliveryroleid: integer(),
});

export const templateProjectStaffInE360 = e360.table("template_project_staff", {
    projectName: varchar("project_name", { length: 100 }),
    projectRole: varchar("project_role", { length: 100 }),
    level: varchar(),
    onsite: varchar(),
    staffName: varchar("staff_name", { length: 100 }),
    empId: varchar("emp_id", { length: 100 }),
    startDate: varchar("start_date", { length: 100 }),
    endDate: varchar("end_date", { length: 100 }),
    allocation: varchar({ length: 100 }),
    levelid: integer(),
    projroleid: integer(),
    userid: integer(),
    projectid: integer(),
    startdate: date(),
    enddate: date(),
});

export const templateProjectmasterDataInE360 = e360.table("template_projectmaster_data", {
    projectName: varchar("project_name"),
    projectType: varchar("project_type"),
    company: varchar(),
    customerName: varchar("customer_name"),
    accountName: varchar("account_name"),
    billingType: varchar("billing_type"),
    businessUnit: varchar("business_unit"),
    serviceLine: varchar("service_line"),
    status: varchar(),
    startDate: varchar("start_date"),
    endDate: varchar("end_date"),
    description: varchar(),
    billingCurrency: varchar("billing_currency"),
    billingCycle: varchar("billing_cycle"),
    opportunityName: varchar("opportunity_name"),
    techGroup: varchar("tech_group"),
    pmName: varchar("pm_name"),
    dmName: varchar("dm_name"),
    buHead: varchar("bu_head"),
    serviceLineHead: varchar("service_line_head"),
    customerSpoc: varchar("customer_spoc"),
    pmCode: varchar("pm_code"),
    customerid: integer(),
    companyid: integer(),
    businessunitid: integer(),
    servicelineid: integer(),
    departmentid: integer(),
    projecttypeid: integer(),
    datprojectbillingtypeid: integer(),
    locationid: integer(),
    defaultcomcurrencyid: smallint(),
    projectmanagerid: integer(),
    deliverymanagerid: integer(),
    custProject: boolean("cust_project"),
    category: char({ length: 1 }),
    deliverymodemasterid: integer(),
    opportunityid: integer(),
    projectcode: varchar(),
    techgroupid: integer(),
    projectstatus: integer(),
});

export const templateReconDataInE360 = e360.table("template_recon_data", {
    projectName: varchar("project_name"),
    phase: text(),
    roles: text(),
});

export const templateUserDataInE360 = e360.table("template_user_data", {
    firstName: varchar("first_name", { length: 100 }),
    lastName: varchar("last_name", { length: 100 }),
    employeeId: varchar("employee_id", { length: 100 }),
    employeeStatus: varchar("employee_status", { length: 100 }),
    userType: varchar("user_type", { length: 100 }),
    workerType: varchar("worker_type", { length: 100 }),
    timeType: varchar("time_type", { length: 100 }),
    workforceGroup: varchar("workforce_group", { length: 100 }),
    email: varchar({ length: 100 }),
    phone: varchar({ length: 100 }),
    loginName: varchar("login_name", { length: 100 }),
    gender: varchar({ length: 100 }),
    dateOfBirth: varchar("date_of_birth", { length: 100 }),
    dateOfJoining: varchar("date_of_joining", { length: 100 }),
    nationality: varchar({ length: 100 }),
    company: varchar({ length: 100 }),
    designation: varchar({ length: 100 }),
    band: varchar({ length: 100 }),
    department: varchar({ length: 100 }),
    serviceLine: varchar("service_line", { length: 100 }),
    baseCity: varchar("base_city", { length: 100 }),
    officeLocation: varchar("office_location", { length: 100 }),
    managerName: varchar("manager_name", { length: 100 }),
    managerEmpCode: varchar("manager_emp_code"),
    role: varchar(),
    skillarea: varchar(),
    primaryskill: varchar(),
    userid: integer(),
    skillareamasterid: integer(),
    skillmasterid: integer(),
});

export const templateUserexperiencesInE360 = e360.table("template_userexperiences", {
    employeecode: varchar(),
    name: varchar(),
    totalyearexp: varchar(),
    experienceinmonth: varchar(),
    comuserid: integer(),
});

export const temporaryActivitylistExtractionDataInE360 = e360.table("temporary_activitylist_extraction_data", {
    resourceid: varchar(),
    validityenddate: date(),
    validitystartdate: date(),
    costctractivitytypeqtyunit: varchar(),
    costctractivitytypecategory: varchar(),
    allocationcostelement: varchar(),
    controllingarea: varchar(),
});

export const temporaryCustomerExtractionDataInE360 = e360.table("temporary_customer_extraction_data", {
    customername: varchar(),
    addressPobox: varchar("address_pobox"),
    customergroup: varchar(),
    citycode: varchar(),
    county: varchar(),
    industry: varchar(),
    customergroupid: integer(),
    cityid: integer(),
    countryid: integer(),
    stateid: integer(),
    currentcyid: integer(),
    customermasterid: integer(),
    industryid: integer(),
    customercode: varchar(),
});

export const temporaryProjectactivityExtractionDataInE360 = e360.table("temporary_projectactivity_extraction_data", {
    projectactivityid: integer(),
    projectname: varchar(),
    projectid: integer(),
    activityname: varchar(),
    activitycode: varchar(),
    startdate: date(),
    enddate: date(),
    activityownerid: integer(),
    notes: varchar(),
    comtenantid: integer(),
    createdcomuserid: integer(),
    projectcode: varchar(),
});

export const temporaryProjectmasterExtractionDataInE360 = e360.table("temporary_projectmaster_extraction_data", {
    customerid: integer(),
    companyid: integer(),
    businessunitid: integer(),
    servicelineid: integer(),
    departmentid: integer(),
    projecttypeid: integer(),
    datprojectbillingtypeid: integer(),
    projectname: varchar(),
    projectcode: varchar(),
    locationid: integer(),
    startdate: date(),
    enddate: date(),
    projectstatus: integer(),
    defaultcomcurrencyid: integer(),
    projectmanagerid: integer(),
    deliverymanagerid: integer(),
    custProject: boolean("cust_project"),
    category: varchar(),
    comtenantid: integer(),
    createdcomuserid: integer(),
    companyname: varchar(),
    statusname: varchar(),
    projpartner: varchar(),
    projectmanager: varchar(),
    businessunitname: varchar(),
    customername: varchar(),
    currency: varchar(),
    notes: varchar(),
    datcomcurrencyid: integer(),
    projectid: integer(),
    customercode: varchar(),
    profitcentername: varchar(),
});

export const temporaryProjectroleInE360 = e360.table("temporary_projectrole", {
    projectroleid: integer().notNull(),
    projectid: integer().notNull(),
    crateid: integer(),
    workmodeid: integer(),
    cityid: integer(),
    citytext: text(),
    billratehr: numeric().notNull(),
    datcomcurrencyid: integer().notNull(),
    peopleno: integer().notNull(),
    allocation: doublePrecision().notNull(),
    startdate: timestamp({ mode: "string" }).notNull(),
    enddate: timestamp({ mode: "string" }).notNull(),
    staffcostid: integer(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
    croleid: integer(),
    customerid: integer(),
    rolename: varchar({ length: 100 }),
    levelid: integer(),
    skillid: integer(),
    techid: integer(),
    costHr: doublePrecision("cost_hr"),
    comtenantid: integer(),
    newprojroleid: integer(),
    newskillmasterid: integer(),
});

export const temporaryProjectroleExtractionDataInE360 = e360.table("temporary_projectrole_extraction_data", {
    projectroleid: integer(),
    projectcode: varchar({ length: 20 }),
    projectid: integer(),
    crateid: integer(),
    workmodeid: integer(),
    cityid: integer(),
    citytext: text(),
    billratehr: numeric().default("0"),
    datcomcurrencyid: integer(),
    peopleno: integer(),
    allocation: doublePrecision().default(0),
    startdate: date(),
    enddate: date(),
    staffcostid: integer(),
    isactiveflag: boolean().default(true),
    createdcomuserid: smallint(),
    notes: varchar({ length: 100 }),
    rolename: varchar({ length: 200 }),
    croleid: integer(),
    customerid: integer(),
    levelid: integer(),
    skillid: integer(),
    techid: integer(),
    costHr: doublePrecision("cost_hr").default(0),
    comtenantid: integer(),
    deliveryroleid: integer(),
    allocationcostelement: varchar(),
    resourceid: varchar(),
    userid: integer(),
    staffedemployee: varchar(),
    workitemid: varchar(),
    workitemname: varchar(),
    workpackageid: varchar(),
    projectstaffid: integer(),
    projecttaskid: integer(),
    roletaskid: integer(),
    controllingarea: varchar(),
    custrateid: integer(),
});

export const temporaryProjecttaskExtractionDataInE360 = e360.table("temporary_projecttask_extraction_data", {
    taskid: integer(),
    taskgroupid: integer(),
    taskdesc: varchar({ length: 250 }),
    tasktypeid: integer(),
    comtenantid: integer(),
    isactiveflag: boolean(),
    createdcomuserid: smallint(),
    notes: varchar({ length: 100 }),
    projectid: integer(),
    projectactivityid: integer(),
    startdate: date(),
    enddate: date(),
    billtoclient: boolean(),
    clientapproval: boolean(),
    estdeffort: numeric(),
    projecttaskid: integer(),
    taskseq: integer(),
    activitycode: varchar({ length: 100 }),
    taskcode: varchar({ length: 100 }),
});

export const temporaryUserExtractionDataInE360 = e360.table("temporary_user_extraction_data", {
    businesspartner: varchar(),
    personexternalid: varchar(),
    bpidentificationtype: varchar(),
    firstname: varchar(),
    lastname: varchar(),
    middlename: varchar(),
    userid: varchar(),
    workassignment: varchar(),
    companycode: varchar(),
    costcenter: varchar(),
    countryorregion: varchar(),
    companyid: integer(),
    departmentid: integer(),
    nationality: integer(),
    email: varchar(),
    comuserid: integer(),
    sapuserworkassignmentid: integer(),
});

export const temporaySkillmasterInE360 = e360.table("temporay_skillmaster", {
    skillmasterid: integer().notNull(),
    skill: varchar({ length: 50 }).notNull(),
    comtenantid: integer().notNull(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
    skillarea: integer().notNull(),
    skilltype: varchar({ length: 100 }),
});

export const tenantemailidconfigurationInE360 = e360.table(
    "tenantemailidconfiguration",
    {
        tenantemailidconfigurationid: integer()
            .default(sql`nextval('tenantemailidconfiguration_tenantemailidconfigurationid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        emailid: varchar({ length: 500 }),
        emailhost: varchar({ length: 1000 }),
        emailport: integer(),
        emailpasswordcode: varchar({ length: 1000 }).notNull(),
        emailpasswordkey: varchar({ length: 1000 }).notNull(),
        emailusetls: boolean(),
        createdcomuserid: integer(),
        createddate: date(),
        modifiedcomuserid: integer(),
        modifieddate: date(),
        comtenantid: integer().notNull(),
        username: varchar({ length: 2000 }),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_tenantemailidconfiguration_comtenantid",
        }),
    ]
);

export const tenants3BucketconfigurationInE360 = e360.table(
    "tenants3bucketconfiguration",
    {
        tenants3Bucketconfigurationid: serial().primaryKey().notNull(),
        comtenantid: integer(),
        bucketname: varchar({ length: 1000 }),
        accessKeyId: varchar("access_key_id", { length: 1000 }),
        secretAccessKey: varchar("secret_access_key", { length: 1000 }),
        regionName: varchar("region_name", { length: 1000 }),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_tenants3bucketconfiguration_comtenantid",
        }),
    ]
);

export const tenantcontactsInE360 = e360.table(
    "tenantcontacts",
    {
        tenantcontactpersonsid: integer()
            .default(sql`nextval('tenantcontacts_tenantcontactpersons_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comtenantid: integer().notNull(),
        contactpersonname: varchar({ length: 250 }).notNull(),
        designation: varchar({ length: 250 }),
        phoneno: varchar({ length: 50 }).notNull(),
        email: varchar({ length: 500 }).notNull(),
        isrenewalreminderneedtosend: boolean(),
        isinvoiceneedtosend: boolean(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_tenantcontacts_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_tenantcontacts_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_tenantcontacts_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_tenantcontacts_tenantcontactpersonsid").using("btree", table.tenantcontactpersonsid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_tenantcontacts_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_tenantcontacts_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_tenantcontacts_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.tenantcontactpersonsid],
            foreignColumns: [table.tenantcontactpersonsid],
            name: "fk_tenantcontacts_tenantcontactpersonsid",
        }),
    ]
);

export const tenantsubscriptionInE360 = e360.table(
    "tenantsubscription",
    {
        tenantsubscriptionid: integer()
            .default(sql`nextval('tenantsubscription_tenantsubscriptionid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comtenantid: integer().notNull(),
        datsubscriptionpackageid: integer().notNull(),
        subscriptionfromdate: date(),
        subscriptiontodate: date(),
        graceperiodindays: smallint(),
        istrialaccount: boolean(),
        activeflag: boolean(),
        isadvancesubscriptionrenew: boolean().default(false).notNull(),
        createdtimestamp: timestamp({ mode: "string" }),
        createdcomuserid: smallint(),
        deletedcomuserid: smallint(),
        deletedtimestamp: timestamp({ mode: "string" }),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        deletedflag: boolean(),
        billingcycle: smallint(),
    },
    (table) => [
        foreignKey({
            columns: [table.deletedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "subscriptionpackage_deletedcomuserid_fkey",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "tenantsubscription_comtenantid_fkey",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "tenantsubscription_createdcomuserid_fkey",
        }),
        foreignKey({
            columns: [table.datsubscriptionpackageid],
            foreignColumns: [datsubscriptionpackageInE360.datsubscriptionpackageid],
            name: "tenantsubscription_datsubscriptionpackageid_fkey",
        }),
    ]
);

export const tenantsubscriptionhistoryInE360 = e360.table("tenantsubscriptionhistory", {
    tenantsubscriptionhistoryid: integer()
        .default(sql`nextval('tenantsubscriptionhistory_tenantsubscriptionhistoryid_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    tenantsubscriptionid: integer(),
    comtenantid: integer().notNull(),
    datsubscriptionpackageid: integer().notNull(),
    subscriptionfromdate: date(),
    subscriptiontodate: date(),
    graceperiodindays: smallint(),
    istrialaccount: boolean(),
    activeflag: boolean(),
    isadvancesubscriptionrenew: boolean().default(false).notNull(),
    createdtimestamp: timestamp({ mode: "string" }),
    createdcomuserid: smallint(),
    deletedcomuserid: smallint(),
    deletedtimestamp: timestamp({ mode: "string" }),
});

export const timesheetbillinginputInE360 = e360.table(
    "timesheetbillinginput",
    {
        timesheetbillinginputid: serial().primaryKey().notNull(),
        projectid: integer().notNull(),
        comuserid: integer().notNull(),
        yearmonthid: integer().notNull(),
        projectstaffid: integer().notNull(),
        projectroleid: integer().notNull(),
        billableeffort: doublePrecision().notNull(),
        nonbillableeffort: doublePrecision().notNull(),
        billrate: numeric({ precision: 10, scale: 2 }).notNull(),
        notes: varchar({ length: 500 }),
        isactiveflag: boolean(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: integer().notNull(),
        status: integer(),
        submitteduserid: integer(),
        submittedtimestamp: timestamp({ mode: "string" }),
        approveduserid: integer(),
        approvedtimestamp: timestamp({ mode: "string" }),
        comtenantid: integer().notNull(),
        submissionremarks: varchar({ length: 500 }),
        approverremarks: varchar({ length: 500 }),
        pmremarks: varchar({ length: 500 }),
        dmremarks: varchar({ length: 500 }),
    },
    (table) => [
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_timesheetbillinginput_comuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_timesheetbillinginput_projectid",
        }),
        foreignKey({
            columns: [table.projectroleid],
            foreignColumns: [projectroleInE360.projectroleid],
            name: "fk_timesheetbillinginput_projectroleid",
        }),
        foreignKey({
            columns: [table.projectstaffid],
            foreignColumns: [projectstaffInE360.projectstaffid],
            name: "fk_timesheetbillinginput_projectstaffid",
        }),
        foreignKey({
            columns: [table.status],
            foreignColumns: [datstatusmasterInE360.statusid],
            name: "fk_timesheetbillinginput_status",
        }),
    ]
);

export const tenantsubscriptionpricinghistoryInE360 = e360.table("tenantsubscriptionpricinghistory", {
    tenantsubscriptionpricinghistoryid: serial().primaryKey().notNull(),
    tenantsubscriptionpricingid: integer().notNull(),
    tenantsubscriptionid: integer(),
    comtenantid: integer(),
    minusers: integer(),
    maxusers: integer(),
    unitprice: numeric(),
    datcomcurrencyid: integer(),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
});

export const testAllocInE360 = e360.table("test_alloc", {
    userid: integer(),
    allocperc: numeric({ precision: 12, scale: 2 }),
    benchperc: numeric({ precision: 12, scale: 2 }),
    allocationStatus: varchar("allocation_status", { length: 50 }),
    benchage: integer(),
    maxallocationenddate: date(),
    futureallocationstartdate: date(),
    dateofjoining: date(),
    noofdayspending: integer(),
});

export const testCountInE360 = e360.table("test_count", {
    userid: integer(),
    count1: integer(),
});

export const testCustomerratesInE360 = e360.table("test_customerrates", {
    id: serial().notNull(),
    custrateid: integer(),
    croleid: integer(),
    levelid: integer(),
    billHr: doublePrecision("bill_hr"),
    rolename: varchar({ length: 500 }),
    comcurrencyid: integer(),
    isactiveflag: boolean(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
    comtenantid: integer(),
    customerid: integer(),
    locationid: integer(),
    isonsite: boolean(),
    rateunit: integer(),
    countryid: integer(),
    skillareamasterid: integer(),
    techgroupid: integer(),
    minBandid: integer("min_bandid"),
    maxBandid: integer("max_bandid"),
    datprojectbillingtypeid: integer(),
});

export const testEmpInE360 = e360.table("test_emp", {
    userid: integer(),
    employeecode: varchar({ length: 500 }),
    employeename: text(),
    workforcegroupname: varchar({ length: 500 }),
    companyname: varchar({ length: 500 }),
    designation: varchar({ length: 500 }),
    department: varchar({ length: 500 }),
    band: varchar({ length: 500 }),
    servicelinename: varchar({ length: 500 }),
    statusname1: varchar({ length: 50 }),
    managercode: varchar({ length: 50 }),
    managername: varchar({ length: 500 }),
    usertype: varchar({ length: 500 }),
    emptype: varchar({ length: 500 }),
    skill: varchar({ length: 500 }),
    dateofjoining: date(),
    exitdate: date(),
    allocperc1: numeric({ precision: 12, scale: 2 }),
    benchperc1: numeric({ precision: 12, scale: 2 }),
    allocationstatus: varchar({ length: 100 }),
    lastprojectenddate: date(),
    baldays: integer(),
    servicelinehead: varchar(),
    employeeemailid: varchar({ length: 200 }),
    projectdetail: json(),
    futureallocationstartdate: date(),
    servicelinegroupname: varchar({ length: 200 }),
});

export const testMaxallocationenddateInE360 = e360.table("test_maxallocationenddate", {
    userid: integer(),
    maxallocationenddate: date(),
});

export const testStaffingInE360 = e360.table("test_staffing", {
    projectstaffid: integer(),
    projroleid: integer(),
    userid: integer(),
    allocation: doublePrecision(),
    startdate: timestamp({ mode: "string" }),
    enddate: timestamp({ mode: "string" }),
    isactiveflag: boolean(),
    notes: varchar({ length: 100 }),
    projectid: integer(),
    comtenantid: integer(),
    currency: varchar({ length: 50 }),
    projectname: varchar({ length: 250 }),
    cityname: varchar({ length: 100 }),
    workmode: varchar({ length: 50 }),
    loginusername: varchar({ length: 250 }),
    rolename: varchar({ length: 100 }),
    cityid: integer(),
    citytext: text(),
    billratehr: numeric(),
    costHr: doublePrecision("cost_hr"),
    peopleno: integer(),
    roleallocation: doublePrecision(),
    levelid: integer(),
    skillid: integer(),
    techid: integer(),
    levelname: varchar({ length: 50 }),
    skill: varchar({ length: 50 }),
    technology: varchar({ length: 50 }),
    billable: boolean(),
    employeecode: varchar({ length: 50 }),
    workertypeid: integer(),
    workertype: varchar({ length: 50 }),
    username: text(),
    staffingstatusid: integer(),
    statffingstatus: varchar({ length: 50 }),
    projectmanagername: text(),
});

export const testTimesheetcomplianceInE360 = e360.table("test_timesheetcompliance", {
    userid: integer(),
    allocateddays: numeric({ precision: 12, scale: 2 }),
    timesheetdays: numeric({ precision: 12, scale: 2 }),
});

export const testTimesheetcompliancesummaryInE360 = e360.table("test_timesheetcompliancesummary", {
    userid: integer(),
    allocateddays: numeric({ precision: 12, scale: 2 }),
    timesheetdays: numeric({ precision: 12, scale: 2 }),
    complianceperc: numeric({ precision: 12, scale: 2 }),
});

export const testTimesheetexceptionInE360 = e360.table("test_timesheetexception", {
    userid: integer(),
    projectid: integer(),
    companyid: integer(),
    roleid: integer(),
    dailyworkinghours: numeric({ precision: 12, scale: 2 }),
    allocateddays: numeric({ precision: 12, scale: 2 }),
    plannedhours: numeric({ precision: 12, scale: 2 }),
    timsheethours: numeric({ precision: 12, scale: 2 }),
    allocationperc: numeric({ precision: 12, scale: 2 }),
    date1: date(),
    weekstartdate: date(),
    weekenddate: date(),
    projectstaffid: integer(),
    rolename: varchar({ length: 1000 }),
});

export const testTimesheetexceptionsummaryInE360 = e360.table(
    "test_timesheetexceptionsummary",
    {
        userid: integer(),
        roleid: integer(),
        projectid: integer(),
        projectname: varchar({ length: 1000 }),
        projectcode: varchar({ length: 100 }),
        companyid: integer(),
        plannedhours: numeric({ precision: 12, scale: 2 }),
        timsheethours: numeric({ precision: 12, scale: 2 }),
        weekstartdate: date(),
        weekenddate: date(),
        noncompliancetype: varchar({ length: 100 }),
        variation: numeric({ precision: 12, scale: 2 }),
        timesheetstatus: varchar(),
        approverremarks: varchar(),
        approveremployeeid: varchar(),
        approved: boolean(),
        projectmanagerid: integer(),
        pmo1: integer(),
        pmo2: integer(),
        projectstaffid: integer(),
        rolename: varchar({ length: 1000 }),
    },
    (table) => [
        index("tmp_indx_test_timesheetexceptionsummary_noncompliancetype").using("btree", table.noncompliancetype.asc().nullsLast().op("text_ops")),
        index("tmp_indx_test_timesheetexceptionsummary_projectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        index("tmp_indx_test_timesheetexceptionsummary_timesheetstatus").using("btree", table.timesheetstatus.asc().nullsLast().op("text_ops")),
        index("tmp_indx_test_timesheetexceptionsummary_timsheethours").using("btree", table.timsheethours.asc().nullsLast().op("numeric_ops")),
        index("tmp_indx_test_timesheetexceptionsummary_userid").using("btree", table.userid.asc().nullsLast().op("int4_ops")),
    ]
);

export const testUserallocInE360 = e360.table("test_useralloc", {
    userid: integer(),
    projectstaffid: integer(),
    projectid: integer(),
});

export const testenddateupdInE360 = e360.table("testenddateupd", {
    name: varchar({ length: 500 }),
    projectname: varchar({ length: 500 }),
    enddate: date(),
    userid: integer(),
    projectid: integer(),
    projectstaffid: integer(),
});

export const teststaffingupdInE360 = e360.table("teststaffingupd", {
    empid: varchar({ length: 50 }),
    name: varchar({ length: 500 }),
    projectcode: varchar({ length: 50 }),
    projectname: varchar({ length: 500 }),
    allocationperc: numeric({ precision: 12, scale: 2 }),
    userid: integer(),
    projectid: integer(),
});

export const timetemplatemasterInE360 = e360.table(
    "timetemplatemaster",
    {
        timetemplatemasterid: serial().primaryKey().notNull(),
        templatename: varchar({ length: 250 }),
        comtenantid: integer().notNull(),
        companyid: integer().notNull(),
        isdefault: boolean(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        templatetype: char({ length: 1 }),
        minhours: numeric({ precision: 12, scale: 2 }),
        validationunit: integer(),
        allocationrestriction: boolean(),
        maxhours: numeric({ precision: 12, scale: 2 }),
    },
    (table) => [
        index("indx_timetemplatemaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_timetemplatemasterid_companyid").using("btree", table.companyid.asc().nullsLast().op("int4_ops")),
        index("indx_timetemplatemasterid_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_timetemplatemasterid_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_timetemplatemaster_companyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_timetemplatemaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_timetemplatemaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_timetemplatemaster_modifiedcomuserid",
        }),
    ]
);

export const tenantsubscriptionpricingInE360 = e360.table(
    "tenantsubscriptionpricing",
    {
        tenantsubscriptionpricingid: serial().primaryKey().notNull(),
        tenantsubscriptionid: integer(),
        comtenantid: integer(),
        minusers: integer(),
        maxusers: integer(),
        unitprice: numeric(),
        datcomcurrencyid: integer(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_tenantsubscriptionpricing_comtenantid",
        }),
        foreignKey({
            columns: [table.tenantsubscriptionid],
            foreignColumns: [tenantsubscriptionInE360.tenantsubscriptionid],
            name: "fk_tenantsubscriptionpricing_tenantsubscriptionid",
        }),
    ]
);

export const tmpActualprojecteffortmonthwiseInE360 = e360.table("tmp_actualprojecteffortmonthwise", {
    id: serial().primaryKey().notNull(),
    projectroleid: integer(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    projectprofitabilityid: bigint({ mode: "number" }),
    projectid: integer(),
    comtenantid: integer(),
    yearmonthid: integer(),
    effort: numeric({ precision: 18, scale: 3 }),
    plannedeffort: numeric({ precision: 18, scale: 3 }),
    actualeffort: numeric({ precision: 18, scale: 3 }),
});

export const tmpAllocatedprojectlistInE360 = e360.table("tmp_allocatedprojectlist", {
    userid: integer(),
    projectid: integer(),
    allocation: numeric({ precision: 8, scale: 2 }),
    date1: date(),
});

export const tmpAllocationStatusInE360 = e360.table("tmp_allocation_status", {
    comuserid: integer(),
    companyid: integer(),
    benchprojectid: integer(),
    allocationPercentage: numeric("allocation_percentage", { precision: 12, scale: 2 }),
    comtenantid: integer(),
    projectstartdate: date(),
    projectenddate: date(),
    projectroleid: integer(),
    projectstaffid: integer(),
    joindate: date(),
});

export const tmpBenchprojectstaffidInE360 = e360.table("tmp_benchprojectstaffid", {
    userid: integer(),
    projectstaffid: integer(),
    projectroleid: integer(),
    timetemplatemasterid: integer(),
    comcountryid: integer(),
    workertypeid: integer(),
});

export const tmpCompanytransferdetailInE360 = e360.table("tmp_companytransferdetail", {
    comtenantid: integer(),
    comuserid: integer(),
    companyid: integer(),
    benchprojectid: integer(),
    projectstaffid: integer(),
    startdate: date(),
    enddate: date(),
    projroleid: integer(),
});

export const tmpDatMenupermisssionsInE360 = e360.table("tmp_dat_menupermisssions", {
    roleid: integer(),
    rolename: varchar(),
    code: varchar(),
    datmenuid: integer(),
    menuname: varchar(),
    tcode: varchar(),
    permissionname: varchar(),
    datmenupermissionid: integer(),
    rolemenuid: integer(),
});

export const tmpDemandmatchInE360 = e360.table("tmp_demandmatch", {
    comuserid: integer(),
    demandcode: varchar(),
    matchstatus: varchar(),
    matchstatuscode: varchar(),
    matchcode: integer(),
    demandmatchid: integer(),
    demandid: integer(),
});

export const tmpDynamicdate1InE360 = e360.table("tmp_dynamicdate1", {
    yearmonth: integer(),
    date1: date(),
});

export const tmpDynamicdateTimesheetdetailsInE360 = e360.table("tmp_dynamicdate_timesheetdetails", {
    effortdate: varchar({ length: 12 }),
    efforthours: numeric({ precision: 12, scale: 2 }),
    starttime: numeric({ precision: 12, scale: 2 }),
    endtime: numeric({ precision: 12, scale: 2 }),
});

export const tmpDynamicdateforreportInE360 = e360.table("tmp_dynamicdateforreport", {
    monthname: varchar(),
    yearmonth: integer(),
    startDate: date("start_date"),
    endDate: date("end_date"),
    monthenddate: date(),
    monthstartdate: date(),
});

export const tmpDynamicdateforreportProfitablityInE360 = e360.table("tmp_dynamicdateforreport_profitablity", {
    monthname: varchar(),
    yearmonth: integer(),
    startDate: date("start_date"),
    endDate: date("end_date"),
    monthenddate: date(),
    monthstartdate: date(),
});

export const tmpEmployeeAllocationInE360 = e360.table("tmp_employee_allocation", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    projectid: bigint({ mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    comuserid: bigint({ mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    servicelineid: bigint({ mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    businessunitid: bigint({ mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    customerid: bigint({ mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    servicelinegroupid: bigint({ mode: "number" }),
    servicelinegroupname: varchar({ length: 500 }),
    projectname: varchar({ length: 500 }),
    employeename: varchar({ length: 500 }),
    businessunitname: varchar({ length: 500 }),
    customername: varchar({ length: 500 }),
    servicelinename: varchar({ length: 500 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    customergroupid: bigint({ mode: "number" }),
    customergroupname: varchar({ length: 500 }),
    utilization: numeric(),
});

export const tmpEmployeedetailsInE360 = e360.table("tmp_employeedetails", {
    comuserid: integer().notNull(),
    employeename: varchar({ length: 1000 }),
    employeecode: varchar({ length: 100 }),
    effortdetails: json(),
});

export const tmpEmployeeeffortdetailsInE360 = e360.table("tmp_employeeeffortdetails", {
    projectid: integer(),
    projecttaskid: integer(),
    actualhours: numeric({ precision: 12, scale: 2 }),
    actualstartdate: date(),
    actualenddate: date(),
});

export const tmpExchangeRateInE360 = e360.table("tmp_exchange_rate", {
    exchangerateid: integer(),
    currencyfrom: integer(),
    currencycodefrom: varchar(),
    currencyto: integer(),
    currencycodeto: varchar(),
    conversionrate: numeric({ precision: 10, scale: 4 }),
    validfrom: date(),
    validto: date(),
    isactiveflag: boolean(),
    createdtimestamp: timestamp({ mode: "string" }),
    createdcomuserid: smallint(),
    notes: varchar({ length: 100 }),
    comtenantid: integer(),
});

export const tmpFortimesheetDataInE360 = e360.table("tmp_fortimesheet_data", {
    entrytype: varchar(),
    projstaffid: integer(),
    effortid: integer(),
    staffname: varchar(),
    employeecode: varchar(),
    projectid: integer(),
    customerid: integer(),
    comuserid: integer(),
    projectname: varchar(),
    startdate: date(),
    enddate: date(),
    rolename: varchar(),
    projroleid: integer(),
    curstatus: varchar(),
    approverremarks: varchar(),
    prevstatus: varchar(),
    effortnotes: varchar(),
    timecategorymasterid: integer(),
    timecategoryname: varchar(),
    projecttaskid: integer(),
    projtaskid: integer(),
    taskdesc: varchar(),
    referencenumber: varchar(),
    clientapproval: boolean(),
    billtoclient: boolean(),
    timesheetdetails: json(),
    timesheetconfiguration: json(),
    companyholidays: json(),
    customerholidays: json(),
    allocationstartdate: date(),
    allocationenddate: date(),
    allocationperc: numeric({ precision: 12, scale: 2 }),
    workdays: json(),
    status: varchar({ length: 20 }),
    statusid: integer(),
    taskstartdate: date(),
    taskenddate: date(),
    curyearmonth: integer(),
    curbillingconfirmation: boolean(),
    prevyearmonth: integer(),
    prevbillingconfirmation: boolean(),
    secondprevyearmonth: integer(),
    secondprevbillingconfirmation: boolean(),
});

export const tmpMaxallocationenddateInE360 = e360.table("tmp_maxallocationenddate", {
    userid: integer(),
    maxallocationenddate: date(),
});

export const tmpMenuPermissionInE360 = e360.table("tmp_menu_permission", {
    modulealiasname: varchar({ length: 250 }),
    modulename: varchar({ length: 250 }),
    menuname: varchar({ length: 250 }),
    permissionname: varchar({ length: 250 }),
    datmodulealiasid: integer(),
    datmoduleid: integer(),
    datmenuid: integer(),
    relativepage: varchar(),
    isfullrights: boolean(),
    moduledisplayorder: integer(),
    menudisplayorder: integer(),
});

export const timetypemasterInE360 = e360.table(
    "timetypemaster",
    {
        timetypeid: integer()
            .default(sql`nextval('timetypemaster_timetypemaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        timetype: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_timetypemaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_timetypemaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_timetypemaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_timetypemaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_timetypemaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_timetypemaster_modifiedcomuserid",
        }),
    ]
);

export const timetypetemplatemappingInE360 = e360.table(
    "timetypetemplatemapping",
    {
        timetypetemplatemappingid: serial().primaryKey().notNull(),
        timetemplatemasterid: integer().notNull(),
        comtenantid: integer().notNull(),
        companyid: integer().notNull(),
        comcountryid: integer().notNull(),
        validationunit: integer().notNull(),
        weekendentryallowed: boolean().notNull(),
        holidayallowed: boolean().notNull(),
        isactiveflag: boolean().notNull(),
        mindailylimit: numeric({ precision: 12, scale: 2 }).notNull(),
        maxdailylimit: numeric({ precision: 12, scale: 2 }).notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        timecategorymasterid: integer(),
        workertypeid: integer(),
        allocationrestriction: boolean(),
        timeentryformat: varchar({ length: 1 }),
        timetypeuniqueness: varchar({ length: 1 }),
        selfattestation: boolean(),
        holidaycalendarintegration: varchar({ length: 2 }),
        weekdayentryallowed: boolean(),
    },
    (table) => [
        index("indx_timetypetemplatemapping_timetemplatemasterid").using("btree", table.timetemplatemasterid.asc().nullsLast().op("int4_ops")),
        index("indx_timetypetemplatemappingid_companyid").using("btree", table.companyid.asc().nullsLast().op("int4_ops")),
        index("indx_timetypetemplatemappingid_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_timetypetemplatemappingid_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comcountryid],
            foreignColumns: [countrymasterInE360.comcountryid],
            name: "fk_timetypetemplatemapping_comcountryid",
        }),
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_timetypetemplatemapping_companyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_timetypetemplatemapping_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_timetypetemplatemapping_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_timetypetemplatemapping_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.timecategorymasterid],
            foreignColumns: [timecategorymasterInE360.timecategorymasterid],
            name: "fk_timetypetemplatemapping_timecategorymasterid",
        }),
        foreignKey({
            columns: [table.timetemplatemasterid],
            foreignColumns: [timetemplatemasterInE360.timetemplatemasterid],
            name: "fk_timetypetemplatemapping_timetemplatemasterid",
        }),
        foreignKey({
            columns: [table.workertypeid],
            foreignColumns: [workertypemasterInE360.workertypeid],
            name: "fk_timetypetemplatemapping_workertypeid",
        }),
    ]
);

export const tmpMenuPermission1InE360 = e360.table("tmp_menu_permission1", {
    orderid: serial().notNull(),
    roleid: integer(),
    rolename: varchar(),
    rolecode: varchar({ length: 100 }),
    modulealiasname: varchar({ length: 250 }),
    modulename: varchar({ length: 250 }),
    menuname: varchar({ length: 250 }),
    permissionname: varchar({ length: 250 }),
    datmodulealiasid: integer(),
    datmoduleid: integer(),
    rolemenuid: integer(),
    datmenuid: integer(),
    relativepage: varchar(),
    isfullrights: boolean(),
    moduledisplayorder: integer(),
    menudisplayorder: integer(),
    datmenupermissionid: integer(),
    permissiondisplayorder: integer(),
    ismenuselected: boolean(),
    isselected: boolean(),
});

export const tmpMenupermisssionsdisplayorderInE360 = e360.table("tmp_menupermisssionsdisplayorder", {
    menuname: varchar(),
    permissionname: varchar(),
    datmenupermissionid: integer(),
    displayorder: integer(),
    rolemenuid: integer(),
});

export const tmpMissingSkillInE360 = e360.table("tmp_missing_skill", {
    skill: varchar(),
    skillarea: varchar(),
    skillareamasterid: integer(),
    skillmasterid: integer(),
});

export const tmpMonthnameInE360 = e360.table("tmp_monthname", {
    monthname: varchar({ length: 100 }),
    yearmonth: integer(),
});

export const tmpNoncompliancedataInE360 = e360.table("tmp_noncompliancedata", {
    employeeid: varchar({ length: 100 }),
    employeename: varchar({ length: 1000 }),
    employeeemailid: varchar({ length: 1000 }),
    projectname: varchar({ length: 1000 }),
    projectcode: varchar({ length: 100 }),
    rolename: varchar({ length: 1000 }),
    plannedhours: numeric({ precision: 12, scale: 2 }),
    effort: numeric({ precision: 12, scale: 2 }),
    approvalstatus: varchar({ length: 100 }),
    approverremarks: varchar({ length: 1000 }),
    approvername: varchar({ length: 1000 }),
    approveremployeeid: varchar({ length: 100 }),
    approved: boolean(),
    servicelinename: varchar({ length: 1000 }),
    businessunitname: varchar({ length: 1000 }),
    billingtype: varchar({ length: 1000 }),
    weekstartdate: varchar(),
    weekenddate: varchar(),
    projectmanagername: varchar({ length: 1000 }),
    projectmanagercode: varchar({ length: 100 }),
    projectmanageremailid: varchar({ length: 1000 }),
    noncompliancetype: varchar({ length: 100 }),
    pmo1Name: varchar({ length: 1000 }),
    pmo1Emailid: varchar({ length: 1000 }),
    pmo2Name: varchar({ length: 1000 }),
    pmo2Emailid: varchar({ length: 1000 }),
    workertype: varchar({ length: 500 }),
    workforcegroupname: varchar({ length: 500 }),
    employeestatus: varchar({ length: 500 }),
    allocationstatus: varchar({ length: 500 }),
    timesheetstatus: varchar({ length: 500 }),
    timetemplate: varchar({ length: 500 }),
    customername: varchar({ length: 500 }),
    timecategory: varchar({ length: 50 }),
});

export const tmpOrgcostrateInE360 = e360.table("tmp_orgcostrate", {
    orgcostrateid: integer(),
    comtenantid: integer(),
    companyid: integer(),
    companycode: varchar(),
    bandid: integer(),
    bandname: varchar(),
    cost: numeric({ precision: 18, scale: 3 }),
    comcurrencyid: integer(),
    currencycode: varchar(),
    unit: smallint(),
    startdate: date(),
    enddate: date(),
    isactiveflag: boolean(),
    countryid: integer(),
    countrycode: varchar(),
    skillareamasterid: integer(),
    skillarea: varchar(),
    techgroupid: integer(),
    techgroup: varchar(),
    createdtimestamp: date(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    createdcomuserid: bigint({ mode: "number" }),
});

export const tmpProfitabilityReportDataInE360 = e360.table("tmp_profitability_report_data", {
    postingdate: varchar({ length: 20 }),
    period: varchar({ length: 7 }),
    projectname: varchar({ length: 250 }).notNull(),
    projecttype: varchar({ length: 100 }).notNull(),
    projectid: varchar({ length: 20 }),
    customer: varchar({ length: 500 }),
    serviceline: varchar({ length: 100 }),
    source: varchar({ length: 25 }),
    empno: varchar({ length: 15 }),
    empname: varchar({ length: 300 }),
    role: varchar({ length: 250 }),
    quantity: numeric({ precision: 18, scale: 3 }),
    uom: varchar({ length: 10 }),
    unitrate: numeric({ precision: 18, scale: 3 }),
    unitper: varchar({ length: 10 }),
    amount: numeric({ precision: 18, scale: 3 }),
    exrate: numeric(),
    lcamount: numeric({ precision: 18, scale: 3 }),
    lccurrency: varchar({ length: 20 }),
    basecurrencyid: integer(),
    glaccount: varchar({ length: 250 }),
    glaccountdescription: varchar({ length: 500 }),
    referencedocument: varchar({ length: 100 }),
    projcurrency: varchar({ length: 20 }),
    remarks: varchar({ length: 500 }),
    orgcurrencyid: integer(),
    projcurrencyid: integer(),
    comtenantid: integer(),
});

export const tmpProjectInE360 = e360.table("tmp_project", {
    projectid: integer().primaryKey().notNull(),
});

export const tmpProjectAllocationDetailInE360 = e360.table("tmp_project_allocation_detail", {
    userid: integer(),
    allocation: numeric(),
    projectmanageremailid: varchar({ length: 500 }),
    deliverymanageremailid: varchar({ length: 500 }),
    projectcode: varchar({ length: 100 }),
    projectid: integer(),
    projectname: varchar({ length: 200 }),
    enddate: date(),
    projectroleid: integer(),
    rolename: varchar({ length: 200 }),
    projectmanagername: varchar({ length: 300 }),
    managercode: varchar({ length: 100 }),
});

export const tmpProjectWorkdaysInE360 = e360.table("tmp_project_workdays", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    projectid: bigint({ mode: "number" }),
    category: varchar(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    companyid: bigint({ mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    customerid: bigint({ mode: "number" }),
    workdays: json(),
});

export const tmpProjectallocationdetailsInE360 = e360.table("tmp_projectallocationdetails", {
    userid: integer(),
    projectallocation: numeric({ precision: 13, scale: 2 }),
    benchallocation: numeric({ precision: 13, scale: 2 }),
    plannedbenchallocationhrs: numeric({ precision: 12, scale: 2 }),
    actualbenchallocationhrs: numeric({ precision: 12, scale: 2 }),
    dailyworkinghours: numeric({ precision: 12, scale: 2 }),
    servicelineid: integer(),
    benchprojectid: integer(),
    date1: date(),
    companyid: integer(),
    benchprojectstaffid: integer(),
    benchprojectroleid: integer(),
});

export const tmpProjectdata22InE360 = e360.table("tmp_projectdata22", {
    projectid: integer(),
});

export const tmpProjecteffortovertimeProfitablityInE360 = e360.table("tmp_projecteffortovertime_profitablity", {
    projectroleid: integer(),
    overtimeprojecthours: numeric(),
});

export const tmpProjecteffortreportdataInE360 = e360.table("tmp_projecteffortreportdata", {
    comuserid: integer(),
    projectid: integer(),
    projstaffid: integer(),
    projeffortid: integer(),
    weekefforthours: numeric(),
    yearmonthid: integer().array(),
    startdate: date(),
    enddate: date(),
    status: integer(),
    approverremarks: varchar(),
    approverid: integer(),
    approved: boolean(),
});

export const tmpProjecteffortrevenuedataInE360 = e360.table("tmp_projecteffortrevenuedata", {
    comuserid: integer(),
    currprojecthours: numeric(),
    salerate: numeric({ precision: 18, scale: 3 }),
    rateunitid: integer(),
    monthlyworkingdays: integer(),
    weeklyworkinghours: numeric({ precision: 18, scale: 2 }),
    projroleid: integer(),
    datcurrencyid: integer(),
    basecurrency: integer(),
    exchangerate: numeric(),
    oldsalerate: numeric(),
});

export const tmpProjecteffortrevenuedataProfitablityInE360 = e360.table("tmp_projecteffortrevenuedata_profitablity", {
    comuserid: integer(),
    currprojecthours: numeric(),
    salerate: numeric({ precision: 18, scale: 3 }),
    rateunitid: integer(),
    monthlyworkingdays: integer(),
    weeklyworkinghours: numeric({ precision: 18, scale: 2 }),
    projroleid: integer(),
    datcurrencyid: integer(),
    basecurrency: integer(),
    exchangerate: numeric(),
    oldsalerate: numeric(),
});

export const tmpProjecteffortuptomonthInE360 = e360.table("tmp_projecteffortuptomonth", {
    projectroleid: integer(),
    currprojecthours: numeric(),
    salerate: numeric({ precision: 18, scale: 3 }),
    allocation: numeric({ precision: 18, scale: 3 }),
    rateunitid: integer(),
    monthlyworkingdays: integer(),
    weeklyworkinghours: numeric({ precision: 18, scale: 3 }),
    effort: numeric({ precision: 18, scale: 3 }),
    plannedcost: numeric({ precision: 18, scale: 3 }),
    perccompletion: numeric({ precision: 18, scale: 6 }),
    estimateamount: numeric({ precision: 18, scale: 3 }),
    revenue: numeric({ precision: 18, scale: 3 }),
    datcurrencyid: integer(),
    basecurrency: integer(),
    exchangerate: numeric(),
    oldsalerate: numeric(),
});

export const tmpProjecteffortuptomonthProfitablityInE360 = e360.table("tmp_projecteffortuptomonth_profitablity", {
    projectroleid: integer(),
    currprojecthours: numeric(),
    salerate: numeric({ precision: 18, scale: 3 }),
    allocation: numeric({ precision: 18, scale: 3 }),
    rateunitid: integer(),
    monthlyworkingdays: integer(),
    weeklyworkinghours: numeric({ precision: 18, scale: 3 }),
    effort: numeric({ precision: 18, scale: 3 }),
    plannedcost: numeric({ precision: 18, scale: 3 }),
    perccompletion: numeric({ precision: 18, scale: 6 }),
    estimateamount: numeric({ precision: 18, scale: 3 }),
    revenue: numeric({ precision: 18, scale: 3 }),
    datcurrencyid: integer(),
    basecurrency: integer(),
    exchangerate: numeric(),
    oldsalerate: numeric(),
    noofholydays: numeric(),
});

export const tmpProjectesteffortsummaryInE360 = e360.table("tmp_projectesteffortsummary", {
    projectid: integer(),
    estimatedlhours: numeric({ precision: 12, scale: 2 }),
    actualhours: numeric({ precision: 12, scale: 2 }),
    completionperc: numeric({ precision: 12, scale: 2 }),
});

export const tmpProjectexpenseInE360 = e360.table("tmp_projectexpense", {
    projectCode: varchar("project_code"),
    projectName: varchar("project_name"),
    month: varchar(),
    year: integer(),
    overhead: varchar(),
    description: varchar(),
    transactionDate: date("transaction_date"),
    transactionId: varchar("transaction_id"),
    amount: numeric({ precision: 14, scale: 3 }),
    currency: varchar(),
    linkedUser: varchar("linked_user"),
    costCenterCode: varchar("cost_center_code"),
    projectid: integer(),
    datCurrencyid: integer("dat_currencyid"),
    taggeduserid: integer(),
    monthid: integer(),
    overheadmasterid: integer(),
    companyid: integer(),
    comtenantid: integer(),
    createdcomuserid: integer(),
});

export const tmpProjectplancostdataInE360 = e360.table("tmp_projectplancostdata", {
    projectid: integer(),
    rolename: varchar(),
    projroleid: integer(),
    estdeffort: numeric({ precision: 18, scale: 3 }),
    peopleno: integer(),
    allocation: numeric(),
    plannedeffort: numeric({ precision: 18, scale: 3 }),
    currprojecthours: numeric(),
    salerate: numeric({ precision: 18, scale: 3 }),
    rateunitid: integer(),
    timesheet: numeric({ precision: 18, scale: 3 }),
    monthlyworkingdays: integer(),
    percAgainstTotal: numeric("perc_against_total", { precision: 18, scale: 6 }),
    weeklyworkinghours: numeric({ precision: 18, scale: 3 }),
    revenue: numeric({ precision: 18, scale: 3 }),
    totalrevenue: numeric({ precision: 18, scale: 3 }),
    percOfComplation: numeric("perc_of_complation", { precision: 18, scale: 6 }),
    totalestdamount: numeric({ precision: 18, scale: 3 }),
    datcurrencyid: integer(),
    basecurrency: integer(),
    exchangerate: numeric(),
    oldsalerate: numeric(),
});

export const tmpProjectplancostdataProfitablityInE360 = e360.table("tmp_projectplancostdata_profitablity", {
    projectid: integer(),
    rolename: varchar(),
    projroleid: integer(),
    estdeffort: numeric({ precision: 18, scale: 3 }),
    peopleno: integer(),
    allocation: numeric(),
    plannedeffort: numeric({ precision: 18, scale: 3 }),
    currprojecthours: numeric(),
    salerate: numeric({ precision: 18, scale: 3 }),
    rateunitid: integer(),
    timesheet: numeric({ precision: 18, scale: 3 }),
    monthlyworkingdays: integer(),
    percAgainstTotal: numeric("perc_against_total", { precision: 18, scale: 6 }),
    weeklyworkinghours: numeric({ precision: 18, scale: 3 }),
    revenue: numeric({ precision: 18, scale: 3 }),
    totalrevenue: numeric({ precision: 18, scale: 3 }),
    percOfComplation: numeric("perc_of_complation", { precision: 18, scale: 6 }),
    totalestdamount: numeric({ precision: 18, scale: 3 }),
    datcurrencyid: integer(),
    basecurrency: integer(),
    exchangerate: numeric(),
    oldsalerate: numeric(),
});

export const tmpProjectplannedrevenuedetailInE360 = e360.table("tmp_projectplannedrevenuedetail", {
    projectid: integer(),
    projectroleid: integer(),
    rate: numeric({ precision: 18, scale: 3 }),
    allocation: numeric({ precision: 18, scale: 3 }),
    rateunitid: integer(),
    rateinhrs: numeric({ precision: 18, scale: 3 }),
    plannedeffort: numeric({ precision: 18, scale: 3 }),
    plannedrevenue: numeric({ precision: 18, scale: 3 }),
    peopleno: integer(),
    datcurrencyid: integer(),
    basecurrency: integer(),
    exchangerate: numeric(),
    oldsalerate: numeric(),
});

export const tmpProjectplannedrevenuedetailProfitablityInE360 = e360.table("tmp_projectplannedrevenuedetail_profitablity", {
    projectid: integer(),
    projectroleid: integer(),
    rate: numeric({ precision: 18, scale: 3 }),
    allocation: numeric({ precision: 26, scale: 3 }),
    rateunitid: integer(),
    rateinhrs: numeric({ precision: 26, scale: 3 }),
    plannedeffort: numeric({ precision: 26, scale: 3 }),
    plannedrevenue: numeric({ precision: 26, scale: 3 }),
    peopleno: integer(),
    datcurrencyid: integer(),
    basecurrency: integer(),
    exchangerate: numeric(),
    oldsalerate: numeric(),
});

export const tmpProjectroletasksInE360 = e360.table("tmp_projectroletasks", {
    projroleid: integer().notNull(),
    projtaskid: integer().notNull(),
    isactive: boolean().notNull(),
});

export const tmpProjectstaffDataInE360 = e360.table("tmp_projectstaff_data", {
    projectstaffid: integer(),
    projectid: integer(),
    allocation: numeric({ precision: 12, scale: 2 }),
    projroleid: integer(),
    comuserid: integer(),
    projectname: varchar(),
    rolename: varchar(),
    startdate: varchar(),
    enddate: varchar(),
    staffingstatusid: integer(),
    statusname: varchar(),
    taskdetails: json(),
    curyearmonth: integer(),
    curbillingconfirmation: boolean(),
    prevyearmonth: integer(),
    prevbillingconfirmation: boolean(),
    secondprevyearmonth: integer(),
    secondprevbillingconfirmation: boolean(),
});

export const tmpProjectstaffData1InE360 = e360.table("tmp_projectstaff_data1", {
    comuserid: integer(),
    startdate: date(),
    enddate: date(),
    staffingstatusid: integer(),
    allocation: numeric(),
    comtenantid: integer(),
});

export const tmpProjecttimelinedetailsInE360 = e360.table("tmp_projecttimelinedetails", {
    projectid: integer(),
    projectname: varchar({ length: 1000 }),
    projectcode: varchar({ length: 100 }),
    acitivityid: integer(),
    projecttaskid: integer(),
    phasenmae: varchar({ length: 500 }),
    taskname: varchar({ length: 500 }),
    plannedstartdate: date(),
    plannedenddate: date(),
    plannedhours: numeric({ precision: 12, scale: 2 }),
    actualstartdate: date(),
    actualenddate: date(),
    actualhours: numeric({ precision: 12, scale: 2 }),
});

export const tmpRolemasterInE360 = e360.table("tmp_rolemaster", {
    roleid: integer(),
    rolename: varchar({ length: 500 }),
    code: varchar({ length: 50 }),
    activeflag: boolean(),
    comtenantid: integer(),
    createdtimestamp: timestamp({ mode: "string" }),
    createdcomuserid: smallint(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
    istenantadmin: boolean(),
    issystemadmin: boolean(),
    ismmadmin: boolean(),
    isfinancemanager: boolean(),
    isdeliverymanger: boolean(),
    istalentmanger: boolean(),
    ispeoplemanager: boolean(),
    issalesmanager: boolean(),
    ispractisehead: boolean(),
    isemployee: boolean(),
    isbuhead: boolean(),
    issystemrole: boolean(),
    isservicelinehead: boolean(),
    ispmo: boolean(),
});

export const tmpRolemenupermissionsInE360 = e360.table("tmp_rolemenupermissions", {
    rolemenuid: integer(),
    rolename: varchar(),
    datmenuname: varchar(),
    roleid: integer(),
    datmenuid: integer(),
    todatmenuid: integer(),
    toroleid: integer(),
    datmenupermissionid: integer(),
    todatmenupermissionid: integer(),
    permissionname: varchar(),
    torolemenuid: integer(),
    comtenantid: integer(),
});

export const tmpRolemenusInE360 = e360.table("tmp_rolemenus", {
    rolemenuid: integer(),
    rolename: varchar(),
    datmenuname: varchar(),
    roleid: integer(),
    datmenuid: integer(),
    todatmenuid: integer(),
    toroleid: integer(),
    isfullrights: boolean(),
    comtenantid: integer(),
});

export const tmpSelectedemployeeInE360 = e360.table("tmp_selectedemployee", {
    userid: integer(),
    companyid: integer(),
    comtenantid: integer(),
    workertypeid: integer(),
    countryid: integer(),
    projectid: integer(),
});

export const tmpSelectedemployeedistinctInE360 = e360.table("tmp_selectedemployeedistinct", {
    userid: integer(),
});

export const tmpSelectedprojectdashboardnewInE360 = e360.table("tmp_selectedprojectdashboardnew", {
    projectid: integer(),
    projectname: varchar({ length: 1000 }),
    customerid: integer(),
    customername: varchar({ length: 1000 }),
    servicelineid: integer(),
    servicelinename: varchar({ length: 1000 }),
    regionid: integer(),
    regionname: varchar({ length: 1000 }),
    accountid: integer(),
    accountname: varchar({ length: 1000 }),
    projectmanagerid: integer(),
    projectmanagername: varchar({ length: 1000 }),
    deliverymanagerid: integer(),
    deliverymanagername: varchar({ length: 1000 }),
    totalestimateamt: numeric({ precision: 18, scale: 2 }),
    comtenantid: integer(),
    currencyid: integer(),
    exchangerate: numeric({ precision: 26, scale: 6 }),
});

export const tmpServicelineDataInE360 = e360.table("tmp_serviceline_data", {
    servicelineid: integer(),
    servicelinename: varchar(),
    monthid: integer(),
    monthname: varchar(),
    employeecount: integer(),
    totalUtlization: numeric("total_utlization"),
    avgUtlization: numeric("avg_utlization"),
});

export const tmpServilcelinetransferdetailInE360 = e360.table("tmp_servilcelinetransferdetail", {
    comtenantid: integer(),
    comuserid: integer(),
    servicelineid: integer(),
    benchprojectid: integer(),
    projectstaffid: integer(),
    startdate: date(),
    enddate: date(),
    projroleid: integer(),
});

export const tmpSkillDataInE360 = e360.table("tmp_skill_data", {
    employeecode: varchar(),
    name: varchar(),
    skills: varchar(),
    comuserid: integer(),
    skillmasterid: integer(),
    skillareamasterid: integer(),
});

export const tmpSkillareaDataInE360 = e360.table("tmp_skillarea_data", {
    skillareamasterid: integer(),
    skillarea: varchar(),
    monthid: integer(),
    monthname: varchar(),
    employeecount: integer(),
    totalUtlization: numeric("total_utlization"),
    avgUtlization: numeric("avg_utlization"),
});

export const tmpStaffAllocationDataInE360 = e360.table("tmp_staff_allocation_data", {
    comuserid: integer(),
    employeeid: varchar(),
    employeename: varchar(),
    companyid: integer(),
    bandmasterid: integer(),
    dateofjoining: date(),
});

export const tmpStaffedprojectidInE360 = e360.table("tmp_staffedprojectid", {
    projectid: integer().primaryKey().notNull(),
    curyearmonth: integer(),
    curbillingconfirmation: boolean(),
    prevyearmonth: integer(),
    prevbillingconfirmation: boolean(),
    secondprevyearmonth: integer(),
    secondprevbillingconfirmation: boolean(),
});

export const tmpStartandenddateInE360 = e360.table("tmp_startandenddate", {
    startdate: date(),
    enddate: date(),
});

export const tmpTimesheetavailableprojectidInE360 = e360.table("tmp_timesheetavailableprojectid", {
    projectid: integer().primaryKey().notNull(),
});

export const tmpTimesheetconfigurationInE360 = e360.table("tmp_timesheetconfiguration", {
    entrytype: varchar(),
    projectid: integer(),
    userid: integer(),
    timetemplatemasterid: integer(),
    templatename: varchar(),
    companyid: integer(),
    isdefault: boolean(),
    templatetype: varchar(),
    validationunit: integer(),
    validationunitname: varchar({ length: 50 }),
    allocationrestriction: boolean(),
    maxhours: numeric({ precision: 12, scale: 2 }),
    minhours: numeric({ precision: 12, scale: 2 }),
    timetypetemplatemapping: json(),
});

export const tmpTimesheetconfigurationJsondataInE360 = e360.table("tmp_timesheetconfiguration_jsondata", {
    entrytype: varchar(),
    projectid: integer(),
    userid: integer(),
    companyid: integer(),
    timesheetconfiguration: json(),
});

export const tmpTimesheetdetailsInE360 = e360.table("tmp_timesheetdetails", {
    effortid: integer(),
    projecttaskid: integer(),
    projtaskid: integer(),
    timecategorymasterid: integer(),
    taskdesc: varchar(),
    referencenumber: varchar(),
    effortdate: timestamp({ mode: "string" }),
    efforthours: numeric({ precision: 12, scale: 2 }),
    starttime: numeric({ precision: 12, scale: 2 }),
    endtime: numeric({ precision: 12, scale: 2 }),
    projstaffid: integer(),
});

export const tmpTimesheetdetailsJsondataInE360 = e360.table("tmp_timesheetdetails_jsondata", {
    effortid: integer(),
    projecttaskid: integer(),
    projtaskid: integer(),
    timecategorymasterid: integer(),
    referencenumber: varchar(),
    taskdesc: varchar(),
    timesheetdetails: json(),
});

export const tmpTotalallocationDataInE360 = e360.table("tmp_totalallocation_data", {
    comuserid: integer(),
    totalallocation: numeric(),
    startdate: date(),
});

export const tmpTotalallocationDataProfitablityInE360 = e360.table("tmp_totalallocation_data_profitablity", {
    comuserid: integer(),
    totalallocation: numeric(),
    startdate: date(),
});

export const tmpUserAllocationInE360 = e360.table("tmp_user_allocation", {
    userid: integer(),
    allocationperc: numeric({ precision: 9, scale: 2 }),
});

export const tmpUserAllocationdaysInE360 = e360.table("tmp_user_allocationdays", {
    userid: integer(),
    projroleid: integer(),
    projectid: integer(),
    totaldays: integer(),
    noofdaysworked: integer(),
    totaldaysexcludeleave: integer(),
    allocation: numeric({ precision: 18, scale: 3 }),
    rate: numeric({ precision: 18, scale: 3 }),
    unit: integer(),
    totalallocation: numeric({ precision: 18, scale: 3 }),
    stdcost: numeric({ precision: 18, scale: 3 }),
    leavedays: integer(),
    totalnoofdaysinthismonth: integer(),
    noofweeklyholidays: integer(),
    noofworkingdays: integer(),
    salerate: numeric({ precision: 18, scale: 3 }),
    billable: boolean(),
    bandid: integer(),
    skillarea: integer(),
    techgroupid: integer(),
    countryid: integer(),
    allocationpercentage: numeric({ precision: 18, scale: 3 }),
    rateunitid: integer(),
    stddirectcost: numeric({ precision: 18, scale: 3 }),
    actualcost: numeric({ precision: 18, scale: 3 }),
    cost: numeric({ precision: 18, scale: 3 }),
    isdateofjoincurrmonth: boolean(),
    salecurrencyid: integer(),
    orgcurrencyid: integer(),
    basecurrency: integer(),
    exchangerate: numeric(),
    orgexchangerate: numeric(),
    oldsalerate: numeric(),
    oldorgrate: numeric(),
    totalworkingdaysinthemonth: integer(),
});

export const tmpUserAllocationdaysProfitablityInE360 = e360.table("tmp_user_allocationdays_profitablity", {
    userid: integer(),
    projroleid: integer(),
    projectid: integer(),
    totaldays: integer(),
    noofdaysworked: integer(),
    totaldaysexcludeleave: integer(),
    allocation: numeric({ precision: 18, scale: 3 }),
    rate: numeric({ precision: 18, scale: 3 }),
    unit: integer(),
    totalallocation: numeric({ precision: 18, scale: 3 }),
    stdcost: numeric({ precision: 18, scale: 3 }),
    leavedays: integer(),
    totalnoofdaysinthismonth: integer(),
    noofweeklyholidays: integer(),
    noofworkingdays: integer(),
    salerate: numeric({ precision: 18, scale: 3 }),
    billable: boolean(),
    bandid: integer(),
    skillarea: integer(),
    techgroupid: integer(),
    countryid: integer(),
    allocationpercentage: numeric({ precision: 18, scale: 3 }),
    rateunitid: integer(),
    stddirectcost: numeric({ precision: 18, scale: 3 }),
    actualcost: numeric({ precision: 18, scale: 3 }),
    cost: numeric({ precision: 18, scale: 3 }),
    isdateofjoincurrmonth: boolean(),
    salecurrencyid: integer(),
    orgcurrencyid: integer(),
    basecurrency: integer(),
    exchangerate: numeric(),
    orgexchangerate: numeric(),
    oldsalerate: numeric(),
    oldorgrate: numeric(),
    totalworkingdaysinthemonth: integer(),
});

export const tmpUserDataInE360 = e360.table("tmp_user_data", {
    firstName: varchar("first_name", { length: 100 }),
    lastName: varchar("last_name", { length: 100 }),
    employeeId: varchar("employee_id", { length: 100 }),
    employeeStatus: varchar("employee_status", { length: 100 }),
    userType: varchar("user_type", { length: 100 }),
    workerType: varchar("worker_type", { length: 100 }),
    timeType: varchar("time_type", { length: 100 }),
    workforceGroup: varchar("workforce_group", { length: 100 }),
    email: varchar({ length: 100 }),
    phone: numeric(),
    loginName: varchar("login_name", { length: 100 }),
    gender: varchar({ length: 100 }),
    dateOfBirth: varchar("date_of_birth", { length: 100 }),
    dateOfJoining: varchar("date_of_joining", { length: 100 }),
    nationality: varchar({ length: 100 }),
    company: varchar({ length: 100 }),
    designation: varchar({ length: 100 }),
    band: varchar({ length: 100 }),
    department: varchar({ length: 100 }),
    serviceLine: varchar("service_line", { length: 100 }),
    baseCity: varchar("base_city", { length: 100 }),
    officeLocation: varchar("office_location", { length: 100 }),
    managerName: varchar("manager_name", { length: 100 }),
    managerEmpId: varchar("manager_emp_id", { length: 100 }),
});

export const tmpUserholidaysProfitablityInE360 = e360.table("tmp_userholidays_profitablity", {
    userid: integer(),
    noofholidays: integer(),
});

export const tmpUseridInE360 = e360.table("tmp_userid", {
    userid: integer(),
});

export const tmpUserprojectweeklyholidaysdataInE360 = e360.table("tmp_userprojectweeklyholidaysdata", {
    comuserid: integer(),
    projectid: integer(),
    weeklyholidays: integer(),
});

export const tmpUserprojectweeklyholidaysdataProfitablityInE360 = e360.table("tmp_userprojectweeklyholidaysdata_profitablity", {
    comuserid: integer(),
    projectid: integer(),
    weeklyholidays: integer(),
});

export const tmpUserweekwisedataInE360 = e360.table("tmp_userweekwisedata", {
    comuserid: integer(),
    weekstartdate: date(),
    weekenddate: date(),
    projectstaffid: integer(),
});

export const tmpUserwiseutilizationInE360 = e360.table("tmp_userwiseutilization", {
    comuserid: integer(),
    allocation: numeric(),
    noworkingdays: integer(),
    utilization: numeric(),
    noofdays: integer(),
    avgUtlization: numeric("avg_utlization"),
    utcount: integer(),
});

export const tmpUtilizationdataInE360 = e360.table("tmp_utilizationdata", {
    comuserid: integer(),
    projectstaffid: integer(),
    allocation: numeric(),
    noworkingdays: integer(),
    utilization: numeric(),
    monthid: integer(),
    monthname: varchar(),
    noofdays: integer(),
    startdate: date(),
    enddate: date(),
    projstartdate: date(),
    projenddate: date(),
    dateofjoing: date(),
    total: numeric(),
    utcount: integer(),
    yearid: integer(),
});

export const tmpUtilizationdataProfitablityInE360 = e360.table("tmp_utilizationdata_profitablity", {
    comuserid: integer(),
    projectid: integer(),
    projectname: varchar(),
    projectstaffid: integer(),
    allocation: numeric(),
    totalallocation: numeric(),
    actualallocation: numeric(),
    noworkingdays: integer(),
    utilization: numeric(),
    monthid: integer(),
    monthname: varchar(),
    noofdays: integer(),
    startdate: date(),
    enddate: date(),
    projstartdate: date(),
    projenddate: date(),
    dateofjoing: date(),
    total: numeric(),
    utcount: integer(),
    yearid: integer(),
});

export const tmpUtilizationdataProfitablityTotalInE360 = e360.table("tmp_utilizationdata_profitablity_total", {
    comuserid: integer(),
    projectid: integer(),
    projectname: varchar(),
    projectstaffid: integer(),
    allocation: numeric(),
    totalallocation: numeric(),
    actualallocation: numeric(),
    noworkingdays: integer(),
    utilization: numeric(),
    monthid: integer(),
    monthname: varchar(),
    noofdays: integer(),
    startdate: date(),
    enddate: date(),
    projstartdate: date(),
    projenddate: date(),
    dateofjoing: date(),
    total: numeric(),
    utcount: integer(),
    yearid: integer(),
});

export const tmpUtilizationdataProfitablitymonthwiseProfitablityInE360 = e360.table("tmp_utilizationdata_profitablitymonthwise_profitablity", {
    comuserid: integer(),
    projectid: integer(),
    allocation: numeric(),
    noworkingdays: integer(),
    utilization: numeric(),
    monthid: integer(),
    monthname: varchar(),
    noofdays: integer(),
    avgUtlization: numeric("avg_utlization"),
    utcount: integer(),
    yearid: integer(),
    utilizationgroup: varchar(),
    currmonth: boolean(),
});

export const tmpUtilizationdataTotalInE360 = e360.table("tmp_utilizationdata_total", {
    comuserid: integer(),
    projectid: integer(),
    projectname: varchar(),
    projectstaffid: integer(),
    allocation: numeric(),
    totalallocation: numeric(),
    actualallocation: numeric(),
    noworkingdays: integer(),
    utilization: numeric({ precision: 18, scale: 6 }),
    monthid: integer(),
    monthname: varchar(),
    noofdays: integer(),
    startdate: date(),
    enddate: date(),
    projstartdate: date(),
    projenddate: date(),
    dateofjoing: date(),
    total: numeric(),
    utcount: integer(),
    yearid: integer(),
});

export const tmpUtilizationdatamonthwiseInE360 = e360.table("tmp_utilizationdatamonthwise", {
    comuserid: integer(),
    allocation: numeric(),
    noworkingdays: integer(),
    utilization: numeric(),
    monthid: integer(),
    monthname: varchar(),
    noofdays: integer(),
    avgUtlization: numeric("avg_utlization"),
    utcount: integer(),
    yearid: integer(),
    utilizationgroup: varchar(),
    currmonth: boolean(),
});

export const tmpUtilizationreportStaffdataInE360 = e360.table("tmp_utilizationreport_staffdata", {
    comuserid: integer(),
    employeeid: varchar(),
    employeename: varchar(),
    servicelinename: varchar(),
    servicelineid: integer(),
    locationname: varchar(),
    companyid: integer(),
    companyname: varchar(),
    designation: varchar(),
    bandmasterid: integer(),
    bandname: varchar(),
    dateofjoining: date(),
    primaryskill: varchar(),
    skillarea: varchar(),
    utilizationdetail: json(),
    totalavgutilization: numeric({ precision: 12, scale: 2 }).default("0"),
    createdtimestamp: timestamp({ mode: "string" }),
    workforcegroupname: varchar({ length: 500 }),
    usertype: varchar({ length: 500 }),
    emptype: varchar({ length: 500 }),
    departmentname: varchar({ length: 500 }),
    curmonthutilization: numeric({ precision: 12, scale: 2 }),
    utilizationgroup: char({ length: 2 }),
});

export const tmpYearmonthInE360 = e360.table("tmp_yearmonth", {
    monthname: varchar({ length: 100 }),
    yearmonth: integer(),
    yearid: integer(),
});

export const tmpYearmonthsummaryInE360 = e360.table("tmp_yearmonthsummary", {
    projectroleid: integer(),
    totalnoofdays: integer(),
    yearmonth: integer(),
    noofdays: integer(),
    percentage: numeric({ precision: 26, scale: 9 }),
});

export const userdocumentsInE360 = e360.table(
    "userdocuments",
    {
        userdocumentattachmentsid: serial().primaryKey().notNull(),
        comuserid: integer().notNull(),
        comtenantid: integer().notNull(),
        documenttype: integer().notNull(),
        filename: varchar({ length: 500 }).notNull(),
        filepath: varchar({ length: 200 }).notNull(),
        versionno: varchar({ length: 25 }),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        isdeletedflag: boolean(),
        deletedcomuserid: smallint(),
        deletedtimestamp: timestamp({ mode: "string" }),
        notes: varchar({ length: 100 }),
        fileformat: varchar({ length: 500 }),
    },
    (table) => [
        index("indx_userdocuments_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_userdocuments_comuserid").using("btree", table.comuserid.asc().nullsLast().op("int4_ops")),
        index("indx_userdocuments_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_userdocuments_deletedcomuserid").using("btree", table.deletedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_userdocuments_documenttype").using("btree", table.documenttype.asc().nullsLast().op("int4_ops")),
        index("indx_userdocuments_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_userdocuments_comtenantid",
        }),
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userdocuments_comuserid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userdocuments_createdcomuserid",
        }),
        foreignKey({
            columns: [table.deletedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userdocuments_deletedcomuserid",
        }),
        foreignKey({
            columns: [table.documenttype],
            foreignColumns: [documenttypemasterInE360.documenttypeid],
            name: "fk_userdocuments_documenttype",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userdocuments_modifiedcomuserid",
        }),
    ]
);

export const usereducationInE360 = e360.table(
    "usereducation",
    {
        comusereducationid: integer()
            .default(sql`nextval('usereducation_comusereducation_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comuserid: integer().notNull(),
        dateducationmasterid: integer().notNull(),
        datcoursemasterid: integer().notNull(),
        datspecialisationid: integer().notNull(),
        universityInstitute: varchar("university_institute", { length: 500 }),
        cousetype: varchar({ length: 1 }),
        gradeorclass: varchar({ length: 50 }),
        percentageofmarks: numeric({ precision: 9, scale: 3 }),
        periodofeducation: varchar({ length: 50 }),
        yearofpassing: integer().notNull(),
        remarks: varchar({ length: 500 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_usereducation_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_usereducation_comusereducationid").using("btree", table.comusereducationid.asc().nullsLast().op("int4_ops")),
        index("indx_usereducation_comuserid").using("btree", table.comuserid.asc().nullsLast().op("int4_ops")),
        index("indx_usereducation_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_usereducation_datcoursemasterid").using("btree", table.datcoursemasterid.asc().nullsLast().op("int4_ops")),
        index("indx_usereducation_dateducationmasterid").using("btree", table.dateducationmasterid.asc().nullsLast().op("int4_ops")),
        index("indx_usereducation_datspecialisationid").using("btree", table.datspecialisationid.asc().nullsLast().op("int4_ops")),
        index("indx_usereducation_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_usereducation_comtenantid",
        }),
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_usereducation_comuserid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_usereducation_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcoursemasterid],
            foreignColumns: [datcourseInE360.datcoursemasterid],
            name: "fk_usereducation_datcoursemasterid",
        }),
        foreignKey({
            columns: [table.dateducationmasterid],
            foreignColumns: [dateducationInE360.dateducationmasterid],
            name: "fk_usereducation_dateducationmasterid",
        }),
        foreignKey({
            columns: [table.datspecialisationid],
            foreignColumns: [datspecialisationInE360.datspecialisationid],
            name: "fk_usereducation_datspecialisationid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_usereducation_modifiedcomuserid",
        }),
    ]
);

export const userleavedataInE360 = e360.table(
    "userleavedata",
    {
        userleavedataid: serial().primaryKey().notNull(),
        comuserid: integer().notNull(),
        leavestartdate: date(),
        leavereason: varchar({ length: 100 }),
        leavestatus: integer(),
        islop: boolean(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        leavetypeid: integer(),
        leaveenddate: date(),
        noofdays: numeric({ precision: 12, scale: 2 }),
        fromsession: varchar({ length: 100 }),
        tosession: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_userleavedata_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_userleavedata_comuserid").using("btree", table.comuserid.asc().nullsLast().op("int4_ops")),
        index("indx_userleavedata_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_userleavedata_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userleavedata_companyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_userleavedata_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userleavedata_createdcomuserid",
        }),
        foreignKey({
            columns: [table.leavestatus],
            foreignColumns: [datstatusmasterInE360.statusid],
            name: "fk_userleavedata_leavestatus",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userleavedata_modifiedcomuserid",
        }),
    ]
);

export const useraddressInE360 = e360.table(
    "useraddress",
    {
        comuseraddressid: integer()
            .default(sql`nextval('useraddress_comuseraddress_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comuserid: integer().notNull(),
        addresstype: integer().notNull(),
        addressStreet: varchar("address_street", { length: 50 }).notNull(),
        addressPobox: varchar("address_pobox", { length: 50 }).notNull(),
        address3: varchar({ length: 50 }),
        pincode: varchar({ length: 50 }),
        comcityid: integer().notNull(),
        comstateid: integer().notNull(),
        comcountryid: integer().notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_useraddress_addresstype").using("btree", table.addresstype.asc().nullsLast().op("int4_ops")),
        index("indx_useraddress_comcityid").using("btree", table.comcityid.asc().nullsLast().op("int4_ops")),
        index("indx_useraddress_comcountryid").using("btree", table.comcountryid.asc().nullsLast().op("int4_ops")),
        index("indx_useraddress_comstateid").using("btree", table.comstateid.asc().nullsLast().op("int4_ops")),
        index("indx_useraddress_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_useraddress_comuseraddressid").using("btree", table.comuseraddressid.asc().nullsLast().op("int4_ops")),
        index("indx_useraddress_comuserid").using("btree", table.comuserid.asc().nullsLast().op("int4_ops")),
        index("indx_useraddress_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_useraddress_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.addresstype],
            foreignColumns: [addresstypemasterInE360.addresstypeid],
            name: "fk_useraddress_addresstype",
        }),
        foreignKey({
            columns: [table.comcityid],
            foreignColumns: [citymasterInE360.comcityid],
            name: "fk_useraddress_comcityid",
        }),
        foreignKey({
            columns: [table.comcountryid],
            foreignColumns: [countrymasterInE360.comcountryid],
            name: "fk_useraddress_comcountryid",
        }),
        foreignKey({
            columns: [table.comstateid],
            foreignColumns: [statemasterInE360.comstateid],
            name: "fk_useraddress_comstateid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_useraddress_comtenantid",
        }),
        foreignKey({
            columns: [table.comuseraddressid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_useraddress_comuseraddressid",
        }),
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_useraddress_comuserid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_useraddress_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_useraddress_modifiedcomuserid",
        }),
    ]
);

export const usercertificationInE360 = e360.table(
    "usercertification",
    {
        comusercertificationid: integer()
            .default(sql`nextval('usercertification_comusercertification_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comuserid: integer().notNull(),
        certificationname: varchar({ length: 500 }),
        certificationagency: varchar({ length: 500 }),
        modulename: varchar({ length: 500 }),
        certificationdate: date(),
        certificationexpirydate: date(),
        remarks: varchar({ length: 500 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        certificatefilepath: varchar({ length: 2500 }),
    },
    (table) => [
        index("indx_usercertification_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_usercertification_comusercertificationid").using("btree", table.comusercertificationid.asc().nullsLast().op("int4_ops")),
        index("indx_usercertification_comuserid").using("btree", table.comuserid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_usercertification_comtenantid",
        }),
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_usercertification_comuserid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_usercertification_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_usercertification_modifiedcomuserid",
        }),
    ]
);

export const userpreferenceInE360 = e360.table(
    "userpreference",
    {
        comuserpreferenceid: integer()
            .default(sql`nextval('userpreference_comuserpreference_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comuserid: integer().notNull(),
        preferredlocation1Id: integer(),
        preferredlocation2Id: integer(),
        preferredlocation3Id: integer(),
        workmode: integer().notNull(),
        willingtotravel: boolean().notNull(),
        willingtoshift: boolean().notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_userpreference_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_userpreference_comuserid").using("btree", table.comuserid.asc().nullsLast().op("int4_ops")),
        index("indx_userpreference_comuserpreferenceid").using("btree", table.comuserpreferenceid.asc().nullsLast().op("int4_ops")),
        index("indx_userpreference_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_userpreference_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_userpreference_preferredlocation1id").using("btree", table.preferredlocation1Id.asc().nullsLast().op("int4_ops")),
        index("indx_userpreference_preferredlocation2id").using("btree", table.preferredlocation2Id.asc().nullsLast().op("int4_ops")),
        index("indx_userpreference_preferredlocation3id").using("btree", table.preferredlocation3Id.asc().nullsLast().op("int4_ops")),
        index("indx_userpreference_workmode").using("btree", table.workmode.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_userpreference_comtenantid",
        }),
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userpreference_comuserid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userpreference_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userpreference_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.preferredlocation1Id],
            foreignColumns: [locationmasterInE360.comlocationid],
            name: "fk_userpreference_preferredlocation1id",
        }),
        foreignKey({
            columns: [table.preferredlocation2Id],
            foreignColumns: [locationmasterInE360.comlocationid],
            name: "fk_userpreference_preferredlocation2id",
        }),
        foreignKey({
            columns: [table.preferredlocation3Id],
            foreignColumns: [locationmasterInE360.comlocationid],
            name: "fk_userpreference_preferredlocation3id",
        }),
        foreignKey({
            columns: [table.workmode],
            foreignColumns: [workmodemasterInE360.workmodeid],
            name: "fk_userpreference_workmode",
        }),
    ]
);

export const userskillInE360 = e360.table(
    "userskill",
    {
        userskillid: integer()
            .default(sql`nextval('userskill_userskillid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comuserid: integer().notNull(),
        skillmasterid: integer(),
        isprimary: boolean(),
        expertise: varchar({ length: 50 }),
        proficiencyid: integer(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_userskill_comtenantid",
        }),
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userskill_comuserid",
        }),
        foreignKey({
            columns: [table.skillmasterid],
            foreignColumns: [skillmasterInE360.skillmasterid],
            name: "fk_userskill_skillmasterid",
        }),
    ]
);

export const userrightsmenupermissionsInE360 = e360.table("userrightsmenupermissions", {
    userrightsmenupermissionsid: integer()
        .default(sql`nextval('userrightsmenupermissions_userrightsmenupermissionsid_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    userrightsid: integer(),
    userrightsmenuid: integer(),
    datmenuid: integer(),
    datmenupermissionid: integer(),
});

export const userskilltechnologyInE360 = e360.table(
    "userskilltechnology",
    {
        comuserskilltechnologyid: integer()
            .default(sql`nextval('userskilltechnology_comuserskilltechnology_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comuserid: integer().notNull(),
        skillmasterid: integer().notNull(),
        technologymasterid: integer(),
        techversion: varchar({ length: 50 }),
        lastusedyear: date(),
        experienceinmonths: integer(),
        remarks: varchar({ length: 500 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        expertise: varchar({ length: 200 }),
        domainid: integer(),
        proficiencyid: integer(),
        isprimary: boolean(),
    },
    (table) => [
        index("indx_userskilltechnology_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_userskilltechnology_comuserid").using("btree", table.comuserid.asc().nullsLast().op("int4_ops")),
        index("indx_userskilltechnology_comuserskilltechnologyid").using("btree", table.comuserskilltechnologyid.asc().nullsLast().op("int4_ops")),
        index("indx_userskilltechnology_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_userskilltechnology_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_userskilltechnology_skillmasterid").using("btree", table.skillmasterid.asc().nullsLast().op("int4_ops")),
        index("indx_userskilltechnology_technologymasterid").using("btree", table.technologymasterid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_userskilltechnology_comtenantid",
        }),
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userskilltechnology_comuserid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userskilltechnology_createdcomuserid",
        }),
        foreignKey({
            columns: [table.domainid],
            foreignColumns: [industrymasterInE360.industryid],
            name: "fk_userskilltechnology_domainid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userskilltechnology_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.proficiencyid],
            foreignColumns: [levelmasterInE360.levelmasterid],
            name: "fk_userskilltechnology_proficiencyid",
        }),
        foreignKey({
            columns: [table.skillmasterid],
            foreignColumns: [skillmasterInE360.skillmasterid],
            name: "fk_userskilltechnology_skillmasterid",
        }),
        foreignKey({
            columns: [table.technologymasterid],
            foreignColumns: [technologymasterInE360.technologymasterid],
            name: "fk_userskilltechnology_technologymasterid",
        }),
    ]
);

export const userwiseprojectprofitabilityInE360 = e360.table(
    "userwiseprojectprofitability",
    {
        userwiseprojectprofitabilityid: serial().primaryKey().notNull(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        projectprofitabilityid: bigint({ mode: "number" }),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        comuserid: bigint({ mode: "number" }),
        servicelineid: integer(),
        comtenantid: integer().notNull(),
        projectid: integer().notNull(),
        monthid: integer(),
        yearid: integer(),
        datcomcurrencyid: integer(),
        method: char({ length: 1 }),
        submethod: varchar({ length: 1 }),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        margin1: numeric({ precision: 18, scale: 3 }),
        margin2: numeric({ precision: 18, scale: 3 }),
        datprojectbillingtypeid: integer(),
        recognizedrevenuePrevmonth: numeric("recognizedrevenue_prevmonth"),
        recognizedrevenueCurmonth: numeric("recognizedrevenue_curmonth"),
        totalrecognizedrevenue: numeric(),
        directcostPrevmonth: numeric("directcost_prevmonth"),
        directcostCurmonth: numeric("directcost_curmonth"),
        totaldirectcost: numeric(),
        indirectcostPrevmonth: numeric("indirectcost_prevmonth"),
        indirectcostCurmonth: numeric("indirectcost_curmonth"),
        totalindirectcost: numeric(),
        plannedrevenue: numeric({ precision: 18, scale: 3 }),
        basecurrencyid: integer(),
        exchangerate: numeric({ precision: 12, scale: 6 }),
        margin1Curmonth: numeric("margin1_curmonth", { precision: 18, scale: 3 }),
        margin2Curmonth: numeric("margin2_curmonth", { precision: 18, scale: 3 }),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        projroleid: bigint({ mode: "number" }),
        amount: numeric({ precision: 18, scale: 3 }),
        usercount: integer(),
    },
    (table) => [
        index("indx_userwiseprojectprofitability_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_userwiseprojectprofitability_datcomcurrencyid").using("btree", table.datcomcurrencyid.asc().nullsLast().op("int4_ops")),
        index("indx_userwiseprojectprofitability_projectid").using("btree", table.projectid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userwiseprojectprofitability_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_userwiseprojectprofitability_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_userwiseprojectprofitability_projectid",
        }),
    ]
);

export const versionmasterdeletehistoryInE360 = e360.table(
    "versionmasterdeletehistory",
    {
        versionmasterdeletehistoryid: bigserial({ mode: "bigint" }).notNull(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        versionmasterid: bigint({ mode: "number" }).notNull(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        versionnumber: bigint({ mode: "number" }).notNull(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        projectid: bigint({ mode: "number" }),
        oldeffort: doublePrecision(),
        neweffort: doublePrecision(),
        oldprojectrevenue: numeric({ precision: 18, scale: 3 }),
        newprojectrevenue: numeric({ precision: 18, scale: 3 }),
        projectcurrencyid: integer(),
        oldprojectenddate: timestamp({ mode: "string" }),
        newprojectenddate: timestamp({ mode: "string" }),
        isapproved: boolean(),
        approvedcomuserid: integer(),
        approveddate: timestamp({ mode: "string" }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean(),
        issubmitted: boolean(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: integer(),
        notes: varchar({ length: 100 }),
        submittedcomuserid: integer(),
        submitteddate: timestamp({ mode: "string" }),
        approvalremarks: varchar(),
        submissionremarks: varchar(),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_versionmasterdeletehistory_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_versionmasterdeletehistory_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_versionmasterdeletehistory_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_versionmasterdeletehistory_projectid",
        }),
        foreignKey({
            columns: [table.submittedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_versionmasterdeletehistory_submittedcomuserid",
        }),
    ]
);

export const varComuseridInE360 = e360.table("var_comuserid", {
    comuserid: integer(),
});

export const varDatsubscriptionpackageidInE360 = e360.table("var_datsubscriptionpackageid", {
    datsubscriptionpackageid: integer(),
});

export const userpayrollInE360 = e360.table(
    "userpayroll",
    {
        userpayid: integer()
            .default(sql`nextval('userpayroll_proll_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        userid: integer().notNull(),
        monthid: integer().notNull(),
        yearid: integer().notNull(),
        amount: numeric().notNull(),
        datcomcurrencyid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        transactionid: varchar({ length: 500 }),
        transactiondate: date(),
        externalsystemcode: varchar({ length: 500 }),
        overheadid: integer().notNull(),
        comtenantid: integer(),
    },
    (table) => [
        index("indx_userpayroll_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_userpayroll_datcomcurrencyid").using("btree", table.datcomcurrencyid.asc().nullsLast().op("int4_ops")),
        index("indx_userpayroll_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_userpayroll_userid").using("btree", table.userid.asc().nullsLast().op("int4_ops")),
        index("indx_userpayroll_userpayid").using("btree", table.userpayid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userpayroll_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomcurrencyid],
            foreignColumns: [datcurrencyInE360.datcomcurrencyid],
            name: "fk_userpayroll_datcomcurrencyid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userpayroll_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.userid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userpayroll_userid",
        }),
    ]
);

export const versionscheduleInE360 = e360.table(
    "versionschedule",
    {
        versionscheduleid: bigserial({ mode: "bigint" }).notNull(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        projectid: bigint({ mode: "number" }),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        projectroleid: bigint({ mode: "number" }),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        versionmasterid: bigint({ mode: "number" }).notNull(),
        billratehr: numeric({ precision: 18, scale: 3 }),
        peopleno: integer(),
        billable: boolean(),
        rolename: varchar({ length: 200 }),
        levelmasterid: integer(),
        allocation: doublePrecision().notNull(),
        startdate: date(),
        enddate: date(),
        estdeffort: doublePrecision(),
        comtenantid: integer().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: integer(),
        custrateid: integer(),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_versionschedule_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_versionschedule_createdcomuserid",
        }),
        foreignKey({
            columns: [table.custrateid],
            foreignColumns: [customerratesInE360.custrateid],
            name: "fk_versionschedule_custrateid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_versionschedule_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_versionschedule_projectid",
        }),
        foreignKey({
            columns: [table.projectroleid],
            foreignColumns: [projectroleInE360.projectroleid],
            name: "fk_versionschedule_projectroleid",
        }),
        foreignKey({
            columns: [table.versionmasterid],
            foreignColumns: [versionmasterInE360.versionmasterid],
            name: "fk_versionschedule_versionmasterid",
        }),
    ]
);

export const workertypemasterInE360 = e360.table(
    "workertypemaster",
    {
        workertypeid: integer()
            .default(sql`nextval('workertypemaster_workertypemaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        workertype: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_workertypemaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_workertypemaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_workertypemaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_workertypemaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_workertypemaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_workertypemaster_modifiedcomuserid",
        }),
    ]
);

export const versionmasterInE360 = e360.table(
    "versionmaster",
    {
        versionmasterid: bigserial({ mode: "bigint" }).primaryKey().notNull(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        versionnumber: bigint({ mode: "number" }).notNull(),
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        projectid: bigint({ mode: "number" }),
        oldeffort: doublePrecision(),
        neweffort: doublePrecision(),
        oldprojectrevenue: numeric({ precision: 18, scale: 3 }),
        newprojectrevenue: numeric({ precision: 18, scale: 3 }),
        projectcurrencyid: integer(),
        oldprojectenddate: timestamp({ mode: "string" }),
        newprojectenddate: timestamp({ mode: "string" }),
        isapproved: boolean(),
        approvedcomuserid: integer(),
        approveddate: timestamp({ mode: "string" }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean(),
        issubmitted: boolean(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: integer(),
        notes: varchar({ length: 100 }),
        submittedcomuserid: integer(),
        submitteddate: timestamp({ mode: "string" }),
        approvalremarks: varchar(),
        submissionremarks: varchar(),
        revenueremark: varchar({ length: 500 }),
        timelineremark: varchar({ length: 500 }),
        effortremark: varchar({ length: 500 }),
    },
    (table) => [
        foreignKey({
            columns: [table.approvedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_versionmaster_approvedcomuserid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_versionmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_versionmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_versionmaster_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.projectid],
            foreignColumns: [projectmasterInE360.projectid],
            name: "fk_versionmaster_projectid",
        }),
        foreignKey({
            columns: [table.submittedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_versionmaster_submittedcomuserid",
        }),
    ]
);

export const userprevexperienceInE360 = e360.table(
    "userprevexperience",
    {
        comuserprevexperienceid: integer()
            .default(sql`nextval('userprevexperience_comuserprevexperience_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comuserid: integer().notNull(),
        companyname: varchar({ length: 500 }).notNull(),
        designation: varchar({ length: 500 }).notNull(),
        joiningdate: date().notNull(),
        releivingdate: date(),
        ctc: numeric({ precision: 18, scale: 3 }),
        jobprofile: varchar({ length: 5000 }).notNull(),
        fulltimeorparttimeflag: varchar({ length: 1 }).notNull(),
        remarks: varchar({ length: 2000 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 5000 }),
    },
    (table) => [
        index("indx_userprevexperience_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_userprevexperience_comuserid").using("btree", table.comuserid.asc().nullsLast().op("int4_ops")),
        index("indx_userprevexperience_comuserprevexperienceid").using("btree", table.comuserprevexperienceid.asc().nullsLast().op("int4_ops")),
        index("indx_userprevexperience_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_userprevexperience_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_userprevexperience_comtenantid",
        }),
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userprevexperience_comuserid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userprevexperience_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_userprevexperience_modifiedcomuserid",
        }),
    ]
);

export const userskillattributesInE360 = e360.table(
    "userskillattributes",
    {
        userskillattributesid: integer()
            .default(sql`nextval('userskillattributes_userskillattributesid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        userskillid: integer().notNull(),
        technologymasterid: integer(),
        industrymasterid: integer(),
        techversion: varchar({ length: 50 }),
        lastusedyear: integer(),
        experienceinmonths: integer(),
        remarks: varchar({ length: 500 }),
    },
    (table) => [
        foreignKey({
            columns: [table.userskillid],
            foreignColumns: [userskillInE360.userskillid],
            name: "fk_userskillattributes_userskillid",
        }),
    ]
);

export const weeklyholidaymasterInE360 = e360.table(
    "weeklyholidaymaster",
    {
        weeklyholidayconfigid: integer()
            .default(sql`nextval('weeklyholidaymaster_weeklyholidayconfig_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        companyid: integer().notNull(),
        locationid: integer().notNull(),
        sunholiday: boolean(),
        monholiday: boolean().notNull(),
        tueholiday: boolean(),
        wedholiday: boolean(),
        thuholiday: boolean(),
        friholiday: boolean().notNull(),
        satholiday: boolean(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_weeklyholidaymaster_companyid").using("btree", table.companyid.asc().nullsLast().op("int4_ops")),
        index("indx_weeklyholidaymaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_weeklyholidaymaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_weeklyholidaymaster_locationid").using("btree", table.locationid.asc().nullsLast().op("int4_ops")),
        index("indx_weeklyholidaymaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_weeklyholidaymaster_companyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_weeklyholidaymaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_weeklyholidaymaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.locationid],
            foreignColumns: [locationmasterInE360.comlocationid],
            name: "fk_weeklyholidaymaster_locationid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_weeklyholidaymaster_modifiedcomuserid",
        }),
    ]
);

export const workforcegroupmasterInE360 = e360.table(
    "workforcegroupmaster",
    {
        wfgid: integer()
            .default(sql`nextval('workforcegroupmaster_wfgid_pkey'::regclass)`)
            .primaryKey()
            .notNull(),
        workforcegroup: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_workforcegroupmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_workforcegroupmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_workforcegroupmaster_modifiedcomuserid",
        }),
    ]
);

export const workmodemasterInE360 = e360.table(
    "workmodemaster",
    {
        workmodeid: integer()
            .default(sql`nextval('workmodemaster_workmodemaster_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        workmode: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_workmodemaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_workmodemaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_workmodemaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_workmodemaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_workmodemaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_workmodemaster_modifiedcomuserid",
        }),
    ]
);

export const authPermissionInE360 = e360.table(
    "auth_permission",
    {
        id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "auth_permission_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
        name: varchar({ length: 255 }).notNull(),
        contentTypeId: integer("content_type_id").notNull(),
        codename: varchar({ length: 100 }).notNull(),
    },
    (table) => [
        index("auth_permission_content_type_id_2f476e4b").using("btree", table.contentTypeId.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.contentTypeId],
            foreignColumns: [djangoContentTypeInE360.id],
            name: "auth_permission_content_type_id_2f476e4b_fk_django_co",
        }),
        unique("auth_permission_content_type_id_codename_01ab375a_uniq").on(table.contentTypeId, table.codename),
    ]
);

export const authGroupPermissionsInE360 = e360.table(
    "auth_group_permissions",
    {
        // You can use { mode: "bigint" } if numbers are exceeding js number limitations
        id: bigint({ mode: "number" })
            .primaryKey()
            .generatedByDefaultAsIdentity({ name: "auth_group_permissions_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 9223372036854775807, cache: 1 }),
        groupId: integer("group_id").notNull(),
        permissionId: integer("permission_id").notNull(),
    },
    (table) => [
        index("auth_group_permissions_group_id_b120cbf9").using("btree", table.groupId.asc().nullsLast().op("int4_ops")),
        index("auth_group_permissions_permission_id_84c5c92e").using("btree", table.permissionId.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.permissionId],
            foreignColumns: [authPermissionInE360.id],
            name: "auth_group_permissio_permission_id_84c5c92e_fk_auth_perm",
        }),
        foreignKey({
            columns: [table.groupId],
            foreignColumns: [authGroupInE360.id],
            name: "auth_group_permissions_group_id_b120cbf9_fk_auth_group_id",
        }),
        unique("auth_group_permissions_group_id_permission_id_0cd325b0_uniq").on(table.groupId, table.permissionId),
    ]
);

export const djangoContentTypeInE360 = e360.table(
    "django_content_type",
    {
        id: integer().primaryKey().generatedByDefaultAsIdentity({ name: "django_content_type_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
        appLabel: varchar("app_label", { length: 100 }).notNull(),
        model: varchar({ length: 100 }).notNull(),
    },
    (table) => [unique("django_content_type_app_label_model_76bd3d3b_uniq").on(table.appLabel, table.model)]
);

export const tenantmasterInE360 = e360.table(
    "tenantmaster",
    {
        comtenantid: serial().primaryKey().notNull(),
        tenantname: varchar({ length: 500 }).notNull(),
        tenantcode: varchar({ length: 100 }),
        themecode: varchar({ length: 100 }),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        loginmethod: varchar({ length: 20 }),
        logopath: varchar({ length: 2500 }),
        heroimagepath: varchar({ length: 2500 }),
        tenantaddress: varchar({ length: 3000 }),
        contactdetails: varchar({ length: 2000 }),
        gstnumber: varchar({ length: 50 }),
        cin: varchar({ length: 50 }),
        comcityid: integer(),
        pincode: varchar({ length: 10 }),
        emailid: varchar({ length: 100 }),
        frontendurl: varchar({ length: 2000 }),
    },
    (table) => [
        index("indx_projecteffort_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_tenantmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_tenantmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_tenantmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_tenantmaster_tenantcode").using("btree", table.tenantcode.asc().nullsLast().op("text_ops")),
        index("indx_tenantmaster_tenantname").using("btree", table.tenantname.asc().nullsLast().op("text_ops")),
        foreignKey({
            columns: [table.comcityid],
            foreignColumns: [citymasterInE360.comcityid],
            name: "fk_tenantmaster_comcityid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [table.comtenantid],
            name: "fk_tenantmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_tenantmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_tenantmaster_modifiedcomuserid",
        }),
    ]
);

export const usermasterInE360 = e360.table(
    "usermaster",
    {
        comuserid: integer()
            .default(sql`nextval('usermaster_comuser_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        datusertypeid: integer().notNull(),
        username: varchar({ length: 250 }).notNull(),
        emailid: varchar({ length: 250 }).notNull(),
        personalemailid: varchar({ length: 250 }),
        mobileno: varchar({ length: 50 }),
        phoneno: varchar({ length: 50 }),
        firstname: varchar({ length: 250 }).notNull(),
        lastname: varchar({ length: 250 }),
        employeecode: varchar({ length: 50 }),
        thirdpartyappusercode: varchar({ length: 200 }),
        bloodgroup: varchar({ length: 20 }),
        dateofjoining: date(),
        photo: varchar({ length: 2500 }),
        datcomgenderid: integer(),
        dob: date(),
        workforcegroup: integer(),
        anniversarydate: date(),
        passwordcode: varchar({ length: 1000 }),
        passwordkey: varchar({ length: 1000 }),
        activeflag: boolean().notNull(),
        passwordexpiredflag: boolean(),
        lastpasswordchange: date(),
        systemadminflag: boolean(),
        comtenantid: integer().notNull(),
        payrollcompanyid: integer(),
        departmentid: integer(),
        servicelineid: integer(),
        designationmasterid: integer(),
        nationalityid: integer(),
        band: integer(),
        timeType: integer("time_type"),
        workerType: integer("worker_type"),
        empStatus: integer("emp_status"),
        locationId: integer("location_id"),
        managerId: integer("manager_id"),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 5000 }),
        cityId: integer("city_id"),
        totalexperienceinmonths: integer(),
        workassignmentcode: varchar({ length: 20 }),
        isSapuser: boolean("is_sapuser"),
        costcentercode: varchar({ length: 20 }),
        exitdate: timestamp({ mode: "string" }),
        skillareamasterid: integer(),
        techgroupid: integer(),
    },
    (table) => [
        index("indx_usermaster_city_id").using("btree", table.cityId.asc().nullsLast().op("int4_ops")),
        index("indx_usermaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_usermaster_comuserid").using("btree", table.comuserid.asc().nullsLast().op("int4_ops")),
        index("indx_usermaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_usermaster_datcomgenderid").using("btree", table.datcomgenderid.asc().nullsLast().op("int4_ops")),
        index("indx_usermaster_datusertypeid").using("btree", table.datusertypeid.asc().nullsLast().op("int4_ops")),
        index("indx_usermaster_departmentid").using("btree", table.departmentid.asc().nullsLast().op("int4_ops")),
        index("indx_usermaster_designationmasterid").using("btree", table.designationmasterid.asc().nullsLast().op("int4_ops")),
        index("indx_usermaster_location_id").using("btree", table.locationId.asc().nullsLast().op("int4_ops")),
        index("indx_usermaster_manager_id").using("btree", table.managerId.asc().nullsLast().op("int4_ops")),
        index("indx_usermaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_usermaster_nationalityid").using("btree", table.nationalityid.asc().nullsLast().op("int4_ops")),
        index("indx_usermaster_payrollcompanyid").using("btree", table.payrollcompanyid.asc().nullsLast().op("int4_ops")),
        index("indx_usermaster_servicelineid").using("btree", table.servicelineid.asc().nullsLast().op("int4_ops")),
        index("indx_usermaster_thirdpartyappusercode").using("btree", table.thirdpartyappusercode.asc().nullsLast().op("text_ops")),
        index("indx_usermaster_time_type").using("btree", table.timeType.asc().nullsLast().op("int4_ops")),
        index("indx_usermaster_username").using("btree", table.username.asc().nullsLast().op("text_ops")),
        index("indx_usermaster_worker_type").using("btree", table.workerType.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.band],
            foreignColumns: [bandmasterInE360.bandmasterid],
            name: "fk_usermaster_band",
        }),
        foreignKey({
            columns: [table.cityId],
            foreignColumns: [citymasterInE360.comcityid],
            name: "fk_usermaster_city_id",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_usermaster_comtenantid",
        }),
        foreignKey({
            columns: [table.comuserid],
            foreignColumns: [table.comuserid],
            name: "fk_usermaster_comuserid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [table.comuserid],
            name: "fk_usermaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.datcomgenderid],
            foreignColumns: [datgenderInE360.datcomgenderid],
            name: "fk_usermaster_datcomgenderid",
        }),
        foreignKey({
            columns: [table.departmentid],
            foreignColumns: [departmentmasterInE360.departmentid],
            name: "fk_usermaster_departmentid",
        }),
        foreignKey({
            columns: [table.designationmasterid],
            foreignColumns: [designationmasterInE360.designationmasterid],
            name: "fk_usermaster_designationmasterid",
        }),
        foreignKey({
            columns: [table.locationId],
            foreignColumns: [locationmasterInE360.comlocationid],
            name: "fk_usermaster_location_id",
        }),
        foreignKey({
            columns: [table.managerId],
            foreignColumns: [table.comuserid],
            name: "fk_usermaster_manager_id",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [table.comuserid],
            name: "fk_usermaster_modifiedcomuserid",
        }),
        foreignKey({
            columns: [table.nationalityid],
            foreignColumns: [nationalitymasterInE360.nationalityid],
            name: "fk_usermaster_nationalityid",
        }),
        foreignKey({
            columns: [table.payrollcompanyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_usermaster_payrollcompanyid",
        }),
        foreignKey({
            columns: [table.servicelineid],
            foreignColumns: [slmasterInE360.servicelineid],
            name: "fk_usermaster_servicelineid",
        }),
        foreignKey({
            columns: [table.skillareamasterid],
            foreignColumns: [skillareamasterInE360.skillareamasterid],
            name: "fk_usermaster_skillareamasterid",
        }),
        foreignKey({
            columns: [table.techgroupid],
            foreignColumns: [techgroupmasterInE360.techgroupid],
            name: "fk_usermaster_techgroupid",
        }),
        foreignKey({
            columns: [table.timeType],
            foreignColumns: [timetypemasterInE360.timetypeid],
            name: "fk_usermaster_time_type",
        }),
        foreignKey({
            columns: [table.workerType],
            foreignColumns: [workertypemasterInE360.workertypeid],
            name: "fk_usermaster_worker_type",
        }),
        foreignKey({
            columns: [table.workforcegroup],
            foreignColumns: [workforcegroupmasterInE360.wfgid],
            name: "fk_usermaster_workforcegroup",
        }),
    ]
);

export const citymasterInE360 = e360.table(
    "citymaster",
    {
        comcityid: integer()
            .default(sql`nextval('citymaster_comcity_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        comstateid: integer().notNull(),
        cityname: varchar({ length: 100 }).notNull(),
        citycode: varchar({ length: 100 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_citymaster_comstateid").using("btree", table.comstateid.asc().nullsLast().op("int4_ops")),
        index("indx_citymaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_citymaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_citymaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comstateid],
            foreignColumns: [statemasterInE360.comstateid],
            name: "fk_citymaster_comstateid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_citymaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_citymaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_citymaster_modifiedcomuserid",
        }),
    ]
);

export const companycontactsInE360 = e360.table(
    "companycontacts",
    {
        companycontactpersonid: integer()
            .default(sql`nextval('companycontacts_companycontactpersons_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        companyid: integer().notNull(),
        comtenantid: integer().notNull(),
        contactpersonname: varchar({ length: 250 }).notNull(),
        designation: varchar({ length: 250 }),
        phoneno: varchar({ length: 50 }).notNull(),
        email: varchar({ length: 500 }).notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_companycontacts_companyid").using("btree", table.companyid.asc().nullsLast().op("int4_ops")),
        index("indx_companycontacts_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_companycontacts_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_companycontacts_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_companycontacts_companyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_companycontacts_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_companycontacts_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_companycontacts_modifiedcomuserid",
        }),
    ]
);

export const datcurrencyInE360 = e360.table(
    "datcurrency",
    {
        datcomcurrencyid: smallint()
            .default(sql`nextval('datcurrency_datcomcurrency_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        currencycode: varchar({ length: 10 }).notNull(),
        currency: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_datcurrency_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_datcurrency_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_datcurrency_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_datcurrency_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datcurrency_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datcurrency_modifiedcomuserid",
        }),
    ]
);

export const regionmasterInE360 = e360.table(
    "regionmaster",
    {
        comregionid: integer()
            .default(sql`nextval('regionmaster_comregion_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        regionname: varchar({ length: 100 }).notNull(),
        regioncode: varchar({ length: 100 }),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_regionmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_regionmaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_regionmaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_regionmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_regionmaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_regionmaster_modifiedcomuserid",
        }),
    ]
);

export const industrymasterInE360 = e360.table(
    "industrymaster",
    {
        industryid: integer()
            .default(sql`nextval('industrymaster_industryid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        industryname: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_industrymaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_industrymaster_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_industrymaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_industrymaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_industrymaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_industrymaster_modifiedcomuserid",
        }),
    ]
);

export const datlanguageInE360 = e360.table(
    "datlanguage",
    {
        datcomlanguageid: smallint()
            .default(sql`nextval('datlanguage_datcomlanguage_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        languagecode: varchar({ length: 10 }).notNull(),
        languagename: varchar({ length: 50 }).notNull(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_datlanguage_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_datlanguage_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_datlanguage_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_datlanguage_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datlanguage_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datlanguage_modifiedcomuserid",
        }),
    ]
);

export const datprojectbilltypeInE360 = e360.table(
    "datprojectbilltype",
    {
        datprojectbillingtypeid: integer()
            .default(sql`nextval('datprojectbilltype_datprojectbillingtype_pkey_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        billingtype: varchar({ length: 50 }).notNull(),
        activeflag: boolean(),
        comtenantid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_datprojectbilltype_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_datprojectbilltype_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_datprojectbilltype_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_datprojectbilltype_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datprojectbilltype_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_datprojectbilltype_modifiedcomuserid",
        }),
    ]
);

export const datreportmasterInE360 = e360.table(
    "datreportmaster",
    {
        reportid: integer()
            .default(sql`nextval('datreportmaster_reportid_seq'::regclass)`)
            .primaryKey()
            .notNull(),
        reportname: varchar({ length: 200 }),
        reporttype: varchar({ length: 1 }),
        datmenuid: integer(),
        comtenantid: integer(),
        notes: varchar({ length: 100 }),
    },
    (table) => [
        index("indx_datreportmaster_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_datreportmaster_comtenantid",
        }),
        foreignKey({
            columns: [table.datmenuid],
            foreignColumns: [datmenusInE360.datmenuid],
            name: "fk_datreportmaster_datmenuid",
        }),
    ]
);

export const datstatusmasterInE360 = e360.table("datstatusmaster", {
    statusid: integer()
        .default(sql`nextval('datstatusmaster_statusid_seq'::regclass)`)
        .primaryKey()
        .notNull(),
    statusname: varchar({ length: 50 }).notNull(),
    comtenantid: integer().notNull(),
    statustype: char({ length: 1 }),
    isactiveflag: boolean().notNull(),
    createdtimestamp: timestamp({ mode: "string" }).notNull(),
    createdcomuserid: smallint().notNull(),
    modifiedtimestamp: timestamp({ mode: "string" }),
    modifiedcomuserid: smallint(),
    notes: varchar({ length: 100 }),
    statuscode: varchar({ length: 20 }),
});

export const documentserialnoInE360 = e360.table(
    "documentserialno",
    {
        documentserialnoid: serial().primaryKey().notNull(),
        documentserialnosettingid: integer().notNull(),
        documenttype: varchar({ length: 100 }).notNull(),
        companyid: integer(),
        documenttypecode: varchar({ length: 20 }),
        sequenceno: varchar({ length: 20 }),
        prefix: varchar({ length: 30 }),
        serialno: varchar({ length: 30 }),
        comtenantid: integer(),
    },
    (table) => [
        foreignKey({
            columns: [table.documentserialnosettingid],
            foreignColumns: [documentserialnosettingInE360.documentserialnosettingid],
            name: "fk_documentserialno_documentserialnosettingid",
        }),
    ]
);

export const profitablityconfigurationInE360 = e360.table(
    "profitablityconfiguration",
    {
        profitablityconfiguration: serial().primaryKey().notNull(),
        comtenantid: integer(),
        montlyworkingdays: integer(),
        weeklyworkingdays: integer(),
        workinghoursperday: numeric({ precision: 9, scale: 2 }),
    },
    (table) => [
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_profitablityconfiguration_comtenantid",
        }),
    ]
);

export const timecategorymasterInE360 = e360.table(
    "timecategorymaster",
    {
        timecategorymasterid: serial().primaryKey().notNull(),
        timecategory: varchar({ length: 250 }),
        comtenantid: integer().notNull(),
        companyid: integer().notNull(),
        isactiveflag: boolean().notNull(),
        createdtimestamp: timestamp({ mode: "string" }).notNull(),
        createdcomuserid: smallint().notNull(),
        modifiedtimestamp: timestamp({ mode: "string" }),
        modifiedcomuserid: smallint(),
        notes: varchar({ length: 100 }),
        isdefault: boolean(),
    },
    (table) => [
        index("indx_timecategorymaster_modifiedcomuserid").using("btree", table.modifiedcomuserid.asc().nullsLast().op("int2_ops")),
        index("indx_timecategorymasterid_companyid").using("btree", table.companyid.asc().nullsLast().op("int4_ops")),
        index("indx_timecategorymasterid_comtenantid").using("btree", table.comtenantid.asc().nullsLast().op("int4_ops")),
        index("indx_timecategorymasterid_createdcomuserid").using("btree", table.createdcomuserid.asc().nullsLast().op("int2_ops")),
        foreignKey({
            columns: [table.companyid],
            foreignColumns: [companymasterInE360.companyid],
            name: "fk_timecategorymaster_companyid",
        }),
        foreignKey({
            columns: [table.comtenantid],
            foreignColumns: [tenantmasterInE360.comtenantid],
            name: "fk_timecategorymaster_comtenantid",
        }),
        foreignKey({
            columns: [table.createdcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_timecategorymaster_createdcomuserid",
        }),
        foreignKey({
            columns: [table.modifiedcomuserid],
            foreignColumns: [usermasterInE360.comuserid],
            name: "fk_timecategorymaster_modifiedcomuserid",
        }),
    ]
);
