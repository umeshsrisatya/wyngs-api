-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE SCHEMA "e360";
--> statement-breakpoint
CREATE SEQUENCE "e360"."additionaldataforsapintegration_additionaldataid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."addresstypemaster_addresstypemaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 2 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."bandmaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 21 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."bugroupmaster_businessunitgroup_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 7 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."bumaster_businessunit_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 7 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."citymaster_comcity_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 41 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."companycontacts_companycontactpersons_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."companymaster_company_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 7 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."comuserprojectmapping_comuserprojectmappingid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."costcentermaster_costcenter_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."countrymaster_comcountry_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 12 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."customercontacts_customercontactpersons_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 87 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."customerdocuments_customerdocumentattachments_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 7 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."customergroupcontacts_customergroupcontactpersons_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."customergroupdocuments_customergroupdocumentattachments_pkey_se" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."customergroupmaster_customergroup_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 82 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."customermaster_customer_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 110 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."custrate_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 251 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."custrole_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 186 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."customersubscription_customersubscriptionid_seq1" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datcourse_datcoursemaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 46 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datcurrency_datcomcurrency_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 4 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."dateducation_dateducationmaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 5 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."exchangerate_ptask_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datgender_datcomgender_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 3 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datlanguage_datcomlanguage_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datmenupermission_datmenupermissionid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datmenus_datmenuid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datmodule_datmoduleid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datmodulealias_datmodulealiasid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datprojectbilltype_datprojectbillingtype_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 3 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datreportmaster_reportid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 4 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datspecialisation_datspecialisation_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 987 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datstatusmaster_statusid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 12 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datsubscriptionpackage_datsubscriptionpackageid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 3 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datsubscriptionpackagehistory_datsubscriptionpackagehistory_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datsubscriptionpackagemodule_datsubscriptionpackagemoduleid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 25 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datsubscriptionpackagemoduleh_datsubscriptionpackagemoduleh_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."datusertype_datusertype_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 5 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."deliverymodemaster_deliverymodemaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."deliveryrolemaster_deliveryroleid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 66 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."demandmaster_demandid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."demandroledetail_demandroledetailid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."demandroleresponsibilities_demandroleresponsibilitiesid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."demandskills_demandskillid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."departmentmaster_department_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 27 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."designationmaster_designationmaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 102 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."roleskillmap_rs_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."documenttypemaster_documenttypemaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 5 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."dummytest_dummytestid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 10 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."expertise_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 10 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."forgotpassword_forgotpassword_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."forgotpasswordlink_forgotpasswordlinkid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."holidaymaster_holidaymaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."industrymaster_industryid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 10 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."levelmaster_levelmaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 6 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."locationmaster_comlocation_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 4 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."nationalitymaster_nationality_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."opportunity_opportunity_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."orgcostrate_orgcostrateid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 4 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."overheadmaster_overheadmaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 9 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."productmaster_productmaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 6 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectactivity_projectactivity_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 139 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectactivityversion_projectactivityversionid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectattribute_id_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectbudget_projectbudgetid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 2 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectbudgetdetails_projectbudgetdetailid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectbudgetversion_projectbudgetversionid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectcontact_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 312 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectdocuments_projectdocumentattachments_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projecteffort_peffort_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 153 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projecteffort_peffortdetails_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 3140 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectestimation_estimation_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectestimationdetails_estimationdet_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectexpense_pexp_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectholidays_projectholidaymaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectmaster_project_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 246 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectmiles_ptask_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 14 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectplanversion_projectplanversionid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectproductmapping_projectproductmappingid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 16 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectprofitability_projectprofitabilityid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectrevenue_projrevid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."proleid_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 247 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."proletask_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1196 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectroleversionid_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projectstaff_projectstaff_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 304 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projecttasks_ptask_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 204 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."projecttypemaster_projecttype_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 9 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."regionmaster_comregion_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 15 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."roleid_roleid_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."rolemaster_roleid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 8 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."rolemenupermissions_rolemenupermissionsid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 58 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."rolemenus_rolemenuid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 48 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."roleusermapping_roleusermappingid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 353 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."sapuserworkassignment_sapuserworkassignmentid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."skillareamaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 14 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."skillmaster_skillmaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 27 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."slgroupmaster_servicelinegroup_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 8 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."slmaster_serviceline_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 14 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."sourcemaster_sourcemaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 10 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."staffcostrate_ucr_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 4 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."statemaster_comstate_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 27 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."subscriptionpackagemodule_subscriptionpackagemenuid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."taskgroupmaster_taskgroupmaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 54 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."taskmaster_taskmaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 170 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."tasktypemaster_tasktypemaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 3 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."techgroup_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 7 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."technologymaster_technologymaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 35 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."tenantcontacts_tenantcontactpersons_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."tenantemailidconfiguration_tenantemailidconfigurationid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 2 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."tenantsubscription_tenantsubscriptionid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."tenantsubscriptionhistory_tenantsubscriptionhistoryid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."timetypemaster_timetypemaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 2 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."useraddress_comuseraddress_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."usercertification_comusercertification_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 165 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."usereducation_comusereducation_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 678 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."usermaster_comuser_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1323 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."userpayroll_proll_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."userpreference_comuserpreference_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."userprevexperience_comuserprevexperience_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 461 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."userrightsmenupermissions_userrightsmenupermissionsid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 2 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."userskill_userskillid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 80 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."userskillattributes_userskillattributesid_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 143 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."userskilltechnology_comuserskilltechnology_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."weeklyholidaymaster_weeklyholidayconfig_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."workertypemaster_workertypemaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 2 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."workforcegroupmaster_wfgid_pkey" INCREMENT BY 1 MINVALUE 1 MAXVALUE 999999999999 START WITH 3 CACHE 1;--> statement-breakpoint
CREATE SEQUENCE "e360"."workmodemaster_workmodemaster_pkey_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 3 CACHE 1;--> statement-breakpoint
CREATE TABLE "e360"."additionaldataforsapintegration" (
	"additionaldataid" serial PRIMARY KEY NOT NULL,
	"createuser" integer,
	"tenantid" integer,
	"customershortcode" varchar,
	"projectactivityshortcode" varchar,
	"projectshortcode" varchar,
	"projectlocation" integer,
	"servicelineid" integer,
	"projecttypeid" integer,
	"datprojectbillingtypeid" integer,
	"billtoclient" boolean,
	"clientapproval" boolean,
	"estdeffort" numeric,
	"taskgroupid" integer,
	"tasktypeid" integer,
	"datusertype" integer,
	"businessunitgroupid" integer,
	"levelid" integer,
	"datcurrencyid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."alldates" (
	"date1" date
);
--> statement-breakpoint
CREATE TABLE "e360"."allocation_summary" (
	"id" serial PRIMARY KEY NOT NULL,
	"userid" integer NOT NULL,
	"month_year" text NOT NULL,
	"total_allocation" double precision DEFAULT 0 NOT NULL,
	"total_utilization" double precision DEFAULT 0 NOT NULL,
	"ad1" double precision,
	"ud1" double precision,
	"ad2" double precision,
	"ud2" double precision,
	"ad3" double precision,
	"ud3" double precision,
	"ad4" double precision,
	"ud4" double precision,
	"ad5" double precision,
	"ud5" double precision,
	"ad6" double precision,
	"ud6" double precision,
	"ad7" double precision,
	"ud7" double precision,
	"ad8" double precision,
	"ud8" double precision,
	"ad9" double precision,
	"ud9" double precision,
	"ad10" double precision,
	"ud10" double precision,
	"ad11" double precision,
	"ud11" double precision,
	"ad12" double precision,
	"ud12" double precision,
	"ad13" double precision,
	"ud13" double precision,
	"ad14" double precision,
	"ud14" double precision,
	"ad15" double precision,
	"ud15" double precision,
	"ad16" double precision,
	"ud16" double precision,
	"ad17" double precision,
	"ud17" double precision,
	"ad18" double precision,
	"ud18" double precision,
	"ad19" double precision,
	"ud19" double precision,
	"ad20" double precision,
	"ud20" double precision,
	"ad21" double precision,
	"ud21" double precision,
	"ad22" double precision,
	"ud22" double precision,
	"ad23" double precision,
	"ud23" double precision,
	"ad24" double precision,
	"ud24" double precision,
	"ad25" double precision,
	"ud25" double precision,
	"ad26" double precision,
	"ud26" double precision,
	"ad27" double precision,
	"ud27" double precision,
	"ad28" double precision,
	"ud28" double precision,
	"ad29" double precision,
	"ud29" double precision,
	"ad30" double precision,
	"ud30" double precision,
	"ad31" double precision,
	"ud31" double precision,
	"comtenantid" integer,
	"isactiveflag" boolean,
	"createdtimestamp" timestamp,
	CONSTRAINT "unique_userid_month" UNIQUE("userid","month_year")
);
--> statement-breakpoint
CREATE TABLE "e360"."bandmaster" (
	"bandmasterid" integer PRIMARY KEY DEFAULT nextval('bandmaster_pkey_seq'::regclass) NOT NULL,
	"bandname" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"slno" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."auth_user_user_permissions" (
	"id" bigint PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "e360"."auth_user_user_permissions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"user_id" integer NOT NULL,
	"permission_id" integer NOT NULL,
	CONSTRAINT "auth_user_user_permissions_user_id_permission_id_14a6b632_uniq" UNIQUE("user_id","permission_id")
);
--> statement-breakpoint
CREATE TABLE "e360"."autoemailreceiverdetail" (
	"autoemailreceiverdetailid" serial PRIMARY KEY NOT NULL,
	"reportname" varchar(250),
	"receiveremailid" varchar(250),
	"isactive" boolean,
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."autotimesheetcronjobexecutionlog" (
	"autotimesheetcronjobexecutionlogid" serial PRIMARY KEY NOT NULL,
	"comtenantid" integer,
	"cronjobname" varchar(100),
	"executedtime" timestamp
);
--> statement-breakpoint
CREATE TABLE "e360"."auth_group" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "e360"."auth_group_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(150) NOT NULL,
	CONSTRAINT "auth_group_name_key" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "e360"."auth_user_groups" (
	"id" bigint PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "e360"."auth_user_groups_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"user_id" integer NOT NULL,
	"group_id" integer NOT NULL,
	CONSTRAINT "auth_user_groups_user_id_group_id_94350c0c_uniq" UNIQUE("user_id","group_id")
);
--> statement-breakpoint
CREATE TABLE "e360"."auth_user" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "e360"."auth_user_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"password" varchar(128) NOT NULL,
	"last_login" timestamp with time zone,
	"is_superuser" boolean NOT NULL,
	"username" varchar(150) NOT NULL,
	"first_name" varchar(150) NOT NULL,
	"last_name" varchar(150) NOT NULL,
	"email" varchar(254) NOT NULL,
	"is_staff" boolean NOT NULL,
	"is_active" boolean NOT NULL,
	"date_joined" timestamp with time zone NOT NULL,
	CONSTRAINT "auth_user_username_key" UNIQUE("username")
);
--> statement-breakpoint
CREATE TABLE "e360"."addresstypemaster" (
	"addresstypeid" integer PRIMARY KEY DEFAULT nextval('addresstypemaster_addresstypemaster_pkey_seq'::regclass) NOT NULL,
	"addresstype" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."announcements" (
	"announcementid" serial PRIMARY KEY NOT NULL,
	"announcementtext" varchar NOT NULL,
	"comtenantid" integer,
	"announcementlink" varchar,
	"sequence" integer,
	"expirydate" date,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."bugroupmaster" (
	"businessunitgroupid" integer PRIMARY KEY DEFAULT nextval('bugroupmaster_businessunitgroup_pkey_seq'::regclass) NOT NULL,
	"businessunitgroupname" varchar(50) NOT NULL,
	"groupheadid" integer,
	"groupcontactpersonid" integer,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"businessunitgroupheadcomuserid" bigint
);
--> statement-breakpoint
CREATE TABLE "e360"."bumaster" (
	"businessunitid" integer PRIMARY KEY DEFAULT nextval('bumaster_businessunit_pkey_seq'::regclass) NOT NULL,
	"businessunitgroupid" integer NOT NULL,
	"businessunitname" varchar(50) NOT NULL,
	"businessunitheadid" integer,
	"businessunitcontactpersonid" integer,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"code" varchar(20)
);
--> statement-breakpoint
CREATE TABLE "e360"."companyholidays" (
	"companyholidaysid" serial PRIMARY KEY NOT NULL,
	"companyid" integer NOT NULL,
	"holiday" date,
	"reason" varchar(100),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."companyweekdays" (
	"companyweekdaysid" serial PRIMARY KEY NOT NULL,
	"companyid" integer NOT NULL,
	"sunholiday" boolean,
	"monholiday" boolean,
	"tueholiday" boolean,
	"wedholiday" boolean,
	"thuholiday" boolean,
	"friholiday" boolean,
	"satholiday" boolean,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"noofhoursperday" numeric(9, 2),
	"basecurrencyid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."companymaster" (
	"companyid" integer PRIMARY KEY DEFAULT nextval('companymaster_company_pkey_seq'::regclass) NOT NULL,
	"comtenantid" integer NOT NULL,
	"companyname" varchar(250) NOT NULL,
	"parentcompanyname" varchar(250),
	"shortname" varchar(20),
	"companycode" varchar(20),
	"address_street" varchar(50),
	"address_pobox" varchar(50),
	"address3" varchar(50),
	"pincode" varchar(50),
	"phoneno" varchar(50),
	"comcityid" integer,
	"comstateid" smallint,
	"comcountryid" smallint,
	"region" varchar(250),
	"mobile1" varchar(50),
	"fax" varchar(50),
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"isdeleteflag" boolean,
	"deletedtimestamp" timestamp,
	"deletedcomuserid" smallint,
	"defaultcomcurrencyid" smallint NOT NULL,
	"notes" varchar(100),
	"incorporationdate" date,
	"financialyear" varchar(15)
);
--> statement-breakpoint
CREATE TABLE "e360"."comuserprojectmapping" (
	"comuserprojectmappingid" integer PRIMARY KEY DEFAULT nextval('comuserprojectmapping_comuserprojectmappingid_seq'::regclass) NOT NULL,
	"comuserid" integer NOT NULL,
	"comprojectid" integer NOT NULL,
	"comtenantid" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "e360"."cronjobconfiguration" (
	"cronjobconfiguration" serial PRIMARY KEY NOT NULL,
	"comtenantid" integer,
	"cronjobname" varchar(100),
	"modifiedcomuserid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."cronjobexecutionlog" (
	"cronjobexecutionlogid" serial PRIMARY KEY NOT NULL,
	"comtenantid" integer,
	"cronjobname" varchar(100),
	"executedtime" timestamp
);
--> statement-breakpoint
CREATE TABLE "e360"."customerdocuments" (
	"customerdocumentattachmentsid" integer PRIMARY KEY DEFAULT nextval('customerdocuments_customerdocumentattachments_pkey_seq'::regclass) NOT NULL,
	"customerid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"documenttype" integer NOT NULL,
	"filename" varchar(500) NOT NULL,
	"filepath" varchar(200) NOT NULL,
	"versionno" varchar(25),
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"isdeletedflag" boolean,
	"deletedcomuserid" smallint,
	"deletedtimestamp" timestamp,
	"notes" varchar(100),
	"fileformat" varchar(500),
	"status" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."costcentermaster" (
	"costcenterid" integer PRIMARY KEY DEFAULT nextval('costcentermaster_costcenter_pkey_seq'::regclass) NOT NULL,
	"comtenantid" integer NOT NULL,
	"costcentername" varchar(250) NOT NULL,
	"costcentercode" varchar(20),
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."countrymaster" (
	"comcountryid" integer PRIMARY KEY DEFAULT nextval('countrymaster_comcountry_pkey_seq'::regclass) NOT NULL,
	"comregionid" integer NOT NULL,
	"countryname" varchar(100) NOT NULL,
	"countrycode" varchar(100),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."customercontacts" (
	"customercontactpersonid" integer PRIMARY KEY DEFAULT nextval('customercontacts_customercontactpersons_pkey_seq'::regclass) NOT NULL,
	"customerid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"contactpersonname" varchar(250) NOT NULL,
	"designation" varchar(250),
	"phoneno" varchar(50),
	"email" varchar(500) NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"contacttype" varchar(500),
	"isprimary" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."customerholidays" (
	"customerholidaysid" serial PRIMARY KEY NOT NULL,
	"customerid" integer NOT NULL,
	"holiday" date,
	"reason" varchar(100),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."customergroupcontacts" (
	"customergroupcontactpersonid" integer PRIMARY KEY DEFAULT nextval('customergroupcontacts_customergroupcontactpersons_pkey_seq'::regclass) NOT NULL,
	"customergroupid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"contactpersonname" varchar(250) NOT NULL,
	"designation" varchar(250),
	"phoneno" varchar(50),
	"email" varchar(500) NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"contacttype" varchar(500),
	"isprimary" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."dateducation" (
	"dateducationmasterid" integer PRIMARY KEY DEFAULT nextval('dateducation_dateducationmaster_pkey_seq'::regclass) NOT NULL,
	"educationmaster" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."customermaster" (
	"customerid" integer PRIMARY KEY DEFAULT nextval('customermaster_customer_pkey_seq'::regclass) NOT NULL,
	"comtenantid" integer NOT NULL,
	"customername" varchar(250) NOT NULL,
	"customergroupid" integer NOT NULL,
	"shortname" varchar(20),
	"address_street" varchar(250),
	"address_pobox" varchar(250),
	"address3" varchar(200),
	"pincode" varchar(50),
	"phoneno" varchar(50),
	"comcityid" integer,
	"comstateid" smallint,
	"comcountryid" smallint,
	"mobile1" varchar(50),
	"fax" varchar(50),
	"source" varchar(50),
	"customeridinsourcesystem" varchar(100),
	"accountmanagerid" integer,
	"contactpersonid" integer,
	"defaultcomcurrencyid" smallint,
	"email" varchar,
	"payment_days" integer,
	"gst_type" varchar,
	"gst_number" varchar,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"comregionid" integer,
	"industryid" integer,
	"companyid" integer,
	"businessunitid" integer,
	"customercode" varchar(20),
	"is_sapcustomer" boolean,
	"financialyear" varchar(15)
);
--> statement-breakpoint
CREATE TABLE "e360"."customergroupmaster" (
	"customergroupid" integer PRIMARY KEY DEFAULT nextval('customergroupmaster_customergroup_pkey_seq'::regclass) NOT NULL,
	"comtenantid" integer NOT NULL,
	"customergroupname" varchar(250) NOT NULL,
	"accountmanagerid" integer,
	"contactpersonid" integer,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."customergroupdocuments" (
	"customergroupdocumentattachmentsid" integer PRIMARY KEY DEFAULT nextval('customergroupdocuments_customergroupdocumentattachments_pkey_se'::regclass) NOT NULL,
	"customergroupid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"documenttype" integer NOT NULL,
	"filename" varchar(500) NOT NULL,
	"filepath" varchar(200) NOT NULL,
	"versionno" varchar(25),
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"isdeletedflag" boolean,
	"deletedcomuserid" smallint,
	"deletedtimestamp" timestamp,
	"notes" varchar(100),
	"fileformat" varchar(500),
	"status" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."customerrates" (
	"custrateid" integer PRIMARY KEY DEFAULT nextval('custrate_pkey_seq'::regclass) NOT NULL,
	"croleid" integer,
	"levelid" integer NOT NULL,
	"bill_hr" double precision NOT NULL,
	"comcurrencyid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"comtenantid" integer,
	"customerid" integer,
	"locationid" integer,
	"isonsite" boolean,
	"rateunit" integer,
	"countryid" integer,
	"skillareamasterid" integer,
	"techgroupid" integer,
	"min_bandid" integer,
	"max_bandid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."customerroles" (
	"custroleid" integer PRIMARY KEY DEFAULT nextval('custrole_pkey_seq'::regclass) NOT NULL,
	"customerid" integer NOT NULL,
	"rolename" varchar(100),
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"comtenantid" integer,
	"deliveryroleid" integer,
	"datprojectbillingtypeid" integer,
	"poreference" varchar(200)
);
--> statement-breakpoint
CREATE TABLE "e360"."customersubscription" (
	"customersubscriptionid" integer PRIMARY KEY DEFAULT nextval('customersubscription_customersubscriptionid_seq1'::regclass) NOT NULL,
	"comtenantid" integer NOT NULL,
	"datsubscriptionpackageid" integer NOT NULL,
	"subscriptionfromdate" date,
	"subscriptiontodate" date,
	"graceperiodindays" smallint,
	"istrialaccount" boolean,
	"activeflag" boolean,
	"isadvancesubscriptionrenew" boolean DEFAULT false NOT NULL,
	"createdtimestamp" timestamp,
	"createdcomuserid" smallint,
	"deletedcomuserid" smallint,
	"deletedtimestamp" timestamp
);
--> statement-breakpoint
CREATE TABLE "e360"."customerweekdays" (
	"customerweekdaysid" serial PRIMARY KEY NOT NULL,
	"customerid" integer NOT NULL,
	"sunholiday" boolean,
	"monholiday" boolean,
	"tueholiday" boolean,
	"wedholiday" boolean,
	"thuholiday" boolean,
	"friholiday" boolean,
	"satholiday" boolean,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"noofhoursperday" numeric(9, 2)
);
--> statement-breakpoint
CREATE TABLE "e360"."datcourse" (
	"datcoursemasterid" integer PRIMARY KEY DEFAULT nextval('datcourse_datcoursemaster_pkey_seq'::regclass) NOT NULL,
	"dateducationmasterid" integer NOT NULL,
	"coursemaster" varchar(500) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."datexchangerate" (
	"exchangerateid" integer PRIMARY KEY DEFAULT nextval('exchangerate_ptask_pkey_seq'::regclass) NOT NULL,
	"currencyfrom" integer NOT NULL,
	"currencyto" integer NOT NULL,
	"conversionrate" numeric(10, 4) NOT NULL,
	"validfrom" date,
	"validto" date,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."datgender" (
	"datcomgenderid" smallint PRIMARY KEY DEFAULT nextval('datgender_datcomgender_pkey_seq'::regclass) NOT NULL,
	"gender" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."datmodule" (
	"datmoduleid" integer PRIMARY KEY DEFAULT nextval('datmodule_datmoduleid_seq'::regclass) NOT NULL,
	"datmodulealiasid" integer NOT NULL,
	"modulename" varchar(50),
	"parentmoduleid" integer,
	"modulecode" varchar(10),
	"displayorder" integer,
	"activeflag" boolean,
	"comtenantid" integer NOT NULL,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."datmenupermission" (
	"datmenupermissionid" integer PRIMARY KEY DEFAULT nextval('datmenupermission_datmenupermissionid_seq'::regclass) NOT NULL,
	"datmenuid" integer NOT NULL,
	"permissionname" varchar(150),
	"activeflag" boolean,
	"comtenantid" integer NOT NULL,
	"notes" varchar(100),
	"displayorder" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."datmenus" (
	"datmenuid" integer PRIMARY KEY DEFAULT nextval('datmenus_datmenuid_seq'::regclass) NOT NULL,
	"datmoduleid" integer NOT NULL,
	"menuname" varchar(150),
	"tcode" varchar(50),
	"relativepage" varchar,
	"activeflag" boolean,
	"displayorder" integer,
	"comtenantid" integer NOT NULL,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."datmodulealias" (
	"datmodulealiasid" smallint PRIMARY KEY DEFAULT nextval('datmodulealias_datmodulealiasid_seq'::regclass) NOT NULL,
	"modulealiasname" varchar(50),
	"code" varchar(10),
	"activeflag" boolean,
	"comtenantid" integer NOT NULL,
	"notes" varchar(100),
	"displayorder" smallint
);
--> statement-breakpoint
CREATE TABLE "e360"."datspecialisation" (
	"datspecialisationid" integer PRIMARY KEY DEFAULT nextval('datspecialisation_datspecialisation_pkey_seq'::regclass) NOT NULL,
	"datcoursemasterid" integer NOT NULL,
	"dateducationmasterid" integer NOT NULL,
	"specialisation" varchar(500) NOT NULL,
	"activeflag" boolean NOT NULL,
	"comtenantid" integer NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."datsubscriptionpackagehistory" (
	"datsubscriptionpackagehistoryid" integer PRIMARY KEY DEFAULT nextval('datsubscriptionpackagehistory_datsubscriptionpackagehistory_seq'::regclass) NOT NULL,
	"datsubscriptionpackageid" integer,
	"packagename" varchar(250),
	"activeflag" boolean,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"deletedcomuserid" smallint,
	"deletedtimestamp" timestamp,
	"deletedflag" boolean,
	"noofusers" integer,
	"priceperuser" numeric,
	"currencyid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."datsubscriptionpackagemodulehistory" (
	"datsubscriptionpackagemodulehsitoryid" integer PRIMARY KEY DEFAULT nextval('datsubscriptionpackagemoduleh_datsubscriptionpackagemoduleh_seq'::regclass) NOT NULL,
	"datsubscriptionpackagehistoryid" integer,
	"datsubscriptionpackagemoduleid" integer,
	"datsubscriptionpackageid" integer,
	"datmoduleid" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "e360"."datsubscriptionpackage" (
	"datsubscriptionpackageid" integer PRIMARY KEY DEFAULT nextval('datsubscriptionpackage_datsubscriptionpackageid_seq'::regclass) NOT NULL,
	"packagename" varchar(250),
	"activeflag" boolean,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"deletedcomuserid" smallint,
	"deletedtimestamp" timestamp,
	"deletedflag" boolean,
	"noofusers" integer,
	"priceperuser" numeric,
	"currencyid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."demandmatch" (
	"demandmatchid" serial PRIMARY KEY NOT NULL,
	"demandid" integer NOT NULL,
	"userid" integer NOT NULL,
	"matchscore" integer,
	"matchstatus" integer,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."deliveryrolemaster" (
	"deliveryroleid" integer PRIMARY KEY DEFAULT nextval('deliveryrolemaster_deliveryroleid_seq'::regclass) NOT NULL,
	"rolename" varchar(500),
	"activeflag" boolean,
	"comtenantid" integer NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."demandroledetail" (
	"demandroledetailid" integer PRIMARY KEY DEFAULT nextval('demandroledetail_demandroledetailid_seq'::regclass) NOT NULL,
	"demandid" integer NOT NULL,
	"jobtitle" varchar(100),
	"experienceinyear" integer,
	"rolesummary" varchar(1000),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" integer NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" integer,
	"min_bandid" integer,
	"max_bandid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."demandmatchconfiguration" (
	"demandmatchconfigurationid" serial PRIMARY KEY NOT NULL,
	"comtenantid" integer,
	"parametername" varchar(500),
	"conditions" varchar(500),
	"isactiveflag" boolean,
	"notes" varchar(500),
	"createdtimestamp" timestamp,
	"createdcomuserid" smallint,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"emptype_usage" varchar,
	"emptype_weightage" integer,
	"workforcegroup_usage" varchar,
	"workforcegroup_weightage" integer,
	"serviceline_usage" varchar,
	"serviceline_weightage" integer,
	"allocation_usage" varchar,
	"allocation_weightage" integer,
	"workmode_usage" varchar,
	"workmode_weightage" integer,
	"location_usage" varchar,
	"location_weightage" integer,
	"minband_usage" varchar,
	"minband_weightage" integer,
	"maxband_usage" varchar,
	"maxband_weightage" integer,
	"skill_usage" varchar,
	"skill_weightage" integer,
	"technology_usage" varchar,
	"technology_weightage" integer,
	"domain_usage" varchar,
	"domain_weightage" integer,
	"minexp_usage" varchar,
	"minexp_weightage" integer,
	"maxexp_usage" varchar,
	"maxexp_weightage" integer,
	"includenoticeperiod" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."datsubscriptionpackagemodule" (
	"datsubscriptionpackagemoduleid" integer PRIMARY KEY DEFAULT nextval('datsubscriptionpackagemodule_datsubscriptionpackagemoduleid_seq'::regclass) NOT NULL,
	"datsubscriptionpackageid" integer,
	"datmoduleid" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "e360"."datusertype" (
	"datusertypeid" integer PRIMARY KEY DEFAULT nextval('datusertype_datusertype_pkey_seq'::regclass) NOT NULL,
	"usertype" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."deliverymodemaster" (
	"deliverymodemasterid" integer PRIMARY KEY DEFAULT nextval('deliverymodemaster_deliverymodemaster_pkey_seq'::regclass) NOT NULL,
	"deliverymode" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."demandmaster" (
	"demandid" integer PRIMARY KEY DEFAULT nextval('demandmaster_demandid_seq'::regclass) NOT NULL,
	"demandcode" varchar(20) NOT NULL,
	"workertypeid" integer NOT NULL,
	"companyid" integer NOT NULL,
	"requesttype" varchar(1) NOT NULL,
	"businessunitid" integer,
	"servicelineid" integer,
	"startdate" date NOT NULL,
	"opportunityid" integer,
	"projectid" integer,
	"departmentid" integer,
	"billrate" numeric(13, 3),
	"datcomcurrencyid" integer,
	"billingunit" integer,
	"allocation" numeric NOT NULL,
	"workmodeid" integer NOT NULL,
	"priority" varchar(1) NOT NULL,
	"locationid" integer,
	"assignedto" integer,
	"assigneddate" date,
	"demandstatusid" integer,
	"cityid" integer NOT NULL,
	"is_billable" boolean NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" integer NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" integer,
	"notes" varchar(100),
	"peopleno" integer,
	"isonsite" boolean,
	"workforcegroupid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."demandmatchconfigincludestatus" (
	"demandmatchconfigincludestatusid" serial PRIMARY KEY NOT NULL,
	"demandmatchconfigurationid" integer,
	"includestatusid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."demandmatchconfigincludeusertype" (
	"demandmatchconfigdatusertypeid" serial PRIMARY KEY NOT NULL,
	"demandmatchconfigurationid" integer,
	"datusertypeid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."demandmatchdetails" (
	"demandmatchdetailsid" serial PRIMARY KEY NOT NULL,
	"demandmatchid" integer NOT NULL,
	"demandid" integer NOT NULL,
	"userid" integer,
	"matchstatus" integer,
	"statusstartdate" timestamp,
	"statusenddate" timestamp,
	"approverid" integer,
	"approvalstatus" integer,
	"approveddate" timestamp,
	"approvercomments" varchar(1000),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" integer NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" integer,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."documenttypemaster" (
	"documenttypeid" integer PRIMARY KEY DEFAULT nextval('documenttypemaster_documenttypemaster_pkey_seq'::regclass) NOT NULL,
	"documenttype" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"type" varchar(1)
);
--> statement-breakpoint
CREATE TABLE "e360"."django_migrations" (
	"id" bigint PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "e360"."django_migrations_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"app" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"applied" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "e360"."django_session" (
	"session_key" varchar(40) PRIMARY KEY NOT NULL,
	"session_data" text NOT NULL,
	"expire_date" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "e360"."dummytest" (
	"dummytestid" integer PRIMARY KEY DEFAULT nextval('dummytest_dummytestid_seq'::regclass) NOT NULL,
	"testusername" varchar(50),
	"notes" varchar(50)
);
--> statement-breakpoint
CREATE TABLE "e360"."emaildraft" (
	"emaildraftid" serial PRIMARY KEY NOT NULL,
	"emailcategory" varchar,
	"senderemailid" varchar(255),
	"recipientemailid" varchar(255),
	"ccemailid" varchar(255),
	"subject" text,
	"body" text,
	"comtenantid" integer,
	"created" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "e360"."emailsend" (
	"emailsendid" serial PRIMARY KEY NOT NULL,
	"emailcategory" varchar,
	"emaildraftid" integer,
	"senderemailid" varchar(255),
	"recipientemailid" varchar(255),
	"ccemailid" varchar(255),
	"subject" text,
	"body" text,
	"comtenantid" integer,
	"sendtimestamp" timestamp,
	"createdtimestamp" timestamp
);
--> statement-breakpoint
CREATE TABLE "e360"."expertisemaster" (
	"expertiseid" integer PRIMARY KEY DEFAULT nextval('expertise_pkey_seq'::regclass) NOT NULL,
	"expertise" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"parentid" integer,
	"parenttype" varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "e360"."django_admin_log" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "e360"."django_admin_log_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"action_time" timestamp with time zone NOT NULL,
	"object_id" text,
	"object_repr" varchar(200) NOT NULL,
	"action_flag" smallint NOT NULL,
	"change_message" text NOT NULL,
	"content_type_id" integer,
	"user_id" integer NOT NULL,
	CONSTRAINT "django_admin_log_action_flag_check" CHECK (action_flag >= 0)
);
--> statement-breakpoint
CREATE TABLE "e360"."departmentmaster" (
	"departmentid" integer PRIMARY KEY DEFAULT nextval('departmentmaster_department_pkey_seq'::regclass) NOT NULL,
	"department" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"costcenter_id" integer,
	"departmentheadid" integer,
	"departmentcode" varchar(20)
);
--> statement-breakpoint
CREATE TABLE "e360"."demandroleresponsibilities" (
	"demandroleresponsibilitiesid" integer PRIMARY KEY DEFAULT nextval('demandroleresponsibilities_demandroleresponsibilitiesid_seq'::regclass) NOT NULL,
	"demandroledetailid" integer NOT NULL,
	"demandid" integer NOT NULL,
	"responsibilities" varchar(750)
);
--> statement-breakpoint
CREATE TABLE "e360"."demandskills" (
	"demandskillid" integer PRIMARY KEY DEFAULT nextval('demandskills_demandskillid_seq'::regclass) NOT NULL,
	"demandid" integer NOT NULL,
	"skillmasterid" integer NOT NULL,
	"technologymasterid" integer,
	"domainid" integer,
	"importance" smallint,
	"expertise" varchar(200),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint
);
--> statement-breakpoint
CREATE TABLE "e360"."designationmaster" (
	"designationmasterid" integer PRIMARY KEY DEFAULT nextval('designationmaster_designationmaster_pkey_seq'::regclass) NOT NULL,
	"designation" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."designationskillmap" (
	"roleskillid" integer PRIMARY KEY DEFAULT nextval('roleskillmap_rs_pkey_seq'::regclass) NOT NULL,
	"designationid" integer NOT NULL,
	"levelid" integer NOT NULL,
	"skillid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."documentserialnosetting" (
	"documentserialnosettingid" serial PRIMARY KEY NOT NULL,
	"documenttype" varchar(100) NOT NULL,
	"manualautostatus" varchar(1) NOT NULL,
	"documentprefix" varchar(7) NOT NULL,
	"comtenantid" integer,
	"categorycoderequiredflag" boolean,
	"grouprequiredflag" boolean,
	"companycoderequiredflag" boolean,
	"companyshortnamerequiredflag" boolean,
	"typecoderequiredflag" boolean,
	"leadingzero" smallint,
	"seperatorcharacter" varchar(1),
	"serialnogeneratecompanywiseortenantwise" varchar(1),
	"createdcomuserid" integer,
	"createddate" timestamp,
	"modifiedcomuserid" integer,
	"modifieddate" timestamp,
	"tenantidrequiredflag" boolean,
	"tenantcoderequiredflag" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."forgotpassword" (
	"forgotpasswordlinkid" integer PRIMARY KEY DEFAULT nextval('forgotpassword_forgotpassword_pkey_seq'::regclass) NOT NULL,
	"comuserid" integer NOT NULL,
	"passwordresetlink" varchar(500),
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."forgotpasswordlink" (
	"forgotpasswordlinkid" integer PRIMARY KEY DEFAULT nextval('forgotpasswordlink_forgotpasswordlinkid_seq'::regclass) NOT NULL,
	"comuserid" integer,
	"passwordresetlink" varchar(2500),
	"createddate" timestamp,
	"activeflag" boolean,
	"modifiedtimestamp" timestamp,
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."fppperccomplitioncalculationdata" (
	"fppperccomplitioncalculationdataid" bigserial PRIMARY KEY NOT NULL,
	"projectid" bigint,
	"comtenantid" integer,
	"projectroleid" bigint,
	"noofholydays" double precision,
	"overtime" double precision,
	"regular" double precision,
	"cumovertime" double precision,
	"cumholidays" double precision,
	"workingdaysperhours" double precision,
	"currprojecthours" numeric(18, 3),
	"prevmonthactualhours" numeric(18, 3),
	"curmonthactualhours" numeric(18, 3),
	"actualcurrprojecthours" numeric(18, 3),
	"plannedefforthours" numeric(18, 3),
	"totalactualplannedeffort" numeric(18, 3),
	"percofcompletion" numeric(18, 3),
	"prevmonthpercofcomplition" numeric(18, 3),
	"curmonthperccomplition" numeric(18, 3),
	"total_estimateamount" numeric(18, 3),
	"revenue" numeric(18, 3),
	"yearmonthid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."fpprevenueprocesseddata" (
	"fpprevenueprocesseddataid" serial PRIMARY KEY NOT NULL,
	"comtenantid" integer,
	"projectid" integer,
	"rolename" varchar,
	"projroleid" integer,
	"estdeffort" numeric(18, 3),
	"peopleno" integer,
	"allocation" numeric,
	"plannedeffort" numeric(18, 3),
	"currprojecthours" numeric,
	"salerate" numeric(18, 3),
	"rateunitid" integer,
	"timesheet" numeric(18, 3),
	"monthlyworkingdays" integer,
	"perc_against_total" numeric(18, 6),
	"weeklyworkinghours" numeric(18, 3),
	"revenue" numeric(18, 3),
	"totalrevenue" numeric(18, 3),
	"perc_of_complation" numeric(18, 6),
	"totalestdamount" numeric(18, 3),
	"yearid" integer,
	"monthid" integer,
	"basecurrencyid" integer,
	"datcurrencyid" integer,
	"oldrate" numeric,
	"exchangerate" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."nationalitymaster" (
	"nationalityid" smallint PRIMARY KEY DEFAULT nextval('nationalitymaster_nationality_pkey_seq'::regclass) NOT NULL,
	"nationality" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."miscetasktypeid" (
	"coalesce" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."holidaymaster" (
	"holidaymasterid" integer PRIMARY KEY DEFAULT nextval('holidaymaster_holidaymaster_pkey_seq'::regclass) NOT NULL,
	"companyid" integer NOT NULL,
	"locationid" integer NOT NULL,
	"holiday" date,
	"reason" varchar(100),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."output_json" (
	"json_build_object" json
);
--> statement-breakpoint
CREATE TABLE "e360"."profitabilitydetailsummary" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"comtenantid" integer,
	"method" varchar(2),
	"projectprofitabilityid" bigint,
	"datprojectbillingtypeid" bigint,
	"description" varchar(200),
	"projectid" bigint,
	"type" varchar(20),
	"projroleid" bigint,
	"amount_prevmonth" numeric(18, 3),
	"amount_curmonth" numeric(18, 3),
	"yearmonthid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."profitabilitymonthend" (
	"profitabilitymonthendid" serial PRIMARY KEY NOT NULL,
	"monthid" integer,
	"yearid" integer,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."levelmaster" (
	"levelmasterid" integer PRIMARY KEY DEFAULT nextval('levelmaster_levelmaster_pkey_seq'::regclass) NOT NULL,
	"levelname" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"leveltype" char(1),
	"min_exp" integer,
	"max_exp" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."locationmaster" (
	"comlocationid" integer PRIMARY KEY DEFAULT nextval('locationmaster_comlocation_pkey_seq'::regclass) NOT NULL,
	"comcityid" integer NOT NULL,
	"locationname" varchar(100) NOT NULL,
	"locationcode" varchar(100),
	"activeflag" boolean,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."opportunity" (
	"opportunityid" integer PRIMARY KEY DEFAULT nextval('opportunity_opportunity_pkey_seq'::regclass) NOT NULL,
	"opportunityname" varchar(500) NOT NULL,
	"opportunitycode" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"totalopportunityvalue" numeric(18, 3),
	"opportunitystatus" varchar(50) NOT NULL,
	"winprobabilitypercentage" numeric(6, 2),
	"salesmanagerid" integer,
	"sourceofopportunity" varchar(500),
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"customerid" integer,
	"datcomcurrencyid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."leavetypemaster" (
	"leavetypeid" serial PRIMARY KEY NOT NULL,
	"leavetypename" varchar(500),
	"islop" boolean,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."orgcostrate" (
	"orgcostrateid" integer PRIMARY KEY DEFAULT nextval('orgcostrate_orgcostrateid_seq'::regclass) NOT NULL,
	"comtenantid" integer NOT NULL,
	"companyid" integer NOT NULL,
	"designationid" integer,
	"bandid" integer,
	"cost" numeric(18, 3) NOT NULL,
	"comcurrencyid" integer NOT NULL,
	"unit" smallint NOT NULL,
	"startdate" date NOT NULL,
	"enddate" date NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"countryid" integer,
	"skillareamasterid" integer,
	"techgroupid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."overheadmaster" (
	"overheadmasterid" integer PRIMARY KEY DEFAULT nextval('overheadmaster_overheadmaster_pkey_seq'::regclass) NOT NULL,
	"overhead" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"costtype" varchar(1)
);
--> statement-breakpoint
CREATE TABLE "e360"."productmaster" (
	"productmasterid" integer PRIMARY KEY DEFAULT nextval('productmaster_productmaster_pkey_seq'::regclass) NOT NULL,
	"productname" varchar(50) NOT NULL,
	"technology" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."profitabilitydetails" (
	"profitabilitydetailsid" serial PRIMARY KEY NOT NULL,
	"type" varchar,
	"description" varchar,
	"amount" numeric,
	"yearid" integer,
	"monthid" integer,
	"userid" integer,
	"projectprofitabilityid" integer,
	"projroleid" integer,
	"overheadid" integer,
	"projectcurrencyid" integer,
	"basecurrencyid" integer,
	"exchangerate" numeric(12, 6),
	"orgcurrencyid" integer,
	"allocation" numeric(18, 3)
);
--> statement-breakpoint
CREATE TABLE "e360"."profitabilityprocessrequiredprojects" (
	"profitabilityprocessrequiredprojectid" serial PRIMARY KEY NOT NULL,
	"monthid" integer,
	"yearid" integer,
	"projectid" integer,
	"comtenantid" integer NOT NULL,
	"processrequired" boolean,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(500)
);
--> statement-breakpoint
CREATE TABLE "e360"."projectactivityversion" (
	"projectactivityversionid" integer PRIMARY KEY DEFAULT nextval('projectactivityversion_projectactivityversionid_seq'::regclass) NOT NULL,
	"projectid" integer NOT NULL,
	"projectplanversionid" integer,
	"versionno" smallint,
	"activityid" integer,
	"activityname" varchar(250) NOT NULL,
	"activitycode" varchar(20),
	"activitydesc" varchar(5000),
	"startdate" date NOT NULL,
	"enddate" date NOT NULL,
	"activityownerid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."projectattributes" (
	"projectattributeid" integer PRIMARY KEY DEFAULT nextval('projectattribute_id_pkey_seq'::regclass) NOT NULL,
	"projectid" integer NOT NULL,
	"technologyid" integer,
	"productid" integer,
	"license" boolean,
	"linkedproject" integer,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."projectbudgetdetails" (
	"projectbudgetdetailid" integer PRIMARY KEY DEFAULT nextval('projectbudgetdetails_projectbudgetdetailid_seq'::regclass) NOT NULL,
	"projectbudgetid" integer NOT NULL,
	"projectid" integer NOT NULL,
	"overheadid" integer,
	"monthid" integer,
	"yearid" integer,
	"amount" numeric,
	"datcomcurrencyid" integer,
	"createdcomuserid" integer,
	"createdtimestamp" timestamp
);
--> statement-breakpoint
CREATE TABLE "e360"."projectbudgetversion" (
	"projectbudgetversionid" integer PRIMARY KEY DEFAULT nextval('projectbudgetversion_projectbudgetversionid_seq'::regclass) NOT NULL,
	"projectid" integer,
	"projectplanversionid" integer,
	"versionno" smallint,
	"projectbudgetid" integer,
	"description" varchar(500),
	"overheadid" integer NOT NULL,
	"plannedeffort" numeric,
	"plannedcost" numeric NOT NULL,
	"datcomcurrencyid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"units" integer,
	"rate" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."projectcustomercontacts" (
	"projectcontactid" integer PRIMARY KEY DEFAULT nextval('projectcontact_pkey_seq'::regclass) NOT NULL,
	"projectid" integer NOT NULL,
	"contacttype" varchar(250) NOT NULL,
	"contactpersonname" varchar(250) NOT NULL,
	"designation" varchar(250),
	"phoneno" varchar(50),
	"email" varchar(500) NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."projectdocuments" (
	"projectdocumentattachmentsid" integer PRIMARY KEY DEFAULT nextval('projectdocuments_projectdocumentattachments_pkey_seq'::regclass) NOT NULL,
	"projectid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"documenttype" integer NOT NULL,
	"filename" varchar(500) NOT NULL,
	"filepath" varchar(200) NOT NULL,
	"versionno" varchar(25),
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"isdeletedflag" boolean,
	"deletedcomuserid" smallint,
	"deletedtimestamp" timestamp,
	"notes" varchar(100),
	"fileformat" varchar(500),
	"status" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."projecteffort" (
	"effortid" integer PRIMARY KEY DEFAULT nextval('projecteffort_peffort_pkey_seq'::regclass) NOT NULL,
	"projstaffid" integer,
	"projectid" integer,
	"comuserid" integer NOT NULL,
	"startdate" date,
	"enddate" date,
	"approverremarks" text,
	"approved" boolean,
	"approverid" integer,
	"approvedtimestamp" timestamp,
	"clientapproved" boolean,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(500),
	"comtenantid" integer NOT NULL,
	"status" integer,
	"prevstatusid" integer,
	"postedtosap" boolean,
	"entrytype" varchar(50)
);
--> statement-breakpoint
CREATE TABLE "e360"."projecteffortdetails" (
	"effortdetailid" integer PRIMARY KEY DEFAULT nextval('projecteffort_peffortdetails_pkey_seq'::regclass) NOT NULL,
	"projeffortid" integer NOT NULL,
	"projtaskid" integer,
	"efforthours" double precision NOT NULL,
	"effortdate" timestamp NOT NULL,
	"staffremarks" text,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(500),
	"referencenumber" varchar(100),
	"projecttaskid" integer,
	"starttime" numeric(12, 2),
	"endtime" numeric(12, 2),
	"timecategorymasterid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."projectactivity" (
	"activityid" integer PRIMARY KEY DEFAULT nextval('projectactivity_projectactivity_pkey_seq'::regclass) NOT NULL,
	"projectid" integer NOT NULL,
	"activityname" varchar(250) NOT NULL,
	"activitycode" varchar(20),
	"activitydesc" varchar(5000),
	"startdate" date,
	"enddate" date,
	"activityownerid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."projectbudget" (
	"projectbudgetid" integer PRIMARY KEY DEFAULT nextval('projectbudget_projectbudgetid_seq'::regclass) NOT NULL,
	"projectid" integer,
	"description" varchar(500),
	"overheadid" integer NOT NULL,
	"plannedeffort" numeric,
	"plannedcost" numeric NOT NULL,
	"datcomcurrencyid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"units" integer,
	"rate" numeric,
	"comtenantid" integer,
	"isbillable" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."projectestimationdetails" (
	"estimationdetailid" integer PRIMARY KEY DEFAULT nextval('projectestimationdetails_estimationdet_pkey_seq'::regclass) NOT NULL,
	"projectestimationid" integer NOT NULL,
	"overheadid" integer NOT NULL,
	"plannedeffort" numeric,
	"plannedcost" numeric NOT NULL,
	"datcomcurrencyid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"units" integer,
	"rate" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."projectexpense" (
	"projexpenseid" integer PRIMARY KEY DEFAULT nextval('projectexpense_pexp_pkey_seq'::regclass) NOT NULL,
	"projectid" integer NOT NULL,
	"overheadid" integer NOT NULL,
	"monthid" integer NOT NULL,
	"amount" numeric NOT NULL,
	"datcomcurrencyid" integer NOT NULL,
	"taggeduser" integer,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"comtenantid" integer,
	"companyid" integer,
	"description" varchar(500),
	"yearid" integer,
	"transactionid" varchar(200),
	"externalsystemcode" varchar(500),
	"transactiondate" timestamp
);
--> statement-breakpoint
CREATE TABLE "e360"."projectholidays" (
	"projectholidaymasterid" integer PRIMARY KEY DEFAULT nextval('projectholidays_projectholidaymaster_pkey_seq'::regclass) NOT NULL,
	"projectid" integer NOT NULL,
	"holiday" date,
	"reason" varchar(100),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."projectprofitability" (
	"projectprofitabilityid" serial PRIMARY KEY NOT NULL,
	"comtenantid" integer NOT NULL,
	"projectid" integer NOT NULL,
	"monthid" integer,
	"yearid" integer,
	"datcomcurrencyid" integer,
	"method" char(1),
	"submethod" varchar(1),
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"margin1" numeric(18, 3),
	"margin2" numeric(18, 3),
	"datprojectbillingtypeid" integer,
	"recognizedrevenue_prevmonth" numeric,
	"recognizedrevenue_curmonth" numeric,
	"totalrecognizedrevenue" numeric,
	"directcost_prevmonth" numeric,
	"directcost_curmonth" numeric,
	"totaldirectcost" numeric,
	"indirectcost_prevmonth" numeric,
	"indirectcost_curmonth" numeric,
	"totalindirectcost" numeric,
	"plannedrevenue" numeric(18, 3),
	"basecurrencyid" integer,
	"exchangerate" numeric(12, 6),
	"margin1_curmonth" numeric(18, 3),
	"margin2_curmonth" numeric(18, 3)
);
--> statement-breakpoint
CREATE TABLE "e360"."projectmilestones" (
	"projectmilestoneid" integer PRIMARY KEY DEFAULT nextval('projectmiles_ptask_pkey_seq'::regclass) NOT NULL,
	"projectid" integer NOT NULL,
	"milestonename" varchar(200) NOT NULL,
	"milestonedesc" varchar(250),
	"projecttaskid" integer,
	"plannedcompletiondate" date NOT NULL,
	"actualcompletiondate" date,
	"billingmilestone" boolean NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"comtenantid" integer,
	"milestoneamount" numeric(18, 3),
	"datcomcurrencyid" integer,
	"confirmed" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."projectplanversion" (
	"projectplanversionid" integer PRIMARY KEY DEFAULT nextval('projectplanversion_projectplanversionid_seq'::regclass) NOT NULL,
	"versionno" smallint,
	"projectid" integer,
	"description" varchar(500),
	"submittedflag" boolean,
	"submittedtimestamp" timestamp NOT NULL,
	"submittedcomuserid" smallint NOT NULL,
	"approvedflag" boolean,
	"approvedtimestamp" timestamp,
	"approvedcomuserid" smallint,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"plannedrevenue" numeric,
	"plannedcost" numeric,
	"datcomcurrencyid" integer,
	"plannedeffort" numeric,
	"grossmargin1" numeric,
	"grossmargin2" numeric,
	"approvercomments" varchar(500)
);
--> statement-breakpoint
CREATE TABLE "e360"."projectproductmapping" (
	"projectproductmappingid" integer PRIMARY KEY DEFAULT nextval('projectproductmapping_projectproductmappingid_seq'::regclass) NOT NULL,
	"projectid" integer NOT NULL,
	"productmasterid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE "e360"."projectestimation" (
	"estimationid" integer PRIMARY KEY DEFAULT nextval('projectestimation_estimation_pkey_seq'::regclass) NOT NULL,
	"projectid" integer NOT NULL,
	"plannedeffort" numeric NOT NULL,
	"plannedrevenue" numeric NOT NULL,
	"datcomcurrencyid" integer NOT NULL,
	"grossmargin1" numeric NOT NULL,
	"grossmargin2" numeric,
	"approved" boolean NOT NULL,
	"approverid" integer,
	"approvedtimestamp" timestamp,
	"rejectionreason" text,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"comtenantid" integer,
	"approverremarks" varchar(250),
	"planneddirectcost" numeric(18, 3),
	"plannedindirectcost" numeric(18, 3)
);
--> statement-breakpoint
CREATE TABLE "e360"."projectprofitablitycostdetail" (
	"projectprofitablitycostdetailid" serial PRIMARY KEY NOT NULL,
	"userid" integer,
	"projroleid" integer,
	"projectid" integer,
	"totaldays" integer,
	"noofdaysworked" integer,
	"totaldaysexcludeleave" integer,
	"noofworkingdays" integer,
	"allocation" numeric(12, 3),
	"orgcostrate" numeric(18, 3),
	"unit" integer,
	"leavedays" integer,
	"totalnoofdaysinthismonth" integer,
	"noofweeklyholidays" integer,
	"billable" boolean,
	"bandid" integer,
	"skillarea" integer,
	"techgroupid" integer,
	"countryid" integer,
	"stddirectcost" numeric(18, 3),
	"yearid" integer,
	"monthid" integer,
	"comtenantid" integer,
	"allocationpercentage" numeric(18, 3),
	"actualcost" numeric(18, 3),
	"payrollsalary" numeric,
	"isdateofjoincurrmonth" boolean,
	"basecurrencyid" integer,
	"datcurrencyid" integer,
	"oldrate" numeric,
	"exchangerate" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."projectprofitablityeffortrevenuedata" (
	"projectprofitablityeffortrevenuedataid" serial PRIMARY KEY NOT NULL,
	"comuserid" integer,
	"currprojecthours" numeric,
	"salerate" numeric(12, 3),
	"rateunitid" integer,
	"monthlyworkingdays" integer,
	"weeklyworkinghours" numeric(12, 2),
	"projroleid" integer,
	"projectid" integer,
	"comtenantid" integer,
	"monthid" integer,
	"yearid" integer,
	"recognizedrevenue" integer,
	"basecurrencyid" integer,
	"datcurrencyid" integer,
	"oldrate" numeric,
	"exchangerate" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."projectmaster" (
	"projectid" integer PRIMARY KEY DEFAULT nextval('projectmaster_project_pkey_seq'::regclass) NOT NULL,
	"customerid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"companyid" integer NOT NULL,
	"businessunitid" integer,
	"servicelineid" integer,
	"departmentid" integer,
	"projecttypeid" integer NOT NULL,
	"datprojectbillingtypeid" integer NOT NULL,
	"projectname" varchar(250) NOT NULL,
	"projectcode" varchar(20),
	"projectdescription" varchar(5000),
	"locationid" integer,
	"startdate" date NOT NULL,
	"enddate" date NOT NULL,
	"projectstatus" integer NOT NULL,
	"defaultcomcurrencyid" smallint NOT NULL,
	"totalestimateamt" numeric(18, 3) NOT NULL,
	"totalactualamt" numeric(18, 3) NOT NULL,
	"reasonforrejection" varchar(500),
	"projectmanagerid" integer NOT NULL,
	"deliverymanagerid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"cust_project" boolean NOT NULL,
	"category" char(1),
	"billingcycle" varchar(50),
	"deliverymodemasterid" integer,
	"licensingrevenue" boolean,
	"opportunityid" integer,
	"pmocontactpersonid" integer,
	"is_sapproject" boolean,
	"techgroupid" integer,
	"projectsubtype" varchar(250),
	"pmo1" integer,
	"pmo2" integer,
	"pmo3" integer,
	"timetemplatemasterid" integer,
	"shiftstarttime" numeric(12, 2),
	"shiftendtime" numeric(12, 2),
	"timezone" varchar(100),
	"commercialspaymentterm" varchar(50)
);
--> statement-breakpoint
CREATE TABLE "e360"."projectmasterversion" (
	"projectmasterversionid" bigserial PRIMARY KEY NOT NULL,
	"projectid" bigint,
	"versionmasterid" bigint,
	"versionno" smallint,
	"customerid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"companyid" integer NOT NULL,
	"businessunitid" integer,
	"servicelineid" integer,
	"departmentid" integer,
	"projecttypeid" integer NOT NULL,
	"datprojectbillingtypeid" integer NOT NULL,
	"projectname" varchar(250) NOT NULL,
	"projectcode" varchar(20),
	"projectdescription" varchar(5000),
	"locationid" integer,
	"startdate" date NOT NULL,
	"enddate" date NOT NULL,
	"projectstatus" integer NOT NULL,
	"defaultcomcurrencyid" smallint NOT NULL,
	"totalestimateamt" numeric(18, 3) NOT NULL,
	"totalactualamt" numeric(18, 3) NOT NULL,
	"reasonforrejection" varchar(500),
	"projectmanagerid" integer NOT NULL,
	"deliverymanagerid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"cust_project" boolean NOT NULL,
	"category" char(1),
	"billingcycle" varchar(50),
	"deliverymodemasterid" integer,
	"licensingrevenue" boolean,
	"opportunityid" integer,
	"pmocontactpersonid" integer,
	"is_sapproject" boolean,
	"techgroupid" integer,
	"projectsubtype" varchar(250),
	"pmo1" integer,
	"pmo2" integer,
	"pmo3" integer,
	"timetemplatemasterid" integer,
	"shiftstarttime" numeric(12, 2),
	"shiftendtime" numeric(12, 2),
	"timezone" varchar(100),
	"commercialspaymentterm" varchar(50)
);
--> statement-breakpoint
CREATE TABLE "e360"."projectprofitablityplannedrevenuedetail" (
	"projectprofitablityplannedrevenuedetailid" serial PRIMARY KEY NOT NULL,
	"projectid" integer,
	"projectroleid" integer,
	"rate" numeric(12, 3),
	"allocation" numeric(12, 3),
	"rateunitid" integer,
	"rateinhrs" numeric(12, 3),
	"plannedeffort" numeric(26, 3),
	"plannedrevenue" numeric(26, 3),
	"peopleno" integer,
	"comtenantid" integer,
	"monthid" integer,
	"yearid" integer,
	"basecurrencyid" integer,
	"datcurrencyid" integer,
	"oldrate" numeric,
	"exchangerate" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."projectrole" (
	"projectroleid" integer PRIMARY KEY DEFAULT nextval('proleid_pkey_seq'::regclass) NOT NULL,
	"projectid" integer NOT NULL,
	"crateid" integer,
	"workmodeid" integer,
	"billratehr" numeric,
	"datcomcurrencyid" integer NOT NULL,
	"peopleno" integer NOT NULL,
	"allocation" double precision NOT NULL,
	"startdate" timestamp NOT NULL,
	"enddate" timestamp NOT NULL,
	"staffcostid" integer,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"croleid" integer,
	"customerid" integer,
	"rolename" varchar(100),
	"levelid" integer,
	"cost_hr" double precision,
	"comtenantid" integer,
	"isonsite" boolean,
	"resourceid" varchar(20),
	"allocationcostelement" varchar(30),
	"controllingarea" varchar(30),
	"billable" boolean,
	"rateunitid" integer,
	"countryid" integer,
	"skillareamasterid" integer,
	"techgroupid" integer,
	"min_bandid" integer,
	"max_bandid" integer,
	"plannedeffort" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."projectroleactualeffortmonthsplit" (
	"projectroleactualeffortmonthsplittid" bigserial PRIMARY KEY NOT NULL,
	"projectroleid" integer,
	"profitabilityyearmonthid" integer,
	"projectid" integer,
	"comtenantid" integer,
	"yearmonthid" integer,
	"effort" numeric(18, 3),
	"plannedeffort" numeric(18, 3),
	"actualeffort" numeric(18, 3)
);
--> statement-breakpoint
CREATE TABLE "e360"."rolemaster" (
	"roleid" integer PRIMARY KEY DEFAULT nextval('roleid_roleid_pkey_seq'::regclass) NOT NULL,
	"rolename" varchar(500),
	"code" varchar(50),
	"activeflag" boolean,
	"comtenantid" integer NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"istenantadmin" boolean,
	"issystemadmin" boolean,
	"ismmadmin" boolean,
	"isfinancemanager" boolean,
	"isdeliverymanger" boolean,
	"istalentmanger" boolean,
	"ispeoplemanager" boolean,
	"issalesmanager" boolean,
	"ispractisehead" boolean,
	"isemployee" boolean,
	"isbuhead" boolean,
	"isservicelinehead" boolean,
	"ispmo" boolean,
	"issystemrole" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."projecttasks" (
	"projecttaskid" integer PRIMARY KEY DEFAULT nextval('projecttasks_ptask_pkey_seq'::regclass) NOT NULL,
	"projectactivityid" integer NOT NULL,
	"taskid" integer NOT NULL,
	"taskseq" integer NOT NULL,
	"taskcode" varchar(20),
	"startdate" date NOT NULL,
	"enddate" date NOT NULL,
	"billtoclient" boolean NOT NULL,
	"clientapproval" boolean NOT NULL,
	"estdeffort" numeric NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"projectid" integer,
	"status" integer,
	"complexity" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."projecttypemaster" (
	"projecttypeid" integer PRIMARY KEY DEFAULT nextval('projecttypemaster_projecttype_pkey_seq'::regclass) NOT NULL,
	"projecttype" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."rolemenupermissions" (
	"rolemenupermissionsid" integer PRIMARY KEY DEFAULT nextval('rolemenupermissions_rolemenupermissionsid_seq'::regclass) NOT NULL,
	"rolemenuid" integer NOT NULL,
	"roleid" integer NOT NULL,
	"datmenuid" integer,
	"datmenupermissionid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."rolename_val" (
	"rolename" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."projectstaff" (
	"projectstaffid" integer PRIMARY KEY DEFAULT nextval('projectstaff_projectstaff_pkey_seq'::regclass) NOT NULL,
	"projroleid" integer NOT NULL,
	"userid" integer,
	"allocation" double precision NOT NULL,
	"startdate" timestamp NOT NULL,
	"enddate" timestamp NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(500),
	"projectid" integer,
	"comtenantid" integer,
	"isonsite" boolean,
	"levelid" integer,
	"staffingstatusid" integer,
	"demandid" integer,
	"plannedstartdate" date,
	"plannedenddate" date,
	"plannedallocation" double precision,
	"releasedate" date
);
--> statement-breakpoint
CREATE TABLE "e360"."projectrevenue" (
	"projrevid" integer PRIMARY KEY DEFAULT nextval('projectrevenue_projrevid_seq'::regclass) NOT NULL,
	"projectid" integer NOT NULL,
	"monthid" integer NOT NULL,
	"yearid" integer NOT NULL,
	"recognizedrevenue" numeric(18, 3),
	"actualrevenue" numeric(18, 3) NOT NULL,
	"invoiceno" varchar(200),
	"transactionid" varchar(200),
	"transactiondate" date,
	"profitcentercode" varchar(200),
	"datcomcurrencyid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"plannedrevenue" numeric(18, 3),
	"description" varchar(200),
	"invoicedate" timestamp
);
--> statement-breakpoint
CREATE TABLE "e360"."projectroleeffortmonthsplit" (
	"projectroleeffortmonthsplitid" serial PRIMARY KEY NOT NULL,
	"projectroleid" integer,
	"comtenantid" integer,
	"yearmonth" integer,
	"effort" numeric(18, 3)
);
--> statement-breakpoint
CREATE TABLE "e360"."projectroletasks" (
	"roletaskid" integer PRIMARY KEY DEFAULT nextval('proletask_pkey_seq'::regclass) NOT NULL,
	"projroleid" integer NOT NULL,
	"projtaskid" integer NOT NULL,
	"isactive" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createduser" integer NOT NULL,
	"modifiedtimestamp" timestamp,
	"updateduser" integer,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."projectroleversion" (
	"projectroleversionid" integer PRIMARY KEY DEFAULT nextval('projectroleversionid_pkey_seq'::regclass) NOT NULL,
	"projectplanversionid" integer,
	"versionno" smallint,
	"projectroleid" integer,
	"projectid" integer NOT NULL,
	"crateid" integer,
	"workmodeid" integer,
	"billratehr" numeric NOT NULL,
	"datcomcurrencyid" integer NOT NULL,
	"peopleno" integer NOT NULL,
	"allocation" double precision NOT NULL,
	"startdate" timestamp NOT NULL,
	"enddate" timestamp NOT NULL,
	"staffcostid" integer,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"croleid" integer,
	"customerid" integer,
	"rolename" varchar(100),
	"levelid" integer,
	"cost_hr" double precision,
	"comtenantid" integer,
	"isonsite" boolean,
	"resourceid" varchar(20),
	"allocationcostelement" varchar(30),
	"controllingarea" varchar(30),
	"billable" boolean,
	"countryid" integer,
	"skillareamasterid" integer,
	"techgroupid" integer,
	"min_bandid" integer,
	"max_bandid" integer,
	"plannedeffort" numeric,
	"rateunitid" integer,
	"versionmasterid" bigint
);
--> statement-breakpoint
CREATE TABLE "e360"."rolemenus" (
	"rolemenuid" integer PRIMARY KEY DEFAULT nextval('rolemenus_rolemenuid_seq'::regclass) NOT NULL,
	"roleid" integer NOT NULL,
	"datmenuid" integer,
	"isfullrights" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."sapintegrationcredentials" (
	"sapintegrationcredentialsid" serial PRIMARY KEY NOT NULL,
	"apiurl" varchar(200),
	"username" varchar(200),
	"password" varchar(200),
	"comtenantid" integer,
	"plantcode" varchar(20),
	"companycode" varchar(20)
);
--> statement-breakpoint
CREATE TABLE "e360"."servicelineskillareamapping" (
	"servicelineskillareamappingid" serial PRIMARY KEY NOT NULL,
	"servicelineid" integer,
	"skillareamasterid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."sourcemaster" (
	"sourcemasterid" integer PRIMARY KEY DEFAULT nextval('sourcemaster_sourcemaster_pkey_seq'::regclass) NOT NULL,
	"sourcename" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."statusid_var" (
	"statusid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."subscriptionpackagemodule" (
	"subscriptionpackagemenuid" integer PRIMARY KEY DEFAULT nextval('subscriptionpackagemodule_subscriptionpackagemenuid_seq'::regclass) NOT NULL,
	"subscriptionpackageid" integer,
	"datmoduleid" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_activityid" (
	"projectactivityid" integer PRIMARY KEY NOT NULL,
	"startdate" date,
	"enddate" date,
	"createddate" timestamp,
	"projectid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."statemaster" (
	"comstateid" integer PRIMARY KEY DEFAULT nextval('statemaster_comstate_pkey_seq'::regclass) NOT NULL,
	"comcountryid" integer NOT NULL,
	"statename" varchar(100) NOT NULL,
	"statecode" varchar(100),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."skillareamaster" (
	"skillareamasterid" integer PRIMARY KEY DEFAULT nextval('skillareamaster_pkey_seq'::regclass) NOT NULL,
	"skillarea" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."techgroupmaster" (
	"techgroupid" integer PRIMARY KEY DEFAULT nextval('techgroup_pkey_seq'::regclass) NOT NULL,
	"techarea" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."slmaster" (
	"servicelineid" integer PRIMARY KEY DEFAULT nextval('slmaster_serviceline_pkey_seq'::regclass) NOT NULL,
	"servicelinegroupid" integer NOT NULL,
	"servicelinename" varchar(50) NOT NULL,
	"servicelineheadid" integer,
	"servicelinecontactpersonid" integer,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"slcode" varchar(20),
	"isrevenuerequired" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."skillmaster" (
	"skillmasterid" integer PRIMARY KEY DEFAULT nextval('skillmaster_skillmaster_pkey_seq'::regclass) NOT NULL,
	"skill" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"skillarea" integer NOT NULL,
	"skilltype" varchar(100),
	"skillcode" varchar(20)
);
--> statement-breakpoint
CREATE TABLE "e360"."technologymaster" (
	"technologymasterid" integer PRIMARY KEY DEFAULT nextval('technologymaster_technologymaster_pkey_seq'::regclass) NOT NULL,
	"technology" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"techgroup" integer,
	"technologycode" varchar(20)
);
--> statement-breakpoint
CREATE TABLE "e360"."taskmaster" (
	"taskid" integer PRIMARY KEY DEFAULT nextval('taskmaster_taskmaster_pkey_seq'::regclass) NOT NULL,
	"taskgroupid" integer NOT NULL,
	"taskdesc" varchar(250) NOT NULL,
	"tasktypeid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"taskcode" varchar(20)
);
--> statement-breakpoint
CREATE TABLE "e360"."staffcostrate" (
	"costrateid" integer PRIMARY KEY DEFAULT nextval('staffcostrate_ucr_pkey_seq'::regclass) NOT NULL,
	"designationid" integer NOT NULL,
	"skillid" integer NOT NULL,
	"techid" integer,
	"cityid" integer NOT NULL,
	"cost_hr" double precision NOT NULL,
	"comcurrencyid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"band" integer,
	"std_billrate" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."roleusermapping" (
	"roleusermappingid" integer PRIMARY KEY DEFAULT nextval('roleusermapping_roleusermappingid_seq'::regclass) NOT NULL,
	"roleid" integer NOT NULL,
	"comuserid" integer NOT NULL,
	"activeflag" boolean,
	"comtenantid" integer NOT NULL,
	"createdtimestamp" timestamp,
	"createdcomuserid" smallint,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."sapuserworkassignment" (
	"sapuserworkassignmentid" integer PRIMARY KEY DEFAULT nextval('sapuserworkassignment_sapuserworkassignmentid_seq'::regclass) NOT NULL,
	"companyid" integer,
	"comuserid" integer,
	"companycode" varchar,
	"workassignmentcode" varchar,
	"costcentercode" varchar,
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."slgroupmaster" (
	"servicelinegroupid" integer PRIMARY KEY DEFAULT nextval('slgroupmaster_servicelinegroup_pkey_seq'::regclass) NOT NULL,
	"servicelinegroupname" varchar(50) NOT NULL,
	"groupheadid" integer,
	"groupcontactpersonid" integer,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"servicelineheadid" integer,
	"servicelinegroupheadcomuserid" bigint
);
--> statement-breakpoint
CREATE TABLE "e360"."slprojectprofitability" (
	"slprojectprofitabilityid" serial PRIMARY KEY NOT NULL,
	"projectprofitabilityid" bigint,
	"servicelineid" integer,
	"comtenantid" integer NOT NULL,
	"projectid" integer NOT NULL,
	"monthid" integer,
	"yearid" integer,
	"datcomcurrencyid" integer,
	"method" char(1),
	"submethod" varchar(1),
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"margin1" numeric(18, 3),
	"margin2" numeric(18, 3),
	"datprojectbillingtypeid" integer,
	"recognizedrevenue_prevmonth" numeric,
	"recognizedrevenue_curmonth" numeric,
	"totalrecognizedrevenue" numeric,
	"directcost_prevmonth" numeric,
	"directcost_curmonth" numeric,
	"totaldirectcost" numeric,
	"indirectcost_prevmonth" numeric,
	"indirectcost_curmonth" numeric,
	"totalindirectcost" numeric,
	"plannedrevenue" numeric(18, 3),
	"basecurrencyid" integer,
	"exchangerate" numeric(12, 6),
	"margin1_curmonth" numeric(18, 3),
	"margin2_curmonth" numeric(18, 3),
	"projroleid" bigint
);
--> statement-breakpoint
CREATE TABLE "e360"."taskgroupmaster" (
	"taskgroupid" integer PRIMARY KEY DEFAULT nextval('taskgroupmaster_taskgroupmaster_pkey_seq'::regclass) NOT NULL,
	"taskgroupdesc" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"defaulttask" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."tasktypemaster" (
	"tasktypeid" integer PRIMARY KEY DEFAULT nextval('tasktypemaster_tasktypemaster_pkey_seq'::regclass) NOT NULL,
	"tasktype" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_customer_revenue" (
	"customerid" integer,
	"customername" varchar(1000),
	"revenue" numeric(18, 2),
	"plannedrevenue" numeric(18, 2),
	"actualrevenue" numeric(18, 2)
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_datexchangerate" (
	"fromcurrencyid" integer,
	"tocurrencyid" integer,
	"exchangerate" numeric,
	"startdate" date,
	"enddate" date
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_datexchangerate_profitablity" (
	"fromcurrencyid" integer,
	"tocurrencyid" integer,
	"exchangerate" numeric,
	"startdate" date,
	"enddate" date
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_education_specialization_data" (
	"description" text,
	"datatype" text,
	"course" text,
	"parenttype" text,
	"educationid" integer,
	"coursemasterid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_project_revenue" (
	"projectid" integer,
	"projectname" varchar(1000),
	"revenue" numeric(18, 2),
	"plannedrevenue" numeric(18, 2),
	"actualrevenue" numeric(18, 2)
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_project_timesheet_data" (
	"projectid" integer,
	"comtenantid" integer,
	"yearmonthid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_projectid" (
	"projectid" integer,
	"projectname" varchar(1000),
	"projectcode" varchar(100),
	"projecttypeid" integer,
	"companyid" integer,
	"servicelineid" integer,
	"businessunitid" integer,
	"datprojectbillingtypeid" integer,
	"projectmanagerid" integer,
	"customerid" integer,
	"customername" varchar
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_projectprofitabilityreport" (
	"projectprofitabilityid" integer,
	"projectid" integer,
	"method" varchar
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_projectrevenuereport" (
	"projectprofitabilityid" integer,
	"projectid" integer,
	"method" varchar,
	"actualrevenue" numeric(18, 2),
	"yearmonth" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_projid" (
	"projectid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_selecteddemandids" (
	"demandid" integer PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_skill_template" (
	"skillmasterid" text,
	"skill" text,
	"skillarea" text,
	"skilltype" text,
	"blank1" text,
	"blank2" text,
	"skill_area_master" text,
	"skillareamasterid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_timesheet_approvaldetails" (
	"effortid" integer,
	"statusname" varchar(255),
	"approverremarks" varchar(500),
	"approved" boolean,
	"comtenantid" integer,
	"approverid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_timesheet_data" (
	"timesheetbillinginputid" integer,
	"projectid" integer,
	"projectcode" varchar(50),
	"comuserid" integer,
	"yearmonthid" integer,
	"projectstaffid" integer,
	"projectroleid" integer,
	"billableeffort" numeric,
	"nonbillableeffort" numeric,
	"billrate" numeric,
	"notes" varchar,
	"status" integer,
	"statusname" varchar(100),
	"comtenantid" integer,
	"projectname" varchar(200),
	"rolename" varchar(200),
	"approveduser" varchar(200),
	"approveremployeecode" varchar(50),
	"submitteduser" varchar(200),
	"submittedemployeecode" varchar(50),
	"username" varchar(200),
	"employeecode" varchar(50),
	"submissionremarks" varchar,
	"approverremarks" varchar,
	"pmremarks" varchar,
	"dmremarks" varchar,
	"pmname" varchar(250),
	"pmemployeecode" varchar(50),
	"pmuserid" integer,
	"dmuserid" integer,
	"dmname" varchar(250),
	"dmemployeecode" varchar(50),
	"billingtype" varchar(100),
	"datcomcurrencyid" integer,
	"rateunitid" integer,
	"basecurrencyid" integer,
	"basecurrency" varchar(50),
	"currency" varchar(50),
	"rateunitname" varchar(50),
	"createddate" timestamp,
	"monthenddone" boolean,
	"recognizedrevenue_curmonth_bc" numeric(18, 3),
	"recognizedrevenue_curmonth_pc" numeric(18, 3)
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_timesheet_details" (
	"rowid" serial NOT NULL,
	"comuserid" integer,
	"startdate" date,
	"enddate" date,
	"entrytype" varchar(255),
	"projstaffid" integer,
	"projectid" integer,
	"statusname" varchar(255),
	"prevstatusname" varchar(255),
	"projecttaskid" integer,
	"timetypeid" integer,
	"projtaskid" integer,
	"taskdesc" text,
	"isactiveflag" boolean,
	"staffremarks" text,
	"referencenumber" varchar(255),
	"timesheetdetails" json,
	"effortid" integer,
	"statusid" integer,
	"prevstatusid" integer,
	"approverremarks" varchar(255),
	"approved" boolean,
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."temp_userleavedata" (
	"employee_code" varchar,
	"employee_name" varchar,
	"leavetype" varchar,
	"leavestartdate" date,
	"leaveenddate" date,
	"noofdays" numeric(12, 2),
	"leavereason" varchar(100),
	"leavestatus" varchar,
	"comtenantid" integer NOT NULL,
	"notes" varchar(100),
	"createdcomuserid" integer,
	"lopstatus" varchar(10),
	"comuserid" integer,
	"leavestatusid" integer,
	"leavetypeid" integer,
	"islop" boolean,
	"isactiveflag" boolean,
	"fromsession" varchar(100),
	"tosession" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."tempcostrateupload" (
	"band" varchar(10),
	"skillarea" varchar(500),
	"techgroup" varchar(500),
	"country" varchar(500),
	"rate" numeric(18, 2),
	"currency" varchar(100),
	"unit" varchar(100),
	"startdate" date,
	"enddate" date,
	"status" varchar(100),
	"bandid" integer,
	"skillareadid" integer,
	"techgroupid" integer,
	"countryid" integer,
	"currencyid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."template_customer_contact" (
	"customer_name" varchar(100),
	"contact_person_name" varchar(100),
	"contacttype" varchar(100),
	"designation" varchar(100),
	"email" varchar(100),
	"phone" varchar(100),
	"isprimary" varchar(100),
	"customerid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."template_customer_master" (
	"customer_name" varchar(100),
	"industry" varchar(100),
	"address_line_1" varchar(100),
	"address_line_2" varchar(100),
	"phone" varchar(100),
	"email" varchar(100),
	"city" varchar(100),
	"state" varchar(100),
	"country" varchar(100),
	"default_currency" varchar(100),
	"payment_days" varchar(100),
	"tax_type" varchar(100),
	"tax_number" varchar(100),
	"accountcustomer_group" varchar(100),
	"account_manager" varchar(100),
	"emp_id" varchar(100),
	"email_id" varchar(100),
	"short_city_code" varchar(10),
	"short_name" varchar(10),
	"comcountryid" integer,
	"accountmanagerid" integer,
	"customergroupid" integer,
	"datcomcurrencyid" integer,
	"industryid" integer,
	"comstateid" integer,
	"comcityid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."template_customer_role" (
	"customer_name" varchar(100),
	"customer_role" varchar(100),
	"role_level" varchar(100),
	"primary_skill" varchar(100),
	"technology" varchar(100),
	"bill_ratehr" varchar(100),
	"currency" varchar(100),
	"unit" varchar(100),
	"location" varchar(100),
	"typeofcustomerproject" varchar(100),
	"customerid" integer,
	"croleid" integer,
	"levelid" integer,
	"comcurrencyid" integer,
	"locationid" integer,
	"rateunit" integer,
	"countryid" integer,
	"skillareamasterid" integer,
	"techgroupid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."template_customermaster_data" (
	"company" varchar,
	"customer_name" varchar,
	"source" varchar,
	"account" varchar,
	"industry" varchar,
	"bu" varchar,
	"address_line_1" varchar,
	"address_line_2" varchar,
	"phone" varchar,
	"email" varchar,
	"city" varchar,
	"state" varchar,
	"country" varchar,
	"default_currency" varchar,
	"accountcustomer_group" varchar,
	"account_manager" varchar,
	"paymentdays" varchar,
	"short_city_code" varchar(10),
	"short_name" varchar(10),
	"comcountryid" integer,
	"accountmanagerid" integer,
	"customergroupid" integer,
	"datcomcurrencyid" integer,
	"industryid" integer,
	"comstateid" integer,
	"comcityid" integer,
	"bumasterid" integer,
	"companyid" integer,
	"customercode" varchar
);
--> statement-breakpoint
CREATE TABLE "e360"."template_employee_certificates" (
	"employee_number" varchar,
	"full_name" varchar,
	"email" varchar,
	"type_of_certificate" varchar,
	"agency" varchar,
	"expiry_date" varchar,
	"attachments_count" varchar,
	"comuserid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."template_employee_education" (
	"employee_number" varchar,
	"full_name" varchar,
	"jobtitle" varchar,
	"business_unit" varchar,
	"department" varchar,
	"sub_department" varchar,
	"location" varchar,
	"email" varchar,
	"degree" varchar,
	"branch_specialization" varchar,
	"year_of_joining" date NOT NULL,
	"year_of_completion" date NOT NULL,
	"cgpa_percentage" varchar,
	"university_college" varchar,
	"comuserid" integer,
	"dateducationmasterid" integer,
	"datcoursemasterid" integer,
	"datspecialisationid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."template_employee_prevexperience" (
	"employee_number" varchar,
	"full_name" varchar,
	"designation" varchar,
	"business_unit" varchar,
	"department" varchar,
	"sub_department" varchar,
	"location_name" varchar,
	"email" varchar,
	"company_name" varchar,
	"job_title" varchar,
	"date_of_joining" date,
	"date_of_relieving" date,
	"location" varchar,
	"description" varchar,
	"comuserid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."template_project_detail" (
	"project_name" varchar(100),
	"project_category" varchar(100),
	"project_subtype" varchar(100),
	"company" varchar(100),
	"customer_name" varchar(100),
	"account_name" varchar(100),
	"billing_type" varchar(100),
	"business_unit" varchar(100),
	"service_line" varchar(100),
	"start_date" varchar,
	"end_date" varchar,
	"pm_name" varchar(100),
	"empid1" varchar(100),
	"email1" varchar(100),
	"dm_name" varchar(100),
	"empid2" varchar(100),
	"email2" varchar(100),
	"code" varchar(100),
	"customerid" integer,
	"companyid" integer,
	"businessunitid" integer,
	"servicelineid" integer,
	"projecttypeid" integer,
	"datprojectbillingtypeid" integer,
	"projectmanagerid" integer,
	"deliverymanagerid" integer,
	"startdate" date,
	"enddate" date,
	"project_id" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."template_project_phase_task" (
	"project_name" varchar(100),
	"phase" varchar,
	"task_group" varchar,
	"tasks" varchar,
	"reference" varchar,
	"task_start_date" varchar(100),
	"task_end_date" varchar(100),
	"est_effort" varchar,
	"billable_task" varchar(100),
	"client_approval_needed_for_timesheet" varchar(100),
	"code" varchar(120),
	"projectid" integer,
	"taskgroupid" integer,
	"taskid" integer,
	"tasktypeid" integer,
	"projectactivityid" integer,
	"comtenantid" integer,
	"activityownerid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."template_project_role" (
	"project_name" varchar(100),
	"customer_role" varchar(100),
	"level" varchar(100),
	"primary_skill" varchar(100),
	"technology" varchar(100),
	"domain" varchar(100),
	"bill_rate" varchar(100),
	"currency" varchar(100),
	"onsite" boolean,
	"city" varchar,
	"location" varchar(100),
	"people" varchar(100),
	"role_start_date" varchar(100),
	"role_end_date" varchar(100),
	"allocation" varchar(100),
	"projectroleid" integer,
	"domainid" integer,
	"crateid" integer,
	"projectid" integer,
	"cityid" integer,
	"datcomcurrencyid" integer,
	"croleid" integer,
	"customerid" integer,
	"levelid" integer,
	"skillid" integer,
	"techid" integer,
	"startdate" date,
	"enddate" date,
	"deliveryroleid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."template_project_staff" (
	"project_name" varchar(100),
	"project_role" varchar(100),
	"level" varchar,
	"onsite" varchar,
	"staff_name" varchar(100),
	"emp_id" varchar(100),
	"start_date" varchar(100),
	"end_date" varchar(100),
	"allocation" varchar(100),
	"levelid" integer,
	"projroleid" integer,
	"userid" integer,
	"projectid" integer,
	"startdate" date,
	"enddate" date
);
--> statement-breakpoint
CREATE TABLE "e360"."template_projectmaster_data" (
	"project_name" varchar,
	"project_type" varchar,
	"company" varchar,
	"customer_name" varchar,
	"account_name" varchar,
	"billing_type" varchar,
	"business_unit" varchar,
	"service_line" varchar,
	"status" varchar,
	"start_date" varchar,
	"end_date" varchar,
	"description" varchar,
	"billing_currency" varchar,
	"billing_cycle" varchar,
	"opportunity_name" varchar,
	"tech_group" varchar,
	"pm_name" varchar,
	"dm_name" varchar,
	"bu_head" varchar,
	"service_line_head" varchar,
	"customer_spoc" varchar,
	"pm_code" varchar,
	"customerid" integer,
	"companyid" integer,
	"businessunitid" integer,
	"servicelineid" integer,
	"departmentid" integer,
	"projecttypeid" integer,
	"datprojectbillingtypeid" integer,
	"locationid" integer,
	"defaultcomcurrencyid" smallint,
	"projectmanagerid" integer,
	"deliverymanagerid" integer,
	"cust_project" boolean,
	"category" char(1),
	"deliverymodemasterid" integer,
	"opportunityid" integer,
	"projectcode" varchar,
	"techgroupid" integer,
	"projectstatus" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."template_recon_data" (
	"project_name" varchar,
	"phase" text,
	"roles" text
);
--> statement-breakpoint
CREATE TABLE "e360"."template_user_data" (
	"first_name" varchar(100),
	"last_name" varchar(100),
	"employee_id" varchar(100),
	"employee_status" varchar(100),
	"user_type" varchar(100),
	"worker_type" varchar(100),
	"time_type" varchar(100),
	"workforce_group" varchar(100),
	"email" varchar(100),
	"phone" varchar(100),
	"login_name" varchar(100),
	"gender" varchar(100),
	"date_of_birth" varchar(100),
	"date_of_joining" varchar(100),
	"nationality" varchar(100),
	"company" varchar(100),
	"designation" varchar(100),
	"band" varchar(100),
	"department" varchar(100),
	"service_line" varchar(100),
	"base_city" varchar(100),
	"office_location" varchar(100),
	"manager_name" varchar(100),
	"manager_emp_code" varchar,
	"role" varchar,
	"skillarea" varchar,
	"primaryskill" varchar,
	"userid" integer,
	"skillareamasterid" integer,
	"skillmasterid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."template_userexperiences" (
	"employeecode" varchar,
	"name" varchar,
	"totalyearexp" varchar,
	"experienceinmonth" varchar,
	"comuserid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."temporary_activitylist_extraction_data" (
	"resourceid" varchar,
	"validityenddate" date,
	"validitystartdate" date,
	"costctractivitytypeqtyunit" varchar,
	"costctractivitytypecategory" varchar,
	"allocationcostelement" varchar,
	"controllingarea" varchar
);
--> statement-breakpoint
CREATE TABLE "e360"."temporary_customer_extraction_data" (
	"customername" varchar,
	"address_pobox" varchar,
	"customergroup" varchar,
	"citycode" varchar,
	"county" varchar,
	"industry" varchar,
	"customergroupid" integer,
	"cityid" integer,
	"countryid" integer,
	"stateid" integer,
	"currentcyid" integer,
	"customermasterid" integer,
	"industryid" integer,
	"customercode" varchar
);
--> statement-breakpoint
CREATE TABLE "e360"."temporary_projectactivity_extraction_data" (
	"projectactivityid" integer,
	"projectname" varchar,
	"projectid" integer,
	"activityname" varchar,
	"activitycode" varchar,
	"startdate" date,
	"enddate" date,
	"activityownerid" integer,
	"notes" varchar,
	"comtenantid" integer,
	"createdcomuserid" integer,
	"projectcode" varchar
);
--> statement-breakpoint
CREATE TABLE "e360"."temporary_projectmaster_extraction_data" (
	"customerid" integer,
	"companyid" integer,
	"businessunitid" integer,
	"servicelineid" integer,
	"departmentid" integer,
	"projecttypeid" integer,
	"datprojectbillingtypeid" integer,
	"projectname" varchar,
	"projectcode" varchar,
	"locationid" integer,
	"startdate" date,
	"enddate" date,
	"projectstatus" integer,
	"defaultcomcurrencyid" integer,
	"projectmanagerid" integer,
	"deliverymanagerid" integer,
	"cust_project" boolean,
	"category" varchar,
	"comtenantid" integer,
	"createdcomuserid" integer,
	"companyname" varchar,
	"statusname" varchar,
	"projpartner" varchar,
	"projectmanager" varchar,
	"businessunitname" varchar,
	"customername" varchar,
	"currency" varchar,
	"notes" varchar,
	"datcomcurrencyid" integer,
	"projectid" integer,
	"customercode" varchar,
	"profitcentername" varchar
);
--> statement-breakpoint
CREATE TABLE "e360"."temporary_projectrole" (
	"projectroleid" integer NOT NULL,
	"projectid" integer NOT NULL,
	"crateid" integer,
	"workmodeid" integer,
	"cityid" integer,
	"citytext" text,
	"billratehr" numeric NOT NULL,
	"datcomcurrencyid" integer NOT NULL,
	"peopleno" integer NOT NULL,
	"allocation" double precision NOT NULL,
	"startdate" timestamp NOT NULL,
	"enddate" timestamp NOT NULL,
	"staffcostid" integer,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"croleid" integer,
	"customerid" integer,
	"rolename" varchar(100),
	"levelid" integer,
	"skillid" integer,
	"techid" integer,
	"cost_hr" double precision,
	"comtenantid" integer,
	"newprojroleid" integer,
	"newskillmasterid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."temporary_projectrole_extraction_data" (
	"projectroleid" integer,
	"projectcode" varchar(20),
	"projectid" integer,
	"crateid" integer,
	"workmodeid" integer,
	"cityid" integer,
	"citytext" text,
	"billratehr" numeric DEFAULT '0',
	"datcomcurrencyid" integer,
	"peopleno" integer,
	"allocation" double precision DEFAULT 0,
	"startdate" date,
	"enddate" date,
	"staffcostid" integer,
	"isactiveflag" boolean DEFAULT true,
	"createdcomuserid" smallint,
	"notes" varchar(100),
	"rolename" varchar(200),
	"croleid" integer,
	"customerid" integer,
	"levelid" integer,
	"skillid" integer,
	"techid" integer,
	"cost_hr" double precision DEFAULT 0,
	"comtenantid" integer,
	"deliveryroleid" integer,
	"allocationcostelement" varchar,
	"resourceid" varchar,
	"userid" integer,
	"staffedemployee" varchar,
	"workitemid" varchar,
	"workitemname" varchar,
	"workpackageid" varchar,
	"projectstaffid" integer,
	"projecttaskid" integer,
	"roletaskid" integer,
	"controllingarea" varchar,
	"custrateid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."temporary_projecttask_extraction_data" (
	"taskid" integer,
	"taskgroupid" integer,
	"taskdesc" varchar(250),
	"tasktypeid" integer,
	"comtenantid" integer,
	"isactiveflag" boolean,
	"createdcomuserid" smallint,
	"notes" varchar(100),
	"projectid" integer,
	"projectactivityid" integer,
	"startdate" date,
	"enddate" date,
	"billtoclient" boolean,
	"clientapproval" boolean,
	"estdeffort" numeric,
	"projecttaskid" integer,
	"taskseq" integer,
	"activitycode" varchar(100),
	"taskcode" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."temporary_user_extraction_data" (
	"businesspartner" varchar,
	"personexternalid" varchar,
	"bpidentificationtype" varchar,
	"firstname" varchar,
	"lastname" varchar,
	"middlename" varchar,
	"userid" varchar,
	"workassignment" varchar,
	"companycode" varchar,
	"costcenter" varchar,
	"countryorregion" varchar,
	"companyid" integer,
	"departmentid" integer,
	"nationality" integer,
	"email" varchar,
	"comuserid" integer,
	"sapuserworkassignmentid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."temporay_skillmaster" (
	"skillmasterid" integer NOT NULL,
	"skill" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"skillarea" integer NOT NULL,
	"skilltype" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."tenantemailidconfiguration" (
	"tenantemailidconfigurationid" integer PRIMARY KEY DEFAULT nextval('tenantemailidconfiguration_tenantemailidconfigurationid_seq'::regclass) NOT NULL,
	"emailid" varchar(500),
	"emailhost" varchar(1000),
	"emailport" integer,
	"emailpasswordcode" varchar(1000) NOT NULL,
	"emailpasswordkey" varchar(1000) NOT NULL,
	"emailusetls" boolean,
	"createdcomuserid" integer,
	"createddate" date,
	"modifiedcomuserid" integer,
	"modifieddate" date,
	"comtenantid" integer NOT NULL,
	"username" varchar(2000)
);
--> statement-breakpoint
CREATE TABLE "e360"."tenants3bucketconfiguration" (
	"tenants3bucketconfigurationid" serial PRIMARY KEY NOT NULL,
	"comtenantid" integer,
	"bucketname" varchar(1000),
	"access_key_id" varchar(1000),
	"secret_access_key" varchar(1000),
	"region_name" varchar(1000)
);
--> statement-breakpoint
CREATE TABLE "e360"."tenantcontacts" (
	"tenantcontactpersonsid" integer PRIMARY KEY DEFAULT nextval('tenantcontacts_tenantcontactpersons_pkey_seq'::regclass) NOT NULL,
	"comtenantid" integer NOT NULL,
	"contactpersonname" varchar(250) NOT NULL,
	"designation" varchar(250),
	"phoneno" varchar(50) NOT NULL,
	"email" varchar(500) NOT NULL,
	"isrenewalreminderneedtosend" boolean,
	"isinvoiceneedtosend" boolean,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."tenantsubscription" (
	"tenantsubscriptionid" integer PRIMARY KEY DEFAULT nextval('tenantsubscription_tenantsubscriptionid_seq'::regclass) NOT NULL,
	"comtenantid" integer NOT NULL,
	"datsubscriptionpackageid" integer NOT NULL,
	"subscriptionfromdate" date,
	"subscriptiontodate" date,
	"graceperiodindays" smallint,
	"istrialaccount" boolean,
	"activeflag" boolean,
	"isadvancesubscriptionrenew" boolean DEFAULT false NOT NULL,
	"createdtimestamp" timestamp,
	"createdcomuserid" smallint,
	"deletedcomuserid" smallint,
	"deletedtimestamp" timestamp,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"deletedflag" boolean,
	"billingcycle" smallint
);
--> statement-breakpoint
CREATE TABLE "e360"."tenantsubscriptionhistory" (
	"tenantsubscriptionhistoryid" integer PRIMARY KEY DEFAULT nextval('tenantsubscriptionhistory_tenantsubscriptionhistoryid_seq'::regclass) NOT NULL,
	"tenantsubscriptionid" integer,
	"comtenantid" integer NOT NULL,
	"datsubscriptionpackageid" integer NOT NULL,
	"subscriptionfromdate" date,
	"subscriptiontodate" date,
	"graceperiodindays" smallint,
	"istrialaccount" boolean,
	"activeflag" boolean,
	"isadvancesubscriptionrenew" boolean DEFAULT false NOT NULL,
	"createdtimestamp" timestamp,
	"createdcomuserid" smallint,
	"deletedcomuserid" smallint,
	"deletedtimestamp" timestamp
);
--> statement-breakpoint
CREATE TABLE "e360"."timesheetbillinginput" (
	"timesheetbillinginputid" serial PRIMARY KEY NOT NULL,
	"projectid" integer NOT NULL,
	"comuserid" integer NOT NULL,
	"yearmonthid" integer NOT NULL,
	"projectstaffid" integer NOT NULL,
	"projectroleid" integer NOT NULL,
	"billableeffort" double precision NOT NULL,
	"nonbillableeffort" double precision NOT NULL,
	"billrate" numeric(10, 2) NOT NULL,
	"notes" varchar(500),
	"isactiveflag" boolean,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" integer NOT NULL,
	"status" integer,
	"submitteduserid" integer,
	"submittedtimestamp" timestamp,
	"approveduserid" integer,
	"approvedtimestamp" timestamp,
	"comtenantid" integer NOT NULL,
	"submissionremarks" varchar(500),
	"approverremarks" varchar(500),
	"pmremarks" varchar(500),
	"dmremarks" varchar(500)
);
--> statement-breakpoint
CREATE TABLE "e360"."tenantsubscriptionpricinghistory" (
	"tenantsubscriptionpricinghistoryid" serial PRIMARY KEY NOT NULL,
	"tenantsubscriptionpricingid" integer NOT NULL,
	"tenantsubscriptionid" integer,
	"comtenantid" integer,
	"minusers" integer,
	"maxusers" integer,
	"unitprice" numeric,
	"datcomcurrencyid" integer,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."test_alloc" (
	"userid" integer,
	"allocperc" numeric(12, 2),
	"benchperc" numeric(12, 2),
	"allocation_status" varchar(50),
	"benchage" integer,
	"maxallocationenddate" date,
	"futureallocationstartdate" date,
	"dateofjoining" date,
	"noofdayspending" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."test_count" (
	"userid" integer,
	"count1" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."test_customerrates" (
	"id" serial NOT NULL,
	"custrateid" integer,
	"croleid" integer,
	"levelid" integer,
	"bill_hr" double precision,
	"rolename" varchar(500),
	"comcurrencyid" integer,
	"isactiveflag" boolean,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"comtenantid" integer,
	"customerid" integer,
	"locationid" integer,
	"isonsite" boolean,
	"rateunit" integer,
	"countryid" integer,
	"skillareamasterid" integer,
	"techgroupid" integer,
	"min_bandid" integer,
	"max_bandid" integer,
	"datprojectbillingtypeid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."test_emp" (
	"userid" integer,
	"employeecode" varchar(500),
	"employeename" text,
	"workforcegroupname" varchar(500),
	"companyname" varchar(500),
	"designation" varchar(500),
	"department" varchar(500),
	"band" varchar(500),
	"servicelinename" varchar(500),
	"statusname1" varchar(50),
	"managercode" varchar(50),
	"managername" varchar(500),
	"usertype" varchar(500),
	"emptype" varchar(500),
	"skill" varchar(500),
	"dateofjoining" date,
	"exitdate" date,
	"allocperc1" numeric(12, 2),
	"benchperc1" numeric(12, 2),
	"allocationstatus" varchar(100),
	"lastprojectenddate" date,
	"baldays" integer,
	"servicelinehead" varchar,
	"employeeemailid" varchar(200),
	"projectdetail" json,
	"futureallocationstartdate" date,
	"servicelinegroupname" varchar(200)
);
--> statement-breakpoint
CREATE TABLE "e360"."test_maxallocationenddate" (
	"userid" integer,
	"maxallocationenddate" date
);
--> statement-breakpoint
CREATE TABLE "e360"."test_staffing" (
	"projectstaffid" integer,
	"projroleid" integer,
	"userid" integer,
	"allocation" double precision,
	"startdate" timestamp,
	"enddate" timestamp,
	"isactiveflag" boolean,
	"notes" varchar(100),
	"projectid" integer,
	"comtenantid" integer,
	"currency" varchar(50),
	"projectname" varchar(250),
	"cityname" varchar(100),
	"workmode" varchar(50),
	"loginusername" varchar(250),
	"rolename" varchar(100),
	"cityid" integer,
	"citytext" text,
	"billratehr" numeric,
	"cost_hr" double precision,
	"peopleno" integer,
	"roleallocation" double precision,
	"levelid" integer,
	"skillid" integer,
	"techid" integer,
	"levelname" varchar(50),
	"skill" varchar(50),
	"technology" varchar(50),
	"billable" boolean,
	"employeecode" varchar(50),
	"workertypeid" integer,
	"workertype" varchar(50),
	"username" text,
	"staffingstatusid" integer,
	"statffingstatus" varchar(50),
	"projectmanagername" text
);
--> statement-breakpoint
CREATE TABLE "e360"."test_timesheetcompliance" (
	"userid" integer,
	"allocateddays" numeric(12, 2),
	"timesheetdays" numeric(12, 2)
);
--> statement-breakpoint
CREATE TABLE "e360"."test_timesheetcompliancesummary" (
	"userid" integer,
	"allocateddays" numeric(12, 2),
	"timesheetdays" numeric(12, 2),
	"complianceperc" numeric(12, 2)
);
--> statement-breakpoint
CREATE TABLE "e360"."test_timesheetexception" (
	"userid" integer,
	"projectid" integer,
	"companyid" integer,
	"roleid" integer,
	"dailyworkinghours" numeric(12, 2),
	"allocateddays" numeric(12, 2),
	"plannedhours" numeric(12, 2),
	"timsheethours" numeric(12, 2),
	"allocationperc" numeric(12, 2),
	"date1" date,
	"weekstartdate" date,
	"weekenddate" date,
	"projectstaffid" integer,
	"rolename" varchar(1000)
);
--> statement-breakpoint
CREATE TABLE "e360"."test_timesheetexceptionsummary" (
	"userid" integer,
	"roleid" integer,
	"projectid" integer,
	"projectname" varchar(1000),
	"projectcode" varchar(100),
	"companyid" integer,
	"plannedhours" numeric(12, 2),
	"timsheethours" numeric(12, 2),
	"weekstartdate" date,
	"weekenddate" date,
	"noncompliancetype" varchar(100),
	"variation" numeric(12, 2),
	"timesheetstatus" varchar,
	"approverremarks" varchar,
	"approveremployeeid" varchar,
	"approved" boolean,
	"projectmanagerid" integer,
	"pmo1" integer,
	"pmo2" integer,
	"projectstaffid" integer,
	"rolename" varchar(1000)
);
--> statement-breakpoint
CREATE TABLE "e360"."test_useralloc" (
	"userid" integer,
	"projectstaffid" integer,
	"projectid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."testenddateupd" (
	"name" varchar(500),
	"projectname" varchar(500),
	"enddate" date,
	"userid" integer,
	"projectid" integer,
	"projectstaffid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."teststaffingupd" (
	"empid" varchar(50),
	"name" varchar(500),
	"projectcode" varchar(50),
	"projectname" varchar(500),
	"allocationperc" numeric(12, 2),
	"userid" integer,
	"projectid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."timetemplatemaster" (
	"timetemplatemasterid" serial PRIMARY KEY NOT NULL,
	"templatename" varchar(250),
	"comtenantid" integer NOT NULL,
	"companyid" integer NOT NULL,
	"isdefault" boolean,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"templatetype" char(1),
	"minhours" numeric(12, 2),
	"validationunit" integer,
	"allocationrestriction" boolean,
	"maxhours" numeric(12, 2)
);
--> statement-breakpoint
CREATE TABLE "e360"."tenantsubscriptionpricing" (
	"tenantsubscriptionpricingid" serial PRIMARY KEY NOT NULL,
	"tenantsubscriptionid" integer,
	"comtenantid" integer,
	"minusers" integer,
	"maxusers" integer,
	"unitprice" numeric,
	"datcomcurrencyid" integer,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_actualprojecteffortmonthwise" (
	"id" serial PRIMARY KEY NOT NULL,
	"projectroleid" integer,
	"projectprofitabilityid" bigint,
	"projectid" integer,
	"comtenantid" integer,
	"yearmonthid" integer,
	"effort" numeric(18, 3),
	"plannedeffort" numeric(18, 3),
	"actualeffort" numeric(18, 3)
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_allocatedprojectlist" (
	"userid" integer,
	"projectid" integer,
	"allocation" numeric(8, 2),
	"date1" date
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_allocation_status" (
	"comuserid" integer,
	"companyid" integer,
	"benchprojectid" integer,
	"allocation_percentage" numeric(12, 2),
	"comtenantid" integer,
	"projectstartdate" date,
	"projectenddate" date,
	"projectroleid" integer,
	"projectstaffid" integer,
	"joindate" date
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_benchprojectstaffid" (
	"userid" integer,
	"projectstaffid" integer,
	"projectroleid" integer,
	"timetemplatemasterid" integer,
	"comcountryid" integer,
	"workertypeid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_companytransferdetail" (
	"comtenantid" integer,
	"comuserid" integer,
	"companyid" integer,
	"benchprojectid" integer,
	"projectstaffid" integer,
	"startdate" date,
	"enddate" date,
	"projroleid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_dat_menupermisssions" (
	"roleid" integer,
	"rolename" varchar,
	"code" varchar,
	"datmenuid" integer,
	"menuname" varchar,
	"tcode" varchar,
	"permissionname" varchar,
	"datmenupermissionid" integer,
	"rolemenuid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_demandmatch" (
	"comuserid" integer,
	"demandcode" varchar,
	"matchstatus" varchar,
	"matchstatuscode" varchar,
	"matchcode" integer,
	"demandmatchid" integer,
	"demandid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_dynamicdate1" (
	"yearmonth" integer,
	"date1" date
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_dynamicdate_timesheetdetails" (
	"effortdate" varchar(12),
	"efforthours" numeric(12, 2),
	"starttime" numeric(12, 2),
	"endtime" numeric(12, 2)
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_dynamicdateforreport" (
	"monthname" varchar,
	"yearmonth" integer,
	"start_date" date,
	"end_date" date,
	"monthenddate" date,
	"monthstartdate" date
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_dynamicdateforreport_profitablity" (
	"monthname" varchar,
	"yearmonth" integer,
	"start_date" date,
	"end_date" date,
	"monthenddate" date,
	"monthstartdate" date
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_employee_allocation" (
	"projectid" bigint,
	"comuserid" bigint,
	"servicelineid" bigint,
	"businessunitid" bigint,
	"customerid" bigint,
	"servicelinegroupid" bigint,
	"servicelinegroupname" varchar(500),
	"projectname" varchar(500),
	"employeename" varchar(500),
	"businessunitname" varchar(500),
	"customername" varchar(500),
	"servicelinename" varchar(500),
	"customergroupid" bigint,
	"customergroupname" varchar(500),
	"utilization" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_employeedetails" (
	"comuserid" integer NOT NULL,
	"employeename" varchar(1000),
	"employeecode" varchar(100),
	"effortdetails" json
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_employeeeffortdetails" (
	"projectid" integer,
	"projecttaskid" integer,
	"actualhours" numeric(12, 2),
	"actualstartdate" date,
	"actualenddate" date
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_exchange_rate" (
	"exchangerateid" integer,
	"currencyfrom" integer,
	"currencycodefrom" varchar,
	"currencyto" integer,
	"currencycodeto" varchar,
	"conversionrate" numeric(10, 4),
	"validfrom" date,
	"validto" date,
	"isactiveflag" boolean,
	"createdtimestamp" timestamp,
	"createdcomuserid" smallint,
	"notes" varchar(100),
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_fortimesheet_data" (
	"entrytype" varchar,
	"projstaffid" integer,
	"effortid" integer,
	"staffname" varchar,
	"employeecode" varchar,
	"projectid" integer,
	"customerid" integer,
	"comuserid" integer,
	"projectname" varchar,
	"startdate" date,
	"enddate" date,
	"rolename" varchar,
	"projroleid" integer,
	"curstatus" varchar,
	"approverremarks" varchar,
	"prevstatus" varchar,
	"effortnotes" varchar,
	"timecategorymasterid" integer,
	"timecategoryname" varchar,
	"projecttaskid" integer,
	"projtaskid" integer,
	"taskdesc" varchar,
	"referencenumber" varchar,
	"clientapproval" boolean,
	"billtoclient" boolean,
	"timesheetdetails" json,
	"timesheetconfiguration" json,
	"companyholidays" json,
	"customerholidays" json,
	"allocationstartdate" date,
	"allocationenddate" date,
	"allocationperc" numeric(12, 2),
	"workdays" json,
	"status" varchar(20),
	"statusid" integer,
	"taskstartdate" date,
	"taskenddate" date,
	"curyearmonth" integer,
	"curbillingconfirmation" boolean,
	"prevyearmonth" integer,
	"prevbillingconfirmation" boolean,
	"secondprevyearmonth" integer,
	"secondprevbillingconfirmation" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_maxallocationenddate" (
	"userid" integer,
	"maxallocationenddate" date
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_menu_permission" (
	"modulealiasname" varchar(250),
	"modulename" varchar(250),
	"menuname" varchar(250),
	"permissionname" varchar(250),
	"datmodulealiasid" integer,
	"datmoduleid" integer,
	"datmenuid" integer,
	"relativepage" varchar,
	"isfullrights" boolean,
	"moduledisplayorder" integer,
	"menudisplayorder" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."timetypemaster" (
	"timetypeid" integer PRIMARY KEY DEFAULT nextval('timetypemaster_timetypemaster_pkey_seq'::regclass) NOT NULL,
	"timetype" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."timetypetemplatemapping" (
	"timetypetemplatemappingid" serial PRIMARY KEY NOT NULL,
	"timetemplatemasterid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"companyid" integer NOT NULL,
	"comcountryid" integer NOT NULL,
	"validationunit" integer NOT NULL,
	"weekendentryallowed" boolean NOT NULL,
	"holidayallowed" boolean NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"mindailylimit" numeric(12, 2) NOT NULL,
	"maxdailylimit" numeric(12, 2) NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"timecategorymasterid" integer,
	"workertypeid" integer,
	"allocationrestriction" boolean,
	"timeentryformat" varchar(1),
	"timetypeuniqueness" varchar(1),
	"selfattestation" boolean,
	"holidaycalendarintegration" varchar(2),
	"weekdayentryallowed" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_menu_permission1" (
	"orderid" serial NOT NULL,
	"roleid" integer,
	"rolename" varchar,
	"rolecode" varchar(100),
	"modulealiasname" varchar(250),
	"modulename" varchar(250),
	"menuname" varchar(250),
	"permissionname" varchar(250),
	"datmodulealiasid" integer,
	"datmoduleid" integer,
	"rolemenuid" integer,
	"datmenuid" integer,
	"relativepage" varchar,
	"isfullrights" boolean,
	"moduledisplayorder" integer,
	"menudisplayorder" integer,
	"datmenupermissionid" integer,
	"permissiondisplayorder" integer,
	"ismenuselected" boolean,
	"isselected" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_menupermisssionsdisplayorder" (
	"menuname" varchar,
	"permissionname" varchar,
	"datmenupermissionid" integer,
	"displayorder" integer,
	"rolemenuid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_missing_skill" (
	"skill" varchar,
	"skillarea" varchar,
	"skillareamasterid" integer,
	"skillmasterid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_monthname" (
	"monthname" varchar(100),
	"yearmonth" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_noncompliancedata" (
	"employeeid" varchar(100),
	"employeename" varchar(1000),
	"employeeemailid" varchar(1000),
	"projectname" varchar(1000),
	"projectcode" varchar(100),
	"rolename" varchar(1000),
	"plannedhours" numeric(12, 2),
	"effort" numeric(12, 2),
	"approvalstatus" varchar(100),
	"approverremarks" varchar(1000),
	"approvername" varchar(1000),
	"approveremployeeid" varchar(100),
	"approved" boolean,
	"servicelinename" varchar(1000),
	"businessunitname" varchar(1000),
	"billingtype" varchar(1000),
	"weekstartdate" varchar,
	"weekenddate" varchar,
	"projectmanagername" varchar(1000),
	"projectmanagercode" varchar(100),
	"projectmanageremailid" varchar(1000),
	"noncompliancetype" varchar(100),
	"pmo1name" varchar(1000),
	"pmo1emailid" varchar(1000),
	"pmo2name" varchar(1000),
	"pmo2emailid" varchar(1000),
	"workertype" varchar(500),
	"workforcegroupname" varchar(500),
	"employeestatus" varchar(500),
	"allocationstatus" varchar(500),
	"timesheetstatus" varchar(500),
	"timetemplate" varchar(500),
	"customername" varchar(500),
	"timecategory" varchar(50)
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_orgcostrate" (
	"orgcostrateid" integer,
	"comtenantid" integer,
	"companyid" integer,
	"companycode" varchar,
	"bandid" integer,
	"bandname" varchar,
	"cost" numeric(18, 3),
	"comcurrencyid" integer,
	"currencycode" varchar,
	"unit" smallint,
	"startdate" date,
	"enddate" date,
	"isactiveflag" boolean,
	"countryid" integer,
	"countrycode" varchar,
	"skillareamasterid" integer,
	"skillarea" varchar,
	"techgroupid" integer,
	"techgroup" varchar,
	"createdtimestamp" date,
	"createdcomuserid" bigint
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_profitability_report_data" (
	"postingdate" varchar(20),
	"period" varchar(7),
	"projectname" varchar(250) NOT NULL,
	"projecttype" varchar(100) NOT NULL,
	"projectid" varchar(20),
	"customer" varchar(500),
	"serviceline" varchar(100),
	"source" varchar(25),
	"empno" varchar(15),
	"empname" varchar(300),
	"role" varchar(250),
	"quantity" numeric(18, 3),
	"uom" varchar(10),
	"unitrate" numeric(18, 3),
	"unitper" varchar(10),
	"amount" numeric(18, 3),
	"exrate" numeric,
	"lcamount" numeric(18, 3),
	"lccurrency" varchar(20),
	"basecurrencyid" integer,
	"glaccount" varchar(250),
	"glaccountdescription" varchar(500),
	"referencedocument" varchar(100),
	"projcurrency" varchar(20),
	"remarks" varchar(500),
	"orgcurrencyid" integer,
	"projcurrencyid" integer,
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_project" (
	"projectid" integer PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_project_allocation_detail" (
	"userid" integer,
	"allocation" numeric,
	"projectmanageremailid" varchar(500),
	"deliverymanageremailid" varchar(500),
	"projectcode" varchar(100),
	"projectid" integer,
	"projectname" varchar(200),
	"enddate" date,
	"projectroleid" integer,
	"rolename" varchar(200),
	"projectmanagername" varchar(300),
	"managercode" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_project_workdays" (
	"projectid" bigint,
	"category" varchar,
	"companyid" bigint,
	"customerid" bigint,
	"workdays" json
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projectallocationdetails" (
	"userid" integer,
	"projectallocation" numeric(13, 2),
	"benchallocation" numeric(13, 2),
	"plannedbenchallocationhrs" numeric(12, 2),
	"actualbenchallocationhrs" numeric(12, 2),
	"dailyworkinghours" numeric(12, 2),
	"servicelineid" integer,
	"benchprojectid" integer,
	"date1" date,
	"companyid" integer,
	"benchprojectstaffid" integer,
	"benchprojectroleid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projectdata22" (
	"projectid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projecteffortovertime_profitablity" (
	"projectroleid" integer,
	"overtimeprojecthours" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projecteffortreportdata" (
	"comuserid" integer,
	"projectid" integer,
	"projstaffid" integer,
	"projeffortid" integer,
	"weekefforthours" numeric,
	"yearmonthid" integer[],
	"startdate" date,
	"enddate" date,
	"status" integer,
	"approverremarks" varchar,
	"approverid" integer,
	"approved" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projecteffortrevenuedata" (
	"comuserid" integer,
	"currprojecthours" numeric,
	"salerate" numeric(18, 3),
	"rateunitid" integer,
	"monthlyworkingdays" integer,
	"weeklyworkinghours" numeric(18, 2),
	"projroleid" integer,
	"datcurrencyid" integer,
	"basecurrency" integer,
	"exchangerate" numeric,
	"oldsalerate" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projecteffortrevenuedata_profitablity" (
	"comuserid" integer,
	"currprojecthours" numeric,
	"salerate" numeric(18, 3),
	"rateunitid" integer,
	"monthlyworkingdays" integer,
	"weeklyworkinghours" numeric(18, 2),
	"projroleid" integer,
	"datcurrencyid" integer,
	"basecurrency" integer,
	"exchangerate" numeric,
	"oldsalerate" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projecteffortuptomonth" (
	"projectroleid" integer,
	"currprojecthours" numeric,
	"salerate" numeric(18, 3),
	"allocation" numeric(18, 3),
	"rateunitid" integer,
	"monthlyworkingdays" integer,
	"weeklyworkinghours" numeric(18, 3),
	"effort" numeric(18, 3),
	"plannedcost" numeric(18, 3),
	"perccompletion" numeric(18, 6),
	"estimateamount" numeric(18, 3),
	"revenue" numeric(18, 3),
	"datcurrencyid" integer,
	"basecurrency" integer,
	"exchangerate" numeric,
	"oldsalerate" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projecteffortuptomonth_profitablity" (
	"projectroleid" integer,
	"currprojecthours" numeric,
	"salerate" numeric(18, 3),
	"allocation" numeric(18, 3),
	"rateunitid" integer,
	"monthlyworkingdays" integer,
	"weeklyworkinghours" numeric(18, 3),
	"effort" numeric(18, 3),
	"plannedcost" numeric(18, 3),
	"perccompletion" numeric(18, 6),
	"estimateamount" numeric(18, 3),
	"revenue" numeric(18, 3),
	"datcurrencyid" integer,
	"basecurrency" integer,
	"exchangerate" numeric,
	"oldsalerate" numeric,
	"noofholydays" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projectesteffortsummary" (
	"projectid" integer,
	"estimatedlhours" numeric(12, 2),
	"actualhours" numeric(12, 2),
	"completionperc" numeric(12, 2)
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projectexpense" (
	"project_code" varchar,
	"project_name" varchar,
	"month" varchar,
	"year" integer,
	"overhead" varchar,
	"description" varchar,
	"transaction_date" date,
	"transaction_id" varchar,
	"amount" numeric(14, 3),
	"currency" varchar,
	"linked_user" varchar,
	"cost_center_code" varchar,
	"projectid" integer,
	"dat_currencyid" integer,
	"taggeduserid" integer,
	"monthid" integer,
	"overheadmasterid" integer,
	"companyid" integer,
	"comtenantid" integer,
	"createdcomuserid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projectplancostdata" (
	"projectid" integer,
	"rolename" varchar,
	"projroleid" integer,
	"estdeffort" numeric(18, 3),
	"peopleno" integer,
	"allocation" numeric,
	"plannedeffort" numeric(18, 3),
	"currprojecthours" numeric,
	"salerate" numeric(18, 3),
	"rateunitid" integer,
	"timesheet" numeric(18, 3),
	"monthlyworkingdays" integer,
	"perc_against_total" numeric(18, 6),
	"weeklyworkinghours" numeric(18, 3),
	"revenue" numeric(18, 3),
	"totalrevenue" numeric(18, 3),
	"perc_of_complation" numeric(18, 6),
	"totalestdamount" numeric(18, 3),
	"datcurrencyid" integer,
	"basecurrency" integer,
	"exchangerate" numeric,
	"oldsalerate" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projectplancostdata_profitablity" (
	"projectid" integer,
	"rolename" varchar,
	"projroleid" integer,
	"estdeffort" numeric(18, 3),
	"peopleno" integer,
	"allocation" numeric,
	"plannedeffort" numeric(18, 3),
	"currprojecthours" numeric,
	"salerate" numeric(18, 3),
	"rateunitid" integer,
	"timesheet" numeric(18, 3),
	"monthlyworkingdays" integer,
	"perc_against_total" numeric(18, 6),
	"weeklyworkinghours" numeric(18, 3),
	"revenue" numeric(18, 3),
	"totalrevenue" numeric(18, 3),
	"perc_of_complation" numeric(18, 6),
	"totalestdamount" numeric(18, 3),
	"datcurrencyid" integer,
	"basecurrency" integer,
	"exchangerate" numeric,
	"oldsalerate" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projectplannedrevenuedetail" (
	"projectid" integer,
	"projectroleid" integer,
	"rate" numeric(18, 3),
	"allocation" numeric(18, 3),
	"rateunitid" integer,
	"rateinhrs" numeric(18, 3),
	"plannedeffort" numeric(18, 3),
	"plannedrevenue" numeric(18, 3),
	"peopleno" integer,
	"datcurrencyid" integer,
	"basecurrency" integer,
	"exchangerate" numeric,
	"oldsalerate" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projectplannedrevenuedetail_profitablity" (
	"projectid" integer,
	"projectroleid" integer,
	"rate" numeric(18, 3),
	"allocation" numeric(26, 3),
	"rateunitid" integer,
	"rateinhrs" numeric(26, 3),
	"plannedeffort" numeric(26, 3),
	"plannedrevenue" numeric(26, 3),
	"peopleno" integer,
	"datcurrencyid" integer,
	"basecurrency" integer,
	"exchangerate" numeric,
	"oldsalerate" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projectroletasks" (
	"projroleid" integer NOT NULL,
	"projtaskid" integer NOT NULL,
	"isactive" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projectstaff_data" (
	"projectstaffid" integer,
	"projectid" integer,
	"allocation" numeric(12, 2),
	"projroleid" integer,
	"comuserid" integer,
	"projectname" varchar,
	"rolename" varchar,
	"startdate" varchar,
	"enddate" varchar,
	"staffingstatusid" integer,
	"statusname" varchar,
	"taskdetails" json,
	"curyearmonth" integer,
	"curbillingconfirmation" boolean,
	"prevyearmonth" integer,
	"prevbillingconfirmation" boolean,
	"secondprevyearmonth" integer,
	"secondprevbillingconfirmation" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projectstaff_data1" (
	"comuserid" integer,
	"startdate" date,
	"enddate" date,
	"staffingstatusid" integer,
	"allocation" numeric,
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_projecttimelinedetails" (
	"projectid" integer,
	"projectname" varchar(1000),
	"projectcode" varchar(100),
	"acitivityid" integer,
	"projecttaskid" integer,
	"phasenmae" varchar(500),
	"taskname" varchar(500),
	"plannedstartdate" date,
	"plannedenddate" date,
	"plannedhours" numeric(12, 2),
	"actualstartdate" date,
	"actualenddate" date,
	"actualhours" numeric(12, 2)
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_rolemaster" (
	"roleid" integer,
	"rolename" varchar(500),
	"code" varchar(50),
	"activeflag" boolean,
	"comtenantid" integer,
	"createdtimestamp" timestamp,
	"createdcomuserid" smallint,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"istenantadmin" boolean,
	"issystemadmin" boolean,
	"ismmadmin" boolean,
	"isfinancemanager" boolean,
	"isdeliverymanger" boolean,
	"istalentmanger" boolean,
	"ispeoplemanager" boolean,
	"issalesmanager" boolean,
	"ispractisehead" boolean,
	"isemployee" boolean,
	"isbuhead" boolean,
	"issystemrole" boolean,
	"isservicelinehead" boolean,
	"ispmo" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_rolemenupermissions" (
	"rolemenuid" integer,
	"rolename" varchar,
	"datmenuname" varchar,
	"roleid" integer,
	"datmenuid" integer,
	"todatmenuid" integer,
	"toroleid" integer,
	"datmenupermissionid" integer,
	"todatmenupermissionid" integer,
	"permissionname" varchar,
	"torolemenuid" integer,
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_rolemenus" (
	"rolemenuid" integer,
	"rolename" varchar,
	"datmenuname" varchar,
	"roleid" integer,
	"datmenuid" integer,
	"todatmenuid" integer,
	"toroleid" integer,
	"isfullrights" boolean,
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_selectedemployee" (
	"userid" integer,
	"companyid" integer,
	"comtenantid" integer,
	"workertypeid" integer,
	"countryid" integer,
	"projectid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_selectedemployeedistinct" (
	"userid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_selectedprojectdashboardnew" (
	"projectid" integer,
	"projectname" varchar(1000),
	"customerid" integer,
	"customername" varchar(1000),
	"servicelineid" integer,
	"servicelinename" varchar(1000),
	"regionid" integer,
	"regionname" varchar(1000),
	"accountid" integer,
	"accountname" varchar(1000),
	"projectmanagerid" integer,
	"projectmanagername" varchar(1000),
	"deliverymanagerid" integer,
	"deliverymanagername" varchar(1000),
	"totalestimateamt" numeric(18, 2),
	"comtenantid" integer,
	"currencyid" integer,
	"exchangerate" numeric(26, 6)
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_serviceline_data" (
	"servicelineid" integer,
	"servicelinename" varchar,
	"monthid" integer,
	"monthname" varchar,
	"employeecount" integer,
	"total_utlization" numeric,
	"avg_utlization" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_servilcelinetransferdetail" (
	"comtenantid" integer,
	"comuserid" integer,
	"servicelineid" integer,
	"benchprojectid" integer,
	"projectstaffid" integer,
	"startdate" date,
	"enddate" date,
	"projroleid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_skill_data" (
	"employeecode" varchar,
	"name" varchar,
	"skills" varchar,
	"comuserid" integer,
	"skillmasterid" integer,
	"skillareamasterid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_skillarea_data" (
	"skillareamasterid" integer,
	"skillarea" varchar,
	"monthid" integer,
	"monthname" varchar,
	"employeecount" integer,
	"total_utlization" numeric,
	"avg_utlization" numeric
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_staff_allocation_data" (
	"comuserid" integer,
	"employeeid" varchar,
	"employeename" varchar,
	"companyid" integer,
	"bandmasterid" integer,
	"dateofjoining" date
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_staffedprojectid" (
	"projectid" integer PRIMARY KEY NOT NULL,
	"curyearmonth" integer,
	"curbillingconfirmation" boolean,
	"prevyearmonth" integer,
	"prevbillingconfirmation" boolean,
	"secondprevyearmonth" integer,
	"secondprevbillingconfirmation" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_startandenddate" (
	"startdate" date,
	"enddate" date
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_timesheetavailableprojectid" (
	"projectid" integer PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_timesheetconfiguration" (
	"entrytype" varchar,
	"projectid" integer,
	"userid" integer,
	"timetemplatemasterid" integer,
	"templatename" varchar,
	"companyid" integer,
	"isdefault" boolean,
	"templatetype" varchar,
	"validationunit" integer,
	"validationunitname" varchar(50),
	"allocationrestriction" boolean,
	"maxhours" numeric(12, 2),
	"minhours" numeric(12, 2),
	"timetypetemplatemapping" json
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_timesheetconfiguration_jsondata" (
	"entrytype" varchar,
	"projectid" integer,
	"userid" integer,
	"companyid" integer,
	"timesheetconfiguration" json
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_timesheetdetails" (
	"effortid" integer,
	"projecttaskid" integer,
	"projtaskid" integer,
	"timecategorymasterid" integer,
	"taskdesc" varchar,
	"referencenumber" varchar,
	"effortdate" timestamp,
	"efforthours" numeric(12, 2),
	"starttime" numeric(12, 2),
	"endtime" numeric(12, 2),
	"projstaffid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_timesheetdetails_jsondata" (
	"effortid" integer,
	"projecttaskid" integer,
	"projtaskid" integer,
	"timecategorymasterid" integer,
	"referencenumber" varchar,
	"taskdesc" varchar,
	"timesheetdetails" json
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_totalallocation_data" (
	"comuserid" integer,
	"totalallocation" numeric,
	"startdate" date
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_totalallocation_data_profitablity" (
	"comuserid" integer,
	"totalallocation" numeric,
	"startdate" date
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_user_allocation" (
	"userid" integer,
	"allocationperc" numeric(9, 2)
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_user_allocationdays" (
	"userid" integer,
	"projroleid" integer,
	"projectid" integer,
	"totaldays" integer,
	"noofdaysworked" integer,
	"totaldaysexcludeleave" integer,
	"allocation" numeric(18, 3),
	"rate" numeric(18, 3),
	"unit" integer,
	"totalallocation" numeric(18, 3),
	"stdcost" numeric(18, 3),
	"leavedays" integer,
	"totalnoofdaysinthismonth" integer,
	"noofweeklyholidays" integer,
	"noofworkingdays" integer,
	"salerate" numeric(18, 3),
	"billable" boolean,
	"bandid" integer,
	"skillarea" integer,
	"techgroupid" integer,
	"countryid" integer,
	"allocationpercentage" numeric(18, 3),
	"rateunitid" integer,
	"stddirectcost" numeric(18, 3),
	"actualcost" numeric(18, 3),
	"cost" numeric(18, 3),
	"isdateofjoincurrmonth" boolean,
	"salecurrencyid" integer,
	"orgcurrencyid" integer,
	"basecurrency" integer,
	"exchangerate" numeric,
	"orgexchangerate" numeric,
	"oldsalerate" numeric,
	"oldorgrate" numeric,
	"totalworkingdaysinthemonth" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_user_allocationdays_profitablity" (
	"userid" integer,
	"projroleid" integer,
	"projectid" integer,
	"totaldays" integer,
	"noofdaysworked" integer,
	"totaldaysexcludeleave" integer,
	"allocation" numeric(18, 3),
	"rate" numeric(18, 3),
	"unit" integer,
	"totalallocation" numeric(18, 3),
	"stdcost" numeric(18, 3),
	"leavedays" integer,
	"totalnoofdaysinthismonth" integer,
	"noofweeklyholidays" integer,
	"noofworkingdays" integer,
	"salerate" numeric(18, 3),
	"billable" boolean,
	"bandid" integer,
	"skillarea" integer,
	"techgroupid" integer,
	"countryid" integer,
	"allocationpercentage" numeric(18, 3),
	"rateunitid" integer,
	"stddirectcost" numeric(18, 3),
	"actualcost" numeric(18, 3),
	"cost" numeric(18, 3),
	"isdateofjoincurrmonth" boolean,
	"salecurrencyid" integer,
	"orgcurrencyid" integer,
	"basecurrency" integer,
	"exchangerate" numeric,
	"orgexchangerate" numeric,
	"oldsalerate" numeric,
	"oldorgrate" numeric,
	"totalworkingdaysinthemonth" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_user_data" (
	"first_name" varchar(100),
	"last_name" varchar(100),
	"employee_id" varchar(100),
	"employee_status" varchar(100),
	"user_type" varchar(100),
	"worker_type" varchar(100),
	"time_type" varchar(100),
	"workforce_group" varchar(100),
	"email" varchar(100),
	"phone" numeric,
	"login_name" varchar(100),
	"gender" varchar(100),
	"date_of_birth" varchar(100),
	"date_of_joining" varchar(100),
	"nationality" varchar(100),
	"company" varchar(100),
	"designation" varchar(100),
	"band" varchar(100),
	"department" varchar(100),
	"service_line" varchar(100),
	"base_city" varchar(100),
	"office_location" varchar(100),
	"manager_name" varchar(100),
	"manager_emp_id" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_userholidays_profitablity" (
	"userid" integer,
	"noofholidays" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_userid" (
	"userid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_userprojectweeklyholidaysdata" (
	"comuserid" integer,
	"projectid" integer,
	"weeklyholidays" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_userprojectweeklyholidaysdata_profitablity" (
	"comuserid" integer,
	"projectid" integer,
	"weeklyholidays" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_userweekwisedata" (
	"comuserid" integer,
	"weekstartdate" date,
	"weekenddate" date,
	"projectstaffid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_userwiseutilization" (
	"comuserid" integer,
	"allocation" numeric,
	"noworkingdays" integer,
	"utilization" numeric,
	"noofdays" integer,
	"avg_utlization" numeric,
	"utcount" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_utilizationdata" (
	"comuserid" integer,
	"projectstaffid" integer,
	"allocation" numeric,
	"noworkingdays" integer,
	"utilization" numeric,
	"monthid" integer,
	"monthname" varchar,
	"noofdays" integer,
	"startdate" date,
	"enddate" date,
	"projstartdate" date,
	"projenddate" date,
	"dateofjoing" date,
	"total" numeric,
	"utcount" integer,
	"yearid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_utilizationdata_profitablity" (
	"comuserid" integer,
	"projectid" integer,
	"projectname" varchar,
	"projectstaffid" integer,
	"allocation" numeric,
	"totalallocation" numeric,
	"actualallocation" numeric,
	"noworkingdays" integer,
	"utilization" numeric,
	"monthid" integer,
	"monthname" varchar,
	"noofdays" integer,
	"startdate" date,
	"enddate" date,
	"projstartdate" date,
	"projenddate" date,
	"dateofjoing" date,
	"total" numeric,
	"utcount" integer,
	"yearid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_utilizationdata_profitablity_total" (
	"comuserid" integer,
	"projectid" integer,
	"projectname" varchar,
	"projectstaffid" integer,
	"allocation" numeric,
	"totalallocation" numeric,
	"actualallocation" numeric,
	"noworkingdays" integer,
	"utilization" numeric,
	"monthid" integer,
	"monthname" varchar,
	"noofdays" integer,
	"startdate" date,
	"enddate" date,
	"projstartdate" date,
	"projenddate" date,
	"dateofjoing" date,
	"total" numeric,
	"utcount" integer,
	"yearid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_utilizationdata_profitablitymonthwise_profitablity" (
	"comuserid" integer,
	"projectid" integer,
	"allocation" numeric,
	"noworkingdays" integer,
	"utilization" numeric,
	"monthid" integer,
	"monthname" varchar,
	"noofdays" integer,
	"avg_utlization" numeric,
	"utcount" integer,
	"yearid" integer,
	"utilizationgroup" varchar,
	"currmonth" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_utilizationdata_total" (
	"comuserid" integer,
	"projectid" integer,
	"projectname" varchar,
	"projectstaffid" integer,
	"allocation" numeric,
	"totalallocation" numeric,
	"actualallocation" numeric,
	"noworkingdays" integer,
	"utilization" numeric(18, 6),
	"monthid" integer,
	"monthname" varchar,
	"noofdays" integer,
	"startdate" date,
	"enddate" date,
	"projstartdate" date,
	"projenddate" date,
	"dateofjoing" date,
	"total" numeric,
	"utcount" integer,
	"yearid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_utilizationdatamonthwise" (
	"comuserid" integer,
	"allocation" numeric,
	"noworkingdays" integer,
	"utilization" numeric,
	"monthid" integer,
	"monthname" varchar,
	"noofdays" integer,
	"avg_utlization" numeric,
	"utcount" integer,
	"yearid" integer,
	"utilizationgroup" varchar,
	"currmonth" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_utilizationreport_staffdata" (
	"comuserid" integer,
	"employeeid" varchar,
	"employeename" varchar,
	"servicelinename" varchar,
	"servicelineid" integer,
	"locationname" varchar,
	"companyid" integer,
	"companyname" varchar,
	"designation" varchar,
	"bandmasterid" integer,
	"bandname" varchar,
	"dateofjoining" date,
	"primaryskill" varchar,
	"skillarea" varchar,
	"utilizationdetail" json,
	"totalavgutilization" numeric(12, 2) DEFAULT '0',
	"createdtimestamp" timestamp,
	"workforcegroupname" varchar(500),
	"usertype" varchar(500),
	"emptype" varchar(500),
	"departmentname" varchar(500),
	"curmonthutilization" numeric(12, 2),
	"utilizationgroup" char(2)
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_yearmonth" (
	"monthname" varchar(100),
	"yearmonth" integer,
	"yearid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."tmp_yearmonthsummary" (
	"projectroleid" integer,
	"totalnoofdays" integer,
	"yearmonth" integer,
	"noofdays" integer,
	"percentage" numeric(26, 9)
);
--> statement-breakpoint
CREATE TABLE "e360"."userdocuments" (
	"userdocumentattachmentsid" serial PRIMARY KEY NOT NULL,
	"comuserid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"documenttype" integer NOT NULL,
	"filename" varchar(500) NOT NULL,
	"filepath" varchar(200) NOT NULL,
	"versionno" varchar(25),
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"isdeletedflag" boolean,
	"deletedcomuserid" smallint,
	"deletedtimestamp" timestamp,
	"notes" varchar(100),
	"fileformat" varchar(500)
);
--> statement-breakpoint
CREATE TABLE "e360"."usereducation" (
	"comusereducationid" integer PRIMARY KEY DEFAULT nextval('usereducation_comusereducation_pkey_seq'::regclass) NOT NULL,
	"comuserid" integer NOT NULL,
	"dateducationmasterid" integer NOT NULL,
	"datcoursemasterid" integer NOT NULL,
	"datspecialisationid" integer NOT NULL,
	"university_institute" varchar(500),
	"cousetype" varchar(1),
	"gradeorclass" varchar(50),
	"percentageofmarks" numeric(9, 3),
	"periodofeducation" varchar(50),
	"yearofpassing" integer NOT NULL,
	"remarks" varchar(500),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."userleavedata" (
	"userleavedataid" serial PRIMARY KEY NOT NULL,
	"comuserid" integer NOT NULL,
	"leavestartdate" date,
	"leavereason" varchar(100),
	"leavestatus" integer,
	"islop" boolean,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"leavetypeid" integer,
	"leaveenddate" date,
	"noofdays" numeric(12, 2),
	"fromsession" varchar(100),
	"tosession" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."useraddress" (
	"comuseraddressid" integer PRIMARY KEY DEFAULT nextval('useraddress_comuseraddress_pkey_seq'::regclass) NOT NULL,
	"comuserid" integer NOT NULL,
	"addresstype" integer NOT NULL,
	"address_street" varchar(50) NOT NULL,
	"address_pobox" varchar(50) NOT NULL,
	"address3" varchar(50),
	"pincode" varchar(50),
	"comcityid" integer NOT NULL,
	"comstateid" integer NOT NULL,
	"comcountryid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."usercertification" (
	"comusercertificationid" integer PRIMARY KEY DEFAULT nextval('usercertification_comusercertification_pkey_seq'::regclass) NOT NULL,
	"comuserid" integer NOT NULL,
	"certificationname" varchar(500),
	"certificationagency" varchar(500),
	"modulename" varchar(500),
	"certificationdate" date,
	"certificationexpirydate" date,
	"remarks" varchar(500),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"certificatefilepath" varchar(2500)
);
--> statement-breakpoint
CREATE TABLE "e360"."userpreference" (
	"comuserpreferenceid" integer PRIMARY KEY DEFAULT nextval('userpreference_comuserpreference_pkey_seq'::regclass) NOT NULL,
	"comuserid" integer NOT NULL,
	"preferredlocation1id" integer,
	"preferredlocation2id" integer,
	"preferredlocation3id" integer,
	"workmode" integer NOT NULL,
	"willingtotravel" boolean NOT NULL,
	"willingtoshift" boolean NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."userskill" (
	"userskillid" integer PRIMARY KEY DEFAULT nextval('userskill_userskillid_seq'::regclass) NOT NULL,
	"comuserid" integer NOT NULL,
	"skillmasterid" integer,
	"isprimary" boolean,
	"expertise" varchar(50),
	"proficiencyid" integer,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."userrightsmenupermissions" (
	"userrightsmenupermissionsid" integer PRIMARY KEY DEFAULT nextval('userrightsmenupermissions_userrightsmenupermissionsid_seq'::regclass) NOT NULL,
	"userrightsid" integer,
	"userrightsmenuid" integer,
	"datmenuid" integer,
	"datmenupermissionid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."userskilltechnology" (
	"comuserskilltechnologyid" integer PRIMARY KEY DEFAULT nextval('userskilltechnology_comuserskilltechnology_pkey_seq'::regclass) NOT NULL,
	"comuserid" integer NOT NULL,
	"skillmasterid" integer NOT NULL,
	"technologymasterid" integer,
	"techversion" varchar(50),
	"lastusedyear" date,
	"experienceinmonths" integer,
	"remarks" varchar(500),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"expertise" varchar(200),
	"domainid" integer,
	"proficiencyid" integer,
	"isprimary" boolean
);
--> statement-breakpoint
CREATE TABLE "e360"."userwiseprojectprofitability" (
	"userwiseprojectprofitabilityid" serial PRIMARY KEY NOT NULL,
	"projectprofitabilityid" bigint,
	"comuserid" bigint,
	"servicelineid" integer,
	"comtenantid" integer NOT NULL,
	"projectid" integer NOT NULL,
	"monthid" integer,
	"yearid" integer,
	"datcomcurrencyid" integer,
	"method" char(1),
	"submethod" varchar(1),
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"margin1" numeric(18, 3),
	"margin2" numeric(18, 3),
	"datprojectbillingtypeid" integer,
	"recognizedrevenue_prevmonth" numeric,
	"recognizedrevenue_curmonth" numeric,
	"totalrecognizedrevenue" numeric,
	"directcost_prevmonth" numeric,
	"directcost_curmonth" numeric,
	"totaldirectcost" numeric,
	"indirectcost_prevmonth" numeric,
	"indirectcost_curmonth" numeric,
	"totalindirectcost" numeric,
	"plannedrevenue" numeric(18, 3),
	"basecurrencyid" integer,
	"exchangerate" numeric(12, 6),
	"margin1_curmonth" numeric(18, 3),
	"margin2_curmonth" numeric(18, 3),
	"projroleid" bigint,
	"amount" numeric(18, 3),
	"usercount" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."versionmasterdeletehistory" (
	"versionmasterdeletehistoryid" bigserial NOT NULL,
	"versionmasterid" bigint NOT NULL,
	"versionnumber" bigint NOT NULL,
	"projectid" bigint,
	"oldeffort" double precision,
	"neweffort" double precision,
	"oldprojectrevenue" numeric(18, 3),
	"newprojectrevenue" numeric(18, 3),
	"projectcurrencyid" integer,
	"oldprojectenddate" timestamp,
	"newprojectenddate" timestamp,
	"isapproved" boolean,
	"approvedcomuserid" integer,
	"approveddate" timestamp,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean,
	"issubmitted" boolean,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" integer,
	"notes" varchar(100),
	"submittedcomuserid" integer,
	"submitteddate" timestamp,
	"approvalremarks" varchar,
	"submissionremarks" varchar
);
--> statement-breakpoint
CREATE TABLE "e360"."var_comuserid" (
	"comuserid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."var_datsubscriptionpackageid" (
	"datsubscriptionpackageid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."userpayroll" (
	"userpayid" integer PRIMARY KEY DEFAULT nextval('userpayroll_proll_pkey_seq'::regclass) NOT NULL,
	"userid" integer NOT NULL,
	"monthid" integer NOT NULL,
	"yearid" integer NOT NULL,
	"amount" numeric NOT NULL,
	"datcomcurrencyid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"transactionid" varchar(500),
	"transactiondate" date,
	"externalsystemcode" varchar(500),
	"overheadid" integer NOT NULL,
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."versionschedule" (
	"versionscheduleid" bigserial NOT NULL,
	"projectid" bigint,
	"projectroleid" bigint,
	"versionmasterid" bigint NOT NULL,
	"billratehr" numeric(18, 3),
	"peopleno" integer,
	"billable" boolean,
	"rolename" varchar(200),
	"levelmasterid" integer,
	"allocation" double precision NOT NULL,
	"startdate" date,
	"enddate" date,
	"estdeffort" double precision,
	"comtenantid" integer NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" integer,
	"custrateid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."workertypemaster" (
	"workertypeid" integer PRIMARY KEY DEFAULT nextval('workertypemaster_workertypemaster_pkey_seq'::regclass) NOT NULL,
	"workertype" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."versionmaster" (
	"versionmasterid" bigserial PRIMARY KEY NOT NULL,
	"versionnumber" bigint NOT NULL,
	"projectid" bigint,
	"oldeffort" double precision,
	"neweffort" double precision,
	"oldprojectrevenue" numeric(18, 3),
	"newprojectrevenue" numeric(18, 3),
	"projectcurrencyid" integer,
	"oldprojectenddate" timestamp,
	"newprojectenddate" timestamp,
	"isapproved" boolean,
	"approvedcomuserid" integer,
	"approveddate" timestamp,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean,
	"issubmitted" boolean,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" integer,
	"notes" varchar(100),
	"submittedcomuserid" integer,
	"submitteddate" timestamp,
	"approvalremarks" varchar,
	"submissionremarks" varchar,
	"revenueremark" varchar(500),
	"timelineremark" varchar(500),
	"effortremark" varchar(500)
);
--> statement-breakpoint
CREATE TABLE "e360"."userprevexperience" (
	"comuserprevexperienceid" integer PRIMARY KEY DEFAULT nextval('userprevexperience_comuserprevexperience_pkey_seq'::regclass) NOT NULL,
	"comuserid" integer NOT NULL,
	"companyname" varchar(500) NOT NULL,
	"designation" varchar(500) NOT NULL,
	"joiningdate" date NOT NULL,
	"releivingdate" date,
	"ctc" numeric(18, 3),
	"jobprofile" varchar(5000) NOT NULL,
	"fulltimeorparttimeflag" varchar(1) NOT NULL,
	"remarks" varchar(2000),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(5000)
);
--> statement-breakpoint
CREATE TABLE "e360"."userskillattributes" (
	"userskillattributesid" integer PRIMARY KEY DEFAULT nextval('userskillattributes_userskillattributesid_seq'::regclass) NOT NULL,
	"userskillid" integer NOT NULL,
	"technologymasterid" integer,
	"industrymasterid" integer,
	"techversion" varchar(50),
	"lastusedyear" integer,
	"experienceinmonths" integer,
	"remarks" varchar(500)
);
--> statement-breakpoint
CREATE TABLE "e360"."weeklyholidaymaster" (
	"weeklyholidayconfigid" integer PRIMARY KEY DEFAULT nextval('weeklyholidaymaster_weeklyholidayconfig_pkey_seq'::regclass) NOT NULL,
	"companyid" integer NOT NULL,
	"locationid" integer NOT NULL,
	"sunholiday" boolean,
	"monholiday" boolean NOT NULL,
	"tueholiday" boolean,
	"wedholiday" boolean,
	"thuholiday" boolean,
	"friholiday" boolean NOT NULL,
	"satholiday" boolean,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."workforcegroupmaster" (
	"wfgid" integer PRIMARY KEY DEFAULT nextval('workforcegroupmaster_wfgid_pkey'::regclass) NOT NULL,
	"workforcegroup" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."workmodemaster" (
	"workmodeid" integer PRIMARY KEY DEFAULT nextval('workmodemaster_workmodemaster_pkey_seq'::regclass) NOT NULL,
	"workmode" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."auth_permission" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "e360"."auth_permission_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"content_type_id" integer NOT NULL,
	"codename" varchar(100) NOT NULL,
	CONSTRAINT "auth_permission_content_type_id_codename_01ab375a_uniq" UNIQUE("content_type_id","codename")
);
--> statement-breakpoint
CREATE TABLE "e360"."auth_group_permissions" (
	"id" bigint PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "e360"."auth_group_permissions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"group_id" integer NOT NULL,
	"permission_id" integer NOT NULL,
	CONSTRAINT "auth_group_permissions_group_id_permission_id_0cd325b0_uniq" UNIQUE("group_id","permission_id")
);
--> statement-breakpoint
CREATE TABLE "e360"."django_content_type" (
	"id" integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY (sequence name "e360"."django_content_type_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"app_label" varchar(100) NOT NULL,
	"model" varchar(100) NOT NULL,
	CONSTRAINT "django_content_type_app_label_model_76bd3d3b_uniq" UNIQUE("app_label","model")
);
--> statement-breakpoint
CREATE TABLE "e360"."tenantmaster" (
	"comtenantid" serial PRIMARY KEY NOT NULL,
	"tenantname" varchar(500) NOT NULL,
	"tenantcode" varchar(100),
	"themecode" varchar(100),
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"loginmethod" varchar(20),
	"logopath" varchar(2500),
	"heroimagepath" varchar(2500),
	"tenantaddress" varchar(3000),
	"contactdetails" varchar(2000),
	"gstnumber" varchar(50),
	"cin" varchar(50),
	"comcityid" integer,
	"pincode" varchar(10),
	"emailid" varchar(100),
	"frontendurl" varchar(2000)
);
--> statement-breakpoint
CREATE TABLE "e360"."usermaster" (
	"comuserid" integer PRIMARY KEY DEFAULT nextval('usermaster_comuser_pkey_seq'::regclass) NOT NULL,
	"datusertypeid" integer NOT NULL,
	"username" varchar(250) NOT NULL,
	"emailid" varchar(250) NOT NULL,
	"personalemailid" varchar(250),
	"mobileno" varchar(50),
	"phoneno" varchar(50),
	"firstname" varchar(250) NOT NULL,
	"lastname" varchar(250),
	"employeecode" varchar(50),
	"thirdpartyappusercode" varchar(200),
	"bloodgroup" varchar(20),
	"dateofjoining" date,
	"photo" varchar(2500),
	"datcomgenderid" integer,
	"dob" date,
	"workforcegroup" integer,
	"anniversarydate" date,
	"passwordcode" varchar(1000),
	"passwordkey" varchar(1000),
	"activeflag" boolean NOT NULL,
	"passwordexpiredflag" boolean,
	"lastpasswordchange" date,
	"systemadminflag" boolean,
	"comtenantid" integer NOT NULL,
	"payrollcompanyid" integer,
	"departmentid" integer,
	"servicelineid" integer,
	"designationmasterid" integer,
	"nationalityid" integer,
	"band" integer,
	"time_type" integer,
	"worker_type" integer,
	"emp_status" integer,
	"location_id" integer,
	"manager_id" integer,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(5000),
	"city_id" integer,
	"totalexperienceinmonths" integer,
	"workassignmentcode" varchar(20),
	"is_sapuser" boolean,
	"costcentercode" varchar(20),
	"exitdate" timestamp,
	"skillareamasterid" integer,
	"techgroupid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."citymaster" (
	"comcityid" integer PRIMARY KEY DEFAULT nextval('citymaster_comcity_pkey_seq'::regclass) NOT NULL,
	"comstateid" integer NOT NULL,
	"cityname" varchar(100) NOT NULL,
	"citycode" varchar(100),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."companycontacts" (
	"companycontactpersonid" integer PRIMARY KEY DEFAULT nextval('companycontacts_companycontactpersons_pkey_seq'::regclass) NOT NULL,
	"companyid" integer NOT NULL,
	"comtenantid" integer NOT NULL,
	"contactpersonname" varchar(250) NOT NULL,
	"designation" varchar(250),
	"phoneno" varchar(50) NOT NULL,
	"email" varchar(500) NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."datcurrency" (
	"datcomcurrencyid" smallint PRIMARY KEY DEFAULT nextval('datcurrency_datcomcurrency_pkey_seq'::regclass) NOT NULL,
	"currencycode" varchar(10) NOT NULL,
	"currency" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."regionmaster" (
	"comregionid" integer PRIMARY KEY DEFAULT nextval('regionmaster_comregion_pkey_seq'::regclass) NOT NULL,
	"regionname" varchar(100) NOT NULL,
	"regioncode" varchar(100),
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."industrymaster" (
	"industryid" integer PRIMARY KEY DEFAULT nextval('industrymaster_industryid_seq'::regclass) NOT NULL,
	"industryname" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."datlanguage" (
	"datcomlanguageid" smallint PRIMARY KEY DEFAULT nextval('datlanguage_datcomlanguage_pkey_seq'::regclass) NOT NULL,
	"languagecode" varchar(10) NOT NULL,
	"languagename" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."datprojectbilltype" (
	"datprojectbillingtypeid" integer PRIMARY KEY DEFAULT nextval('datprojectbilltype_datprojectbillingtype_pkey_seq'::regclass) NOT NULL,
	"billingtype" varchar(50) NOT NULL,
	"activeflag" boolean,
	"comtenantid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."datreportmaster" (
	"reportid" integer PRIMARY KEY DEFAULT nextval('datreportmaster_reportid_seq'::regclass) NOT NULL,
	"reportname" varchar(200),
	"reporttype" varchar(1),
	"datmenuid" integer,
	"comtenantid" integer,
	"notes" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "e360"."datstatusmaster" (
	"statusid" integer PRIMARY KEY DEFAULT nextval('datstatusmaster_statusid_seq'::regclass) NOT NULL,
	"statusname" varchar(50) NOT NULL,
	"comtenantid" integer NOT NULL,
	"statustype" char(1),
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"statuscode" varchar(20)
);
--> statement-breakpoint
CREATE TABLE "e360"."documentserialno" (
	"documentserialnoid" serial PRIMARY KEY NOT NULL,
	"documentserialnosettingid" integer NOT NULL,
	"documenttype" varchar(100) NOT NULL,
	"companyid" integer,
	"documenttypecode" varchar(20),
	"sequenceno" varchar(20),
	"prefix" varchar(30),
	"serialno" varchar(30),
	"comtenantid" integer
);
--> statement-breakpoint
CREATE TABLE "e360"."profitablityconfiguration" (
	"profitablityconfiguration" serial PRIMARY KEY NOT NULL,
	"comtenantid" integer,
	"montlyworkingdays" integer,
	"weeklyworkingdays" integer,
	"workinghoursperday" numeric(9, 2)
);
--> statement-breakpoint
CREATE TABLE "e360"."timecategorymaster" (
	"timecategorymasterid" serial PRIMARY KEY NOT NULL,
	"timecategory" varchar(250),
	"comtenantid" integer NOT NULL,
	"companyid" integer NOT NULL,
	"isactiveflag" boolean NOT NULL,
	"createdtimestamp" timestamp NOT NULL,
	"createdcomuserid" smallint NOT NULL,
	"modifiedtimestamp" timestamp,
	"modifiedcomuserid" smallint,
	"notes" varchar(100),
	"isdefault" boolean
);
--> statement-breakpoint
ALTER TABLE "e360"."bandmaster" ADD CONSTRAINT "fk_bandmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."bandmaster" ADD CONSTRAINT "fk_bandmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."bandmaster" ADD CONSTRAINT "fk_bandmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."auth_user_user_permissions" ADD CONSTRAINT "auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm" FOREIGN KEY ("permission_id") REFERENCES "e360"."auth_permission"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."auth_user_user_permissions" ADD CONSTRAINT "auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "e360"."auth_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."auth_user_groups" ADD CONSTRAINT "auth_user_groups_group_id_97559544_fk_auth_group_id" FOREIGN KEY ("group_id") REFERENCES "e360"."auth_group"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."auth_user_groups" ADD CONSTRAINT "auth_user_groups_user_id_6a12ed8b_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "e360"."auth_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."addresstypemaster" ADD CONSTRAINT "fk_addresstypemaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."addresstypemaster" ADD CONSTRAINT "fk_addresstypemaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."addresstypemaster" ADD CONSTRAINT "fk_addresstypemaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."announcements" ADD CONSTRAINT "fk_announcements_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."announcements" ADD CONSTRAINT "fk_announcements_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."announcements" ADD CONSTRAINT "fk_announcements_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."bugroupmaster" ADD CONSTRAINT "fk_bugroupmaster_businessunitgroupheadcomuserid" FOREIGN KEY ("businessunitgroupheadcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."bugroupmaster" ADD CONSTRAINT "fk_bugroupmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."bugroupmaster" ADD CONSTRAINT "fk_bugroupmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."bugroupmaster" ADD CONSTRAINT "fk_bugroupmaster_groupcontactpersonid" FOREIGN KEY ("groupcontactpersonid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."bugroupmaster" ADD CONSTRAINT "fk_bugroupmaster_groupheadid" FOREIGN KEY ("groupheadid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."bugroupmaster" ADD CONSTRAINT "fk_bugroupmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."bumaster" ADD CONSTRAINT "fk_bumaster_businessunitcontactpersonid" FOREIGN KEY ("businessunitcontactpersonid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."bumaster" ADD CONSTRAINT "fk_bumaster_businessunitgroupid" FOREIGN KEY ("businessunitgroupid") REFERENCES "e360"."bugroupmaster"("businessunitgroupid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."bumaster" ADD CONSTRAINT "fk_bumaster_businessunitheadid" FOREIGN KEY ("businessunitheadid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."bumaster" ADD CONSTRAINT "fk_bumaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."bumaster" ADD CONSTRAINT "fk_bumaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."bumaster" ADD CONSTRAINT "fk_bumaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companyholidays" ADD CONSTRAINT "fk_companyholidays_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companyholidays" ADD CONSTRAINT "fk_companyholidays_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companyholidays" ADD CONSTRAINT "fk_companyholidays_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companyholidays" ADD CONSTRAINT "fk_companyholidays_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companyweekdays" ADD CONSTRAINT "fk_companyweekdays_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companyweekdays" ADD CONSTRAINT "fk_companyweekdays_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companyweekdays" ADD CONSTRAINT "fk_companyweekdays_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companyweekdays" ADD CONSTRAINT "fk_companyweekdays_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companymaster" ADD CONSTRAINT "fk_companymaster_comcityid" FOREIGN KEY ("comcityid") REFERENCES "e360"."citymaster"("comcityid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companymaster" ADD CONSTRAINT "fk_companymaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companymaster" ADD CONSTRAINT "fk_companymaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companymaster" ADD CONSTRAINT "fk_companymaster_defaultcomcurrencyid" FOREIGN KEY ("defaultcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companymaster" ADD CONSTRAINT "fk_companymaster_deletedcomuserid" FOREIGN KEY ("deletedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companymaster" ADD CONSTRAINT "fk_companymaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."comuserprojectmapping" ADD CONSTRAINT "fk_comuserprojectmapping_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerdocuments" ADD CONSTRAINT "fk_customerdocuments_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerdocuments" ADD CONSTRAINT "fk_customerdocuments_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerdocuments" ADD CONSTRAINT "fk_customerdocuments_customerid" FOREIGN KEY ("customerid") REFERENCES "e360"."customermaster"("customerid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerdocuments" ADD CONSTRAINT "fk_customerdocuments_deletedcomuserid" FOREIGN KEY ("deletedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerdocuments" ADD CONSTRAINT "fk_customerdocuments_documenttype" FOREIGN KEY ("documenttype") REFERENCES "e360"."documenttypemaster"("documenttypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerdocuments" ADD CONSTRAINT "fk_customerdocuments_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."costcentermaster" ADD CONSTRAINT "fk_costcentermaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."costcentermaster" ADD CONSTRAINT "fk_costcentermaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."costcentermaster" ADD CONSTRAINT "fk_costcentermaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."countrymaster" ADD CONSTRAINT "fk_countrymaster_comregionid" FOREIGN KEY ("comregionid") REFERENCES "e360"."regionmaster"("comregionid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."countrymaster" ADD CONSTRAINT "fk_countrymaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."countrymaster" ADD CONSTRAINT "fk_countrymaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."countrymaster" ADD CONSTRAINT "fk_countrymaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customercontacts" ADD CONSTRAINT "fk_customercontacts_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customercontacts" ADD CONSTRAINT "fk_customercontacts_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customercontacts" ADD CONSTRAINT "fk_customercontacts_customerid" FOREIGN KEY ("customerid") REFERENCES "e360"."customermaster"("customerid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customercontacts" ADD CONSTRAINT "fk_customercontacts_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerholidays" ADD CONSTRAINT "fk_customerholidays_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerholidays" ADD CONSTRAINT "fk_customerholidays_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerholidays" ADD CONSTRAINT "fk_customerholidays_customerid" FOREIGN KEY ("customerid") REFERENCES "e360"."customermaster"("customerid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerholidays" ADD CONSTRAINT "fk_customerholidays_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupcontacts" ADD CONSTRAINT "fk_customergroupcontacts_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupcontacts" ADD CONSTRAINT "fk_customergroupcontacts_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupcontacts" ADD CONSTRAINT "fk_customergroupcontacts_customergroupid" FOREIGN KEY ("customergroupid") REFERENCES "e360"."customergroupmaster"("customergroupid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupcontacts" ADD CONSTRAINT "fk_customergroupcontacts_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."dateducation" ADD CONSTRAINT "fk_dateducation_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."dateducation" ADD CONSTRAINT "fk_dateducation_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."dateducation" ADD CONSTRAINT "fk_dateducation_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customermaster" ADD CONSTRAINT "fk_customermaster_accountmanagerid" FOREIGN KEY ("accountmanagerid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customermaster" ADD CONSTRAINT "fk_customermaster_businessunitid" FOREIGN KEY ("businessunitid") REFERENCES "e360"."bumaster"("businessunitid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customermaster" ADD CONSTRAINT "fk_customermaster_comcityid" FOREIGN KEY ("comcityid") REFERENCES "e360"."citymaster"("comcityid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customermaster" ADD CONSTRAINT "fk_customermaster_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customermaster" ADD CONSTRAINT "fk_customermaster_comregionid" FOREIGN KEY ("comregionid") REFERENCES "e360"."regionmaster"("comregionid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customermaster" ADD CONSTRAINT "fk_customermaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customermaster" ADD CONSTRAINT "fk_customermaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customermaster" ADD CONSTRAINT "fk_customermaster_customergroupid" FOREIGN KEY ("customergroupid") REFERENCES "e360"."customergroupmaster"("customergroupid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customermaster" ADD CONSTRAINT "fk_customermaster_defaultcomcurrencyid" FOREIGN KEY ("defaultcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customermaster" ADD CONSTRAINT "fk_customermaster_industryid" FOREIGN KEY ("industryid") REFERENCES "e360"."industrymaster"("industryid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customermaster" ADD CONSTRAINT "fk_customermaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupmaster" ADD CONSTRAINT "fk_customergroupmaster_accountmanagerid" FOREIGN KEY ("accountmanagerid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupmaster" ADD CONSTRAINT "fk_customergroupmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupmaster" ADD CONSTRAINT "fk_customergroupmaster_contactpersonid" FOREIGN KEY ("contactpersonid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupmaster" ADD CONSTRAINT "fk_customergroupmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupmaster" ADD CONSTRAINT "fk_customergroupmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupdocuments" ADD CONSTRAINT "fk_customergroupdocuments_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupdocuments" ADD CONSTRAINT "fk_customergroupdocuments_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupdocuments" ADD CONSTRAINT "fk_customergroupdocuments_customergroupid" FOREIGN KEY ("customergroupid") REFERENCES "e360"."customergroupmaster"("customergroupid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupdocuments" ADD CONSTRAINT "fk_customergroupdocuments_deletedcomuserid" FOREIGN KEY ("deletedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupdocuments" ADD CONSTRAINT "fk_customergroupdocuments_documenttype" FOREIGN KEY ("documenttype") REFERENCES "e360"."documenttypemaster"("documenttypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customergroupdocuments" ADD CONSTRAINT "fk_customergroupdocuments_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerrates" ADD CONSTRAINT "fk_customerrates_comcurrencyid" FOREIGN KEY ("comcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerrates" ADD CONSTRAINT "fk_customerrates_countryid" FOREIGN KEY ("countryid") REFERENCES "e360"."countrymaster"("comcountryid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerrates" ADD CONSTRAINT "fk_customerrates_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerrates" ADD CONSTRAINT "fk_customerrates_croleid" FOREIGN KEY ("croleid") REFERENCES "e360"."customerroles"("custroleid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerrates" ADD CONSTRAINT "fk_customerrates_levelid" FOREIGN KEY ("levelid") REFERENCES "e360"."levelmaster"("levelmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerrates" ADD CONSTRAINT "fk_customerrates_locationid" FOREIGN KEY ("locationid") REFERENCES "e360"."locationmaster"("comlocationid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerrates" ADD CONSTRAINT "fk_customerrates_maxbandid" FOREIGN KEY ("max_bandid") REFERENCES "e360"."bandmaster"("bandmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerrates" ADD CONSTRAINT "fk_customerrates_minbandid" FOREIGN KEY ("min_bandid") REFERENCES "e360"."bandmaster"("bandmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerrates" ADD CONSTRAINT "fk_customerrates_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerrates" ADD CONSTRAINT "fk_customerrates_skillareamasterid" FOREIGN KEY ("skillareamasterid") REFERENCES "e360"."skillareamaster"("skillareamasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerrates" ADD CONSTRAINT "fk_customerrates_techgroupid" FOREIGN KEY ("techgroupid") REFERENCES "e360"."techgroupmaster"("techgroupid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerroles" ADD CONSTRAINT "fk_customerroles_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerroles" ADD CONSTRAINT "fk_customerroles_customerid" FOREIGN KEY ("customerid") REFERENCES "e360"."customermaster"("customerid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerroles" ADD CONSTRAINT "fk_customerroles_deliveryroleid" FOREIGN KEY ("deliveryroleid") REFERENCES "e360"."deliveryrolemaster"("deliveryroleid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerroles" ADD CONSTRAINT "fk_customerroles_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customersubscription" ADD CONSTRAINT "fk_customersubscription_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customersubscription" ADD CONSTRAINT "fk_customersubscription_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customersubscription" ADD CONSTRAINT "fk_customersubscription_deletedcomuserid" FOREIGN KEY ("deletedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerweekdays" ADD CONSTRAINT "fk_customerweekdays_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerweekdays" ADD CONSTRAINT "fk_customerweekdays_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerweekdays" ADD CONSTRAINT "fk_customerweekdays_customerid" FOREIGN KEY ("customerid") REFERENCES "e360"."customermaster"("customerid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."customerweekdays" ADD CONSTRAINT "fk_customerweekdays_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datcourse" ADD CONSTRAINT "fk_datcourse_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datcourse" ADD CONSTRAINT "fk_datcourse_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datcourse" ADD CONSTRAINT "fk_datcourse_dateducationmasterid" FOREIGN KEY ("dateducationmasterid") REFERENCES "e360"."dateducation"("dateducationmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datcourse" ADD CONSTRAINT "fk_datcourse_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datexchangerate" ADD CONSTRAINT "fk_datexchangerate_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datexchangerate" ADD CONSTRAINT "fk_datexchangerate_currencyfrom" FOREIGN KEY ("currencyfrom") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datexchangerate" ADD CONSTRAINT "fk_datexchangerate_currencyto" FOREIGN KEY ("currencyto") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datexchangerate" ADD CONSTRAINT "fk_datexchangerate_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datgender" ADD CONSTRAINT "fk_datgender_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datgender" ADD CONSTRAINT "fk_datgender_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datgender" ADD CONSTRAINT "fk_datgender_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datmodule" ADD CONSTRAINT "fk_datmodule_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datmodule" ADD CONSTRAINT "fk_datmodule_datmodulealiasid" FOREIGN KEY ("datmodulealiasid") REFERENCES "e360"."datmodulealias"("datmodulealiasid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datmenupermission" ADD CONSTRAINT "fk_datmenupermission_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datmenupermission" ADD CONSTRAINT "fk_datmenupermission_datmenuid" FOREIGN KEY ("datmenuid") REFERENCES "e360"."datmenus"("datmenuid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datmenus" ADD CONSTRAINT "fk_datmenus_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datmenus" ADD CONSTRAINT "fk_datmenus_datmoduleid" FOREIGN KEY ("datmoduleid") REFERENCES "e360"."datmodule"("datmoduleid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datmodulealias" ADD CONSTRAINT "fk_datmodulealias_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datspecialisation" ADD CONSTRAINT "fk_datspecialisation_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datspecialisation" ADD CONSTRAINT "fk_datspecialisation_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datspecialisation" ADD CONSTRAINT "fk_datspecialisation_datcoursemasterid" FOREIGN KEY ("datcoursemasterid") REFERENCES "e360"."datcourse"("datcoursemasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datspecialisation" ADD CONSTRAINT "fk_datspecialisation_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datsubscriptionpackage" ADD CONSTRAINT "fk_datsubscriptionpackage_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datsubscriptionpackage" ADD CONSTRAINT "fk_datsubscriptionpackage_deletedcomuserid" FOREIGN KEY ("deletedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datsubscriptionpackage" ADD CONSTRAINT "fk_datsubscriptionpackage_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatch" ADD CONSTRAINT "fk_demandmatch_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatch" ADD CONSTRAINT "fk_demandmatch_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatch" ADD CONSTRAINT "fk_demandmatch_demandid" FOREIGN KEY ("demandid") REFERENCES "e360"."demandmaster"("demandid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatch" ADD CONSTRAINT "fk_demandmatch_matchstatus" FOREIGN KEY ("matchstatus") REFERENCES "e360"."datstatusmaster"("statusid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatch" ADD CONSTRAINT "fk_demandmatch_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatch" ADD CONSTRAINT "fk_demandmatch_userid" FOREIGN KEY ("userid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."deliveryrolemaster" ADD CONSTRAINT "fk_deliveryrolemaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandroledetail" ADD CONSTRAINT "fk_demandroledetail_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandroledetail" ADD CONSTRAINT "fk_demandroledetail_demandid" FOREIGN KEY ("demandid") REFERENCES "e360"."demandmaster"("demandid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandroledetail" ADD CONSTRAINT "fk_demandroledetail_max_bandid" FOREIGN KEY ("max_bandid") REFERENCES "e360"."bandmaster"("bandmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandroledetail" ADD CONSTRAINT "fk_demandroledetail_min_bandid" FOREIGN KEY ("min_bandid") REFERENCES "e360"."bandmaster"("bandmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatchconfiguration" ADD CONSTRAINT "demandmatchconfiguration_comtenantid_fkey" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatchconfiguration" ADD CONSTRAINT "demandmatchconfiguration_createdcomuserid_fkey" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatchconfiguration" ADD CONSTRAINT "demandmatchconfiguration_modifiedcomuserid_fkey" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datsubscriptionpackagemodule" ADD CONSTRAINT "fk_datsubscriptionpackagemodule_datsubscriptionpackageid" FOREIGN KEY ("datsubscriptionpackageid") REFERENCES "e360"."datsubscriptionpackage"("datsubscriptionpackageid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datusertype" ADD CONSTRAINT "fk_datusertype_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datusertype" ADD CONSTRAINT "fk_datusertype_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datusertype" ADD CONSTRAINT "fk_datusertype_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."deliverymodemaster" ADD CONSTRAINT "fk_deliverymodemaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."deliverymodemaster" ADD CONSTRAINT "fk_deliverymodemaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."deliverymodemaster" ADD CONSTRAINT "fk_deliverymodemaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_assignedto" FOREIGN KEY ("assignedto") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_businessunitid" FOREIGN KEY ("businessunitid") REFERENCES "e360"."bumaster"("businessunitid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_cityid" FOREIGN KEY ("cityid") REFERENCES "e360"."citymaster"("comcityid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_demandstatusid" FOREIGN KEY ("demandstatusid") REFERENCES "e360"."datstatusmaster"("statusid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_departmentid" FOREIGN KEY ("departmentid") REFERENCES "e360"."departmentmaster"("departmentid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_locationid" FOREIGN KEY ("locationid") REFERENCES "e360"."locationmaster"("comlocationid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_opportunityid" FOREIGN KEY ("opportunityid") REFERENCES "e360"."opportunity"("opportunityid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_servicelineid" FOREIGN KEY ("servicelineid") REFERENCES "e360"."slmaster"("servicelineid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_workertypeid" FOREIGN KEY ("workertypeid") REFERENCES "e360"."workertypemaster"("workertypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_workforcegroupid" FOREIGN KEY ("workforcegroupid") REFERENCES "e360"."workforcegroupmaster"("wfgid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmaster" ADD CONSTRAINT "fk_demandmaster_workmodeid" FOREIGN KEY ("workmodeid") REFERENCES "e360"."workmodemaster"("workmodeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatchconfigincludestatus" ADD CONSTRAINT "fk_demandmatchconfigincludestatus_demandmatchconfigurationid" FOREIGN KEY ("demandmatchconfigurationid") REFERENCES "e360"."demandmatchconfiguration"("demandmatchconfigurationid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatchconfigincludestatus" ADD CONSTRAINT "fk_demandmatchconfigincludestatus_includestatusid" FOREIGN KEY ("includestatusid") REFERENCES "e360"."datstatusmaster"("statusid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatchconfigincludeusertype" ADD CONSTRAINT "fk_demandmatchconfigincludeusertype_datusertypeid" FOREIGN KEY ("datusertypeid") REFERENCES "e360"."datusertype"("datusertypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatchconfigincludeusertype" ADD CONSTRAINT "fk_demandmatchconfigincludeusertype_demandmatchconfigurationid" FOREIGN KEY ("demandmatchconfigurationid") REFERENCES "e360"."demandmatchconfiguration"("demandmatchconfigurationid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatchdetails" ADD CONSTRAINT "fk_demandmatchdetails_demandmatchid" FOREIGN KEY ("demandmatchid") REFERENCES "e360"."demandmatch"("demandmatchid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandmatchdetails" ADD CONSTRAINT "fk_demandmatchdetails_userid" FOREIGN KEY ("userid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."documenttypemaster" ADD CONSTRAINT "fk_documenttypemaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."documenttypemaster" ADD CONSTRAINT "fk_documenttypemaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."documenttypemaster" ADD CONSTRAINT "fk_documenttypemaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."django_admin_log" ADD CONSTRAINT "django_admin_log_content_type_id_c4bce8eb_fk_django_co" FOREIGN KEY ("content_type_id") REFERENCES "e360"."django_content_type"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."django_admin_log" ADD CONSTRAINT "django_admin_log_user_id_c564eba6_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "e360"."auth_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."departmentmaster" ADD CONSTRAINT "fk_departmentmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."departmentmaster" ADD CONSTRAINT "fk_departmentmaster_costcenter_id" FOREIGN KEY ("costcenter_id") REFERENCES "e360"."costcentermaster"("costcenterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."departmentmaster" ADD CONSTRAINT "fk_departmentmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."departmentmaster" ADD CONSTRAINT "fk_departmentmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandroleresponsibilities" ADD CONSTRAINT "fk_demandroleresponsibilities_demandroledetailid" FOREIGN KEY ("demandroledetailid") REFERENCES "e360"."demandroledetail"("demandroledetailid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandskills" ADD CONSTRAINT "fk_demandskills_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandskills" ADD CONSTRAINT "fk_demandskills_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandskills" ADD CONSTRAINT "fk_demandskills_demandid" FOREIGN KEY ("demandid") REFERENCES "e360"."demandmaster"("demandid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandskills" ADD CONSTRAINT "fk_demandskills_domain" FOREIGN KEY ("domainid") REFERENCES "e360"."industrymaster"("industryid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandskills" ADD CONSTRAINT "fk_demandskills_skillmasterid" FOREIGN KEY ("skillmasterid") REFERENCES "e360"."skillmaster"("skillmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."demandskills" ADD CONSTRAINT "fk_demandskills_technologymasterid" FOREIGN KEY ("technologymasterid") REFERENCES "e360"."technologymaster"("technologymasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."designationmaster" ADD CONSTRAINT "fk_designationmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."designationmaster" ADD CONSTRAINT "fk_designationmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."designationmaster" ADD CONSTRAINT "fk_designationmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."designationskillmap" ADD CONSTRAINT "fk_designationskillmap_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."designationskillmap" ADD CONSTRAINT "fk_designationskillmap_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."designationskillmap" ADD CONSTRAINT "fk_designationskillmap_designationid" FOREIGN KEY ("designationid") REFERENCES "e360"."designationmaster"("designationmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."designationskillmap" ADD CONSTRAINT "fk_designationskillmap_levelid" FOREIGN KEY ("levelid") REFERENCES "e360"."levelmaster"("levelmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."designationskillmap" ADD CONSTRAINT "fk_designationskillmap_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."designationskillmap" ADD CONSTRAINT "fk_designationskillmap_skillid" FOREIGN KEY ("skillid") REFERENCES "e360"."skillmaster"("skillmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."forgotpassword" ADD CONSTRAINT "fk_forgotpassword_comuserid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."forgotpassword" ADD CONSTRAINT "fk_forgotpassword_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."forgotpassword" ADD CONSTRAINT "fk_forgotpassword_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."nationalitymaster" ADD CONSTRAINT "fk_nationalitymaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."nationalitymaster" ADD CONSTRAINT "fk_nationalitymaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."nationalitymaster" ADD CONSTRAINT "fk_nationalitymaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."holidaymaster" ADD CONSTRAINT "fk_holidaymaster_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."holidaymaster" ADD CONSTRAINT "fk_holidaymaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."holidaymaster" ADD CONSTRAINT "fk_holidaymaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."holidaymaster" ADD CONSTRAINT "fk_holidaymaster_locationid" FOREIGN KEY ("locationid") REFERENCES "e360"."locationmaster"("comlocationid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."holidaymaster" ADD CONSTRAINT "fk_holidaymaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."levelmaster" ADD CONSTRAINT "fk_levelmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."levelmaster" ADD CONSTRAINT "fk_levelmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."levelmaster" ADD CONSTRAINT "fk_levelmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."locationmaster" ADD CONSTRAINT "fk_locationmaster_comcityid" FOREIGN KEY ("comcityid") REFERENCES "e360"."citymaster"("comcityid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."locationmaster" ADD CONSTRAINT "fk_locationmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."locationmaster" ADD CONSTRAINT "fk_locationmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."locationmaster" ADD CONSTRAINT "fk_locationmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."opportunity" ADD CONSTRAINT "fk_opportunity_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."opportunity" ADD CONSTRAINT "fk_opportunity_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."opportunity" ADD CONSTRAINT "fk_opportunity_customerid" FOREIGN KEY ("customerid") REFERENCES "e360"."customermaster"("customerid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."opportunity" ADD CONSTRAINT "fk_opportunity_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."opportunity" ADD CONSTRAINT "fk_opportunity_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."opportunity" ADD CONSTRAINT "fk_opportunity_salesmanagerid" FOREIGN KEY ("salesmanagerid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."leavetypemaster" ADD CONSTRAINT "fk_leavetypemaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."leavetypemaster" ADD CONSTRAINT "fk_leavetypemaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."leavetypemaster" ADD CONSTRAINT "fk_leavetypemaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."orgcostrate" ADD CONSTRAINT "fk_orgcostrate_bandid" FOREIGN KEY ("bandid") REFERENCES "e360"."bandmaster"("bandmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."orgcostrate" ADD CONSTRAINT "fk_orgcostrate_comcurrencyid" FOREIGN KEY ("comcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."orgcostrate" ADD CONSTRAINT "fk_orgcostrate_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."orgcostrate" ADD CONSTRAINT "fk_orgcostrate_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."orgcostrate" ADD CONSTRAINT "fk_orgcostrate_countryid" FOREIGN KEY ("countryid") REFERENCES "e360"."countrymaster"("comcountryid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."orgcostrate" ADD CONSTRAINT "fk_orgcostrate_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."orgcostrate" ADD CONSTRAINT "fk_orgcostrate_designationid" FOREIGN KEY ("designationid") REFERENCES "e360"."designationmaster"("designationmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."orgcostrate" ADD CONSTRAINT "fk_orgcostrate_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."orgcostrate" ADD CONSTRAINT "fk_orgcostrate_skillareamasterid" FOREIGN KEY ("skillareamasterid") REFERENCES "e360"."skillareamaster"("skillareamasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."orgcostrate" ADD CONSTRAINT "fk_orgcostrate_techgroupid" FOREIGN KEY ("techgroupid") REFERENCES "e360"."techgroupmaster"("techgroupid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."overheadmaster" ADD CONSTRAINT "fk_overheadmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."overheadmaster" ADD CONSTRAINT "fk_overheadmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."overheadmaster" ADD CONSTRAINT "fk_overheadmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."productmaster" ADD CONSTRAINT "fk_productmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."productmaster" ADD CONSTRAINT "fk_productmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."productmaster" ADD CONSTRAINT "fk_productmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."productmaster" ADD CONSTRAINT "fk_productmaster_technology" FOREIGN KEY ("technology") REFERENCES "e360"."technologymaster"("technologymasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."profitabilitydetails" ADD CONSTRAINT "fk_profitabilitydetails_projectprofitabilityid" FOREIGN KEY ("projectprofitabilityid") REFERENCES "e360"."projectprofitability"("projectprofitabilityid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectactivityversion" ADD CONSTRAINT "fk_projectactivityversion_activityownerid" FOREIGN KEY ("activityownerid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectactivityversion" ADD CONSTRAINT "fk_projectactivityversion_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectactivityversion" ADD CONSTRAINT "fk_projectactivityversion_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectactivityversion" ADD CONSTRAINT "fk_projectactivityversion_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectattributes" ADD CONSTRAINT "fk_projectattributes_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectattributes" ADD CONSTRAINT "fk_projectattributes_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectattributes" ADD CONSTRAINT "fk_projectattributes_linkedproject" FOREIGN KEY ("linkedproject") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectattributes" ADD CONSTRAINT "fk_projectattributes_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectattributes" ADD CONSTRAINT "fk_projectattributes_productid" FOREIGN KEY ("productid") REFERENCES "e360"."productmaster"("productmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectattributes" ADD CONSTRAINT "fk_projectattributes_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectattributes" ADD CONSTRAINT "fk_projectattributes_technologyid" FOREIGN KEY ("technologyid") REFERENCES "e360"."technologymaster"("technologymasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectbudgetdetails" ADD CONSTRAINT "fk_projectbudgetdetails_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectbudgetdetails" ADD CONSTRAINT "fk_projectbudgetdetails_overheadid" FOREIGN KEY ("overheadid") REFERENCES "e360"."overheadmaster"("overheadmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectbudgetdetails" ADD CONSTRAINT "fk_projectbudgetdetails_projectbudgetid" FOREIGN KEY ("projectbudgetid") REFERENCES "e360"."projectbudget"("projectbudgetid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectbudgetdetails" ADD CONSTRAINT "fk_projectbudgetdetails_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectbudgetversion" ADD CONSTRAINT "fk_projectbudgetversion_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectbudgetversion" ADD CONSTRAINT "fk_projectbudgetversion_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectbudgetversion" ADD CONSTRAINT "fk_projectbudgetversion_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectbudgetversion" ADD CONSTRAINT "fk_projectbudgetversion_overheadid" FOREIGN KEY ("overheadid") REFERENCES "e360"."overheadmaster"("overheadmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectbudgetversion" ADD CONSTRAINT "fk_projectbudgetversion_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectcustomercontacts" ADD CONSTRAINT "fk_projectcustomercontacts_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectcustomercontacts" ADD CONSTRAINT "fk_projectcustomercontacts_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectcustomercontacts" ADD CONSTRAINT "fk_projectcustomercontacts_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectdocuments" ADD CONSTRAINT "fk_projectdocuments_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectdocuments" ADD CONSTRAINT "fk_projectdocuments_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectdocuments" ADD CONSTRAINT "fk_projectdocuments_deletedcomuserid" FOREIGN KEY ("deletedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectdocuments" ADD CONSTRAINT "fk_projectdocuments_documenttype" FOREIGN KEY ("documenttype") REFERENCES "e360"."documenttypemaster"("documenttypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectdocuments" ADD CONSTRAINT "fk_projectdocuments_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectdocuments" ADD CONSTRAINT "fk_projectdocuments_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecteffort" ADD CONSTRAINT "fk_projecteffort_approverid" FOREIGN KEY ("approverid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecteffort" ADD CONSTRAINT "fk_projecteffort_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecteffort" ADD CONSTRAINT "fk_projecteffort_comuserid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecteffort" ADD CONSTRAINT "fk_projecteffort_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecteffort" ADD CONSTRAINT "fk_projecteffort_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecteffort" ADD CONSTRAINT "fk_projecteffort_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecteffort" ADD CONSTRAINT "fk_projecteffort_projstaffid" FOREIGN KEY ("projstaffid") REFERENCES "e360"."projectstaff"("projectstaffid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecteffortdetails" ADD CONSTRAINT "fk_projecteffortdetails_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecteffortdetails" ADD CONSTRAINT "fk_projecteffortdetails_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecteffortdetails" ADD CONSTRAINT "fk_projecteffortdetails_projecttaskid" FOREIGN KEY ("projecttaskid") REFERENCES "e360"."projecttasks"("projecttaskid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecteffortdetails" ADD CONSTRAINT "fk_projecteffortdetails_projeffortid" FOREIGN KEY ("projeffortid") REFERENCES "e360"."projecteffort"("effortid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecteffortdetails" ADD CONSTRAINT "fk_projecteffortdetails_projtaskid" FOREIGN KEY ("projtaskid") REFERENCES "e360"."taskmaster"("taskid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecteffortdetails" ADD CONSTRAINT "fk_projecteffortdetails_timecategorymasterid" FOREIGN KEY ("timecategorymasterid") REFERENCES "e360"."timecategorymaster"("timecategorymasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectactivity" ADD CONSTRAINT "fk_projectactivity_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectactivity" ADD CONSTRAINT "fk_projectactivity_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectactivity" ADD CONSTRAINT "fk_projectactivity_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectbudget" ADD CONSTRAINT "fk_projectbudget_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectbudget" ADD CONSTRAINT "fk_projectbudget_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectbudget" ADD CONSTRAINT "fk_projectbudget_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectbudget" ADD CONSTRAINT "fk_projectbudget_overheadid" FOREIGN KEY ("overheadid") REFERENCES "e360"."overheadmaster"("overheadmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectbudget" ADD CONSTRAINT "fk_projectbudget_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectestimationdetails" ADD CONSTRAINT "fk_projectestimationdetails_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectestimationdetails" ADD CONSTRAINT "fk_projectestimationdetails_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectestimationdetails" ADD CONSTRAINT "fk_projectestimationdetails_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectestimationdetails" ADD CONSTRAINT "fk_projectestimationdetails_overheadid" FOREIGN KEY ("overheadid") REFERENCES "e360"."overheadmaster"("overheadmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectestimationdetails" ADD CONSTRAINT "fk_projectestimationdetails_projectestimationid" FOREIGN KEY ("projectestimationid") REFERENCES "e360"."projectestimation"("estimationid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectexpense" ADD CONSTRAINT "fk_projectexpense_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectexpense" ADD CONSTRAINT "fk_projectexpense_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectexpense" ADD CONSTRAINT "fk_projectexpense_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectexpense" ADD CONSTRAINT "fk_projectexpense_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectexpense" ADD CONSTRAINT "fk_projectexpense_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectexpense" ADD CONSTRAINT "fk_projectexpense_overheadid" FOREIGN KEY ("overheadid") REFERENCES "e360"."overheadmaster"("overheadmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectexpense" ADD CONSTRAINT "fk_projectexpense_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectexpense" ADD CONSTRAINT "fk_projectexpense_taggeduser" FOREIGN KEY ("taggeduser") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectholidays" ADD CONSTRAINT "fk_projectholidays_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectholidays" ADD CONSTRAINT "fk_projectholidays_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectholidays" ADD CONSTRAINT "fk_projectholidays_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectholidays" ADD CONSTRAINT "fk_projectholidays_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectprofitability" ADD CONSTRAINT "fk_projectprofitability_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectprofitability" ADD CONSTRAINT "fk_projectprofitability_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectprofitability" ADD CONSTRAINT "fk_projectprofitability_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmilestones" ADD CONSTRAINT "fk_projectmilestones_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmilestones" ADD CONSTRAINT "fk_projectmilestones_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmilestones" ADD CONSTRAINT "fk_projectmilestones_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmilestones" ADD CONSTRAINT "fk_projectmilestones_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmilestones" ADD CONSTRAINT "fk_projectmilestones_projecttaskid" FOREIGN KEY ("projecttaskid") REFERENCES "e360"."projecttasks"("projecttaskid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectplanversion" ADD CONSTRAINT "fk_projectplanversion_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectplanversion" ADD CONSTRAINT "fk_projectplanversion_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectplanversion" ADD CONSTRAINT "fk_projectplanversion_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectplanversion" ADD CONSTRAINT "fk_projectplanversion_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectproductmapping" ADD CONSTRAINT "fk_projectproductmapping_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectproductmapping" ADD CONSTRAINT "fk_projectproductmapping_productmasterid" FOREIGN KEY ("productmasterid") REFERENCES "e360"."productmaster"("productmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectproductmapping" ADD CONSTRAINT "fk_projectproductmapping_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectestimation" ADD CONSTRAINT "fk_projectestimation_approverid" FOREIGN KEY ("approverid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectestimation" ADD CONSTRAINT "fk_projectestimation_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectestimation" ADD CONSTRAINT "fk_projectestimation_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectestimation" ADD CONSTRAINT "fk_projectestimation_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectestimation" ADD CONSTRAINT "fk_projectestimation_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_businessunitid" FOREIGN KEY ("businessunitid") REFERENCES "e360"."bumaster"("businessunitid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_customerid" FOREIGN KEY ("customerid") REFERENCES "e360"."customermaster"("customerid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_datprojectbillingtypeid" FOREIGN KEY ("datprojectbillingtypeid") REFERENCES "e360"."datprojectbilltype"("datprojectbillingtypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_defaultcomcurrencyid" FOREIGN KEY ("defaultcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_deliverymanagerid" FOREIGN KEY ("deliverymanagerid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_deliverymodemasterid" FOREIGN KEY ("deliverymodemasterid") REFERENCES "e360"."deliverymodemaster"("deliverymodemasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_departmentid" FOREIGN KEY ("departmentid") REFERENCES "e360"."departmentmaster"("departmentid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_locationid" FOREIGN KEY ("locationid") REFERENCES "e360"."locationmaster"("comlocationid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_opportunityid" FOREIGN KEY ("opportunityid") REFERENCES "e360"."opportunity"("opportunityid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_pmo1" FOREIGN KEY ("pmo1") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_pmo2" FOREIGN KEY ("pmo2") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_pmo3" FOREIGN KEY ("pmo3") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_pmocontactpersonid" FOREIGN KEY ("pmocontactpersonid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_projectmanagerid" FOREIGN KEY ("projectmanagerid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_projecttypeid" FOREIGN KEY ("projecttypeid") REFERENCES "e360"."projecttypemaster"("projecttypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_servicelineid" FOREIGN KEY ("servicelineid") REFERENCES "e360"."slmaster"("servicelineid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "fk_projectmaster_techgroupid" FOREIGN KEY ("techgroupid") REFERENCES "e360"."techgroupmaster"("techgroupid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmaster" ADD CONSTRAINT "projectmaster_timetemplatemasterid_fkey" FOREIGN KEY ("timetemplatemasterid") REFERENCES "e360"."timetemplatemaster"("timetemplatemasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_businessunitid" FOREIGN KEY ("businessunitid") REFERENCES "e360"."bumaster"("businessunitid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_customerid" FOREIGN KEY ("customerid") REFERENCES "e360"."customermaster"("customerid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_datprojectbillingtypeid" FOREIGN KEY ("datprojectbillingtypeid") REFERENCES "e360"."datprojectbilltype"("datprojectbillingtypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_defaultcomcurrencyid" FOREIGN KEY ("defaultcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_deliverymanagerid" FOREIGN KEY ("deliverymanagerid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_deliverymodemasterid" FOREIGN KEY ("deliverymodemasterid") REFERENCES "e360"."deliverymodemaster"("deliverymodemasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_departmentid" FOREIGN KEY ("departmentid") REFERENCES "e360"."departmentmaster"("departmentid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_locationid" FOREIGN KEY ("locationid") REFERENCES "e360"."locationmaster"("comlocationid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_opportunityid" FOREIGN KEY ("opportunityid") REFERENCES "e360"."opportunity"("opportunityid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_pmo1" FOREIGN KEY ("pmo1") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_pmo2" FOREIGN KEY ("pmo2") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_pmo3" FOREIGN KEY ("pmo3") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_pmocontactpersonid" FOREIGN KEY ("pmocontactpersonid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_projectmanagerid" FOREIGN KEY ("projectmanagerid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_projecttypeid" FOREIGN KEY ("projecttypeid") REFERENCES "e360"."projecttypemaster"("projecttypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_servicelineid" FOREIGN KEY ("servicelineid") REFERENCES "e360"."slmaster"("servicelineid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_techgroupid" FOREIGN KEY ("techgroupid") REFERENCES "e360"."techgroupmaster"("techgroupid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "fk_projectmasterversion_versionmasterid" FOREIGN KEY ("versionmasterid") REFERENCES "e360"."versionmaster"("versionmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectmasterversion" ADD CONSTRAINT "projectmasterversion_timetemplatemasterid_fkey" FOREIGN KEY ("timetemplatemasterid") REFERENCES "e360"."timetemplatemaster"("timetemplatemasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrole" ADD CONSTRAINT "fk_projectrole_countryid" FOREIGN KEY ("countryid") REFERENCES "e360"."countrymaster"("comcountryid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrole" ADD CONSTRAINT "fk_projectrole_crateid" FOREIGN KEY ("crateid") REFERENCES "e360"."customerrates"("custrateid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrole" ADD CONSTRAINT "fk_projectrole_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrole" ADD CONSTRAINT "fk_projectrole_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrole" ADD CONSTRAINT "fk_projectrole_levelid" FOREIGN KEY ("levelid") REFERENCES "e360"."levelmaster"("levelmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrole" ADD CONSTRAINT "fk_projectrole_maxbandid" FOREIGN KEY ("max_bandid") REFERENCES "e360"."bandmaster"("bandmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrole" ADD CONSTRAINT "fk_projectrole_minbandid" FOREIGN KEY ("min_bandid") REFERENCES "e360"."bandmaster"("bandmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrole" ADD CONSTRAINT "fk_projectrole_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrole" ADD CONSTRAINT "fk_projectrole_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrole" ADD CONSTRAINT "fk_projectrole_skillareamasterid" FOREIGN KEY ("skillareamasterid") REFERENCES "e360"."skillareamaster"("skillareamasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrole" ADD CONSTRAINT "fk_projectrole_staffcostid" FOREIGN KEY ("staffcostid") REFERENCES "e360"."orgcostrate"("orgcostrateid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrole" ADD CONSTRAINT "fk_projectrole_techgroupid" FOREIGN KEY ("techgroupid") REFERENCES "e360"."techgroupmaster"("techgroupid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrole" ADD CONSTRAINT "fk_projectrole_workmodeid" FOREIGN KEY ("workmodeid") REFERENCES "e360"."workmodemaster"("workmodeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleactualeffortmonthsplit" ADD CONSTRAINT "fk_projectroleactualeffortmonthsplit_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleactualeffortmonthsplit" ADD CONSTRAINT "fk_projectroleactualeffortmonthsplit_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleactualeffortmonthsplit" ADD CONSTRAINT "fk_projectroleactualeffortmonthsplit_projroleid" FOREIGN KEY ("projectroleid") REFERENCES "e360"."projectrole"("projectroleid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."rolemaster" ADD CONSTRAINT "fk_rolemaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecttasks" ADD CONSTRAINT "fk_projecttasks_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecttasks" ADD CONSTRAINT "fk_projecttasks_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecttasks" ADD CONSTRAINT "fk_projecttasks_projectactivityid" FOREIGN KEY ("projectactivityid") REFERENCES "e360"."projectactivity"("activityid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecttasks" ADD CONSTRAINT "fk_projecttasks_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecttasks" ADD CONSTRAINT "fk_projecttasks_taskid" FOREIGN KEY ("taskid") REFERENCES "e360"."taskmaster"("taskid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecttypemaster" ADD CONSTRAINT "fk_projecttypemaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecttypemaster" ADD CONSTRAINT "fk_projecttypemaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projecttypemaster" ADD CONSTRAINT "fk_projecttypemaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."rolemenupermissions" ADD CONSTRAINT "fk_rolemenupermissions_roleid" FOREIGN KEY ("roleid") REFERENCES "e360"."rolemaster"("roleid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectstaff" ADD CONSTRAINT "fk_projectstaff_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectstaff" ADD CONSTRAINT "fk_projectstaff_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectstaff" ADD CONSTRAINT "fk_projectstaff_demandid" FOREIGN KEY ("demandid") REFERENCES "e360"."demandmaster"("demandid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectstaff" ADD CONSTRAINT "fk_projectstaff_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectstaff" ADD CONSTRAINT "fk_projectstaff_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectstaff" ADD CONSTRAINT "fk_projectstaff_projroleid" FOREIGN KEY ("projroleid") REFERENCES "e360"."projectrole"("projectroleid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectstaff" ADD CONSTRAINT "fk_projectstaff_userid" FOREIGN KEY ("userid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrevenue" ADD CONSTRAINT "fk_projectrevenue_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrevenue" ADD CONSTRAINT "fk_projectrevenue_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrevenue" ADD CONSTRAINT "fk_projectrevenue_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectrevenue" ADD CONSTRAINT "fk_projectrevenue_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleeffortmonthsplit" ADD CONSTRAINT "fk_projectroleeffortmonthsplit_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleeffortmonthsplit" ADD CONSTRAINT "fk_projectroleeffortmonthsplit_projroleid" FOREIGN KEY ("projectroleid") REFERENCES "e360"."projectrole"("projectroleid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroletasks" ADD CONSTRAINT "fk_projectroletasks_createduser" FOREIGN KEY ("createduser") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroletasks" ADD CONSTRAINT "fk_projectroletasks_projroleid" FOREIGN KEY ("projroleid") REFERENCES "e360"."projectrole"("projectroleid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroletasks" ADD CONSTRAINT "fk_projectroletasks_projtaskid" FOREIGN KEY ("projtaskid") REFERENCES "e360"."projecttasks"("projecttaskid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroletasks" ADD CONSTRAINT "fk_projectroletasks_updateduser" FOREIGN KEY ("updateduser") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleversion" ADD CONSTRAINT "fk_projectroleversion_countryid" FOREIGN KEY ("countryid") REFERENCES "e360"."countrymaster"("comcountryid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleversion" ADD CONSTRAINT "fk_projectroleversion_crateid" FOREIGN KEY ("crateid") REFERENCES "e360"."customerrates"("custrateid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleversion" ADD CONSTRAINT "fk_projectroleversion_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleversion" ADD CONSTRAINT "fk_projectroleversion_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleversion" ADD CONSTRAINT "fk_projectroleversion_levelid" FOREIGN KEY ("levelid") REFERENCES "e360"."levelmaster"("levelmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleversion" ADD CONSTRAINT "fk_projectroleversion_maxbandid" FOREIGN KEY ("max_bandid") REFERENCES "e360"."bandmaster"("bandmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleversion" ADD CONSTRAINT "fk_projectroleversion_minbandid" FOREIGN KEY ("min_bandid") REFERENCES "e360"."bandmaster"("bandmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleversion" ADD CONSTRAINT "fk_projectroleversion_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleversion" ADD CONSTRAINT "fk_projectroleversion_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleversion" ADD CONSTRAINT "fk_projectroleversion_skillareamasterid" FOREIGN KEY ("skillareamasterid") REFERENCES "e360"."skillareamaster"("skillareamasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleversion" ADD CONSTRAINT "fk_projectroleversion_staffcostid" FOREIGN KEY ("staffcostid") REFERENCES "e360"."staffcostrate"("costrateid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleversion" ADD CONSTRAINT "fk_projectroleversion_techgroupid" FOREIGN KEY ("techgroupid") REFERENCES "e360"."techgroupmaster"("techgroupid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleversion" ADD CONSTRAINT "fk_projectroleversion_versionmasterid" FOREIGN KEY ("versionmasterid") REFERENCES "e360"."versionmaster"("versionmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."projectroleversion" ADD CONSTRAINT "fk_projectroleversion_workmodeid" FOREIGN KEY ("workmodeid") REFERENCES "e360"."workmodemaster"("workmodeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."rolemenus" ADD CONSTRAINT "fk_rolemenus_roleid" FOREIGN KEY ("roleid") REFERENCES "e360"."rolemaster"("roleid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."servicelineskillareamapping" ADD CONSTRAINT "fk_servicelineskillareamapping_servicelineid" FOREIGN KEY ("servicelineid") REFERENCES "e360"."slmaster"("servicelineid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."sourcemaster" ADD CONSTRAINT "fk_sourcemaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."sourcemaster" ADD CONSTRAINT "fk_sourcemaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."sourcemaster" ADD CONSTRAINT "fk_sourcemaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."statemaster" ADD CONSTRAINT "fk_statemaster_comcountryid" FOREIGN KEY ("comcountryid") REFERENCES "e360"."countrymaster"("comcountryid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."statemaster" ADD CONSTRAINT "fk_statemaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."statemaster" ADD CONSTRAINT "fk_statemaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."statemaster" ADD CONSTRAINT "fk_statemaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slmaster" ADD CONSTRAINT "fk_slmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slmaster" ADD CONSTRAINT "fk_slmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slmaster" ADD CONSTRAINT "fk_slmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slmaster" ADD CONSTRAINT "fk_slmaster_servicelinecontactpersonid" FOREIGN KEY ("servicelinecontactpersonid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slmaster" ADD CONSTRAINT "fk_slmaster_servicelinegroupid" FOREIGN KEY ("servicelinegroupid") REFERENCES "e360"."slgroupmaster"("servicelinegroupid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slmaster" ADD CONSTRAINT "fk_slmaster_servicelineheadid" FOREIGN KEY ("servicelineheadid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."skillmaster" ADD CONSTRAINT "fk_skillmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."skillmaster" ADD CONSTRAINT "fk_skillmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."skillmaster" ADD CONSTRAINT "fk_skillmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."skillmaster" ADD CONSTRAINT "fk_skillmaster_skillarea" FOREIGN KEY ("skillarea") REFERENCES "e360"."skillareamaster"("skillareamasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."technologymaster" ADD CONSTRAINT "fk_technologymaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."technologymaster" ADD CONSTRAINT "fk_technologymaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."technologymaster" ADD CONSTRAINT "fk_technologymaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."technologymaster" ADD CONSTRAINT "fk_technologymaster_techgroup" FOREIGN KEY ("techgroup") REFERENCES "e360"."techgroupmaster"("techgroupid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."taskmaster" ADD CONSTRAINT "fk_taskmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."taskmaster" ADD CONSTRAINT "fk_taskmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."taskmaster" ADD CONSTRAINT "fk_taskmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."taskmaster" ADD CONSTRAINT "fk_taskmaster_taskgroupid" FOREIGN KEY ("taskgroupid") REFERENCES "e360"."taskgroupmaster"("taskgroupid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."taskmaster" ADD CONSTRAINT "fk_taskmaster_tasktypeid" FOREIGN KEY ("tasktypeid") REFERENCES "e360"."tasktypemaster"("tasktypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."staffcostrate" ADD CONSTRAINT "fk_staffcostrate_band" FOREIGN KEY ("band") REFERENCES "e360"."bandmaster"("bandmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."staffcostrate" ADD CONSTRAINT "fk_staffcostrate_cityid" FOREIGN KEY ("cityid") REFERENCES "e360"."citymaster"("comcityid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."staffcostrate" ADD CONSTRAINT "fk_staffcostrate_comcurrencyid" FOREIGN KEY ("comcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."staffcostrate" ADD CONSTRAINT "fk_staffcostrate_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."staffcostrate" ADD CONSTRAINT "fk_staffcostrate_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."staffcostrate" ADD CONSTRAINT "fk_staffcostrate_designationid" FOREIGN KEY ("designationid") REFERENCES "e360"."designationmaster"("designationmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."staffcostrate" ADD CONSTRAINT "fk_staffcostrate_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."staffcostrate" ADD CONSTRAINT "fk_staffcostrate_skillid" FOREIGN KEY ("skillid") REFERENCES "e360"."skillmaster"("skillmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."staffcostrate" ADD CONSTRAINT "fk_staffcostrate_techid" FOREIGN KEY ("techid") REFERENCES "e360"."technologymaster"("technologymasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."roleusermapping" ADD CONSTRAINT "fk_roleusermapping_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."roleusermapping" ADD CONSTRAINT "fk_roleusermapping_comuserid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."roleusermapping" ADD CONSTRAINT "fk_roleusermapping_roleid" FOREIGN KEY ("roleid") REFERENCES "e360"."rolemaster"("roleid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."sapuserworkassignment" ADD CONSTRAINT "fk_sapuserworkassignment_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."sapuserworkassignment" ADD CONSTRAINT "fk_sapuserworkassignment_comuserid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slgroupmaster" ADD CONSTRAINT "fk_slgroupmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slgroupmaster" ADD CONSTRAINT "fk_slgroupmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slgroupmaster" ADD CONSTRAINT "fk_slgroupmaster_groupcontactpersonid" FOREIGN KEY ("groupcontactpersonid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slgroupmaster" ADD CONSTRAINT "fk_slgroupmaster_groupheadid" FOREIGN KEY ("groupheadid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slgroupmaster" ADD CONSTRAINT "fk_slgroupmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slgroupmaster" ADD CONSTRAINT "fk_slgroupmaster_servicelinegroupheadcomuserid" FOREIGN KEY ("servicelinegroupheadcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slprojectprofitability" ADD CONSTRAINT "fk_slprojectprofitability_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slprojectprofitability" ADD CONSTRAINT "fk_slprojectprofitability_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."slprojectprofitability" ADD CONSTRAINT "fk_slprojectprofitability_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."taskgroupmaster" ADD CONSTRAINT "fk_taskgroupmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."taskgroupmaster" ADD CONSTRAINT "fk_taskgroupmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."taskgroupmaster" ADD CONSTRAINT "fk_taskgroupmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tasktypemaster" ADD CONSTRAINT "fk_tasktypemaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tasktypemaster" ADD CONSTRAINT "fk_tasktypemaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tasktypemaster" ADD CONSTRAINT "fk_tasktypemaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantemailidconfiguration" ADD CONSTRAINT "fk_tenantemailidconfiguration_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenants3bucketconfiguration" ADD CONSTRAINT "fk_tenants3bucketconfiguration_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantcontacts" ADD CONSTRAINT "fk_tenantcontacts_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantcontacts" ADD CONSTRAINT "fk_tenantcontacts_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantcontacts" ADD CONSTRAINT "fk_tenantcontacts_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantcontacts" ADD CONSTRAINT "fk_tenantcontacts_tenantcontactpersonsid" FOREIGN KEY ("tenantcontactpersonsid") REFERENCES "e360"."tenantcontacts"("tenantcontactpersonsid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantsubscription" ADD CONSTRAINT "subscriptionpackage_deletedcomuserid_fkey" FOREIGN KEY ("deletedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantsubscription" ADD CONSTRAINT "tenantsubscription_comtenantid_fkey" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantsubscription" ADD CONSTRAINT "tenantsubscription_createdcomuserid_fkey" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantsubscription" ADD CONSTRAINT "tenantsubscription_datsubscriptionpackageid_fkey" FOREIGN KEY ("datsubscriptionpackageid") REFERENCES "e360"."datsubscriptionpackage"("datsubscriptionpackageid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timesheetbillinginput" ADD CONSTRAINT "fk_timesheetbillinginput_comuserid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timesheetbillinginput" ADD CONSTRAINT "fk_timesheetbillinginput_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timesheetbillinginput" ADD CONSTRAINT "fk_timesheetbillinginput_projectroleid" FOREIGN KEY ("projectroleid") REFERENCES "e360"."projectrole"("projectroleid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timesheetbillinginput" ADD CONSTRAINT "fk_timesheetbillinginput_projectstaffid" FOREIGN KEY ("projectstaffid") REFERENCES "e360"."projectstaff"("projectstaffid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timesheetbillinginput" ADD CONSTRAINT "fk_timesheetbillinginput_status" FOREIGN KEY ("status") REFERENCES "e360"."datstatusmaster"("statusid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetemplatemaster" ADD CONSTRAINT "fk_timetemplatemaster_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetemplatemaster" ADD CONSTRAINT "fk_timetemplatemaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetemplatemaster" ADD CONSTRAINT "fk_timetemplatemaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetemplatemaster" ADD CONSTRAINT "fk_timetemplatemaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantsubscriptionpricing" ADD CONSTRAINT "fk_tenantsubscriptionpricing_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantsubscriptionpricing" ADD CONSTRAINT "fk_tenantsubscriptionpricing_tenantsubscriptionid" FOREIGN KEY ("tenantsubscriptionid") REFERENCES "e360"."tenantsubscription"("tenantsubscriptionid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetypemaster" ADD CONSTRAINT "fk_timetypemaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetypemaster" ADD CONSTRAINT "fk_timetypemaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetypemaster" ADD CONSTRAINT "fk_timetypemaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetypetemplatemapping" ADD CONSTRAINT "fk_timetypetemplatemapping_comcountryid" FOREIGN KEY ("comcountryid") REFERENCES "e360"."countrymaster"("comcountryid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetypetemplatemapping" ADD CONSTRAINT "fk_timetypetemplatemapping_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetypetemplatemapping" ADD CONSTRAINT "fk_timetypetemplatemapping_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetypetemplatemapping" ADD CONSTRAINT "fk_timetypetemplatemapping_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetypetemplatemapping" ADD CONSTRAINT "fk_timetypetemplatemapping_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetypetemplatemapping" ADD CONSTRAINT "fk_timetypetemplatemapping_timecategorymasterid" FOREIGN KEY ("timecategorymasterid") REFERENCES "e360"."timecategorymaster"("timecategorymasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetypetemplatemapping" ADD CONSTRAINT "fk_timetypetemplatemapping_timetemplatemasterid" FOREIGN KEY ("timetemplatemasterid") REFERENCES "e360"."timetemplatemaster"("timetemplatemasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timetypetemplatemapping" ADD CONSTRAINT "fk_timetypetemplatemapping_workertypeid" FOREIGN KEY ("workertypeid") REFERENCES "e360"."workertypemaster"("workertypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userdocuments" ADD CONSTRAINT "fk_userdocuments_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userdocuments" ADD CONSTRAINT "fk_userdocuments_comuserid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userdocuments" ADD CONSTRAINT "fk_userdocuments_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userdocuments" ADD CONSTRAINT "fk_userdocuments_deletedcomuserid" FOREIGN KEY ("deletedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userdocuments" ADD CONSTRAINT "fk_userdocuments_documenttype" FOREIGN KEY ("documenttype") REFERENCES "e360"."documenttypemaster"("documenttypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userdocuments" ADD CONSTRAINT "fk_userdocuments_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usereducation" ADD CONSTRAINT "fk_usereducation_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usereducation" ADD CONSTRAINT "fk_usereducation_comuserid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usereducation" ADD CONSTRAINT "fk_usereducation_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usereducation" ADD CONSTRAINT "fk_usereducation_datcoursemasterid" FOREIGN KEY ("datcoursemasterid") REFERENCES "e360"."datcourse"("datcoursemasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usereducation" ADD CONSTRAINT "fk_usereducation_dateducationmasterid" FOREIGN KEY ("dateducationmasterid") REFERENCES "e360"."dateducation"("dateducationmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usereducation" ADD CONSTRAINT "fk_usereducation_datspecialisationid" FOREIGN KEY ("datspecialisationid") REFERENCES "e360"."datspecialisation"("datspecialisationid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usereducation" ADD CONSTRAINT "fk_usereducation_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userleavedata" ADD CONSTRAINT "fk_userleavedata_companyid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userleavedata" ADD CONSTRAINT "fk_userleavedata_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userleavedata" ADD CONSTRAINT "fk_userleavedata_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userleavedata" ADD CONSTRAINT "fk_userleavedata_leavestatus" FOREIGN KEY ("leavestatus") REFERENCES "e360"."datstatusmaster"("statusid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userleavedata" ADD CONSTRAINT "fk_userleavedata_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."useraddress" ADD CONSTRAINT "fk_useraddress_addresstype" FOREIGN KEY ("addresstype") REFERENCES "e360"."addresstypemaster"("addresstypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."useraddress" ADD CONSTRAINT "fk_useraddress_comcityid" FOREIGN KEY ("comcityid") REFERENCES "e360"."citymaster"("comcityid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."useraddress" ADD CONSTRAINT "fk_useraddress_comcountryid" FOREIGN KEY ("comcountryid") REFERENCES "e360"."countrymaster"("comcountryid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."useraddress" ADD CONSTRAINT "fk_useraddress_comstateid" FOREIGN KEY ("comstateid") REFERENCES "e360"."statemaster"("comstateid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."useraddress" ADD CONSTRAINT "fk_useraddress_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."useraddress" ADD CONSTRAINT "fk_useraddress_comuseraddressid" FOREIGN KEY ("comuseraddressid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."useraddress" ADD CONSTRAINT "fk_useraddress_comuserid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."useraddress" ADD CONSTRAINT "fk_useraddress_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."useraddress" ADD CONSTRAINT "fk_useraddress_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usercertification" ADD CONSTRAINT "fk_usercertification_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usercertification" ADD CONSTRAINT "fk_usercertification_comuserid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usercertification" ADD CONSTRAINT "fk_usercertification_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usercertification" ADD CONSTRAINT "fk_usercertification_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userpreference" ADD CONSTRAINT "fk_userpreference_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userpreference" ADD CONSTRAINT "fk_userpreference_comuserid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userpreference" ADD CONSTRAINT "fk_userpreference_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userpreference" ADD CONSTRAINT "fk_userpreference_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userpreference" ADD CONSTRAINT "fk_userpreference_preferredlocation1id" FOREIGN KEY ("preferredlocation1id") REFERENCES "e360"."locationmaster"("comlocationid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userpreference" ADD CONSTRAINT "fk_userpreference_preferredlocation2id" FOREIGN KEY ("preferredlocation2id") REFERENCES "e360"."locationmaster"("comlocationid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userpreference" ADD CONSTRAINT "fk_userpreference_preferredlocation3id" FOREIGN KEY ("preferredlocation3id") REFERENCES "e360"."locationmaster"("comlocationid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userpreference" ADD CONSTRAINT "fk_userpreference_workmode" FOREIGN KEY ("workmode") REFERENCES "e360"."workmodemaster"("workmodeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userskill" ADD CONSTRAINT "fk_userskill_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userskill" ADD CONSTRAINT "fk_userskill_comuserid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userskill" ADD CONSTRAINT "fk_userskill_skillmasterid" FOREIGN KEY ("skillmasterid") REFERENCES "e360"."skillmaster"("skillmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userskilltechnology" ADD CONSTRAINT "fk_userskilltechnology_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userskilltechnology" ADD CONSTRAINT "fk_userskilltechnology_comuserid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userskilltechnology" ADD CONSTRAINT "fk_userskilltechnology_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userskilltechnology" ADD CONSTRAINT "fk_userskilltechnology_domainid" FOREIGN KEY ("domainid") REFERENCES "e360"."industrymaster"("industryid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userskilltechnology" ADD CONSTRAINT "fk_userskilltechnology_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userskilltechnology" ADD CONSTRAINT "fk_userskilltechnology_proficiencyid" FOREIGN KEY ("proficiencyid") REFERENCES "e360"."levelmaster"("levelmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userskilltechnology" ADD CONSTRAINT "fk_userskilltechnology_skillmasterid" FOREIGN KEY ("skillmasterid") REFERENCES "e360"."skillmaster"("skillmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userskilltechnology" ADD CONSTRAINT "fk_userskilltechnology_technologymasterid" FOREIGN KEY ("technologymasterid") REFERENCES "e360"."technologymaster"("technologymasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userwiseprojectprofitability" ADD CONSTRAINT "fk_userwiseprojectprofitability_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userwiseprojectprofitability" ADD CONSTRAINT "fk_userwiseprojectprofitability_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userwiseprojectprofitability" ADD CONSTRAINT "fk_userwiseprojectprofitability_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionmasterdeletehistory" ADD CONSTRAINT "fk_versionmasterdeletehistory_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionmasterdeletehistory" ADD CONSTRAINT "fk_versionmasterdeletehistory_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionmasterdeletehistory" ADD CONSTRAINT "fk_versionmasterdeletehistory_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionmasterdeletehistory" ADD CONSTRAINT "fk_versionmasterdeletehistory_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionmasterdeletehistory" ADD CONSTRAINT "fk_versionmasterdeletehistory_submittedcomuserid" FOREIGN KEY ("submittedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userpayroll" ADD CONSTRAINT "fk_userpayroll_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userpayroll" ADD CONSTRAINT "fk_userpayroll_datcomcurrencyid" FOREIGN KEY ("datcomcurrencyid") REFERENCES "e360"."datcurrency"("datcomcurrencyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userpayroll" ADD CONSTRAINT "fk_userpayroll_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userpayroll" ADD CONSTRAINT "fk_userpayroll_userid" FOREIGN KEY ("userid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionschedule" ADD CONSTRAINT "fk_versionschedule_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionschedule" ADD CONSTRAINT "fk_versionschedule_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionschedule" ADD CONSTRAINT "fk_versionschedule_custrateid" FOREIGN KEY ("custrateid") REFERENCES "e360"."customerrates"("custrateid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionschedule" ADD CONSTRAINT "fk_versionschedule_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionschedule" ADD CONSTRAINT "fk_versionschedule_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionschedule" ADD CONSTRAINT "fk_versionschedule_projectroleid" FOREIGN KEY ("projectroleid") REFERENCES "e360"."projectrole"("projectroleid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionschedule" ADD CONSTRAINT "fk_versionschedule_versionmasterid" FOREIGN KEY ("versionmasterid") REFERENCES "e360"."versionmaster"("versionmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."workertypemaster" ADD CONSTRAINT "fk_workertypemaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."workertypemaster" ADD CONSTRAINT "fk_workertypemaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."workertypemaster" ADD CONSTRAINT "fk_workertypemaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionmaster" ADD CONSTRAINT "fk_versionmaster_approvedcomuserid" FOREIGN KEY ("approvedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionmaster" ADD CONSTRAINT "fk_versionmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionmaster" ADD CONSTRAINT "fk_versionmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionmaster" ADD CONSTRAINT "fk_versionmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionmaster" ADD CONSTRAINT "fk_versionmaster_projectid" FOREIGN KEY ("projectid") REFERENCES "e360"."projectmaster"("projectid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."versionmaster" ADD CONSTRAINT "fk_versionmaster_submittedcomuserid" FOREIGN KEY ("submittedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userprevexperience" ADD CONSTRAINT "fk_userprevexperience_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userprevexperience" ADD CONSTRAINT "fk_userprevexperience_comuserid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userprevexperience" ADD CONSTRAINT "fk_userprevexperience_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userprevexperience" ADD CONSTRAINT "fk_userprevexperience_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."userskillattributes" ADD CONSTRAINT "fk_userskillattributes_userskillid" FOREIGN KEY ("userskillid") REFERENCES "e360"."userskill"("userskillid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."weeklyholidaymaster" ADD CONSTRAINT "fk_weeklyholidaymaster_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."weeklyholidaymaster" ADD CONSTRAINT "fk_weeklyholidaymaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."weeklyholidaymaster" ADD CONSTRAINT "fk_weeklyholidaymaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."weeklyholidaymaster" ADD CONSTRAINT "fk_weeklyholidaymaster_locationid" FOREIGN KEY ("locationid") REFERENCES "e360"."locationmaster"("comlocationid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."weeklyholidaymaster" ADD CONSTRAINT "fk_weeklyholidaymaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."workforcegroupmaster" ADD CONSTRAINT "fk_workforcegroupmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."workforcegroupmaster" ADD CONSTRAINT "fk_workforcegroupmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."workforcegroupmaster" ADD CONSTRAINT "fk_workforcegroupmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."workmodemaster" ADD CONSTRAINT "fk_workmodemaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."workmodemaster" ADD CONSTRAINT "fk_workmodemaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."workmodemaster" ADD CONSTRAINT "fk_workmodemaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."auth_permission" ADD CONSTRAINT "auth_permission_content_type_id_2f476e4b_fk_django_co" FOREIGN KEY ("content_type_id") REFERENCES "e360"."django_content_type"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."auth_group_permissions" ADD CONSTRAINT "auth_group_permissio_permission_id_84c5c92e_fk_auth_perm" FOREIGN KEY ("permission_id") REFERENCES "e360"."auth_permission"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."auth_group_permissions" ADD CONSTRAINT "auth_group_permissions_group_id_b120cbf9_fk_auth_group_id" FOREIGN KEY ("group_id") REFERENCES "e360"."auth_group"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantmaster" ADD CONSTRAINT "fk_tenantmaster_comcityid" FOREIGN KEY ("comcityid") REFERENCES "e360"."citymaster"("comcityid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantmaster" ADD CONSTRAINT "fk_tenantmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantmaster" ADD CONSTRAINT "fk_tenantmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."tenantmaster" ADD CONSTRAINT "fk_tenantmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_band" FOREIGN KEY ("band") REFERENCES "e360"."bandmaster"("bandmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_city_id" FOREIGN KEY ("city_id") REFERENCES "e360"."citymaster"("comcityid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_comuserid" FOREIGN KEY ("comuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_datcomgenderid" FOREIGN KEY ("datcomgenderid") REFERENCES "e360"."datgender"("datcomgenderid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_departmentid" FOREIGN KEY ("departmentid") REFERENCES "e360"."departmentmaster"("departmentid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_designationmasterid" FOREIGN KEY ("designationmasterid") REFERENCES "e360"."designationmaster"("designationmasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_location_id" FOREIGN KEY ("location_id") REFERENCES "e360"."locationmaster"("comlocationid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_manager_id" FOREIGN KEY ("manager_id") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_nationalityid" FOREIGN KEY ("nationalityid") REFERENCES "e360"."nationalitymaster"("nationalityid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_payrollcompanyid" FOREIGN KEY ("payrollcompanyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_servicelineid" FOREIGN KEY ("servicelineid") REFERENCES "e360"."slmaster"("servicelineid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_skillareamasterid" FOREIGN KEY ("skillareamasterid") REFERENCES "e360"."skillareamaster"("skillareamasterid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_techgroupid" FOREIGN KEY ("techgroupid") REFERENCES "e360"."techgroupmaster"("techgroupid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_time_type" FOREIGN KEY ("time_type") REFERENCES "e360"."timetypemaster"("timetypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_worker_type" FOREIGN KEY ("worker_type") REFERENCES "e360"."workertypemaster"("workertypeid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."usermaster" ADD CONSTRAINT "fk_usermaster_workforcegroup" FOREIGN KEY ("workforcegroup") REFERENCES "e360"."workforcegroupmaster"("wfgid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."citymaster" ADD CONSTRAINT "fk_citymaster_comstateid" FOREIGN KEY ("comstateid") REFERENCES "e360"."statemaster"("comstateid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."citymaster" ADD CONSTRAINT "fk_citymaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."citymaster" ADD CONSTRAINT "fk_citymaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."citymaster" ADD CONSTRAINT "fk_citymaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companycontacts" ADD CONSTRAINT "fk_companycontacts_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companycontacts" ADD CONSTRAINT "fk_companycontacts_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companycontacts" ADD CONSTRAINT "fk_companycontacts_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."companycontacts" ADD CONSTRAINT "fk_companycontacts_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datcurrency" ADD CONSTRAINT "fk_datcurrency_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datcurrency" ADD CONSTRAINT "fk_datcurrency_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datcurrency" ADD CONSTRAINT "fk_datcurrency_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."regionmaster" ADD CONSTRAINT "fk_regionmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."regionmaster" ADD CONSTRAINT "fk_regionmaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."regionmaster" ADD CONSTRAINT "fk_regionmaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."industrymaster" ADD CONSTRAINT "fk_industrymaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."industrymaster" ADD CONSTRAINT "fk_industrymaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."industrymaster" ADD CONSTRAINT "fk_industrymaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datlanguage" ADD CONSTRAINT "fk_datlanguage_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datlanguage" ADD CONSTRAINT "fk_datlanguage_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datlanguage" ADD CONSTRAINT "fk_datlanguage_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datprojectbilltype" ADD CONSTRAINT "fk_datprojectbilltype_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datprojectbilltype" ADD CONSTRAINT "fk_datprojectbilltype_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datprojectbilltype" ADD CONSTRAINT "fk_datprojectbilltype_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datreportmaster" ADD CONSTRAINT "fk_datreportmaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."datreportmaster" ADD CONSTRAINT "fk_datreportmaster_datmenuid" FOREIGN KEY ("datmenuid") REFERENCES "e360"."datmenus"("datmenuid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."documentserialno" ADD CONSTRAINT "fk_documentserialno_documentserialnosettingid" FOREIGN KEY ("documentserialnosettingid") REFERENCES "e360"."documentserialnosetting"("documentserialnosettingid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."profitablityconfiguration" ADD CONSTRAINT "fk_profitablityconfiguration_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timecategorymaster" ADD CONSTRAINT "fk_timecategorymaster_companyid" FOREIGN KEY ("companyid") REFERENCES "e360"."companymaster"("companyid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timecategorymaster" ADD CONSTRAINT "fk_timecategorymaster_comtenantid" FOREIGN KEY ("comtenantid") REFERENCES "e360"."tenantmaster"("comtenantid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timecategorymaster" ADD CONSTRAINT "fk_timecategorymaster_createdcomuserid" FOREIGN KEY ("createdcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "e360"."timecategorymaster" ADD CONSTRAINT "fk_timecategorymaster_modifiedcomuserid" FOREIGN KEY ("modifiedcomuserid") REFERENCES "e360"."usermaster"("comuserid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "auth_user_user_permissions_permission_id_1fbb5f2c" ON "e360"."auth_user_user_permissions" USING btree ("permission_id" int4_ops);--> statement-breakpoint
CREATE INDEX "auth_user_user_permissions_user_id_a95ead1b" ON "e360"."auth_user_user_permissions" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX "auth_group_name_a6ea08ec_like" ON "e360"."auth_group" USING btree ("name" varchar_pattern_ops);--> statement-breakpoint
CREATE INDEX "auth_user_groups_group_id_97559544" ON "e360"."auth_user_groups" USING btree ("group_id" int4_ops);--> statement-breakpoint
CREATE INDEX "auth_user_groups_user_id_6a12ed8b" ON "e360"."auth_user_groups" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX "auth_user_username_6821ab7c_like" ON "e360"."auth_user" USING btree ("username" varchar_pattern_ops);--> statement-breakpoint
CREATE INDEX "indx_addresstypemaster_comtenantid" ON "e360"."addresstypemaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_addresstypemaster_createdcomuserid" ON "e360"."addresstypemaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_addresstypemaster_modifiedcomuserid" ON "e360"."addresstypemaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_bugroupmaster_comtenantid" ON "e360"."bugroupmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_bugroupmaster_createdcomuserid" ON "e360"."bugroupmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_bugroupmaster_groupcontactpersonid" ON "e360"."bugroupmaster" USING btree ("groupcontactpersonid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_bugroupmaster_groupheadid" ON "e360"."bugroupmaster" USING btree ("groupheadid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_bugroupmaster_modifiedcomuserid" ON "e360"."bugroupmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_bumaster_businessunitcontactpersonid" ON "e360"."bumaster" USING btree ("businessunitcontactpersonid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_bumaster_businessunitgroupid" ON "e360"."bumaster" USING btree ("businessunitgroupid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_bumaster_businessunitheadid" ON "e360"."bumaster" USING btree ("businessunitheadid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_bumaster_comtenantid" ON "e360"."bumaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_bumaster_createdcomuserid" ON "e360"."bumaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_bumaster_modifiedcomuserid" ON "e360"."bumaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_companyholidays_companyid" ON "e360"."companyholidays" USING btree ("companyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_companyholidays_comtenantid" ON "e360"."companyholidays" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_companyholidays_createdcomuserid" ON "e360"."companyholidays" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_companyholidays_modifiedcomuserid" ON "e360"."companyholidays" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_companyweekdays_companyid" ON "e360"."companyweekdays" USING btree ("companyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_companyweekdays_comtenantid" ON "e360"."companyweekdays" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_companyweekdays_createdcomuserid" ON "e360"."companyweekdays" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_companyweekdays_modifiedcomuserid" ON "e360"."companyweekdays" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_companymaster_comcityid" ON "e360"."companymaster" USING btree ("comcityid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_companymaster_comtenantid" ON "e360"."companymaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_companymaster_createdcomuserid" ON "e360"."companymaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_companymaster_defaultcomcurrencyid" ON "e360"."companymaster" USING btree ("defaultcomcurrencyid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_companymaster_deletedcomuserid" ON "e360"."companymaster" USING btree ("deletedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_companymaster_modifiedcomuserid" ON "e360"."companymaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customerdocuments_comtenantid" ON "e360"."customerdocuments" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customerdocuments_createdcomuserid" ON "e360"."customerdocuments" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customerdocuments_customerid" ON "e360"."customerdocuments" USING btree ("customerid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customerdocuments_deletedcomuserid" ON "e360"."customerdocuments" USING btree ("deletedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customerdocuments_documenttype" ON "e360"."customerdocuments" USING btree ("documenttype" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customerdocuments_modifiedcomuserid" ON "e360"."customerdocuments" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_costcentermaster_comtenantid" ON "e360"."costcentermaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_costcentermaster_createdcomuserid" ON "e360"."costcentermaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_costcentermaster_modifiedcomuserid" ON "e360"."costcentermaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_countrymaster_comregionid" ON "e360"."countrymaster" USING btree ("comregionid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_countrymaster_comtenantid" ON "e360"."countrymaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_countrymaster_createdcomuserid" ON "e360"."countrymaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_countrymaster_modifiedcomuserid" ON "e360"."countrymaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customercontacts_comtenantid" ON "e360"."customercontacts" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customercontacts_createdcomuserid" ON "e360"."customercontacts" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customercontacts_customerid" ON "e360"."customercontacts" USING btree ("customerid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customercontacts_modifiedcomuserid" ON "e360"."customercontacts" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customerholidays_comtenantid" ON "e360"."customerholidays" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customerholidays_createdcomuserid" ON "e360"."customerholidays" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customerholidays_customerid" ON "e360"."customerholidays" USING btree ("customerid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customerholidays_modifiedcomuserid" ON "e360"."customerholidays" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupcontacts_comtenantid" ON "e360"."customergroupcontacts" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupcontacts_createdcomuserid" ON "e360"."customergroupcontacts" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupcontacts_customergroupid" ON "e360"."customergroupcontacts" USING btree ("customergroupid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupcontacts_modifiedcomuserid" ON "e360"."customergroupcontacts" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_dateducation_comtenantid" ON "e360"."dateducation" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_dateducation_createdcomuserid" ON "e360"."dateducation" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_dateducation_modifiedcomuserid" ON "e360"."dateducation" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customermaster_accountmanagerid" ON "e360"."customermaster" USING btree ("accountmanagerid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customermaster_comcityid" ON "e360"."customermaster" USING btree ("comcityid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customermaster_comtenantid" ON "e360"."customermaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customermaster_createdcomuserid" ON "e360"."customermaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customermaster_customergroupid" ON "e360"."customermaster" USING btree ("customergroupid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customermaster_defaultcomcurrencyid" ON "e360"."customermaster" USING btree ("defaultcomcurrencyid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customermaster_modifiedcomuserid" ON "e360"."customermaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupmaster_accountmanagerid" ON "e360"."customergroupmaster" USING btree ("accountmanagerid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupmaster_comtenantid" ON "e360"."customergroupmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupmaster_contactpersonid" ON "e360"."customergroupmaster" USING btree ("contactpersonid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupmaster_createdcomuserid" ON "e360"."customergroupmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupmaster_modifiedcomuserid" ON "e360"."customergroupmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupdocuments_comtenantid" ON "e360"."customergroupdocuments" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupdocuments_createdcomuserid" ON "e360"."customergroupdocuments" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupdocuments_customergroupid" ON "e360"."customergroupdocuments" USING btree ("customergroupid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupdocuments_deletedcomuserid" ON "e360"."customergroupdocuments" USING btree ("deletedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupdocuments_documenttype" ON "e360"."customergroupdocuments" USING btree ("documenttype" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customergroupdocuments_modifiedcomuserid" ON "e360"."customergroupdocuments" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customerweekdays_comtenantid" ON "e360"."customerweekdays" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customerweekdays_createdcomuserid" ON "e360"."customerweekdays" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_customerweekdays_customerid" ON "e360"."customerweekdays" USING btree ("customerid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_customerweekdays_modifiedcomuserid" ON "e360"."customerweekdays" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datcourse_comtenantid" ON "e360"."datcourse" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_datcourse_createdcomuserid" ON "e360"."datcourse" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datcourse_dateducationmasterid" ON "e360"."datcourse" USING btree ("dateducationmasterid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_datcourse_modifiedcomuserid" ON "e360"."datcourse" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datexchangerate_createdcomuserid" ON "e360"."datexchangerate" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datexchangerate_fromcurid" ON "e360"."datexchangerate" USING btree ("currencyfrom" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_datexchangerate_modifiedcomuserid" ON "e360"."datexchangerate" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datexchangerate_tocurid" ON "e360"."datexchangerate" USING btree ("currencyto" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_datgender_comtenantid" ON "e360"."datgender" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_datgender_createdcomuserid" ON "e360"."datgender" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datgender_modifiedcomuserid" ON "e360"."datgender" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datspecialisation_comtenantid" ON "e360"."datspecialisation" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_datspecialisation_createdcomuserid" ON "e360"."datspecialisation" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datspecialisation_datcoursemasterid" ON "e360"."datspecialisation" USING btree ("datcoursemasterid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_datspecialisation_modifiedcomuserid" ON "e360"."datspecialisation" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_demandmatch_comtenantid" ON "e360"."demandmatch" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_demandmatch_createdcomuserid" ON "e360"."demandmatch" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_demandmatch_demandid" ON "e360"."demandmatch" USING btree ("demandid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_demandmatch_modifiedcomuserid" ON "e360"."demandmatch" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_demandmatch_userid" ON "e360"."demandmatch" USING btree ("userid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_deliveryrolemaster_createdcomuserid" ON "e360"."deliveryrolemaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_deliveryrolemaster_modifiedcomuserid" ON "e360"."deliveryrolemaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datusertype_comtenantid" ON "e360"."datusertype" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_datusertype_createdcomuserid" ON "e360"."datusertype" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datusertype_datusertypeid" ON "e360"."datusertype" USING btree ("datusertypeid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_datusertype_modifiedcomuserid" ON "e360"."datusertype" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datusertype_usertype" ON "e360"."datusertype" USING btree ("usertype" text_ops);--> statement-breakpoint
CREATE INDEX "indx_deliverymodemaster_comtenantid" ON "e360"."deliverymodemaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_demandmaster_businessunitid" ON "e360"."demandmaster" USING btree ("businessunitid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_demandmaster_comtenantid" ON "e360"."demandmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_demandmaster_servicelineid" ON "e360"."demandmaster" USING btree ("servicelineid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_demandmaster_workertypeid" ON "e360"."demandmaster" USING btree ("workertypeid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_documenttypemaster_comtenantid" ON "e360"."documenttypemaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_documenttypemaster_createdcomuserid" ON "e360"."documenttypemaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_documenttypemaster_modifiedcomuserid" ON "e360"."documenttypemaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "django_session_expire_date_a5c62663" ON "e360"."django_session" USING btree ("expire_date" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "django_session_session_key_c0390e0f_like" ON "e360"."django_session" USING btree ("session_key" varchar_pattern_ops);--> statement-breakpoint
CREATE INDEX "indx_emaildraft_comtenantid" ON "e360"."emaildraft" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_emailsend_comtenantid" ON "e360"."emailsend" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_emailsend_emaildraftid" ON "e360"."emailsend" USING btree ("emaildraftid" int4_ops);--> statement-breakpoint
CREATE INDEX "django_admin_log_content_type_id_c4bce8eb" ON "e360"."django_admin_log" USING btree ("content_type_id" int4_ops);--> statement-breakpoint
CREATE INDEX "django_admin_log_user_id_c564eba6" ON "e360"."django_admin_log" USING btree ("user_id" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_departmentmaster_comtenantid" ON "e360"."departmentmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_departmentmaster_costcenter_id" ON "e360"."departmentmaster" USING btree ("costcenter_id" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_departmentmaster_createdcomuserid" ON "e360"."departmentmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_departmentmaster_modifiedcomuserid" ON "e360"."departmentmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_demandskills_demandid" ON "e360"."demandskills" USING btree ("demandid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_demandskills_skillmasterid" ON "e360"."demandskills" USING btree ("skillmasterid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_designationmaster_comtenantid" ON "e360"."designationmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_designationmaster_createdcomuserid" ON "e360"."designationmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_designationmaster_modifiedcomuserid" ON "e360"."designationmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_roleskillmap_comtenantid" ON "e360"."designationskillmap" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_roleskillmap_createdcomuserid" ON "e360"."designationskillmap" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_roleskillmap_designationid" ON "e360"."designationskillmap" USING btree ("designationid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_roleskillmap_levelid" ON "e360"."designationskillmap" USING btree ("levelid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_roleskillmap_modifiedcomuserid" ON "e360"."designationskillmap" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_roleskillmap_skillid" ON "e360"."designationskillmap" USING btree ("skillid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_forgotpassword_comuserid" ON "e360"."forgotpassword" USING btree ("comuserid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_forgotpassword_createdcomuserid" ON "e360"."forgotpassword" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_forgotpassword_modifiedcomuserid" ON "e360"."forgotpassword" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "idx_forgotpasswordlink_activeflag" ON "e360"."forgotpasswordlink" USING btree ("activeflag" bool_ops);--> statement-breakpoint
CREATE INDEX "idx_forgotpasswordlink_createddate" ON "e360"."forgotpasswordlink" USING btree ("createddate" timestamp_ops);--> statement-breakpoint
CREATE INDEX "idx_forgotpasswordlink_passwordresetlink" ON "e360"."forgotpasswordlink" USING btree ("passwordresetlink" text_ops);--> statement-breakpoint
CREATE INDEX "idx_forgotpasswordlink_usermaster_id" ON "e360"."forgotpasswordlink" USING btree ("comuserid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_nationalitymaster_comtenantid" ON "e360"."nationalitymaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_nationalitymaster_createdcomuserid" ON "e360"."nationalitymaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_nationalitymaster_modifiedcomuserid" ON "e360"."nationalitymaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_holidaymaster_companyid" ON "e360"."holidaymaster" USING btree ("companyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_holidaymaster_comtenantid" ON "e360"."holidaymaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_holidaymaster_createdcomuserid" ON "e360"."holidaymaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_holidaymaster_locationid" ON "e360"."holidaymaster" USING btree ("locationid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_holidaymaster_modifiedcomuserid" ON "e360"."holidaymaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_levelmaster_comtenantid" ON "e360"."levelmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_levelmaster_createdcomuserid" ON "e360"."levelmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_levelmaster_modifiedcomuserid" ON "e360"."levelmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_locationmaster_comcityid" ON "e360"."locationmaster" USING btree ("comcityid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_locationmaster_comtenantid" ON "e360"."locationmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_locationmaster_createdcomuserid" ON "e360"."locationmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_locationmaster_modifiedcomuserid" ON "e360"."locationmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_opportunity_comtenantid" ON "e360"."opportunity" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_leavetypemaster_comtenantid" ON "e360"."leavetypemaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_leavetypemaster_createdcomuserid" ON "e360"."leavetypemaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_leavetypemaster_modifiedcomuserid" ON "e360"."leavetypemaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_overheadmaster_comtenantid" ON "e360"."overheadmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_overheadmaster_createdcomuserid" ON "e360"."overheadmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_overheadmaster_modifiedcomuserid" ON "e360"."overheadmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_productmaster_comtenantid" ON "e360"."productmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_productmaster_createdcomuserid" ON "e360"."productmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_productmaster_modifiedcomuserid" ON "e360"."productmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_productmaster_techid" ON "e360"."productmaster" USING btree ("technology" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectactivityversion_activityownerid" ON "e360"."projectactivityversion" USING btree ("activityownerid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectactivityversion_createdcomuserid" ON "e360"."projectactivityversion" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectactivityversion_modifiedcomuserid" ON "e360"."projectactivityversion" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectactivityversion_projectid" ON "e360"."projectactivityversion" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectattributes_comtenantid" ON "e360"."projectattributes" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectattributes_createdcomuserid" ON "e360"."projectattributes" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectattributes_linkprojectid" ON "e360"."projectattributes" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectattributes_modifiedcomuserid" ON "e360"."projectattributes" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectattributes_productid" ON "e360"."projectattributes" USING btree ("productid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectattributes_projectid" ON "e360"."projectattributes" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectattributes_techid" ON "e360"."projectattributes" USING btree ("technologyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectbudgetversion_createdcomuserid" ON "e360"."projectbudgetversion" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectbudgetversion_datcomcurrencyid" ON "e360"."projectbudgetversion" USING btree ("datcomcurrencyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectbudgetversion_modifiedcomuserid" ON "e360"."projectbudgetversion" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectbudgetversion_overheadid" ON "e360"."projectbudgetversion" USING btree ("overheadid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectdocuments_comtenantid" ON "e360"."projectdocuments" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectdocuments_createdcomuserid" ON "e360"."projectdocuments" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectdocuments_deletedcomuserid" ON "e360"."projectdocuments" USING btree ("deletedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectdocuments_documenttype" ON "e360"."projectdocuments" USING btree ("documenttype" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectdocuments_modifiedcomuserid" ON "e360"."projectdocuments" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectdocuments_projectid" ON "e360"."projectdocuments" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projecteffort_approverid" ON "e360"."projecteffort" USING btree ("approverid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projecteffort_createdcomuserid" ON "e360"."projecteffort" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projecteffort_modifiedcomuserid" ON "e360"."projecteffort" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projecteffort_projstaffid" ON "e360"."projecteffort" USING btree ("projstaffid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projecteffortdetails_createdcomuserid" ON "e360"."projecteffortdetails" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projecteffortdetails_modifiedcomuserid" ON "e360"."projecteffortdetails" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projecteffortdetails_projstaffid" ON "e360"."projecteffortdetails" USING btree ("projeffortid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projecteffortdetails_projtaskid" ON "e360"."projecteffortdetails" USING btree ("projtaskid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectactivity_activityownerid" ON "e360"."projectactivity" USING btree ("activityownerid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectactivity_createdcomuserid" ON "e360"."projectactivity" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectactivity_modifiedcomuserid" ON "e360"."projectactivity" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectactivity_projectid" ON "e360"."projectactivity" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectbudget_createdcomuserid" ON "e360"."projectbudget" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectbudget_datcomcurrencyid" ON "e360"."projectbudget" USING btree ("datcomcurrencyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectbudget_modifiedcomuserid" ON "e360"."projectbudget" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectbudget_overheadid" ON "e360"."projectbudget" USING btree ("overheadid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectestimationdetails_createdcomuserid" ON "e360"."projectestimationdetails" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectestimationdetails_datcomcurrencyid" ON "e360"."projectestimationdetails" USING btree ("datcomcurrencyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectestimationdetails_modifiedcomuserid" ON "e360"."projectestimationdetails" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectestimationdetails_overheadid" ON "e360"."projectestimationdetails" USING btree ("overheadid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectestimationdetails_projectestimationid" ON "e360"."projectestimationdetails" USING btree ("projectestimationid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectexpense_createdcomuserid" ON "e360"."projectexpense" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectexpense_datcomcurrencyid" ON "e360"."projectexpense" USING btree ("datcomcurrencyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectexpense_modifiedcomuserid" ON "e360"."projectexpense" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectexpense_overheadid" ON "e360"."projectexpense" USING btree ("overheadid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectexpense_projectid" ON "e360"."projectexpense" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectexpense_taggeduser" ON "e360"."projectexpense" USING btree ("taggeduser" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectholidays_comtenantid" ON "e360"."projectholidays" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectholidays_createdcomuserid" ON "e360"."projectholidays" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectholidays_modifiedcomuserid" ON "e360"."projectholidays" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectholidays_projectid" ON "e360"."projectholidays" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectprofitability_createdcomuserid" ON "e360"."projectprofitability" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectprofitability_datcomcurrencyid" ON "e360"."projectprofitability" USING btree ("datcomcurrencyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectprofitability_projectid" ON "e360"."projectprofitability" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmilestones_createdcomuserid" ON "e360"."projectmilestones" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmilestones_modifiedcomuserid" ON "e360"."projectmilestones" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmilestones_projectid" ON "e360"."projectmilestones" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmilestones_projecttaskid" ON "e360"."projectmilestones" USING btree ("projecttaskid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectplanversion_createdcomuserid" ON "e360"."projectplanversion" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectplanversion_projectid" ON "e360"."projectplanversion" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectestimation_approverid" ON "e360"."projectestimation" USING btree ("approverid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectestimation_createdcomuserid" ON "e360"."projectestimation" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectestimation_datcomcurrencyid" ON "e360"."projectestimation" USING btree ("datcomcurrencyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectestimation_modifiedcomuserid" ON "e360"."projectestimation" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectestimation_projectid" ON "e360"."projectestimation" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmaster_businessunitid" ON "e360"."projectmaster" USING btree ("businessunitid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmaster_companyid" ON "e360"."projectmaster" USING btree ("companyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmaster_comtenantid" ON "e360"."projectmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmaster_createdcomuserid" ON "e360"."projectmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmaster_customerid" ON "e360"."projectmaster" USING btree ("customerid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmaster_datprojectbillingtypeid" ON "e360"."projectmaster" USING btree ("datprojectbillingtypeid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmaster_defaultcomcurrencyid" ON "e360"."projectmaster" USING btree ("defaultcomcurrencyid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmaster_deliverymanagerid" ON "e360"."projectmaster" USING btree ("deliverymanagerid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmaster_departmentid" ON "e360"."projectmaster" USING btree ("departmentid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmaster_locationid" ON "e360"."projectmaster" USING btree ("locationid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmaster_modifiedcomuserid" ON "e360"."projectmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmaster_projectmanagerid" ON "e360"."projectmaster" USING btree ("projectmanagerid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmaster_projecttypeid" ON "e360"."projectmaster" USING btree ("projecttypeid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectmaster_servicelineid" ON "e360"."projectmaster" USING btree ("servicelineid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectrole_crateid" ON "e360"."projectrole" USING btree ("crateid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectrole_createdcomuserid" ON "e360"."projectrole" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectrole_datcomcurrencyid" ON "e360"."projectrole" USING btree ("datcomcurrencyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectrole_estimationdetailid" ON "e360"."projectrole" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectrole_modifiedcomuserid" ON "e360"."projectrole" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectrole_staffid" ON "e360"."projectrole" USING btree ("staffcostid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectroleactualeffortmonthsplit_projectroleid" ON "e360"."projectroleactualeffortmonthsplit" USING btree ("projectroleid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projecttasks_createdcomuserid" ON "e360"."projecttasks" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projecttasks_modifiedcomuserid" ON "e360"."projecttasks" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projecttasks_projectactivityid" ON "e360"."projecttasks" USING btree ("projectactivityid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projecttypemaster_comtenantid" ON "e360"."projecttypemaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projecttypemaster_createdcomuserid" ON "e360"."projecttypemaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projecttypemaster_modifiedcomuserid" ON "e360"."projecttypemaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectstaff_createdcomuserid" ON "e360"."projectstaff" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectstaff_modifiedcomuserid" ON "e360"."projectstaff" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectstaff_projroleid" ON "e360"."projectstaff" USING btree ("projroleid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectstaff_userid" ON "e360"."projectstaff" USING btree ("userid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectrevenue_createdcomuserid" ON "e360"."projectrevenue" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectrevenue_datcomcurrencyid" ON "e360"."projectrevenue" USING btree ("datcomcurrencyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectrevenue_modifiedcomuserid" ON "e360"."projectrevenue" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectrevenue_projectid" ON "e360"."projectrevenue" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectroleeffortmonthsplit_comtenantid" ON "e360"."projectroleeffortmonthsplit" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectroleeffortmonthsplit_projectroleid" ON "e360"."projectroleeffortmonthsplit" USING btree ("projectroleid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectroleeffortmonthsplit_yearmonth" ON "e360"."projectroleeffortmonthsplit" USING btree ("yearmonth" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectroleversion_crateid" ON "e360"."projectroleversion" USING btree ("crateid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectroleversion_createdcomuserid" ON "e360"."projectroleversion" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectroleversion_datcomcurrencyid" ON "e360"."projectroleversion" USING btree ("datcomcurrencyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectroleversion_estimationdetailid" ON "e360"."projectroleversion" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projectroleversion_modifiedcomuserid" ON "e360"."projectroleversion" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_projectroleversion_staffid" ON "e360"."projectroleversion" USING btree ("staffcostid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_sourcemaster_comtenantid" ON "e360"."sourcemaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_statemaster_comcountryid" ON "e360"."statemaster" USING btree ("comcountryid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_statemaster_comtenantid" ON "e360"."statemaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_statemaster_createdcomuserid" ON "e360"."statemaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_statemaster_modifiedcomuserid" ON "e360"."statemaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_slmaster_comtenantid" ON "e360"."slmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_slmaster_createdcomuserid" ON "e360"."slmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_slmaster_modifiedcomuserid" ON "e360"."slmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_slmaster_servicelinecontactpersonid" ON "e360"."slmaster" USING btree ("servicelinecontactpersonid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_slmaster_servicelinegroupid" ON "e360"."slmaster" USING btree ("servicelinegroupid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_slmaster_servicelineheadid" ON "e360"."slmaster" USING btree ("servicelineheadid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_skillmaster_comtenantid" ON "e360"."skillmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_skillmaster_createdcomuserid" ON "e360"."skillmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_skillmaster_modifiedcomuserid" ON "e360"."skillmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_technologymaster_comtenantid" ON "e360"."technologymaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_technologymaster_createdcomuserid" ON "e360"."technologymaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_technologymaster_modifiedcomuserid" ON "e360"."technologymaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_taskmaster_comtenantid" ON "e360"."taskmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_taskmaster_createdcomuserid" ON "e360"."taskmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_taskmaster_modifiedcomuserid" ON "e360"."taskmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_taskmaster_taskgroupid" ON "e360"."taskmaster" USING btree ("taskgroupid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_taskmaster_tasktypeid" ON "e360"."taskmaster" USING btree ("tasktypeid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usercostrate_comtenantid" ON "e360"."staffcostrate" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usercostrate_createdcomuserid" ON "e360"."staffcostrate" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_usercostrate_currid" ON "e360"."staffcostrate" USING btree ("comcurrencyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usercostrate_designationid" ON "e360"."staffcostrate" USING btree ("designationid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usercostrate_locid" ON "e360"."staffcostrate" USING btree ("cityid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usercostrate_modifiedcomuserid" ON "e360"."staffcostrate" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_usercostrate_skillid" ON "e360"."staffcostrate" USING btree ("skillid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usercostrate_techid" ON "e360"."staffcostrate" USING btree ("techid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_slgroupmaster_comtenantid" ON "e360"."slgroupmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_slgroupmaster_createdcomuserid" ON "e360"."slgroupmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_slgroupmaster_groupcontactpersonid" ON "e360"."slgroupmaster" USING btree ("groupcontactpersonid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_slgroupmaster_groupheadid" ON "e360"."slgroupmaster" USING btree ("groupheadid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_slgroupmaster_modifiedcomuserid" ON "e360"."slgroupmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_slprojectprofitability_createdcomuserid" ON "e360"."slprojectprofitability" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_slprojectprofitability_datcomcurrencyid" ON "e360"."slprojectprofitability" USING btree ("datcomcurrencyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_slprojectprofitability_projectid" ON "e360"."slprojectprofitability" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_taskgroupmaster_comtenantid" ON "e360"."taskgroupmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_taskgroupmaster_createdcomuserid" ON "e360"."taskgroupmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_taskgroupmaster_modifiedcomuserid" ON "e360"."taskgroupmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_tasktypemaster_comtenantid" ON "e360"."tasktypemaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_tasktypemaster_createdcomuserid" ON "e360"."tasktypemaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_tasktypemaster_modifiedcomuserid" ON "e360"."tasktypemaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_tenantcontacts_comtenantid" ON "e360"."tenantcontacts" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_tenantcontacts_createdcomuserid" ON "e360"."tenantcontacts" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_tenantcontacts_modifiedcomuserid" ON "e360"."tenantcontacts" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_tenantcontacts_tenantcontactpersonsid" ON "e360"."tenantcontacts" USING btree ("tenantcontactpersonsid" int4_ops);--> statement-breakpoint
CREATE INDEX "tmp_indx_test_timesheetexceptionsummary_noncompliancetype" ON "e360"."test_timesheetexceptionsummary" USING btree ("noncompliancetype" text_ops);--> statement-breakpoint
CREATE INDEX "tmp_indx_test_timesheetexceptionsummary_projectid" ON "e360"."test_timesheetexceptionsummary" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "tmp_indx_test_timesheetexceptionsummary_timesheetstatus" ON "e360"."test_timesheetexceptionsummary" USING btree ("timesheetstatus" text_ops);--> statement-breakpoint
CREATE INDEX "tmp_indx_test_timesheetexceptionsummary_timsheethours" ON "e360"."test_timesheetexceptionsummary" USING btree ("timsheethours" numeric_ops);--> statement-breakpoint
CREATE INDEX "tmp_indx_test_timesheetexceptionsummary_userid" ON "e360"."test_timesheetexceptionsummary" USING btree ("userid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_timetemplatemaster_modifiedcomuserid" ON "e360"."timetemplatemaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_timetemplatemasterid_companyid" ON "e360"."timetemplatemaster" USING btree ("companyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_timetemplatemasterid_comtenantid" ON "e360"."timetemplatemaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_timetemplatemasterid_createdcomuserid" ON "e360"."timetemplatemaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_timetypemaster_comtenantid" ON "e360"."timetypemaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_timetypemaster_createdcomuserid" ON "e360"."timetypemaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_timetypemaster_modifiedcomuserid" ON "e360"."timetypemaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_timetypetemplatemapping_timetemplatemasterid" ON "e360"."timetypetemplatemapping" USING btree ("timetemplatemasterid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_timetypetemplatemappingid_companyid" ON "e360"."timetypetemplatemapping" USING btree ("companyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_timetypetemplatemappingid_comtenantid" ON "e360"."timetypetemplatemapping" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_timetypetemplatemappingid_createdcomuserid" ON "e360"."timetypetemplatemapping" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_userdocuments_comtenantid" ON "e360"."userdocuments" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userdocuments_comuserid" ON "e360"."userdocuments" USING btree ("comuserid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userdocuments_createdcomuserid" ON "e360"."userdocuments" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_userdocuments_deletedcomuserid" ON "e360"."userdocuments" USING btree ("deletedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_userdocuments_documenttype" ON "e360"."userdocuments" USING btree ("documenttype" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userdocuments_modifiedcomuserid" ON "e360"."userdocuments" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_usereducation_comtenantid" ON "e360"."usereducation" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usereducation_comusereducationid" ON "e360"."usereducation" USING btree ("comusereducationid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usereducation_comuserid" ON "e360"."usereducation" USING btree ("comuserid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usereducation_createdcomuserid" ON "e360"."usereducation" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_usereducation_datcoursemasterid" ON "e360"."usereducation" USING btree ("datcoursemasterid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usereducation_dateducationmasterid" ON "e360"."usereducation" USING btree ("dateducationmasterid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usereducation_datspecialisationid" ON "e360"."usereducation" USING btree ("datspecialisationid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usereducation_modifiedcomuserid" ON "e360"."usereducation" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_userleavedata_comtenantid" ON "e360"."userleavedata" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userleavedata_comuserid" ON "e360"."userleavedata" USING btree ("comuserid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userleavedata_createdcomuserid" ON "e360"."userleavedata" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_userleavedata_modifiedcomuserid" ON "e360"."userleavedata" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_useraddress_addresstype" ON "e360"."useraddress" USING btree ("addresstype" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_useraddress_comcityid" ON "e360"."useraddress" USING btree ("comcityid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_useraddress_comcountryid" ON "e360"."useraddress" USING btree ("comcountryid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_useraddress_comstateid" ON "e360"."useraddress" USING btree ("comstateid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_useraddress_comtenantid" ON "e360"."useraddress" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_useraddress_comuseraddressid" ON "e360"."useraddress" USING btree ("comuseraddressid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_useraddress_comuserid" ON "e360"."useraddress" USING btree ("comuserid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_useraddress_createdcomuserid" ON "e360"."useraddress" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_useraddress_modifiedcomuserid" ON "e360"."useraddress" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_usercertification_comtenantid" ON "e360"."usercertification" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usercertification_comusercertificationid" ON "e360"."usercertification" USING btree ("comusercertificationid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usercertification_comuserid" ON "e360"."usercertification" USING btree ("comuserid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userpreference_comtenantid" ON "e360"."userpreference" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userpreference_comuserid" ON "e360"."userpreference" USING btree ("comuserid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userpreference_comuserpreferenceid" ON "e360"."userpreference" USING btree ("comuserpreferenceid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userpreference_createdcomuserid" ON "e360"."userpreference" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_userpreference_modifiedcomuserid" ON "e360"."userpreference" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_userpreference_preferredlocation1id" ON "e360"."userpreference" USING btree ("preferredlocation1id" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userpreference_preferredlocation2id" ON "e360"."userpreference" USING btree ("preferredlocation2id" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userpreference_preferredlocation3id" ON "e360"."userpreference" USING btree ("preferredlocation3id" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userpreference_workmode" ON "e360"."userpreference" USING btree ("workmode" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userskilltechnology_comtenantid" ON "e360"."userskilltechnology" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userskilltechnology_comuserid" ON "e360"."userskilltechnology" USING btree ("comuserid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userskilltechnology_comuserskilltechnologyid" ON "e360"."userskilltechnology" USING btree ("comuserskilltechnologyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userskilltechnology_createdcomuserid" ON "e360"."userskilltechnology" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_userskilltechnology_modifiedcomuserid" ON "e360"."userskilltechnology" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_userskilltechnology_skillmasterid" ON "e360"."userskilltechnology" USING btree ("skillmasterid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userskilltechnology_technologymasterid" ON "e360"."userskilltechnology" USING btree ("technologymasterid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userwiseprojectprofitability_createdcomuserid" ON "e360"."userwiseprojectprofitability" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_userwiseprojectprofitability_datcomcurrencyid" ON "e360"."userwiseprojectprofitability" USING btree ("datcomcurrencyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userwiseprojectprofitability_projectid" ON "e360"."userwiseprojectprofitability" USING btree ("projectid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userpayroll_createdcomuserid" ON "e360"."userpayroll" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_userpayroll_datcomcurrencyid" ON "e360"."userpayroll" USING btree ("datcomcurrencyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userpayroll_modifiedcomuserid" ON "e360"."userpayroll" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_userpayroll_userid" ON "e360"."userpayroll" USING btree ("userid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userpayroll_userpayid" ON "e360"."userpayroll" USING btree ("userpayid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_workertypemaster_comtenantid" ON "e360"."workertypemaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_workertypemaster_createdcomuserid" ON "e360"."workertypemaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_workertypemaster_modifiedcomuserid" ON "e360"."workertypemaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_userprevexperience_comtenantid" ON "e360"."userprevexperience" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userprevexperience_comuserid" ON "e360"."userprevexperience" USING btree ("comuserid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userprevexperience_comuserprevexperienceid" ON "e360"."userprevexperience" USING btree ("comuserprevexperienceid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_userprevexperience_createdcomuserid" ON "e360"."userprevexperience" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_userprevexperience_modifiedcomuserid" ON "e360"."userprevexperience" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_weeklyholidaymaster_companyid" ON "e360"."weeklyholidaymaster" USING btree ("companyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_weeklyholidaymaster_comtenantid" ON "e360"."weeklyholidaymaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_weeklyholidaymaster_createdcomuserid" ON "e360"."weeklyholidaymaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_weeklyholidaymaster_locationid" ON "e360"."weeklyholidaymaster" USING btree ("locationid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_weeklyholidaymaster_modifiedcomuserid" ON "e360"."weeklyholidaymaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_workmodemaster_comtenantid" ON "e360"."workmodemaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_workmodemaster_createdcomuserid" ON "e360"."workmodemaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_workmodemaster_modifiedcomuserid" ON "e360"."workmodemaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "auth_permission_content_type_id_2f476e4b" ON "e360"."auth_permission" USING btree ("content_type_id" int4_ops);--> statement-breakpoint
CREATE INDEX "auth_group_permissions_group_id_b120cbf9" ON "e360"."auth_group_permissions" USING btree ("group_id" int4_ops);--> statement-breakpoint
CREATE INDEX "auth_group_permissions_permission_id_84c5c92e" ON "e360"."auth_group_permissions" USING btree ("permission_id" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_projecteffort_comtenantid" ON "e360"."tenantmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_tenantmaster_comtenantid" ON "e360"."tenantmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_tenantmaster_createdcomuserid" ON "e360"."tenantmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_tenantmaster_modifiedcomuserid" ON "e360"."tenantmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_tenantmaster_tenantcode" ON "e360"."tenantmaster" USING btree ("tenantcode" text_ops);--> statement-breakpoint
CREATE INDEX "indx_tenantmaster_tenantname" ON "e360"."tenantmaster" USING btree ("tenantname" text_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_city_id" ON "e360"."usermaster" USING btree ("city_id" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_comtenantid" ON "e360"."usermaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_comuserid" ON "e360"."usermaster" USING btree ("comuserid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_createdcomuserid" ON "e360"."usermaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_datcomgenderid" ON "e360"."usermaster" USING btree ("datcomgenderid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_datusertypeid" ON "e360"."usermaster" USING btree ("datusertypeid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_departmentid" ON "e360"."usermaster" USING btree ("departmentid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_designationmasterid" ON "e360"."usermaster" USING btree ("designationmasterid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_location_id" ON "e360"."usermaster" USING btree ("location_id" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_manager_id" ON "e360"."usermaster" USING btree ("manager_id" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_modifiedcomuserid" ON "e360"."usermaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_nationalityid" ON "e360"."usermaster" USING btree ("nationalityid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_payrollcompanyid" ON "e360"."usermaster" USING btree ("payrollcompanyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_servicelineid" ON "e360"."usermaster" USING btree ("servicelineid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_thirdpartyappusercode" ON "e360"."usermaster" USING btree ("thirdpartyappusercode" text_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_time_type" ON "e360"."usermaster" USING btree ("time_type" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_username" ON "e360"."usermaster" USING btree ("username" text_ops);--> statement-breakpoint
CREATE INDEX "indx_usermaster_worker_type" ON "e360"."usermaster" USING btree ("worker_type" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_citymaster_comstateid" ON "e360"."citymaster" USING btree ("comstateid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_citymaster_comtenantid" ON "e360"."citymaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_citymaster_createdcomuserid" ON "e360"."citymaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_citymaster_modifiedcomuserid" ON "e360"."citymaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_companycontacts_companyid" ON "e360"."companycontacts" USING btree ("companyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_companycontacts_comtenantid" ON "e360"."companycontacts" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_companycontacts_createdcomuserid" ON "e360"."companycontacts" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_companycontacts_modifiedcomuserid" ON "e360"."companycontacts" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datcurrency_comtenantid" ON "e360"."datcurrency" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_datcurrency_createdcomuserid" ON "e360"."datcurrency" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datcurrency_modifiedcomuserid" ON "e360"."datcurrency" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_regionmaster_comtenantid" ON "e360"."regionmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_regionmaster_createdcomuserid" ON "e360"."regionmaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_regionmaster_modifiedcomuserid" ON "e360"."regionmaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_industrymaster_comtenantid" ON "e360"."industrymaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_industrymaster_createdcomuserid" ON "e360"."industrymaster" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_industrymaster_modifiedcomuserid" ON "e360"."industrymaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datlanguage_comtenantid" ON "e360"."datlanguage" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_datlanguage_createdcomuserid" ON "e360"."datlanguage" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datlanguage_modifiedcomuserid" ON "e360"."datlanguage" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datprojectbilltype_comtenantid" ON "e360"."datprojectbilltype" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_datprojectbilltype_createdcomuserid" ON "e360"."datprojectbilltype" USING btree ("createdcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datprojectbilltype_modifiedcomuserid" ON "e360"."datprojectbilltype" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_datreportmaster_comtenantid" ON "e360"."datreportmaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_timecategorymaster_modifiedcomuserid" ON "e360"."timecategorymaster" USING btree ("modifiedcomuserid" int2_ops);--> statement-breakpoint
CREATE INDEX "indx_timecategorymasterid_companyid" ON "e360"."timecategorymaster" USING btree ("companyid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_timecategorymasterid_comtenantid" ON "e360"."timecategorymaster" USING btree ("comtenantid" int4_ops);--> statement-breakpoint
CREATE INDEX "indx_timecategorymasterid_createdcomuserid" ON "e360"."timecategorymaster" USING btree ("createdcomuserid" int2_ops);
*/