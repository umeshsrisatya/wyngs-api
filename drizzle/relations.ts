import { relations } from "drizzle-orm/relations";
import { tenantmasterInE360, bandmasterInE360, usermasterInE360, authPermissionInE360, authUserUserPermissionsInE360, authUserInE360, authGroupInE360, authUserGroupsInE360, addresstypemasterInE360, announcementsInE360, bugroupmasterInE360, bumasterInE360, companymasterInE360, companyholidaysInE360, companyweekdaysInE360, citymasterInE360, datcurrencyInE360, comuserprojectmappingInE360, customerdocumentsInE360, customermasterInE360, documenttypemasterInE360, costcentermasterInE360, regionmasterInE360, countrymasterInE360, customercontactsInE360, customerholidaysInE360, customergroupcontactsInE360, customergroupmasterInE360, dateducationInE360, industrymasterInE360, customergroupdocumentsInE360, customerratesInE360, customerrolesInE360, levelmasterInE360, locationmasterInE360, skillareamasterInE360, techgroupmasterInE360, deliveryrolemasterInE360, customersubscriptionInE360, customerweekdaysInE360, datcourseInE360, datexchangerateInE360, datgenderInE360, datmoduleInE360, datmodulealiasInE360, datmenupermissionInE360, datmenusInE360, datspecialisationInE360, datsubscriptionpackageInE360, demandmatchInE360, demandmasterInE360, datstatusmasterInE360, demandroledetailInE360, demandmatchconfigurationInE360, datsubscriptionpackagemoduleInE360, datusertypeInE360, deliverymodemasterInE360, departmentmasterInE360, opportunityInE360, projectmasterInE360, slmasterInE360, workertypemasterInE360, workforcegroupmasterInE360, workmodemasterInE360, demandmatchconfigincludestatusInE360, demandmatchconfigincludeusertypeInE360, demandmatchdetailsInE360, djangoContentTypeInE360, djangoAdminLogInE360, demandroleresponsibilitiesInE360, demandskillsInE360, skillmasterInE360, technologymasterInE360, designationmasterInE360, designationskillmapInE360, forgotpasswordInE360, nationalitymasterInE360, holidaymasterInE360, leavetypemasterInE360, orgcostrateInE360, overheadmasterInE360, productmasterInE360, projectprofitabilityInE360, profitabilitydetailsInE360, projectactivityversionInE360, projectattributesInE360, projectbudgetdetailsInE360, projectbudgetInE360, projectbudgetversionInE360, projectcustomercontactsInE360, projectdocumentsInE360, projecteffortInE360, projectstaffInE360, projecteffortdetailsInE360, projecttasksInE360, taskmasterInE360, timecategorymasterInE360, projectactivityInE360, projectestimationdetailsInE360, projectestimationInE360, projectexpenseInE360, projectholidaysInE360, projectmilestonesInE360, projectplanversionInE360, projectproductmappingInE360, datprojectbilltypeInE360, projecttypemasterInE360, timetemplatemasterInE360, projectmasterversionInE360, versionmasterInE360, projectroleInE360, projectroleactualeffortmonthsplitInE360, rolemasterInE360, rolemenupermissionsInE360, projectrevenueInE360, projectroleeffortmonthsplitInE360, projectroletasksInE360, projectroleversionInE360, staffcostrateInE360, rolemenusInE360, servicelineskillareamappingInE360, sourcemasterInE360, statemasterInE360, slgroupmasterInE360, taskgroupmasterInE360, tasktypemasterInE360, roleusermappingInE360, sapuserworkassignmentInE360, slprojectprofitabilityInE360, tenantemailidconfigurationInE360, tenants3BucketconfigurationInE360, tenantcontactsInE360, tenantsubscriptionInE360, timesheetbillinginputInE360, tenantsubscriptionpricingInE360, timetypemasterInE360, timetypetemplatemappingInE360, userdocumentsInE360, usereducationInE360, userleavedataInE360, useraddressInE360, usercertificationInE360, userpreferenceInE360, userskillInE360, userskilltechnologyInE360, userwiseprojectprofitabilityInE360, versionmasterdeletehistoryInE360, userpayrollInE360, versionscheduleInE360, userprevexperienceInE360, userskillattributesInE360, weeklyholidaymasterInE360, authGroupPermissionsInE360, companycontactsInE360, datlanguageInE360, datreportmasterInE360, documentserialnosettingInE360, documentserialnoInE360, profitablityconfigurationInE360 } from "./schema";

export const bandmasterInE360Relations = relations(bandmasterInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [bandmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [bandmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "bandmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [bandmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "bandmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customerratesInE360s_maxBandid: many(customerratesInE360, {
		relationName: "customerratesInE360_maxBandid_bandmasterInE360_bandmasterid"
	}),
	customerratesInE360s_minBandid: many(customerratesInE360, {
		relationName: "customerratesInE360_minBandid_bandmasterInE360_bandmasterid"
	}),
	demandroledetailInE360s_maxBandid: many(demandroledetailInE360, {
		relationName: "demandroledetailInE360_maxBandid_bandmasterInE360_bandmasterid"
	}),
	demandroledetailInE360s_minBandid: many(demandroledetailInE360, {
		relationName: "demandroledetailInE360_minBandid_bandmasterInE360_bandmasterid"
	}),
	orgcostrateInE360s: many(orgcostrateInE360),
	projectroleInE360s_maxBandid: many(projectroleInE360, {
		relationName: "projectroleInE360_maxBandid_bandmasterInE360_bandmasterid"
	}),
	projectroleInE360s_minBandid: many(projectroleInE360, {
		relationName: "projectroleInE360_minBandid_bandmasterInE360_bandmasterid"
	}),
	projectroleversionInE360s_maxBandid: many(projectroleversionInE360, {
		relationName: "projectroleversionInE360_maxBandid_bandmasterInE360_bandmasterid"
	}),
	projectroleversionInE360s_minBandid: many(projectroleversionInE360, {
		relationName: "projectroleversionInE360_minBandid_bandmasterInE360_bandmasterid"
	}),
	staffcostrateInE360s: many(staffcostrateInE360),
	usermasterInE360s: many(usermasterInE360, {
		relationName: "usermasterInE360_band_bandmasterInE360_bandmasterid"
	}),
}));

export const tenantmasterInE360Relations = relations(tenantmasterInE360, ({one, many}) => ({
	bandmasterInE360s: many(bandmasterInE360),
	addresstypemasterInE360s: many(addresstypemasterInE360),
	announcementsInE360s: many(announcementsInE360),
	bugroupmasterInE360s: many(bugroupmasterInE360),
	bumasterInE360s: many(bumasterInE360),
	companyholidaysInE360s: many(companyholidaysInE360),
	companyweekdaysInE360s: many(companyweekdaysInE360),
	companymasterInE360s: many(companymasterInE360),
	comuserprojectmappingInE360s: many(comuserprojectmappingInE360),
	customerdocumentsInE360s: many(customerdocumentsInE360),
	costcentermasterInE360s: many(costcentermasterInE360),
	countrymasterInE360s: many(countrymasterInE360),
	customercontactsInE360s: many(customercontactsInE360),
	customerholidaysInE360s: many(customerholidaysInE360),
	customergroupcontactsInE360s: many(customergroupcontactsInE360),
	dateducationInE360s: many(dateducationInE360),
	customermasterInE360s: many(customermasterInE360),
	customergroupmasterInE360s: many(customergroupmasterInE360),
	customergroupdocumentsInE360s: many(customergroupdocumentsInE360),
	customersubscriptionInE360s: many(customersubscriptionInE360),
	customerweekdaysInE360s: many(customerweekdaysInE360),
	datcourseInE360s: many(datcourseInE360),
	datgenderInE360s: many(datgenderInE360),
	datmoduleInE360s: many(datmoduleInE360),
	datmenupermissionInE360s: many(datmenupermissionInE360),
	datmenusInE360s: many(datmenusInE360),
	datmodulealiasInE360s: many(datmodulealiasInE360),
	datspecialisationInE360s: many(datspecialisationInE360),
	demandmatchInE360s: many(demandmatchInE360),
	deliveryrolemasterInE360s: many(deliveryrolemasterInE360),
	demandmatchconfigurationInE360s: many(demandmatchconfigurationInE360),
	datusertypeInE360s: many(datusertypeInE360),
	deliverymodemasterInE360s: many(deliverymodemasterInE360),
	demandmasterInE360s: many(demandmasterInE360),
	documenttypemasterInE360s: many(documenttypemasterInE360),
	departmentmasterInE360s: many(departmentmasterInE360),
	demandskillsInE360s: many(demandskillsInE360),
	designationmasterInE360s: many(designationmasterInE360),
	designationskillmapInE360s: many(designationskillmapInE360),
	nationalitymasterInE360s: many(nationalitymasterInE360),
	holidaymasterInE360s: many(holidaymasterInE360),
	levelmasterInE360s: many(levelmasterInE360),
	locationmasterInE360s: many(locationmasterInE360),
	opportunityInE360s: many(opportunityInE360),
	leavetypemasterInE360s: many(leavetypemasterInE360),
	orgcostrateInE360s: many(orgcostrateInE360),
	overheadmasterInE360s: many(overheadmasterInE360),
	productmasterInE360s: many(productmasterInE360),
	projectattributesInE360s: many(projectattributesInE360),
	projectdocumentsInE360s: many(projectdocumentsInE360),
	projecteffortInE360s: many(projecteffortInE360),
	projectexpenseInE360s: many(projectexpenseInE360),
	projectholidaysInE360s: many(projectholidaysInE360),
	projectproductmappingInE360s: many(projectproductmappingInE360),
	projectmasterInE360s: many(projectmasterInE360),
	projectmasterversionInE360s: many(projectmasterversionInE360),
	projectroleactualeffortmonthsplitInE360s: many(projectroleactualeffortmonthsplitInE360),
	rolemasterInE360s: many(rolemasterInE360),
	projecttypemasterInE360s: many(projecttypemasterInE360),
	projectstaffInE360s: many(projectstaffInE360),
	projectroleeffortmonthsplitInE360s: many(projectroleeffortmonthsplitInE360),
	sourcemasterInE360s: many(sourcemasterInE360),
	statemasterInE360s: many(statemasterInE360),
	slmasterInE360s: many(slmasterInE360),
	skillmasterInE360s: many(skillmasterInE360),
	technologymasterInE360s: many(technologymasterInE360),
	taskmasterInE360s: many(taskmasterInE360),
	staffcostrateInE360s: many(staffcostrateInE360),
	roleusermappingInE360s: many(roleusermappingInE360),
	slgroupmasterInE360s: many(slgroupmasterInE360),
	taskgroupmasterInE360s: many(taskgroupmasterInE360),
	tasktypemasterInE360s: many(tasktypemasterInE360),
	tenantemailidconfigurationInE360s: many(tenantemailidconfigurationInE360),
	tenants3BucketconfigurationInE360s: many(tenants3BucketconfigurationInE360),
	tenantcontactsInE360s: many(tenantcontactsInE360),
	tenantsubscriptionInE360s: many(tenantsubscriptionInE360),
	timetemplatemasterInE360s: many(timetemplatemasterInE360),
	tenantsubscriptionpricingInE360s: many(tenantsubscriptionpricingInE360),
	timetypemasterInE360s: many(timetypemasterInE360),
	timetypetemplatemappingInE360s: many(timetypetemplatemappingInE360),
	userdocumentsInE360s: many(userdocumentsInE360),
	usereducationInE360s: many(usereducationInE360),
	userleavedataInE360s: many(userleavedataInE360),
	useraddressInE360s: many(useraddressInE360),
	usercertificationInE360s: many(usercertificationInE360),
	userpreferenceInE360s: many(userpreferenceInE360),
	userskillInE360s: many(userskillInE360),
	userskilltechnologyInE360s: many(userskilltechnologyInE360),
	versionmasterdeletehistoryInE360s: many(versionmasterdeletehistoryInE360),
	versionscheduleInE360s: many(versionscheduleInE360),
	workertypemasterInE360s: many(workertypemasterInE360),
	versionmasterInE360s: many(versionmasterInE360),
	userprevexperienceInE360s: many(userprevexperienceInE360),
	weeklyholidaymasterInE360s: many(weeklyholidaymasterInE360),
	workforcegroupmasterInE360s: many(workforcegroupmasterInE360),
	workmodemasterInE360s: many(workmodemasterInE360),
	citymasterInE360: one(citymasterInE360, {
		fields: [tenantmasterInE360.comcityid],
		references: [citymasterInE360.comcityid],
		relationName: "tenantmasterInE360_comcityid_citymasterInE360_comcityid"
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [tenantmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid],
		relationName: "tenantmasterInE360_comtenantid_tenantmasterInE360_comtenantid"
	}),
	tenantmasterInE360s: many(tenantmasterInE360, {
		relationName: "tenantmasterInE360_comtenantid_tenantmasterInE360_comtenantid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [tenantmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "tenantmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [tenantmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "tenantmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360s: many(usermasterInE360, {
		relationName: "usermasterInE360_comtenantid_tenantmasterInE360_comtenantid"
	}),
	citymasterInE360s: many(citymasterInE360, {
		relationName: "citymasterInE360_comtenantid_tenantmasterInE360_comtenantid"
	}),
	companycontactsInE360s: many(companycontactsInE360),
	datcurrencyInE360s: many(datcurrencyInE360),
	regionmasterInE360s: many(regionmasterInE360),
	industrymasterInE360s: many(industrymasterInE360),
	datlanguageInE360s: many(datlanguageInE360),
	datprojectbilltypeInE360s: many(datprojectbilltypeInE360),
	datreportmasterInE360s: many(datreportmasterInE360),
	profitablityconfigurationInE360s: many(profitablityconfigurationInE360),
	timecategorymasterInE360s: many(timecategorymasterInE360),
}));

export const usermasterInE360Relations = relations(usermasterInE360, ({one, many}) => ({
	bandmasterInE360s_createdcomuserid: many(bandmasterInE360, {
		relationName: "bandmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	bandmasterInE360s_modifiedcomuserid: many(bandmasterInE360, {
		relationName: "bandmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	addresstypemasterInE360s_createdcomuserid: many(addresstypemasterInE360, {
		relationName: "addresstypemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	addresstypemasterInE360s_modifiedcomuserid: many(addresstypemasterInE360, {
		relationName: "addresstypemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	announcementsInE360s_createdcomuserid: many(announcementsInE360, {
		relationName: "announcementsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	announcementsInE360s_modifiedcomuserid: many(announcementsInE360, {
		relationName: "announcementsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	bugroupmasterInE360s_businessunitgroupheadcomuserid: many(bugroupmasterInE360, {
		relationName: "bugroupmasterInE360_businessunitgroupheadcomuserid_usermasterInE360_comuserid"
	}),
	bugroupmasterInE360s_createdcomuserid: many(bugroupmasterInE360, {
		relationName: "bugroupmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	bugroupmasterInE360s_groupcontactpersonid: many(bugroupmasterInE360, {
		relationName: "bugroupmasterInE360_groupcontactpersonid_usermasterInE360_comuserid"
	}),
	bugroupmasterInE360s_groupheadid: many(bugroupmasterInE360, {
		relationName: "bugroupmasterInE360_groupheadid_usermasterInE360_comuserid"
	}),
	bugroupmasterInE360s_modifiedcomuserid: many(bugroupmasterInE360, {
		relationName: "bugroupmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	bumasterInE360s_businessunitcontactpersonid: many(bumasterInE360, {
		relationName: "bumasterInE360_businessunitcontactpersonid_usermasterInE360_comuserid"
	}),
	bumasterInE360s_businessunitheadid: many(bumasterInE360, {
		relationName: "bumasterInE360_businessunitheadid_usermasterInE360_comuserid"
	}),
	bumasterInE360s_createdcomuserid: many(bumasterInE360, {
		relationName: "bumasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	bumasterInE360s_modifiedcomuserid: many(bumasterInE360, {
		relationName: "bumasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	companyholidaysInE360s_createdcomuserid: many(companyholidaysInE360, {
		relationName: "companyholidaysInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	companyholidaysInE360s_modifiedcomuserid: many(companyholidaysInE360, {
		relationName: "companyholidaysInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	companyweekdaysInE360s_createdcomuserid: many(companyweekdaysInE360, {
		relationName: "companyweekdaysInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	companyweekdaysInE360s_modifiedcomuserid: many(companyweekdaysInE360, {
		relationName: "companyweekdaysInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	companymasterInE360s_createdcomuserid: many(companymasterInE360, {
		relationName: "companymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	companymasterInE360s_deletedcomuserid: many(companymasterInE360, {
		relationName: "companymasterInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	companymasterInE360s_modifiedcomuserid: many(companymasterInE360, {
		relationName: "companymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customerdocumentsInE360s_createdcomuserid: many(customerdocumentsInE360, {
		relationName: "customerdocumentsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customerdocumentsInE360s_deletedcomuserid: many(customerdocumentsInE360, {
		relationName: "customerdocumentsInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	customerdocumentsInE360s_modifiedcomuserid: many(customerdocumentsInE360, {
		relationName: "customerdocumentsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	costcentermasterInE360s_createdcomuserid: many(costcentermasterInE360, {
		relationName: "costcentermasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	costcentermasterInE360s_modifiedcomuserid: many(costcentermasterInE360, {
		relationName: "costcentermasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	countrymasterInE360s_createdcomuserid: many(countrymasterInE360, {
		relationName: "countrymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	countrymasterInE360s_modifiedcomuserid: many(countrymasterInE360, {
		relationName: "countrymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customercontactsInE360s_createdcomuserid: many(customercontactsInE360, {
		relationName: "customercontactsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customercontactsInE360s_modifiedcomuserid: many(customercontactsInE360, {
		relationName: "customercontactsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customerholidaysInE360s_createdcomuserid: many(customerholidaysInE360, {
		relationName: "customerholidaysInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customerholidaysInE360s_modifiedcomuserid: many(customerholidaysInE360, {
		relationName: "customerholidaysInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customergroupcontactsInE360s_createdcomuserid: many(customergroupcontactsInE360, {
		relationName: "customergroupcontactsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customergroupcontactsInE360s_modifiedcomuserid: many(customergroupcontactsInE360, {
		relationName: "customergroupcontactsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	dateducationInE360s_createdcomuserid: many(dateducationInE360, {
		relationName: "dateducationInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	dateducationInE360s_modifiedcomuserid: many(dateducationInE360, {
		relationName: "dateducationInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customermasterInE360s_accountmanagerid: many(customermasterInE360, {
		relationName: "customermasterInE360_accountmanagerid_usermasterInE360_comuserid"
	}),
	customermasterInE360s_createdcomuserid: many(customermasterInE360, {
		relationName: "customermasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customermasterInE360s_modifiedcomuserid: many(customermasterInE360, {
		relationName: "customermasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customergroupmasterInE360s_accountmanagerid: many(customergroupmasterInE360, {
		relationName: "customergroupmasterInE360_accountmanagerid_usermasterInE360_comuserid"
	}),
	customergroupmasterInE360s_contactpersonid: many(customergroupmasterInE360, {
		relationName: "customergroupmasterInE360_contactpersonid_usermasterInE360_comuserid"
	}),
	customergroupmasterInE360s_createdcomuserid: many(customergroupmasterInE360, {
		relationName: "customergroupmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customergroupmasterInE360s_modifiedcomuserid: many(customergroupmasterInE360, {
		relationName: "customergroupmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customergroupdocumentsInE360s_createdcomuserid: many(customergroupdocumentsInE360, {
		relationName: "customergroupdocumentsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customergroupdocumentsInE360s_deletedcomuserid: many(customergroupdocumentsInE360, {
		relationName: "customergroupdocumentsInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	customergroupdocumentsInE360s_modifiedcomuserid: many(customergroupdocumentsInE360, {
		relationName: "customergroupdocumentsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customerratesInE360s_createdcomuserid: many(customerratesInE360, {
		relationName: "customerratesInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customerratesInE360s_modifiedcomuserid: many(customerratesInE360, {
		relationName: "customerratesInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customerrolesInE360s_createdcomuserid: many(customerrolesInE360, {
		relationName: "customerrolesInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customerrolesInE360s_modifiedcomuserid: many(customerrolesInE360, {
		relationName: "customerrolesInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customersubscriptionInE360s_createdcomuserid: many(customersubscriptionInE360, {
		relationName: "customersubscriptionInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customersubscriptionInE360s_deletedcomuserid: many(customersubscriptionInE360, {
		relationName: "customersubscriptionInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	customerweekdaysInE360s_createdcomuserid: many(customerweekdaysInE360, {
		relationName: "customerweekdaysInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customerweekdaysInE360s_modifiedcomuserid: many(customerweekdaysInE360, {
		relationName: "customerweekdaysInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	datcourseInE360s_createdcomuserid: many(datcourseInE360, {
		relationName: "datcourseInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcourseInE360s_modifiedcomuserid: many(datcourseInE360, {
		relationName: "datcourseInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	datexchangerateInE360s_createdcomuserid: many(datexchangerateInE360, {
		relationName: "datexchangerateInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datexchangerateInE360s_modifiedcomuserid: many(datexchangerateInE360, {
		relationName: "datexchangerateInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	datgenderInE360s_createdcomuserid: many(datgenderInE360, {
		relationName: "datgenderInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datgenderInE360s_modifiedcomuserid: many(datgenderInE360, {
		relationName: "datgenderInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	datspecialisationInE360s_createdcomuserid: many(datspecialisationInE360, {
		relationName: "datspecialisationInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datspecialisationInE360s_modifiedcomuserid: many(datspecialisationInE360, {
		relationName: "datspecialisationInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	datsubscriptionpackageInE360s_createdcomuserid: many(datsubscriptionpackageInE360, {
		relationName: "datsubscriptionpackageInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datsubscriptionpackageInE360s_deletedcomuserid: many(datsubscriptionpackageInE360, {
		relationName: "datsubscriptionpackageInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	datsubscriptionpackageInE360s_modifiedcomuserid: many(datsubscriptionpackageInE360, {
		relationName: "datsubscriptionpackageInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	demandmatchInE360s_createdcomuserid: many(demandmatchInE360, {
		relationName: "demandmatchInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	demandmatchInE360s_modifiedcomuserid: many(demandmatchInE360, {
		relationName: "demandmatchInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	demandmatchInE360s_userid: many(demandmatchInE360, {
		relationName: "demandmatchInE360_userid_usermasterInE360_comuserid"
	}),
	demandroledetailInE360s: many(demandroledetailInE360),
	demandmatchconfigurationInE360s_createdcomuserid: many(demandmatchconfigurationInE360, {
		relationName: "demandmatchconfigurationInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	demandmatchconfigurationInE360s_modifiedcomuserid: many(demandmatchconfigurationInE360, {
		relationName: "demandmatchconfigurationInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	datusertypeInE360s_createdcomuserid: many(datusertypeInE360, {
		relationName: "datusertypeInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datusertypeInE360s_modifiedcomuserid: many(datusertypeInE360, {
		relationName: "datusertypeInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	deliverymodemasterInE360s_createdcomuserid: many(deliverymodemasterInE360, {
		relationName: "deliverymodemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	deliverymodemasterInE360s_modifiedcomuserid: many(deliverymodemasterInE360, {
		relationName: "deliverymodemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	demandmasterInE360s_assignedto: many(demandmasterInE360, {
		relationName: "demandmasterInE360_assignedto_usermasterInE360_comuserid"
	}),
	demandmasterInE360s_createdcomuserid: many(demandmasterInE360, {
		relationName: "demandmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	demandmatchdetailsInE360s: many(demandmatchdetailsInE360),
	documenttypemasterInE360s_createdcomuserid: many(documenttypemasterInE360, {
		relationName: "documenttypemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	documenttypemasterInE360s_modifiedcomuserid: many(documenttypemasterInE360, {
		relationName: "documenttypemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	departmentmasterInE360s_createdcomuserid: many(departmentmasterInE360, {
		relationName: "departmentmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	departmentmasterInE360s_modifiedcomuserid: many(departmentmasterInE360, {
		relationName: "departmentmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	demandskillsInE360s: many(demandskillsInE360),
	designationmasterInE360s_createdcomuserid: many(designationmasterInE360, {
		relationName: "designationmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	designationmasterInE360s_modifiedcomuserid: many(designationmasterInE360, {
		relationName: "designationmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	designationskillmapInE360s_createdcomuserid: many(designationskillmapInE360, {
		relationName: "designationskillmapInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	designationskillmapInE360s_modifiedcomuserid: many(designationskillmapInE360, {
		relationName: "designationskillmapInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	forgotpasswordInE360s_comuserid: many(forgotpasswordInE360, {
		relationName: "forgotpasswordInE360_comuserid_usermasterInE360_comuserid"
	}),
	forgotpasswordInE360s_createdcomuserid: many(forgotpasswordInE360, {
		relationName: "forgotpasswordInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	forgotpasswordInE360s_modifiedcomuserid: many(forgotpasswordInE360, {
		relationName: "forgotpasswordInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	nationalitymasterInE360s_createdcomuserid: many(nationalitymasterInE360, {
		relationName: "nationalitymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	nationalitymasterInE360s_modifiedcomuserid: many(nationalitymasterInE360, {
		relationName: "nationalitymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	holidaymasterInE360s_createdcomuserid: many(holidaymasterInE360, {
		relationName: "holidaymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	holidaymasterInE360s_modifiedcomuserid: many(holidaymasterInE360, {
		relationName: "holidaymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	levelmasterInE360s_createdcomuserid: many(levelmasterInE360, {
		relationName: "levelmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	levelmasterInE360s_modifiedcomuserid: many(levelmasterInE360, {
		relationName: "levelmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	locationmasterInE360s_createdcomuserid: many(locationmasterInE360, {
		relationName: "locationmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	locationmasterInE360s_modifiedcomuserid: many(locationmasterInE360, {
		relationName: "locationmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	opportunityInE360s_createdcomuserid: many(opportunityInE360, {
		relationName: "opportunityInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	opportunityInE360s_modifiedcomuserid: many(opportunityInE360, {
		relationName: "opportunityInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	opportunityInE360s_salesmanagerid: many(opportunityInE360, {
		relationName: "opportunityInE360_salesmanagerid_usermasterInE360_comuserid"
	}),
	leavetypemasterInE360s_createdcomuserid: many(leavetypemasterInE360, {
		relationName: "leavetypemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	leavetypemasterInE360s_modifiedcomuserid: many(leavetypemasterInE360, {
		relationName: "leavetypemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	orgcostrateInE360s_createdcomuserid: many(orgcostrateInE360, {
		relationName: "orgcostrateInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	orgcostrateInE360s_modifiedcomuserid: many(orgcostrateInE360, {
		relationName: "orgcostrateInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	overheadmasterInE360s_createdcomuserid: many(overheadmasterInE360, {
		relationName: "overheadmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	overheadmasterInE360s_modifiedcomuserid: many(overheadmasterInE360, {
		relationName: "overheadmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	productmasterInE360s_createdcomuserid: many(productmasterInE360, {
		relationName: "productmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	productmasterInE360s_modifiedcomuserid: many(productmasterInE360, {
		relationName: "productmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectactivityversionInE360s_activityownerid: many(projectactivityversionInE360, {
		relationName: "projectactivityversionInE360_activityownerid_usermasterInE360_comuserid"
	}),
	projectactivityversionInE360s_createdcomuserid: many(projectactivityversionInE360, {
		relationName: "projectactivityversionInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectactivityversionInE360s_modifiedcomuserid: many(projectactivityversionInE360, {
		relationName: "projectactivityversionInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectattributesInE360s_createdcomuserid: many(projectattributesInE360, {
		relationName: "projectattributesInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectattributesInE360s_modifiedcomuserid: many(projectattributesInE360, {
		relationName: "projectattributesInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectbudgetversionInE360s_createdcomuserid: many(projectbudgetversionInE360, {
		relationName: "projectbudgetversionInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectbudgetversionInE360s_modifiedcomuserid: many(projectbudgetversionInE360, {
		relationName: "projectbudgetversionInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectcustomercontactsInE360s_createdcomuserid: many(projectcustomercontactsInE360, {
		relationName: "projectcustomercontactsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectcustomercontactsInE360s_modifiedcomuserid: many(projectcustomercontactsInE360, {
		relationName: "projectcustomercontactsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectdocumentsInE360s_createdcomuserid: many(projectdocumentsInE360, {
		relationName: "projectdocumentsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectdocumentsInE360s_deletedcomuserid: many(projectdocumentsInE360, {
		relationName: "projectdocumentsInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	projectdocumentsInE360s_modifiedcomuserid: many(projectdocumentsInE360, {
		relationName: "projectdocumentsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projecteffortInE360s_approverid: many(projecteffortInE360, {
		relationName: "projecteffortInE360_approverid_usermasterInE360_comuserid"
	}),
	projecteffortInE360s_comuserid: many(projecteffortInE360, {
		relationName: "projecteffortInE360_comuserid_usermasterInE360_comuserid"
	}),
	projecteffortInE360s_createdcomuserid: many(projecteffortInE360, {
		relationName: "projecteffortInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projecteffortInE360s_modifiedcomuserid: many(projecteffortInE360, {
		relationName: "projecteffortInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projecteffortdetailsInE360s_createdcomuserid: many(projecteffortdetailsInE360, {
		relationName: "projecteffortdetailsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projecteffortdetailsInE360s_modifiedcomuserid: many(projecteffortdetailsInE360, {
		relationName: "projecteffortdetailsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectactivityInE360s_createdcomuserid: many(projectactivityInE360, {
		relationName: "projectactivityInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectactivityInE360s_modifiedcomuserid: many(projectactivityInE360, {
		relationName: "projectactivityInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectbudgetInE360s_createdcomuserid: many(projectbudgetInE360, {
		relationName: "projectbudgetInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectbudgetInE360s_modifiedcomuserid: many(projectbudgetInE360, {
		relationName: "projectbudgetInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectestimationdetailsInE360s_createdcomuserid: many(projectestimationdetailsInE360, {
		relationName: "projectestimationdetailsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectestimationdetailsInE360s_modifiedcomuserid: many(projectestimationdetailsInE360, {
		relationName: "projectestimationdetailsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectexpenseInE360s_createdcomuserid: many(projectexpenseInE360, {
		relationName: "projectexpenseInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectexpenseInE360s_modifiedcomuserid: many(projectexpenseInE360, {
		relationName: "projectexpenseInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectexpenseInE360s_taggeduser: many(projectexpenseInE360, {
		relationName: "projectexpenseInE360_taggeduser_usermasterInE360_comuserid"
	}),
	projectholidaysInE360s_createdcomuserid: many(projectholidaysInE360, {
		relationName: "projectholidaysInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectholidaysInE360s_modifiedcomuserid: many(projectholidaysInE360, {
		relationName: "projectholidaysInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectprofitabilityInE360s: many(projectprofitabilityInE360),
	projectmilestonesInE360s_createdcomuserid: many(projectmilestonesInE360, {
		relationName: "projectmilestonesInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectmilestonesInE360s_modifiedcomuserid: many(projectmilestonesInE360, {
		relationName: "projectmilestonesInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectplanversionInE360s_createdcomuserid: many(projectplanversionInE360, {
		relationName: "projectplanversionInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectplanversionInE360s_modifiedcomuserid: many(projectplanversionInE360, {
		relationName: "projectplanversionInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectestimationInE360s_approverid: many(projectestimationInE360, {
		relationName: "projectestimationInE360_approverid_usermasterInE360_comuserid"
	}),
	projectestimationInE360s_createdcomuserid: many(projectestimationInE360, {
		relationName: "projectestimationInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectestimationInE360s_modifiedcomuserid: many(projectestimationInE360, {
		relationName: "projectestimationInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360s_createdcomuserid: many(projectmasterInE360, {
		relationName: "projectmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360s_deliverymanagerid: many(projectmasterInE360, {
		relationName: "projectmasterInE360_deliverymanagerid_usermasterInE360_comuserid"
	}),
	projectmasterInE360s_modifiedcomuserid: many(projectmasterInE360, {
		relationName: "projectmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360s_pmo1: many(projectmasterInE360, {
		relationName: "projectmasterInE360_pmo1_usermasterInE360_comuserid"
	}),
	projectmasterInE360s_pmo2: many(projectmasterInE360, {
		relationName: "projectmasterInE360_pmo2_usermasterInE360_comuserid"
	}),
	projectmasterInE360s_pmo3: many(projectmasterInE360, {
		relationName: "projectmasterInE360_pmo3_usermasterInE360_comuserid"
	}),
	projectmasterInE360s_pmocontactpersonid: many(projectmasterInE360, {
		relationName: "projectmasterInE360_pmocontactpersonid_usermasterInE360_comuserid"
	}),
	projectmasterInE360s_projectmanagerid: many(projectmasterInE360, {
		relationName: "projectmasterInE360_projectmanagerid_usermasterInE360_comuserid"
	}),
	projectmasterversionInE360s_createdcomuserid: many(projectmasterversionInE360, {
		relationName: "projectmasterversionInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterversionInE360s_deliverymanagerid: many(projectmasterversionInE360, {
		relationName: "projectmasterversionInE360_deliverymanagerid_usermasterInE360_comuserid"
	}),
	projectmasterversionInE360s_modifiedcomuserid: many(projectmasterversionInE360, {
		relationName: "projectmasterversionInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterversionInE360s_pmo1: many(projectmasterversionInE360, {
		relationName: "projectmasterversionInE360_pmo1_usermasterInE360_comuserid"
	}),
	projectmasterversionInE360s_pmo2: many(projectmasterversionInE360, {
		relationName: "projectmasterversionInE360_pmo2_usermasterInE360_comuserid"
	}),
	projectmasterversionInE360s_pmo3: many(projectmasterversionInE360, {
		relationName: "projectmasterversionInE360_pmo3_usermasterInE360_comuserid"
	}),
	projectmasterversionInE360s_pmocontactpersonid: many(projectmasterversionInE360, {
		relationName: "projectmasterversionInE360_pmocontactpersonid_usermasterInE360_comuserid"
	}),
	projectmasterversionInE360s_projectmanagerid: many(projectmasterversionInE360, {
		relationName: "projectmasterversionInE360_projectmanagerid_usermasterInE360_comuserid"
	}),
	projectroleInE360s_createdcomuserid: many(projectroleInE360, {
		relationName: "projectroleInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectroleInE360s_modifiedcomuserid: many(projectroleInE360, {
		relationName: "projectroleInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projecttasksInE360s_createdcomuserid: many(projecttasksInE360, {
		relationName: "projecttasksInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projecttasksInE360s_modifiedcomuserid: many(projecttasksInE360, {
		relationName: "projecttasksInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projecttypemasterInE360s_createdcomuserid: many(projecttypemasterInE360, {
		relationName: "projecttypemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projecttypemasterInE360s_modifiedcomuserid: many(projecttypemasterInE360, {
		relationName: "projecttypemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectstaffInE360s_createdcomuserid: many(projectstaffInE360, {
		relationName: "projectstaffInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectstaffInE360s_modifiedcomuserid: many(projectstaffInE360, {
		relationName: "projectstaffInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectstaffInE360s_userid: many(projectstaffInE360, {
		relationName: "projectstaffInE360_userid_usermasterInE360_comuserid"
	}),
	projectrevenueInE360s_createdcomuserid: many(projectrevenueInE360, {
		relationName: "projectrevenueInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectrevenueInE360s_modifiedcomuserid: many(projectrevenueInE360, {
		relationName: "projectrevenueInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectroletasksInE360s_createduser: many(projectroletasksInE360, {
		relationName: "projectroletasksInE360_createduser_usermasterInE360_comuserid"
	}),
	projectroletasksInE360s_updateduser: many(projectroletasksInE360, {
		relationName: "projectroletasksInE360_updateduser_usermasterInE360_comuserid"
	}),
	projectroleversionInE360s_createdcomuserid: many(projectroleversionInE360, {
		relationName: "projectroleversionInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectroleversionInE360s_modifiedcomuserid: many(projectroleversionInE360, {
		relationName: "projectroleversionInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	sourcemasterInE360s_createdcomuserid: many(sourcemasterInE360, {
		relationName: "sourcemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	sourcemasterInE360s_modifiedcomuserid: many(sourcemasterInE360, {
		relationName: "sourcemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	statemasterInE360s_createdcomuserid: many(statemasterInE360, {
		relationName: "statemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	statemasterInE360s_modifiedcomuserid: many(statemasterInE360, {
		relationName: "statemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	slmasterInE360s_createdcomuserid: many(slmasterInE360, {
		relationName: "slmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	slmasterInE360s_modifiedcomuserid: many(slmasterInE360, {
		relationName: "slmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	slmasterInE360s_servicelinecontactpersonid: many(slmasterInE360, {
		relationName: "slmasterInE360_servicelinecontactpersonid_usermasterInE360_comuserid"
	}),
	slmasterInE360s_servicelineheadid: many(slmasterInE360, {
		relationName: "slmasterInE360_servicelineheadid_usermasterInE360_comuserid"
	}),
	skillmasterInE360s_createdcomuserid: many(skillmasterInE360, {
		relationName: "skillmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	skillmasterInE360s_modifiedcomuserid: many(skillmasterInE360, {
		relationName: "skillmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	technologymasterInE360s_createdcomuserid: many(technologymasterInE360, {
		relationName: "technologymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	technologymasterInE360s_modifiedcomuserid: many(technologymasterInE360, {
		relationName: "technologymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	taskmasterInE360s_createdcomuserid: many(taskmasterInE360, {
		relationName: "taskmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	taskmasterInE360s_modifiedcomuserid: many(taskmasterInE360, {
		relationName: "taskmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	staffcostrateInE360s_createdcomuserid: many(staffcostrateInE360, {
		relationName: "staffcostrateInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	staffcostrateInE360s_modifiedcomuserid: many(staffcostrateInE360, {
		relationName: "staffcostrateInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	roleusermappingInE360s: many(roleusermappingInE360),
	sapuserworkassignmentInE360s: many(sapuserworkassignmentInE360),
	slgroupmasterInE360s_createdcomuserid: many(slgroupmasterInE360, {
		relationName: "slgroupmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	slgroupmasterInE360s_groupcontactpersonid: many(slgroupmasterInE360, {
		relationName: "slgroupmasterInE360_groupcontactpersonid_usermasterInE360_comuserid"
	}),
	slgroupmasterInE360s_groupheadid: many(slgroupmasterInE360, {
		relationName: "slgroupmasterInE360_groupheadid_usermasterInE360_comuserid"
	}),
	slgroupmasterInE360s_modifiedcomuserid: many(slgroupmasterInE360, {
		relationName: "slgroupmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	slgroupmasterInE360s_servicelinegroupheadcomuserid: many(slgroupmasterInE360, {
		relationName: "slgroupmasterInE360_servicelinegroupheadcomuserid_usermasterInE360_comuserid"
	}),
	slprojectprofitabilityInE360s: many(slprojectprofitabilityInE360),
	taskgroupmasterInE360s_createdcomuserid: many(taskgroupmasterInE360, {
		relationName: "taskgroupmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	taskgroupmasterInE360s_modifiedcomuserid: many(taskgroupmasterInE360, {
		relationName: "taskgroupmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	tasktypemasterInE360s_createdcomuserid: many(tasktypemasterInE360, {
		relationName: "tasktypemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	tasktypemasterInE360s_modifiedcomuserid: many(tasktypemasterInE360, {
		relationName: "tasktypemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	tenantcontactsInE360s_createdcomuserid: many(tenantcontactsInE360, {
		relationName: "tenantcontactsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	tenantcontactsInE360s_modifiedcomuserid: many(tenantcontactsInE360, {
		relationName: "tenantcontactsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	tenantsubscriptionInE360s_deletedcomuserid: many(tenantsubscriptionInE360, {
		relationName: "tenantsubscriptionInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	tenantsubscriptionInE360s_createdcomuserid: many(tenantsubscriptionInE360, {
		relationName: "tenantsubscriptionInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	timesheetbillinginputInE360s: many(timesheetbillinginputInE360),
	timetemplatemasterInE360s_createdcomuserid: many(timetemplatemasterInE360, {
		relationName: "timetemplatemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	timetemplatemasterInE360s_modifiedcomuserid: many(timetemplatemasterInE360, {
		relationName: "timetemplatemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	timetypemasterInE360s_createdcomuserid: many(timetypemasterInE360, {
		relationName: "timetypemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	timetypemasterInE360s_modifiedcomuserid: many(timetypemasterInE360, {
		relationName: "timetypemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	timetypetemplatemappingInE360s_createdcomuserid: many(timetypetemplatemappingInE360, {
		relationName: "timetypetemplatemappingInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	timetypetemplatemappingInE360s_modifiedcomuserid: many(timetypetemplatemappingInE360, {
		relationName: "timetypetemplatemappingInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	userdocumentsInE360s_comuserid: many(userdocumentsInE360, {
		relationName: "userdocumentsInE360_comuserid_usermasterInE360_comuserid"
	}),
	userdocumentsInE360s_createdcomuserid: many(userdocumentsInE360, {
		relationName: "userdocumentsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	userdocumentsInE360s_deletedcomuserid: many(userdocumentsInE360, {
		relationName: "userdocumentsInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	userdocumentsInE360s_modifiedcomuserid: many(userdocumentsInE360, {
		relationName: "userdocumentsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usereducationInE360s_comuserid: many(usereducationInE360, {
		relationName: "usereducationInE360_comuserid_usermasterInE360_comuserid"
	}),
	usereducationInE360s_createdcomuserid: many(usereducationInE360, {
		relationName: "usereducationInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usereducationInE360s_modifiedcomuserid: many(usereducationInE360, {
		relationName: "usereducationInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	userleavedataInE360s_comuserid: many(userleavedataInE360, {
		relationName: "userleavedataInE360_comuserid_usermasterInE360_comuserid"
	}),
	userleavedataInE360s_createdcomuserid: many(userleavedataInE360, {
		relationName: "userleavedataInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	userleavedataInE360s_modifiedcomuserid: many(userleavedataInE360, {
		relationName: "userleavedataInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	useraddressInE360s_comuseraddressid: many(useraddressInE360, {
		relationName: "useraddressInE360_comuseraddressid_usermasterInE360_comuserid"
	}),
	useraddressInE360s_comuserid: many(useraddressInE360, {
		relationName: "useraddressInE360_comuserid_usermasterInE360_comuserid"
	}),
	useraddressInE360s_createdcomuserid: many(useraddressInE360, {
		relationName: "useraddressInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	useraddressInE360s_modifiedcomuserid: many(useraddressInE360, {
		relationName: "useraddressInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usercertificationInE360s_comuserid: many(usercertificationInE360, {
		relationName: "usercertificationInE360_comuserid_usermasterInE360_comuserid"
	}),
	usercertificationInE360s_createdcomuserid: many(usercertificationInE360, {
		relationName: "usercertificationInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usercertificationInE360s_modifiedcomuserid: many(usercertificationInE360, {
		relationName: "usercertificationInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	userpreferenceInE360s_comuserid: many(userpreferenceInE360, {
		relationName: "userpreferenceInE360_comuserid_usermasterInE360_comuserid"
	}),
	userpreferenceInE360s_createdcomuserid: many(userpreferenceInE360, {
		relationName: "userpreferenceInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	userpreferenceInE360s_modifiedcomuserid: many(userpreferenceInE360, {
		relationName: "userpreferenceInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	userskillInE360s: many(userskillInE360),
	userskilltechnologyInE360s_comuserid: many(userskilltechnologyInE360, {
		relationName: "userskilltechnologyInE360_comuserid_usermasterInE360_comuserid"
	}),
	userskilltechnologyInE360s_createdcomuserid: many(userskilltechnologyInE360, {
		relationName: "userskilltechnologyInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	userskilltechnologyInE360s_modifiedcomuserid: many(userskilltechnologyInE360, {
		relationName: "userskilltechnologyInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	userwiseprojectprofitabilityInE360s: many(userwiseprojectprofitabilityInE360),
	versionmasterdeletehistoryInE360s_createdcomuserid: many(versionmasterdeletehistoryInE360, {
		relationName: "versionmasterdeletehistoryInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	versionmasterdeletehistoryInE360s_modifiedcomuserid: many(versionmasterdeletehistoryInE360, {
		relationName: "versionmasterdeletehistoryInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	versionmasterdeletehistoryInE360s_submittedcomuserid: many(versionmasterdeletehistoryInE360, {
		relationName: "versionmasterdeletehistoryInE360_submittedcomuserid_usermasterInE360_comuserid"
	}),
	userpayrollInE360s_createdcomuserid: many(userpayrollInE360, {
		relationName: "userpayrollInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	userpayrollInE360s_modifiedcomuserid: many(userpayrollInE360, {
		relationName: "userpayrollInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	userpayrollInE360s_userid: many(userpayrollInE360, {
		relationName: "userpayrollInE360_userid_usermasterInE360_comuserid"
	}),
	versionscheduleInE360s_createdcomuserid: many(versionscheduleInE360, {
		relationName: "versionscheduleInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	versionscheduleInE360s_modifiedcomuserid: many(versionscheduleInE360, {
		relationName: "versionscheduleInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	workertypemasterInE360s_createdcomuserid: many(workertypemasterInE360, {
		relationName: "workertypemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	workertypemasterInE360s_modifiedcomuserid: many(workertypemasterInE360, {
		relationName: "workertypemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	versionmasterInE360s_approvedcomuserid: many(versionmasterInE360, {
		relationName: "versionmasterInE360_approvedcomuserid_usermasterInE360_comuserid"
	}),
	versionmasterInE360s_createdcomuserid: many(versionmasterInE360, {
		relationName: "versionmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	versionmasterInE360s_modifiedcomuserid: many(versionmasterInE360, {
		relationName: "versionmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	versionmasterInE360s_submittedcomuserid: many(versionmasterInE360, {
		relationName: "versionmasterInE360_submittedcomuserid_usermasterInE360_comuserid"
	}),
	userprevexperienceInE360s_comuserid: many(userprevexperienceInE360, {
		relationName: "userprevexperienceInE360_comuserid_usermasterInE360_comuserid"
	}),
	userprevexperienceInE360s_createdcomuserid: many(userprevexperienceInE360, {
		relationName: "userprevexperienceInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	userprevexperienceInE360s_modifiedcomuserid: many(userprevexperienceInE360, {
		relationName: "userprevexperienceInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	weeklyholidaymasterInE360s_createdcomuserid: many(weeklyholidaymasterInE360, {
		relationName: "weeklyholidaymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	weeklyholidaymasterInE360s_modifiedcomuserid: many(weeklyholidaymasterInE360, {
		relationName: "weeklyholidaymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	workforcegroupmasterInE360s_createdcomuserid: many(workforcegroupmasterInE360, {
		relationName: "workforcegroupmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	workforcegroupmasterInE360s_modifiedcomuserid: many(workforcegroupmasterInE360, {
		relationName: "workforcegroupmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	workmodemasterInE360s_createdcomuserid: many(workmodemasterInE360, {
		relationName: "workmodemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	workmodemasterInE360s_modifiedcomuserid: many(workmodemasterInE360, {
		relationName: "workmodemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	tenantmasterInE360s_createdcomuserid: many(tenantmasterInE360, {
		relationName: "tenantmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	tenantmasterInE360s_modifiedcomuserid: many(tenantmasterInE360, {
		relationName: "tenantmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	bandmasterInE360: one(bandmasterInE360, {
		fields: [usermasterInE360.band],
		references: [bandmasterInE360.bandmasterid],
		relationName: "usermasterInE360_band_bandmasterInE360_bandmasterid"
	}),
	citymasterInE360: one(citymasterInE360, {
		fields: [usermasterInE360.cityId],
		references: [citymasterInE360.comcityid],
		relationName: "usermasterInE360_cityId_citymasterInE360_comcityid"
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [usermasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid],
		relationName: "usermasterInE360_comtenantid_tenantmasterInE360_comtenantid"
	}),
	usermasterInE360_comuserid: one(usermasterInE360, {
		fields: [usermasterInE360.comuserid],
		references: [usermasterInE360.comuserid],
		relationName: "usermasterInE360_comuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360s_comuserid: many(usermasterInE360, {
		relationName: "usermasterInE360_comuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [usermasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "usermasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360s_createdcomuserid: many(usermasterInE360, {
		relationName: "usermasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datgenderInE360: one(datgenderInE360, {
		fields: [usermasterInE360.datcomgenderid],
		references: [datgenderInE360.datcomgenderid],
		relationName: "usermasterInE360_datcomgenderid_datgenderInE360_datcomgenderid"
	}),
	departmentmasterInE360: one(departmentmasterInE360, {
		fields: [usermasterInE360.departmentid],
		references: [departmentmasterInE360.departmentid],
		relationName: "usermasterInE360_departmentid_departmentmasterInE360_departmentid"
	}),
	designationmasterInE360: one(designationmasterInE360, {
		fields: [usermasterInE360.designationmasterid],
		references: [designationmasterInE360.designationmasterid],
		relationName: "usermasterInE360_designationmasterid_designationmasterInE360_designationmasterid"
	}),
	locationmasterInE360: one(locationmasterInE360, {
		fields: [usermasterInE360.locationId],
		references: [locationmasterInE360.comlocationid],
		relationName: "usermasterInE360_locationId_locationmasterInE360_comlocationid"
	}),
	usermasterInE360_managerId: one(usermasterInE360, {
		fields: [usermasterInE360.managerId],
		references: [usermasterInE360.comuserid],
		relationName: "usermasterInE360_managerId_usermasterInE360_comuserid"
	}),
	usermasterInE360s_managerId: many(usermasterInE360, {
		relationName: "usermasterInE360_managerId_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [usermasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "usermasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360s_modifiedcomuserid: many(usermasterInE360, {
		relationName: "usermasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	nationalitymasterInE360: one(nationalitymasterInE360, {
		fields: [usermasterInE360.nationalityid],
		references: [nationalitymasterInE360.nationalityid],
		relationName: "usermasterInE360_nationalityid_nationalitymasterInE360_nationalityid"
	}),
	companymasterInE360: one(companymasterInE360, {
		fields: [usermasterInE360.payrollcompanyid],
		references: [companymasterInE360.companyid],
		relationName: "usermasterInE360_payrollcompanyid_companymasterInE360_companyid"
	}),
	slmasterInE360: one(slmasterInE360, {
		fields: [usermasterInE360.servicelineid],
		references: [slmasterInE360.servicelineid],
		relationName: "usermasterInE360_servicelineid_slmasterInE360_servicelineid"
	}),
	skillareamasterInE360: one(skillareamasterInE360, {
		fields: [usermasterInE360.skillareamasterid],
		references: [skillareamasterInE360.skillareamasterid]
	}),
	techgroupmasterInE360: one(techgroupmasterInE360, {
		fields: [usermasterInE360.techgroupid],
		references: [techgroupmasterInE360.techgroupid]
	}),
	timetypemasterInE360: one(timetypemasterInE360, {
		fields: [usermasterInE360.timeType],
		references: [timetypemasterInE360.timetypeid],
		relationName: "usermasterInE360_timeType_timetypemasterInE360_timetypeid"
	}),
	workertypemasterInE360: one(workertypemasterInE360, {
		fields: [usermasterInE360.workerType],
		references: [workertypemasterInE360.workertypeid],
		relationName: "usermasterInE360_workerType_workertypemasterInE360_workertypeid"
	}),
	workforcegroupmasterInE360: one(workforcegroupmasterInE360, {
		fields: [usermasterInE360.workforcegroup],
		references: [workforcegroupmasterInE360.wfgid],
		relationName: "usermasterInE360_workforcegroup_workforcegroupmasterInE360_wfgid"
	}),
	citymasterInE360s_createdcomuserid: many(citymasterInE360, {
		relationName: "citymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	citymasterInE360s_modifiedcomuserid: many(citymasterInE360, {
		relationName: "citymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	companycontactsInE360s_createdcomuserid: many(companycontactsInE360, {
		relationName: "companycontactsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	companycontactsInE360s_modifiedcomuserid: many(companycontactsInE360, {
		relationName: "companycontactsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360s_createdcomuserid: many(datcurrencyInE360, {
		relationName: "datcurrencyInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360s_modifiedcomuserid: many(datcurrencyInE360, {
		relationName: "datcurrencyInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	regionmasterInE360s_createdcomuserid: many(regionmasterInE360, {
		relationName: "regionmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	regionmasterInE360s_modifiedcomuserid: many(regionmasterInE360, {
		relationName: "regionmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	industrymasterInE360s_createdcomuserid: many(industrymasterInE360, {
		relationName: "industrymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	industrymasterInE360s_modifiedcomuserid: many(industrymasterInE360, {
		relationName: "industrymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	datlanguageInE360s_createdcomuserid: many(datlanguageInE360, {
		relationName: "datlanguageInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datlanguageInE360s_modifiedcomuserid: many(datlanguageInE360, {
		relationName: "datlanguageInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	datprojectbilltypeInE360s_createdcomuserid: many(datprojectbilltypeInE360, {
		relationName: "datprojectbilltypeInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datprojectbilltypeInE360s_modifiedcomuserid: many(datprojectbilltypeInE360, {
		relationName: "datprojectbilltypeInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	timecategorymasterInE360s_createdcomuserid: many(timecategorymasterInE360, {
		relationName: "timecategorymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	timecategorymasterInE360s_modifiedcomuserid: many(timecategorymasterInE360, {
		relationName: "timecategorymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const authUserUserPermissionsInE360Relations = relations(authUserUserPermissionsInE360, ({one}) => ({
	authPermissionInE360: one(authPermissionInE360, {
		fields: [authUserUserPermissionsInE360.permissionId],
		references: [authPermissionInE360.id]
	}),
	authUserInE360: one(authUserInE360, {
		fields: [authUserUserPermissionsInE360.userId],
		references: [authUserInE360.id]
	}),
}));

export const authPermissionInE360Relations = relations(authPermissionInE360, ({one, many}) => ({
	authUserUserPermissionsInE360s: many(authUserUserPermissionsInE360),
	djangoContentTypeInE360: one(djangoContentTypeInE360, {
		fields: [authPermissionInE360.contentTypeId],
		references: [djangoContentTypeInE360.id]
	}),
	authGroupPermissionsInE360s: many(authGroupPermissionsInE360),
}));

export const authUserInE360Relations = relations(authUserInE360, ({many}) => ({
	authUserUserPermissionsInE360s: many(authUserUserPermissionsInE360),
	authUserGroupsInE360s: many(authUserGroupsInE360),
	djangoAdminLogInE360s: many(djangoAdminLogInE360),
}));

export const authUserGroupsInE360Relations = relations(authUserGroupsInE360, ({one}) => ({
	authGroupInE360: one(authGroupInE360, {
		fields: [authUserGroupsInE360.groupId],
		references: [authGroupInE360.id]
	}),
	authUserInE360: one(authUserInE360, {
		fields: [authUserGroupsInE360.userId],
		references: [authUserInE360.id]
	}),
}));

export const authGroupInE360Relations = relations(authGroupInE360, ({many}) => ({
	authUserGroupsInE360s: many(authUserGroupsInE360),
	authGroupPermissionsInE360s: many(authGroupPermissionsInE360),
}));

export const addresstypemasterInE360Relations = relations(addresstypemasterInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [addresstypemasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [addresstypemasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "addresstypemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [addresstypemasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "addresstypemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	useraddressInE360s: many(useraddressInE360),
}));

export const announcementsInE360Relations = relations(announcementsInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [announcementsInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [announcementsInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "announcementsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [announcementsInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "announcementsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const bugroupmasterInE360Relations = relations(bugroupmasterInE360, ({one, many}) => ({
	usermasterInE360_businessunitgroupheadcomuserid: one(usermasterInE360, {
		fields: [bugroupmasterInE360.businessunitgroupheadcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "bugroupmasterInE360_businessunitgroupheadcomuserid_usermasterInE360_comuserid"
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [bugroupmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [bugroupmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "bugroupmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_groupcontactpersonid: one(usermasterInE360, {
		fields: [bugroupmasterInE360.groupcontactpersonid],
		references: [usermasterInE360.comuserid],
		relationName: "bugroupmasterInE360_groupcontactpersonid_usermasterInE360_comuserid"
	}),
	usermasterInE360_groupheadid: one(usermasterInE360, {
		fields: [bugroupmasterInE360.groupheadid],
		references: [usermasterInE360.comuserid],
		relationName: "bugroupmasterInE360_groupheadid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [bugroupmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "bugroupmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	bumasterInE360s: many(bumasterInE360),
}));

export const bumasterInE360Relations = relations(bumasterInE360, ({one, many}) => ({
	usermasterInE360_businessunitcontactpersonid: one(usermasterInE360, {
		fields: [bumasterInE360.businessunitcontactpersonid],
		references: [usermasterInE360.comuserid],
		relationName: "bumasterInE360_businessunitcontactpersonid_usermasterInE360_comuserid"
	}),
	bugroupmasterInE360: one(bugroupmasterInE360, {
		fields: [bumasterInE360.businessunitgroupid],
		references: [bugroupmasterInE360.businessunitgroupid]
	}),
	usermasterInE360_businessunitheadid: one(usermasterInE360, {
		fields: [bumasterInE360.businessunitheadid],
		references: [usermasterInE360.comuserid],
		relationName: "bumasterInE360_businessunitheadid_usermasterInE360_comuserid"
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [bumasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [bumasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "bumasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [bumasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "bumasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customermasterInE360s: many(customermasterInE360),
	demandmasterInE360s: many(demandmasterInE360),
	projectmasterInE360s: many(projectmasterInE360),
	projectmasterversionInE360s: many(projectmasterversionInE360),
}));

export const companyholidaysInE360Relations = relations(companyholidaysInE360, ({one}) => ({
	companymasterInE360: one(companymasterInE360, {
		fields: [companyholidaysInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [companyholidaysInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [companyholidaysInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "companyholidaysInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [companyholidaysInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "companyholidaysInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const companymasterInE360Relations = relations(companymasterInE360, ({one, many}) => ({
	companyholidaysInE360s: many(companyholidaysInE360),
	companyweekdaysInE360s: many(companyweekdaysInE360),
	citymasterInE360: one(citymasterInE360, {
		fields: [companymasterInE360.comcityid],
		references: [citymasterInE360.comcityid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [companymasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [companymasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "companymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [companymasterInE360.defaultcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	usermasterInE360_deletedcomuserid: one(usermasterInE360, {
		fields: [companymasterInE360.deletedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "companymasterInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [companymasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "companymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customermasterInE360s: many(customermasterInE360),
	demandmasterInE360s: many(demandmasterInE360),
	holidaymasterInE360s: many(holidaymasterInE360),
	orgcostrateInE360s: many(orgcostrateInE360),
	projectexpenseInE360s: many(projectexpenseInE360),
	projectmasterInE360s: many(projectmasterInE360),
	projectmasterversionInE360s: many(projectmasterversionInE360),
	sapuserworkassignmentInE360s: many(sapuserworkassignmentInE360),
	timetemplatemasterInE360s: many(timetemplatemasterInE360),
	timetypetemplatemappingInE360s: many(timetypetemplatemappingInE360),
	weeklyholidaymasterInE360s: many(weeklyholidaymasterInE360),
	usermasterInE360s: many(usermasterInE360, {
		relationName: "usermasterInE360_payrollcompanyid_companymasterInE360_companyid"
	}),
	companycontactsInE360s: many(companycontactsInE360),
	timecategorymasterInE360s: many(timecategorymasterInE360),
}));

export const companyweekdaysInE360Relations = relations(companyweekdaysInE360, ({one}) => ({
	companymasterInE360: one(companymasterInE360, {
		fields: [companyweekdaysInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [companyweekdaysInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [companyweekdaysInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "companyweekdaysInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [companyweekdaysInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "companyweekdaysInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const citymasterInE360Relations = relations(citymasterInE360, ({one, many}) => ({
	companymasterInE360s: many(companymasterInE360),
	customermasterInE360s: many(customermasterInE360),
	demandmasterInE360s: many(demandmasterInE360),
	locationmasterInE360s: many(locationmasterInE360),
	staffcostrateInE360s: many(staffcostrateInE360),
	useraddressInE360s: many(useraddressInE360),
	tenantmasterInE360s: many(tenantmasterInE360, {
		relationName: "tenantmasterInE360_comcityid_citymasterInE360_comcityid"
	}),
	usermasterInE360s: many(usermasterInE360, {
		relationName: "usermasterInE360_cityId_citymasterInE360_comcityid"
	}),
	statemasterInE360: one(statemasterInE360, {
		fields: [citymasterInE360.comstateid],
		references: [statemasterInE360.comstateid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [citymasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid],
		relationName: "citymasterInE360_comtenantid_tenantmasterInE360_comtenantid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [citymasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "citymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [citymasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "citymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const datcurrencyInE360Relations = relations(datcurrencyInE360, ({one, many}) => ({
	companymasterInE360s: many(companymasterInE360),
	customermasterInE360s: many(customermasterInE360),
	customerratesInE360s: many(customerratesInE360),
	datexchangerateInE360s_currencyfrom: many(datexchangerateInE360, {
		relationName: "datexchangerateInE360_currencyfrom_datcurrencyInE360_datcomcurrencyid"
	}),
	datexchangerateInE360s_currencyto: many(datexchangerateInE360, {
		relationName: "datexchangerateInE360_currencyto_datcurrencyInE360_datcomcurrencyid"
	}),
	demandmasterInE360s: many(demandmasterInE360),
	opportunityInE360s: many(opportunityInE360),
	orgcostrateInE360s: many(orgcostrateInE360),
	projectbudgetdetailsInE360s: many(projectbudgetdetailsInE360),
	projectbudgetversionInE360s: many(projectbudgetversionInE360),
	projectbudgetInE360s: many(projectbudgetInE360),
	projectestimationdetailsInE360s: many(projectestimationdetailsInE360),
	projectexpenseInE360s: many(projectexpenseInE360),
	projectprofitabilityInE360s: many(projectprofitabilityInE360),
	projectmilestonesInE360s: many(projectmilestonesInE360),
	projectplanversionInE360s: many(projectplanversionInE360),
	projectestimationInE360s: many(projectestimationInE360),
	projectmasterInE360s: many(projectmasterInE360),
	projectmasterversionInE360s: many(projectmasterversionInE360),
	projectroleInE360s: many(projectroleInE360),
	projectrevenueInE360s: many(projectrevenueInE360),
	projectroleversionInE360s: many(projectroleversionInE360),
	staffcostrateInE360s: many(staffcostrateInE360),
	slprojectprofitabilityInE360s: many(slprojectprofitabilityInE360),
	userwiseprojectprofitabilityInE360s: many(userwiseprojectprofitabilityInE360),
	userpayrollInE360s: many(userpayrollInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [datcurrencyInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [datcurrencyInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datcurrencyInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [datcurrencyInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datcurrencyInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const comuserprojectmappingInE360Relations = relations(comuserprojectmappingInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [comuserprojectmappingInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
}));

export const customerdocumentsInE360Relations = relations(customerdocumentsInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [customerdocumentsInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [customerdocumentsInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customerdocumentsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customermasterInE360: one(customermasterInE360, {
		fields: [customerdocumentsInE360.customerid],
		references: [customermasterInE360.customerid]
	}),
	usermasterInE360_deletedcomuserid: one(usermasterInE360, {
		fields: [customerdocumentsInE360.deletedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customerdocumentsInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	documenttypemasterInE360: one(documenttypemasterInE360, {
		fields: [customerdocumentsInE360.documenttype],
		references: [documenttypemasterInE360.documenttypeid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [customerdocumentsInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customerdocumentsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const customermasterInE360Relations = relations(customermasterInE360, ({one, many}) => ({
	customerdocumentsInE360s: many(customerdocumentsInE360),
	customercontactsInE360s: many(customercontactsInE360),
	customerholidaysInE360s: many(customerholidaysInE360),
	usermasterInE360_accountmanagerid: one(usermasterInE360, {
		fields: [customermasterInE360.accountmanagerid],
		references: [usermasterInE360.comuserid],
		relationName: "customermasterInE360_accountmanagerid_usermasterInE360_comuserid"
	}),
	bumasterInE360: one(bumasterInE360, {
		fields: [customermasterInE360.businessunitid],
		references: [bumasterInE360.businessunitid]
	}),
	citymasterInE360: one(citymasterInE360, {
		fields: [customermasterInE360.comcityid],
		references: [citymasterInE360.comcityid]
	}),
	companymasterInE360: one(companymasterInE360, {
		fields: [customermasterInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	regionmasterInE360: one(regionmasterInE360, {
		fields: [customermasterInE360.comregionid],
		references: [regionmasterInE360.comregionid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [customermasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [customermasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customermasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customergroupmasterInE360: one(customergroupmasterInE360, {
		fields: [customermasterInE360.customergroupid],
		references: [customergroupmasterInE360.customergroupid]
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [customermasterInE360.defaultcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	industrymasterInE360: one(industrymasterInE360, {
		fields: [customermasterInE360.industryid],
		references: [industrymasterInE360.industryid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [customermasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customermasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customerrolesInE360s: many(customerrolesInE360),
	customerweekdaysInE360s: many(customerweekdaysInE360),
	opportunityInE360s: many(opportunityInE360),
	projectmasterInE360s: many(projectmasterInE360),
	projectmasterversionInE360s: many(projectmasterversionInE360),
}));

export const documenttypemasterInE360Relations = relations(documenttypemasterInE360, ({one, many}) => ({
	customerdocumentsInE360s: many(customerdocumentsInE360),
	customergroupdocumentsInE360s: many(customergroupdocumentsInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [documenttypemasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [documenttypemasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "documenttypemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [documenttypemasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "documenttypemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectdocumentsInE360s: many(projectdocumentsInE360),
	userdocumentsInE360s: many(userdocumentsInE360),
}));

export const costcentermasterInE360Relations = relations(costcentermasterInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [costcentermasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [costcentermasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "costcentermasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [costcentermasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "costcentermasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	departmentmasterInE360s: many(departmentmasterInE360),
}));

export const countrymasterInE360Relations = relations(countrymasterInE360, ({one, many}) => ({
	regionmasterInE360: one(regionmasterInE360, {
		fields: [countrymasterInE360.comregionid],
		references: [regionmasterInE360.comregionid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [countrymasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [countrymasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "countrymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [countrymasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "countrymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customerratesInE360s: many(customerratesInE360),
	orgcostrateInE360s: many(orgcostrateInE360),
	projectroleInE360s: many(projectroleInE360),
	projectroleversionInE360s: many(projectroleversionInE360),
	statemasterInE360s: many(statemasterInE360),
	timetypetemplatemappingInE360s: many(timetypetemplatemappingInE360),
	useraddressInE360s: many(useraddressInE360),
}));

export const regionmasterInE360Relations = relations(regionmasterInE360, ({one, many}) => ({
	countrymasterInE360s: many(countrymasterInE360),
	customermasterInE360s: many(customermasterInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [regionmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [regionmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "regionmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [regionmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "regionmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const customercontactsInE360Relations = relations(customercontactsInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [customercontactsInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [customercontactsInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customercontactsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customermasterInE360: one(customermasterInE360, {
		fields: [customercontactsInE360.customerid],
		references: [customermasterInE360.customerid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [customercontactsInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customercontactsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const customerholidaysInE360Relations = relations(customerholidaysInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [customerholidaysInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [customerholidaysInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customerholidaysInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customermasterInE360: one(customermasterInE360, {
		fields: [customerholidaysInE360.customerid],
		references: [customermasterInE360.customerid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [customerholidaysInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customerholidaysInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const customergroupcontactsInE360Relations = relations(customergroupcontactsInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [customergroupcontactsInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [customergroupcontactsInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customergroupcontactsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customergroupmasterInE360: one(customergroupmasterInE360, {
		fields: [customergroupcontactsInE360.customergroupid],
		references: [customergroupmasterInE360.customergroupid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [customergroupcontactsInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customergroupcontactsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const customergroupmasterInE360Relations = relations(customergroupmasterInE360, ({one, many}) => ({
	customergroupcontactsInE360s: many(customergroupcontactsInE360),
	customermasterInE360s: many(customermasterInE360),
	usermasterInE360_accountmanagerid: one(usermasterInE360, {
		fields: [customergroupmasterInE360.accountmanagerid],
		references: [usermasterInE360.comuserid],
		relationName: "customergroupmasterInE360_accountmanagerid_usermasterInE360_comuserid"
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [customergroupmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_contactpersonid: one(usermasterInE360, {
		fields: [customergroupmasterInE360.contactpersonid],
		references: [usermasterInE360.comuserid],
		relationName: "customergroupmasterInE360_contactpersonid_usermasterInE360_comuserid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [customergroupmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customergroupmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [customergroupmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customergroupmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	customergroupdocumentsInE360s: many(customergroupdocumentsInE360),
}));

export const dateducationInE360Relations = relations(dateducationInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [dateducationInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [dateducationInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "dateducationInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [dateducationInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "dateducationInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	datcourseInE360s: many(datcourseInE360),
	usereducationInE360s: many(usereducationInE360),
}));

export const industrymasterInE360Relations = relations(industrymasterInE360, ({one, many}) => ({
	customermasterInE360s: many(customermasterInE360),
	demandskillsInE360s: many(demandskillsInE360),
	userskilltechnologyInE360s: many(userskilltechnologyInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [industrymasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [industrymasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "industrymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [industrymasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "industrymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const customergroupdocumentsInE360Relations = relations(customergroupdocumentsInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [customergroupdocumentsInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [customergroupdocumentsInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customergroupdocumentsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customergroupmasterInE360: one(customergroupmasterInE360, {
		fields: [customergroupdocumentsInE360.customergroupid],
		references: [customergroupmasterInE360.customergroupid]
	}),
	usermasterInE360_deletedcomuserid: one(usermasterInE360, {
		fields: [customergroupdocumentsInE360.deletedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customergroupdocumentsInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	documenttypemasterInE360: one(documenttypemasterInE360, {
		fields: [customergroupdocumentsInE360.documenttype],
		references: [documenttypemasterInE360.documenttypeid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [customergroupdocumentsInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customergroupdocumentsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const customerratesInE360Relations = relations(customerratesInE360, ({one, many}) => ({
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [customerratesInE360.comcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	countrymasterInE360: one(countrymasterInE360, {
		fields: [customerratesInE360.countryid],
		references: [countrymasterInE360.comcountryid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [customerratesInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customerratesInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customerrolesInE360: one(customerrolesInE360, {
		fields: [customerratesInE360.croleid],
		references: [customerrolesInE360.custroleid]
	}),
	levelmasterInE360: one(levelmasterInE360, {
		fields: [customerratesInE360.levelid],
		references: [levelmasterInE360.levelmasterid]
	}),
	locationmasterInE360: one(locationmasterInE360, {
		fields: [customerratesInE360.locationid],
		references: [locationmasterInE360.comlocationid]
	}),
	bandmasterInE360_maxBandid: one(bandmasterInE360, {
		fields: [customerratesInE360.maxBandid],
		references: [bandmasterInE360.bandmasterid],
		relationName: "customerratesInE360_maxBandid_bandmasterInE360_bandmasterid"
	}),
	bandmasterInE360_minBandid: one(bandmasterInE360, {
		fields: [customerratesInE360.minBandid],
		references: [bandmasterInE360.bandmasterid],
		relationName: "customerratesInE360_minBandid_bandmasterInE360_bandmasterid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [customerratesInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customerratesInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	skillareamasterInE360: one(skillareamasterInE360, {
		fields: [customerratesInE360.skillareamasterid],
		references: [skillareamasterInE360.skillareamasterid]
	}),
	techgroupmasterInE360: one(techgroupmasterInE360, {
		fields: [customerratesInE360.techgroupid],
		references: [techgroupmasterInE360.techgroupid]
	}),
	projectroleInE360s: many(projectroleInE360),
	projectroleversionInE360s: many(projectroleversionInE360),
	versionscheduleInE360s: many(versionscheduleInE360),
}));

export const customerrolesInE360Relations = relations(customerrolesInE360, ({one, many}) => ({
	customerratesInE360s: many(customerratesInE360),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [customerrolesInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customerrolesInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customermasterInE360: one(customermasterInE360, {
		fields: [customerrolesInE360.customerid],
		references: [customermasterInE360.customerid]
	}),
	deliveryrolemasterInE360: one(deliveryrolemasterInE360, {
		fields: [customerrolesInE360.deliveryroleid],
		references: [deliveryrolemasterInE360.deliveryroleid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [customerrolesInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customerrolesInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const levelmasterInE360Relations = relations(levelmasterInE360, ({one, many}) => ({
	customerratesInE360s: many(customerratesInE360),
	designationskillmapInE360s: many(designationskillmapInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [levelmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [levelmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "levelmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [levelmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "levelmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectroleInE360s: many(projectroleInE360),
	projectroleversionInE360s: many(projectroleversionInE360),
	userskilltechnologyInE360s: many(userskilltechnologyInE360),
}));

export const locationmasterInE360Relations = relations(locationmasterInE360, ({one, many}) => ({
	customerratesInE360s: many(customerratesInE360),
	demandmasterInE360s: many(demandmasterInE360),
	holidaymasterInE360s: many(holidaymasterInE360),
	citymasterInE360: one(citymasterInE360, {
		fields: [locationmasterInE360.comcityid],
		references: [citymasterInE360.comcityid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [locationmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [locationmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "locationmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [locationmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "locationmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360s: many(projectmasterInE360),
	projectmasterversionInE360s: many(projectmasterversionInE360),
	userpreferenceInE360s_preferredlocation1Id: many(userpreferenceInE360, {
		relationName: "userpreferenceInE360_preferredlocation1Id_locationmasterInE360_comlocationid"
	}),
	userpreferenceInE360s_preferredlocation2Id: many(userpreferenceInE360, {
		relationName: "userpreferenceInE360_preferredlocation2Id_locationmasterInE360_comlocationid"
	}),
	userpreferenceInE360s_preferredlocation3Id: many(userpreferenceInE360, {
		relationName: "userpreferenceInE360_preferredlocation3Id_locationmasterInE360_comlocationid"
	}),
	weeklyholidaymasterInE360s: many(weeklyholidaymasterInE360),
	usermasterInE360s: many(usermasterInE360, {
		relationName: "usermasterInE360_locationId_locationmasterInE360_comlocationid"
	}),
}));

export const skillareamasterInE360Relations = relations(skillareamasterInE360, ({many}) => ({
	customerratesInE360s: many(customerratesInE360),
	orgcostrateInE360s: many(orgcostrateInE360),
	projectroleInE360s: many(projectroleInE360),
	projectroleversionInE360s: many(projectroleversionInE360),
	skillmasterInE360s: many(skillmasterInE360),
	usermasterInE360s: many(usermasterInE360),
}));

export const techgroupmasterInE360Relations = relations(techgroupmasterInE360, ({many}) => ({
	customerratesInE360s: many(customerratesInE360),
	orgcostrateInE360s: many(orgcostrateInE360),
	projectmasterInE360s: many(projectmasterInE360),
	projectmasterversionInE360s: many(projectmasterversionInE360),
	projectroleInE360s: many(projectroleInE360),
	projectroleversionInE360s: many(projectroleversionInE360),
	technologymasterInE360s: many(technologymasterInE360),
	usermasterInE360s: many(usermasterInE360),
}));

export const deliveryrolemasterInE360Relations = relations(deliveryrolemasterInE360, ({one, many}) => ({
	customerrolesInE360s: many(customerrolesInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [deliveryrolemasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
}));

export const customersubscriptionInE360Relations = relations(customersubscriptionInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [customersubscriptionInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [customersubscriptionInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customersubscriptionInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_deletedcomuserid: one(usermasterInE360, {
		fields: [customersubscriptionInE360.deletedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customersubscriptionInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const customerweekdaysInE360Relations = relations(customerweekdaysInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [customerweekdaysInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [customerweekdaysInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customerweekdaysInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customermasterInE360: one(customermasterInE360, {
		fields: [customerweekdaysInE360.customerid],
		references: [customermasterInE360.customerid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [customerweekdaysInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "customerweekdaysInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const datcourseInE360Relations = relations(datcourseInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [datcourseInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [datcourseInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datcourseInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	dateducationInE360: one(dateducationInE360, {
		fields: [datcourseInE360.dateducationmasterid],
		references: [dateducationInE360.dateducationmasterid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [datcourseInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datcourseInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	datspecialisationInE360s: many(datspecialisationInE360),
	usereducationInE360s: many(usereducationInE360),
}));

export const datexchangerateInE360Relations = relations(datexchangerateInE360, ({one}) => ({
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [datexchangerateInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datexchangerateInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360_currencyfrom: one(datcurrencyInE360, {
		fields: [datexchangerateInE360.currencyfrom],
		references: [datcurrencyInE360.datcomcurrencyid],
		relationName: "datexchangerateInE360_currencyfrom_datcurrencyInE360_datcomcurrencyid"
	}),
	datcurrencyInE360_currencyto: one(datcurrencyInE360, {
		fields: [datexchangerateInE360.currencyto],
		references: [datcurrencyInE360.datcomcurrencyid],
		relationName: "datexchangerateInE360_currencyto_datcurrencyInE360_datcomcurrencyid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [datexchangerateInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datexchangerateInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const datgenderInE360Relations = relations(datgenderInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [datgenderInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [datgenderInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datgenderInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [datgenderInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datgenderInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360s: many(usermasterInE360, {
		relationName: "usermasterInE360_datcomgenderid_datgenderInE360_datcomgenderid"
	}),
}));

export const datmoduleInE360Relations = relations(datmoduleInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [datmoduleInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	datmodulealiasInE360: one(datmodulealiasInE360, {
		fields: [datmoduleInE360.datmodulealiasid],
		references: [datmodulealiasInE360.datmodulealiasid]
	}),
	datmenusInE360s: many(datmenusInE360),
}));

export const datmodulealiasInE360Relations = relations(datmodulealiasInE360, ({one, many}) => ({
	datmoduleInE360s: many(datmoduleInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [datmodulealiasInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
}));

export const datmenupermissionInE360Relations = relations(datmenupermissionInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [datmenupermissionInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	datmenusInE360: one(datmenusInE360, {
		fields: [datmenupermissionInE360.datmenuid],
		references: [datmenusInE360.datmenuid]
	}),
}));

export const datmenusInE360Relations = relations(datmenusInE360, ({one, many}) => ({
	datmenupermissionInE360s: many(datmenupermissionInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [datmenusInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	datmoduleInE360: one(datmoduleInE360, {
		fields: [datmenusInE360.datmoduleid],
		references: [datmoduleInE360.datmoduleid]
	}),
	datreportmasterInE360s: many(datreportmasterInE360),
}));

export const datspecialisationInE360Relations = relations(datspecialisationInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [datspecialisationInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [datspecialisationInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datspecialisationInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcourseInE360: one(datcourseInE360, {
		fields: [datspecialisationInE360.datcoursemasterid],
		references: [datcourseInE360.datcoursemasterid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [datspecialisationInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datspecialisationInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usereducationInE360s: many(usereducationInE360),
}));

export const datsubscriptionpackageInE360Relations = relations(datsubscriptionpackageInE360, ({one, many}) => ({
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [datsubscriptionpackageInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datsubscriptionpackageInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_deletedcomuserid: one(usermasterInE360, {
		fields: [datsubscriptionpackageInE360.deletedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datsubscriptionpackageInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [datsubscriptionpackageInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datsubscriptionpackageInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	datsubscriptionpackagemoduleInE360s: many(datsubscriptionpackagemoduleInE360),
	tenantsubscriptionInE360s: many(tenantsubscriptionInE360),
}));

export const demandmatchInE360Relations = relations(demandmatchInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [demandmatchInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [demandmatchInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "demandmatchInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	demandmasterInE360: one(demandmasterInE360, {
		fields: [demandmatchInE360.demandid],
		references: [demandmasterInE360.demandid]
	}),
	datstatusmasterInE360: one(datstatusmasterInE360, {
		fields: [demandmatchInE360.matchstatus],
		references: [datstatusmasterInE360.statusid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [demandmatchInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "demandmatchInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_userid: one(usermasterInE360, {
		fields: [demandmatchInE360.userid],
		references: [usermasterInE360.comuserid],
		relationName: "demandmatchInE360_userid_usermasterInE360_comuserid"
	}),
	demandmatchdetailsInE360s: many(demandmatchdetailsInE360),
}));

export const demandmasterInE360Relations = relations(demandmasterInE360, ({one, many}) => ({
	demandmatchInE360s: many(demandmatchInE360),
	demandroledetailInE360s: many(demandroledetailInE360),
	usermasterInE360_assignedto: one(usermasterInE360, {
		fields: [demandmasterInE360.assignedto],
		references: [usermasterInE360.comuserid],
		relationName: "demandmasterInE360_assignedto_usermasterInE360_comuserid"
	}),
	bumasterInE360: one(bumasterInE360, {
		fields: [demandmasterInE360.businessunitid],
		references: [bumasterInE360.businessunitid]
	}),
	citymasterInE360: one(citymasterInE360, {
		fields: [demandmasterInE360.cityid],
		references: [citymasterInE360.comcityid]
	}),
	companymasterInE360: one(companymasterInE360, {
		fields: [demandmasterInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [demandmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [demandmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "demandmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [demandmasterInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	datstatusmasterInE360: one(datstatusmasterInE360, {
		fields: [demandmasterInE360.demandstatusid],
		references: [datstatusmasterInE360.statusid]
	}),
	departmentmasterInE360: one(departmentmasterInE360, {
		fields: [demandmasterInE360.departmentid],
		references: [departmentmasterInE360.departmentid]
	}),
	locationmasterInE360: one(locationmasterInE360, {
		fields: [demandmasterInE360.locationid],
		references: [locationmasterInE360.comlocationid]
	}),
	opportunityInE360: one(opportunityInE360, {
		fields: [demandmasterInE360.opportunityid],
		references: [opportunityInE360.opportunityid]
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [demandmasterInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
	slmasterInE360: one(slmasterInE360, {
		fields: [demandmasterInE360.servicelineid],
		references: [slmasterInE360.servicelineid]
	}),
	workertypemasterInE360: one(workertypemasterInE360, {
		fields: [demandmasterInE360.workertypeid],
		references: [workertypemasterInE360.workertypeid]
	}),
	workforcegroupmasterInE360: one(workforcegroupmasterInE360, {
		fields: [demandmasterInE360.workforcegroupid],
		references: [workforcegroupmasterInE360.wfgid]
	}),
	workmodemasterInE360: one(workmodemasterInE360, {
		fields: [demandmasterInE360.workmodeid],
		references: [workmodemasterInE360.workmodeid]
	}),
	demandskillsInE360s: many(demandskillsInE360),
	projectstaffInE360s: many(projectstaffInE360),
}));

export const datstatusmasterInE360Relations = relations(datstatusmasterInE360, ({many}) => ({
	demandmatchInE360s: many(demandmatchInE360),
	demandmasterInE360s: many(demandmasterInE360),
	demandmatchconfigincludestatusInE360s: many(demandmatchconfigincludestatusInE360),
	timesheetbillinginputInE360s: many(timesheetbillinginputInE360),
	userleavedataInE360s: many(userleavedataInE360),
}));

export const demandroledetailInE360Relations = relations(demandroledetailInE360, ({one, many}) => ({
	usermasterInE360: one(usermasterInE360, {
		fields: [demandroledetailInE360.createdcomuserid],
		references: [usermasterInE360.comuserid]
	}),
	demandmasterInE360: one(demandmasterInE360, {
		fields: [demandroledetailInE360.demandid],
		references: [demandmasterInE360.demandid]
	}),
	bandmasterInE360_maxBandid: one(bandmasterInE360, {
		fields: [demandroledetailInE360.maxBandid],
		references: [bandmasterInE360.bandmasterid],
		relationName: "demandroledetailInE360_maxBandid_bandmasterInE360_bandmasterid"
	}),
	bandmasterInE360_minBandid: one(bandmasterInE360, {
		fields: [demandroledetailInE360.minBandid],
		references: [bandmasterInE360.bandmasterid],
		relationName: "demandroledetailInE360_minBandid_bandmasterInE360_bandmasterid"
	}),
	demandroleresponsibilitiesInE360s: many(demandroleresponsibilitiesInE360),
}));

export const demandmatchconfigurationInE360Relations = relations(demandmatchconfigurationInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [demandmatchconfigurationInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [demandmatchconfigurationInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "demandmatchconfigurationInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [demandmatchconfigurationInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "demandmatchconfigurationInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	demandmatchconfigincludestatusInE360s: many(demandmatchconfigincludestatusInE360),
	demandmatchconfigincludeusertypeInE360s: many(demandmatchconfigincludeusertypeInE360),
}));

export const datsubscriptionpackagemoduleInE360Relations = relations(datsubscriptionpackagemoduleInE360, ({one}) => ({
	datsubscriptionpackageInE360: one(datsubscriptionpackageInE360, {
		fields: [datsubscriptionpackagemoduleInE360.datsubscriptionpackageid],
		references: [datsubscriptionpackageInE360.datsubscriptionpackageid]
	}),
}));

export const datusertypeInE360Relations = relations(datusertypeInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [datusertypeInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [datusertypeInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datusertypeInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [datusertypeInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datusertypeInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	demandmatchconfigincludeusertypeInE360s: many(demandmatchconfigincludeusertypeInE360),
}));

export const deliverymodemasterInE360Relations = relations(deliverymodemasterInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [deliverymodemasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [deliverymodemasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "deliverymodemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [deliverymodemasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "deliverymodemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360s: many(projectmasterInE360),
	projectmasterversionInE360s: many(projectmasterversionInE360),
}));

export const departmentmasterInE360Relations = relations(departmentmasterInE360, ({one, many}) => ({
	demandmasterInE360s: many(demandmasterInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [departmentmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	costcentermasterInE360: one(costcentermasterInE360, {
		fields: [departmentmasterInE360.costcenterId],
		references: [costcentermasterInE360.costcenterid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [departmentmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "departmentmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [departmentmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "departmentmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360s: many(projectmasterInE360),
	projectmasterversionInE360s: many(projectmasterversionInE360),
	usermasterInE360s: many(usermasterInE360, {
		relationName: "usermasterInE360_departmentid_departmentmasterInE360_departmentid"
	}),
}));

export const opportunityInE360Relations = relations(opportunityInE360, ({one, many}) => ({
	demandmasterInE360s: many(demandmasterInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [opportunityInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [opportunityInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "opportunityInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customermasterInE360: one(customermasterInE360, {
		fields: [opportunityInE360.customerid],
		references: [customermasterInE360.customerid]
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [opportunityInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [opportunityInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "opportunityInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_salesmanagerid: one(usermasterInE360, {
		fields: [opportunityInE360.salesmanagerid],
		references: [usermasterInE360.comuserid],
		relationName: "opportunityInE360_salesmanagerid_usermasterInE360_comuserid"
	}),
	projectmasterInE360s: many(projectmasterInE360),
	projectmasterversionInE360s: many(projectmasterversionInE360),
}));

export const projectmasterInE360Relations = relations(projectmasterInE360, ({one, many}) => ({
	demandmasterInE360s: many(demandmasterInE360),
	projectactivityversionInE360s: many(projectactivityversionInE360),
	projectattributesInE360s_linkedproject: many(projectattributesInE360, {
		relationName: "projectattributesInE360_linkedproject_projectmasterInE360_projectid"
	}),
	projectattributesInE360s_projectid: many(projectattributesInE360, {
		relationName: "projectattributesInE360_projectid_projectmasterInE360_projectid"
	}),
	projectbudgetdetailsInE360s: many(projectbudgetdetailsInE360),
	projectbudgetversionInE360s: many(projectbudgetversionInE360),
	projectcustomercontactsInE360s: many(projectcustomercontactsInE360),
	projectdocumentsInE360s: many(projectdocumentsInE360),
	projecteffortInE360s: many(projecteffortInE360),
	projectactivityInE360s: many(projectactivityInE360),
	projectbudgetInE360s: many(projectbudgetInE360),
	projectexpenseInE360s: many(projectexpenseInE360),
	projectholidaysInE360s: many(projectholidaysInE360),
	projectprofitabilityInE360s: many(projectprofitabilityInE360),
	projectmilestonesInE360s: many(projectmilestonesInE360),
	projectplanversionInE360s: many(projectplanversionInE360),
	projectproductmappingInE360s: many(projectproductmappingInE360),
	projectestimationInE360s: many(projectestimationInE360),
	bumasterInE360: one(bumasterInE360, {
		fields: [projectmasterInE360.businessunitid],
		references: [bumasterInE360.businessunitid]
	}),
	companymasterInE360: one(companymasterInE360, {
		fields: [projectmasterInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [projectmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customermasterInE360: one(customermasterInE360, {
		fields: [projectmasterInE360.customerid],
		references: [customermasterInE360.customerid]
	}),
	datprojectbilltypeInE360: one(datprojectbilltypeInE360, {
		fields: [projectmasterInE360.datprojectbillingtypeid],
		references: [datprojectbilltypeInE360.datprojectbillingtypeid]
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [projectmasterInE360.defaultcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	usermasterInE360_deliverymanagerid: one(usermasterInE360, {
		fields: [projectmasterInE360.deliverymanagerid],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterInE360_deliverymanagerid_usermasterInE360_comuserid"
	}),
	deliverymodemasterInE360: one(deliverymodemasterInE360, {
		fields: [projectmasterInE360.deliverymodemasterid],
		references: [deliverymodemasterInE360.deliverymodemasterid]
	}),
	departmentmasterInE360: one(departmentmasterInE360, {
		fields: [projectmasterInE360.departmentid],
		references: [departmentmasterInE360.departmentid]
	}),
	locationmasterInE360: one(locationmasterInE360, {
		fields: [projectmasterInE360.locationid],
		references: [locationmasterInE360.comlocationid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	opportunityInE360: one(opportunityInE360, {
		fields: [projectmasterInE360.opportunityid],
		references: [opportunityInE360.opportunityid]
	}),
	usermasterInE360_pmo1: one(usermasterInE360, {
		fields: [projectmasterInE360.pmo1],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterInE360_pmo1_usermasterInE360_comuserid"
	}),
	usermasterInE360_pmo2: one(usermasterInE360, {
		fields: [projectmasterInE360.pmo2],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterInE360_pmo2_usermasterInE360_comuserid"
	}),
	usermasterInE360_pmo3: one(usermasterInE360, {
		fields: [projectmasterInE360.pmo3],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterInE360_pmo3_usermasterInE360_comuserid"
	}),
	usermasterInE360_pmocontactpersonid: one(usermasterInE360, {
		fields: [projectmasterInE360.pmocontactpersonid],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterInE360_pmocontactpersonid_usermasterInE360_comuserid"
	}),
	usermasterInE360_projectmanagerid: one(usermasterInE360, {
		fields: [projectmasterInE360.projectmanagerid],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterInE360_projectmanagerid_usermasterInE360_comuserid"
	}),
	projecttypemasterInE360: one(projecttypemasterInE360, {
		fields: [projectmasterInE360.projecttypeid],
		references: [projecttypemasterInE360.projecttypeid]
	}),
	slmasterInE360: one(slmasterInE360, {
		fields: [projectmasterInE360.servicelineid],
		references: [slmasterInE360.servicelineid]
	}),
	techgroupmasterInE360: one(techgroupmasterInE360, {
		fields: [projectmasterInE360.techgroupid],
		references: [techgroupmasterInE360.techgroupid]
	}),
	timetemplatemasterInE360: one(timetemplatemasterInE360, {
		fields: [projectmasterInE360.timetemplatemasterid],
		references: [timetemplatemasterInE360.timetemplatemasterid]
	}),
	projectroleInE360s: many(projectroleInE360),
	projectroleactualeffortmonthsplitInE360s: many(projectroleactualeffortmonthsplitInE360),
	projecttasksInE360s: many(projecttasksInE360),
	projectstaffInE360s: many(projectstaffInE360),
	projectrevenueInE360s: many(projectrevenueInE360),
	projectroleversionInE360s: many(projectroleversionInE360),
	slprojectprofitabilityInE360s: many(slprojectprofitabilityInE360),
	timesheetbillinginputInE360s: many(timesheetbillinginputInE360),
	userwiseprojectprofitabilityInE360s: many(userwiseprojectprofitabilityInE360),
	versionmasterdeletehistoryInE360s: many(versionmasterdeletehistoryInE360),
	versionscheduleInE360s: many(versionscheduleInE360),
	versionmasterInE360s: many(versionmasterInE360),
}));

export const slmasterInE360Relations = relations(slmasterInE360, ({one, many}) => ({
	demandmasterInE360s: many(demandmasterInE360),
	projectmasterInE360s: many(projectmasterInE360),
	projectmasterversionInE360s: many(projectmasterversionInE360),
	servicelineskillareamappingInE360s: many(servicelineskillareamappingInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [slmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [slmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "slmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [slmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "slmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_servicelinecontactpersonid: one(usermasterInE360, {
		fields: [slmasterInE360.servicelinecontactpersonid],
		references: [usermasterInE360.comuserid],
		relationName: "slmasterInE360_servicelinecontactpersonid_usermasterInE360_comuserid"
	}),
	slgroupmasterInE360: one(slgroupmasterInE360, {
		fields: [slmasterInE360.servicelinegroupid],
		references: [slgroupmasterInE360.servicelinegroupid]
	}),
	usermasterInE360_servicelineheadid: one(usermasterInE360, {
		fields: [slmasterInE360.servicelineheadid],
		references: [usermasterInE360.comuserid],
		relationName: "slmasterInE360_servicelineheadid_usermasterInE360_comuserid"
	}),
	usermasterInE360s: many(usermasterInE360, {
		relationName: "usermasterInE360_servicelineid_slmasterInE360_servicelineid"
	}),
}));

export const workertypemasterInE360Relations = relations(workertypemasterInE360, ({one, many}) => ({
	demandmasterInE360s: many(demandmasterInE360),
	timetypetemplatemappingInE360s: many(timetypetemplatemappingInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [workertypemasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [workertypemasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "workertypemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [workertypemasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "workertypemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360s: many(usermasterInE360, {
		relationName: "usermasterInE360_workerType_workertypemasterInE360_workertypeid"
	}),
}));

export const workforcegroupmasterInE360Relations = relations(workforcegroupmasterInE360, ({one, many}) => ({
	demandmasterInE360s: many(demandmasterInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [workforcegroupmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [workforcegroupmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "workforcegroupmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [workforcegroupmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "workforcegroupmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360s: many(usermasterInE360, {
		relationName: "usermasterInE360_workforcegroup_workforcegroupmasterInE360_wfgid"
	}),
}));

export const workmodemasterInE360Relations = relations(workmodemasterInE360, ({one, many}) => ({
	demandmasterInE360s: many(demandmasterInE360),
	projectroleInE360s: many(projectroleInE360),
	projectroleversionInE360s: many(projectroleversionInE360),
	userpreferenceInE360s: many(userpreferenceInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [workmodemasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [workmodemasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "workmodemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [workmodemasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "workmodemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const demandmatchconfigincludestatusInE360Relations = relations(demandmatchconfigincludestatusInE360, ({one}) => ({
	demandmatchconfigurationInE360: one(demandmatchconfigurationInE360, {
		fields: [demandmatchconfigincludestatusInE360.demandmatchconfigurationid],
		references: [demandmatchconfigurationInE360.demandmatchconfigurationid]
	}),
	datstatusmasterInE360: one(datstatusmasterInE360, {
		fields: [demandmatchconfigincludestatusInE360.includestatusid],
		references: [datstatusmasterInE360.statusid]
	}),
}));

export const demandmatchconfigincludeusertypeInE360Relations = relations(demandmatchconfigincludeusertypeInE360, ({one}) => ({
	datusertypeInE360: one(datusertypeInE360, {
		fields: [demandmatchconfigincludeusertypeInE360.datusertypeid],
		references: [datusertypeInE360.datusertypeid]
	}),
	demandmatchconfigurationInE360: one(demandmatchconfigurationInE360, {
		fields: [demandmatchconfigincludeusertypeInE360.demandmatchconfigurationid],
		references: [demandmatchconfigurationInE360.demandmatchconfigurationid]
	}),
}));

export const demandmatchdetailsInE360Relations = relations(demandmatchdetailsInE360, ({one}) => ({
	demandmatchInE360: one(demandmatchInE360, {
		fields: [demandmatchdetailsInE360.demandmatchid],
		references: [demandmatchInE360.demandmatchid]
	}),
	usermasterInE360: one(usermasterInE360, {
		fields: [demandmatchdetailsInE360.userid],
		references: [usermasterInE360.comuserid]
	}),
}));

export const djangoAdminLogInE360Relations = relations(djangoAdminLogInE360, ({one}) => ({
	djangoContentTypeInE360: one(djangoContentTypeInE360, {
		fields: [djangoAdminLogInE360.contentTypeId],
		references: [djangoContentTypeInE360.id]
	}),
	authUserInE360: one(authUserInE360, {
		fields: [djangoAdminLogInE360.userId],
		references: [authUserInE360.id]
	}),
}));

export const djangoContentTypeInE360Relations = relations(djangoContentTypeInE360, ({many}) => ({
	djangoAdminLogInE360s: many(djangoAdminLogInE360),
	authPermissionInE360s: many(authPermissionInE360),
}));

export const demandroleresponsibilitiesInE360Relations = relations(demandroleresponsibilitiesInE360, ({one}) => ({
	demandroledetailInE360: one(demandroledetailInE360, {
		fields: [demandroleresponsibilitiesInE360.demandroledetailid],
		references: [demandroledetailInE360.demandroledetailid]
	}),
}));

export const demandskillsInE360Relations = relations(demandskillsInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [demandskillsInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360: one(usermasterInE360, {
		fields: [demandskillsInE360.createdcomuserid],
		references: [usermasterInE360.comuserid]
	}),
	demandmasterInE360: one(demandmasterInE360, {
		fields: [demandskillsInE360.demandid],
		references: [demandmasterInE360.demandid]
	}),
	industrymasterInE360: one(industrymasterInE360, {
		fields: [demandskillsInE360.domainid],
		references: [industrymasterInE360.industryid]
	}),
	skillmasterInE360: one(skillmasterInE360, {
		fields: [demandskillsInE360.skillmasterid],
		references: [skillmasterInE360.skillmasterid]
	}),
	technologymasterInE360: one(technologymasterInE360, {
		fields: [demandskillsInE360.technologymasterid],
		references: [technologymasterInE360.technologymasterid]
	}),
}));

export const skillmasterInE360Relations = relations(skillmasterInE360, ({one, many}) => ({
	demandskillsInE360s: many(demandskillsInE360),
	designationskillmapInE360s: many(designationskillmapInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [skillmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [skillmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "skillmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [skillmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "skillmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	skillareamasterInE360: one(skillareamasterInE360, {
		fields: [skillmasterInE360.skillarea],
		references: [skillareamasterInE360.skillareamasterid]
	}),
	staffcostrateInE360s: many(staffcostrateInE360),
	userskillInE360s: many(userskillInE360),
	userskilltechnologyInE360s: many(userskilltechnologyInE360),
}));

export const technologymasterInE360Relations = relations(technologymasterInE360, ({one, many}) => ({
	demandskillsInE360s: many(demandskillsInE360),
	productmasterInE360s: many(productmasterInE360),
	projectattributesInE360s: many(projectattributesInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [technologymasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [technologymasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "technologymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [technologymasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "technologymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	techgroupmasterInE360: one(techgroupmasterInE360, {
		fields: [technologymasterInE360.techgroup],
		references: [techgroupmasterInE360.techgroupid]
	}),
	staffcostrateInE360s: many(staffcostrateInE360),
	userskilltechnologyInE360s: many(userskilltechnologyInE360),
}));

export const designationmasterInE360Relations = relations(designationmasterInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [designationmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [designationmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "designationmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [designationmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "designationmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	designationskillmapInE360s: many(designationskillmapInE360),
	orgcostrateInE360s: many(orgcostrateInE360),
	staffcostrateInE360s: many(staffcostrateInE360),
	usermasterInE360s: many(usermasterInE360, {
		relationName: "usermasterInE360_designationmasterid_designationmasterInE360_designationmasterid"
	}),
}));

export const designationskillmapInE360Relations = relations(designationskillmapInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [designationskillmapInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [designationskillmapInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "designationskillmapInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	designationmasterInE360: one(designationmasterInE360, {
		fields: [designationskillmapInE360.designationid],
		references: [designationmasterInE360.designationmasterid]
	}),
	levelmasterInE360: one(levelmasterInE360, {
		fields: [designationskillmapInE360.levelid],
		references: [levelmasterInE360.levelmasterid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [designationskillmapInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "designationskillmapInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	skillmasterInE360: one(skillmasterInE360, {
		fields: [designationskillmapInE360.skillid],
		references: [skillmasterInE360.skillmasterid]
	}),
}));

export const forgotpasswordInE360Relations = relations(forgotpasswordInE360, ({one}) => ({
	usermasterInE360_comuserid: one(usermasterInE360, {
		fields: [forgotpasswordInE360.comuserid],
		references: [usermasterInE360.comuserid],
		relationName: "forgotpasswordInE360_comuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [forgotpasswordInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "forgotpasswordInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [forgotpasswordInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "forgotpasswordInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const nationalitymasterInE360Relations = relations(nationalitymasterInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [nationalitymasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [nationalitymasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "nationalitymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [nationalitymasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "nationalitymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360s: many(usermasterInE360, {
		relationName: "usermasterInE360_nationalityid_nationalitymasterInE360_nationalityid"
	}),
}));

export const holidaymasterInE360Relations = relations(holidaymasterInE360, ({one}) => ({
	companymasterInE360: one(companymasterInE360, {
		fields: [holidaymasterInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [holidaymasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [holidaymasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "holidaymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	locationmasterInE360: one(locationmasterInE360, {
		fields: [holidaymasterInE360.locationid],
		references: [locationmasterInE360.comlocationid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [holidaymasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "holidaymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const leavetypemasterInE360Relations = relations(leavetypemasterInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [leavetypemasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [leavetypemasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "leavetypemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [leavetypemasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "leavetypemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const orgcostrateInE360Relations = relations(orgcostrateInE360, ({one, many}) => ({
	bandmasterInE360: one(bandmasterInE360, {
		fields: [orgcostrateInE360.bandid],
		references: [bandmasterInE360.bandmasterid]
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [orgcostrateInE360.comcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	companymasterInE360: one(companymasterInE360, {
		fields: [orgcostrateInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [orgcostrateInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	countrymasterInE360: one(countrymasterInE360, {
		fields: [orgcostrateInE360.countryid],
		references: [countrymasterInE360.comcountryid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [orgcostrateInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "orgcostrateInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	designationmasterInE360: one(designationmasterInE360, {
		fields: [orgcostrateInE360.designationid],
		references: [designationmasterInE360.designationmasterid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [orgcostrateInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "orgcostrateInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	skillareamasterInE360: one(skillareamasterInE360, {
		fields: [orgcostrateInE360.skillareamasterid],
		references: [skillareamasterInE360.skillareamasterid]
	}),
	techgroupmasterInE360: one(techgroupmasterInE360, {
		fields: [orgcostrateInE360.techgroupid],
		references: [techgroupmasterInE360.techgroupid]
	}),
	projectroleInE360s: many(projectroleInE360),
}));

export const overheadmasterInE360Relations = relations(overheadmasterInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [overheadmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [overheadmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "overheadmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [overheadmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "overheadmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectbudgetdetailsInE360s: many(projectbudgetdetailsInE360),
	projectbudgetversionInE360s: many(projectbudgetversionInE360),
	projectbudgetInE360s: many(projectbudgetInE360),
	projectestimationdetailsInE360s: many(projectestimationdetailsInE360),
	projectexpenseInE360s: many(projectexpenseInE360),
}));

export const productmasterInE360Relations = relations(productmasterInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [productmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [productmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "productmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [productmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "productmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	technologymasterInE360: one(technologymasterInE360, {
		fields: [productmasterInE360.technology],
		references: [technologymasterInE360.technologymasterid]
	}),
	projectattributesInE360s: many(projectattributesInE360),
	projectproductmappingInE360s: many(projectproductmappingInE360),
}));

export const profitabilitydetailsInE360Relations = relations(profitabilitydetailsInE360, ({one}) => ({
	projectprofitabilityInE360: one(projectprofitabilityInE360, {
		fields: [profitabilitydetailsInE360.projectprofitabilityid],
		references: [projectprofitabilityInE360.projectprofitabilityid]
	}),
}));

export const projectprofitabilityInE360Relations = relations(projectprofitabilityInE360, ({one, many}) => ({
	profitabilitydetailsInE360s: many(profitabilitydetailsInE360),
	usermasterInE360: one(usermasterInE360, {
		fields: [projectprofitabilityInE360.createdcomuserid],
		references: [usermasterInE360.comuserid]
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [projectprofitabilityInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectprofitabilityInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
}));

export const projectactivityversionInE360Relations = relations(projectactivityversionInE360, ({one}) => ({
	usermasterInE360_activityownerid: one(usermasterInE360, {
		fields: [projectactivityversionInE360.activityownerid],
		references: [usermasterInE360.comuserid],
		relationName: "projectactivityversionInE360_activityownerid_usermasterInE360_comuserid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectactivityversionInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectactivityversionInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectactivityversionInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectactivityversionInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectactivityversionInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
}));

export const projectattributesInE360Relations = relations(projectattributesInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [projectattributesInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectattributesInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectattributesInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360_linkedproject: one(projectmasterInE360, {
		fields: [projectattributesInE360.linkedproject],
		references: [projectmasterInE360.projectid],
		relationName: "projectattributesInE360_linkedproject_projectmasterInE360_projectid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectattributesInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectattributesInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	productmasterInE360: one(productmasterInE360, {
		fields: [projectattributesInE360.productid],
		references: [productmasterInE360.productmasterid]
	}),
	projectmasterInE360_projectid: one(projectmasterInE360, {
		fields: [projectattributesInE360.projectid],
		references: [projectmasterInE360.projectid],
		relationName: "projectattributesInE360_projectid_projectmasterInE360_projectid"
	}),
	technologymasterInE360: one(technologymasterInE360, {
		fields: [projectattributesInE360.technologyid],
		references: [technologymasterInE360.technologymasterid]
	}),
}));

export const projectbudgetdetailsInE360Relations = relations(projectbudgetdetailsInE360, ({one}) => ({
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [projectbudgetdetailsInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	overheadmasterInE360: one(overheadmasterInE360, {
		fields: [projectbudgetdetailsInE360.overheadid],
		references: [overheadmasterInE360.overheadmasterid]
	}),
	projectbudgetInE360: one(projectbudgetInE360, {
		fields: [projectbudgetdetailsInE360.projectbudgetid],
		references: [projectbudgetInE360.projectbudgetid]
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectbudgetdetailsInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
}));

export const projectbudgetInE360Relations = relations(projectbudgetInE360, ({one, many}) => ({
	projectbudgetdetailsInE360s: many(projectbudgetdetailsInE360),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectbudgetInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectbudgetInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [projectbudgetInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectbudgetInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectbudgetInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	overheadmasterInE360: one(overheadmasterInE360, {
		fields: [projectbudgetInE360.overheadid],
		references: [overheadmasterInE360.overheadmasterid]
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectbudgetInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
}));

export const projectbudgetversionInE360Relations = relations(projectbudgetversionInE360, ({one}) => ({
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectbudgetversionInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectbudgetversionInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [projectbudgetversionInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectbudgetversionInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectbudgetversionInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	overheadmasterInE360: one(overheadmasterInE360, {
		fields: [projectbudgetversionInE360.overheadid],
		references: [overheadmasterInE360.overheadmasterid]
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectbudgetversionInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
}));

export const projectcustomercontactsInE360Relations = relations(projectcustomercontactsInE360, ({one}) => ({
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectcustomercontactsInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectcustomercontactsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectcustomercontactsInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectcustomercontactsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectcustomercontactsInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
}));

export const projectdocumentsInE360Relations = relations(projectdocumentsInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [projectdocumentsInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectdocumentsInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectdocumentsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_deletedcomuserid: one(usermasterInE360, {
		fields: [projectdocumentsInE360.deletedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectdocumentsInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	documenttypemasterInE360: one(documenttypemasterInE360, {
		fields: [projectdocumentsInE360.documenttype],
		references: [documenttypemasterInE360.documenttypeid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectdocumentsInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectdocumentsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectdocumentsInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
}));

export const projecteffortInE360Relations = relations(projecteffortInE360, ({one, many}) => ({
	usermasterInE360_approverid: one(usermasterInE360, {
		fields: [projecteffortInE360.approverid],
		references: [usermasterInE360.comuserid],
		relationName: "projecteffortInE360_approverid_usermasterInE360_comuserid"
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [projecteffortInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_comuserid: one(usermasterInE360, {
		fields: [projecteffortInE360.comuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projecteffortInE360_comuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projecteffortInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projecteffortInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projecteffortInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projecteffortInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projecteffortInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
	projectstaffInE360: one(projectstaffInE360, {
		fields: [projecteffortInE360.projstaffid],
		references: [projectstaffInE360.projectstaffid]
	}),
	projecteffortdetailsInE360s: many(projecteffortdetailsInE360),
}));

export const projectstaffInE360Relations = relations(projectstaffInE360, ({one, many}) => ({
	projecteffortInE360s: many(projecteffortInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [projectstaffInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectstaffInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectstaffInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	demandmasterInE360: one(demandmasterInE360, {
		fields: [projectstaffInE360.demandid],
		references: [demandmasterInE360.demandid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectstaffInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectstaffInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectstaffInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
	projectroleInE360: one(projectroleInE360, {
		fields: [projectstaffInE360.projroleid],
		references: [projectroleInE360.projectroleid]
	}),
	usermasterInE360_userid: one(usermasterInE360, {
		fields: [projectstaffInE360.userid],
		references: [usermasterInE360.comuserid],
		relationName: "projectstaffInE360_userid_usermasterInE360_comuserid"
	}),
	timesheetbillinginputInE360s: many(timesheetbillinginputInE360),
}));

export const projecteffortdetailsInE360Relations = relations(projecteffortdetailsInE360, ({one}) => ({
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projecteffortdetailsInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projecteffortdetailsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projecteffortdetailsInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projecteffortdetailsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projecttasksInE360: one(projecttasksInE360, {
		fields: [projecteffortdetailsInE360.projecttaskid],
		references: [projecttasksInE360.projecttaskid]
	}),
	projecteffortInE360: one(projecteffortInE360, {
		fields: [projecteffortdetailsInE360.projeffortid],
		references: [projecteffortInE360.effortid]
	}),
	taskmasterInE360: one(taskmasterInE360, {
		fields: [projecteffortdetailsInE360.projtaskid],
		references: [taskmasterInE360.taskid]
	}),
	timecategorymasterInE360: one(timecategorymasterInE360, {
		fields: [projecteffortdetailsInE360.timecategorymasterid],
		references: [timecategorymasterInE360.timecategorymasterid]
	}),
}));

export const projecttasksInE360Relations = relations(projecttasksInE360, ({one, many}) => ({
	projecteffortdetailsInE360s: many(projecteffortdetailsInE360),
	projectmilestonesInE360s: many(projectmilestonesInE360),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projecttasksInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projecttasksInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projecttasksInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projecttasksInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectactivityInE360: one(projectactivityInE360, {
		fields: [projecttasksInE360.projectactivityid],
		references: [projectactivityInE360.activityid]
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projecttasksInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
	taskmasterInE360: one(taskmasterInE360, {
		fields: [projecttasksInE360.taskid],
		references: [taskmasterInE360.taskid]
	}),
	projectroletasksInE360s: many(projectroletasksInE360),
}));

export const taskmasterInE360Relations = relations(taskmasterInE360, ({one, many}) => ({
	projecteffortdetailsInE360s: many(projecteffortdetailsInE360),
	projecttasksInE360s: many(projecttasksInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [taskmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [taskmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "taskmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [taskmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "taskmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	taskgroupmasterInE360: one(taskgroupmasterInE360, {
		fields: [taskmasterInE360.taskgroupid],
		references: [taskgroupmasterInE360.taskgroupid]
	}),
	tasktypemasterInE360: one(tasktypemasterInE360, {
		fields: [taskmasterInE360.tasktypeid],
		references: [tasktypemasterInE360.tasktypeid]
	}),
}));

export const timecategorymasterInE360Relations = relations(timecategorymasterInE360, ({one, many}) => ({
	projecteffortdetailsInE360s: many(projecteffortdetailsInE360),
	timetypetemplatemappingInE360s: many(timetypetemplatemappingInE360),
	companymasterInE360: one(companymasterInE360, {
		fields: [timecategorymasterInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [timecategorymasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [timecategorymasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "timecategorymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [timecategorymasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "timecategorymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const projectactivityInE360Relations = relations(projectactivityInE360, ({one, many}) => ({
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectactivityInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectactivityInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectactivityInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectactivityInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectactivityInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
	projecttasksInE360s: many(projecttasksInE360),
}));

export const projectestimationdetailsInE360Relations = relations(projectestimationdetailsInE360, ({one}) => ({
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectestimationdetailsInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectestimationdetailsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [projectestimationdetailsInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectestimationdetailsInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectestimationdetailsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	overheadmasterInE360: one(overheadmasterInE360, {
		fields: [projectestimationdetailsInE360.overheadid],
		references: [overheadmasterInE360.overheadmasterid]
	}),
	projectestimationInE360: one(projectestimationInE360, {
		fields: [projectestimationdetailsInE360.projectestimationid],
		references: [projectestimationInE360.estimationid]
	}),
}));

export const projectestimationInE360Relations = relations(projectestimationInE360, ({one, many}) => ({
	projectestimationdetailsInE360s: many(projectestimationdetailsInE360),
	usermasterInE360_approverid: one(usermasterInE360, {
		fields: [projectestimationInE360.approverid],
		references: [usermasterInE360.comuserid],
		relationName: "projectestimationInE360_approverid_usermasterInE360_comuserid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectestimationInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectestimationInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [projectestimationInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectestimationInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectestimationInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectestimationInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
}));

export const projectexpenseInE360Relations = relations(projectexpenseInE360, ({one}) => ({
	companymasterInE360: one(companymasterInE360, {
		fields: [projectexpenseInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [projectexpenseInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectexpenseInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectexpenseInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [projectexpenseInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectexpenseInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectexpenseInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	overheadmasterInE360: one(overheadmasterInE360, {
		fields: [projectexpenseInE360.overheadid],
		references: [overheadmasterInE360.overheadmasterid]
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectexpenseInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
	usermasterInE360_taggeduser: one(usermasterInE360, {
		fields: [projectexpenseInE360.taggeduser],
		references: [usermasterInE360.comuserid],
		relationName: "projectexpenseInE360_taggeduser_usermasterInE360_comuserid"
	}),
}));

export const projectholidaysInE360Relations = relations(projectholidaysInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [projectholidaysInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectholidaysInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectholidaysInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectholidaysInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectholidaysInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectholidaysInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
}));

export const projectmilestonesInE360Relations = relations(projectmilestonesInE360, ({one}) => ({
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectmilestonesInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectmilestonesInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [projectmilestonesInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectmilestonesInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectmilestonesInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectmilestonesInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
	projecttasksInE360: one(projecttasksInE360, {
		fields: [projectmilestonesInE360.projecttaskid],
		references: [projecttasksInE360.projecttaskid]
	}),
}));

export const projectplanversionInE360Relations = relations(projectplanversionInE360, ({one}) => ({
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectplanversionInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectplanversionInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [projectplanversionInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectplanversionInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectplanversionInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectplanversionInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
}));

export const projectproductmappingInE360Relations = relations(projectproductmappingInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [projectproductmappingInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	productmasterInE360: one(productmasterInE360, {
		fields: [projectproductmappingInE360.productmasterid],
		references: [productmasterInE360.productmasterid]
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectproductmappingInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
}));

export const datprojectbilltypeInE360Relations = relations(datprojectbilltypeInE360, ({one, many}) => ({
	projectmasterInE360s: many(projectmasterInE360),
	projectmasterversionInE360s: many(projectmasterversionInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [datprojectbilltypeInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [datprojectbilltypeInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datprojectbilltypeInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [datprojectbilltypeInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datprojectbilltypeInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const projecttypemasterInE360Relations = relations(projecttypemasterInE360, ({one, many}) => ({
	projectmasterInE360s: many(projectmasterInE360),
	projectmasterversionInE360s: many(projectmasterversionInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [projecttypemasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projecttypemasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projecttypemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projecttypemasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projecttypemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const timetemplatemasterInE360Relations = relations(timetemplatemasterInE360, ({one, many}) => ({
	projectmasterInE360s: many(projectmasterInE360),
	projectmasterversionInE360s: many(projectmasterversionInE360),
	companymasterInE360: one(companymasterInE360, {
		fields: [timetemplatemasterInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [timetemplatemasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [timetemplatemasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "timetemplatemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [timetemplatemasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "timetemplatemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	timetypetemplatemappingInE360s: many(timetypetemplatemappingInE360),
}));

export const projectmasterversionInE360Relations = relations(projectmasterversionInE360, ({one}) => ({
	bumasterInE360: one(bumasterInE360, {
		fields: [projectmasterversionInE360.businessunitid],
		references: [bumasterInE360.businessunitid]
	}),
	companymasterInE360: one(companymasterInE360, {
		fields: [projectmasterversionInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [projectmasterversionInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectmasterversionInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterversionInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customermasterInE360: one(customermasterInE360, {
		fields: [projectmasterversionInE360.customerid],
		references: [customermasterInE360.customerid]
	}),
	datprojectbilltypeInE360: one(datprojectbilltypeInE360, {
		fields: [projectmasterversionInE360.datprojectbillingtypeid],
		references: [datprojectbilltypeInE360.datprojectbillingtypeid]
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [projectmasterversionInE360.defaultcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	usermasterInE360_deliverymanagerid: one(usermasterInE360, {
		fields: [projectmasterversionInE360.deliverymanagerid],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterversionInE360_deliverymanagerid_usermasterInE360_comuserid"
	}),
	deliverymodemasterInE360: one(deliverymodemasterInE360, {
		fields: [projectmasterversionInE360.deliverymodemasterid],
		references: [deliverymodemasterInE360.deliverymodemasterid]
	}),
	departmentmasterInE360: one(departmentmasterInE360, {
		fields: [projectmasterversionInE360.departmentid],
		references: [departmentmasterInE360.departmentid]
	}),
	locationmasterInE360: one(locationmasterInE360, {
		fields: [projectmasterversionInE360.locationid],
		references: [locationmasterInE360.comlocationid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectmasterversionInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterversionInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	opportunityInE360: one(opportunityInE360, {
		fields: [projectmasterversionInE360.opportunityid],
		references: [opportunityInE360.opportunityid]
	}),
	usermasterInE360_pmo1: one(usermasterInE360, {
		fields: [projectmasterversionInE360.pmo1],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterversionInE360_pmo1_usermasterInE360_comuserid"
	}),
	usermasterInE360_pmo2: one(usermasterInE360, {
		fields: [projectmasterversionInE360.pmo2],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterversionInE360_pmo2_usermasterInE360_comuserid"
	}),
	usermasterInE360_pmo3: one(usermasterInE360, {
		fields: [projectmasterversionInE360.pmo3],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterversionInE360_pmo3_usermasterInE360_comuserid"
	}),
	usermasterInE360_pmocontactpersonid: one(usermasterInE360, {
		fields: [projectmasterversionInE360.pmocontactpersonid],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterversionInE360_pmocontactpersonid_usermasterInE360_comuserid"
	}),
	usermasterInE360_projectmanagerid: one(usermasterInE360, {
		fields: [projectmasterversionInE360.projectmanagerid],
		references: [usermasterInE360.comuserid],
		relationName: "projectmasterversionInE360_projectmanagerid_usermasterInE360_comuserid"
	}),
	projecttypemasterInE360: one(projecttypemasterInE360, {
		fields: [projectmasterversionInE360.projecttypeid],
		references: [projecttypemasterInE360.projecttypeid]
	}),
	slmasterInE360: one(slmasterInE360, {
		fields: [projectmasterversionInE360.servicelineid],
		references: [slmasterInE360.servicelineid]
	}),
	techgroupmasterInE360: one(techgroupmasterInE360, {
		fields: [projectmasterversionInE360.techgroupid],
		references: [techgroupmasterInE360.techgroupid]
	}),
	versionmasterInE360: one(versionmasterInE360, {
		fields: [projectmasterversionInE360.versionmasterid],
		references: [versionmasterInE360.versionmasterid]
	}),
	timetemplatemasterInE360: one(timetemplatemasterInE360, {
		fields: [projectmasterversionInE360.timetemplatemasterid],
		references: [timetemplatemasterInE360.timetemplatemasterid]
	}),
}));

export const versionmasterInE360Relations = relations(versionmasterInE360, ({one, many}) => ({
	projectmasterversionInE360s: many(projectmasterversionInE360),
	projectroleversionInE360s: many(projectroleversionInE360),
	versionscheduleInE360s: many(versionscheduleInE360),
	usermasterInE360_approvedcomuserid: one(usermasterInE360, {
		fields: [versionmasterInE360.approvedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "versionmasterInE360_approvedcomuserid_usermasterInE360_comuserid"
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [versionmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [versionmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "versionmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [versionmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "versionmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [versionmasterInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
	usermasterInE360_submittedcomuserid: one(usermasterInE360, {
		fields: [versionmasterInE360.submittedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "versionmasterInE360_submittedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const projectroleInE360Relations = relations(projectroleInE360, ({one, many}) => ({
	countrymasterInE360: one(countrymasterInE360, {
		fields: [projectroleInE360.countryid],
		references: [countrymasterInE360.comcountryid]
	}),
	customerratesInE360: one(customerratesInE360, {
		fields: [projectroleInE360.crateid],
		references: [customerratesInE360.custrateid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectroleInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectroleInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [projectroleInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	levelmasterInE360: one(levelmasterInE360, {
		fields: [projectroleInE360.levelid],
		references: [levelmasterInE360.levelmasterid]
	}),
	bandmasterInE360_maxBandid: one(bandmasterInE360, {
		fields: [projectroleInE360.maxBandid],
		references: [bandmasterInE360.bandmasterid],
		relationName: "projectroleInE360_maxBandid_bandmasterInE360_bandmasterid"
	}),
	bandmasterInE360_minBandid: one(bandmasterInE360, {
		fields: [projectroleInE360.minBandid],
		references: [bandmasterInE360.bandmasterid],
		relationName: "projectroleInE360_minBandid_bandmasterInE360_bandmasterid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectroleInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectroleInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectroleInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
	skillareamasterInE360: one(skillareamasterInE360, {
		fields: [projectroleInE360.skillareamasterid],
		references: [skillareamasterInE360.skillareamasterid]
	}),
	orgcostrateInE360: one(orgcostrateInE360, {
		fields: [projectroleInE360.staffcostid],
		references: [orgcostrateInE360.orgcostrateid]
	}),
	techgroupmasterInE360: one(techgroupmasterInE360, {
		fields: [projectroleInE360.techgroupid],
		references: [techgroupmasterInE360.techgroupid]
	}),
	workmodemasterInE360: one(workmodemasterInE360, {
		fields: [projectroleInE360.workmodeid],
		references: [workmodemasterInE360.workmodeid]
	}),
	projectroleactualeffortmonthsplitInE360s: many(projectroleactualeffortmonthsplitInE360),
	projectstaffInE360s: many(projectstaffInE360),
	projectroleeffortmonthsplitInE360s: many(projectroleeffortmonthsplitInE360),
	projectroletasksInE360s: many(projectroletasksInE360),
	timesheetbillinginputInE360s: many(timesheetbillinginputInE360),
	versionscheduleInE360s: many(versionscheduleInE360),
}));

export const projectroleactualeffortmonthsplitInE360Relations = relations(projectroleactualeffortmonthsplitInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [projectroleactualeffortmonthsplitInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectroleactualeffortmonthsplitInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
	projectroleInE360: one(projectroleInE360, {
		fields: [projectroleactualeffortmonthsplitInE360.projectroleid],
		references: [projectroleInE360.projectroleid]
	}),
}));

export const rolemasterInE360Relations = relations(rolemasterInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [rolemasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	rolemenupermissionsInE360s: many(rolemenupermissionsInE360),
	rolemenusInE360s: many(rolemenusInE360),
	roleusermappingInE360s: many(roleusermappingInE360),
}));

export const rolemenupermissionsInE360Relations = relations(rolemenupermissionsInE360, ({one}) => ({
	rolemasterInE360: one(rolemasterInE360, {
		fields: [rolemenupermissionsInE360.roleid],
		references: [rolemasterInE360.roleid]
	}),
}));

export const projectrevenueInE360Relations = relations(projectrevenueInE360, ({one}) => ({
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectrevenueInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectrevenueInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [projectrevenueInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectrevenueInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectrevenueInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectrevenueInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
}));

export const projectroleeffortmonthsplitInE360Relations = relations(projectroleeffortmonthsplitInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [projectroleeffortmonthsplitInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	projectroleInE360: one(projectroleInE360, {
		fields: [projectroleeffortmonthsplitInE360.projectroleid],
		references: [projectroleInE360.projectroleid]
	}),
}));

export const projectroletasksInE360Relations = relations(projectroletasksInE360, ({one}) => ({
	usermasterInE360_createduser: one(usermasterInE360, {
		fields: [projectroletasksInE360.createduser],
		references: [usermasterInE360.comuserid],
		relationName: "projectroletasksInE360_createduser_usermasterInE360_comuserid"
	}),
	projectroleInE360: one(projectroleInE360, {
		fields: [projectroletasksInE360.projroleid],
		references: [projectroleInE360.projectroleid]
	}),
	projecttasksInE360: one(projecttasksInE360, {
		fields: [projectroletasksInE360.projtaskid],
		references: [projecttasksInE360.projecttaskid]
	}),
	usermasterInE360_updateduser: one(usermasterInE360, {
		fields: [projectroletasksInE360.updateduser],
		references: [usermasterInE360.comuserid],
		relationName: "projectroletasksInE360_updateduser_usermasterInE360_comuserid"
	}),
}));

export const projectroleversionInE360Relations = relations(projectroleversionInE360, ({one}) => ({
	countrymasterInE360: one(countrymasterInE360, {
		fields: [projectroleversionInE360.countryid],
		references: [countrymasterInE360.comcountryid]
	}),
	customerratesInE360: one(customerratesInE360, {
		fields: [projectroleversionInE360.crateid],
		references: [customerratesInE360.custrateid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [projectroleversionInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectroleversionInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [projectroleversionInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	levelmasterInE360: one(levelmasterInE360, {
		fields: [projectroleversionInE360.levelid],
		references: [levelmasterInE360.levelmasterid]
	}),
	bandmasterInE360_maxBandid: one(bandmasterInE360, {
		fields: [projectroleversionInE360.maxBandid],
		references: [bandmasterInE360.bandmasterid],
		relationName: "projectroleversionInE360_maxBandid_bandmasterInE360_bandmasterid"
	}),
	bandmasterInE360_minBandid: one(bandmasterInE360, {
		fields: [projectroleversionInE360.minBandid],
		references: [bandmasterInE360.bandmasterid],
		relationName: "projectroleversionInE360_minBandid_bandmasterInE360_bandmasterid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [projectroleversionInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "projectroleversionInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [projectroleversionInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
	skillareamasterInE360: one(skillareamasterInE360, {
		fields: [projectroleversionInE360.skillareamasterid],
		references: [skillareamasterInE360.skillareamasterid]
	}),
	staffcostrateInE360: one(staffcostrateInE360, {
		fields: [projectroleversionInE360.staffcostid],
		references: [staffcostrateInE360.costrateid]
	}),
	techgroupmasterInE360: one(techgroupmasterInE360, {
		fields: [projectroleversionInE360.techgroupid],
		references: [techgroupmasterInE360.techgroupid]
	}),
	versionmasterInE360: one(versionmasterInE360, {
		fields: [projectroleversionInE360.versionmasterid],
		references: [versionmasterInE360.versionmasterid]
	}),
	workmodemasterInE360: one(workmodemasterInE360, {
		fields: [projectroleversionInE360.workmodeid],
		references: [workmodemasterInE360.workmodeid]
	}),
}));

export const staffcostrateInE360Relations = relations(staffcostrateInE360, ({one, many}) => ({
	projectroleversionInE360s: many(projectroleversionInE360),
	bandmasterInE360: one(bandmasterInE360, {
		fields: [staffcostrateInE360.band],
		references: [bandmasterInE360.bandmasterid]
	}),
	citymasterInE360: one(citymasterInE360, {
		fields: [staffcostrateInE360.cityid],
		references: [citymasterInE360.comcityid]
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [staffcostrateInE360.comcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [staffcostrateInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [staffcostrateInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "staffcostrateInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	designationmasterInE360: one(designationmasterInE360, {
		fields: [staffcostrateInE360.designationid],
		references: [designationmasterInE360.designationmasterid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [staffcostrateInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "staffcostrateInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	skillmasterInE360: one(skillmasterInE360, {
		fields: [staffcostrateInE360.skillid],
		references: [skillmasterInE360.skillmasterid]
	}),
	technologymasterInE360: one(technologymasterInE360, {
		fields: [staffcostrateInE360.techid],
		references: [technologymasterInE360.technologymasterid]
	}),
}));

export const rolemenusInE360Relations = relations(rolemenusInE360, ({one}) => ({
	rolemasterInE360: one(rolemasterInE360, {
		fields: [rolemenusInE360.roleid],
		references: [rolemasterInE360.roleid]
	}),
}));

export const servicelineskillareamappingInE360Relations = relations(servicelineskillareamappingInE360, ({one}) => ({
	slmasterInE360: one(slmasterInE360, {
		fields: [servicelineskillareamappingInE360.servicelineid],
		references: [slmasterInE360.servicelineid]
	}),
}));

export const sourcemasterInE360Relations = relations(sourcemasterInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [sourcemasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [sourcemasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "sourcemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [sourcemasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "sourcemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const statemasterInE360Relations = relations(statemasterInE360, ({one, many}) => ({
	countrymasterInE360: one(countrymasterInE360, {
		fields: [statemasterInE360.comcountryid],
		references: [countrymasterInE360.comcountryid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [statemasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [statemasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "statemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [statemasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "statemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	useraddressInE360s: many(useraddressInE360),
	citymasterInE360s: many(citymasterInE360),
}));

export const slgroupmasterInE360Relations = relations(slgroupmasterInE360, ({one, many}) => ({
	slmasterInE360s: many(slmasterInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [slgroupmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [slgroupmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "slgroupmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_groupcontactpersonid: one(usermasterInE360, {
		fields: [slgroupmasterInE360.groupcontactpersonid],
		references: [usermasterInE360.comuserid],
		relationName: "slgroupmasterInE360_groupcontactpersonid_usermasterInE360_comuserid"
	}),
	usermasterInE360_groupheadid: one(usermasterInE360, {
		fields: [slgroupmasterInE360.groupheadid],
		references: [usermasterInE360.comuserid],
		relationName: "slgroupmasterInE360_groupheadid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [slgroupmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "slgroupmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_servicelinegroupheadcomuserid: one(usermasterInE360, {
		fields: [slgroupmasterInE360.servicelinegroupheadcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "slgroupmasterInE360_servicelinegroupheadcomuserid_usermasterInE360_comuserid"
	}),
}));

export const taskgroupmasterInE360Relations = relations(taskgroupmasterInE360, ({one, many}) => ({
	taskmasterInE360s: many(taskmasterInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [taskgroupmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [taskgroupmasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "taskgroupmasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [taskgroupmasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "taskgroupmasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const tasktypemasterInE360Relations = relations(tasktypemasterInE360, ({one, many}) => ({
	taskmasterInE360s: many(taskmasterInE360),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [tasktypemasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [tasktypemasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "tasktypemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [tasktypemasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "tasktypemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const roleusermappingInE360Relations = relations(roleusermappingInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [roleusermappingInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360: one(usermasterInE360, {
		fields: [roleusermappingInE360.comuserid],
		references: [usermasterInE360.comuserid]
	}),
	rolemasterInE360: one(rolemasterInE360, {
		fields: [roleusermappingInE360.roleid],
		references: [rolemasterInE360.roleid]
	}),
}));

export const sapuserworkassignmentInE360Relations = relations(sapuserworkassignmentInE360, ({one}) => ({
	companymasterInE360: one(companymasterInE360, {
		fields: [sapuserworkassignmentInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	usermasterInE360: one(usermasterInE360, {
		fields: [sapuserworkassignmentInE360.comuserid],
		references: [usermasterInE360.comuserid]
	}),
}));

export const slprojectprofitabilityInE360Relations = relations(slprojectprofitabilityInE360, ({one}) => ({
	usermasterInE360: one(usermasterInE360, {
		fields: [slprojectprofitabilityInE360.createdcomuserid],
		references: [usermasterInE360.comuserid]
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [slprojectprofitabilityInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [slprojectprofitabilityInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
}));

export const tenantemailidconfigurationInE360Relations = relations(tenantemailidconfigurationInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [tenantemailidconfigurationInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
}));

export const tenants3BucketconfigurationInE360Relations = relations(tenants3BucketconfigurationInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [tenants3BucketconfigurationInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
}));

export const tenantcontactsInE360Relations = relations(tenantcontactsInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [tenantcontactsInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [tenantcontactsInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "tenantcontactsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [tenantcontactsInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "tenantcontactsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	tenantcontactsInE360: one(tenantcontactsInE360, {
		fields: [tenantcontactsInE360.tenantcontactpersonsid],
		references: [tenantcontactsInE360.tenantcontactpersonsid],
		relationName: "tenantcontactsInE360_tenantcontactpersonsid_tenantcontactsInE360_tenantcontactpersonsid"
	}),
	tenantcontactsInE360s: many(tenantcontactsInE360, {
		relationName: "tenantcontactsInE360_tenantcontactpersonsid_tenantcontactsInE360_tenantcontactpersonsid"
	}),
}));

export const tenantsubscriptionInE360Relations = relations(tenantsubscriptionInE360, ({one, many}) => ({
	usermasterInE360_deletedcomuserid: one(usermasterInE360, {
		fields: [tenantsubscriptionInE360.deletedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "tenantsubscriptionInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [tenantsubscriptionInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [tenantsubscriptionInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "tenantsubscriptionInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datsubscriptionpackageInE360: one(datsubscriptionpackageInE360, {
		fields: [tenantsubscriptionInE360.datsubscriptionpackageid],
		references: [datsubscriptionpackageInE360.datsubscriptionpackageid]
	}),
	tenantsubscriptionpricingInE360s: many(tenantsubscriptionpricingInE360),
}));

export const timesheetbillinginputInE360Relations = relations(timesheetbillinginputInE360, ({one}) => ({
	usermasterInE360: one(usermasterInE360, {
		fields: [timesheetbillinginputInE360.comuserid],
		references: [usermasterInE360.comuserid]
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [timesheetbillinginputInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
	projectroleInE360: one(projectroleInE360, {
		fields: [timesheetbillinginputInE360.projectroleid],
		references: [projectroleInE360.projectroleid]
	}),
	projectstaffInE360: one(projectstaffInE360, {
		fields: [timesheetbillinginputInE360.projectstaffid],
		references: [projectstaffInE360.projectstaffid]
	}),
	datstatusmasterInE360: one(datstatusmasterInE360, {
		fields: [timesheetbillinginputInE360.status],
		references: [datstatusmasterInE360.statusid]
	}),
}));

export const tenantsubscriptionpricingInE360Relations = relations(tenantsubscriptionpricingInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [tenantsubscriptionpricingInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	tenantsubscriptionInE360: one(tenantsubscriptionInE360, {
		fields: [tenantsubscriptionpricingInE360.tenantsubscriptionid],
		references: [tenantsubscriptionInE360.tenantsubscriptionid]
	}),
}));

export const timetypemasterInE360Relations = relations(timetypemasterInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [timetypemasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [timetypemasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "timetypemasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [timetypemasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "timetypemasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360s: many(usermasterInE360, {
		relationName: "usermasterInE360_timeType_timetypemasterInE360_timetypeid"
	}),
}));

export const timetypetemplatemappingInE360Relations = relations(timetypetemplatemappingInE360, ({one}) => ({
	countrymasterInE360: one(countrymasterInE360, {
		fields: [timetypetemplatemappingInE360.comcountryid],
		references: [countrymasterInE360.comcountryid]
	}),
	companymasterInE360: one(companymasterInE360, {
		fields: [timetypetemplatemappingInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [timetypetemplatemappingInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [timetypetemplatemappingInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "timetypetemplatemappingInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [timetypetemplatemappingInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "timetypetemplatemappingInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	timecategorymasterInE360: one(timecategorymasterInE360, {
		fields: [timetypetemplatemappingInE360.timecategorymasterid],
		references: [timecategorymasterInE360.timecategorymasterid]
	}),
	timetemplatemasterInE360: one(timetemplatemasterInE360, {
		fields: [timetypetemplatemappingInE360.timetemplatemasterid],
		references: [timetemplatemasterInE360.timetemplatemasterid]
	}),
	workertypemasterInE360: one(workertypemasterInE360, {
		fields: [timetypetemplatemappingInE360.workertypeid],
		references: [workertypemasterInE360.workertypeid]
	}),
}));

export const userdocumentsInE360Relations = relations(userdocumentsInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [userdocumentsInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_comuserid: one(usermasterInE360, {
		fields: [userdocumentsInE360.comuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userdocumentsInE360_comuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [userdocumentsInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userdocumentsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_deletedcomuserid: one(usermasterInE360, {
		fields: [userdocumentsInE360.deletedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userdocumentsInE360_deletedcomuserid_usermasterInE360_comuserid"
	}),
	documenttypemasterInE360: one(documenttypemasterInE360, {
		fields: [userdocumentsInE360.documenttype],
		references: [documenttypemasterInE360.documenttypeid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [userdocumentsInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userdocumentsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const usereducationInE360Relations = relations(usereducationInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [usereducationInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_comuserid: one(usermasterInE360, {
		fields: [usereducationInE360.comuserid],
		references: [usermasterInE360.comuserid],
		relationName: "usereducationInE360_comuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [usereducationInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "usereducationInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcourseInE360: one(datcourseInE360, {
		fields: [usereducationInE360.datcoursemasterid],
		references: [datcourseInE360.datcoursemasterid]
	}),
	dateducationInE360: one(dateducationInE360, {
		fields: [usereducationInE360.dateducationmasterid],
		references: [dateducationInE360.dateducationmasterid]
	}),
	datspecialisationInE360: one(datspecialisationInE360, {
		fields: [usereducationInE360.datspecialisationid],
		references: [datspecialisationInE360.datspecialisationid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [usereducationInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "usereducationInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const userleavedataInE360Relations = relations(userleavedataInE360, ({one}) => ({
	usermasterInE360_comuserid: one(usermasterInE360, {
		fields: [userleavedataInE360.comuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userleavedataInE360_comuserid_usermasterInE360_comuserid"
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [userleavedataInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [userleavedataInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userleavedataInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datstatusmasterInE360: one(datstatusmasterInE360, {
		fields: [userleavedataInE360.leavestatus],
		references: [datstatusmasterInE360.statusid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [userleavedataInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userleavedataInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const useraddressInE360Relations = relations(useraddressInE360, ({one}) => ({
	addresstypemasterInE360: one(addresstypemasterInE360, {
		fields: [useraddressInE360.addresstype],
		references: [addresstypemasterInE360.addresstypeid]
	}),
	citymasterInE360: one(citymasterInE360, {
		fields: [useraddressInE360.comcityid],
		references: [citymasterInE360.comcityid]
	}),
	countrymasterInE360: one(countrymasterInE360, {
		fields: [useraddressInE360.comcountryid],
		references: [countrymasterInE360.comcountryid]
	}),
	statemasterInE360: one(statemasterInE360, {
		fields: [useraddressInE360.comstateid],
		references: [statemasterInE360.comstateid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [useraddressInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_comuseraddressid: one(usermasterInE360, {
		fields: [useraddressInE360.comuseraddressid],
		references: [usermasterInE360.comuserid],
		relationName: "useraddressInE360_comuseraddressid_usermasterInE360_comuserid"
	}),
	usermasterInE360_comuserid: one(usermasterInE360, {
		fields: [useraddressInE360.comuserid],
		references: [usermasterInE360.comuserid],
		relationName: "useraddressInE360_comuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [useraddressInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "useraddressInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [useraddressInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "useraddressInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const usercertificationInE360Relations = relations(usercertificationInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [usercertificationInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_comuserid: one(usermasterInE360, {
		fields: [usercertificationInE360.comuserid],
		references: [usermasterInE360.comuserid],
		relationName: "usercertificationInE360_comuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [usercertificationInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "usercertificationInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [usercertificationInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "usercertificationInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const userpreferenceInE360Relations = relations(userpreferenceInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [userpreferenceInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_comuserid: one(usermasterInE360, {
		fields: [userpreferenceInE360.comuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userpreferenceInE360_comuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [userpreferenceInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userpreferenceInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [userpreferenceInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userpreferenceInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	locationmasterInE360_preferredlocation1Id: one(locationmasterInE360, {
		fields: [userpreferenceInE360.preferredlocation1Id],
		references: [locationmasterInE360.comlocationid],
		relationName: "userpreferenceInE360_preferredlocation1Id_locationmasterInE360_comlocationid"
	}),
	locationmasterInE360_preferredlocation2Id: one(locationmasterInE360, {
		fields: [userpreferenceInE360.preferredlocation2Id],
		references: [locationmasterInE360.comlocationid],
		relationName: "userpreferenceInE360_preferredlocation2Id_locationmasterInE360_comlocationid"
	}),
	locationmasterInE360_preferredlocation3Id: one(locationmasterInE360, {
		fields: [userpreferenceInE360.preferredlocation3Id],
		references: [locationmasterInE360.comlocationid],
		relationName: "userpreferenceInE360_preferredlocation3Id_locationmasterInE360_comlocationid"
	}),
	workmodemasterInE360: one(workmodemasterInE360, {
		fields: [userpreferenceInE360.workmode],
		references: [workmodemasterInE360.workmodeid]
	}),
}));

export const userskillInE360Relations = relations(userskillInE360, ({one, many}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [userskillInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360: one(usermasterInE360, {
		fields: [userskillInE360.comuserid],
		references: [usermasterInE360.comuserid]
	}),
	skillmasterInE360: one(skillmasterInE360, {
		fields: [userskillInE360.skillmasterid],
		references: [skillmasterInE360.skillmasterid]
	}),
	userskillattributesInE360s: many(userskillattributesInE360),
}));

export const userskilltechnologyInE360Relations = relations(userskilltechnologyInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [userskilltechnologyInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_comuserid: one(usermasterInE360, {
		fields: [userskilltechnologyInE360.comuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userskilltechnologyInE360_comuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [userskilltechnologyInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userskilltechnologyInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	industrymasterInE360: one(industrymasterInE360, {
		fields: [userskilltechnologyInE360.domainid],
		references: [industrymasterInE360.industryid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [userskilltechnologyInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userskilltechnologyInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	levelmasterInE360: one(levelmasterInE360, {
		fields: [userskilltechnologyInE360.proficiencyid],
		references: [levelmasterInE360.levelmasterid]
	}),
	skillmasterInE360: one(skillmasterInE360, {
		fields: [userskilltechnologyInE360.skillmasterid],
		references: [skillmasterInE360.skillmasterid]
	}),
	technologymasterInE360: one(technologymasterInE360, {
		fields: [userskilltechnologyInE360.technologymasterid],
		references: [technologymasterInE360.technologymasterid]
	}),
}));

export const userwiseprojectprofitabilityInE360Relations = relations(userwiseprojectprofitabilityInE360, ({one}) => ({
	usermasterInE360: one(usermasterInE360, {
		fields: [userwiseprojectprofitabilityInE360.createdcomuserid],
		references: [usermasterInE360.comuserid]
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [userwiseprojectprofitabilityInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [userwiseprojectprofitabilityInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
}));

export const versionmasterdeletehistoryInE360Relations = relations(versionmasterdeletehistoryInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [versionmasterdeletehistoryInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [versionmasterdeletehistoryInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "versionmasterdeletehistoryInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [versionmasterdeletehistoryInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "versionmasterdeletehistoryInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [versionmasterdeletehistoryInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
	usermasterInE360_submittedcomuserid: one(usermasterInE360, {
		fields: [versionmasterdeletehistoryInE360.submittedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "versionmasterdeletehistoryInE360_submittedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const userpayrollInE360Relations = relations(userpayrollInE360, ({one}) => ({
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [userpayrollInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userpayrollInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	datcurrencyInE360: one(datcurrencyInE360, {
		fields: [userpayrollInE360.datcomcurrencyid],
		references: [datcurrencyInE360.datcomcurrencyid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [userpayrollInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userpayrollInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_userid: one(usermasterInE360, {
		fields: [userpayrollInE360.userid],
		references: [usermasterInE360.comuserid],
		relationName: "userpayrollInE360_userid_usermasterInE360_comuserid"
	}),
}));

export const versionscheduleInE360Relations = relations(versionscheduleInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [versionscheduleInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [versionscheduleInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "versionscheduleInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	customerratesInE360: one(customerratesInE360, {
		fields: [versionscheduleInE360.custrateid],
		references: [customerratesInE360.custrateid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [versionscheduleInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "versionscheduleInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
	projectmasterInE360: one(projectmasterInE360, {
		fields: [versionscheduleInE360.projectid],
		references: [projectmasterInE360.projectid]
	}),
	projectroleInE360: one(projectroleInE360, {
		fields: [versionscheduleInE360.projectroleid],
		references: [projectroleInE360.projectroleid]
	}),
	versionmasterInE360: one(versionmasterInE360, {
		fields: [versionscheduleInE360.versionmasterid],
		references: [versionmasterInE360.versionmasterid]
	}),
}));

export const userprevexperienceInE360Relations = relations(userprevexperienceInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [userprevexperienceInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_comuserid: one(usermasterInE360, {
		fields: [userprevexperienceInE360.comuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userprevexperienceInE360_comuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [userprevexperienceInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userprevexperienceInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [userprevexperienceInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "userprevexperienceInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const userskillattributesInE360Relations = relations(userskillattributesInE360, ({one}) => ({
	userskillInE360: one(userskillInE360, {
		fields: [userskillattributesInE360.userskillid],
		references: [userskillInE360.userskillid]
	}),
}));

export const weeklyholidaymasterInE360Relations = relations(weeklyholidaymasterInE360, ({one}) => ({
	companymasterInE360: one(companymasterInE360, {
		fields: [weeklyholidaymasterInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [weeklyholidaymasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [weeklyholidaymasterInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "weeklyholidaymasterInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	locationmasterInE360: one(locationmasterInE360, {
		fields: [weeklyholidaymasterInE360.locationid],
		references: [locationmasterInE360.comlocationid]
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [weeklyholidaymasterInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "weeklyholidaymasterInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const authGroupPermissionsInE360Relations = relations(authGroupPermissionsInE360, ({one}) => ({
	authPermissionInE360: one(authPermissionInE360, {
		fields: [authGroupPermissionsInE360.permissionId],
		references: [authPermissionInE360.id]
	}),
	authGroupInE360: one(authGroupInE360, {
		fields: [authGroupPermissionsInE360.groupId],
		references: [authGroupInE360.id]
	}),
}));

export const companycontactsInE360Relations = relations(companycontactsInE360, ({one}) => ({
	companymasterInE360: one(companymasterInE360, {
		fields: [companycontactsInE360.companyid],
		references: [companymasterInE360.companyid]
	}),
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [companycontactsInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [companycontactsInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "companycontactsInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [companycontactsInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "companycontactsInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const datlanguageInE360Relations = relations(datlanguageInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [datlanguageInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	usermasterInE360_createdcomuserid: one(usermasterInE360, {
		fields: [datlanguageInE360.createdcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datlanguageInE360_createdcomuserid_usermasterInE360_comuserid"
	}),
	usermasterInE360_modifiedcomuserid: one(usermasterInE360, {
		fields: [datlanguageInE360.modifiedcomuserid],
		references: [usermasterInE360.comuserid],
		relationName: "datlanguageInE360_modifiedcomuserid_usermasterInE360_comuserid"
	}),
}));

export const datreportmasterInE360Relations = relations(datreportmasterInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [datreportmasterInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
	datmenusInE360: one(datmenusInE360, {
		fields: [datreportmasterInE360.datmenuid],
		references: [datmenusInE360.datmenuid]
	}),
}));

export const documentserialnoInE360Relations = relations(documentserialnoInE360, ({one}) => ({
	documentserialnosettingInE360: one(documentserialnosettingInE360, {
		fields: [documentserialnoInE360.documentserialnosettingid],
		references: [documentserialnosettingInE360.documentserialnosettingid]
	}),
}));

export const documentserialnosettingInE360Relations = relations(documentserialnosettingInE360, ({many}) => ({
	documentserialnoInE360s: many(documentserialnoInE360),
}));

export const profitablityconfigurationInE360Relations = relations(profitablityconfigurationInE360, ({one}) => ({
	tenantmasterInE360: one(tenantmasterInE360, {
		fields: [profitablityconfigurationInE360.comtenantid],
		references: [tenantmasterInE360.comtenantid]
	}),
}));