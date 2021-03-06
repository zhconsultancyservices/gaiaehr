//******************************************************************************
// new.ejs.php
// New payments Forms
// v0.0.1
// 
// Author: Ernest Rodriguez
// Modified: 
// 
// GaiaEHR (Electronic Health Records) 2011
//******************************************************************************
Ext.define('App.view.fees.Payments', {
    extend:'App.classes.RenderPanel',
    id:'panelPayments',
    pageTitle: i18n['payments'],
    initComponent:function () {
        var me = this;

        me.encountersPaymentsStore = Ext.create('App.store.fees.EncountersPayments');

		/*
		 * Search Panel Object
		 */
	    me.searchPanel = Ext.create('Ext.panel.Panel',{
		    title: i18n['search'],
		    layout:'border',
		    items:[
			    {
			        xtype:'form',
                    height:145,
				    region:'north',
                    bodyPadding:10,
                    bodyStyle:'background-color:transparent',
                    margin:'0 0 5 0',
                    items:[
	                    {
                            xtype:'fieldcontainer',
                            layout:'hbox',
                            items:[
                                {
                                    fieldLabel: i18n['paying_entity'],
                                    xtype:'mitos.payingentitycombo',
                                    labelWidth:95,
                                    width:230
                                },
                                {
                                    xtype:'patienlivetsearch',
                                    fieldLabel: i18n['from'],
                                    hideLabel:false,
                                    itemId:'patientFrom',
                                    name:'from',
                                    anchor:null,
                                    labelWidth:42,
                                    width:470,
                                    margin:'0 0 0 25'
                                },
                                {
                                    xtype:'textfield',
                                    fieldLabel: i18n['no'],
                                    name:'transaction_number',
                                    labelWidth:45,
                                    width:230,
                                    labelAlign:'right',
                                    margin:'0 0 0 25',
                                    fieldStyle:'text-align: right;'
                                }

                            ]
                        },
                        {
                            xtype:'fieldcontainer',
                            layout:'hbox',
                            items:[
                                {
                                    fieldLabel: i18n['payment_method'],
                                    xtype:'mitos.paymentmethodcombo',
                                    labelWidth:95,
                                    width:230
                                },
                                {
                                    xtype:'mitos.billingfacilitiescombo',
                                    fieldLabel: i18n['pay_to'],
                                    labelWidth:42,
                                    width:470,
                                    margin:'0 0 0 25'
                                },
                                {
                                    xtype:'mitos.currency',
                                    fieldLabel: i18n['amount'],
                                    name:'amount',
                                    labelWidth:45,
                                    width:230,
                                    labelAlign:'right',
                                    margin:'0 0 0 25',
                                    enableKeyEvents:true
                                }
                            ]
                        },
                        {
                            xtype:'fieldcontainer',
                            layout:'hbox',
                            items:[
                                {
                                    fieldLabel: i18n['from'],
                                    xtype:'datefield',
                                    labelWidth:95,
                                    width:230
                                },
                                {
                                    fieldLabel: i18n['to'],
                                    xtype:'datefield',
                                    margin:'0 0 0 25',
                                    labelWidth:42,
                                    width:230
                                }
                            ]
                        }
                    ],
                    buttons:[
                        {
                            text: i18n['search']
                        },
                        '-',
                        {
                            text: i18n['reset']
                        },
                        '->',
                        {
                            text: i18n['add_payment'],
                            scope: me,
                            handler:me.onAddPaymentClick
                        }
                    ]
                },
			    {
				    xtype:'grid',
				    region:'center',
	                store:me.encountersPaymentsStore,
	                columns:[
	                    {
	                        header: i18n['service_date']
	                    },
	                    {
	                        header: i18n['patient_name']
	                    },
	                    {
	                        header: i18n['insurance']
	                    },
	                    {
	                        header: i18n['billing_notes'],
	                        flex:1
	                    },
	                    {
	                        header: i18n['balance_due']
	                    }
	                ]
			    }

		    ]
	    });


		/*
		 * Detail Panel Object
		 */
	    me.detailPanel = Ext.create('Ext.panel.Panel',{
		    title: i18n['detail'],
		    layout:'border',
		    items:[
			    {
			        xtype:'form',
                    height:145,
				    region:'north',
                    bodyPadding:10,
                    bodyStyle:'background-color:transparent',
                    margin:'0 0 5 0',
                    items:[
	                    {
                            xtype:'fieldcontainer',
                            layout:'hbox',
                            items:[
                                {
                                    fieldLabel: i18n['paying_entity'],
                                    xtype:'mitos.payingentitycombo',
                                    labelWidth:95,
                                    width:230
                                },
                                {
                                    xtype:'patienlivetsearch',
                                    fieldLabel: i18n['from'],
                                    hideLabel:false,
                                    itemId:'patientFrom',
                                    name:'from',
                                    anchor:null,
                                    labelWidth:42,
                                    width:470,
                                    margin:'0 0 0 25'
                                },
                                {
                                    xtype:'textfield',
                                    fieldLabel: i18n['no'],
                                    name:'transaction_number',
                                    labelWidth:45,
                                    width:230,
                                    labelAlign:'right',
                                    margin:'0 0 0 25',
                                    fieldStyle:'text-align: right;'
                                }

                            ]
                        },
                        {
                            xtype:'fieldcontainer',
                            layout:'hbox',
                            items:[
                                {
                                    fieldLabel: i18n['payment_method'],
                                    xtype:'mitos.paymentmethodcombo',
                                    labelWidth:95,
                                    width:230
                                },
                                {
                                    xtype:'mitos.billingfacilitiescombo',
                                    fieldLabel: i18n['pay_to'],
                                    labelWidth:42,
                                    width:470,
                                    margin:'0 0 0 25'
                                },
                                {
                                    xtype:'mitos.currency',
                                    fieldLabel: i18n['amount'],
                                    name:'amount',
                                    labelWidth:45,
                                    width:230,
                                    labelAlign:'right',
                                    margin:'0 0 0 25',
                                    enableKeyEvents:true
                                }
                            ]
                        },
                        {
                            xtype:'fieldcontainer',
                            layout:'hbox',
                            items:[
                                {
                                    fieldLabel: i18n['from'],
                                    xtype:'datefield',
                                    labelWidth:95,
                                    width:230
                                },
                                {
                                    fieldLabel: i18n['to'],
                                    xtype:'datefield',
                                    margin:'0 0 0 25',
                                    labelWidth:42,
                                    width:230
                                }
                            ]
                        }
                    ],
				    buttons:[
			            {
			                text: i18n['save']
			            },
			            '-',
			            {
			                text: i18n['reset']
			            },
			            '->',
			            {
			                text: i18n['add_payment'],
                            scope: me,
                            handler:me.onAddPaymentClick

			            }
			        ]
                },
			    {
				    xtype:'grid',
				    region:'center',
	                //store:me.encountersPaymentsStore,
	                plugins: Ext.create('App.classes.grid.RowFormEditing', {
                        autoCancel:false,
                        errorSummary:false,
                        clicksToEdit:1,
                        enableRemove:true,
                        listeners:{
                            scope:me,
                            beforeedit:me.beforeCptEdit
                        }
                    }),
	                columns:[
	                    {
	                        header: i18n['service_date']
	                    },
	                    {
	                        header: i18n['patient_name']
	                    },
	                    {
	                        header: i18n['insurance']
	                    },
	                    {
	                        header: i18n['billing_notes'],
	                        flex:1
	                    },
	                    {
	                        header: i18n['balance_due']
	                    }
	                ]
			    }

		    ]
	    });



	    me.tapPanel = Ext.create('Ext.tab.Panel',{
		    layout:'fit',
            items:[ me.searchPanel, me.detailPanel ]
        });

        me.pageBody = [ me.tapPanel ];
        me.callParent(arguments);
    },

    onAddPaymentClick:function() {
        app.onPaymentEntryWindow();
    },

    beforeCptEdit:function (editor, e) {
        this.addCptFields(editor.editor, e.record.data)
    },


    addCptFields:function (editor, cpts) {

        editor.removeAll();

        var testData = this.testData();
        for(var i=0; i < testData.length; i++ ){
            editor.add({
                xtype:'fieldcontainer',
                layout:'hbox',
                items:[
                    {
                        xtype:'textfield',
                        width:100,
                        name:'code',
                        readOnly:true,
                        margin:'0 5 0 10'
                    },
                    {
                        xtype:'textfield',
                        name:'copay',
                        readOnly:true,
                        width:400,
                        margin:'0 5 0 5'
                    },
                    {
                        xtype:'mitos.currency',
                        name:'remaining',
                        readOnly:true,
                        width:100,
                        margin:'0 5 0 5'
                    },
                    {
                        xtype:'mitos.currency',
                        name:'allowed',
                        readOnly:true,
                        width:100,
                        margin:'0 5 0 5'
                    },
                    {
                        xtype:'mitos.currency',
                        name:'payment',
                        readOnly:true,
                        width:100,
                        margin:'0 5 0 5'
                    },
                    {
                        xtype:'mitos.currency',
                        name:'deductible',
                        readOnly:true,
                        width:100,
                        margin:'0 5 0 5'
                    },
                    {
                        xtype:'mitos.currency',
                        name:'takeback',
                        readOnly:true,
                        width:100,
                        margin:'0 5 0 5'
                    },
                    {
                        xtype:'checkbox',
                        name:'takeback',
                        readOnly:true,
                        width:50,
                        margin:'0 5 0 5'
                    },
                    {
                        xtype:'textfield',
                        name:'takeback',
                        readOnly:true,
                        width:100,
                        margin:'0 5 0 5'
                    }
                ]
            });
        }
    },

    testData:function () {
        var data = [],
            i;

        floor = Math.floor((Math.random() * 6) + 1);

        for (i = 0; i < floor; i++) {
            data.push({
                data1:Math.floor(Math.max((Math.random() * 100), floor)),
                data2:Math.floor(Math.max((Math.random() * 100), floor)),
                data3:Math.floor(Math.max((Math.random() * 100), floor)),
                data4:Math.floor(Math.max((Math.random() * 100), floor)),
                data5:Math.floor(Math.max((Math.random() * 100), floor)),
                data6:Math.floor(Math.max((Math.random() * 100), floor)),
                data7:Math.floor(Math.max((Math.random() * 100), floor)),
                data8:Math.floor(Math.max((Math.random() * 100), floor)),
                data9:Math.floor(Math.max((Math.random() * 100), floor))
            });
        }
        return data;
    },


    onBtnClick:function (btn) {
        var me = this;

        if (btn.action == 'search') {
            me.forms.getLayout().setActiveItem(0);
        } else if (btn.action == 'details') {
            me.forms.getLayout().setActiveItem(1);
        } else if (btn.action == 'new') {
            me.window.show();
        }
    },

    /**
     * This function is called from MitosAPP.js when
     * this panel is selected in the navigation panel.
     * place inside this function all the functions you want
     * to call every this panel becomes active
     */
    onActive:function (callback) {
        this.encountersPaymentsStore.load();
        callback(true);
    }

}); //end Payments class

