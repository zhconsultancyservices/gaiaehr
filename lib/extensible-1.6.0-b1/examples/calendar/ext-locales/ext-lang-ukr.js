/*!
 * Extensible 1.6.0-b1
 * Copyright(c) 2010-2012 Extensible, LLC
 * licensing@ext.ensible.com
 * http://ext.ensible.com
 */
/**
 * Ukrainian translations for ExtJS (UTF-8 encoding)
 *
 * Original translation by zlatko
 * 3 October 2007
 *
 * Updated by dev.ashevchuk@gmail.com
 * 01.09.2009
 */
Ext.onReady(function(){
    var cm = Ext.ClassManager, 
        exists = Ext.Function.bind(cm.get, cm);

    if(Ext.Updater){
        Ext.Updater.defaults.indicatorText = '<div class="loading-indicator">Завантаження...</div>';
    }
    if(exists('Ext.view.View')){
       Ext.view.View.prototype.emptyText = "<Порожньо>";
    }

    if(exists('Ext.grid.Panel')){
       Ext.grid.Panel.prototype.ddText = "{0} обраних рядків";
    }

    if(Ext.TabPanelItem){
       Ext.TabPanelItem.prototype.closeText = "Закрити цю вкладку";
    }

    if(exists('Ext.form.field.Base')){
       Ext.form.field.Base.prototype.invalidText = "Хибне значення";
    }

    if(Ext.LoadMask){
       Ext.LoadMask.prototype.msg = "Завантаження...";
    }

    if(Ext.Date) {
        Ext.Date.monthNames = [
           "Січень",
           "Лютий",
           "Березень",
           "Квітень",
           "Травень",
           "Червень",
           "Липень",
           "Серпень",
           "Вересень",
           "Жовтень",
           "Листопад",
           "Грудень"
        ];

        Ext.Date.dayNames = [
           "Неділя",
           "Понеділок",
           "Вівторок",
           "Середа",
           "Четвер",
           "П’ятниця",
           "Субота"
        ];
    }

    if(Ext.MessageBox){
       Ext.MessageBox.buttonText = {
          ok     : "OK",
          cancel : "Відміна",
          yes    : "Так",
          no     : "Ні"
       };
    }

    if(exists('Ext.util.Format')){
        Ext.apply(Ext.util.Format, {
            thousandSeparator: '.',
            decimalSeparator: ',',
            currencySign: '\u20b4',  // Ukranian Hryvnia
            dateFormat: 'd.m.Y'
        });
    }

    if(exists('Ext.picker.Date')){
       Ext.apply(Ext.picker.Date.prototype, {
          todayText         : "Сьогодні",
          minText           : "Ця дата меньша за мінімальну допустиму дату",
          maxText           : "Ця дата більша за максимальну допустиму дату",
          disabledDaysText  : "",
          disabledDatesText : "",
          monthNames        : Ext.Date.monthNames,
          dayNames          : Ext.Date.dayNames,
          nextText          : 'Наступний місяць (Control+Вправо)',
          prevText          : 'Попередній місяць (Control+Вліво)',
          monthYearText     : 'Вибір місяця (Control+Вверх/Вниз для вибору року)',
          todayTip          : "{0} (Пробіл)",
          format            : "d.m.y",
          startDay          : 1
       });
    }

    if(exists('Ext.picker.Month')) {
      Ext.apply(Ext.picker.Month.prototype, {
          okText            : "&#160;OK&#160;",
          cancelText        : "Відміна"
      });
    }

    if(exists('Ext.toolbar.Paging')){
       Ext.apply(Ext.PagingToolbar.prototype, {
          beforePageText : "Сторінка",
          afterPageText  : "з {0}",
          firstText      : "Перша сторінка",
          prevText       : "Попередня сторінка",
          nextText       : "Наступна сторінка",
          lastText       : "Остання сторінка",
          refreshText    : "Освіжити",
          displayMsg     : "Відображення записів з {0} по {1}, всього {2}",
          emptyMsg       : 'Дані для відображення відсутні'
       });
    }

    if(exists('Ext.form.field.Text')){
       Ext.apply(Ext.form.field.Text.prototype, {
          minLengthText : "Мінімальна довжина цього поля {0}",
          maxLengthText : "Максимальна довжина цього поля {0}",
          blankText     : "Це поле є обов’язковим для заповнення",
          regexText     : "",
          emptyText     : null
       });
    }

    if(exists('Ext.form.field.Number')){
       Ext.apply(Ext.form.field.Number.prototype, {
          minText : "Значення у цьому полі не може бути меньше {0}",
          maxText : "Значення у цьому полі не може бути більше {0}",
          nanText : "{0} не є числом"
       });
    }

    if(exists('Ext.form.field.Date')){
       Ext.apply(Ext.form.field.Date.prototype, {
          disabledDaysText  : "Не доступно",
          disabledDatesText : "Не доступно",
          minText           : "Дата у цьому полі повинна бути більша {0}",
          maxText           : "Дата у цьому полі повинна бути меньша {0}",
          invalidText       : "{0} хибна дата - дата повинна бути вказана у форматі {1}",
          format            : "d.m.y"
       });
    }

    if(exists('Ext.form.field.ComboBox')){
       Ext.apply(Ext.form.field.ComboBox.prototype, {
          valueNotFoundText : undefined
       });
        Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
            loadingText       : "Завантаження..."
        });
    }

    if(exists('Ext.form.field.VTypes')){
       Ext.apply(Ext.form.field.VTypes, {
          emailText    : 'Це поле повинно містити адресу електронної пошти у форматі "user@example.com"',
          urlText      : 'Це поле повинно містити URL у форматі "http:/'+'/www.example.com"',
          alphaText    : 'Це поле повинно містити виключно латинські літери та символ підкреслення "_"',
          alphanumText : 'Це поле повинно містити виключно латинські літери, цифри та символ підкреслення "_"'
       });
    }

    if(exists('Ext.form.field.HtmlEditor')){
       Ext.apply(Ext.form.field.HtmlEditor.prototype, {
         createLinkText : 'Будь-ласка введіть адресу:',
         buttonTips : {
                bold : {
                   title: 'Напівжирний (Ctrl+B)',
                   text: 'Зробити напівжирним виділений текст.',
                   cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                italic : {
                   title: 'Курсив (Ctrl+I)',
                   text: 'Зробити курсивом виділений текст.',
                   cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                underline : {
                   title: 'Підкреслений (Ctrl+U)',
                   text: 'Зробити підкресленим виділений текст.',
                   cls: Ext.baseCSSPrefix + 'html-editor-tip'
               },
               increasefontsize : {
                   title: 'Збільшити розмір',
                   text: 'Збільшити розмір шрифта.',
                   cls: Ext.baseCSSPrefix + 'html-editor-tip'
               },
               decreasefontsize : {
                   title: 'Зменьшити розмір',
                   text: 'Зменьшити розмір шрифта.',
                   cls: Ext.baseCSSPrefix + 'html-editor-tip'
               },
               backcolor : {
                   title: 'Заливка',
                   text: 'Змінити колір фону для виділеного тексту або абзацу.',
                   cls: Ext.baseCSSPrefix + 'html-editor-tip'
               },
               forecolor : {
                   title: 'Колір тексту',
                   text: 'Змінити колір виділеного тексту або абзацу.',
                   cls: Ext.baseCSSPrefix + 'html-editor-tip'
               },
               justifyleft : {
                   title: 'Вирівняти текст по лівому полю',
                   text: 'Вирівнювання тексту по лівому полю.',
                   cls: Ext.baseCSSPrefix + 'html-editor-tip'
               },
               justifycenter : {
                   title: 'Вирівняти текст по центру',
                   text: 'Вирівнювання тексту по центру.',
                   cls: Ext.baseCSSPrefix + 'html-editor-tip'
               },
               justifyright : {
                   title: 'Вирівняти текст по правому полю',
                   text: 'Вирівнювання тексту по правому полю.',
                   cls: Ext.baseCSSPrefix + 'html-editor-tip'
               },
               insertunorderedlist : {
                   title: 'Маркери',
                   text: 'Почати маркований список.',
                   cls: Ext.baseCSSPrefix + 'html-editor-tip'
               },
               insertorderedlist : {
                   title: 'Нумерація',
                   text: 'Почати нумернований список.',
                   cls: Ext.baseCSSPrefix + 'html-editor-tip'
               },
               createlink : {
                   title: 'Вставити гіперпосилання',
                   text: 'Створення посилання із виділеного тексту.',
                   cls: Ext.baseCSSPrefix + 'html-editor-tip'
               },
               sourceedit : {
                   title: 'Джерельний код',
                   text: 'Режим редагування джерельного коду.',
                   cls: Ext.baseCSSPrefix + 'html-editor-tip'
               }
            }
       });
    }

    if(exists('Ext.grid.header.Container')){
       Ext.apply(Ext.grid.header.Container.prototype, {
          sortAscText  : "Сортувати по зростанню",
          sortDescText : "Сортувати по спаданню",
          lockText     : "Закріпити стовпець",
          unlockText   : "Відкріпити стовпець",
          columnsText  : "Стовпці"
       });
    }

    if(exists('Ext.grid.PropertyColumnModel')){
       Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
          nameText   : "Назва",
          valueText  : "Значення",
          dateFormat : "j.m.Y"
       });
    }

});