/**
 * services.ejs.php
 * Services
 * v0.0.1
 *
 * Author: Ernest Rodriguez
 *
 * GaiaEHR (Electronic Health Records) 2011
 *
 *
 * @namespace Services.getServices
 * @namespace Services.addService
 * @namespace Services.updateService
 */
Ext.define('App.view.administration.Medications', {
	extend   : 'App.classes.RenderPanel',
	id       : 'panelMedications',
	pageTitle: i18n['medications'],

	initComponent: function() {
		var me = this;
		me.query = '';

		me.storeMedications = Ext.create('App.store.administration.Medications');

		me.medicationsGrid = Ext.create('App.classes.GridPanel', {
			region : 'center',
			store  : me.storeMedications,
			columns: [
				{
					width    : 70,
					header   : i18n['number'],
					dataIndex: 'PRODUCTNDC',
					sortable : true
				},
				{
					width    : 80,
					header   : i18n['name'],
					dataIndex: 'PROPRIETARYNAME',
					sortable : true
				},
				{
					width    : 200,
					header   : i18n['active_component'],
					dataIndex: 'NONPROPRIETARYNAME',
					sortable : true
				},
				{
					width    : 175,
					header   : i18n['dosage'],
					dataIndex: 'DOSAGEFORMNAME',
					sortable : true
				},
				{
					width    : 45,
					header   : i18n['number'],
					dataIndex: 'ACTIVE_NUMERATOR_STRENGTH',
					sortable : true
				},
				{
					flex     : 1,
					header   : i18n['unit'],
					dataIndex: 'ACTIVE_INGRED_UNIT',
					sortable : true
				}
			],
			plugins: Ext.create('App.classes.grid.RowFormEditing', {
				autoCancel  : false,
				errorSummary: false,
				clicksToEdit: 1,
				enableRemove:true,
				formItems   : [
					{

						title  : 'general',
						xtype  : 'container',
						padding: 10,
						layout : 'vbox',
						items  : [
							{
								/**
								 * Line one
								 */
								xtype   : 'fieldcontainer',
								layout  : 'hbox',
								defaults: { margin: '0 10 5 0' },
								items   : [
									{
										xtype     : 'textfield',
										fieldLabel: i18n['name'],
										width     : 150,
										labelWidth: 50,
										name      : 'PROPRIETARYNAME'


									},
									{
										xtype     : 'textfield',
										fieldLabel: i18n['active_component'],
										width     : 350,
										labelWidth: 125,
										name      : 'NONPROPRIETARYNAME'

									},

									{
										xtype     : 'textfield',
										fieldLabel: i18n['dosage'],
										width     : 200,
										labelWidth: 50,
										name      : 'DOSAGEFORMNAME'

									}
								]

							},
							{
								/**
								 * Line two
								 */
								xtype   : 'fieldcontainer',
								layout  : 'hbox',
								defaults: { margin: '0 10 5 0' },
								items   : [
									{
										xtype     : 'textfield',
										fieldLabel: i18n['code'],
										labelWidth: 50,
										width     : 150,
										name      : 'PRODUCTNDC'


									},
									{
										xtype     : 'textfield',
										fieldLabel: i18n['dosis'],
										margin    : '0 0 5 0',
										value     : 0,
										minValue  : 0,
										width     : 275,
										labelWidth: 125,
										name      : 'ACTIVE_NUMERATOR_STRENGTH'

									},
									{
										xtype: 'textfield',
										name : 'ACTIVE_INGRED_UNIT',
										width: 75

									}
								]

							}

						]


					}
				]

			}),
			tbar   : Ext.create('Ext.PagingToolbar', {
				store      : me.storeMedications,
				displayInfo: true,
				emptyMsg   : i18n['no_office_notes_to_display'],
				plugins    : Ext.create('Ext.ux.SlidingPager', {}),
				items:[
					'-',
					{
					text:'Add New',
					scope:me,
					handler:me.onAddMedication
					},'-',
					{
					xtype          : 'textfield',
					emptyText      : i18n['search'],
					enableKeyEvents: true,
					itemId         : 'query',
					listeners      : {
						scope : me,
						keyup : me.onSearchMedications,
						buffer: 500
								}
					},'-',
					{
						text: i18n['reset'],
						scope:me,
						handler:me.onFieldReset
					}
				]
			})


		});
		me.pageBody = [ me.medicationsGrid ];
		me.callParent(arguments);
	}, // end of initComponent

	onFieldReset: function(){


	},

	onAddMedication: function() {
		this.medicationsGrid.editingPlugin.cancelEdit();

		this.storeMedications.insert(0,{});
		this.medicationsGrid.editingPlugin.startEdit(0,0);

	},

	onSearchMedications: function(field) {
		var me = this,
			store = me.storeMedications;

		me.query = field.getValue();

		store.proxy.extraParams = {query: me.query};
		store.load();
	},




	/**
	 * This function is called from MitosAPP.js when
	 * this panel is selected in the navigation panel.
	 * place inside this function all the functions you want
	 * to call every this panel becomes active
	 */
	onActive: function() {
		this.medicationsGrid.down('toolbar').getComponent('query').reset();
		this.storeMedications.proxy.extraParams = {};
		this.storeMedications.load();

	}
}); //ens servicesPage class