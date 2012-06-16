<?php
$API = array(
    /**
    * Encounter Functions
    */
    'Encounter'=>array(
        'methods'=>array(
            'checkOpenEncounters'=>array(
               'len'=>0
            ),
            'getEncounters'=>array(
               'len'=>1
            ),
            'getEncounter'=>array(
               'len'=>1
            ),
            'updateEncounter'=>array(
               'len'=>1
            ),
            'getVitals'=>array(
               'len'=>1
            ),
            'addVitals'=>array(
               'len'=>1
            ),
            'updateVitals'=>array(
               'len'=>1
            ),
            'createEncounter'=>array(
                'len'=>1
            ),
            'updateSoapById'=>array(
                'len'=>1
            ),
            'getEncounterIcdxCodes'=>array(
                'len'=>1
            ),
            'updateEncounterIcdxCodes'=>array(
                'len'=>1
            ),
            'updateReviewOfSystemsChecksById'=>array(
                'len'=>1
            ),
            'updateReviewOfSystemsById'=>array(
                'len'=>1
            ),
            'updateDictationById'=>array(
                'len'=>1
            ),
            'getProgressNoteByEid'=>array(
                'len'=>1
            ),
            'closeEncounter'=>array(
               'len'=>1
            ),
            'getEncounterEventHistory'=>array(
               'len'=>1
            ),
            'getEncounterCodes'=>array(
               'len'=>1
            )
        )
    ),
	'VectorGraph'=>array(
		'methods'=>array(
			'getGraphData'=>array(
				'len'=>1
			)
		)
	),
    /**
    * Calendar Functions
    */
    'Calendar'=>array(
        'methods'=>array(
            'getCalendars'=>array(
               'len'=>0
            ),
            'getEvents'=>array(
               'len'=>1
            ),
            'addEvent'=>array(
               'len'=>1
            ),
            'updateEvent'=>array(
               'len'=>1
            ),
            'deleteEvent'=>array(
               'len'=>1
            )
        )
    ),
    /**
    * Messages Functions
    */
    'Messages'=>array(
        'methods'=>array(
            'getMessages'=>array(
               'len'=>1
            ),
            'deleteMessage'=>array(
                'len'=>1
            ),
            'sendNewMessage'=>array(
                'len'=>1
            ),
            'replyMessage'=>array(
                'len'=>1
            ),
            'updateMessage'=>array(
                'len'=>1
            )
        ),

    ),/**
    * Fees Functions
    */
    'Fees'=>array(
        'methods'=>array(
            'getFilterEncountersBillingData'=>array(
               'len'=>1
            ),
            'getEncountersByPayment'=>array(
               'len'=>1
            ),
            'addPayment'=>array(
               'len'=>1
            ),
            'getPatientBalance'=>array(
               'len'=>1
            )
        ),

    ),
    /**
    * Facilities Functions
    */
    'Facilities'=>array(
        'methods'=>array(
            'getFacilities'=>array(
               'len'=>1
            ),
            'addFacility'=>array(
                'len'=>1
            ),
            'updateFacility'=>array(
                'len'=>1
            ),
            'deleteFacility'=>array(
                'len'=>1
            )
        ),

    ),
    'DocumentHandler'=>array(
        'methods'=>array(
            'uploadDocument'=>array(
	            'formHandler'=>true,
	            'len'=>1
            ),
            'getDocumentsTemplates'=>array(
	            'len'=>1
            ),
            'addDocumentsTemplates'=>array(
	            'len'=>1
            ),
            'updateDocumentsTemplates'=>array(
	            'len'=>1
            ),
            'getHeadersAndFootersTemplates'=>array(
	            'len'=>1
            ),
            'getDefaultDocumentsTemplates'=>array(
	            'len'=>1
            ),
            'createDocument'=>array(
	            'len'=>1
            ),
            'createDocumentDoctorsNote'=>array(
	            'len'=>1
            )

        )
    ),
    /**
    * Medical Functions
    */
    'Medical'=>array(
        'methods'=>array(
            'getImmunizationsList'=>array(
               'len'=>0
            ),
            'getPatientImmunizations'=>array(
               'len'=>1
            ),
            'addPatientImmunization'=>array(
               'len'=>1
            ),
            'updatePatientImmunization'=>array(
               'len'=>1
            ),
            'getImmunizationLiveSearch'=>array(
               'len'=>1
            ),
            'getPatientAllergies'=>array(
               'len'=>1
            ),
            'addPatientAllergies'=>array(
               'len'=>1
            ),
            'updatePatientAllergies'=>array(
               'len'=>1
            ),
            'getMedicalIssues'=>array(
               'len'=>1
            ),
            'addMedicalIssues'=>array(
               'len'=>1
            ),
            'updateMedicalIssues'=>array(
               'len'=>1
            ),
            'getPatientSurgery'=>array(
               'len'=>1
            ),
            'addPatientSurgery'=>array(
               'len'=>1
            ),
            'updatePatientSurgery'=>array(
               'len'=>1
            ),
            'getPatientDental'=>array(
               'len'=>1
            ),
            'addPatientDental'=>array(
               'len'=>1
            ),
            'updatePatientDental'=>array(
               'len'=>1
            ),
            'getPatientMedications'=>array(
               'len'=>1
            ),
            'addPatientMedications'=>array(
               'len'=>1
            ),
            'updatePatientMedications'=>array(
               'len'=>1
            ),
            'getMedicationLiveSearch'=>array(
               'len'=>1
            ),
            'getPatientLabsResults'=>array(
               'len'=>1
            ),
            'addPatientLabsResult'=>array(
               'len'=>1
            ),
            'updatePatientLabsResult'=>array(
               'len'=>1
            ),
            'deletePatientLabsResult'=>array(
               'len'=>1
            ),
            'signPatientLabsResultById'=>array(
               'len'=>1
            )
        ),

    ),
    /**
    /**
    * AddressBook Functions
    */
    'AddressBook'=>array(
        'methods'=>array(
            'getAddresses'=>array(
               'len'=>1
            ),
            'addContact'=>array(
                'len'=>1
            ),
            'updateAddress'=>array(
                'len'=>1
            )
        ),

    ),
    /**
    * Practice Functions
    */
    'Practice'=>array(
        'methods'=>array(
            'getPharmacies'=>array(
               'len'=>0
            ),
            'addPharmacy'=>array(
                'len'=>1
            ),
            'updatePharmacy'=>array(
                'len'=>1
            ),
            'getInsurances'=>array(
                'len'=>0
            ),
            'addInsurance'=>array(
                'len'=>1
            ),
            'updateInsurance'=>array(
                'len'=>1
            ),
            'getInsuranceNumbers'=>array(
                'len'=>1
            ),
            'getX12Partners'=>array(
                'len'=>1
            )
        ),

    ),
    /**
    * Globals Functions
    */
    'Globals'=>array(
        'methods'=>array(
            'getGlobals'=>array(
               'len'=>0
            ),
            'updateGlobals'=>array(
                'len'=>1
            )
        ),

    ),
    /**
    * Lists Functions
    */
    'Lists'=>array(
        'methods'=>array(
            'getOptions'=>array(
               'len'=>1
            ),
            'addOption'=>array(
                'len'=>1
            ),
            'updateOption'=>array(
                'len'=>1
            ),
            'deleteOption'=>array(
                'len'=>1
            ),
            'sortOptions'=>array(
                'len'=>1
            ),
            'getLists'=>array(
                'len'=>1
            ),
            'addList'=>array(
                'len'=>1
            ),
            'updateList'=>array(
                'len'=>1
            ),
            'deleteList'=>array(
                'len'=>1
            )
        ),

    ),
    /**
    * Office Notes Functions
    */
    'OfficeNotes'=>array(
        'methods'=>array(
           'getOfficeNotes'=>array(
               'len'=>1
           ),
           'addOfficeNotes'=>array(
               'len'=>1
           ),
           'updateOfficeNotes'=>array(
               'len'=>1
           )
        )
    ),
    /**
    * Services Functions
    */
    'Services'=>array(
        'methods'=>array(
           'getServices'=>array(
               'len'=>1
           ),
            'addService'=>array(
               'len'=>1
           ),
            'updateService'=>array(
               'len'=>1
           ),
            'liveCodeSearch'=>array(
               'len'=>1
           ),
            'getCptCodes'=>array(
               'len'=>1
            ),
            'addCptCode'=>array(
               'len'=>1
            ),
            'updateCptCode'=>array(
               'len'=>1
            ),
            'deleteCptCode'=>array(
               'len'=>1
            ),
            'getActiveProblems'=>array(
               'len'=>1
            ),
            'addActiveProblems'=>array(
               'len'=>1
            ),
            'removeActiveProblems'=>array(
               'len'=>1
            ),
            'getMedications'=>array(
               'len'=>1
            ),
            'addMedications'=>array(
               'len'=>1
            ),
            'removeMedications'=>array(
               'len'=>1
            ),
            'updateMedications'=>array(
               'len'=>1
            ),
            'getAllLabObservations'=>array(
               'len'=>1
            ),
            'getLabObservations'=>array(
               'len'=>1
            ),
            'addLabObservation'=>array(
               'len'=>1
            ),
            'updateLabObservation'=>array(
               'len'=>1
            ),
            'removeLabObservation'=>array(
               'len'=>1
            ),
            'getActiveLaboratoryTypes'=>array(
               'len'=>0
            )
        )
    ),
    /**
    * Preventive Care Functions
    */
    'PreventiveCare'=>array(
        'methods'=>array(
           'getServices'=>array(
               'len'=>1
           ),
            'addService'=>array(
               'len'=>1
           ),
            'updateService'=>array(
               'len'=>1
           ),
            'liveCodeSearch'=>array(
               'len'=>1
           ),
            'getCptCodes'=>array(
               'len'=>1
            ),
            'addCptCode'=>array(
               'len'=>1
            ),
            'updateCptCode'=>array(
               'len'=>1
            ),
            'deleteCptCode'=>array(
               'len'=>1
            ),
            'getActiveProblems'=>array(
               'len'=>1
            ),
            'addActiveProblems'=>array(
               'len'=>1
            ),
            'removeActiveProblems'=>array(
               'len'=>1
            ),
            'getMedications'=>array(
               'len'=>1
            ),
            'addMedications'=>array(
               'len'=>1
            ),
            'removeMedications'=>array(
               'len'=>1
            ),
            'updateMedications'=>array(
               'len'=>1
            ),
            'getRelations'=>array(
                'len'=>1
            ),
            'addRelations'=>array(
                'len'=>1
            ),
            'removeRelations'=>array(
                'len'=>1
            ),
            'getImmunizationsCheck'=>array(
                'len'=>1
            ),
            'getPreventiveCareCheck'=>array(
                'len'=>1
            ),
            'activePreventiveCareAlert'=>array(
                'len'=>1
            ),
            'addPreventivePatientDismiss'=>array(
                'len'=>1
            ),
            'getGuideLinesByCategory'=>array(
                'len'=>1
            ),
            'addGuideLine'=>array(
                'len'=>1
            ),
            'updateGuideLine'=>array(
                'len'=>1
            ),
            'getGuideLineActiveProblems'=>array(
                'len'=>1
            ),
            'addGuideLineActiveProblems'=>array(
                'len'=>1
            ),
            'removeGuideLineActiveProblems'=>array(
                'len'=>1
            ),
            'getGuideLineMedications'=>array(
                'len'=>1
            ),
            'addGuideLineMedications'=>array(
                'len'=>1
            ),
            'removeGuideLineMedications'=>array(
                'len'=>1
            )
        )
    ),
	/**
     * Form layout Engine Functions
     */
    'FormLayoutEngine'=>array(
        'methods'=>array(
            'getFields'=>array(
                'len'=>1
            )
        )
    ),
	/**
     * Pool Area Functions
     */
    'PoolArea'=>array(
        'methods'=>array(
            'getPatientsArrivalLog'=>array(
                'len'=>1
            ),
            'addPatientArrivalLog'=>array(
                'len'=>1
            ),
            'updatePatientArrivalLog'=>array(
                'len'=>1
            ),
            'removePatientArrivalLog'=>array(
                'len'=>1
            ),
            'getPoolAreaPatients'=>array(
                'len'=>1
            ),
            'sendPatientToPoolArea'=>array(
                'len'=>1
            ),
            'getActivePoolAreas'=>array(
                'len'=>0
            )
        )
    ),
    /**
     * Form layout Builder Functions
     */
    'FormLayoutBuilder'=>array(
        'methods'=>array(
            'getFormDataTable'=>array(
                'len'=>1
            ),
            'addField'=>array(
                'len'=>1
            ),
            'updateField'=>array(
                'len'=>1
            ),
            'deleteField'=>array(
                'len'=>1
            ),
            'sortFields'=>array(
                'len'=>1
            ),
            'getForms'=>array(
                'len'=>0
            ),
            'getParentFields'=>array(
                'len'=>1
            ),
            'getFormFieldsTree'=>array(
                'len'=>1
            )
        )
    ),

    /**
     * Patient Functions
     */
    'Patient'=>array(
        'methods'=>array(
            'createNewPatient'=>array(
                'len'=>1
            ),
            'patientLiveSearch'=>array(
                'len'=>1
            ),
            'currPatientSet'=>array(
            	'len'=>1
            ),
            'currPatientUnset'=>array(
            	'len'=>0
            ),
            'getPatientDemographicData'=>array(
            	'len'=>1
            ),
            'updatePatientDemographicData'=>array(
            	'len'=>1
            ),
            'getPatientsByPoolArea'=>array(
            	'len'=>1
            ),
            'addNote'=>array(
            	'len'=>1
            ),
            'getPatientReminders'=>array(
            	'len'=>1
            ),
            'getPatientNotes'=>array(
            	'len'=>1
            ),
            'getPatientDocuments'=>array(
            	'len'=>1
            ),
            'getPatientDocumentsByEid'=>array(
            	'len'=>1
            )

        )
    ),

    /**
     * User Functions
     */
    'User'=>array(
        'methods'=>array(
            'getUsers'=>array(
                'len'=>1
            ),
            'getCurrentUserData'=>array(
                'len'=>0
            ),
            'addUser'=>array(
            	'len'=>1
            ),
            'updateUser'=>array(
            	'len'=>1
            ),
            'chechPasswordHistory'=>array(
            	'len'=>1
            ),
            'changeMyPassword'=>array(
            	'len'=>1
            ),
            'updateMyAccount'=>array(
            	'len'=>1
            ),
            'verifyUserPass'=>array(
            	'len'=>1
            ),
            'getProviders'=>array(
            	'len'=>1
            )

        )
    ),

    /**
     * Authorization Procedures Functions
     */
    'authProcedures'=>array(
        'methods'=>array(
            'login'=>array(
                'len'=>1
            ),
            'ckAuth'=>array(
                'len'=>0
            ),
            'unAuth'=>array(
                'len'=>0
            ),
            'getSites'=>array(
                'len'=>0
            )

        )
    ),

    /**
     * Comobo Boxes Data Functions
     */
    'CombosData'=>array(
        'methods'=>array(
            'getOptionsByListId'=>array(
                'len'=>1
            ),
            'getActivePharmacies'=>array(
                'len'=>0
            ),
            'getUsers'=>array(
                'len'=>0
            ),
            'getLists'=>array(
                'len'=>0
            ),
            'getFacilities'=>array(
                'len'=>0
            ),
            'getRoles'=>array(
                'len'=>0
            ),
            'getCodeTypes'=>array(
                'len'=>0
            ),
            'getCalendarCategories'=>array(
                'len'=>0
            ),
            'getLanguages'=>array(
                'len'=>0
            ),
            'getAuthorizations'=>array(
                'len'=>0
            ),
            'getSeeAuthorizations'=>array(
                'len'=>0
            ),
            'getTaxIds'=>array(
                'len'=>0
            ),
            'getFiledXtypes'=>array(
                'len'=>0
            ),
            'getPosCodes'=>array(
                'len'=>0
            ),
            'getAllergieTypes'=>array(
                'len'=>0
            ),
            'getAllergiesByType'=>array(
                'len'=>1
            ),
            'getTemplatesTypes'=>array(
                'len'=>1
            )
        )
    ),
    /**
     * Navigation Function
     */
    'Navigation'=>array(
        'methods'=>array(
            'getNavigation'=>array(
                'len'=>0
            )
        )
    ),

    /**
     * Navigation Function
     */
    'Roles'=>array(
        'methods'=>array(
            'getRoleForm'=>array(
                'len'=>1
            ),
            'getRolesData'=>array(
                'len'=>0
            ),
            'saveRolesData'=>array(
                'len'=>1
            )
        )
    ),

    /**
     * Navigation Function
     */
    'ACL'=>array(
        'methods'=>array(
            'hasPermission'=>array(
                'len'=>1
            ),
        )
    ),

    /**
     * Navigation Function
     */
    'Logs'=>array(
        'methods'=>array(
            'getLogs'=>array(
                'len'=>1
            ),
        )
    ),

    'Test'=>array(
        'methods'=>array(
            'getRec'=>array(
                'len'=>0
            ),
            'getRec2'=>array(
                'len'=>0
            ),
            'addRec'=>array(
                'len'=>1
            ),
        )
    ),


);