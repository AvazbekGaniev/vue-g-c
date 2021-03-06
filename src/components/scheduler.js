/*!
 * devextreme-vue
 * Version: 21.2.6
 * Build date: Tue Mar 01 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-vue
 */

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DxView = exports.DxScrolling = exports.DxResource = exports.DxEditing = exports.DxAppointmentDragging = exports.DxScheduler = void 0;
var scheduler_1 = __importDefault(require("devextreme/ui/scheduler"));
var index_1 = require("./core/index");
var index_2 = require("./core/index");
var DxScheduler = index_1.createComponent({
    props: {
        accessKey: String,
        adaptivityEnabled: Boolean,
        allDayExpr: String,
        appointmentCollectorTemplate: {},
        appointmentDragging: Object,
        appointmentTemplate: {},
        appointmentTooltipTemplate: {},
        cellDuration: Number,
        crossScrollingEnabled: Boolean,
        currentDate: {},
        currentView: String,
        customizeDateNavigatorText: Function,
        dataCellTemplate: {},
        dataSource: [Array, Object, String],
        dateCellTemplate: {},
        dateSerializationFormat: String,
        descriptionExpr: String,
        disabled: Boolean,
        dropDownAppointmentTemplate: {},
        editing: [Boolean, Object],
        elementAttr: Object,
        endDateExpr: String,
        endDateTimeZoneExpr: String,
        endDayHour: Number,
        firstDayOfWeek: {
            type: Number,
            validator: function (v) { return typeof (v) !== "number" || [
                0,
                1,
                2,
                3,
                4,
                5,
                6
            ].indexOf(v) !== -1; }
        },
        focusStateEnabled: Boolean,
        groupByDate: Boolean,
        groups: Array,
        height: [Function, Number, String],
        hint: String,
        indicatorUpdateInterval: Number,
        max: {},
        maxAppointmentsPerCell: [Number, String],
        min: {},
        noDataText: String,
        onAppointmentAdded: Function,
        onAppointmentAdding: Function,
        onAppointmentClick: Function,
        onAppointmentContextMenu: Function,
        onAppointmentDblClick: Function,
        onAppointmentDeleted: Function,
        onAppointmentDeleting: Function,
        onAppointmentFormOpening: Function,
        onAppointmentRendered: Function,
        onAppointmentUpdated: Function,
        onAppointmentUpdating: Function,
        onCellClick: Function,
        onCellContextMenu: Function,
        onContentReady: Function,
        onDisposing: Function,
        onInitialized: Function,
        onOptionChanged: Function,
        recurrenceEditMode: String,
        recurrenceExceptionExpr: String,
        recurrenceRuleExpr: String,
        remoteFiltering: Boolean,
        resourceCellTemplate: {},
        resources: Array,
        rtlEnabled: Boolean,
        scrolling: Object,
        selectedCellData: Array,
        shadeUntilCurrentTime: Boolean,
        showAllDayPanel: Boolean,
        showCurrentTimeIndicator: Boolean,
        startDateExpr: String,
        startDateTimeZoneExpr: String,
        startDayHour: Number,
        tabIndex: Number,
        textExpr: String,
        timeCellTemplate: {},
        timeZone: String,
        useDropDownViewSwitcher: Boolean,
        views: Array,
        visible: Boolean,
        width: [Function, Number, String]
    },
    emits: {
        "update:isActive": null,
        "update:hoveredElement": null,
        "update:accessKey": null,
        "update:adaptivityEnabled": null,
        "update:allDayExpr": null,
        "update:appointmentCollectorTemplate": null,
        "update:appointmentDragging": null,
        "update:appointmentTemplate": null,
        "update:appointmentTooltipTemplate": null,
        "update:cellDuration": null,
        "update:crossScrollingEnabled": null,
        "update:currentDate": null,
        "update:currentView": null,
        "update:customizeDateNavigatorText": null,
        "update:dataCellTemplate": null,
        "update:dataSource": null,
        "update:dateCellTemplate": null,
        "update:dateSerializationFormat": null,
        "update:descriptionExpr": null,
        "update:disabled": null,
        "update:dropDownAppointmentTemplate": null,
        "update:editing": null,
        "update:elementAttr": null,
        "update:endDateExpr": null,
        "update:endDateTimeZoneExpr": null,
        "update:endDayHour": null,
        "update:firstDayOfWeek": null,
        "update:focusStateEnabled": null,
        "update:groupByDate": null,
        "update:groups": null,
        "update:height": null,
        "update:hint": null,
        "update:indicatorUpdateInterval": null,
        "update:max": null,
        "update:maxAppointmentsPerCell": null,
        "update:min": null,
        "update:noDataText": null,
        "update:onAppointmentAdded": null,
        "update:onAppointmentAdding": null,
        "update:onAppointmentClick": null,
        "update:onAppointmentContextMenu": null,
        "update:onAppointmentDblClick": null,
        "update:onAppointmentDeleted": null,
        "update:onAppointmentDeleting": null,
        "update:onAppointmentFormOpening": null,
        "update:onAppointmentRendered": null,
        "update:onAppointmentUpdated": null,
        "update:onAppointmentUpdating": null,
        "update:onCellClick": null,
        "update:onCellContextMenu": null,
        "update:onContentReady": null,
        "update:onDisposing": null,
        "update:onInitialized": null,
        "update:onOptionChanged": null,
        "update:recurrenceEditMode": null,
        "update:recurrenceExceptionExpr": null,
        "update:recurrenceRuleExpr": null,
        "update:remoteFiltering": null,
        "update:resourceCellTemplate": null,
        "update:resources": null,
        "update:rtlEnabled": null,
        "update:scrolling": null,
        "update:selectedCellData": null,
        "update:shadeUntilCurrentTime": null,
        "update:showAllDayPanel": null,
        "update:showCurrentTimeIndicator": null,
        "update:startDateExpr": null,
        "update:startDateTimeZoneExpr": null,
        "update:startDayHour": null,
        "update:tabIndex": null,
        "update:textExpr": null,
        "update:timeCellTemplate": null,
        "update:timeZone": null,
        "update:useDropDownViewSwitcher": null,
        "update:views": null,
        "update:visible": null,
        "update:width": null,
    },
    computed: {
        instance: function () {
            return this.$_instance;
        }
    },
    beforeCreate: function () {
        this.$_WidgetClass = scheduler_1.default;
        this.$_hasAsyncTemplate = false;
        this.$_expectedChildren = {
            appointmentDragging: { isCollectionItem: false, optionName: "appointmentDragging" },
            editing: { isCollectionItem: false, optionName: "editing" },
            resource: { isCollectionItem: true, optionName: "resources" },
            scrolling: { isCollectionItem: false, optionName: "scrolling" },
            view: { isCollectionItem: true, optionName: "views" }
        };
    }
});
exports.DxScheduler = DxScheduler;
var DxAppointmentDragging = index_2.createConfigurationComponent({
    emits: {
        "update:isActive": null,
        "update:hoveredElement": null,
        "update:autoScroll": null,
        "update:data": null,
        "update:group": null,
        "update:onAdd": null,
        "update:onDragEnd": null,
        "update:onDragMove": null,
        "update:onDragStart": null,
        "update:onRemove": null,
        "update:scrollSensitivity": null,
        "update:scrollSpeed": null,
    },
    props: {
        autoScroll: Boolean,
        data: {},
        group: String,
        onAdd: Function,
        onDragEnd: Function,
        onDragMove: Function,
        onDragStart: Function,
        onRemove: Function,
        scrollSensitivity: Number,
        scrollSpeed: Number
    }
});
exports.DxAppointmentDragging = DxAppointmentDragging;
DxAppointmentDragging.$_optionName = "appointmentDragging";
var DxEditing = index_2.createConfigurationComponent({
    emits: {
        "update:isActive": null,
        "update:hoveredElement": null,
        "update:allowAdding": null,
        "update:allowDeleting": null,
        "update:allowDragging": null,
        "update:allowResizing": null,
        "update:allowTimeZoneEditing": null,
        "update:allowUpdating": null,
    },
    props: {
        allowAdding: Boolean,
        allowDeleting: Boolean,
        allowDragging: Boolean,
        allowResizing: Boolean,
        allowTimeZoneEditing: Boolean,
        allowUpdating: Boolean
    }
});
exports.DxEditing = DxEditing;
DxEditing.$_optionName = "editing";
var DxResource = index_2.createConfigurationComponent({
    emits: {
        "update:isActive": null,
        "update:hoveredElement": null,
        "update:allowMultiple": null,
        "update:colorExpr": null,
        "update:dataSource": null,
        "update:displayExpr": null,
        "update:fieldExpr": null,
        "update:label": null,
        "update:useColorAsDefault": null,
        "update:valueExpr": null,
    },
    props: {
        allowMultiple: Boolean,
        colorExpr: String,
        dataSource: [Array, Object, String],
        displayExpr: [Function, String],
        fieldExpr: String,
        label: String,
        useColorAsDefault: Boolean,
        valueExpr: [Function, String]
    }
});
exports.DxResource = DxResource;
DxResource.$_optionName = "resources";
DxResource.$_isCollectionItem = true;
var DxScrolling = index_2.createConfigurationComponent({
    emits: {
        "update:isActive": null,
        "update:hoveredElement": null,
        "update:mode": null,
    },
    props: {
        mode: String
    }
});
exports.DxScrolling = DxScrolling;
DxScrolling.$_optionName = "scrolling";
var DxView = index_2.createConfigurationComponent({
    emits: {
        "update:isActive": null,
        "update:hoveredElement": null,
        "update:agendaDuration": null,
        "update:appointmentCollectorTemplate": null,
        "update:appointmentTemplate": null,
        "update:appointmentTooltipTemplate": null,
        "update:cellDuration": null,
        "update:dataCellTemplate": null,
        "update:dateCellTemplate": null,
        "update:dropDownAppointmentTemplate": null,
        "update:endDayHour": null,
        "update:firstDayOfWeek": null,
        "update:groupByDate": null,
        "update:groupOrientation": null,
        "update:groups": null,
        "update:intervalCount": null,
        "update:maxAppointmentsPerCell": null,
        "update:name": null,
        "update:resourceCellTemplate": null,
        "update:scrolling": null,
        "update:startDate": null,
        "update:startDayHour": null,
        "update:timeCellTemplate": null,
        "update:type": null,
    },
    props: {
        agendaDuration: Number,
        appointmentCollectorTemplate: {},
        appointmentTemplate: {},
        appointmentTooltipTemplate: {},
        cellDuration: Number,
        dataCellTemplate: {},
        dateCellTemplate: {},
        dropDownAppointmentTemplate: {},
        endDayHour: Number,
        firstDayOfWeek: {
            type: Number,
            validator: function (v) { return typeof (v) !== "number" || [
                0,
                1,
                2,
                3,
                4,
                5,
                6
            ].indexOf(v) !== -1; }
        },
        groupByDate: Boolean,
        groupOrientation: String,
        groups: Array,
        intervalCount: Number,
        maxAppointmentsPerCell: [Number, String],
        name: String,
        resourceCellTemplate: {},
        scrolling: Object,
        startDate: {},
        startDayHour: Number,
        timeCellTemplate: {},
        type: String
    }
});
exports.DxView = DxView;
DxView.$_optionName = "views";
DxView.$_isCollectionItem = true;
DxView.$_expectedChildren = {
    scrolling: { isCollectionItem: false, optionName: "scrolling" }
};
exports.default = DxScheduler;
