(function(){
var $gwt_version = "2.0.4";
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var $strongName = '558AE64CF9B4B34D6AF12093F0FFABBC';
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
$stats && $stats({moduleName:'nxuigwttree',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});
var _, N8000000000000000_longLit = [0, -9223372036854775808], P0_longLit = [0, 0], P64_longLit = [100, 0], P1000000_longLit = [16777216, 0], P7fffffffffffffff_longLit = [4294967295, 9223372032559808512];
function nullMethod(){
}

function $$init(){
}

function $Object(this$static){
  $$init();
  return this$static;
}

function $equals(this$static, other){
  return maskUndefined(this$static) === maskUndefined(other);
}

function $hashCode(this$static){
  return getHashCode(this$static);
}

function equals(other){
  return $equals(this, other);
}

function getClass_0(){
  return Ljava_lang_Object_2_classLit;
}

function hashCode_0(){
  return $hashCode(this);
}

function Object_0(){
}

_ = Object_0.prototype = {};
_.equals$ = equals;
_.getClass$ = getClass_0;
_.hashCode$ = hashCode_0;
_.typeMarker$ = nullMethod;
_.typeId$ = 1;
function $clinit_0(){
  $clinit_0 = nullMethod;
  dragHandles = $HashMap(new HashMap);
}

function $$init_0(this$static){
}

function $AbstractDragController(this$static, boundaryPanel){
  $clinit_0();
  $Object(this$static);
  $$init_0(this$static);
  this$static.boundaryPanel = boundaryPanel;
  this$static.context = $DragContext(new DragContext, this$static);
  this$static.mouseDragHandler = $MouseDragHandler(new MouseDragHandler, this$static.context);
  return this$static;
}

function $dragEnd(this$static){
  $removeStyleName(this$static.context.draggable, ($clinit_30() , INSTANCE).css().dragging_0());
  if (isNotNull(this$static.dragHandlers)) {
    null.nullMethod(this$static.dragEndEvent);
    this$static.dragEndEvent = null;
  }
}

function $dragStart(this$static){
  if (!isScript()) {
    if (getClientHeight($getElement(this$static.boundaryPanel)) == 0) {
      if ($equals_0($getElement(this$static.boundaryPanel), getBodyElement())) {
        reportFatalAndThrowRuntimeException("boundary panel (= the BODY element) has zero height; dragging cannot occur inside an AbsolutePanel that has a height of zero pixels; you can often remedy this quite easily by adding the following line of CSS to your application's stylesheet: BODY, HTML { height: 100%; }");
      }
    }
  }
  this$static.resetCache();
  if (isNotNull(this$static.dragHandlers)) {
    null.nullMethod(this$static.dragStartEvent);
    this$static.dragStartEvent = null;
  }
  $addStyleName(this$static.context.draggable, ($clinit_30() , INSTANCE).css().dragging_0());
}

function $getBehaviorConstrainedToBoundaryPanel(this$static){
  return this$static.constrainedToBoundaryPanel;
}

function $makeDraggable(this$static, draggable){
  if (instanceOf(draggable, 3)) {
    $makeDraggable_0(this$static, draggable, dynamicCast(draggable, 3).nullMethod());
  }
   else {
    $makeDraggable_0(this$static, draggable, draggable);
  }
}

function $makeDraggable_0(this$static, draggable, dragHandle){
  $makeDraggable_1(this$static.mouseDragHandler, draggable, dragHandle);
  $addStyleName(draggable, ($clinit_30() , INSTANCE).css().draggable_0());
  $addStyleName(dragHandle, ($clinit_30() , INSTANCE).css().handle());
  $put(dragHandles, draggable, dragHandle);
}

function $previewDragEnd(this$static){
  if (isNotNull(this$static.dragHandlers)) {
    this$static.dragEndEvent = $DragEndEvent(new DragEndEvent, this$static.context);
    null.nullMethod(this$static.dragEndEvent);
  }
}

function $resetCache(){
}

function $setBehaviorConstrainedToBoundaryPanel(this$static, constrainedToBoundaryPanel){
  this$static.constrainedToBoundaryPanel = constrainedToBoundaryPanel;
}

function $setBehaviorMultipleSelection(this$static, multipleSelectionAllowed){
  var iterator, widget;
  this$static.multipleSelectionAllowed = multipleSelectionAllowed;
  for (iterator = this$static.context.selectedWidgets.iterator_0(); iterator.hasNext();) {
    widget = dynamicCast(iterator.next_0(), 2);
    $removeStyleName(widget, ($clinit_30() , INSTANCE).css().selected_0());
    iterator.remove();
  }
}

function clearSelection(){
  var iterator, widget;
  for (iterator = this.context.selectedWidgets.iterator_0(); iterator.hasNext();) {
    widget = dynamicCast(iterator.next_0(), 2);
    $removeStyleName(widget, ($clinit_30() , INSTANCE).css().selected_0());
    iterator.remove();
  }
}

function dragEnd(){
  $dragEnd(this);
}

function dragStart(){
  $dragStart(this);
}

function getBehaviorCancelDocumentSelections(){
  return this.cancelDocumentSelections;
}

function getBehaviorDragStartSensitivity(){
  return this.dragStartSensitivityPixels;
}

function getBehaviorScrollIntoView(){
  return this.scrollIntoView_0;
}

function getBoundaryPanel(){
  return this.boundaryPanel;
}

function getClass_1(){
  return Lcom_allen_1sauer_gwt_dnd_client_AbstractDragController_2_classLit;
}

function previewDragEnd(){
  $previewDragEnd(this);
}

function previewDragStart(){
  var $e0, ex;
  if (isNotNull(this.dragHandlers)) {
    this.dragStartEvent = $DragStartEvent(new DragStartEvent, this.context);
    try {
      null.nullMethod(this.dragStartEvent);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 4)) {
        ex = $e0;
        this.dragStartEvent = null;
        throw ex;
      }
       else 
        throw $e0;
    }
  }
}

function resetCache(){
  $resetCache();
}

function toggleSelection(draggable){
  if (this.context.selectedWidgets.remove_1(draggable)) {
    $removeStyleName(draggable, ($clinit_30() , INSTANCE).css().selected_0());
  }
   else if (this.multipleSelectionAllowed) {
    this.context.selectedWidgets.add(draggable);
    $addStyleName(draggable, ($clinit_30() , INSTANCE).css().selected_0());
  }
   else {
    this.context.selectedWidgets.clear();
    this.context.selectedWidgets.add(draggable);
  }
}

function AbstractDragController(){
}

_ = AbstractDragController.prototype = new Object_0;
_.clearSelection = clearSelection;
_.dragEnd = dragEnd;
_.dragStart = dragStart;
_.getBehaviorCancelDocumentSelections = getBehaviorCancelDocumentSelections;
_.getBehaviorDragStartSensitivity = getBehaviorDragStartSensitivity;
_.getBehaviorScrollIntoView = getBehaviorScrollIntoView;
_.getBoundaryPanel = getBoundaryPanel;
_.getClass$ = getClass_1;
_.previewDragEnd = previewDragEnd;
_.previewDragStart = previewDragStart;
_.resetCache = resetCache;
_.toggleSelection = toggleSelection;
_.typeId$ = 0;
_.boundaryPanel = null;
_.cancelDocumentSelections = true;
_.constrainedToBoundaryPanel = false;
_.context = null;
_.dragEndEvent = null;
_.dragHandlers = null;
_.dragStartEvent = null;
_.dragStartSensitivityPixels = 0;
_.mouseDragHandler = null;
_.multipleSelectionAllowed = false;
_.scrollIntoView_0 = true;
var dragHandles;
function $$init_1(this$static){
  this$static.selectedWidgets = $ArrayList(new ArrayList);
}

function $DragContext(this$static, dragController){
  $Object(this$static);
  $$init_1(this$static);
  this$static.dragController = dragController;
  this$static.boundaryPanel = dragController.getBoundaryPanel();
  return this$static;
}

function $dragEndCleanup(this$static){
  this$static.dropController = null;
  this$static.draggable = null;
}

function $dragStartCleanup(this$static){
  this$static , null;
  this$static.vetoException = null;
}

function getClass_2(){
  return Lcom_allen_1sauer_gwt_dnd_client_DragContext_2_classLit;
}

function DragContext(){
}

_ = DragContext.prototype = new Object_0;
_.getClass$ = getClass_2;
_.typeId$ = 0;
_.boundaryPanel = null;
_.desiredDraggableX = 0;
_.desiredDraggableY = 0;
_.dragController = null;
_.draggable = null;
_.dropController = null;
_.mouseX = 0;
_.mouseY = 0;
_.vetoException = null;
function $$init_2(){
}

function $EventObject(this$static, source){
  $Object(this$static);
  $$init_2();
  this$static , source;
  return this$static;
}

function getClass_3(){
  return Ljava_util_EventObject_2_classLit;
}

function EventObject(){
}

_ = EventObject.prototype = new Object_0;
_.getClass$ = getClass_3;
_.typeId$ = 0;
function $$init_3(){
}

function $DragEvent(this$static, context){
  $EventObject(this$static, context.draggable);
  $$init_3();
  this$static , context;
  return this$static;
}

function getClass_4(){
  return Lcom_allen_1sauer_gwt_dnd_client_DragEvent_2_classLit;
}

function DragEvent(){
}

_ = DragEvent.prototype = new EventObject;
_.getClass$ = getClass_4;
_.typeId$ = 0;
function $$init_4(){
}

function $DragEndEvent(this$static, context){
  $DragEvent(this$static, context);
  $$init_4();
  return this$static;
}

function getClass_5(){
  return Lcom_allen_1sauer_gwt_dnd_client_DragEndEvent_2_classLit;
}

function DragEndEvent(){
}

_ = DragEndEvent.prototype = new DragEvent;
_.getClass$ = getClass_5;
_.typeId$ = 0;
function $$init_5(){
}

function $DragStartEvent(this$static, context){
  $DragEvent(this$static, context);
  $$init_5();
  return this$static;
}

function getClass_6(){
  return Lcom_allen_1sauer_gwt_dnd_client_DragStartEvent_2_classLit;
}

function DragStartEvent(){
}

_ = DragStartEvent.prototype = new DragEvent;
_.getClass$ = getClass_6;
_.typeId$ = 0;
function $$init_6(this$static){
}

function $DropControllerCollection(this$static, dropControllerList){
  $Object(this$static);
  $$init_6(this$static);
  this$static.dropControllerList = dropControllerList;
  return this$static;
}

function $getIntersectDropController(this$static, x, y){
  var candidate, i, location_0, targetArea;
  location_0 = $CoordinateLocation(new CoordinateLocation, x, y);
  for (i = this$static.sortedCandidates.length - 1; i >= 0; --i) {
    this$static.sortedCandidates[i];
  }
  for (i = this$static.sortedCandidates.length - 1; i >= 0; --i) {
    candidate = this$static.sortedCandidates[i];
    targetArea = $getTargetArea(candidate);
    if (targetArea.intersects_0(location_0)) {
      return $getDropController(candidate);
    }
  }
  return null;
}

function $resetCache_0(this$static, boundaryPanel, context){
  var boundaryArea, candidate, dropController, dropController$iterator, dropTarget, list;
  list = $ArrayList(new ArrayList);
  if (isNotNull(context.draggable)) {
    boundaryArea = $WidgetArea(new WidgetArea, boundaryPanel, null);
    for (dropController$iterator = this$static.dropControllerList.iterator_0(); dropController$iterator.hasNext();) {
      dropController = dynamicCast(dropController$iterator.next_0(), 6);
      candidate = $DropControllerCollection$Candidate(new DropControllerCollection$Candidate, dropController);
      dropTarget = $getDropTarget(candidate);
      if (isOrHasChild_0($getElement(context.draggable), $getElement(dropTarget))) {
        continue;
      }
      if ($getTargetArea(candidate).intersects(boundaryArea)) {
        $add_3(list, candidate);
      }
    }
  }
  this$static.sortedCandidates = dynamicCast($toArray(list, initDim(_3Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_2_classLit, 307, 8, $size_1(list), 0)), 7);
  sort(this$static.sortedCandidates);
}

function getClass_7(){
  return Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection_2_classLit;
}

function DropControllerCollection(){
}

_ = DropControllerCollection.prototype = new Object_0;
_.getClass$ = getClass_7;
_.typeId$ = 0;
_.dropControllerList = null;
_.sortedCandidates = null;
function $$init_7(){
}

function $DropControllerCollection$Candidate(this$static, dropController){
  var target;
  $Object(this$static);
  $$init_7();
  this$static.dropController = dropController;
  target = dropController.getDropTarget();
  if (!target.isAttached()) {
    throw $IllegalStateException_0(new IllegalStateException, 'Unattached drop target. You must call DragController#unregisterDropController for all drop targets not attached to the DOM.');
  }
  this$static.targetArea = $WidgetArea(new WidgetArea, target, null);
  return this$static;
}

function $compareElement(this$static, myElement, otherElement){
  var myParentElement, otherParentElement;
  if (jsEquals(myElement, otherElement)) {
    return 0;
  }
   else if (isOrHasChild_0(myElement, otherElement)) {
    return -1;
  }
   else if (isOrHasChild_0(otherElement, myElement)) {
    return 1;
  }
   else {
    myParentElement = $cast($getParentElement_0(myElement));
    otherParentElement = $cast($getParentElement_0(otherElement));
    if (isNotNull(myParentElement) && isNotNull(otherParentElement)) {
      return $compareElement(this$static, myParentElement, otherParentElement);
    }
    return 0;
  }
}

function $compareTo(this$static, other){
  var myElement, otherElement;
  myElement = $getElement($getDropTarget(this$static));
  otherElement = $getElement($getDropTarget(other));
  return $compareElement(this$static, myElement, otherElement);
}

function $getDropController(this$static){
  return this$static.dropController;
}

function $getDropTarget(this$static){
  return this$static.dropController.getDropTarget();
}

function $getTargetArea(this$static){
  return this$static.targetArea;
}

function compareTo(p0){
  return $compareTo(this, dynamicCast(p0, 8));
}

function equals_0(other){
  throw $RuntimeException_0(new RuntimeException, 'hash code not implemented');
}

function getClass_8(){
  return Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_2_classLit;
}

function hashCode_1(){
  throw $RuntimeException_0(new RuntimeException, 'hash code not implemented');
}

function DropControllerCollection$Candidate(){
}

_ = DropControllerCollection$Candidate.prototype = new Object_0;
_.compareTo$ = compareTo;
_.equals$ = equals_0;
_.getClass$ = getClass_8;
_.hashCode$ = hashCode_1;
_.typeId$ = 7;
_.dropController = null;
_.targetArea = null;
function $$init_8(this$static){
  this$static.dragHandleMap = $HashMap(new HashMap);
}

function $MouseDragHandler(this$static, context){
  $Object(this$static);
  $$init_8(this$static);
  this$static.context = context;
  $initCapturingWidget(this$static);
  return this$static;
}

function $actualMove(this$static, x, y){
  this$static.context.mouseX = x;
  this$static.context.mouseY = y;
  this$static.context.desiredDraggableX = x - this$static.mouseDownOffsetX;
  this$static.context.desiredDraggableY = y - this$static.mouseDownOffsetY;
  this$static.context.dragController.dragMove();
}

function $doSelectionToggle(this$static, event_0){
  var widget;
  widget = $getDragable(dynamicCast($get_2(this$static.dragHandleMap, mouseDownWidget), 9));
  if (!$toggleKey(event_0)) {
    this$static.context.dragController.clearSelection();
  }
  this$static.context.dragController.toggleSelection(widget);
}

function $dragEndCleanup_0(this$static){
  releaseCapture($getElement(this$static.capturingWidget));
  $removeFromParent(this$static.capturingWidget);
  this$static.dragging = 1;
  $dragEndCleanup(this$static.context);
}

function $drop(this$static, x, y){
  var $e0, ex;
  $actualMove(this$static, x, y);
  try {
    this$static.context.dragController.previewDragEnd();
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 4)) {
      ex = $e0;
      this$static.context.vetoException = ex;
    }
     else 
      throw $e0;
  }
  this$static.context.dragController.dragEnd();
}

function $initCapturingWidget(this$static){
  var style;
  this$static.capturingWidget = $FocusPanel(new FocusPanel);
  $setPixelSize(this$static.capturingWidget, getClientWidth_1(), getClientHeight_1());
  $addMouseMoveHandler(this$static.capturingWidget, this$static);
  $addMouseUpHandler(this$static.capturingWidget, this$static);
  style = $getStyle($getElement(this$static.capturingWidget));
  $setProperty(style, 'filter', 'alpha(opacity=0)');
  $setOpacity(style, 0);
  $setMargin(style, 0, ($clinit_83() , PX));
  $setBorderStyle(style, ($clinit_76() , NONE));
  $setBackgroundColor(style, 'blue');
}

function $makeDraggable_1(this$static, draggable, dragHandle){
  var $e0, ex, registeredDraggable;
  if (instanceOf(draggable, 10)) {
    reportFatalAndThrowRuntimeException('PopupPanel (and its subclasses) cannot be made draggable; See http://code.google.com/p/gwt-dnd/issues/detail?id=43');
  }
  try {
    registeredDraggable = $MouseDragHandler$RegisteredDraggable(new MouseDragHandler$RegisteredDraggable, draggable, dynamicCast(dragHandle, 11).addMouseDownHandler(this$static), dynamicCast(dragHandle, 12).addMouseUpHandler(this$static), (dynamicCast(dragHandle, 13).addMouseMoveHandler(this$static) , dynamicCast(dragHandle, 14).addMouseOutHandler(this$static)));
    $put(this$static.dragHandleMap, dragHandle, registeredDraggable);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 15)) {
      ex = $e0;
      throw $RuntimeException_1(new RuntimeException, 'dragHandle must implement HasMouseDownHandlers, HasMouseUpHandlers, HasMouseMoveHandlers and HasMouseOutHandlers to be draggable', ex);
    }
     else 
      throw $e0;
  }
}

function $startDragging(this$static){
  var $e0, ex;
  $dragStartCleanup(this$static.context);
  try {
    this$static.context.dragController.previewDragStart();
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 4)) {
      ex = $e0;
      this$static.context.vetoException = ex;
      this$static.mouseDown = false;
      return;
    }
     else 
      throw $e0;
  }
  this$static.context.dragController.dragStart();
  $add_1(get_1(), this$static.capturingWidget, 0, 0);
  setCapture($getElement(this$static.capturingWidget));
  this$static.dragging = 2;
}

function $toggleKey(event_0){
  return $isControlKeyDown(event_0) || $isMetaKeyDown(event_0);
}

function getClass_9(){
  return Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2_classLit;
}

function onMouseDown(event_0){
  var button, loc1, loc2, sender, x, y;
  sender = dynamicCast($getSource(event_0), 2);
  x = $getX(event_0);
  y = $getY(event_0);
  button = $getNativeButton(event_0);
  if (this.dragging == 3 || this.dragging == 2) {
    return;
  }
  if (button != 1) {
    return;
  }
  if (isNotNull(mouseDownWidget)) {
    return;
  }
  mouseDownWidget = sender;
  this.context.draggable = $getDragable(dynamicCast($get_2(this.dragHandleMap, mouseDownWidget), 9));
  if (!$toggleKey(event_0) && !this.context.selectedWidgets.contains_0(this.context.draggable)) {
    this.context.dragController.clearSelection();
    this.context.dragController.toggleSelection(this.context.draggable);
  }
  if (this.context.dragController.getBehaviorCancelDocumentSelections()) {
    addCommand($MouseDragHandler$1(new MouseDragHandler$1, this));
  }
  this.mouseDown = true;
  $preventDefault_0(event_0);
  this.mouseDownOffsetX = x;
  this.mouseDownOffsetY = y;
  loc1 = $WidgetLocation(new WidgetLocation, mouseDownWidget, null);
  if (jsNotEquals(mouseDownWidget, this.context.draggable)) {
    loc2 = $WidgetLocation(new WidgetLocation, this.context.draggable, null);
    this.mouseDownOffsetX += $getLeft_0(loc1) - $getLeft_0(loc2);
    this.mouseDownOffsetY += $getTop_0(loc1) - $getTop_0(loc2);
  }
  if (this.context.dragController.getBehaviorDragStartSensitivity() == 0 && !$toggleKey(event_0)) {
    this.context.mouseX = x + $getLeft_0(loc1);
    this.context.mouseY = y + $getTop_0(loc1);
    $startDragging(this);
    if (this.dragging == 1) {
      return;
    }
    $actualMove(this, this.context.mouseX, this.context.mouseY);
  }
}

function onMouseMove(event_0){
  var elem, location_0, sender, x, y;
  sender = dynamicCast($getSource(event_0), 2);
  elem = $getElement(sender);
  x = $getRelativeX(event_0, elem);
  y = $getRelativeY(event_0, elem);
  if (this.dragging == 3 || this.dragging == 2) {
    if (jsNotEquals(sender, this.capturingWidget)) {
      return;
    }
    this.dragging = 3;
  }
   else {
    if (this.mouseDown) {
      if (max(abs(x - this.mouseDownOffsetX), abs(y - this.mouseDownOffsetY)) >= this.context.dragController.getBehaviorDragStartSensitivity()) {
        if (this.context.dragController.getBehaviorCancelDocumentSelections()) {
          cancelAllDocumentSelections();
        }
        if (!this.context.selectedWidgets.contains_0(this.context.draggable)) {
          this.context.dragController.toggleSelection(this.context.draggable);
        }
        location_0 = $WidgetLocation(new WidgetLocation, mouseDownWidget, null);
        this.context.mouseX = this.mouseDownOffsetX + location_0.getLeft();
        this.context.mouseY = this.mouseDownOffsetY + location_0.getTop();
        x += location_0.getLeft();
        y += location_0.getTop();
        $startDragging(this);
      }
       else {
        eventPreventDefault_0(eventGetCurrentEvent());
      }
    }
    if (this.dragging == 1) {
      return;
    }
  }
  eventPreventDefault_0(eventGetCurrentEvent());
  $actualMove(this, x, y);
}

function onMouseOut(event_0){
  var location_0;
  if (this.mouseDown && this.dragging == 1) {
    location_0 = $WidgetLocation(new WidgetLocation, mouseDownWidget, null);
    this.context.mouseX = this.mouseDownOffsetX + location_0.getLeft();
    this.context.mouseY = this.mouseDownOffsetY + location_0.getTop();
    $startDragging(this);
  }
}

function onMouseUp(event_0){
  var button, elem, location_0, sender, x, y;
  sender = dynamicCast($getSource(event_0), 2);
  elem = $getElement(sender);
  x = $getRelativeX(event_0, elem);
  y = $getRelativeY(event_0, elem);
  button = $getNativeButton(event_0);
  if (button != 1) {
    return;
  }
  this.mouseDown = false;
  if (isNull(mouseDownWidget)) {
    return;
  }
  try {
    if (this.context.dragController.getBehaviorCancelDocumentSelections()) {
      cancelAllDocumentSelections();
    }
    if (this.dragging == 1) {
      $doSelectionToggle(this, event_0);
      return;
    }
    if (jsNotEquals(sender, this.capturingWidget)) {
      location_0 = $WidgetLocation(new WidgetLocation, sender, null);
      x += location_0.getLeft();
      y += location_0.getTop();
    }
    try {
      $drop(this, x, y);
      if (this.dragging != 3) {
        $doSelectionToggle(this, event_0);
      }
    }
     finally {
      $dragEndCleanup_0(this);
    }
  }
   finally {
    mouseDownWidget = null;
  }
}

function MouseDragHandler(){
}

_ = MouseDragHandler.prototype = new Object_0;
_.getClass$ = getClass_9;
_.onMouseDown = onMouseDown;
_.onMouseMove = onMouseMove;
_.onMouseOut = onMouseOut;
_.onMouseUp = onMouseUp;
_.typeId$ = 8;
_.capturingWidget = null;
_.context = null;
_.dragging = 1;
_.mouseDown = false;
_.mouseDownOffsetX = 0;
_.mouseDownOffsetY = 0;
var mouseDownWidget = null;
function $$init_9(){
}

function $MouseDragHandler$1(this$static, this$0){
  this$static , this$0;
  $Object(this$static);
  $$init_9();
  return this$static;
}

function execute(){
  cancelAllDocumentSelections();
}

function getClass_10(){
  return Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler$1_2_classLit;
}

function MouseDragHandler$1(){
}

_ = MouseDragHandler$1.prototype = new Object_0;
_.execute = execute;
_.getClass$ = getClass_10;
_.typeId$ = 9;
function $$init_10(){
}

function $MouseDragHandler$RegisteredDraggable(this$static, dragable, mouseDownHandlerRegistration, mouseUpHandlerRegistration, mouseOutHandlerRegistration){
  $Object(this$static);
  $$init_10();
  this$static.dragable = dragable;
  this$static , mouseDownHandlerRegistration;
  this$static , mouseOutHandlerRegistration;
  this$static , mouseUpHandlerRegistration;
  return this$static;
}

function $getDragable(this$static){
  return this$static.dragable;
}

function getClass_11(){
  return Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_2_classLit;
}

function MouseDragHandler$RegisteredDraggable(){
}

_ = MouseDragHandler$RegisteredDraggable.prototype = new Object_0;
_.getClass$ = getClass_11;
_.typeId$ = 10;
_.dragable = null;
function $clinit_13(){
  $clinit_13 = nullMethod;
  $clinit_0();
  100;
}

function $$init_11(this$static){
  this$static.dropControllerList = $ArrayList(new ArrayList);
}

function $PickupDragController(this$static, boundaryPanel, allowDroppingOnBoundaryPanel){
  $clinit_13();
  $AbstractDragController(this$static, boundaryPanel);
  $$init_11(this$static);
  this$static.boundaryDropController = $newBoundaryDropController(boundaryPanel, allowDroppingOnBoundaryPanel);
  $registerDropController(this$static, this$static.boundaryDropController);
  this$static.dropControllerCollection = $DropControllerCollection(new DropControllerCollection, this$static.dropControllerList);
  return this$static;
}

function $calcBoundaryOffset(this$static){
  var widgetLocation;
  widgetLocation = $WidgetLocation(new WidgetLocation, this$static.context.boundaryPanel, null);
  this$static.boundaryOffsetX = widgetLocation.getLeft() + getBorderLeft($getElement(this$static.context.boundaryPanel));
  this$static.boundaryOffsetY = widgetLocation.getTop() + getBorderTop($getElement(this$static.context.boundaryPanel));
}

function $checkGWTIssue1813(child, parent_0){
  if (!isScript()) {
    if (jsNotEquals($getOffsetParent($getElement(child)), $getElement(parent_0)) && !$equals_1('HTML', $getNodeName($getOffsetParent($getElement(child))))) {
      reportFatalAndThrowRuntimeException('The boundary panel for this drag controller does not appear to have \'position: relative\' CSS applied to it. This may be due to custom CSS in your application, although this is often caused by using the result of RootPanel.get("some-unique-id") as your boundary panel, as described in GWT issue 1813 (http://code.google.com/p/google-web-toolkit/issues/detail?id=1813). Please star / vote for this issue if it has just affected your application. You can often remedy this problem by adding one line of code to your application: boundaryPanel.getElement().getStyle().setProperty("position", "relative");');
    }
  }
}

function $getBehaviorDragProxy(this$static){
  return this$static.dragProxyEnabled;
}

function $getIntersectDropController_0(this$static, x, y){
  var dropController;
  dropController = $getIntersectDropController(this$static.dropControllerCollection, x, y);
  return isNotNull(dropController)?dropController:this$static.boundaryDropController;
}

function $newBoundaryDropController(boundaryPanel, allowDroppingOnBoundaryPanel){
  return $BoundaryDropController(new BoundaryDropController, boundaryPanel, allowDroppingOnBoundaryPanel);
}

function $newDragProxy(context){
  var container, draggableArea, proxy, widget, widget$iterator, widgetArea;
  container = $AbsolutePanel(new AbsolutePanel);
  $setProperty($getStyle($getElement(container)), 'overflow', 'visible');
  draggableArea = $WidgetArea(new WidgetArea, context.draggable, null);
  for (widget$iterator = context.selectedWidgets.iterator_0(); widget$iterator.hasNext();) {
    widget = dynamicCast(widget$iterator.next_0(), 2);
    widgetArea = $WidgetArea(new WidgetArea, widget, null);
    proxy = $SimplePanel(new SimplePanel);
    $setPixelSize(proxy, widget.getOffsetWidth(), widget.getOffsetHeight());
    $addStyleName(proxy, ($clinit_30() , INSTANCE).css().proxy());
    $add_1(container, proxy, $getLeft(widgetArea) - $getLeft(draggableArea), $getTop(widgetArea) - $getTop(draggableArea));
  }
  return container;
}

function $registerDropController(this$static, dropController){
  $add_3(this$static.dropControllerList, dropController);
}

function $resetCache_1(this$static){
  $resetCache();
  $resetCache_0(this$static.dropControllerCollection, this$static.boundaryPanel, this$static.context);
}

function $setBehaviorDragProxy(this$static, dragProxyEnabled){
  this$static.dragProxyEnabled = dragProxyEnabled;
}

function dragEnd_0(){
  if (isNotNull(this.context.vetoException)) {
    this.context.dropController.onLeave(this.context);
    this.context.dropController = null;
    if (!$getBehaviorDragProxy(this)) {
      this.restoreSelectedWidgetsLocation();
    }
  }
   else {
    this.context.dropController.onDrop(this.context);
    this.context.dropController.onLeave(this.context);
    this.context.dropController = null;
  }
  if (!$getBehaviorDragProxy(this)) {
    this.restoreSelectedWidgetsStyle();
  }
  $removeFromParent(this.movablePanel);
  this.movablePanel = null;
  $dragEnd(this);
}

function dragMove(){
  var desiredLeft, desiredTop, newDropController, timeMillis;
  timeMillis = currentTimeMillis_1();
  if (gte(sub(timeMillis, this.lastResetCacheTimeMillis), P64_longLit)) {
    this.lastResetCacheTimeMillis = timeMillis;
    $resetCache_1(this);
    $calcBoundaryOffset(this);
  }
  desiredLeft = this.context.desiredDraggableX - this.boundaryOffsetX;
  desiredTop = this.context.desiredDraggableY - this.boundaryOffsetY;
  if ($getBehaviorConstrainedToBoundaryPanel(this)) {
    desiredLeft = max(0, min_0(desiredLeft, this.dropTargetClientWidth - this.context.draggable.getOffsetWidth()));
    desiredTop = max(0, min_0(desiredTop, this.dropTargetClientHeight - this.context.draggable.getOffsetHeight()));
  }
  fastSetElementPosition($getElement(this.movablePanel), desiredLeft, desiredTop);
  newDropController = $getIntersectDropController_0(this, this.context.mouseX, this.context.mouseY);
  if (jsNotEquals(this.context.dropController, newDropController)) {
    if (isNotNull(this.context.dropController)) {
      this.context.dropController.onLeave(this.context);
    }
    this.context.dropController = newDropController;
    if (isNotNull(this.context.dropController)) {
      this.context.dropController.onEnter(this.context);
    }
  }
  if (isNotNull(this.context.dropController)) {
    this.context.dropController.onMove(this.context);
  }
}

function dragStart_0(){
  var container, currentDraggableLocation, draggableAbsoluteLeft, draggableAbsoluteTop, location_0, relativeX, relativeY, widget, widget$iterator, widgetLocation;
  $dragStart(this);
  this.lastResetCacheTimeMillis = currentTimeMillis_1();
  currentDraggableLocation = $WidgetLocation(new WidgetLocation, this.context.draggable, this.context.boundaryPanel);
  if ($getBehaviorDragProxy(this)) {
    this.movablePanel = $newDragProxy(this.context);
    $add_1(this.context.boundaryPanel, this.movablePanel, $getLeft_0(currentDraggableLocation), $getTop_0(currentDraggableLocation));
    $checkGWTIssue1813(this.movablePanel, this.context.boundaryPanel);
  }
   else {
    this.saveSelectedWidgetsLocationAndStyle();
    container = $AbsolutePanel(new AbsolutePanel);
    $setProperty($getStyle($getElement(container)), 'overflow', 'visible');
    $setPixelSize(container, this.context.draggable.getOffsetWidth(), this.context.draggable.getOffsetHeight());
    $add_1(this.context.boundaryPanel, container, $getLeft_0(currentDraggableLocation), $getTop_0(currentDraggableLocation));
    $checkGWTIssue1813(container, this.context.boundaryPanel);
    draggableAbsoluteLeft = $getAbsoluteLeft_0(this.context.draggable);
    draggableAbsoluteTop = $getAbsoluteTop_0(this.context.draggable);
    widgetLocation = $HashMap(new HashMap);
    for (widget$iterator = this.context.selectedWidgets.iterator_0(); widget$iterator.hasNext();) {
      widget = dynamicCast(widget$iterator.next_0(), 2);
      $put(widgetLocation, widget, $CoordinateLocation(new CoordinateLocation, $getAbsoluteLeft_0(widget), $getAbsoluteTop_0(widget)));
    }
    this.context.dropController = $getIntersectDropController_0(this, this.context.mouseX, this.context.mouseY);
    if (isNotNull(this.context.dropController)) {
      this.context.dropController.onEnter(this.context);
    }
    for (widget$iterator = this.context.selectedWidgets.iterator_0(); widget$iterator.hasNext();) {
      widget = dynamicCast(widget$iterator.next_0(), 2);
      location_0 = dynamicCast($get_2(widgetLocation, widget), 16);
      relativeX = location_0.getLeft() - draggableAbsoluteLeft;
      relativeY = location_0.getTop() - draggableAbsoluteTop;
      $add_1(container, widget, relativeX, relativeY);
    }
    this.movablePanel = container;
  }
  $addStyleName(this.movablePanel, ($clinit_30() , INSTANCE).css().movablePanel_0());
  $calcBoundaryOffset(this);
  this.dropTargetClientWidth = getClientWidth($getElement(this.boundaryPanel));
  this.dropTargetClientHeight = getClientHeight($getElement(this.boundaryPanel));
}

function getClass_12(){
  return Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2_classLit;
}

function previewDragEnd_0(){
  var $e0, ex;
  try {
    try {
      this.context.dropController.onPreviewDrop(this.context);
      this.context , this.context.dropController;
    }
     finally {
      $previewDragEnd(this);
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 4)) {
      ex = $e0;
      this.context , null;
      throw ex;
    }
     else 
      throw $e0;
  }
}

function resetCache_0(){
  $resetCache_1(this);
}

function restoreSelectedWidgetsLocation(){
  var info, widget, widget$iterator;
  for (widget$iterator = this.context.selectedWidgets.iterator_0(); widget$iterator.hasNext();) {
    widget = dynamicCast(widget$iterator.next_0(), 2);
    info = dynamicCast($get_2(this.savedWidgetInfoMap, widget), 17);
    if (instanceOf(info.initialDraggableParent, 18)) {
      $add_1(dynamicCast(info.initialDraggableParent, 18), widget, info.initialDraggableParentLocation.getLeft(), info.initialDraggableParentLocation.getTop());
    }
     else if (instanceOf(info.initialDraggableParent, 19)) {
      dynamicCast(info.initialDraggableParent, 19).insert(widget, info.initialDraggableIndex);
    }
     else if (instanceOf(info.initialDraggableParent, 20)) {
      dynamicCast(info.initialDraggableParent, 20).setWidget(widget);
    }
     else {
      throw $RuntimeException_0(new RuntimeException, 'Unable to handle initialDraggableParent ' + $getName_0(getClass__devirtual$(info.initialDraggableParent)));
    }
  }
}

function restoreSelectedWidgetsStyle(){
  var info, widget, widget$iterator;
  for (widget$iterator = this.context.selectedWidgets.iterator_0(); widget$iterator.hasNext();) {
    widget = dynamicCast(widget$iterator.next_0(), 2);
    info = dynamicCast($get_2(this.savedWidgetInfoMap, widget), 17);
    $setProperty($getStyle($getElement(widget)), 'margin', info.initialDraggableMargin);
  }
}

function saveSelectedWidgetsLocationAndStyle(){
  var info, widget, widget$iterator;
  this.savedWidgetInfoMap = $HashMap(new HashMap);
  for (widget$iterator = this.context.selectedWidgets.iterator_0(); widget$iterator.hasNext();) {
    widget = dynamicCast(widget$iterator.next_0(), 2);
    info = $PickupDragController$SavedWidgetInfo(new PickupDragController$SavedWidgetInfo);
    info.initialDraggableParent = $getParent(widget);
    if (instanceOf(info.initialDraggableParent, 18)) {
      info.initialDraggableParentLocation = $WidgetLocation(new WidgetLocation, widget, info.initialDraggableParent);
    }
     else if (instanceOf(info.initialDraggableParent, 19)) {
      info.initialDraggableIndex = dynamicCast(info.initialDraggableParent, 19).getWidgetIndex(widget);
    }
     else if (instanceOf(info.initialDraggableParent, 20)) {
    }
     else {
      throw $RuntimeException_0(new RuntimeException, "Unable to handle 'initialDraggableParent instanceof " + $getName_0(getClass__devirtual$(info.initialDraggableParent)) + "'; Please create your own " + $getName_0(Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2_classLit) + ' and override saveSelectedWidgetsLocationAndStyle(), restoreSelectedWidgetsLocation() and restoreSelectedWidgetsStyle()');
    }
    info.initialDraggableMargin = getStyleAttribute($getElement(widget), 'margin');
    $setProperty($getStyle($getElement(widget)), 'margin', '0px');
    $put(this.savedWidgetInfoMap, widget, info);
  }
}

function PickupDragController(){
}

_ = PickupDragController.prototype = new AbstractDragController;
_.dragEnd = dragEnd_0;
_.dragMove = dragMove;
_.dragStart = dragStart_0;
_.getClass$ = getClass_12;
_.previewDragEnd = previewDragEnd_0;
_.resetCache = resetCache_0;
_.restoreSelectedWidgetsLocation = restoreSelectedWidgetsLocation;
_.restoreSelectedWidgetsStyle = restoreSelectedWidgetsStyle;
_.saveSelectedWidgetsLocationAndStyle = saveSelectedWidgetsLocationAndStyle;
_.typeId$ = 0;
_.boundaryDropController = null;
_.boundaryOffsetX = 0;
_.boundaryOffsetY = 0;
_.dragProxyEnabled = false;
_.dropControllerCollection = null;
_.dropTargetClientHeight = 0;
_.dropTargetClientWidth = 0;
_.lastResetCacheTimeMillis = P0_longLit;
_.movablePanel = null;
_.savedWidgetInfoMap = null;
function $$init_12(){
}

function $PickupDragController$SavedWidgetInfo(this$static){
  $Object(this$static);
  $$init_12();
  return this$static;
}

function getClass_13(){
  return Lcom_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_2_classLit;
}

function PickupDragController$SavedWidgetInfo(){
}

_ = PickupDragController$SavedWidgetInfo.prototype = new Object_0;
_.getClass$ = getClass_13;
_.typeId$ = 11;
_.initialDraggableIndex = 0;
_.initialDraggableMargin = null;
_.initialDraggableParent = null;
_.initialDraggableParentLocation = null;
function $$init_13(this$static){
  $fillInStackTrace(this$static);
}

function $Throwable(this$static){
  $Object(this$static);
  $$init_13(this$static);
  return this$static;
}

function $Throwable_0(this$static, message){
  $Object(this$static);
  $$init_13(this$static);
  this$static , message;
  return this$static;
}

function $Throwable_1(this$static, message, cause){
  $Object(this$static);
  $$init_13(this$static);
  this$static , cause;
  this$static , message;
  return this$static;
}

function $fillInStackTrace(this$static){
  fillInStackTrace(this$static);
  return this$static;
}

function $setStackTrace(this$static, stackTrace){
  var c, copy, i;
  copy = initDim(_3Ljava_lang_StackTraceElement_2_classLit, 345, 147, stackTrace.length, 0);
  for (i = 0 , c = stackTrace.length; i < c; ++i) {
    if (isNull(stackTrace[i])) {
      throw $NullPointerException(new NullPointerException);
    }
    copy[i] = stackTrace[i];
  }
  this$static , copy;
}

function getClass_14(){
  return Ljava_lang_Throwable_2_classLit;
}

function Throwable(){
}

_ = Throwable.prototype = new Object_0;
_.getClass$ = getClass_14;
_.typeId$ = 12;
function $$init_14(){
}

function $Exception(this$static){
  $Throwable(this$static);
  $$init_14();
  return this$static;
}

function $Exception_0(this$static, message){
  $Throwable_0(this$static, message);
  $$init_14();
  return this$static;
}

function $Exception_1(this$static, message, cause){
  $Throwable_1(this$static, message, cause);
  $$init_14();
  return this$static;
}

function getClass_15(){
  return Ljava_lang_Exception_2_classLit;
}

function Exception(){
}

_ = Exception.prototype = new Throwable;
_.getClass$ = getClass_15;
_.typeId$ = 13;
function $$init_15(){
}

function $VetoDragException(this$static){
  $Exception(this$static);
  $$init_15();
  return this$static;
}

function getClass_16(){
  return Lcom_allen_1sauer_gwt_dnd_client_VetoDragException_2_classLit;
}

function VetoDragException(){
}

_ = VetoDragException.prototype = new Exception;
_.getClass$ = getClass_16;
_.typeId$ = 14;
function $$init_16(){
}

function $AbstractDropController(this$static, dropTarget){
  $Object(this$static);
  $$init_16();
  this$static.dropTarget_0 = dropTarget;
  $addStyleName(dropTarget, ($clinit_30() , INSTANCE).css().dropTarget_1());
  return this$static;
}

function $onDrop(){
}

function $onEnter(this$static){
  $addStyleName(this$static.dropTarget_0, ($clinit_30() , INSTANCE).css().dropTargetEngage());
}

function $onLeave(this$static){
  $removeStyleName(this$static.dropTarget_0, ($clinit_30() , INSTANCE).css().dropTargetEngage());
}

function $onMove(){
}

function $onPreviewDrop(){
}

function getClass_17(){
  return Lcom_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_2_classLit;
}

function getDropTarget(){
  return this.dropTarget_0;
}

function onDrop(context){
  $onDrop();
}

function onEnter(context){
  $onEnter(this);
}

function onLeave(context){
  $onLeave(this);
}

function onMove(context){
  $onMove();
}

function onPreviewDrop(context){
  $onPreviewDrop();
}

function AbstractDropController(){
}

_ = AbstractDropController.prototype = new Object_0;
_.getClass$ = getClass_17;
_.getDropTarget = getDropTarget;
_.onDrop = onDrop;
_.onEnter = onEnter;
_.onLeave = onLeave;
_.onMove = onMove;
_.onPreviewDrop = onPreviewDrop;
_.typeId$ = 15;
_.dropTarget_0 = null;
function $$init_17(){
}

function $AbstractPositioningDropController(this$static, dropTarget){
  $AbstractDropController(this$static, dropTarget);
  $$init_17();
  return this$static;
}

function getClass_18(){
  return Lcom_allen_1sauer_gwt_dnd_client_drop_AbstractPositioningDropController_2_classLit;
}

function AbstractPositioningDropController(){
}

_ = AbstractPositioningDropController.prototype = new AbstractDropController;
_.getClass$ = getClass_18;
_.typeId$ = 16;
function $clinit_20(){
  $clinit_20 = nullMethod;
  DUMMY_LABEL_IE_QUIRKS_MODE_OFFSET_HEIGHT = $Label_0(new Label, 'x');
}

function $$init_18(this$static){
  this$static.draggableList = $ArrayList(new ArrayList);
}

function $AbsolutePositionDropController(this$static, dropTarget){
  $clinit_20();
  $AbstractPositioningDropController(this$static, dropTarget);
  $$init_18(this$static);
  this$static.dropTarget = dropTarget;
  return this$static;
}

function $calcDropTargetOffset(this$static){
  var dropTargetLocation;
  dropTargetLocation = $WidgetLocation(new WidgetLocation, this$static.dropTarget, null);
  this$static.dropTargetOffsetX = $getLeft_0(dropTargetLocation) + getBorderLeft($getElement(this$static.dropTarget));
  this$static.dropTargetOffsetY = $getTop_0(dropTargetLocation) + getBorderTop($getElement(this$static.dropTarget));
}

function $makePositioner(reference){
  var inner, offsetHeight, offsetWidth, outer;
  outer = $SimplePanel(new SimplePanel);
  $addStyleName(outer, ($clinit_30() , INSTANCE).css().positioner_0());
  $setProperty($getStyle($getElement(outer)), 'margin', '0px');
  $add_1(get_1(), outer, -500, -500);
  outer.setWidget(DUMMY_LABEL_IE_QUIRKS_MODE_OFFSET_HEIGHT);
  inner = $SimplePanel(new SimplePanel);
  $setProperty($getStyle($getElement(inner)), 'margin', '0px');
  $setProperty($getStyle($getElement(inner)), 'border', 'none');
  offsetWidth = reference.getOffsetWidth() - getHorizontalBorders(outer);
  offsetHeight = reference.getOffsetHeight() - getVerticalBorders(outer);
  $setPixelSize(inner, offsetWidth, offsetHeight);
  outer.setWidget(inner);
  return outer;
}

function getClass_19(){
  return Lcom_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_2_classLit;
}

function makePositioner(reference){
  return $makePositioner(reference);
}

function onDrop_0(context){
  var draggable, draggable$iterator;
  for (draggable$iterator = this.draggableList.iterator_0(); draggable$iterator.hasNext();) {
    draggable = dynamicCast(draggable$iterator.next_0(), 21);
    $removeFromParent(draggable.positioner);
    $add_1(this.dropTarget, draggable.widget, draggable.desiredX, draggable.desiredY);
  }
  $onDrop();
}

function onEnter_0(context){
  var draggable, draggableAbsoluteLeft, draggableAbsoluteTop, widget, widget$iterator;
  $onEnter(this);
  this.dropTargetClientWidth = getClientWidth($getElement(this.dropTarget));
  this.dropTargetClientHeight = getClientHeight($getElement(this.dropTarget));
  $calcDropTargetOffset(this);
  draggableAbsoluteLeft = $getAbsoluteLeft_0(context.draggable);
  draggableAbsoluteTop = $getAbsoluteTop_0(context.draggable);
  for (widget$iterator = context.selectedWidgets.iterator_0(); widget$iterator.hasNext();) {
    widget = dynamicCast(widget$iterator.next_0(), 2);
    draggable = $AbsolutePositionDropController$Draggable(new AbsolutePositionDropController$Draggable, widget);
    draggable.positioner = this.makePositioner(widget);
    draggable.relativeX = $getAbsoluteLeft_0(widget) - draggableAbsoluteLeft;
    draggable.relativeY = $getAbsoluteTop_0(widget) - draggableAbsoluteTop;
    $add_3(this.draggableList, draggable);
  }
}

function onLeave_0(context){
  var draggable, draggable$iterator;
  for (draggable$iterator = this.draggableList.iterator_0(); draggable$iterator.hasNext();) {
    draggable = dynamicCast(draggable$iterator.next_0(), 21);
    $removeFromParent(draggable.positioner);
  }
  $clear_0(this.draggableList);
  $onLeave(this);
}

function onMove_0(context){
  var draggable, draggable$iterator;
  $onMove();
  for (draggable$iterator = this.draggableList.iterator_0(); draggable$iterator.hasNext();) {
    draggable = dynamicCast(draggable$iterator.next_0(), 21);
    draggable.desiredX = context.desiredDraggableX - this.dropTargetOffsetX + draggable.relativeX;
    draggable.desiredY = context.desiredDraggableY - this.dropTargetOffsetY + draggable.relativeY;
    draggable.desiredX = max(0, min_0(draggable.desiredX, this.dropTargetClientWidth - draggable.offsetWidth_0));
    draggable.desiredY = max(0, min_0(draggable.desiredY, this.dropTargetClientHeight - draggable.offsetHeight_0));
    $add_1(this.dropTarget, draggable.positioner, draggable.desiredX, draggable.desiredY);
  }
  if (context.dragController.getBehaviorScrollIntoView()) {
    $scrollIntoView($getElement(dynamicCast($get_3(this.draggableList, $size_1(this.draggableList) - 1), 21).positioner));
  }
  $calcDropTargetOffset(this);
}

function AbsolutePositionDropController(){
}

_ = AbsolutePositionDropController.prototype = new AbstractPositioningDropController;
_.getClass$ = getClass_19;
_.makePositioner = makePositioner;
_.onDrop = onDrop_0;
_.onEnter = onEnter_0;
_.onLeave = onLeave_0;
_.onMove = onMove_0;
_.typeId$ = 17;
_.dropTarget = null;
_.dropTargetClientHeight = 0;
_.dropTargetClientWidth = 0;
_.dropTargetOffsetX = 0;
_.dropTargetOffsetY = 0;
var DUMMY_LABEL_IE_QUIRKS_MODE_OFFSET_HEIGHT;
function $$init_19(this$static){
}

function $AbsolutePositionDropController$Draggable(this$static, widget){
  $Object(this$static);
  $$init_19(this$static);
  this$static.widget = widget;
  this$static.offsetWidth_0 = widget.getOffsetWidth();
  this$static.offsetHeight_0 = widget.getOffsetHeight();
  return this$static;
}

function getClass_20(){
  return Lcom_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_2_classLit;
}

function AbsolutePositionDropController$Draggable(){
}

_ = AbsolutePositionDropController$Draggable.prototype = new Object_0;
_.getClass$ = getClass_20;
_.typeId$ = 18;
_.desiredX = 0;
_.desiredY = 0;
_.offsetHeight_0 = 0;
_.offsetWidth_0 = 0;
_.positioner = null;
_.relativeX = 0;
_.relativeY = 0;
_.widget = null;
function $clinit_22(){
  $clinit_22 = nullMethod;
  $clinit_20();
}

function $$init_20(this$static){
}

function $BoundaryDropController(this$static, dropTarget, allowDroppingOnBoundaryPanel){
  $clinit_22();
  $AbsolutePositionDropController(this$static, dropTarget);
  $$init_20(this$static);
  $addStyleName(dropTarget, ($clinit_30() , INSTANCE).css().boundary());
  this$static.allowDroppingOnBoundaryPanel = allowDroppingOnBoundaryPanel;
  return this$static;
}

function getClass_21(){
  return Lcom_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_2_classLit;
}

function makePositioner_0(reference){
  if (this.allowDroppingOnBoundaryPanel) {
    return $makePositioner(reference);
  }
   else {
    return $SimplePanel(new SimplePanel);
  }
}

function onPreviewDrop_0(context){
  if (!this.allowDroppingOnBoundaryPanel) {
    throw $VetoDragException(new VetoDragException);
  }
  $onPreviewDrop();
}

function BoundaryDropController(){
}

_ = BoundaryDropController.prototype = new AbsolutePositionDropController;
_.getClass$ = getClass_21;
_.makePositioner = makePositioner_0;
_.onPreviewDrop = onPreviewDrop_0;
_.typeId$ = 19;
_.allowDroppingOnBoundaryPanel = true;
function $$init_21(){
}

function $SimpleDropController(this$static, dropTarget){
  $AbstractDropController(this$static, dropTarget);
  $$init_21();
  return this$static;
}

function getClass_22(){
  return Lcom_allen_1sauer_gwt_dnd_client_drop_SimpleDropController_2_classLit;
}

function SimpleDropController(){
}

_ = SimpleDropController.prototype = new AbstractDropController;
_.getClass$ = getClass_22;
_.typeId$ = 20;
function $$init_22(){
}

function $AbstractArea(this$static){
  $Object(this$static);
  $$init_22();
  return this$static;
}

function $getBottom(this$static){
  return this$static.bottom;
}

function $getLeft(this$static){
  return this$static.left;
}

function $getRight(this$static){
  return this$static.right;
}

function $getTop(this$static){
  return this$static.top_0;
}

function $setBottom(this$static, bottom){
  this$static.bottom = bottom;
}

function $setLeft(this$static, left){
  this$static.left = left;
}

function $setRight(this$static, right){
  this$static.right = right;
}

function $setTop(this$static, top_0){
  this$static.top_0 = top_0;
}

function getBottom(){
  return $getBottom(this);
}

function getClass_23(){
  return Lcom_allen_1sauer_gwt_dnd_client_util_AbstractArea_2_classLit;
}

function getLeft(){
  return $getLeft(this);
}

function getRight(){
  return $getRight(this);
}

function getTop(){
  return $getTop(this);
}

function intersects(targetArea){
  if ($getRight(this) < targetArea.getLeft() || $getLeft(this) > targetArea.getRight() || $getBottom(this) < targetArea.getTop() || $getTop(this) > targetArea.getBottom()) {
    return false;
  }
  return true;
}

function intersects_0(location_0){
  return this.left <= location_0.getLeft() && location_0.getLeft() <= this.right && this.top_0 <= location_0.getTop() && location_0.getTop() <= this.bottom;
}

function AbstractArea(){
}

_ = AbstractArea.prototype = new Object_0;
_.getBottom = getBottom;
_.getClass$ = getClass_23;
_.getLeft = getLeft;
_.getRight = getRight;
_.getTop = getTop;
_.intersects = intersects;
_.intersects_0 = intersects_0;
_.typeId$ = 0;
_.bottom = 0;
_.left = 0;
_.right = 0;
_.top_0 = 0;
function $$init_23(){
}

function $AbstractLocation(this$static){
  $Object(this$static);
  $$init_23();
  return this$static;
}

function getClass_24(){
  return Lcom_allen_1sauer_gwt_dnd_client_util_AbstractLocation_2_classLit;
}

function AbstractLocation(){
}

_ = AbstractLocation.prototype = new Object_0;
_.getClass$ = getClass_24;
_.typeId$ = 21;
function $$init_24(){
}

function $CoordinateLocation(this$static, left, top_0){
  $AbstractLocation(this$static);
  $$init_24();
  this$static.left = left;
  this$static.top_0 = top_0;
  return this$static;
}

function getClass_25(){
  return Lcom_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_2_classLit;
}

function getLeft_0(){
  return this.left;
}

function getTop_0(){
  return this.top_0;
}

function CoordinateLocation(){
}

_ = CoordinateLocation.prototype = new AbstractLocation;
_.getClass$ = getClass_25;
_.getLeft = getLeft_0;
_.getTop = getTop_0;
_.typeId$ = 22;
_.left = 0;
_.top_0 = 0;
function $clinit_29(){
  $clinit_29 = nullMethod;
  false;
  impl_0 = $DOMUtilImplOpera(new DOMUtilImplOpera);
}

function cancelAllDocumentSelections(){
  $clinit_29();
  impl_0.cancelAllDocumentSelections();
}

function fastSetElementPosition(elem, left, top_0){
  $clinit_29();
  $setPropertyPx($getStyle(elem), 'left', left);
  $setPropertyPx($getStyle(elem), 'top', top_0);
}

function getBorderLeft(elem){
  $clinit_29();
  return impl_0.getBorderLeft(elem);
}

function getBorderTop(elem){
  $clinit_29();
  return impl_0.getBorderTop(elem);
}

function getClientHeight(elem){
  $clinit_29();
  return impl_0.getClientHeight(elem);
}

function getClientWidth(elem){
  $clinit_29();
  return impl_0.getClientWidth(elem);
}

function getEffectiveStyle(elem, styleName){
  $clinit_29();
  return $getEffectiveStyle(impl_0, elem, styleName);
}

function getHorizontalBorders(widget){
  $clinit_29();
  return $getHorizontalBorders(impl_0, widget);
}

function getVerticalBorders(widget){
  $clinit_29();
  return $getVerticalBorders(impl_0, widget);
}

function reportFatalAndThrowRuntimeException(msg){
  $clinit_29();
  msg = 'gwt-dnd warning: ' + msg;
  alert_0(msg);
  throw $RuntimeException_0(new RuntimeException, msg);
}

var impl_0 = null;
function $clinit_30(){
  $clinit_30 = nullMethod;
  INSTANCE = $com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator(new com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator);
}

var INSTANCE;
function $$init_25(){
}

function $DragEntryPoint(this$static){
  $Object(this$static);
  $$init_25();
  return this$static;
}

function $onModuleLoad(){
  setVersion();
  injectAtStart(($clinit_30() , INSTANCE).css().getText());
}

function getClass_26(){
  return Lcom_allen_1sauer_gwt_dnd_client_util_DragEntryPoint_2_classLit;
}

function setVersion(){
  $wnd.$GWT_DND_VERSION = '3.0.1';
}

function DragEntryPoint(){
}

_ = DragEntryPoint.prototype = new Object_0;
_.getClass$ = getClass_26;
_.typeId$ = 0;
function $$init_26(){
}

function $WidgetArea(this$static, widget, reference){
  var bottom, elem, left, p, right, top_0;
  $AbstractArea(this$static);
  $$init_26();
  $setLeft(this$static, $getAbsoluteLeft_0(widget));
  $setTop(this$static, $getAbsoluteTop_0(widget));
  if (isNotNull(reference)) {
    $setLeft(this$static, $getLeft(this$static) - $getAbsoluteLeft_0(reference) - getBorderLeft($getElement(reference)));
    $setTop(this$static, $getTop(this$static) - $getAbsoluteTop_0(reference) - getBorderTop($getElement(reference)));
  }
  $setRight(this$static, $getLeft(this$static) + widget.getOffsetWidth());
  $setBottom(this$static, $getTop(this$static) + widget.getOffsetHeight());
  elem = $getOffsetParent($getElement(widget));
  while (isNotNull(elem) && isNotNull(p = $getOffsetParent(elem))) {
    if (!$equals_1(getEffectiveStyle(elem, 'overflow'), 'visible')) {
      left = $getAbsoluteLeft(elem);
      if ($getLeft(this$static) < left) {
        $setLeft(this$static, left);
      }
      top_0 = $getAbsoluteTop(elem);
      if ($getTop(this$static) < top_0) {
        $setTop(this$static, top_0);
      }
      bottom = top_0 + $getOffsetHeight(elem);
      if ($getBottom(this$static) > bottom) {
        $setBottom(this$static, max($getTop(this$static), bottom));
      }
      right = left + $getOffsetWidth(elem);
      if ($getRight(this$static) > right) {
        $setRight(this$static, max($getLeft(this$static), right));
      }
    }
    elem = p;
  }
  return this$static;
}

function getClass_27(){
  return Lcom_allen_1sauer_gwt_dnd_client_util_WidgetArea_2_classLit;
}

function WidgetArea(){
}

_ = WidgetArea.prototype = new AbstractArea;
_.getClass$ = getClass_27;
_.typeId$ = 0;
function $$init_27(){
}

function $WidgetLocation(this$static, widget, reference){
  $AbstractLocation(this$static);
  $$init_27();
  $internalSetWidget(this$static, widget);
  $internalSetReference(this$static, reference);
  $recalculate(this$static);
  return this$static;
}

function $getLeft_0(this$static){
  return this$static.left;
}

function $getTop_0(this$static){
  return this$static.top_0;
}

function $internalSetReference(this$static, reference){
  if (isNull(reference) || jsEquals(reference, get_1())) {
    this$static.referenceAdjustLeft = 0;
    this$static.referenceAdjustTop = 0;
  }
   else {
    this$static.referenceAdjustLeft = $getAbsoluteLeft_0(reference) + getBorderLeft($getElement(reference));
    this$static.referenceAdjustTop = $getAbsoluteTop_0(reference) + getBorderTop($getElement(reference));
  }
}

function $internalSetWidget(this$static, widget){
  if (isNull(widget) || jsEquals(widget, get_1())) {
    this$static.widgetLeft = 0;
    this$static.widgetTop = 0;
  }
   else {
    this$static.widgetLeft = $getAbsoluteLeft_0(widget) - $getScrollLeft_1($getElement(widget));
    this$static.widgetTop = $getAbsoluteTop_0(widget) - $getScrollTop_0($getElement(widget));
  }
}

function $recalculate(this$static){
  this$static.left = this$static.widgetLeft - this$static.referenceAdjustLeft;
  this$static.top_0 = this$static.widgetTop - this$static.referenceAdjustTop;
}

function getClass_28(){
  return Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2_classLit;
}

function getLeft_1(){
  return $getLeft_0(this);
}

function getTop_1(){
  return $getTop_0(this);
}

function WidgetLocation(){
}

_ = WidgetLocation.prototype = new AbstractLocation;
_.getClass$ = getClass_28;
_.getLeft = getLeft_1;
_.getTop = getTop_1;
_.typeId$ = 23;
_.left = 0;
_.referenceAdjustLeft = 0;
_.referenceAdjustTop = 0;
_.top_0 = 0;
_.widgetLeft = 0;
_.widgetTop = 0;
function $$init_28(){
}

function $com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator(this$static){
  $Object(this$static);
  $$init_28();
  return this$static;
}

function $css(this$static){
  if (isNull(css_0)) {
    css_0 = $com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator$1(new com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator$1, this$static);
  }
  return css_0;
}

function css_1(){
  return $css(this);
}

function getClass_29(){
  return Lcom_allen_1sauer_gwt_dnd_client_util_com_1allen_1sauer_1gwt_1dnd_1client_1util_1DragClientBundle_1default_1InlineClientBundleGenerator_2_classLit;
}

function com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator(){
}

_ = com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator.prototype = new Object_0;
_.css = css_1;
_.getClass$ = getClass_29;
_.typeId$ = 0;
var css_0 = null;
function $$init_29(){
}

function $com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator$1(this$static, this$0){
  this$static , this$0;
  $Object(this$static);
  $$init_29();
  return this$static;
}

function $getText(){
  return $isRTL(getCurrentLocale())?'HTML{margin:0 !important;border:none !important;}.dragdrop-handle{cursor:move;user-select:none;-khtml-user-select:none;-moz-user-select:none;}.dragdrop-draggable{zoom:1;}.dragdrop-dragging{zoom:normal;}.dragdrop-positioner{border:1px dashed #1e90ff;margin:0 !important;zoom:1;z-index:100;}.dragdrop-flow-panel-positioner{color:#1e90ff;display:inline;text-align:center;vertical-align:middle;}.dragdrop-proxy{background-color:#7af;}.dragdrop-selected,.dragdrop-dragging,.dragdrop-proxy{filter:alpha(opacity\\=30);opacity:0.3;}.dragdrop-movable-panel{z-index:200;margin:0 !important;border:none !important;}':'HTML{margin:0 !important;border:none !important;}.dragdrop-handle{cursor:move;user-select:none;-khtml-user-select:none;-moz-user-select:none;}.dragdrop-draggable{zoom:1;}.dragdrop-dragging{zoom:normal;}.dragdrop-positioner{border:1px dashed #1e90ff;margin:0 !important;zoom:1;z-index:100;}.dragdrop-flow-panel-positioner{color:#1e90ff;display:inline;text-align:center;vertical-align:middle;}.dragdrop-proxy{background-color:#7af;}.dragdrop-selected,.dragdrop-dragging,.dragdrop-proxy{filter:alpha(opacity\\=30);opacity:0.3;}.dragdrop-movable-panel{z-index:200;margin:0 !important;border:none !important;}';
}

function boundary(){
  return 'dragdrop-boundary';
}

function draggable_0(){
  return 'dragdrop-draggable';
}

function dragging(){
  return 'dragdrop-dragging';
}

function dropTarget_0(){
  return 'dragdrop-dropTarget';
}

function dropTargetEngage(){
  return 'dragdrop-dropTarget-engage';
}

function getClass_30(){
  return Lcom_allen_1sauer_gwt_dnd_client_util_com_1allen_1sauer_1gwt_1dnd_1client_1util_1DragClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit;
}

function getText(){
  return $getText();
}

function handle(){
  return 'dragdrop-handle';
}

function movablePanel(){
  return 'dragdrop-movable-panel';
}

function positioner(){
  return 'dragdrop-positioner';
}

function proxy_0(){
  return 'dragdrop-proxy';
}

function selected_0(){
  return 'dragdrop-selected';
}

function com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator$1(){
}

_ = com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator$1.prototype = new Object_0;
_.boundary = boundary;
_.draggable_0 = draggable_0;
_.dragging_0 = dragging;
_.dropTarget_1 = dropTarget_0;
_.dropTargetEngage = dropTargetEngage;
_.getClass$ = getClass_30;
_.getText = getText;
_.handle = handle;
_.movablePanel_0 = movablePanel;
_.positioner_0 = positioner;
_.proxy = proxy_0;
_.selected_0 = selected_0;
_.typeId$ = 24;
function $$init_30(){
}

function $DOMUtilImpl(this$static){
  $Object(this$static);
  $$init_30();
  return this$static;
}

function $getEffectiveStyle(this$static, elem, style){
  return this$static.getComputedStyle_0(elem, style) || ((elem.currentStyle?elem.currentStyle[style]:null) || elem.style[style]);
}

function $getHorizontalBorders(this$static, widget){
  return widget.getOffsetWidth() - this$static.getClientWidth($getElement(widget));
}

function $getVerticalBorders(this$static, widget){
  return widget.getOffsetHeight() - this$static.getClientHeight($getElement(widget));
}

function getClass_31(){
  return Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImpl_2_classLit;
}

function getComputedStyle(elem, style){
  if ($doc.defaultView && $doc.defaultView.getComputedStyle) {
    var styles = $doc.defaultView.getComputedStyle(elem, '');
    if (styles) {
      return styles[style];
    }
  }
  return null;
}

function DOMUtilImpl(){
}

_ = DOMUtilImpl.prototype = new Object_0;
_.getClass$ = getClass_31;
_.getComputedStyle_0 = getComputedStyle;
_.typeId$ = 0;
function $$init_31(){
}

function $DOMUtilImplStandard(this$static){
  $DOMUtilImpl(this$static);
  $$init_31();
  return this$static;
}

function cancelAllDocumentSelections_0(){
  try {
    $wnd.getSelection().removeAllRanges();
  }
   catch (e) {
    throw new Error('unselect exception:\n' + e);
  }
}

function getBorderLeft_0(elem){
  try {
    var computedStyle = $doc.defaultView.getComputedStyle(elem, null);
    var borderLeftWidth = computedStyle.getPropertyValue('border-left-width');
    return borderLeftWidth.indexOf('px') == -1?0:parseInt(borderLeftWidth.substr(0, borderLeftWidth.length - 2));
  }
   catch (e) {
    throw new Error('getBorderLeft exception:\n' + e);
  }
}

function getBorderTop_0(elem){
  try {
    var computedStyle = $doc.defaultView.getComputedStyle(elem, null);
    var borderTopWidth = computedStyle.getPropertyValue('border-top-width');
    return borderTopWidth.indexOf('px') == -1?0:parseInt(borderTopWidth.substr(0, borderTopWidth.length - 2));
  }
   catch (e) {
    throw new Error('getBorderTop: ' + e);
  }
}

function getClass_32(){
  return Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2_classLit;
}

function getClientHeight_0(elem){
  try {
    return elem.clientHeight;
  }
   catch (e) {
    throw new Error('getClientHeight exception:\n' + e);
  }
}

function getClientWidth_0(elem){
  try {
    return elem.clientWidth;
  }
   catch (e) {
    throw new Error('getClientWidth exception:\n' + e);
  }
}

function DOMUtilImplStandard(){
}

_ = DOMUtilImplStandard.prototype = new DOMUtilImpl;
_.cancelAllDocumentSelections = cancelAllDocumentSelections_0;
_.getBorderLeft = getBorderLeft_0;
_.getBorderTop = getBorderTop_0;
_.getClass$ = getClass_32;
_.getClientHeight = getClientHeight_0;
_.getClientWidth = getClientWidth_0;
_.typeId$ = 0;
function $$init_32(){
}

function $DOMUtilImplOpera(this$static){
  $DOMUtilImplStandard(this$static);
  $$init_32();
  return this$static;
}

function getClass_33(){
  return Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplOpera_2_classLit;
}

function DOMUtilImplOpera(){
}

_ = DOMUtilImplOpera.prototype = new DOMUtilImplStandard;
_.getClass$ = getClass_33;
_.typeId$ = 0;
function $$init_33(){
}

function $DummyEntryPoint(this$static){
  $Object(this$static);
  $$init_33();
  return this$static;
}

function $onModuleLoad_0(){
}

function getClass_34(){
  return Lcom_google_common_DummyEntryPoint_2_classLit;
}

function DummyEntryPoint(){
}

_ = DummyEntryPoint.prototype = new Object_0;
_.getClass$ = getClass_34;
_.typeId$ = 0;
function $$init_34(this$static){
}

function $Animation(this$static){
  $Object(this$static);
  $$init_34(this$static);
  return this$static;
}

function $cancel(this$static){
  if (!this$static.running) {
    return;
  }
  animations.remove_1(this$static);
  $onCancel(this$static);
  this$static.started = false;
  this$static.running = false;
}

function $interpolate(progress){
  return (1 + cos(3.141592653589793 + progress * 3.141592653589793)) / 2;
}

function $onCancel(this$static){
  if (this$static.started) {
    this$static.onComplete();
  }
}

function $onStart(this$static){
  this$static.onUpdate($interpolate(0));
}

function $run(this$static, duration){
  $run_0(this$static, duration, currentTimeMillis_0());
}

function $run_0(this$static, duration, startTime){
  $cancel(this$static);
  this$static.running = true;
  this$static.duration = duration;
  this$static.startTime = startTime;
  if ($update(this$static, currentTimeMillis_0())) {
    return;
  }
  if (isNull(animations)) {
    animations = $ArrayList(new ArrayList);
    animationTimer = $Animation$1(new Animation$1, this$static);
  }
  animations.add(this$static);
  if (animations.size_0() == 1) {
    $schedule(animationTimer, 25);
  }
}

function $update(this$static, curTime){
  var finished, progress;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.started && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    this$static.onUpdate($interpolate(progress));
    return false;
  }
  if (!this$static.started && curTime >= this$static.startTime) {
    this$static.started = true;
    this$static.onStart();
  }
  if (finished) {
    this$static.onComplete();
    this$static.started = false;
    this$static.running = false;
    return true;
  }
  return false;
}

function getClass_35(){
  return Lcom_google_gwt_animation_client_Animation_2_classLit;
}

function onComplete(){
  this.onUpdate($interpolate(1));
}

function onStart(){
  $onStart(this);
}

function updateAnimations(){
  var animation, animation$array, animation$index, animation$max, curAnimations, curTime;
  curAnimations = initDim(_3Lcom_google_gwt_animation_client_Animation_2_classLit, 308, 124, animations.size_0(), 0);
  curAnimations = dynamicCast(animations.toArray(curAnimations), 22);
  curTime = currentTimeMillis_0();
  for (animation$array = curAnimations , animation$index = 0 , animation$max = animation$array.length; animation$index < animation$max; ++animation$index) {
    animation = animation$array[animation$index];
    if (animation.running && $update(animation, curTime)) {
      animations.remove_1(animation);
    }
  }
  if (animations.size_0() > 0) {
    $schedule(animationTimer, 25);
  }
}

function Animation(){
}

_ = Animation.prototype = new Object_0;
_.getClass$ = getClass_35;
_.onComplete = onComplete;
_.onStart = onStart;
_.typeId$ = 26;
_.duration = -1;
_.running = false;
_.startTime = -1;
_.started = false;
var animationTimer = null, animations = null;
function $clinit_43(){
  $clinit_43 = nullMethod;
  timers = $ArrayList(new ArrayList);
  hookWindowClosing();
}

function $$init_35(){
}

function $Timer(this$static){
  $clinit_43();
  $Object(this$static);
  $$init_35();
  return this$static;
}

function $cancel_0(this$static){
  if (this$static.isRepeating) {
    clearInterval_0(this$static.timerId);
  }
   else {
    clearTimeout_0(this$static.timerId);
  }
  $remove_7(timers, this$static);
}

function $schedule(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw $IllegalArgumentException(new IllegalArgumentException, 'must be positive');
  }
  $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = createTimeout(this$static, delayMillis);
  $add_3(timers, this$static);
}

function clearInterval_0(id){
  $wnd.clearInterval(id);
}

function clearTimeout_0(id){
  $wnd.clearTimeout(id);
}

function createTimeout(timer, delay){
  return $wnd.setTimeout($entry(function(){
    timer.fire();
  }
  ), delay);
}

function fire(){
  if (!this.isRepeating) {
    $remove_7(timers, this);
  }
  this.run();
}

function getClass_36(){
  return Lcom_google_gwt_user_client_Timer_2_classLit;
}

function hookWindowClosing(){
  addCloseHandler($Timer$1(new Timer$1));
}

function Timer(){
}

_ = Timer.prototype = new Object_0;
_.fire = fire;
_.getClass$ = getClass_36;
_.typeId$ = 27;
_.isRepeating = false;
_.timerId = 0;
var timers;
function $clinit_44(){
  $clinit_44 = nullMethod;
  $clinit_43();
}

function $$init_36(){
}

function $Animation$1(this$static, this$0){
  $clinit_44();
  this$static , this$0;
  $Timer(this$static);
  $$init_36();
  return this$static;
}

function getClass_37(){
  return Lcom_google_gwt_animation_client_Animation$1_2_classLit;
}

function run(){
  updateAnimations();
}

function Animation$1(){
}

_ = Animation$1.prototype = new Timer;
_.getClass$ = getClass_37;
_.run = run;
_.typeId$ = 28;
function currentTimeMillis_0(){
  return (new Date).getTime();
}

function getModuleBaseURL(){
  return getModuleBaseURL_0();
}

function getUncaughtExceptionHandler(){
  return sUncaughtExceptionHandler;
}

function isClient(){
  return true;
}

function isScript(){
  return true;
}

var sUncaughtExceptionHandler = null;
function $$init_37(){
}

function $RuntimeException(this$static){
  $Exception(this$static);
  $$init_37();
  return this$static;
}

function $RuntimeException_0(this$static, message){
  $Exception_0(this$static, message);
  $$init_37();
  return this$static;
}

function $RuntimeException_1(this$static, message, cause){
  $Exception_1(this$static, message, cause);
  $$init_37();
  return this$static;
}

function getClass_38(){
  return Ljava_lang_RuntimeException_2_classLit;
}

function RuntimeException(){
}

_ = RuntimeException.prototype = new Exception;
_.getClass$ = getClass_38;
_.typeId$ = 29;
function $$init_38(){
}

function $JavaScriptException(this$static, e){
  $RuntimeException(this$static);
  $$init_38();
  this$static.e = e;
  if (isScript()) {
    createStackTrace(this$static);
  }
  return this$static;
}

function $getException(this$static){
  return instanceOfJso(this$static.e)?dynamicCastJso(this$static.e):null;
}

function getClass_39(){
  return Lcom_google_gwt_core_client_JavaScriptException_2_classLit;
}

function JavaScriptException(){
}

_ = JavaScriptException.prototype = new RuntimeException;
_.getClass$ = getClass_39;
_.typeId$ = 30;
_.e = null;
function $cast(this$static){
  return this$static;
}

function $equals_0(this$static, other){
  return $equals(this$static, other);
}

function $getClass(){
  return Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function $hashCode_0(this$static){
  return getHashCode(this$static);
}

function createArray(){
  return [];
}

function createObject(){
  return {};
}

function equals_1(other){
  return $equals_0(this, other);
}

function equals__devirtual$(this$static, other){
  return isJavaObject(this$static)?this$static.equals$(other):$equals_0(this$static, other);
}

function getClass_40(){
  return $getClass();
}

function getClass__devirtual$(this$static){
  return isJavaObject(this$static)?this$static.getClass$():$getClass();
}

function hashCode_2(){
  return $hashCode_0(this);
}

function hashCode__devirtual$(this$static){
  return isJavaObject(this$static)?this$static.hashCode$():$hashCode_0(this$static);
}

function $get(this$static, index){
  return this$static[index];
}

function $length(this$static){
  return this$static.length;
}

function $push(this$static, value){
  this$static[this$static.length] = value;
}

function $set(this$static, index, value){
  this$static[index] = value;
}

function $get_0(this$static, index){
  return this$static[index];
}

function $join(this$static, separator){
  return this$static.join(separator);
}

function $length_0(this$static){
  return this$static.length;
}

function $set_0(this$static, index, value){
  this$static[index] = value;
}

function $setLength(this$static, newLength){
  this$static.length = newLength;
}

function $unshift(this$static, value){
  this$static.unshift(value);
}

function $$init_39(){
}

function $Scheduler(this$static){
  $Object(this$static);
  $$init_39();
  return this$static;
}

function get(){
  return $clinit_57() , INSTANCE_0;
}

function getClass_41(){
  return Lcom_google_gwt_core_client_Scheduler_2_classLit;
}

function Scheduler(){
}

_ = Scheduler.prototype = new Object_0;
_.getClass$ = getClass_41;
_.typeId$ = 0;
function apply(jsFunction, thisObj, arguments_0){
  if (isScript()) {
    return jsFunction.apply(thisObj, arguments_0);
  }
   else {
    _ = jsFunction.apply(thisObj, arguments_0);
    if (_ != null) {
      _ = Object(_);
    }
    return _;
  }
}

function enter(){
  return entryDepth++ == 0;
}

function entry_0(jsFunction){
  return function(){
    return entry0(jsFunction, this, arguments);
  }
  ;
}

function entry0(jsFunction, thisObj, arguments_0){
  var $e0, initialEntry, t;
  initialEntry = enter();
  try {
    if (isNotNull(getUncaughtExceptionHandler())) {
      try {
        return apply(jsFunction, thisObj, arguments_0);
      }
       catch ($e0) {
        $e0 = caught_0($e0);
        if (instanceOf($e0, 23)) {
          t = $e0;
          getUncaughtExceptionHandler().nullMethod(t);
          return undefined_0();
        }
         else 
          throw $e0;
      }
    }
     else {
      return apply(jsFunction, thisObj, arguments_0);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  if (initialEntry) {
    $flushFinallyCommands(($clinit_57() , INSTANCE_0));
  }
  --entryDepth;
}

function getHashCode(o){
  return o.$H || (o.$H = getNextHashId());
}

function getModuleBaseURL_0(){
  return $moduleBase;
}

function getNextHashId(){
  return ++sNextHashId;
}

function registerEntry(){
  if (isScript()) {
    return entry_0;
  }
   else {
    return $entry = entry_0;
  }
}

function undefined_0(){
  return;
}

var entryDepth = 0, sNextHashId = 0;
function $clinit_57(){
  $clinit_57 = nullMethod;
  INSTANCE_0 = $SchedulerImpl(new SchedulerImpl);
  1;
  50;
  100;
}

function $$init_40(this$static){
  this$static.flusher = $SchedulerImpl$1(new SchedulerImpl$1, this$static);
  this$static , $SchedulerImpl$2(new SchedulerImpl$2, this$static);
  this$static.deferredCommands = $cast(createArray());
  this$static.incrementalCommands = $cast(createArray());
  this$static.finallyCommands = $cast(createArray());
}

function $SchedulerImpl(this$static){
  $clinit_57();
  $Scheduler(this$static);
  $$init_40(this$static);
  return this$static;
}

function $flushFinallyCommands(this$static){
  var oldFinally;
  oldFinally = this$static.finallyCommands;
  this$static.finallyCommands = $cast(createArray());
  runScheduledTasks(oldFinally, this$static.finallyCommands);
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  oldDeferred = this$static.deferredCommands;
  this$static.deferredCommands = $cast(createArray());
  runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  this$static.incrementalCommands = runRepeatingTasks(this$static.incrementalCommands);
}

function $isWorkQueued(this$static){
  return $length(this$static.deferredCommands) > 0 || $length(this$static.incrementalCommands) > 0;
}

function $scheduleFixedDelay(cmd, delayMs){
  scheduleFixedDelayImpl(cmd, delayMs);
}

function execute_0(cmd){
  return cmd.execute_0();
}

function getClass_42(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit;
}

function runRepeatingTasks(tasks){
  var canceledSomeTasks, i, length_0, newTasks, start, t;
  canceledSomeTasks = false;
  length_0 = $length(tasks);
  start = currentTimeMillis_0();
  while (currentTimeMillis_0() - start < 100) {
    for (i = 0; i < length_0; ++i) {
      t = $get(tasks, i);
      if (isNull(t)) {
        continue;
      }
      if (!$executeRepeating(t)) {
        $set(tasks, i, null);
        canceledSomeTasks = true;
      }
    }
  }
  if (canceledSomeTasks) {
    newTasks = $cast(createArray());
    for (i = 0; i < length_0; ++i) {
      if (isNull($get(tasks, i))) {
        continue;
      }
      $push(newTasks, $get(tasks, i));
    }
    return newTasks;
  }
   else {
    return tasks;
  }
}

function runScheduledTasks(tasks, rescheduled){
  var $e0, e, i, j, t;
  for (i = 0 , j = $length(tasks); i < j; ++i) {
    t = $get(tasks, i);
    try {
      if ($isRepeating(t)) {
        if ($executeRepeating(t)) {
          $push(rescheduled, t);
        }
      }
       else {
        $executeScheduled(t);
      }
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 25)) {
        e = $e0;
        if (isNotNull(getUncaughtExceptionHandler())) {
          getUncaughtExceptionHandler().nullMethod(e);
        }
      }
       else 
        throw $e0;
    }
  }
}

function scheduleFinally(cmd){
  $push(this.finallyCommands, create(cmd));
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $wnd.setTimeout(function(){
    var ret = $entry(execute_0)(cmd);
    if (!isScript()) {
      ret = ret == true;
    }
    if (ret) {
      $wnd.setTimeout(arguments.callee, delayMs);
    }
  }
  , delayMs);
}

function SchedulerImpl(){
}

_ = SchedulerImpl.prototype = new Scheduler;
_.getClass$ = getClass_42;
_.scheduleFinally = scheduleFinally;
_.typeId$ = 0;
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE_0;
function $$init_41(){
}

function $SchedulerImpl$1(this$static, this$0){
  this$static.this$0 = this$0;
  $Object(this$static);
  $$init_41();
  return this$static;
}

function execute_1(){
  this.this$0.flushRunning = true;
  $flushPostEventPumpCommands(this.this$0);
  this.this$0.flushRunning = false;
  return this.this$0.shouldBeRunning = $isWorkQueued(this.this$0);
}

function getClass_43(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2_classLit;
}

function SchedulerImpl$1(){
}

_ = SchedulerImpl$1.prototype = new Object_0;
_.execute_0 = execute_1;
_.getClass$ = getClass_43;
_.typeId$ = 0;
_.this$0 = null;
function $$init_42(){
}

function $SchedulerImpl$2(this$static, this$0){
  this$static.this$0 = this$0;
  $Object(this$static);
  $$init_42();
  return this$static;
}

function execute_2(){
  if (this.this$0.flushRunning) {
    $scheduleFixedDelay(this.this$0.flusher, 1);
  }
  return this.this$0.shouldBeRunning;
}

function getClass_44(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2_classLit;
}

function SchedulerImpl$2(){
}

_ = SchedulerImpl$2.prototype = new Object_0;
_.execute_0 = execute_2;
_.getClass$ = getClass_44;
_.typeId$ = 0;
_.this$0 = null;
function $executeRepeating(this$static){
  return $getRepeating(this$static).execute_0();
}

function $executeScheduled(this$static){
  $getScheduled(this$static).execute();
}

function $getRepeating(this$static){
  return this$static[0];
}

function $getScheduled(this$static){
  return this$static[0];
}

function $isRepeating(this$static){
  return this$static[1];
}

function create(cmd){
  return [cmd, false];
}

function createStackTrace(e){
  if (!isScript()) {
    throw $RuntimeException_0(new RuntimeException, 'StackTraceCreator should only be called in web mode');
  }
  $StackTraceCreator$CollectorOpera(new StackTraceCreator$CollectorOpera).createStackTrace(e);
}

function createStackTrace_0(){
  if (!isScript()) {
    throw $RuntimeException_0(new RuntimeException, 'StackTraceCreator should only be called in web mode');
  }
  return $StackTraceCreator$CollectorOpera(new StackTraceCreator$CollectorOpera).collect();
}

function extractNameFromToString(fnToString){
  var index, start, toReturn;
  toReturn = '';
  fnToString = $trim(fnToString);
  index = $indexOf_0(fnToString, '(');
  if (index != -1) {
    start = $startsWith(fnToString, 'function')?8:0;
    toReturn = $trim($substring_0(fnToString, start, index));
  }
  return $length_1(toReturn) > 0?toReturn:'anonymous';
}

function fillInStackTrace(t){
  if (!isScript()) {
    throw $RuntimeException_0(new RuntimeException, 'StackTraceCreator should only be called in web mode');
  }
  $StackTraceCreator$CollectorOpera(new StackTraceCreator$CollectorOpera).fillInStackTrace(t);
}

function splice(arr, length_0){
  arr.length >= length_0 && arr.splice(0, length_0);
  return arr;
}

function $$init_43(){
}

function $StackTraceCreator$Collector(this$static){
  $Object(this$static);
  $$init_43();
  return this$static;
}

function $makeException(){
  try {
    null.a();
  }
   catch (e) {
    return e;
  }
}

function collect(){
  var seen = {};
  var toReturn = [];
  var callee = arguments.callee.caller.caller;
  while (callee) {
    var name_0 = this.extractName(callee.toString());
    toReturn.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return toReturn;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
  return toReturn;
}

function createStackTrace_1(e){
  var i, j, stack, stackTrace;
  stack = this.inferFrom($getException(e));
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, 345, 147, $length_0(stack), 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = $StackTraceElement(new StackTraceElement, 'Unknown', $get_0(stack, i), 'Unknown source', 0);
  }
  $setStackTrace(e, stackTrace);
}

function extractName(fnToString){
  return extractNameFromToString(fnToString);
}

function fillInStackTrace_0(t){
  var i, j, stack, stackTrace;
  stack = createStackTrace_0();
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, 345, 147, $length_0(stack), 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = $StackTraceElement(new StackTraceElement, 'Unknown', $get_0(stack, i), 'Unknown source', 0);
  }
  $setStackTrace(t, stackTrace);
}

function getClass_45(){
  return Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit;
}

function inferFrom(e){
  return $cast(createArray());
}

function StackTraceCreator$Collector(){
}

_ = StackTraceCreator$Collector.prototype = new Object_0;
_.collect = collect;
_.createStackTrace = createStackTrace_1;
_.extractName = extractName;
_.fillInStackTrace = fillInStackTrace_0;
_.getClass$ = getClass_45;
_.inferFrom = inferFrom;
_.typeId$ = 0;
function $$init_44(){
}

function $StackTraceCreator$CollectorMoz(this$static){
  $StackTraceCreator$Collector(this$static);
  $$init_44();
  return this$static;
}

function $collect(this$static){
  return splice(this$static.inferFrom($makeException()), this$static.toSplice());
}

function $inferFrom(this$static, e){
  var i, j, stack;
  stack = this$static.getStack(e);
  for (i = 0 , j = $length_0(stack); i < j; ++i) {
    $set_0(stack, i, this$static.extractName($get_0(stack, i)));
  }
  return stack;
}

function collect_0(){
  return $collect(this);
}

function getClass_46(){
  return Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2_classLit;
}

function getStack(e){
  return e && e.stack?e.stack.split('\n'):[];
}

function inferFrom_0(e){
  return $inferFrom(this, e);
}

function toSplice(){
  return 2;
}

function StackTraceCreator$CollectorMoz(){
}

_ = StackTraceCreator$CollectorMoz.prototype = new StackTraceCreator$Collector;
_.collect = collect_0;
_.getClass$ = getClass_46;
_.getStack = getStack;
_.inferFrom = inferFrom_0;
_.toSplice = toSplice;
_.typeId$ = 0;
function $$init_45(){
}

function $StackTraceCreator$CollectorOpera(this$static){
  $StackTraceCreator$CollectorMoz(this$static);
  $$init_45();
  return this$static;
}

function $getMessage(e){
  return e && e.message?e.message.split('\n'):[];
}

function $setLength_0(obj, length_0){
  obj.length = length_0;
}

function extractName_0(fnToString){
  return $length_1(fnToString) == 0?'anonymous':fnToString;
}

function getClass_47(){
  return Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorOpera_2_classLit;
}

function getStack_0(e){
  var i, i2, idx, j, toReturn;
  toReturn = $getMessage(e);
  for (i = 0 , i2 = 0 , j = $length_0(toReturn); i2 < j; ++i , i2 += 2) {
    idx = $lastIndexOf($get_0(toReturn, i2), 'function ');
    if (idx == -1) {
      $set_0(toReturn, i, '');
    }
     else {
      $set_0(toReturn, i, $trim($substring($get_0(toReturn, i2), idx + 9)));
    }
  }
  $setLength_0(toReturn, i);
  return toReturn;
}

function toSplice_0(){
  return 3;
}

function StackTraceCreator$CollectorOpera(){
}

_ = StackTraceCreator$CollectorOpera.prototype = new StackTraceCreator$CollectorMoz;
_.extractName = extractName_0;
_.getClass$ = getClass_47;
_.getStack = getStack_0;
_.toSplice = toSplice_0;
_.typeId$ = 0;
function $clinit_65(){
  $clinit_65 = nullMethod;
  impl_1 = $DOMImplOpera(new DOMImplOpera);
}

function $$init_46(){
}

function $DOMImpl(this$static){
  $clinit_65();
  $Object(this$static);
  $$init_46();
  return this$static;
}

function $eventGetAltKey(evt){
  return !!evt.altKey;
}

function $eventGetClientX(evt){
  return evt.clientX || 0;
}

function $eventGetClientY(evt){
  return evt.clientY || 0;
}

function $eventGetCtrlKey(evt){
  return !!evt.ctrlKey;
}

function $eventGetKeyCode(evt){
  return evt.which || (evt.keyCode || 0);
}

function $eventGetMetaKey(evt){
  return !!evt.metaKey;
}

function $eventGetType(evt){
  return evt.type;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  if (!parent_0 || parent_0.nodeType != 1) {
    parent_0 = null;
  }
  return parent_0;
}

function $getScrollLeft(elem){
  return elem.scrollLeft || 0;
}

function createElement(doc, tag){
  return doc.createElement(tag);
}

function cssSetOpacity(style, value){
  style.opacity = value;
}

function eventGetButton(evt){
  return evt.button || 0;
}

function eventGetCurrentTarget(event_0){
  return event_0.currentTarget;
}

function getAbsoluteLeft(elem){
  var left = 0;
  var curr = elem;
  while (curr.offsetParent) {
    left -= curr.scrollLeft;
    curr = curr.parentNode;
  }
  while (elem) {
    left += elem.offsetLeft;
    elem = elem.offsetParent;
  }
  return left;
}

function getAbsoluteTop(elem){
  var top_0 = 0;
  var curr = elem;
  while (curr.offsetParent) {
    top_0 -= curr.scrollTop;
    curr = curr.parentNode;
  }
  while (elem) {
    top_0 += elem.offsetTop;
    elem = elem.offsetParent;
  }
  return top_0;
}

function getAttribute(elem, name_0){
  return elem.getAttribute(name_0) || '';
}

function getBodyOffsetLeft(doc){
  return 0;
}

function getBodyOffsetTop(doc){
  return 0;
}

function getClass_48(){
  return Lcom_google_gwt_dom_client_DOMImpl_2_classLit;
}

function getScrollLeft(doc){
  return $getScrollLeft_1($getViewportElement(doc));
}

function getScrollLeft_0(elem){
  return $getScrollLeft(elem);
}

function getScrollTop(doc){
  return $getScrollTop_0($getViewportElement(doc));
}

function scrollIntoView(elem){
  var left = elem.offsetLeft, top_0 = elem.offsetTop;
  var width = elem.offsetWidth, height = elem.offsetHeight;
  if (elem.parentNode != elem.offsetParent) {
    left -= elem.parentNode.offsetLeft;
    top_0 -= elem.parentNode.offsetTop;
  }
  var cur = elem.parentNode;
  while (cur && cur.nodeType == 1) {
    if (left < cur.scrollLeft) {
      cur.scrollLeft = left;
    }
    if (left + width > cur.scrollLeft + cur.clientWidth) {
      cur.scrollLeft = left + width - cur.clientWidth;
    }
    if (top_0 < cur.scrollTop) {
      cur.scrollTop = top_0;
    }
    if (top_0 + height > cur.scrollTop + cur.clientHeight) {
      cur.scrollTop = top_0 + height - cur.clientHeight;
    }
    var offsetLeft = cur.offsetLeft, offsetTop = cur.offsetTop;
    if (cur.parentNode != cur.offsetParent) {
      offsetLeft -= cur.parentNode.offsetLeft;
      offsetTop -= cur.parentNode.offsetTop;
    }
    left += offsetLeft - cur.scrollLeft;
    top_0 += offsetTop - cur.scrollTop;
    cur = cur.parentNode;
  }
}

function setInnerText(elem, text){
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
  if (text != null) {
    elem.appendChild(elem.ownerDocument.createTextNode(text));
  }
}

function DOMImpl(){
}

_ = DOMImpl.prototype = new Object_0;
_.createElement_0 = createElement;
_.cssSetOpacity = cssSetOpacity;
_.eventGetButton = eventGetButton;
_.eventGetCurrentTarget = eventGetCurrentTarget;
_.getAbsoluteLeft = getAbsoluteLeft;
_.getAbsoluteTop = getAbsoluteTop;
_.getAttribute_0 = getAttribute;
_.getBodyOffsetLeft = getBodyOffsetLeft;
_.getBodyOffsetTop = getBodyOffsetTop;
_.getClass$ = getClass_48;
_.getScrollLeft = getScrollLeft;
_.getScrollLeft_0 = getScrollLeft_0;
_.getScrollTop = getScrollTop;
_.scrollIntoView_1 = scrollIntoView;
_.setInnerText = setInnerText;
_.typeId$ = 0;
var impl_1;
function $clinit_66(){
  $clinit_66 = nullMethod;
  $clinit_65();
}

function $$init_47(){
}

function $DOMImplStandard(this$static){
  $clinit_66();
  $DOMImpl(this$static);
  $$init_47();
  return this$static;
}

function eventGetButton_0(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function eventGetRelatedTarget(evt){
  return evt.relatedTarget;
}

function eventGetTarget(evt){
  return evt.target;
}

function eventPreventDefault(evt){
  evt.preventDefault();
}

function getClass_49(){
  return Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit;
}

function isOrHasChild(parent_0, child){
  return parent_0.contains(child);
}

function DOMImplStandard(){
}

_ = DOMImplStandard.prototype = new DOMImpl;
_.eventGetButton = eventGetButton_0;
_.eventGetRelatedTarget = eventGetRelatedTarget;
_.eventGetTarget = eventGetTarget;
_.eventPreventDefault = eventPreventDefault;
_.getClass$ = getClass_49;
_.isOrHasChild = isOrHasChild;
_.typeId$ = 0;
function $clinit_67(){
  $clinit_67 = nullMethod;
  $clinit_66();
}

function $$init_48(){
}

function $DOMImplOpera(this$static){
  $clinit_67();
  $DOMImplStandard(this$static);
  $$init_48();
  return this$static;
}

function getAbsoluteLeft_0(elem){
  var left = 0;
  var curr = elem.parentNode;
  while (curr && curr.offsetParent) {
    if (curr.tagName != 'TR' && curr.tagName != 'TBODY') {
      left -= curr.scrollLeft;
    }
    curr = curr.parentNode;
  }
  while (elem) {
    left += elem.offsetLeft;
    elem = elem.offsetParent;
  }
  return left;
}

function getAbsoluteTop_0(elem){
  var top_0 = 0;
  var curr = elem.parentNode;
  while (curr && curr.offsetParent) {
    if (curr.tagName != 'TR' && curr.tagName != 'TBODY') {
      top_0 -= curr.scrollTop;
    }
    curr = curr.parentNode;
  }
  while (elem) {
    top_0 += elem.offsetTop;
    elem = elem.offsetParent;
  }
  return top_0;
}

function getClass_50(){
  return Lcom_google_gwt_dom_client_DOMImplOpera_2_classLit;
}

function scrollIntoView_0(elem){
  elem.scrollIntoView();
}

function DOMImplOpera(){
}

_ = DOMImplOpera.prototype = new DOMImplStandard;
_.getAbsoluteLeft = getAbsoluteLeft_0;
_.getAbsoluteTop = getAbsoluteTop_0;
_.getClass$ = getClass_50;
_.scrollIntoView_1 = scrollIntoView_0;
_.typeId$ = 0;
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $cloneNode(this$static, deep){
  return this$static.cloneNode(deep);
}

function $getFirstChild(this$static){
  return this$static.firstChild;
}

function $getNextSibling(this$static){
  return this$static.nextSibling;
}

function $getNodeName(this$static){
  return this$static.nodeName;
}

function $getOwnerDocument(this$static){
  return this$static.ownerDocument;
}

function $getParentElement_0(this$static){
  return $getParentElement(($clinit_65() , impl_1 , this$static));
}

function $insertBefore(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function $isOrHasChild(this$static, child){
  return ($clinit_65() , impl_1).isOrHasChild(this$static, child);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $createDivElement(this$static){
  return ($clinit_65() , impl_1).createElement_0(this$static, 'div');
}

function $createSpanElement(this$static){
  return ($clinit_65() , impl_1).createElement_0(this$static, 'span');
}

function $createStyleElement(this$static){
  return ($clinit_65() , impl_1).createElement_0(this$static, 'style');
}

function $createTBodyElement(this$static){
  return ($clinit_65() , impl_1).createElement_0(this$static, 'tbody');
}

function $createTDElement(this$static){
  return ($clinit_65() , impl_1).createElement_0(this$static, 'td');
}

function $createTRElement(this$static){
  return ($clinit_65() , impl_1).createElement_0(this$static, 'tr');
}

function $createTableElement(this$static){
  return ($clinit_65() , impl_1).createElement_0(this$static, 'table');
}

function $createUniqueId(this$static){
  if (!this$static.gwt_uid) {
    this$static.gwt_uid = 1;
  }
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getBody(this$static){
  return this$static.body;
}

function $getBodyOffsetLeft(this$static){
  return ($clinit_65() , impl_1).getBodyOffsetLeft(this$static);
}

function $getBodyOffsetTop(this$static){
  return ($clinit_65() , impl_1).getBodyOffsetTop(this$static);
}

function $getClientHeight(this$static){
  return $getClientHeight_0($getViewportElement(this$static));
}

function $getClientWidth(this$static){
  return $getClientWidth_0($getViewportElement(this$static));
}

function $getCompatMode(this$static){
  return this$static.compatMode;
}

function $getDocumentElement(this$static){
  return this$static.documentElement;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $getElementsByTagName(this$static, tagName){
  return this$static.getElementsByTagName(tagName);
}

function $getScrollLeft_0(this$static){
  return ($clinit_65() , impl_1).getScrollLeft(this$static);
}

function $getScrollTop(this$static){
  return ($clinit_65() , impl_1).getScrollTop(this$static);
}

function $getViewportElement(this$static){
  return $isCSS1Compat(this$static)?$getDocumentElement(this$static):$getBody(this$static);
}

function $isCSS1Compat(this$static){
  return $equals_1($getCompatMode(this$static), 'CSS1Compat');
}

function get_0(){
  return $doc;
}

function $addClassName(this$static, className){
  var idx, last, lastPos, oldClassName;
  className = $trim(className);
  oldClassName = $getClassName(this$static);
  idx = $indexOf_0(oldClassName, className);
  while (idx != -1) {
    if (idx == 0 || $charAt(oldClassName, idx - 1) == 32) {
      last = idx + $length_1(className);
      lastPos = $length_1(oldClassName);
      if (last == lastPos || last < lastPos && $charAt(oldClassName, last) == 32) {
        break;
      }
    }
    idx = $indexOf_1(oldClassName, className, idx + 1);
  }
  if (idx == -1) {
    if ($length_1(oldClassName) > 0) {
      oldClassName += ' ';
    }
    $setClassName(this$static, oldClassName + className);
  }
}

function $blur(this$static){
  this$static.blur();
}

function $focus(this$static){
  this$static.focus();
}

function $getAbsoluteLeft(this$static){
  return ($clinit_65() , impl_1).getAbsoluteLeft(this$static);
}

function $getAbsoluteTop(this$static){
  return ($clinit_65() , impl_1).getAbsoluteTop(this$static);
}

function $getAttribute(this$static, name_0){
  return ($clinit_65() , impl_1).getAttribute_0(this$static, name_0);
}

function $getClassName(this$static){
  return this$static.className;
}

function $getClientHeight_0(this$static){
  return this$static.clientHeight;
}

function $getClientWidth_0(this$static){
  return this$static.clientWidth;
}

function $getFirstChildElement_0(this$static){
  return $getFirstChildElement(($clinit_65() , impl_1 , this$static));
}

function $getOffsetHeight(this$static){
  return this$static.offsetHeight || 0;
}

function $getOffsetParent(this$static){
  return this$static.offsetParent;
}

function $getOffsetWidth(this$static){
  return this$static.offsetWidth || 0;
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) || 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $getScrollHeight(this$static){
  return this$static.scrollHeight || 0;
}

function $getScrollLeft_1(this$static){
  return ($clinit_65() , impl_1).getScrollLeft_0(this$static);
}

function $getScrollTop_0(this$static){
  return this$static.scrollTop || 0;
}

function $getStyle(this$static){
  return this$static.style;
}

function $removeAttribute(this$static, name_0){
  this$static.removeAttribute(name_0);
}

function $removeClassName(this$static, className){
  var begin, end, idx, last, lastPos, newClassName, oldStyle;
  className = $trim(className);
  oldStyle = $getClassName(this$static);
  idx = $indexOf_0(oldStyle, className);
  while (idx != -1) {
    if (idx == 0 || $charAt(oldStyle, idx - 1) == 32) {
      last = idx + $length_1(className);
      lastPos = $length_1(oldStyle);
      if (last == lastPos || last < lastPos && $charAt(oldStyle, last) == 32) {
        break;
      }
    }
    idx = $indexOf_1(oldStyle, className, idx + 1);
  }
  if (idx != -1) {
    begin = $trim($substring_0(oldStyle, 0, idx));
    end = $trim($substring(oldStyle, idx + $length_1(className)));
    if ($length_1(begin) == 0) {
      newClassName = end;
    }
     else if ($length_1(end) == 0) {
      newClassName = begin;
    }
     else {
      newClassName = begin + ' ' + end;
    }
    $setClassName(this$static, newClassName);
  }
}

function $scrollIntoView(this$static){
  ($clinit_65() , impl_1).scrollIntoView_1(this$static);
}

function $setAttribute(this$static, name_0, value){
  this$static.setAttribute(name_0, value);
}

function $setClassName(this$static, className){
  this$static.className = className;
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setInnerText(this$static, text){
  ($clinit_65() , impl_1).setInnerText(this$static, text);
}

function $setPropertyString(this$static, name_0, value){
  this$static[name_0] = value;
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function as(elem){
  return elem;
}

function $getAltKey(this$static){
  return $eventGetAltKey(($clinit_65() , impl_1 , this$static));
}

function $getButton(this$static){
  return ($clinit_65() , impl_1).eventGetButton(this$static);
}

function $getClientX(this$static){
  return $eventGetClientX(($clinit_65() , impl_1 , this$static));
}

function $getClientY(this$static){
  return $eventGetClientY(($clinit_65() , impl_1 , this$static));
}

function $getCtrlKey(this$static){
  return $eventGetCtrlKey(($clinit_65() , impl_1 , this$static));
}

function $getCurrentEventTarget(this$static){
  return ($clinit_65() , impl_1).eventGetCurrentTarget(this$static);
}

function $getEventTarget(this$static){
  return ($clinit_65() , impl_1).eventGetTarget(this$static);
}

function $getKeyCode(this$static){
  return $eventGetKeyCode(($clinit_65() , impl_1 , this$static));
}

function $getMetaKey(this$static){
  return $eventGetMetaKey(($clinit_65() , impl_1 , this$static));
}

function $getRelatedEventTarget(this$static){
  return ($clinit_65() , impl_1).eventGetRelatedTarget(this$static);
}

function $getType(this$static){
  return $eventGetType(($clinit_65() , impl_1 , this$static));
}

function $preventDefault(this$static){
  ($clinit_65() , impl_1).eventPreventDefault(this$static);
}

function $getItem(this$static, index){
  return this$static[index];
}

function $assertCamelCase(){
}

function $getProperty(this$static, name_0){
  $assertCamelCase();
  return $getPropertyImpl(this$static, name_0);
}

function $getPropertyImpl(this$static, name_0){
  return this$static[name_0];
}

function $setBackgroundColor(this$static, value){
  $setProperty(this$static, 'backgroundColor', value);
}

function $setBorderStyle(this$static, value){
  $setProperty(this$static, 'borderStyle', value.getCssName());
}

function $setMargin(this$static, value, unit){
  $setProperty_0(this$static, 'margin', value, unit);
}

function $setOpacity(this$static, value){
  ($clinit_65() , impl_1).cssSetOpacity(this$static, value);
}

function $setProperty(this$static, name_0, value){
  $assertCamelCase();
  $setPropertyImpl(this$static, name_0, value);
}

function $setProperty_0(this$static, name_0, value, unit){
  $assertCamelCase();
  $setPropertyImpl(this$static, name_0, value + unit.getType());
}

function $setPropertyImpl(this$static, name_0, value){
  this$static[name_0] = value;
}

function $setPropertyPx(this$static, name_0, value){
  $setProperty_0(this$static, name_0, value, ($clinit_83() , PX));
}

function $$init_49(){
}

function $Enum(this$static, name_0, ordinal){
  $Object(this$static);
  $$init_49();
  this$static , name_0;
  this$static.ordinal = ordinal;
  return this$static;
}

function $compareTo_0(this$static, other){
  return this$static.ordinal - other.ordinal;
}

function $ordinal(this$static){
  return this$static.ordinal;
}

function compareTo_0(p0){
  return $compareTo_0(this, dynamicCast(p0, 119));
}

function equals_2(other){
  return maskUndefined(this) === maskUndefined(other);
}

function getClass_51(){
  return Ljava_lang_Enum_2_classLit;
}

function hashCode_3(){
  return $hashCode(this);
}

function Enum(){
}

_ = Enum.prototype = new Object_0;
_.compareTo$ = compareTo_0;
_.equals$ = equals_2;
_.getClass$ = getClass_51;
_.hashCode$ = hashCode_3;
_.typeId$ = 33;
_.ordinal = 0;
function $clinit_76(){
  $clinit_76 = nullMethod;
  NONE = $Style$BorderStyle$1(new Style$BorderStyle$1, 'NONE', 0);
  DOTTED = $Style$BorderStyle$2(new Style$BorderStyle$2, 'DOTTED', 1);
  DASHED = $Style$BorderStyle$3(new Style$BorderStyle$3, 'DASHED', 2);
  HIDDEN = $Style$BorderStyle$4(new Style$BorderStyle$4, 'HIDDEN', 3);
  SOLID = $Style$BorderStyle$5(new Style$BorderStyle$5, 'SOLID', 4);
  ({_NONE:NONE, _DOTTED:DOTTED, _DASHED:DASHED, _HIDDEN:HIDDEN, _SOLID:SOLID});
}

function $$init_50(){
}

function $Style$BorderStyle(this$static, enum$name, enum$ordinal){
  $clinit_76();
  $Enum(this$static, enum$name, enum$ordinal);
  $$init_50();
  return this$static;
}

function getClass_52(){
  return Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit;
}

function values_0(){
  $clinit_76();
  return initValues(_3Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit, 309, 125, [NONE, DOTTED, DASHED, HIDDEN, SOLID]);
}

function Style$BorderStyle(){
}

_ = Style$BorderStyle.prototype = new Enum;
_.getClass$ = getClass_52;
_.typeId$ = 34;
var DASHED, DOTTED, HIDDEN, NONE, SOLID;
function $clinit_77(){
  $clinit_77 = nullMethod;
  $clinit_76();
}

function $$init_51(){
}

function $Style$BorderStyle$1(this$static, enum$name, enum$ordinal){
  $clinit_77();
  $Style$BorderStyle(this$static, enum$name, enum$ordinal);
  $$init_51();
  return this$static;
}

function getClass_53(){
  return Lcom_google_gwt_dom_client_Style$BorderStyle$1_2_classLit;
}

function getCssName(){
  return 'none';
}

function Style$BorderStyle$1(){
}

_ = Style$BorderStyle$1.prototype = new Style$BorderStyle;
_.getClass$ = getClass_53;
_.getCssName = getCssName;
_.typeId$ = 35;
function $clinit_78(){
  $clinit_78 = nullMethod;
  $clinit_76();
}

function $$init_52(){
}

function $Style$BorderStyle$2(this$static, enum$name, enum$ordinal){
  $clinit_78();
  $Style$BorderStyle(this$static, enum$name, enum$ordinal);
  $$init_52();
  return this$static;
}

function getClass_54(){
  return Lcom_google_gwt_dom_client_Style$BorderStyle$2_2_classLit;
}

function getCssName_0(){
  return 'dotted';
}

function Style$BorderStyle$2(){
}

_ = Style$BorderStyle$2.prototype = new Style$BorderStyle;
_.getClass$ = getClass_54;
_.getCssName = getCssName_0;
_.typeId$ = 36;
function $clinit_79(){
  $clinit_79 = nullMethod;
  $clinit_76();
}

function $$init_53(){
}

function $Style$BorderStyle$3(this$static, enum$name, enum$ordinal){
  $clinit_79();
  $Style$BorderStyle(this$static, enum$name, enum$ordinal);
  $$init_53();
  return this$static;
}

function getClass_55(){
  return Lcom_google_gwt_dom_client_Style$BorderStyle$3_2_classLit;
}

function getCssName_1(){
  return 'dashed';
}

function Style$BorderStyle$3(){
}

_ = Style$BorderStyle$3.prototype = new Style$BorderStyle;
_.getClass$ = getClass_55;
_.getCssName = getCssName_1;
_.typeId$ = 37;
function $clinit_80(){
  $clinit_80 = nullMethod;
  $clinit_76();
}

function $$init_54(){
}

function $Style$BorderStyle$4(this$static, enum$name, enum$ordinal){
  $clinit_80();
  $Style$BorderStyle(this$static, enum$name, enum$ordinal);
  $$init_54();
  return this$static;
}

function getClass_56(){
  return Lcom_google_gwt_dom_client_Style$BorderStyle$4_2_classLit;
}

function getCssName_2(){
  return 'hidden';
}

function Style$BorderStyle$4(){
}

_ = Style$BorderStyle$4.prototype = new Style$BorderStyle;
_.getClass$ = getClass_56;
_.getCssName = getCssName_2;
_.typeId$ = 38;
function $clinit_81(){
  $clinit_81 = nullMethod;
  $clinit_76();
}

function $$init_55(){
}

function $Style$BorderStyle$5(this$static, enum$name, enum$ordinal){
  $clinit_81();
  $Style$BorderStyle(this$static, enum$name, enum$ordinal);
  $$init_55();
  return this$static;
}

function getClass_57(){
  return Lcom_google_gwt_dom_client_Style$BorderStyle$5_2_classLit;
}

function getCssName_3(){
  return 'solid';
}

function Style$BorderStyle$5(){
}

_ = Style$BorderStyle$5.prototype = new Style$BorderStyle;
_.getClass$ = getClass_57;
_.getCssName = getCssName_3;
_.typeId$ = 39;
function $clinit_83(){
  $clinit_83 = nullMethod;
  PX = $Style$Unit$1(new Style$Unit$1, 'PX', 0);
  PCT = $Style$Unit$2(new Style$Unit$2, 'PCT', 1);
  EM = $Style$Unit$3(new Style$Unit$3, 'EM', 2);
  EX = $Style$Unit$4(new Style$Unit$4, 'EX', 3);
  PT = $Style$Unit$5(new Style$Unit$5, 'PT', 4);
  PC = $Style$Unit$6(new Style$Unit$6, 'PC', 5);
  IN = $Style$Unit$7(new Style$Unit$7, 'IN', 6);
  CM = $Style$Unit$8(new Style$Unit$8, 'CM', 7);
  MM = $Style$Unit$9(new Style$Unit$9, 'MM', 8);
  ({_PX:PX, _PCT:PCT, _EM:EM, _EX:EX, _PT:PT, _PC:PC, _IN:IN, _CM:CM, _MM:MM});
}

function $$init_56(){
}

function $Style$Unit(this$static, enum$name, enum$ordinal){
  $clinit_83();
  $Enum(this$static, enum$name, enum$ordinal);
  $$init_56();
  return this$static;
}

function getClass_58(){
  return Lcom_google_gwt_dom_client_Style$Unit_2_classLit;
}

function values_1(){
  $clinit_83();
  return initValues(_3Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 320, 136, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

function Style$Unit(){
}

_ = Style$Unit.prototype = new Enum;
_.getClass$ = getClass_58;
_.typeId$ = 102;
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
function $clinit_84(){
  $clinit_84 = nullMethod;
  $clinit_83();
}

function $$init_57(){
}

function $Style$Unit$1(this$static, enum$name, enum$ordinal){
  $clinit_84();
  $Style$Unit(this$static, enum$name, enum$ordinal);
  $$init_57();
  return this$static;
}

function getClass_59(){
  return Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit;
}

function getType(){
  return 'px';
}

function Style$Unit$1(){
}

_ = Style$Unit$1.prototype = new Style$Unit;
_.getClass$ = getClass_59;
_.getType = getType;
_.typeId$ = 103;
function $clinit_85(){
  $clinit_85 = nullMethod;
  $clinit_83();
}

function $$init_58(){
}

function $Style$Unit$2(this$static, enum$name, enum$ordinal){
  $clinit_85();
  $Style$Unit(this$static, enum$name, enum$ordinal);
  $$init_58();
  return this$static;
}

function getClass_60(){
  return Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit;
}

function getType_0(){
  return '%';
}

function Style$Unit$2(){
}

_ = Style$Unit$2.prototype = new Style$Unit;
_.getClass$ = getClass_60;
_.getType = getType_0;
_.typeId$ = 104;
function $clinit_86(){
  $clinit_86 = nullMethod;
  $clinit_83();
}

function $$init_59(){
}

function $Style$Unit$3(this$static, enum$name, enum$ordinal){
  $clinit_86();
  $Style$Unit(this$static, enum$name, enum$ordinal);
  $$init_59();
  return this$static;
}

function getClass_61(){
  return Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit;
}

function getType_1(){
  return 'em';
}

function Style$Unit$3(){
}

_ = Style$Unit$3.prototype = new Style$Unit;
_.getClass$ = getClass_61;
_.getType = getType_1;
_.typeId$ = 105;
function $clinit_87(){
  $clinit_87 = nullMethod;
  $clinit_83();
}

function $$init_60(){
}

function $Style$Unit$4(this$static, enum$name, enum$ordinal){
  $clinit_87();
  $Style$Unit(this$static, enum$name, enum$ordinal);
  $$init_60();
  return this$static;
}

function getClass_62(){
  return Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit;
}

function getType_2(){
  return 'ex';
}

function Style$Unit$4(){
}

_ = Style$Unit$4.prototype = new Style$Unit;
_.getClass$ = getClass_62;
_.getType = getType_2;
_.typeId$ = 106;
function $clinit_88(){
  $clinit_88 = nullMethod;
  $clinit_83();
}

function $$init_61(){
}

function $Style$Unit$5(this$static, enum$name, enum$ordinal){
  $clinit_88();
  $Style$Unit(this$static, enum$name, enum$ordinal);
  $$init_61();
  return this$static;
}

function getClass_63(){
  return Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit;
}

function getType_3(){
  return 'pt';
}

function Style$Unit$5(){
}

_ = Style$Unit$5.prototype = new Style$Unit;
_.getClass$ = getClass_63;
_.getType = getType_3;
_.typeId$ = 107;
function $clinit_89(){
  $clinit_89 = nullMethod;
  $clinit_83();
}

function $$init_62(){
}

function $Style$Unit$6(this$static, enum$name, enum$ordinal){
  $clinit_89();
  $Style$Unit(this$static, enum$name, enum$ordinal);
  $$init_62();
  return this$static;
}

function getClass_64(){
  return Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit;
}

function getType_4(){
  return 'pc';
}

function Style$Unit$6(){
}

_ = Style$Unit$6.prototype = new Style$Unit;
_.getClass$ = getClass_64;
_.getType = getType_4;
_.typeId$ = 108;
function $clinit_90(){
  $clinit_90 = nullMethod;
  $clinit_83();
}

function $$init_63(){
}

function $Style$Unit$7(this$static, enum$name, enum$ordinal){
  $clinit_90();
  $Style$Unit(this$static, enum$name, enum$ordinal);
  $$init_63();
  return this$static;
}

function getClass_65(){
  return Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit;
}

function getType_5(){
  return 'in';
}

function Style$Unit$7(){
}

_ = Style$Unit$7.prototype = new Style$Unit;
_.getClass$ = getClass_65;
_.getType = getType_5;
_.typeId$ = 109;
function $clinit_91(){
  $clinit_91 = nullMethod;
  $clinit_83();
}

function $$init_64(){
}

function $Style$Unit$8(this$static, enum$name, enum$ordinal){
  $clinit_91();
  $Style$Unit(this$static, enum$name, enum$ordinal);
  $$init_64();
  return this$static;
}

function getClass_66(){
  return Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit;
}

function getType_6(){
  return 'cm';
}

function Style$Unit$8(){
}

_ = Style$Unit$8.prototype = new Style$Unit;
_.getClass$ = getClass_66;
_.getType = getType_6;
_.typeId$ = 110;
function $clinit_92(){
  $clinit_92 = nullMethod;
  $clinit_83();
}

function $$init_65(){
}

function $Style$Unit$9(this$static, enum$name, enum$ordinal){
  $clinit_92();
  $Style$Unit(this$static, enum$name, enum$ordinal);
  $$init_65();
  return this$static;
}

function getClass_67(){
  return Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit;
}

function getType_7(){
  return 'mm';
}

function Style$Unit$9(){
}

_ = Style$Unit$9.prototype = new Style$Unit;
_.getClass$ = getClass_67;
_.getType = getType_7;
_.typeId$ = 111;
function $clinit_93(){
  $clinit_93 = nullMethod;
  toInject = $cast(createArray());
  toInjectAtEnd = $cast(createArray());
  toInjectAtStart = $cast(createArray());
  flusher = $StyleInjector$1(new StyleInjector$1);
}

function flush(which){
  $clinit_93();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if ($length_0(toInjectAtStart) != 0) {
    css = $join(toInjectAtStart, '');
    maybeReturn = ($clinit_95() , IMPL).injectStyleSheetAtStart(css);
    if (jsEquals(toInjectAtStart, which)) {
      toReturn = maybeReturn;
    }
    $setLength(toInjectAtStart, 0);
  }
  if ($length_0(toInject) != 0) {
    css = $join(toInject, '');
    maybeReturn = ($clinit_95() , IMPL).injectStyleSheet(css);
    if (jsEquals(toInject, which)) {
      toReturn = maybeReturn;
    }
    $setLength(toInject, 0);
  }
  if ($length_0(toInjectAtEnd) != 0) {
    css = $join(toInjectAtEnd, '');
    maybeReturn = ($clinit_95() , IMPL).injectStyleSheetAtEnd(css);
    if (jsEquals(toInjectAtEnd, which)) {
      toReturn = maybeReturn;
    }
    $setLength(toInjectAtEnd, 0);
  }
  needsInjection = false;
  return toReturn;
}

function inject(immediate){
  if (immediate) {
    flush(null);
  }
   else {
    schedule();
  }
}

function injectAtStart(css){
  $clinit_93();
  injectAtStart_0(css, false);
}

function injectAtStart_0(css, immediate){
  $unshift(toInjectAtStart, css);
  inject(immediate);
}

function schedule(){
  if (!needsInjection) {
    needsInjection = true;
    get().scheduleFinally(flusher);
  }
}

var flusher, needsInjection = false, toInject, toInjectAtEnd, toInjectAtStart;
function $$init_66(){
}

function $StyleInjector$1(this$static){
  $Object(this$static);
  $$init_66();
  return this$static;
}

function execute_3(){
  if ($clinit_93() , needsInjection) {
    flush(null);
  }
}

function getClass_68(){
  return Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit;
}

function StyleInjector$1(){
}

_ = StyleInjector$1.prototype = new Object_0;
_.execute = execute_3;
_.getClass$ = getClass_68;
_.typeId$ = 0;
function $clinit_95(){
  $clinit_95 = nullMethod;
  IMPL = $StyleInjector$StyleInjectorImpl(new StyleInjector$StyleInjectorImpl);
}

function $$init_67(){
}

function $StyleInjector$StyleInjectorImpl(this$static){
  $clinit_95();
  $Object(this$static);
  $$init_67();
  return this$static;
}

function $createElement(this$static, contents){
  var style;
  style = $createStyleElement(get_0());
  $setPropertyString(style, 'language', 'text/css');
  this$static.setContents(style, contents);
  return style;
}

function $getHead(this$static){
  var elt;
  if (isNull(this$static.head)) {
    elt = $getItem($getElementsByTagName(get_0(), 'head'), 0);
    this$static.head = as(elt);
  }
  return this$static.head;
}

function getClass_69(){
  return Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2_classLit;
}

function injectStyleSheet(contents){
  var style;
  style = $createElement(this, contents);
  $appendChild($getHead(this), style);
  return style;
}

function injectStyleSheetAtEnd(contents){
  return this.injectStyleSheet(contents);
}

function injectStyleSheetAtStart(contents){
  var style;
  style = $createElement(this, contents);
  $insertBefore($getHead(this), style, $getFirstChild(this.head));
  return style;
}

function setContents(style, contents){
  $setInnerText(style, contents);
}

function StyleInjector$StyleInjectorImpl(){
}

_ = StyleInjector$StyleInjectorImpl.prototype = new Object_0;
_.getClass$ = getClass_69;
_.injectStyleSheet = injectStyleSheet;
_.injectStyleSheetAtEnd = injectStyleSheetAtEnd;
_.injectStyleSheetAtStart = injectStyleSheetAtStart;
_.setContents = setContents;
_.typeId$ = 0;
_.head = null;
var IMPL;
function $$init_68(){
}

function $GwtEvent(this$static){
  $Object(this$static);
  $$init_68();
  return this$static;
}

function $assertLive(){
}

function $getSource(this$static){
  $assertLive();
  return this$static.source;
}

function $isLive(this$static){
  return !this$static.dead;
}

function $kill(this$static){
  this$static.dead = true;
  this$static.source = null;
}

function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
}

function $setSource(this$static, source){
  this$static.source = source;
}

function getClass_70(){
  return Lcom_google_gwt_event_shared_GwtEvent_2_classLit;
}

function revive(){
  $revive(this);
}

function GwtEvent(){
}

_ = GwtEvent.prototype = new Object_0;
_.getClass$ = getClass_70;
_.revive = revive;
_.typeId$ = 0;
_.dead = false;
_.source = null;
function $$init_69(){
}

function $DomEvent(this$static){
  $GwtEvent(this$static);
  $$init_69();
  return this$static;
}

function $getNativeEvent(this$static){
  $assertLive();
  return this$static.nativeEvent;
}

function $getRelativeElement(this$static){
  $assertLive();
  return this$static.relativeElem;
}

function $preventDefault_0(this$static){
  $assertLive();
  $preventDefault(this$static.nativeEvent);
}

function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, typeKey;
  if (isNotNull(registered)) {
    typeKey = dynamicCast($unsafeGet(registered, $getType(nativeEvent)), 29);
    if (isNotNull(typeKey)) {
      currentNative = typeKey.flyweight.nativeEvent;
      currentRelativeElem = typeKey.flyweight.relativeElem;
      $setNativeEvent(typeKey.flyweight, nativeEvent);
      $setRelativeElement(typeKey.flyweight, relativeElem);
      handlerSource.fireEvent(typeKey.flyweight);
      $setNativeEvent(typeKey.flyweight, currentNative);
      $setRelativeElement(typeKey.flyweight, currentRelativeElem);
    }
  }
}

function getAssociatedType(){
  return this.getAssociatedType_0();
}

function getClass_71(){
  return Lcom_google_gwt_event_dom_client_DomEvent_2_classLit;
}

function init(){
  registered = $PrivateMap(new PrivateMap);
}

function DomEvent(){
}

_ = DomEvent.prototype = new GwtEvent;
_.getAssociatedType = getAssociatedType;
_.getClass$ = getClass_71;
_.typeId$ = 0;
_.nativeEvent = null;
_.relativeElem = null;
var registered = null;
function $$init_70(){
}

function $GwtEvent$Type(this$static){
  $Object(this$static);
  $$init_70();
  this$static.index = ++nextHashCode;
  return this$static;
}

function getClass_72(){
  return Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit;
}

function hashCode_4(){
  return this.index;
}

function GwtEvent$Type(){
}

_ = GwtEvent$Type.prototype = new Object_0;
_.getClass$ = getClass_72;
_.hashCode$ = hashCode_4;
_.typeId$ = 124;
_.index = 0;
var nextHashCode = 0;
function $$init_71(){
}

function $DomEvent$Type(this$static, eventName, flyweight){
  $GwtEvent$Type(this$static);
  $$init_71();
  this$static.flyweight = flyweight;
  if (isNull(registered)) {
    init();
  }
  $unsafePut(registered, eventName, this$static);
  this$static.name_0 = eventName;
  return this$static;
}

function $getName(this$static){
  return this$static.name_0;
}

function getClass_73(){
  return Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit;
}

function DomEvent$Type(){
}

_ = DomEvent$Type.prototype = new GwtEvent$Type;
_.getClass$ = getClass_73;
_.typeId$ = 125;
_.flyweight = null;
_.name_0 = null;
function $$init_72(){
}

function $MouseEvent(this$static){
  $DomEvent(this$static);
  $$init_72();
  return this$static;
}

function $getClientX_0(this$static){
  return $getClientX($getNativeEvent(this$static));
}

function $getClientY_0(this$static){
  return $getClientY($getNativeEvent(this$static));
}

function $getNativeButton(this$static){
  return $getButton($getNativeEvent(this$static));
}

function $getRelativeX(this$static, target){
  var e;
  e = $getNativeEvent(this$static);
  return $getClientX(e) - $getAbsoluteLeft(target) + $getScrollLeft_1(target) + $getScrollLeft_0($getOwnerDocument(target));
}

function $getRelativeY(this$static, target){
  var e;
  e = $getNativeEvent(this$static);
  return $getClientY(e) - $getAbsoluteTop(target) + $getScrollTop_0(target) + $getScrollTop($getOwnerDocument(target));
}

function $getX(this$static){
  var relativeElem;
  relativeElem = $getRelativeElement(this$static);
  if (isNotNull(relativeElem)) {
    return $getRelativeX(this$static, relativeElem);
  }
  return $getClientX_0(this$static);
}

function $getY(this$static){
  var relativeElem;
  relativeElem = $getRelativeElement(this$static);
  if (isNotNull(relativeElem)) {
    return $getRelativeY(this$static, relativeElem);
  }
  return $getClientY_0(this$static);
}

function $isControlKeyDown(this$static){
  return $getCtrlKey($getNativeEvent(this$static));
}

function $isMetaKeyDown(this$static){
  return $getMetaKey($getNativeEvent(this$static));
}

function getClass_74(){
  return Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit;
}

function MouseEvent(){
}

_ = MouseEvent.prototype = new DomEvent;
_.getClass$ = getClass_74;
_.typeId$ = 0;
function $clinit_119(){
  $clinit_119 = nullMethod;
  TYPE = $DomEvent$Type(new DomEvent$Type, 'mousedown', $MouseDownEvent(new MouseDownEvent));
}

function $$init_73(){
}

function $MouseDownEvent(this$static){
  $clinit_119();
  $MouseEvent(this$static);
  $$init_73();
  return this$static;
}

function $dispatch(this$static, handler){
  handler.onMouseDown(this$static);
}

function dispatch(p0){
  $dispatch(this, dynamicCast(p0, 36));
}

function getAssociatedType_0(){
  return TYPE;
}

function getClass_75(){
  return Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit;
}

function getType_8(){
  $clinit_119();
  return TYPE;
}

function MouseDownEvent(){
}

_ = MouseDownEvent.prototype = new MouseEvent;
_.dispatch = dispatch;
_.getAssociatedType_0 = getAssociatedType_0;
_.getClass$ = getClass_75;
_.typeId$ = 0;
var TYPE;
function $clinit_121(){
  $clinit_121 = nullMethod;
  TYPE_0 = $DomEvent$Type(new DomEvent$Type, 'mousemove', $MouseMoveEvent(new MouseMoveEvent));
}

function $$init_74(){
}

function $MouseMoveEvent(this$static){
  $clinit_121();
  $MouseEvent(this$static);
  $$init_74();
  return this$static;
}

function $dispatch_0(this$static, handler){
  handler.onMouseMove(this$static);
}

function dispatch_0(p0){
  $dispatch_0(this, dynamicCast(p0, 37));
}

function getAssociatedType_1(){
  return TYPE_0;
}

function getClass_76(){
  return Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit;
}

function getType_9(){
  $clinit_121();
  return TYPE_0;
}

function MouseMoveEvent(){
}

_ = MouseMoveEvent.prototype = new MouseEvent;
_.dispatch = dispatch_0;
_.getAssociatedType_0 = getAssociatedType_1;
_.getClass$ = getClass_76;
_.typeId$ = 0;
var TYPE_0;
function $clinit_123(){
  $clinit_123 = nullMethod;
  TYPE_1 = $DomEvent$Type(new DomEvent$Type, 'mouseout', $MouseOutEvent(new MouseOutEvent));
}

function $$init_75(){
}

function $MouseOutEvent(this$static){
  $clinit_123();
  $MouseEvent(this$static);
  $$init_75();
  return this$static;
}

function $dispatch_1(this$static, handler){
  handler.onMouseOut(this$static);
}

function dispatch_1(p0){
  $dispatch_1(this, dynamicCast(p0, 38));
}

function getAssociatedType_2(){
  return TYPE_1;
}

function getClass_77(){
  return Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit;
}

function getType_10(){
  $clinit_123();
  return TYPE_1;
}

function MouseOutEvent(){
}

_ = MouseOutEvent.prototype = new MouseEvent;
_.dispatch = dispatch_1;
_.getAssociatedType_0 = getAssociatedType_2;
_.getClass$ = getClass_77;
_.typeId$ = 0;
var TYPE_1;
function $clinit_125(){
  $clinit_125 = nullMethod;
  TYPE_2 = $DomEvent$Type(new DomEvent$Type, 'mouseup', $MouseUpEvent(new MouseUpEvent));
}

function $$init_76(){
}

function $MouseUpEvent(this$static){
  $clinit_125();
  $MouseEvent(this$static);
  $$init_76();
  return this$static;
}

function $dispatch_2(this$static, handler){
  handler.onMouseUp(this$static);
}

function dispatch_2(p0){
  $dispatch_2(this, dynamicCast(p0, 40));
}

function getAssociatedType_3(){
  return TYPE_2;
}

function getClass_78(){
  return Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit;
}

function getType_11(){
  $clinit_125();
  return TYPE_2;
}

function MouseUpEvent(){
}

_ = MouseUpEvent.prototype = new MouseEvent;
_.dispatch = dispatch_2;
_.getAssociatedType_0 = getAssociatedType_3;
_.getClass$ = getClass_78;
_.typeId$ = 0;
var TYPE_2;
function $$init_77(){
}

function $PrivateMap(this$static){
  $Object(this$static);
  $$init_77();
  if (isScript()) {
    this$static.map = $cast(create_0());
  }
   else {
    this$static.javaMap = $HashMap(new HashMap);
  }
  return this$static;
}

function $unsafeGet(this$static, key){
  if (isScript()) {
    return $unsafeGet_0(this$static.map, key);
  }
   else {
    return $get_2(this$static.javaMap, key);
  }
}

function $unsafePut(this$static, key, value){
  if (isScript()) {
    $unsafePut_0(this$static.map, key, value);
  }
   else {
    $put(this$static.javaMap, key, value);
  }
}

function getClass_79(){
  return Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit;
}

function PrivateMap(){
}

_ = PrivateMap.prototype = new Object_0;
_.getClass$ = getClass_79;
_.typeId$ = 0;
_.javaMap = null;
_.map = null;
function $unsafeGet_0(this$static, key){
  return this$static[key];
}

function $unsafePut_0(this$static, key, value){
  this$static[key] = value;
}

function create_0(){
  return $cast(createObject());
}

function $$init_78(){
}

function $CloseEvent(this$static, target, autoClosed){
  $GwtEvent(this$static);
  $$init_78();
  this$static , autoClosed;
  this$static , target;
  return this$static;
}

function $dispatch_3(this$static, handler){
  handler.onClose(this$static);
}

function dispatch_3(p0){
  $dispatch_3(this, dynamicCast(p0, 44));
}

function fire_0(source, target){
  fire_1(source, target, false);
}

function fire_1(source, target, autoClosed){
  var event_0;
  if (isNotNull(TYPE_3)) {
    event_0 = $CloseEvent(new CloseEvent, target, autoClosed);
    source.fireEvent(event_0);
  }
}

function getAssociatedType_4(){
  return TYPE_3;
}

function getClass_80(){
  return Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit;
}

function getType_12(){
  return isNotNull(TYPE_3)?TYPE_3:(TYPE_3 = $GwtEvent$Type(new GwtEvent$Type));
}

function CloseEvent(){
}

_ = CloseEvent.prototype = new GwtEvent;
_.dispatch = dispatch_3;
_.getAssociatedType = getAssociatedType_4;
_.getClass$ = getClass_80;
_.typeId$ = 0;
var TYPE_3 = null;
function $$init_79(){
}

function $OpenEvent(this$static, target){
  $GwtEvent(this$static);
  $$init_79();
  this$static , target;
  return this$static;
}

function $dispatch_4(this$static){
  null.nullMethod(this$static);
}

function dispatch_4(p0){
  $dispatch_4(this, dynamicCast(p0, 45));
}

function fire_2(source, target){
  var event_0;
  if (isNotNull(TYPE_4)) {
    event_0 = $OpenEvent(new OpenEvent, target);
    source.fireEvent(event_0);
  }
}

function getAssociatedType_5(){
  return TYPE_4;
}

function getClass_81(){
  return Lcom_google_gwt_event_logical_shared_OpenEvent_2_classLit;
}

function OpenEvent(){
}

_ = OpenEvent.prototype = new GwtEvent;
_.dispatch = dispatch_4;
_.getAssociatedType = getAssociatedType_5;
_.getClass$ = getClass_81;
_.typeId$ = 0;
var TYPE_4 = null;
function $$init_80(){
}

function $SelectionEvent(this$static, selectedItem){
  $GwtEvent(this$static);
  $$init_80();
  this$static , selectedItem;
  return this$static;
}

function $dispatch_5(this$static){
  null.nullMethod(this$static);
}

function dispatch_5(p0){
  $dispatch_5(this, dynamicCast(p0, 47));
}

function fire_3(source, selectedItem){
  var event_0;
  if (isNotNull(TYPE_5)) {
    event_0 = $SelectionEvent(new SelectionEvent, selectedItem);
    source.fireEvent(event_0);
  }
}

function getAssociatedType_6(){
  return TYPE_5;
}

function getClass_82(){
  return Lcom_google_gwt_event_logical_shared_SelectionEvent_2_classLit;
}

function SelectionEvent(){
}

_ = SelectionEvent.prototype = new GwtEvent;
_.dispatch = dispatch_5;
_.getAssociatedType = getAssociatedType_6;
_.getClass$ = getClass_82;
_.typeId$ = 0;
var TYPE_5 = null;
function $$init_81(){
}

function $DefaultHandlerRegistration(this$static, manager, type, handler){
  $Object(this$static);
  $$init_81();
  this$static , manager;
  this$static , handler;
  this$static , type;
  return this$static;
}

function getClass_83(){
  return Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2_classLit;
}

function DefaultHandlerRegistration(){
}

_ = DefaultHandlerRegistration.prototype = new Object_0;
_.getClass$ = getClass_83;
_.typeId$ = 0;
function $$init_82(this$static){
}

function $HandlerManager(this$static, source){
  $HandlerManager_0(this$static, source, false);
  return this$static;
}

function $HandlerManager_0(this$static, source, fireInReverseOrder){
  $Object(this$static);
  $$init_82(this$static);
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry);
  this$static.source = source;
  this$static.isReverseOrder = fireInReverseOrder;
  return this$static;
}

function $addHandler(this$static, type, handler){
  if (this$static.firingDepth > 0) {
    $enqueueAdd(this$static, type, handler);
  }
   else {
    $doAdd(this$static, type, handler);
  }
  return $DefaultHandlerRegistration(new DefaultHandlerRegistration, this$static, type, handler);
}

function $defer(this$static, command){
  if (isNull(this$static.deferredDeltas)) {
    this$static.deferredDeltas = $ArrayList(new ArrayList);
  }
  this$static.deferredDeltas.add(command);
}

function $doAdd(this$static, type, handler){
  $addHandler_0(this$static.registry, type, handler);
}

function $enqueueAdd(this$static, type, handler){
  $defer(this$static, $HandlerManager$1(new HandlerManager$1, this$static, type, handler));
}

function $fireEvent(this$static, event_0){
  var oldSource;
  if (!$isLive(event_0)) {
    event_0.revive();
  }
  oldSource = $getSource(event_0);
  $setSource(event_0, this$static.source);
  try {
    ++this$static.firingDepth;
    $fireEvent_0(this$static.registry, event_0, this$static.isReverseOrder);
  }
   finally {
    --this$static.firingDepth;
    if (this$static.firingDepth == 0) {
      $handleQueuedAddsAndRemoves(this$static);
    }
  }
  if (jsEquals(oldSource, null)) {
    $kill(event_0);
  }
   else {
    $setSource(event_0, oldSource);
  }
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (isNotNull(this$static.deferredDeltas)) {
    try {
      for (c$iterator = this$static.deferredDeltas.iterator_0(); c$iterator.hasNext();) {
        c = dynamicCast(c$iterator.next_0(), 49);
        c.execute();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.registry, e);
}

function fireEvent(event_0){
  $fireEvent(this, event_0);
}

function getClass_84(){
  return Lcom_google_gwt_event_shared_HandlerManager_2_classLit;
}

function HandlerManager(){
}

_ = HandlerManager.prototype = new Object_0;
_.fireEvent = fireEvent;
_.getClass$ = getClass_84;
_.typeId$ = 0;
_.deferredDeltas = null;
_.firingDepth = 0;
_.isReverseOrder = false;
_.registry = null;
_.source = null;
function $$init_83(){
}

function $HandlerManager$1(this$static, this$0, val$type, val$handler){
  this$static.this$0 = this$0;
  this$static.val$type = val$type;
  this$static.val$handler = val$handler;
  $Object(this$static);
  $$init_83();
  return this$static;
}

function execute_4(){
  $doAdd(this.this$0, this.val$type, this.val$handler);
}

function getClass_85(){
  return Lcom_google_gwt_event_shared_HandlerManager$1_2_classLit;
}

function HandlerManager$1(){
}

_ = HandlerManager$1.prototype = new Object_0;
_.execute = execute_4;
_.getClass$ = getClass_85;
_.typeId$ = 128;
_.this$0 = null;
_.val$handler = null;
_.val$type = null;
function $$init_84(this$static){
  this$static.map = $HashMap(new HashMap);
}

function $HandlerManager$HandlerRegistry(this$static){
  $Object(this$static);
  $$init_84(this$static);
  return this$static;
}

function $addHandler_0(this$static, type, handler){
  var l;
  l = $get_1(this$static, type);
  if (isNull(l)) {
    l = $ArrayList(new ArrayList);
    $put(this$static.map, type, l);
  }
  $add_3(l, handler);
}

function $fireEvent_0(this$static, event_0, isReverseOrder){
  var count, handler, i, type;
  type = event_0.getAssociatedType();
  count = $getHandlerCount(this$static, type);
  if (isReverseOrder) {
    for (i = count - 1; i >= 0; --i) {
      handler = $getHandler(this$static, type, i);
      event_0.dispatch(handler);
    }
  }
   else {
    for (i = 0; i < count; ++i) {
      handler = $getHandler(this$static, type, i);
      event_0.dispatch(handler);
    }
  }
}

function $get_1(this$static, type){
  return dynamicCast($get_2(this$static.map, type), 50);
}

function $getHandler(this$static, eventKey, index){
  var l;
  l = $get_1(this$static, eventKey);
  return dynamicCast($get_3(l, index), 51);
}

function $getHandlerCount(this$static, eventKey){
  var l;
  l = dynamicCast($get_2(this$static.map, eventKey), 50);
  return isNull(l)?0:$size_1(l);
}

function $isEventHandled_0(this$static, eventKey){
  return $containsKey(this$static.map, eventKey);
}

function getClass_86(){
  return Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2_classLit;
}

function HandlerManager$HandlerRegistry(){
}

_ = HandlerManager$HandlerRegistry.prototype = new Object_0;
_.getClass$ = getClass_86;
_.typeId$ = 0;
function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_148() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_148() , LTR;
  }
  return $clinit_148() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch ($ordinal(direction)) {
    case 0:
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        if (jsNotEquals(getDirectionOnElement(elem), ($clinit_148() , DEFAULT))) {
          $setPropertyString(elem, 'dir', '');
        }
        break;
      }

  }
}

function $clinit_148(){
  $clinit_148 = nullMethod;
  RTL = $HasDirection$Direction(new HasDirection$Direction, 'RTL', 0);
  LTR = $HasDirection$Direction(new HasDirection$Direction, 'LTR', 1);
  DEFAULT = $HasDirection$Direction(new HasDirection$Direction, 'DEFAULT', 2);
  ({_RTL:RTL, _LTR:LTR, _DEFAULT:DEFAULT});
}

function $$init_85(){
}

function $HasDirection$Direction(this$static, enum$name, enum$ordinal){
  $clinit_148();
  $Enum(this$static, enum$name, enum$ordinal);
  $$init_85();
  return this$static;
}

function getClass_87(){
  return Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit;
}

function values_2(){
  $clinit_148();
  return initValues(_3Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 325, 140, [RTL, LTR, DEFAULT]);
}

function HasDirection$Direction(){
}

_ = HasDirection$Direction.prototype = new Enum;
_.getClass$ = getClass_87;
_.typeId$ = 130;
var DEFAULT, LTR, RTL;
function $clinit_149(){
  $clinit_149 = nullMethod;
  instance = $LocaleInfo(new LocaleInfo, $LocaleInfoImpl_(new LocaleInfoImpl_), $CldrImpl(new CldrImpl));
}

function $$init_86(){
}

function $LocaleInfo(this$static, impl, cldr){
  $clinit_149();
  $Object(this$static);
  $$init_86();
  this$static , impl;
  this$static , cldr;
  return this$static;
}

function $isRTL(){
  return $isRTL_0();
}

function getClass_88(){
  return Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit;
}

function getCurrentLocale(){
  $clinit_149();
  return instance;
}

function LocaleInfo(){
}

_ = LocaleInfo.prototype = new Object_0;
_.getClass$ = getClass_88;
_.typeId$ = 0;
var instance;
function $$init_87(){
}

function $CldrImpl(this$static){
  $Object(this$static);
  $$init_87();
  return this$static;
}

function $isRTL_0(){
  return false;
}

function getClass_89(){
  return Lcom_google_gwt_i18n_client_impl_CldrImpl_2_classLit;
}

function CldrImpl(){
}

_ = CldrImpl.prototype = new Object_0;
_.getClass$ = getClass_89;
_.typeId$ = 0;
function $$init_88(){
}

function $LocaleInfoImpl(this$static){
  $Object(this$static);
  $$init_88();
  return this$static;
}

function getClass_90(){
  return Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_2_classLit;
}

function LocaleInfoImpl(){
}

_ = LocaleInfoImpl.prototype = new Object_0;
_.getClass$ = getClass_90;
_.typeId$ = 0;
function $$init_89(){
}

function $LocaleInfoImpl_shared(this$static){
  $LocaleInfoImpl(this$static);
  $$init_89();
  return this$static;
}

function getClass_91(){
  return Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_1shared_2_classLit;
}

function LocaleInfoImpl_shared(){
}

_ = LocaleInfoImpl_shared.prototype = new LocaleInfoImpl;
_.getClass$ = getClass_91;
_.typeId$ = 0;
function $$init_90(){
}

function $LocaleInfoImpl_(this$static){
  $LocaleInfoImpl_shared(this$static);
  $$init_90();
  return this$static;
}

function getClass_92(){
  return Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_1_2_classLit;
}

function LocaleInfoImpl_(){
}

_ = LocaleInfoImpl_.prototype = new LocaleInfoImpl_shared;
_.getClass$ = getClass_92;
_.typeId$ = 0;
function $$init_91(this$static){
}

function $Array(this$static){
  $Object(this$static);
  $$init_91(this$static);
  return this$static;
}

function $getClass_0(this$static){
  return this$static.arrayClass$;
}

function arraySlice(array, fromIndex, toIndex){
  return array.slice(fromIndex, toIndex);
}

function asArray(array){
  return array;
}

function asArrayType(array){
  return array;
}

function cloneSubrange(array, fromIndex, toIndex){
  var a, result;
  a = asArrayType(array);
  result = arraySlice(a, fromIndex, toIndex);
  initValues($getClass_0(a), getTypeId(a), a.queryId$, result);
  return asArray(result);
}

function createFrom(array, length_0){
  var a, result;
  a = asArrayType(array);
  result = createFromSeed(0, length_0);
  initValues($getClass_0(a), getTypeId(a), a.queryId$, result);
  return asArray(result);
}

function createFromSeed(seedType, length_0){
  var array = new Array(length_0);
  if (seedType > 0) {
    var value = [null, 0, false, [0, 0]][seedType];
    for (var i = 0; i < length_0; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function getClass_93(){
  return $getClass_0(this);
}

function initDim(arrayClass, typeId, queryId, length_0, seedType){
  var result;
  result = createFromSeed(seedType, length_0);
  initValues(arrayClass, typeId, queryId, result);
  return result;
}

function initValues(arrayClass, typeId, queryId, array){
  wrapArray(array);
  array.arrayClass$ = arrayClass;
  setTypeId(array, typeId);
  array.queryId$ = queryId;
  return array;
}

function set(array, index, value){
  return array[index] = value;
}

function setCheck(array, index, value){
  if (jsNotEquals(value, null)) {
    if (array.queryId$ > 0 && !canCastUnsafe(getTypeId(value), array.queryId$)) {
      throw $ArrayStoreException(new ArrayStoreException);
    }
    if (array.queryId$ < 0 && isJavaObject(value)) {
      throw $ArrayStoreException(new ArrayStoreException);
    }
  }
  return set(array, index, value);
}

function Array_0(){
}

_ = Array_0.prototype = new Object_0;
_.getClass$ = getClass_93;
_.typeId$ = 0;
_.arrayClass$ = null;
_.length = 0;
_.queryId$ = 0;
function $clinit_156(){
  $clinit_156 = nullMethod;
  expandoNames_0 = makeEmptyJsArray();
  expandoValues_0 = makeEmptyJsArray();
  initExpandos($Array(new Array_0), expandoNames_0, expandoValues_0);
}

function initExpandos(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name_0 in protoType) {
    if (value = protoType[name_0]) {
      expandoNames[i] = name_0;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function makeEmptyJsArray(){
  return [];
}

function wrapArray(array){
  $clinit_156();
  wrapArray_0(array, expandoNames_0, expandoValues_0);
}

function wrapArray_0(array, expandoNames, expandoValues){
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var expandoNames_0, expandoValues_0;
function canCast(srcId, dstId){
  return srcId && !!typeIdArray[srcId][dstId];
}

function canCastUnsafe(srcId, dstId){
  return srcId && typeIdArray[srcId][dstId];
}

function dynamicCast(src, dstId){
  if (jsNotEquals(src, null) && !canCastUnsafe(getTypeId(src), dstId)) {
    throw $ClassCastException(new ClassCastException);
  }
  return src;
}

function dynamicCastJso(src){
  if (jsNotEquals(src, null) && isJavaObject(src)) {
    throw $ClassCastException(new ClassCastException);
  }
  return src;
}

function getNullMethod(){
  return nullMethod;
}

function instanceOf(src, dstId){
  return jsNotEquals(src, null) && canCast(getTypeId(src), dstId);
}

function instanceOfJso(src){
  return jsNotEquals(src, null) && isJavaScriptObject(src);
}

function isJavaObject(src){
  return jsEquals(getTypeMarker(src), getNullMethod()) || getTypeId(src) == 2;
}

function isJavaScriptObject(src){
  return jsNotEquals(getTypeMarker(src), getNullMethod()) && getTypeId(src) != 2;
}

function isNotNull(src){
  return !!src;
}

function isNull(src){
  return !src;
}

function jsEquals(a, b){
  return a == b;
}

function jsNotEquals(a, b){
  return a != b;
}

function maskUndefined(src){
  return src == null?null:src;
}

function round_int(x){
  return ~~Math.max(Math.min(x, 2147483647), -2147483648);
}

var typeIdArray = [{}, {}, {1:1, 144:1, 146:1}, {63:1}, {63:1, 67:1}, {50:1, 63:1, 67:1, 144:1, 160:1}, {50:1, 63:1, 67:1, 144:1, 160:1}, {8:1, 146:1}, {36:1, 37:1, 38:1, 40:1, 51:1}, {61:1}, {9:1}, {17:1}, {23:1, 144:1}, {15:1, 23:1, 144:1}, {4:1, 15:1, 23:1, 144:1}, {6:1}, {6:1}, {6:1}, {21:1}, {6:1}, {6:1}, {16:1}, {16:1}, {16:1}, {142:1}, {142:1}, {124:1}, {65:1}, {65:1}, {15:1, 23:1, 25:1, 144:1}, {15:1, 23:1, 25:1, 144:1}, {15:1, 23:1, 25:1, 144:1}, {24:1}, {119:1, 144:1, 146:1}, {119:1, 125:1, 131:1, 144:1, 146:1}, {119:1, 125:1, 131:1, 144:1, 146:1}, {119:1, 125:1, 131:1, 144:1, 146:1}, {119:1, 125:1, 131:1, 144:1, 146:1}, {119:1, 125:1, 131:1, 144:1, 146:1}, {119:1, 125:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 126:1, 131:1, 144:1, 146:1}, {119:1, 127:1, 131:1, 144:1, 146:1}, {119:1, 127:1, 131:1, 144:1, 146:1}, {119:1, 127:1, 131:1, 144:1, 146:1}, {119:1, 127:1, 131:1, 144:1, 146:1}, {119:1, 127:1, 131:1, 144:1, 146:1}, {119:1, 128:1, 131:1, 144:1, 146:1}, {119:1, 128:1, 131:1, 144:1, 146:1}, {119:1, 128:1, 131:1, 144:1, 146:1}, {119:1, 128:1, 131:1, 144:1, 146:1}, {119:1, 129:1, 131:1, 144:1, 146:1}, {119:1, 129:1, 131:1, 144:1, 146:1}, {119:1, 129:1, 131:1, 144:1, 146:1}, {119:1, 129:1, 131:1, 144:1, 146:1}, {119:1, 130:1, 131:1, 144:1, 146:1}, {119:1, 130:1, 131:1, 144:1, 146:1}, {119:1, 130:1, 131:1, 144:1, 146:1}, {119:1, 130:1, 131:1, 144:1, 146:1}, {119:1, 130:1, 131:1, 144:1, 146:1}, {119:1, 131:1, 132:1, 144:1, 146:1}, {119:1, 131:1, 132:1, 144:1, 146:1}, {119:1, 131:1, 132:1, 144:1, 146:1}, {119:1, 131:1, 132:1, 144:1, 146:1}, {119:1, 131:1, 132:1, 144:1, 146:1}, {119:1, 131:1, 132:1, 144:1, 146:1}, {119:1, 131:1, 132:1, 144:1, 146:1}, {119:1, 131:1, 132:1, 144:1, 146:1}, {119:1, 131:1, 132:1, 144:1, 146:1}, {119:1, 131:1, 132:1, 144:1, 146:1}, {119:1, 131:1, 133:1, 144:1, 146:1}, {119:1, 131:1, 133:1, 144:1, 146:1}, {119:1, 131:1, 133:1, 144:1, 146:1}, {119:1, 131:1, 133:1, 144:1, 146:1}, {119:1, 131:1, 133:1, 144:1, 146:1}, {119:1, 131:1, 134:1, 144:1, 146:1}, {119:1, 131:1, 134:1, 144:1, 146:1}, {119:1, 131:1, 134:1, 144:1, 146:1}, {119:1, 131:1, 134:1, 144:1, 146:1}, {119:1, 131:1, 134:1, 144:1, 146:1}, {119:1, 131:1, 135:1, 144:1, 146:1}, {119:1, 131:1, 135:1, 144:1, 146:1}, {119:1, 131:1, 135:1, 144:1, 146:1}, {119:1, 131:1, 135:1, 144:1, 146:1}, {119:1, 131:1, 135:1, 144:1, 146:1}, {119:1, 136:1, 144:1, 146:1}, {119:1, 136:1, 144:1, 146:1}, {119:1, 136:1, 144:1, 146:1}, {119:1, 136:1, 144:1, 146:1}, {119:1, 136:1, 144:1, 146:1}, {119:1, 136:1, 144:1, 146:1}, {119:1, 136:1, 144:1, 146:1}, {119:1, 136:1, 144:1, 146:1}, {119:1, 136:1, 144:1, 146:1}, {119:1, 136:1, 144:1, 146:1}, {119:1, 131:1, 137:1, 144:1, 146:1}, {119:1, 131:1, 137:1, 144:1, 146:1}, {119:1, 131:1, 137:1, 144:1, 146:1}, {119:1, 131:1, 137:1, 144:1, 146:1}, {119:1, 131:1, 137:1, 144:1, 146:1}, {119:1, 131:1, 137:1, 144:1, 146:1}, {119:1, 131:1, 137:1, 144:1, 146:1}, {119:1, 131:1, 137:1, 144:1, 146:1}, {119:1, 131:1, 137:1, 144:1, 146:1}, {119:1, 131:1, 138:1, 144:1, 146:1}, {119:1, 131:1, 138:1, 144:1, 146:1}, {119:1, 131:1, 138:1, 144:1, 146:1}, {139:1}, {29:1, 139:1}, {26:1, 31:1, 51:1}, {32:1, 33:1, 34:1, 51:1}, {49:1}, {49:1}, {119:1, 140:1, 144:1, 146:1}, {119:1, 141:1, 144:1, 146:1}, {142:1}, {51:1, 55:1}, {51:1, 55:1, 64:1}, {48:1, 51:1, 55:1}, {44:1, 51:1, 55:1, 66:1}, {46:1, 51:1, 55:1}, {51:1, 55:1, 68:1}, {15:1, 23:1, 25:1, 144:1}, {65:1}, {65:1}, {15:1, 23:1, 25:1, 144:1}, {44:1, 51:1}, {111:1}, {111:1}, {111:1}, {111:1}, {111:1}, {111:1}, {61:1}, {61:1}, {61:1}, {142:1}, {142:1}, {142:1}, {142:1}, {142:1}, {142:1}, {70:1}, {2:1, 69:1, 70:1, 111:1}, {2:1, 69:1, 70:1, 110:1, 111:1}, {2:1, 69:1, 70:1, 110:1, 111:1}, {2:1, 18:1, 19:1, 69:1, 70:1, 110:1, 111:1}, {15:1, 23:1, 25:1, 144:1}, {2:1, 69:1, 70:1, 110:1, 111:1}, {2:1, 69:1, 70:1, 111:1}, {2:1, 19:1, 69:1, 70:1, 110:1, 111:1}, {124:1}, {2:1, 20:1, 69:1, 70:1, 110:1, 111:1}, {2:1, 10:1, 20:1, 56:1, 69:1, 70:1, 110:1, 111:1}, {2:1, 10:1, 20:1, 56:1, 69:1, 70:1, 110:1, 111:1}, {2:1, 20:1, 69:1, 70:1, 110:1, 111:1}, {2:1, 69:1, 70:1, 83:1, 110:1, 111:1}, {2:1, 20:1, 69:1, 70:1, 110:1, 111:1}, {124:1}, {2:1, 44:1, 45:1, 51:1, 69:1, 70:1, 72:1, 111:1}, {2:1, 11:1, 12:1, 13:1, 14:1, 20:1, 69:1, 70:1, 108:1, 109:1, 110:1, 111:1}, {2:1, 11:1, 12:1, 13:1, 14:1, 69:1, 70:1, 108:1, 109:1, 111:1}, {2:1, 20:1, 69:1, 70:1, 84:1, 110:1, 111:1}, {61:1}, {2:1, 69:1, 70:1, 111:1}, {2:1, 11:1, 12:1, 13:1, 14:1, 69:1, 70:1, 72:1, 106:1, 107:1, 111:1}, {2:1, 11:1, 12:1, 13:1, 14:1, 69:1, 70:1, 72:1, 105:1, 106:1, 107:1, 111:1}, {2:1, 69:1, 70:1, 94:1, 110:1, 111:1}, {2:1, 19:1, 69:1, 70:1, 110:1, 111:1}, {2:1, 11:1, 12:1, 13:1, 14:1, 69:1, 70:1, 111:1}, {50:1, 63:1, 67:1, 144:1, 160:1}, {51:1, 55:1}, {27:1, 51:1, 55:1}, {28:1, 51:1, 55:1}, {26:1, 31:1, 51:1, 55:1}, {32:1, 33:1, 34:1, 51:1, 55:1}, {30:1, 35:1, 51:1, 55:1}, {48:1, 51:1, 55:1}, {36:1, 37:1, 38:1, 39:1, 40:1, 51:1, 55:1}, {41:1, 51:1, 55:1}, {44:1, 45:1, 51:1, 55:1}, {51:1, 55:1, 73:1, 74:1}, {47:1, 51:1, 55:1}, {44:1, 51:1, 55:1}, {42:1, 51:1, 55:1}, {43:1, 47:1, 51:1, 55:1}, {28:1, 51:1, 55:1}, {44:1, 45:1, 47:1, 51:1, 55:1}, {2:1, 69:1, 70:1, 89:1, 111:1}, {2:1, 10:1, 20:1, 56:1, 69:1, 70:1, 110:1, 111:1}, {70:1, 99:1}, {70:1, 98:1}, {100:1}, {88:1}, {2:1, 69:1, 70:1, 111:1}, {46:1, 51:1}, {51:1, 64:1}, {48:1, 51:1}, {119:1, 143:1, 144:1, 146:1}, {124:1}, {61:1}, {63:1}, {2:1, 18:1, 19:1, 69:1, 70:1, 102:1, 110:1, 111:1}, {44:1, 51:1}, {2:1, 18:1, 19:1, 69:1, 70:1, 102:1, 110:1, 111:1}, {2:1, 69:1, 70:1, 72:1, 87:1, 108:1, 109:1, 111:1}, {32:1, 33:1, 34:1, 48:1, 51:1}, {61:1}, {2:1, 69:1, 70:1, 89:1, 111:1}, {70:1, 99:1, 103:1}, {2:1, 69:1, 70:1, 75:1, 77:1, 92:1, 111:1}, {2:1, 69:1, 70:1, 104:1, 107:1, 111:1}, {2:1, 69:1, 70:1, 91:1, 92:1, 110:1, 111:1}, {2:1, 19:1, 69:1, 70:1, 110:1, 111:1}, {2:1, 69:1, 70:1, 75:1, 77:1, 92:1, 111:1}, {2:1, 11:1, 12:1, 13:1, 14:1, 69:1, 70:1, 72:1, 108:1, 109:1, 111:1}, {2:1, 11:1, 12:1, 13:1, 14:1, 69:1, 70:1, 72:1, 108:1, 109:1, 111:1}, {27:1, 51:1}, {2:1, 11:1, 12:1, 13:1, 14:1, 69:1, 70:1, 108:1, 109:1, 110:1, 111:1}, {70:1, 97:1}, {70:1, 97:1}, {124:1}, {2:1, 19:1, 69:1, 70:1, 110:1, 111:1}, {61:1}, {61:1}, {113:1}, {113:1}, {61:1}, {15:1, 23:1, 144:1}, {15:1, 23:1, 25:1, 144:1}, {15:1, 23:1, 25:1, 144:1}, {15:1, 23:1, 25:1, 144:1}, {15:1, 23:1, 25:1, 144:1}, {23:1, 144:1}, {23:1, 144:1}, {114:1, 144:1, 146:1}, {144:1}, {115:1, 144:1, 146:1}, {116:1, 144:1, 146:1}, {145:1}, {15:1, 23:1, 25:1, 144:1}, {117:1, 144:1, 146:1}, {120:1, 144:1, 146:1}, {15:1, 23:1, 25:1, 144:1}, {15:1, 23:1, 25:1, 144:1}, {93:1, 144:1, 146:1}, {121:1, 144:1, 146:1}, {15:1, 23:1, 25:1, 144:1}, {15:1, 23:1, 25:1, 54:1, 144:1}, {122:1, 144:1, 146:1}, {144:1, 147:1}, {15:1, 23:1, 25:1, 144:1}, {15:1, 23:1, 25:1, 144:1}, {119:1, 144:1, 146:1, 148:1}, {119:1, 144:1, 146:1, 149:1}, {150:1}, {150:1}, {63:1, 101:1}, {63:1, 101:1}, {52:1}, {52:1}, {52:1}, {152:1}, {63:1, 67:1}, {63:1, 101:1}, {63:1}, {63:1, 67:1}, {63:1, 67:1, 144:1, 160:1}, {63:1}, {63:1, 67:1}, {152:1}, {150:1}, {63:1, 101:1}, {63:1, 101:1}, {52:1}, {63:1, 67:1, 160:1}, {150:1}, {63:1, 101:1}, {144:1, 146:1, 161:1}, {144:1, 150:1}, {63:1, 101:1, 144:1}, {63:1, 67:1, 144:1}, {152:1}, {52:1}, {15:1, 23:1, 25:1, 144:1, 151:1}, {2:1, 11:1, 12:1, 13:1, 14:1, 69:1, 70:1, 108:1, 109:1, 110:1, 111:1}, {6:1}, {144:1, 153:1}, {144:1, 154:1}, {144:1, 155:1}, {7:1, 123:1, 144:1}, {22:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {123:1, 144:1}, {118:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {123:1, 144:1}, {123:1, 144:1}, {118:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {123:1, 144:1}, {123:1, 144:1}, {118:1, 123:1, 144:1}, {123:1, 144:1}, {123:1, 144:1}, {112:1, 144:1}, {144:1, 159:1}, {144:1, 157:1}, {123:1, 144:1}, {123:1, 144:1}, {123:1, 144:1}, {123:1, 144:1}, {123:1, 144:1}, {118:1, 123:1, 144:1}, {123:1, 144:1}, {123:1, 144:1}, {123:1, 144:1}, {123:1, 144:1}, {123:1, 144:1}, {53:1, 123:1, 144:1}, {71:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {118:1, 123:1, 144:1}, {144:1, 158:1}, {144:1, 156:1}, {123:1, 144:1}];
function init_0(){
  isStatsAvailable() && onModuleStart('com.allen_sauer.gwt.dnd.client.util.DragEntryPoint');
  $onModuleLoad($DragEntryPoint(new DragEntryPoint));
  isStatsAvailable() && onModuleStart('org.hamcrest.DummyEntryPoint');
  $onModuleLoad_5($DummyEntryPoint_3(new DummyEntryPoint_3));
  isStatsAvailable() && onModuleStart('mx.gwtutils.internal.DummyEntryPoint');
  $onModuleLoad_1($DummyEntryPoint_0(new DummyEntryPoint_0));
  isStatsAvailable() && onModuleStart('com.google.common.DummyEntryPoint');
  $onModuleLoad_0($DummyEntryPoint(new DummyEntryPoint));
  isStatsAvailable() && onModuleStart('nx.core.internal.DummyEntryPoint');
  $onModuleLoad_2($DummyEntryPoint_1(new DummyEntryPoint_1));
  isStatsAvailable() && onModuleStart('nx.ui.internal.DummyEntryPoint');
  $onModuleLoad_4($DummyEntryPoint_2(new DummyEntryPoint_2));
  isStatsAvailable() && onModuleStart('nx.ui.gwttree.internal.GwtTreeEntryPoint');
  $onModuleLoad_3($GwtTreeEntryPoint(new GwtTreeEntryPoint));
}

function caught_0(e){
  if (instanceOf(e, 23)) {
    return e;
  }
  return $JavaScriptException(new JavaScriptException, e);
}

function compare_0(a, b){
  var nega, negb;
  if (eq(a, b)) {
    return 0;
  }
  nega = isNegative(a);
  negb = isNegative(b);
  if (nega && !negb) {
    return -1;
  }
  if (!nega && negb) {
    return 1;
  }
  if (isNegative(sub(a, b))) {
    return -1;
  }
   else {
    return 1;
  }
}

function create_1(valueLow, valueHigh){
  var diffHigh, diffLow;
  valueHigh %= 1.8446744073709552E19;
  valueLow %= 1.8446744073709552E19;
  {
    diffHigh = valueHigh % 4294967296;
    diffLow = floor(valueLow / 4294967296) * 4294967296;
    valueHigh = valueHigh - diffHigh + diffLow;
    valueLow = valueLow - diffLow + diffHigh;
  }
  while (valueLow < 0) {
    valueLow += 4294967296;
    valueHigh -= 4294967296;
  }
  while (valueLow > 4294967295) {
    valueLow -= 4294967296;
    valueHigh += 4294967296;
  }
  valueHigh = valueHigh % 1.8446744073709552E19;
  while (valueHigh > 9223372032559808512) {
    valueHigh -= 1.8446744073709552E19;
  }
  while (valueHigh < -9223372036854775808) {
    valueHigh += 1.8446744073709552E19;
  }
  return createNormalized(valueLow, valueHigh);
}

function createNormalized(valueLow, valueHigh){
  return newLong0(valueLow, valueHigh);
}

function eq(a, b){
  return a[0] == b[0] && a[1] == b[1];
}

function fromDouble(value){
  if (isNaN_0(value)) {
    return $clinit_163() , ZERO;
  }
  if (value < -9223372036854775808) {
    return $clinit_163() , MIN_VALUE;
  }
  if (value >= 9223372036854775807) {
    return $clinit_163() , MAX_VALUE;
  }
  if (value > 0) {
    return create_1(floor(value), 0);
  }
   else {
    return create_1(ceil(value), 0);
  }
}

function fromInt(value){
  var rebase, result;
  if (value > -129 && value < 128) {
    rebase = value + 128;
    result = ($clinit_162() , boxedValues)[rebase];
    if (jsEquals(result, null)) {
      result = ($clinit_162() , boxedValues)[rebase] = internalFromInt(value);
    }
    return result;
  }
  return internalFromInt(value);
}

function gte(a, b){
  return compare_0(a, b) >= 0;
}

function internalFromInt(value){
  if (value >= 0) {
    return createNormalized(value, 0);
  }
   else {
    return createNormalized(value + 4294967296, -4294967296);
  }
}

function isNegative(a){
  return a[1] < 0;
}

function newLong0(valueLow, valueHigh){
  return [valueLow, valueHigh];
}

function sub(a, b){
  var newHigh, newLow;
  newHigh = a[1] - b[1];
  newLow = a[0] - b[0];
  return create_1(newLow, newHigh);
}

function typeChange(value){
  return typeChange0(value);
}

function typeChange0(value){
  return value;
}

function $clinit_162(){
  $clinit_162 = nullMethod;
  boxedValues = initDim(_3_3D_classLit, 352, 112, 256, 0);
}

var boxedValues;
function $clinit_163(){
  $clinit_163 = nullMethod;
  log(2);
  MAX_VALUE = typeChange(P7fffffffffffffff_longLit);
  MIN_VALUE = typeChange(N8000000000000000_longLit);
  fromInt(-1);
  fromInt(1);
  fromInt(2);
  typeChange(P1000000_longLit);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function isStatsAvailable(){
  return !!$stats;
}

function onModuleStart(mainClassName){
  return $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:mainClassName});
}

function getTypeId(o){
  return o.typeId$;
}

function getTypeMarker(o){
  return o.typeMarker$;
}

function setTypeId(o, typeId){
  o.typeId$ = typeId;
}

function $$init_92(){
}

function $ImageResourcePrototype(this$static, name_0, url, left, top_0, width, height, animated, lossy){
  $Object(this$static);
  $$init_92();
  this$static , name_0;
  this$static.left = left;
  this$static.top_0 = top_0;
  this$static.height = height;
  this$static.width = width;
  this$static.url = url;
  this$static , animated;
  this$static , lossy;
  return this$static;
}

function getClass_94(){
  return Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit;
}

function getHeight(){
  return this.height;
}

function getLeft_2(){
  return this.left;
}

function getTop_2(){
  return this.top_0;
}

function getURL(){
  return this.url;
}

function getWidth(){
  return this.width;
}

function ImageResourcePrototype(){
}

_ = ImageResourcePrototype.prototype = new Object_0;
_.getClass$ = getClass_94;
_.getHeight = getHeight;
_.getLeft = getLeft_2;
_.getTop = getTop_2;
_.getURL = getURL;
_.getWidth = getWidth;
_.typeId$ = 132;
_.height = 0;
_.left = 0;
_.top_0 = 0;
_.url = null;
_.width = 0;
function $$init_93(){
}

function $CommandCanceledException(this$static, command){
  $RuntimeException(this$static);
  $$init_93();
  this$static , command;
  return this$static;
}

function getClass_95(){
  return Lcom_google_gwt_user_client_CommandCanceledException_2_classLit;
}

function CommandCanceledException(){
}

_ = CommandCanceledException.prototype = new RuntimeException;
_.getClass$ = getClass_95;
_.typeId$ = 139;
function $$init_94(this$static){
  this$static.cancellationTimer = $CommandExecutor$1(new CommandExecutor$1, this$static);
  this$static.commands = $ArrayList(new ArrayList);
  this$static.executionTimer = $CommandExecutor$2(new CommandExecutor$2, this$static);
  this$static.iterator = $CommandExecutor$CircularIterator(new CommandExecutor$CircularIterator, this$static);
}

function $CommandExecutor(this$static){
  $Object(this$static);
  $$init_94(this$static);
  return this$static;
}

function $doCommandCanceled(this$static){
  var cmd, ex, ueh;
  cmd = $getLast(this$static.iterator);
  $remove(this$static.iterator);
  ex = null;
  if (instanceOf(cmd, 61)) {
    ex = $CommandCanceledException(new CommandCanceledException, dynamicCast(cmd, 61));
  }
   else if (instanceOf(cmd, 62)) {
    ex = $IncrementalCommandCanceledException(new IncrementalCommandCanceledException, dynamicCast(cmd, 62));
  }
  if (isNotNull(ex)) {
    ueh = getUncaughtExceptionHandler();
    if (isNotNull(ueh)) {
      null.nullMethod(ex);
    }
  }
  $setExecuting(this$static, false);
  $maybeStartExecutionTimer(this$static);
}

function $doExecuteCommands(this$static, startTimeMillis){
  var command, element, removeCommand, wasCanceled;
  wasCanceled = false;
  try {
    $setExecuting(this$static, true);
    $setEnd(this$static.iterator, this$static.commands.size_0());
    $schedule(this$static.cancellationTimer, 10000);
    while ($hasNext(this$static.iterator)) {
      element = $next(this$static.iterator);
      removeCommand = true;
      try {
        if (jsEquals(element, null)) {
          return;
        }
        if (instanceOf(element, 61)) {
          command = dynamicCast(element, 61);
          command.execute();
        }
         else if (instanceOf(element, 62)) {
          dynamicCast(element, 62);
          removeCommand = !null.nullMethod();
        }
      }
       finally {
        wasCanceled = $wasRemoved(this$static.iterator);
        if (wasCanceled) {
          return;
        }
        if (removeCommand) {
          $remove(this$static.iterator);
        }
      }
      if (hasTimeSliceExpired(currentTimeMillis_0(), startTimeMillis)) {
        return;
      }
    }
  }
   finally {
    if (!wasCanceled) {
      $cancel_0(this$static.cancellationTimer);
      $setExecuting(this$static, false);
      $maybeStartExecutionTimer(this$static);
    }
  }
}

function $isExecuting(this$static){
  return this$static.executing;
}

function $isExecutionTimerPending(this$static){
  return this$static.executionTimerPending;
}

function $maybeStartExecutionTimer(this$static){
  if (!this$static.commands.isEmpty() && !$isExecutionTimerPending(this$static) && !$isExecuting(this$static)) {
    $setExecutionTimerPending(this$static, true);
    $schedule(this$static.executionTimer, 1);
  }
}

function $setExecuting(this$static, executing){
  this$static.executing = executing;
}

function $setExecutionTimerPending(this$static, pending){
  this$static.executionTimerPending = pending;
}

function $submit(this$static, command){
  this$static.commands.add(command);
  $maybeStartExecutionTimer(this$static);
}

function getClass_96(){
  return Lcom_google_gwt_user_client_CommandExecutor_2_classLit;
}

function hasTimeSliceExpired(currentTimeMillis, startTimeMillis){
  return currentTimeMillis - startTimeMillis >= 100;
}

function CommandExecutor(){
}

_ = CommandExecutor.prototype = new Object_0;
_.getClass$ = getClass_96;
_.typeId$ = 0;
_.executing = false;
_.executionTimerPending = false;
function $clinit_174(){
  $clinit_174 = nullMethod;
  $clinit_43();
}

function $$init_95(){
}

function $CommandExecutor$1(this$static, this$0){
  $clinit_174();
  this$static.this$0 = this$0;
  $Timer(this$static);
  $$init_95();
  return this$static;
}

function getClass_97(){
  return Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit;
}

function run_0(){
  if (!$isExecuting(this.this$0)) {
    return;
  }
  $doCommandCanceled(this.this$0);
}

function CommandExecutor$1(){
}

_ = CommandExecutor$1.prototype = new Timer;
_.getClass$ = getClass_97;
_.run = run_0;
_.typeId$ = 140;
_.this$0 = null;
function $clinit_175(){
  $clinit_175 = nullMethod;
  $clinit_43();
}

function $$init_96(){
}

function $CommandExecutor$2(this$static, this$0){
  $clinit_175();
  this$static.this$0 = this$0;
  $Timer(this$static);
  $$init_96();
  return this$static;
}

function getClass_98(){
  return Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit;
}

function run_1(){
  $setExecutionTimerPending(this.this$0, false);
  $doExecuteCommands(this.this$0, currentTimeMillis_0());
}

function CommandExecutor$2(){
}

_ = CommandExecutor$2.prototype = new Timer;
_.getClass$ = getClass_98;
_.run = run_1;
_.typeId$ = 141;
_.this$0 = null;
function $$init_97(this$static){
}

function $CommandExecutor$CircularIterator(this$static, this$0){
  this$static.this$0 = this$0;
  $Object(this$static);
  $$init_97(this$static);
  return this$static;
}

function $getLast(this$static){
  return this$static.this$0.commands.get_0(this$static.last);
}

function $hasNext(this$static){
  return this$static.next < this$static.end;
}

function $next(this$static){
  var command;
  this$static.last = this$static.next;
  command = this$static.this$0.commands.get_0(this$static.next++);
  if (this$static.next >= this$static.end) {
    this$static.next = 0;
  }
  return command;
}

function $remove(this$static){
  this$static.this$0.commands.remove_3(this$static.last);
  --this$static.end;
  if (this$static.last <= this$static.next) {
    if (--this$static.next < 0) {
      this$static.next = 0;
    }
  }
  this$static.last = -1;
}

function $setEnd(this$static, end){
  this$static.end = end;
}

function $wasRemoved(this$static){
  return this$static.last == -1;
}

function getClass_99(){
  return Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit;
}

function hasNext(){
  return $hasNext(this);
}

function next_0(){
  return $next(this);
}

function remove_0(){
  $remove(this);
}

function CommandExecutor$CircularIterator(){
}

_ = CommandExecutor$CircularIterator.prototype = new Object_0;
_.getClass$ = getClass_99;
_.hasNext = hasNext;
_.next_0 = next_0;
_.remove = remove_0;
_.typeId$ = 0;
_.end = 0;
_.last = -1;
_.next = 0;
_.this$0 = null;
function $clinit_177(){
  $clinit_177 = nullMethod;
  impl_2 = $DOMImplOpera_0(new DOMImplOpera_0);
}

function appendChild(parent_0, child){
  $clinit_177();
  $appendChild(parent_0, child);
}

function clone_0(elem, deep){
  $clinit_177();
  return $cast($cloneNode(elem, deep));
}

function createDiv(){
  $clinit_177();
  return $cast($createDivElement(get_0()));
}

function createTBody(){
  $clinit_177();
  return $cast($createTBodyElement(get_0()));
}

function createTD(){
  $clinit_177();
  return $cast($createTDElement(get_0()));
}

function createTR(){
  $clinit_177();
  return $cast($createTRElement(get_0()));
}

function createTable(){
  $clinit_177();
  return $cast($createTableElement(get_0()));
}

function createUniqueId(){
  $clinit_177();
  return $createUniqueId(get_0());
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_177();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  dispatchEventImpl(evt, elem, listener);
  currentEvent = prevCurrentEvent;
}

function dispatchEventImpl(evt, elem, listener){
  if (jsEquals(elem, sCaptureElem)) {
    if (eventGetType(evt) == 8192) {
      sCaptureElem = null;
    }
  }
  listener.onBrowserEvent(evt);
}

function eventCancelBubble(evt, cancel){
  $clinit_177();
  $eventCancelBubble(evt, cancel);
}

function eventGetAltKey(evt){
  $clinit_177();
  return $getAltKey(evt);
}

function eventGetCurrentEvent(){
  $clinit_177();
  return currentEvent;
}

function eventGetCurrentTarget_0(evt){
  $clinit_177();
  return $cast($getCurrentTarget(evt));
}

function eventGetKeyCode(evt){
  $clinit_177();
  return $getKeyCode(evt);
}

function eventGetMetaKey(evt){
  $clinit_177();
  return $getMetaKey(evt);
}

function eventGetTarget_0(evt){
  $clinit_177();
  return $getTarget(evt);
}

function eventGetType(evt){
  $clinit_177();
  return $eventGetTypeInt(evt);
}

function eventPreventDefault_0(evt){
  $clinit_177();
  $preventDefault(evt);
}

function getAbsoluteLeft_1(elem){
  $clinit_177();
  return $getAbsoluteLeft(elem);
}

function getAbsoluteTop_1(elem){
  $clinit_177();
  return $getAbsoluteTop(elem);
}

function getElementAttribute(elem, attr){
  $clinit_177();
  return $getAttribute(elem, attr);
}

function getElementPropertyInt(elem, prop){
  $clinit_177();
  return $getPropertyInt(elem, prop);
}

function getEventsSunk(elem){
  $clinit_177();
  return $getEventsSunk(elem);
}

function getFirstChild(elem){
  $clinit_177();
  return $cast($getFirstChildElement_0(elem));
}

function getNextSibling(elem){
  $clinit_177();
  return $cast($getNextSibling(elem));
}

function getParent(elem){
  $clinit_177();
  return $cast($getParentElement_0(elem));
}

function getStyleAttribute(elem, attr){
  $clinit_177();
  return $getProperty($getStyle(elem), attr);
}

function insertChild(parent_0, child, index){
  $clinit_177();
  impl_2.insertChild(parent_0, child, index);
}

function isOrHasChild_0(parent_0, child){
  $clinit_177();
  return $isOrHasChild(parent_0, child);
}

function previewEvent(evt){
  $clinit_177();
  var ret;
  ret = fireNativePreviewEvent(evt);
  if (!ret && isNotNull(evt)) {
    eventCancelBubble(evt, true);
    eventPreventDefault_0(evt);
  }
  return ret;
}

function releaseCapture(elem){
  $clinit_177();
  if (isNotNull(sCaptureElem) && jsEquals(elem, sCaptureElem)) {
    sCaptureElem = null;
  }
  impl_2.releaseCapture(elem);
}

function removeChild(parent_0, child){
  $clinit_177();
  $removeChild(parent_0, child);
}

function scrollIntoView_1(elem){
  $clinit_177();
  $scrollIntoView(elem);
}

function setCapture(elem){
  $clinit_177();
  sCaptureElem = elem;
  impl_2.setCapture(elem);
}

function setElementAttribute(elem, attr, value){
  $clinit_177();
  $setAttribute(elem, attr, value);
}

function setElementProperty(elem, prop, value){
  $clinit_177();
  $setPropertyString(elem, prop, value);
}

function setEventListener(elem, listener){
  $clinit_177();
  $setEventListener(elem, listener);
}

function setInnerHTML(elem, html){
  $clinit_177();
  $setInnerHTML(elem, html);
}

function setIntStyleAttribute(elem, attr, value){
  $clinit_177();
  $setProperty($getStyle(elem), attr, toString_0(value));
}

function setStyleAttribute(elem, attr, value){
  $clinit_177();
  $setProperty($getStyle(elem), attr, value);
}

function sinkEvents(elem, eventBits){
  $clinit_177();
  impl_2.sinkEvents(elem, eventBits);
}

var currentEvent = null, impl_2, sCaptureElem = null;
function $clinit_178(){
  $clinit_178 = nullMethod;
  commandExecutor = $CommandExecutor(new CommandExecutor);
}

function addCommand(cmd){
  $clinit_178();
  if (isNull(cmd)) {
    throw $NullPointerException_0(new NullPointerException, 'cmd cannot be null');
  }
  $submit(commandExecutor, cmd);
}

var commandExecutor;
function $getCurrentTarget(this$static){
  return $cast($getCurrentEventTarget(this$static));
}

function $getRelatedTarget(this$static){
  return $cast($getRelatedEventTarget(this$static));
}

function $getTarget(this$static){
  return $cast($getEventTarget(this$static));
}

function fireNativePreviewEvent(nativeEvent){
  return fire_4(handlers_0, nativeEvent);
}

function getTypeInt(typeName){
  return $eventGetTypeInt_0(($clinit_177() , impl_2 , typeName));
}

var handlers_0 = null;
function fire_4(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (isNotNull(TYPE_6) && isNotNull(handlers) && $isEventHandled(handlers, TYPE_6)) {
    lastIsCanceled = null.nullField;
    lastIsConsumed = null.nullField;
    lastIsFirstHandler = null.nullField;
    lastNativeEvent = null.nullField;
    null.nullMethod();
    null.nullMethod(nativeEvent);
    $fireEvent(handlers, singleton);
    ret = !(null.nullMethod() && !null.nullMethod());
    singleton , lastIsCanceled;
    singleton , lastIsConsumed;
    singleton , lastIsFirstHandler;
    singleton , lastNativeEvent;
    return ret;
  }
  return true;
}

var TYPE_6 = null, singleton = null;
function $$init_98(){
}

function $IncrementalCommandCanceledException(this$static, command){
  $RuntimeException(this$static);
  $$init_98();
  this$static , command;
  return this$static;
}

function getClass_100(){
  return Lcom_google_gwt_user_client_IncrementalCommandCanceledException_2_classLit;
}

function IncrementalCommandCanceledException(){
}

_ = IncrementalCommandCanceledException.prototype = new RuntimeException;
_.getClass$ = getClass_100;
_.typeId$ = 142;
function $$init_99(){
}

function $Timer$1(this$static){
  $Object(this$static);
  $$init_99();
  return this$static;
}

function getClass_101(){
  return Lcom_google_gwt_user_client_Timer$1_2_classLit;
}

function onClose(event_0){
  while ($size_1(($clinit_43() , timers)) > 0) {
    $cancel_0(dynamicCast($get_3(($clinit_43() , timers), 0), 65));
  }
}

function Timer$1(){
}

_ = Timer$1.prototype = new Object_0;
_.getClass$ = getClass_101;
_.onClose = onClose;
_.typeId$ = 143;
function $clinit_184(){
  $clinit_184 = nullMethod;
  impl_3 = $WindowImpl(new WindowImpl);
}

function addCloseHandler(handler){
  $clinit_184();
  maybeInitializeCloseHandlers();
  return addHandler(getType_12(), handler);
}

function addHandler(type, handler){
  return $addHandler(getHandlers(), type, handler);
}

function alert_0(msg){
  $clinit_184();
  $wnd.alert(msg);
}

function fireEvent_0(event_0){
  if (isNotNull(handlers_1)) {
    $fireEvent(handlers_1, event_0);
  }
}

function getClientHeight_1(){
  $clinit_184();
  return $getClientHeight(get_0());
}

function getClientWidth_1(){
  $clinit_184();
  return $getClientWidth(get_0());
}

function getHandlers(){
  if (isNull(handlers_1)) {
    handlers_1 = $Window$WindowHandlers(new Window$WindowHandlers);
  }
  return handlers_1;
}

function maybeInitializeCloseHandlers(){
  if (isClient() && !closeHandlersInitialized) {
    impl_3.initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function onClosed(){
  $clinit_184();
  if (closeHandlersInitialized) {
    fire_0(getHandlers(), null);
  }
}

function onClosing(){
  $clinit_184();
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = $Window$ClosingEvent(new Window$ClosingEvent);
    fireEvent_0(event_0);
    return $getMessage_0(event_0);
  }
  return null;
}

var closeHandlersInitialized = false, handlers_1 = null, impl_3;
function $clinit_185(){
  $clinit_185 = nullMethod;
  TYPE_7 = $GwtEvent$Type(new GwtEvent$Type);
}

function $$init_100(this$static){
}

function $Window$ClosingEvent(this$static){
  $clinit_185();
  $GwtEvent(this$static);
  $$init_100(this$static);
  return this$static;
}

function $dispatch_6(this$static){
  null.nullMethod(this$static);
}

function $getMessage_0(this$static){
  return this$static.message_0;
}

function dispatch_6(p0){
  $dispatch_6(this, dynamicCast(p0, 66));
}

function getAssociatedType_7(){
  return TYPE_7;
}

function getClass_102(){
  return Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit;
}

function Window$ClosingEvent(){
}

_ = Window$ClosingEvent.prototype = new GwtEvent;
_.dispatch = dispatch_6;
_.getAssociatedType = getAssociatedType_7;
_.getClass$ = getClass_102;
_.typeId$ = 0;
_.message_0 = null;
var TYPE_7;
function $$init_101(){
}

function $Window$WindowHandlers(this$static){
  $HandlerManager(this$static, null);
  $$init_101();
  return this$static;
}

function getClass_103(){
  return Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit;
}

function Window$WindowHandlers(){
}

_ = Window$WindowHandlers.prototype = new HandlerManager;
_.getClass$ = getClass_103;
_.typeId$ = 144;
function $$init_102(){
}

function $DOMImpl_0(this$static){
  $Object(this$static);
  $$init_102();
  return this$static;
}

function $eventCancelBubble(evt, cancel){
  evt.cancelBubble = cancel;
}

function $eventGetTypeInt(evt){
  return $eventGetTypeInt_0($getType(evt));
}

function $eventGetTypeInt_0(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'mousewheel':
      return 131072;
    case 'DOMMouseScroll':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return 524288;
  }
}

function $getEventsSunk(elem){
  return elem.__eventBits || 0;
}

function $maybeInitializeEventSystem(this$static){
  if (!eventSystemIsInitialized) {
    this$static.initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function $setEventListener(elem, listener){
  elem.__listener = listener;
}

function getClass_104(){
  return Lcom_google_gwt_user_client_impl_DOMImpl_2_classLit;
}

function isMyListener(object){
  return !instanceOfJso(object) && instanceOf(object, 69);
}

function DOMImpl_0(){
}

_ = DOMImpl_0.prototype = new Object_0;
_.getClass$ = getClass_104;
_.typeId$ = 0;
var eventSystemIsInitialized = false;
function $$init_103(){
}

function $DOMImplStandard_0(this$static){
  $DOMImpl_0(this$static);
  $$init_103();
  return this$static;
}

function $initEventSystem(){
  dispatchCapturedMouseEvent = $entry(function(evt){
    if (dispatchCapturedEvent(evt)) {
      var cap = captureElem;
      if (cap && cap.__listener) {
        if (isMyListener(cap.__listener)) {
          dispatchEvent_0(evt, cap, cap.__listener);
          evt.stopPropagation();
        }
      }
    }
  }
  );
  dispatchCapturedEvent = $entry(function(evt){
    if (!previewEvent(evt)) {
      evt.stopPropagation();
      evt.preventDefault();
      return false;
    }
    return true;
  }
  );
  dispatchEvent_1 = $entry(function(evt){
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentNode;
    }
    if (curElem && curElem.nodeType != 1) {
      curElem = null;
    }
    if (listener) {
      if (isMyListener(listener)) {
        dispatchEvent_0(evt, curElem, listener);
      }
    }
  }
  );
  $wnd.addEventListener('click', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('dblclick', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousedown', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseup', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousemove', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseover', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseout', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousewheel', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('keydown', dispatchCapturedEvent, true);
  $wnd.addEventListener('keyup', dispatchCapturedEvent, true);
  $wnd.addEventListener('keypress', dispatchCapturedEvent, true);
}

function $releaseCaptureImpl(elem){
  if (elem === captureElem) {
    captureElem = null;
  }
}

function $setCaptureImpl(elem){
  captureElem = elem;
}

function $sinkEvents(this$static, elem, bits){
  $maybeInitializeEventSystem(this$static);
  this$static.sinkEventsImpl(elem, bits);
}

function getClass_105(){
  return Lcom_google_gwt_user_client_impl_DOMImplStandard_2_classLit;
}

function initEventSystem(){
  $initEventSystem();
}

function insertChild_0(parent_0, toAdd, index){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function releaseCapture_0(elem){
  $maybeInitializeEventSystem(this);
  $releaseCaptureImpl(elem);
}

function setCapture_0(elem){
  $maybeInitializeEventSystem(this);
  $setCaptureImpl(elem);
}

function sinkEvents_0(elem, bits){
  $sinkEvents(this, elem, bits);
}

function sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  if (chMask & 1)
    elem.onclick = bits & 1?dispatchEvent_1:null;
  if (chMask & 2)
    elem.ondblclick = bits & 2?dispatchEvent_1:null;
  if (chMask & 4)
    elem.onmousedown = bits & 4?dispatchEvent_1:null;
  if (chMask & 8)
    elem.onmouseup = bits & 8?dispatchEvent_1:null;
  if (chMask & 16)
    elem.onmouseover = bits & 16?dispatchEvent_1:null;
  if (chMask & 32)
    elem.onmouseout = bits & 32?dispatchEvent_1:null;
  if (chMask & 64)
    elem.onmousemove = bits & 64?dispatchEvent_1:null;
  if (chMask & 128)
    elem.onkeydown = bits & 128?dispatchEvent_1:null;
  if (chMask & 256)
    elem.onkeypress = bits & 256?dispatchEvent_1:null;
  if (chMask & 512)
    elem.onkeyup = bits & 512?dispatchEvent_1:null;
  if (chMask & 1024)
    elem.onchange = bits & 1024?dispatchEvent_1:null;
  if (chMask & 2048)
    elem.onfocus = bits & 2048?dispatchEvent_1:null;
  if (chMask & 4096)
    elem.onblur = bits & 4096?dispatchEvent_1:null;
  if (chMask & 8192)
    elem.onlosecapture = bits & 8192?dispatchEvent_1:null;
  if (chMask & 16384)
    elem.onscroll = bits & 16384?dispatchEvent_1:null;
  if (chMask & 32768)
    elem.onload = bits & 32768?dispatchEvent_1:null;
  if (chMask & 65536)
    elem.onerror = bits & 65536?dispatchEvent_1:null;
  if (chMask & 131072)
    elem.onmousewheel = bits & 131072?dispatchEvent_1:null;
  if (chMask & 262144)
    elem.oncontextmenu = bits & 262144?dispatchEvent_1:null;
  if (chMask & 524288)
    elem.onpaste = bits & 524288?dispatchEvent_1:null;
}

function DOMImplStandard_0(){
}

_ = DOMImplStandard_0.prototype = new DOMImpl_0;
_.getClass$ = getClass_105;
_.initEventSystem = initEventSystem;
_.insertChild = insertChild_0;
_.releaseCapture = releaseCapture_0;
_.setCapture = setCapture_0;
_.sinkEvents = sinkEvents_0;
_.sinkEventsImpl = sinkEventsImpl;
_.typeId$ = 0;
var captureElem = null, dispatchCapturedEvent = null, dispatchCapturedMouseEvent = null, dispatchEvent_1 = null;
function $$init_104(){
}

function $DOMImplOpera_0(this$static){
  $DOMImplStandard_0(this$static);
  $$init_104();
  return this$static;
}

function getClass_106(){
  return Lcom_google_gwt_user_client_impl_DOMImplOpera_2_classLit;
}

function sinkEventsImpl_0(elem, bits){
  elem.__eventBits = bits;
  elem.onclick = bits & 1?dispatchEvent_1:null;
  elem.ondblclick = bits & 2?dispatchEvent_1:null;
  elem.onmousedown = bits & 4?dispatchEvent_1:null;
  elem.onmouseup = bits & 8?dispatchEvent_1:null;
  elem.onmouseover = bits & 16?dispatchEvent_1:null;
  elem.onmouseout = bits & 32?dispatchEvent_1:null;
  elem.onmousemove = bits & 64?dispatchEvent_1:null;
  elem.onkeydown = bits & 128?dispatchEvent_1:null;
  elem.onkeypress = bits & 256?dispatchEvent_1:null;
  elem.onkeyup = bits & 512?dispatchEvent_1:null;
  elem.onchange = bits & 1024?dispatchEvent_1:null;
  elem.onfocus = bits & 2048?dispatchEvent_1:null;
  elem.onblur = bits & 4096?dispatchEvent_1:null;
  elem.onlosecapture = bits & 8192?dispatchEvent_1:null;
  elem.onscroll = bits & 16384?dispatchEvent_1:null;
  elem.onload = bits & 32768?dispatchEvent_1:null;
  elem.onerror = bits & 65536?dispatchEvent_1:null;
  elem.onmousewheel = bits & 131072?dispatchEvent_1:null;
  elem.oncontextmenu = bits & 262144?dispatchEvent_1:null;
  elem.onpaste = bits & 524288?dispatchEvent_1:null;
}

function DOMImplOpera_0(){
}

_ = DOMImplOpera_0.prototype = new DOMImplStandard_0;
_.getClass$ = getClass_106;
_.sinkEventsImpl = sinkEventsImpl_0;
_.typeId$ = 0;
function $$init_105(){
}

function $WindowImpl(this$static){
  $Object(this$static);
  $$init_105();
  return this$static;
}

function getClass_107(){
  return Lcom_google_gwt_user_client_impl_WindowImpl_2_classLit;
}

function initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      onClosed();
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function WindowImpl(){
}

_ = WindowImpl.prototype = new Object_0;
_.getClass$ = getClass_107;
_.initWindowCloseHandler = initWindowCloseHandler;
_.typeId$ = 0;
function $clinit_191(){
  $clinit_191 = nullMethod;
  'gwt-debug-';
  "This UIObject's element is not set; you may be missing a call to either Composite.initWidget() or UIObject.setElement()";
  'Element may only be set once';
  $UIObject$DebugIdImpl(new UIObject$DebugIdImpl);
  'Style names cannot be empty';
  'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.';
}

function $$init_106(){
}

function $UIObject(this$static){
  $clinit_191();
  $Object(this$static);
  $$init_106();
  return this$static;
}

function $addStyleName(this$static, style){
  setStyleName_0(this$static.getStyleElement(), style, true);
}

function $getAbsoluteLeft_0(this$static){
  return getAbsoluteLeft_1($getElement(this$static));
}

function $getAbsoluteTop_0(this$static){
  return getAbsoluteTop_1($getElement(this$static));
}

function $getElement(this$static){
  return this$static.element;
}

function $getOffsetHeight_0(this$static){
  return getElementPropertyInt($getElement(this$static), 'offsetHeight');
}

function $getOffsetWidth_0(this$static){
  return getElementPropertyInt($getElement(this$static), 'offsetWidth');
}

function $removeStyleName(this$static, style){
  setStyleName_0(this$static.getStyleElement(), style, false);
}

function $replaceElement(this$static, elem){
  if (isNotNull(this$static.element)) {
    $replaceNode(this$static.element, elem);
  }
  this$static.element = elem;
}

function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $setElement(this$static, elem){
  this$static.setElement(elem);
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setPixelSize(this$static, width, height){
  if (width >= 0) {
    this$static.setWidth(width + 'px');
  }
  if (height >= 0) {
    this$static.setHeight(height + 'px');
  }
}

function $setStyleName(this$static, style){
  setStyleName(this$static.getStyleElement(), style);
}

function $sinkEvents_0(this$static, eventBitsToAdd){
  sinkEvents($getElement(this$static), eventBitsToAdd | getEventsSunk($getElement(this$static)));
}

function getClass_108(){
  return Lcom_google_gwt_user_client_ui_UIObject_2_classLit;
}

function getOffsetHeight(){
  return $getOffsetHeight_0(this);
}

function getOffsetWidth(){
  return $getOffsetWidth_0(this);
}

function getStyleElement(){
  return $getElement(this);
}

function setElement(elem){
  $setElement_0(this, elem);
}

function setHeight(height){
  setStyleAttribute($getElement(this), 'height', height);
}

function setStyleName(elem, styleName){
  $clinit_191();
  setElementProperty($cast(elem), 'className', styleName);
}

function setStyleName_0(elem, style, add){
  if (isNull(elem)) {
    throw $RuntimeException_0(new RuntimeException, 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if ($length_1(style) == 0) {
    throw $IllegalArgumentException(new IllegalArgumentException, 'Style names cannot be empty');
  }
  if (add) {
    $addClassName(elem, style);
  }
   else {
    $removeClassName(elem, style);
  }
}

function setVisible(elem, visible){
  $clinit_191();
  elem.style.display = visible?'':'none';
}

function setWidth(width){
  setStyleAttribute($getElement(this), 'width', width);
}

function UIObject(){
}

_ = UIObject.prototype = new Object_0;
_.getClass$ = getClass_108;
_.getOffsetHeight = getOffsetHeight;
_.getOffsetWidth = getOffsetWidth;
_.getStyleElement = getStyleElement;
_.setElement = setElement;
_.setHeight = setHeight;
_.setWidth = setWidth;
_.typeId$ = 159;
_.element = null;
function $clinit_192(){
  $clinit_192 = nullMethod;
  $clinit_191();
}

function $$init_107(){
}

function $Widget(this$static){
  $clinit_192();
  $UIObject(this$static);
  $$init_107();
  return this$static;
}

function $addDomHandler(this$static, handler, type){
  $sinkEvents_1(this$static, getTypeInt($getName(type)));
  return $addHandler($ensureHandlers(this$static), type, handler);
}

function $addHandler_1(this$static, handler, type){
  return $addHandler($ensureHandlers(this$static), type, handler);
}

function $ensureHandlers(this$static){
  return isNull(this$static.handlerManager)?(this$static.handlerManager = $HandlerManager(new HandlerManager, this$static)):this$static.handlerManager;
}

function $fireEvent_1(this$static, event_0){
  if (isNotNull(this$static.handlerManager)) {
    $fireEvent(this$static.handlerManager, event_0);
  }
}

function $getParent(this$static){
  return this$static.parent_0;
}

function $isOrWasAttached(this$static){
  return this$static.eventsToSink == -1;
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw $IllegalStateException_0(new IllegalStateException, "Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  setEventListener($getElement(this$static), this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  if (bitsToAdd > 0) {
    $sinkEvents_1(this$static, bitsToAdd);
  }
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch (eventGetType(event_0)) {
    case 16:
    case 32:
      related = $getRelatedTarget(event_0);
      if (isNotNull(related) && $isOrHasChild($getElement(this$static), related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, $getElement(this$static));
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw $IllegalStateException_0(new IllegalStateException, "Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      setEventListener($getElement(this$static), null);
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (isNull(this$static.parent_0)) {
    if (isInDetachList(this$static)) {
      detachNow(this$static);
    }
  }
   else if (instanceOf(this$static.parent_0, 110)) {
    dynamicCast(this$static.parent_0, 110).remove_0(this$static);
  }
   else if (isNotNull(this$static.parent_0)) {
    throw $IllegalStateException_0(new IllegalStateException, "This widget's parent does not implement HasWidgets");
  }
}

function $replaceElement_0(this$static, elem){
  if (this$static.isAttached()) {
    setEventListener($getElement(this$static), null);
  }
  $replaceElement(this$static, elem);
  if (this$static.isAttached()) {
    setEventListener($getElement(this$static), this$static);
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (isNull(parent_0)) {
    try {
      if (isNotNull(oldParent) && oldParent.isAttached()) {
        this$static.onDetach();
      }
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (isNotNull(oldParent)) {
      throw $IllegalStateException_0(new IllegalStateException, 'Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    if (parent_0.isAttached()) {
      this$static.onAttach();
    }
  }
}

function $sinkEvents_1(this$static, eventBitsToAdd){
  if ($isOrWasAttached(this$static)) {
    $sinkEvents_0(this$static, eventBitsToAdd);
  }
   else {
    this$static.eventsToSink |= eventBitsToAdd;
  }
}

function doAttachChildren(){
}

function doDetachChildren(){
}

function fireEvent_1(event_0){
  $fireEvent_1(this, event_0);
}

function getClass_109(){
  return Lcom_google_gwt_user_client_ui_Widget_2_classLit;
}

function isAttached(){
  return this.attached;
}

function onAttach(){
  $onAttach(this);
}

function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}

function onDetach(){
  $onDetach(this);
}

function onLoad(){
}

function onUnload(){
}

function Widget(){
}

_ = Widget.prototype = new UIObject;
_.doAttachChildren = doAttachChildren;
_.doDetachChildren = doDetachChildren;
_.fireEvent = fireEvent_1;
_.getClass$ = getClass_109;
_.isAttached = isAttached;
_.onAttach = onAttach;
_.onBrowserEvent = onBrowserEvent;
_.onDetach = onDetach;
_.onLoad = onLoad;
_.onUnload = onUnload;
_.typeId$ = 160;
_.attached = false;
_.eventsToSink = 0;
_.handlerManager = null;
_.parent_0 = null;
function $clinit_193(){
  $clinit_193 = nullMethod;
  $clinit_192();
}

function $$init_108(){
}

function $Panel(this$static){
  $clinit_193();
  $Widget(this$static);
  $$init_108();
  return this$static;
}

function $adopt(this$static, child){
  $setParent(child, this$static);
}

function $orphan(child){
  $setParent(child, null);
}

function doAttachChildren_0(){
  tryCommand(this, ($clinit_198() , attachCommand));
}

function doDetachChildren_0(){
  tryCommand(this, ($clinit_198() , detachCommand));
}

function getClass_110(){
  return Lcom_google_gwt_user_client_ui_Panel_2_classLit;
}

function onLoad_0(){
}

function onUnload_0(){
}

function Panel(){
}

_ = Panel.prototype = new Widget;
_.doAttachChildren = doAttachChildren_0;
_.doDetachChildren = doDetachChildren_0;
_.getClass$ = getClass_110;
_.onLoad = onLoad_0;
_.onUnload = onUnload_0;
_.typeId$ = 161;
function $clinit_194(){
  $clinit_194 = nullMethod;
  $clinit_193();
}

function $$init_109(this$static){
  this$static.children = $WidgetCollection(new WidgetCollection, this$static);
}

function $ComplexPanel(this$static){
  $clinit_194();
  $Panel(this$static);
  $$init_109(this$static);
  return this$static;
}

function $add(this$static, child, container){
  $removeFromParent(child);
  $add_2($getChildren(this$static), child);
  appendChild(container, $getElement(child));
  $adopt(this$static, child);
}

function $adjustIndex(this$static, child, beforeIndex){
  var idx;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  if (jsEquals($getParent(child), this$static)) {
    idx = $getWidgetIndex(this$static, child);
    if (idx < beforeIndex) {
      --beforeIndex;
    }
  }
  return beforeIndex;
}

function $checkIndexBoundsForInsertion(this$static, index){
  if (index < 0 || index > $getWidgetCount(this$static)) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
}

function $getChildren(this$static){
  return this$static.children;
}

function $getWidgetCount(this$static){
  return $size($getChildren(this$static));
}

function $getWidgetIndex(this$static, child){
  return $indexOf($getChildren(this$static), child);
}

function $insert(this$static, child, container, beforeIndex, domInsert){
  beforeIndex = $adjustIndex(this$static, child, beforeIndex);
  $removeFromParent(child);
  $insert_1($getChildren(this$static), child, beforeIndex);
  if (domInsert) {
    insertChild(container, $getElement(child), beforeIndex);
  }
   else {
    appendChild(container, $getElement(child));
  }
  $adopt(this$static, child);
}

function $iterator(this$static){
  return $iterator_0($getChildren(this$static));
}

function $remove_0(this$static, w){
  var elem;
  if (jsNotEquals($getParent(w), this$static)) {
    return false;
  }
  try {
    $orphan(w);
  }
   finally {
    elem = $getElement(w);
    removeChild(getParent(elem), elem);
    $remove_4($getChildren(this$static), w);
  }
  return true;
}

function getClass_111(){
  return Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit;
}

function getWidgetIndex(child){
  return $getWidgetIndex(this, child);
}

function iterator_0(){
  return $iterator(this);
}

function remove_1(w){
  return $remove_0(this, w);
}

function ComplexPanel(){
}

_ = ComplexPanel.prototype = new Panel;
_.getClass$ = getClass_111;
_.getWidgetIndex = getWidgetIndex;
_.iterator_0 = iterator_0;
_.remove_0 = remove_1;
_.typeId$ = 162;
function $clinit_195(){
  $clinit_195 = nullMethod;
  $clinit_194();
}

function $$init_110(){
}

function $AbsolutePanel(this$static){
  $clinit_195();
  $AbsolutePanel_0(this$static, createDiv());
  setStyleAttribute($getElement(this$static), 'position', 'relative');
  setStyleAttribute($getElement(this$static), 'overflow', 'hidden');
  return this$static;
}

function $AbsolutePanel_0(this$static, elem){
  $clinit_195();
  $ComplexPanel(this$static);
  $$init_110();
  this$static.setElement(elem);
  return this$static;
}

function $add_0(this$static, w){
  $add(this$static, w, $getElement(this$static));
}

function $add_1(this$static, w, left, top_0){
  var beforeIndex;
  $removeFromParent(w);
  beforeIndex = $getWidgetCount(this$static);
  this$static.setWidgetPositionImpl(w, left, top_0);
  $insert_0(this$static, w, beforeIndex);
}

function $insert_0(this$static, w, beforeIndex){
  $insert(this$static, w, $getElement(this$static), beforeIndex, true);
}

function $remove_1(this$static, w){
  var removed;
  removed = $remove_0(this$static, w);
  if (removed) {
    changeToStaticPositioning($getElement(w));
  }
  return removed;
}

function $setWidgetPositionImpl(w, left, top_0){
  var h;
  h = $getElement(w);
  if (left == -1 && top_0 == -1) {
    changeToStaticPositioning(h);
  }
   else {
    setStyleAttribute(h, 'position', 'absolute');
    setStyleAttribute(h, 'left', left + 'px');
    setStyleAttribute(h, 'top', top_0 + 'px');
  }
}

function changeToStaticPositioning(elem){
  setStyleAttribute(elem, 'left', '');
  setStyleAttribute(elem, 'top', '');
  setStyleAttribute(elem, 'position', '');
}

function getClass_112(){
  return Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit;
}

function insert(w, beforeIndex){
  $insert_0(this, w, beforeIndex);
}

function remove_2(w){
  return $remove_1(this, w);
}

function setWidgetPositionImpl(w, left, top_0){
  $setWidgetPositionImpl(w, left, top_0);
}

function AbsolutePanel(){
}

_ = AbsolutePanel.prototype = new ComplexPanel;
_.getClass$ = getClass_112;
_.insert = insert;
_.remove_0 = remove_2;
_.setWidgetPositionImpl = setWidgetPositionImpl;
_.typeId$ = 163;
function $$init_111(){
}

function $AbstractImagePrototype(this$static){
  $Object(this$static);
  $$init_111();
  return this$static;
}

function applyTo(imageElement){
  throw $UnsupportedOperationException(new UnsupportedOperationException);
}

function create_2(resource){
  return $ClippedImagePrototype(new ClippedImagePrototype, resource.getURL(), resource.getLeft(), resource.getTop(), resource.getWidth(), resource.getHeight());
}

function createElement_0(){
  throw $UnsupportedOperationException(new UnsupportedOperationException);
}

function getClass_113(){
  return Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit;
}

function AbstractImagePrototype(){
}

_ = AbstractImagePrototype.prototype = new Object_0;
_.applyTo = applyTo;
_.createElement_1 = createElement_0;
_.getClass$ = getClass_113;
_.typeId$ = 0;
function removeState(elem, stateName){
  $removeAttribute(elem, stateName);
}

function setRole(elem, roleName){
  $setAttribute(elem, 'role', roleName);
}

function setState(elem, stateName, stateValue){
  $setAttribute(elem, stateName, stateValue);
}

function $clinit_198(){
  $clinit_198 = nullMethod;
  attachCommand = $AttachDetachException$1(new AttachDetachException$1);
  detachCommand = $AttachDetachException$2(new AttachDetachException$2);
}

function $$init_112(){
}

function $AttachDetachException(this$static, causes){
  $clinit_198();
  $RuntimeException_1(this$static, 'One or more exceptions caught, see full set in AttachDetachException#getCauses', causes.size_0() == 0?null:dynamicCast(causes.toArray(initDim(_3Ljava_lang_Throwable_2_classLit, 347, 23, 0, 0)), 71)[0]);
  $$init_112();
  this$static , causes;
  return this$static;
}

function getClass_114(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit;
}

function tryCommand(hasWidgets, c){
  $clinit_198();
  var $e0, caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator_0(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), 2);
    try {
      c.execute_1(w);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 23)) {
        e = $e0;
        if (isNull(caught)) {
          caught = $HashSet(new HashSet);
        }
        caught.add(e);
      }
       else 
        throw $e0;
    }
  }
  if (isNotNull(caught)) {
    throw $AttachDetachException(new AttachDetachException, caught);
  }
}

function AttachDetachException(){
}

_ = AttachDetachException.prototype = new RuntimeException;
_.getClass$ = getClass_114;
_.typeId$ = 164;
var attachCommand, detachCommand;
function $$init_113(){
}

function $AttachDetachException$1(this$static){
  $Object(this$static);
  $$init_113();
  return this$static;
}

function execute_5(w){
  w.onAttach();
}

function getClass_115(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit;
}

function AttachDetachException$1(){
}

_ = AttachDetachException$1.prototype = new Object_0;
_.execute_1 = execute_5;
_.getClass$ = getClass_115;
_.typeId$ = 0;
function $$init_114(){
}

function $AttachDetachException$2(this$static){
  $Object(this$static);
  $$init_114();
  return this$static;
}

function execute_6(w){
  w.onDetach();
}

function getClass_116(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit;
}

function AttachDetachException$2(){
}

_ = AttachDetachException$2.prototype = new Object_0;
_.execute_1 = execute_6;
_.getClass$ = getClass_116;
_.typeId$ = 0;
function $clinit_202(){
  $clinit_202 = nullMethod;
  $clinit_193();
}

function $$init_115(){
}

function $SimplePanel(this$static){
  $clinit_202();
  $SimplePanel_0(this$static, createDiv());
  return this$static;
}

function $SimplePanel_0(this$static, elem){
  $clinit_202();
  $Panel(this$static);
  $$init_115();
  $setElement(this$static, elem);
  return this$static;
}

function $getContainerElement(this$static){
  return $getElement(this$static);
}

function $setWidget(this$static, w){
  if (jsEquals(w, this$static.widget)) {
    return;
  }
  if (isNotNull(w)) {
    $removeFromParent(w);
  }
  if (isNotNull(this$static.widget)) {
    this$static.remove_0(this$static.widget);
  }
  this$static.widget = w;
  if (isNotNull(w)) {
    appendChild(this$static.getContainerElement(), $getElement(this$static.widget));
    $adopt(this$static, w);
  }
}

function getClass_117(){
  return Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit;
}

function getContainerElement(){
  return $getContainerElement(this);
}

function iterator_1(){
  return $SimplePanel$1(new SimplePanel$1, this);
}

function remove_3(w){
  if (jsNotEquals(this.widget, w)) {
    return false;
  }
  try {
    $orphan(w);
  }
   finally {
    $removeChild(this.getContainerElement(), $getElement(w));
    this.widget = null;
  }
  return true;
}

function setWidget(w){
  $setWidget(this, w);
}

function SimplePanel(){
}

_ = SimplePanel.prototype = new Panel;
_.getClass$ = getClass_117;
_.getContainerElement = getContainerElement;
_.iterator_0 = iterator_1;
_.remove_0 = remove_3;
_.setWidget = setWidget;
_.typeId$ = 169;
_.widget = null;
function $clinit_203(){
  $clinit_203 = nullMethod;
  $clinit_202();
  impl_4 = getFocusImplForPanel();
}

function $$init_116(){
}

function $FocusPanel(this$static){
  $clinit_203();
  $SimplePanel_0(this$static, impl_4.createFocusable());
  $$init_116();
  return this$static;
}

function $addMouseMoveHandler(this$static, handler){
  return $addDomHandler(this$static, handler, getType_9());
}

function $addMouseUpHandler(this$static, handler){
  return $addDomHandler(this$static, handler, getType_11());
}

function addMouseDownHandler(handler){
  return $addDomHandler(this, handler, getType_8());
}

function addMouseMoveHandler(handler){
  return $addMouseMoveHandler(this, handler);
}

function addMouseOutHandler(handler){
  return $addDomHandler(this, handler, getType_10());
}

function addMouseUpHandler(handler){
  return $addMouseUpHandler(this, handler);
}

function getClass_118(){
  return Lcom_google_gwt_user_client_ui_FocusPanel_2_classLit;
}

function setFocus(focused){
  if (focused) {
    impl_4.focus_0($getElement(this));
  }
   else {
    impl_4.blur_0($getElement(this));
  }
}

function FocusPanel(){
}

_ = FocusPanel.prototype = new SimplePanel;
_.addMouseDownHandler = addMouseDownHandler;
_.addMouseMoveHandler = addMouseMoveHandler;
_.addMouseOutHandler = addMouseOutHandler;
_.addMouseUpHandler = addMouseUpHandler;
_.getClass$ = getClass_118;
_.setFocus = setFocus;
_.typeId$ = 177;
var impl_4;
function $clinit_208(){
  $clinit_208 = nullMethod;
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'center');
  ALIGN_LEFT = $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'left');
  ALIGN_RIGHT = $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'right');
  isClient() && $isRTL(getCurrentLocale())?ALIGN_RIGHT:ALIGN_LEFT;
}

var ALIGN_LEFT, ALIGN_RIGHT;
function $$init_117(){
}

function $HasHorizontalAlignment$HorizontalAlignmentConstant(this$static, textAlignString){
  $Object(this$static);
  $$init_117();
  this$static , textAlignString;
  return this$static;
}

function getClass_119(){
  return Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit;
}

function HasHorizontalAlignment$HorizontalAlignmentConstant(){
}

_ = HasHorizontalAlignment$HorizontalAlignmentConstant.prototype = new Object_0;
_.getClass$ = getClass_119;
_.typeId$ = 0;
function $clinit_213(){
  $clinit_213 = nullMethod;
  $clinit_192();
  $HashMap(new HashMap);
}

function $$init_118(){
}

function $Image(this$static, url, left, top_0, width, height){
  $clinit_213();
  $Widget(this$static);
  $$init_118();
  $changeState(this$static, $Image$ClippedState(new Image$ClippedState, this$static, url, left, top_0, width, height));
  $setStyleName(this$static, 'gwt-Image');
  return this$static;
}

function $changeState(this$static, newState){
  this$static.state = newState;
}

function $getWidth(this$static){
  return this$static.state.getWidth_0(this$static);
}

function addMouseDownHandler_0(handler){
  return $addDomHandler(this, handler, getType_8());
}

function addMouseMoveHandler_0(handler){
  return $addDomHandler(this, handler, getType_9());
}

function addMouseOutHandler_0(handler){
  return $addDomHandler(this, handler, getType_10());
}

function addMouseUpHandler_0(handler){
  return $addDomHandler(this, handler, getType_11());
}

function getClass_120(){
  return Lcom_google_gwt_user_client_ui_Image_2_classLit;
}

function Image_0(){
}

_ = Image_0.prototype = new Widget;
_.addMouseDownHandler = addMouseDownHandler_0;
_.addMouseMoveHandler = addMouseMoveHandler_0;
_.addMouseOutHandler = addMouseOutHandler_0;
_.addMouseUpHandler = addMouseUpHandler_0;
_.getClass$ = getClass_120;
_.typeId$ = 186;
_.state = null;
function $$init_119(){
}

function $Image$State(this$static){
  $Object(this$static);
  $$init_119();
  return this$static;
}

function getClass_121(){
  return Lcom_google_gwt_user_client_ui_Image$State_2_classLit;
}

function Image$State(){
}

_ = Image$State.prototype = new Object_0;
_.getClass$ = getClass_121;
_.typeId$ = 0;
function $clinit_215(){
  $clinit_215 = nullMethod;
  impl_5 = $ClippedImageImpl(new ClippedImageImpl);
}

function $$init_120(this$static){
  this$static , 0;
  this$static , 0;
  this$static , 0;
  this$static , null;
}

function $Image$ClippedState(this$static, image, url, left, top_0, width, height){
  $clinit_215();
  $Image$State(this$static);
  $$init_120(this$static);
  this$static , left;
  this$static , top_0;
  this$static.width = width;
  this$static , height;
  this$static , url;
  $replaceElement_0(image, impl_5.createStructure(url, left, top_0, width, height));
  $sinkEvents_1(image, 163965);
  return this$static;
}

function getClass_122(){
  return Lcom_google_gwt_user_client_ui_Image$ClippedState_2_classLit;
}

function getWidth_0(image){
  return this.width;
}

function Image$ClippedState(){
}

_ = Image$ClippedState.prototype = new Image$State;
_.getClass$ = getClass_122;
_.getWidth_0 = getWidth_0;
_.typeId$ = 0;
_.width = 0;
var impl_5;
function $clinit_218(){
  $clinit_218 = nullMethod;
  $clinit_192();
}

function $$init_121(){
}

function $Label(this$static){
  $clinit_218();
  $Widget(this$static);
  $$init_121();
  $setElement(this$static, $createDivElement(get_0()));
  $setStyleName(this$static, 'gwt-Label');
  return this$static;
}

function $Label_0(this$static, text){
  $clinit_218();
  $Label(this$static);
  $setText(this$static, text);
  return this$static;
}

function $setText(this$static, text){
  $setInnerText($getElement(this$static), text);
}

function addMouseDownHandler_1(handler){
  return $addDomHandler(this, handler, getType_8());
}

function addMouseMoveHandler_1(handler){
  return $addDomHandler(this, handler, getType_9());
}

function addMouseOutHandler_1(handler){
  return $addDomHandler(this, handler, getType_10());
}

function addMouseUpHandler_1(handler){
  return $addDomHandler(this, handler, getType_11());
}

function getClass_123(){
  return Lcom_google_gwt_user_client_ui_Label_2_classLit;
}

function Label(){
}

_ = Label.prototype = new Widget;
_.addMouseDownHandler = addMouseDownHandler_1;
_.addMouseMoveHandler = addMouseMoveHandler_1;
_.addMouseOutHandler = addMouseOutHandler_1;
_.addMouseUpHandler = addMouseUpHandler_1;
_.getClass$ = getClass_123;
_.typeId$ = 182;
function $clinit_219(){
  $clinit_219 = nullMethod;
  $clinit_195();
  maybeDetachCommand = $RootPanel$1(new RootPanel$1);
  rootPanels = $HashMap(new HashMap);
  widgetsToDetach = $HashSet(new HashSet);
}

function $$init_122(){
}

function $RootPanel(this$static, elem){
  $clinit_219();
  $AbsolutePanel_0(this$static, $cast(elem));
  $$init_122();
  this$static.onAttach();
  return this$static;
}

function detachNow(widget){
  $clinit_219();
  try {
    widget.onDetach();
  }
   finally {
    widgetsToDetach.remove_1(widget);
  }
}

function detachOnWindowClose(widget){
  widgetsToDetach.add(widget);
}

function detachWidgets(){
  $clinit_219();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    widgetsToDetach.clear();
    rootPanels.clear();
  }
}

function get_1(){
  $clinit_219();
  return get_2(null);
}

function get_2(id){
  $clinit_219();
  var elem, rp;
  rp = dynamicCast(rootPanels.get(id), 102);
  elem = null;
  if (jsNotEquals(id, null)) {
    if (isNull(elem = $getElementById(get_0(), id))) {
      return null;
    }
  }
  if (isNotNull(rp)) {
    if (isNull(elem) || jsEquals($getElement(rp), elem)) {
      return rp;
    }
  }
  if (rootPanels.size_0() == 0) {
    hookWindowClosing_0();
    if ($isRTL(getCurrentLocale())) {
      setDirectionOnElement(getRootElement(), ($clinit_148() , RTL));
    }
  }
  if (isNull(elem)) {
    rp = $RootPanel$DefaultRootPanel(new RootPanel$DefaultRootPanel);
  }
   else {
    rp = $RootPanel(new RootPanel, elem);
  }
  rootPanels.put(id, rp);
  detachOnWindowClose(rp);
  return rp;
}

function getBodyElement(){
  $clinit_219();
  return $doc.body;
}

function getClass_124(){
  return Lcom_google_gwt_user_client_ui_RootPanel_2_classLit;
}

function getRootElement(){
  return $doc;
}

function hookWindowClosing_0(){
  addCloseHandler($RootPanel$2(new RootPanel$2));
}

function isInDetachList(widget){
  $clinit_219();
  return widgetsToDetach.contains_0(widget);
}

function RootPanel(){
}

_ = RootPanel.prototype = new AbsolutePanel;
_.getClass$ = getClass_124;
_.typeId$ = 219;
var maybeDetachCommand, rootPanels, widgetsToDetach;
function $$init_123(){
}

function $RootPanel$1(this$static){
  $Object(this$static);
  $$init_123();
  return this$static;
}

function execute_7(w){
  if (w.isAttached()) {
    w.onDetach();
  }
}

function getClass_125(){
  return Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit;
}

function RootPanel$1(){
}

_ = RootPanel$1.prototype = new Object_0;
_.execute_1 = execute_7;
_.getClass$ = getClass_125;
_.typeId$ = 0;
function $$init_124(){
}

function $RootPanel$2(this$static){
  $Object(this$static);
  $$init_124();
  return this$static;
}

function getClass_126(){
  return Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit;
}

function onClose_0(closeEvent){
  detachWidgets();
}

function RootPanel$2(){
}

_ = RootPanel$2.prototype = new Object_0;
_.getClass$ = getClass_126;
_.onClose = onClose_0;
_.typeId$ = 220;
function $clinit_222(){
  $clinit_222 = nullMethod;
  $clinit_219();
}

function $$init_125(){
}

function $RootPanel$DefaultRootPanel(this$static){
  $clinit_222();
  $RootPanel(this$static, getBodyElement());
  $$init_125();
  return this$static;
}

function getClass_127(){
  return Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit;
}

function setWidgetPositionImpl_0(w, left, top_0){
  left -= $getBodyOffsetLeft(get_0());
  top_0 -= $getBodyOffsetTop(get_0());
  $setWidgetPositionImpl(w, left, top_0);
}

function RootPanel$DefaultRootPanel(){
}

_ = RootPanel$DefaultRootPanel.prototype = new RootPanel;
_.getClass$ = getClass_127;
_.setWidgetPositionImpl = setWidgetPositionImpl_0;
_.typeId$ = 221;
function $$init_126(this$static){
  this$static.hasElement = isNotNull(this$static.this$0.widget);
}

function $SimplePanel$1(this$static, this$0){
  this$static.this$0 = this$0;
  $Object(this$static);
  $$init_126(this$static);
  return this$static;
}

function $next_0(this$static){
  if (!this$static.hasElement || isNull(this$static.this$0.widget)) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$0.widget;
}

function getClass_128(){
  return Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit;
}

function hasNext_0(){
  return this.hasElement;
}

function next_1(){
  return $next_0(this);
}

function remove_4(){
  if (isNotNull(this.returned)) {
    this.this$0.remove_0(this.returned);
  }
}

function SimplePanel$1(){
}

_ = SimplePanel$1.prototype = new Object_0;
_.getClass$ = getClass_128;
_.hasNext = hasNext_0;
_.next_0 = next_1;
_.remove = remove_4;
_.typeId$ = 0;
_.returned = null;
_.this$0 = null;
function $clinit_231(){
  $clinit_231 = nullMethod;
  $clinit_192();
  63233;
  63234;
  63235;
  63232;
}

function $$init_127(this$static){
  this$static.childWidgets = $HashMap(new HashMap);
}

function $Tree(this$static){
  $clinit_231();
  $Widget(this$static);
  $$init_127(this$static);
  $init(this$static, $Tree$ImageAdapter(new Tree$ImageAdapter), false);
  return this$static;
}

function $addItem(this$static, widget){
  return $addItem_0(this$static.root, widget);
}

function $adopt_0(this$static, widget, treeItem){
  this$static.childWidgets.put(widget, treeItem);
  $setParent(widget, this$static);
}

function $collectElementChain(this$static, chain, hRoot, hElem){
  if (isNull(hElem) || jsEquals(hElem, hRoot)) {
    return;
  }
  $collectElementChain(this$static, chain, hRoot, getParent(hElem));
  $add_3(chain, hElem);
}

function $elementClicked(this$static, hElem){
  var chain, item;
  chain = $ArrayList(new ArrayList);
  $collectElementChain(this$static, chain, $getElement(this$static), hElem);
  item = $findItemByChain(this$static, chain, 0, this$static.root);
  if (isNotNull(item) && jsNotEquals(item, this$static.root)) {
    if ($getChildCount(item) > 0 && isOrHasChild_0($getImageElement(item), hElem)) {
      $setState_0(item, !$getState(item), true);
      return true;
    }
     else if (isOrHasChild_0($getElement(item), hElem)) {
      $onSelection(this$static, item, true, !shouldTreeDelegateFocusToElement(hElem));
      return true;
    }
  }
  return false;
}

function $findDeepestOpenChild(this$static, item){
  if (!$getState(item)) {
    return item;
  }
  return $findDeepestOpenChild(this$static, $getChild(item, $getChildCount(item) - 1));
}

function $findItemByChain(this$static, chain, idx, root){
  var child, hCurElem, i, n, retItem;
  if (idx == $size_1(chain)) {
    return root;
  }
  hCurElem = dynamicCastJso($get_3(chain, idx));
  for (i = 0 , n = $getChildCount(root); i < n; ++i) {
    child = $getChild(root, i);
    if (jsEquals($getElement(child), hCurElem)) {
      retItem = $findItemByChain(this$static, chain, idx + 1, $getChild(root, i));
      if (isNull(retItem)) {
        return child;
      }
      return retItem;
    }
  }
  return $findItemByChain(this$static, chain, idx + 1, root);
}

function $fireStateChanged(this$static, item, open_0){
  if (open_0) {
    fire_2(this$static, item);
  }
   else {
    fire_0(this$static, item);
  }
}

function $getSelectedItem(this$static){
  return this$static.curSelection;
}

function $getTopClosedParent(this$static, item){
  var parent_0, topClosedParent;
  topClosedParent = null;
  parent_0 = $getParentItem(item);
  while (isNotNull(parent_0) && jsNotEquals(parent_0, this$static.root)) {
    if (!$getState(parent_0)) {
      topClosedParent = parent_0;
    }
    parent_0 = $getParentItem(parent_0);
  }
  return topClosedParent;
}

function $init(this$static, images, useLeafImages){
  $setImages(this$static, images, useLeafImages);
  this$static.setElement(createDiv());
  setStyleAttribute($getElement(this$static), 'position', 'relative');
  setStyleAttribute($getElement(this$static), 'zoom', '1');
  this$static.focusable = ($clinit_203() , impl_4).createFocusable();
  setStyleAttribute(this$static.focusable, 'fontSize', '0');
  setStyleAttribute(this$static.focusable, 'position', 'absolute');
  setStyleAttribute(this$static.focusable, 'outline', '0px');
  setElementAttribute(this$static.focusable, 'hideFocus', 'true');
  setIntStyleAttribute(this$static.focusable, 'zIndex', -1);
  appendChild($getElement(this$static), this$static.focusable);
  $sinkEvents_1(this$static, 901);
  sinkEvents(this$static.focusable, 6144);
  this$static.root = $Tree$1(new Tree$1, this$static);
  $initChildren(this$static.root);
  $setTree(this$static.root, this$static);
  $setStyleName(this$static, 'gwt-Tree');
  setRole($getElement(this$static), 'tree');
  setRole(this$static.focusable, 'treeitem');
}

function $isAnimationEnabled(this$static){
  return this$static.isAnimationEnabled;
}

function $isKeyboardNavigationEnabled(){
  return true;
}

function $keyboardNavigation(this$static, event_0){
  var code;
  if ($isKeyboardNavigationEnabled()) {
    code = eventGetKeyCode(event_0);
    switch (standardizeKeycode(code)) {
      case 38:
        {
          $moveSelectionUp(this$static, this$static.curSelection);
          break;
        }

      case 40:
        {
          $moveSelectionDown(this$static, this$static.curSelection, true);
          break;
        }

      case 37:
        {
          $maybeCollapseTreeItem(this$static);
          break;
        }

      case 39:
        {
          $maybeExpandTreeItem(this$static);
          break;
        }

      default:{
          return;
        }

    }
  }
}

function $maybeCollapseTreeItem(this$static){
  var parent_0, topClosedParent;
  topClosedParent = $getTopClosedParent(this$static, this$static.curSelection);
  if (isNotNull(topClosedParent)) {
    $setSelectedItem(this$static, topClosedParent);
  }
   else if ($getState(this$static.curSelection)) {
    $setState(this$static.curSelection, false);
  }
   else {
    parent_0 = $getParentItem(this$static.curSelection);
    if (isNotNull(parent_0)) {
      $setSelectedItem(this$static, parent_0);
    }
  }
}

function $maybeExpandTreeItem(this$static){
  var topClosedParent;
  topClosedParent = $getTopClosedParent(this$static, this$static.curSelection);
  if (isNotNull(topClosedParent)) {
    $setSelectedItem(this$static, topClosedParent);
  }
   else if ($getState(this$static.curSelection)) {
    if ($getChildCount(this$static.curSelection) > 0) {
      $setSelectedItem(this$static, $getChild(this$static.curSelection, 0));
    }
  }
   else {
    $setState(this$static.curSelection, true);
  }
}

function $maybeUpdateSelection(this$static, itemThatChangedState, isItemOpening){
  var tempItem;
  if (!isItemOpening) {
    tempItem = this$static.curSelection;
    while (isNotNull(tempItem)) {
      if (jsEquals(tempItem, itemThatChangedState)) {
        $setSelectedItem(this$static, itemThatChangedState);
        return;
      }
      tempItem = $getParentItem(tempItem);
    }
  }
}

function $moveFocus(this$static){
  var containerLeft, containerTop, focusableWidget, height, left, selectedElem, top_0, width;
  focusableWidget = $getFocusable(this$static.curSelection);
  if (isNotNull(focusableWidget)) {
    focusableWidget.setFocus(true);
    scrollIntoView_1($getElement(dynamicCast(focusableWidget, 2)));
  }
   else {
    selectedElem = $getContentElem(this$static.curSelection);
    containerLeft = $getAbsoluteLeft_0(this$static);
    containerTop = $getAbsoluteTop_0(this$static);
    left = getAbsoluteLeft_1(selectedElem) - containerLeft;
    top_0 = getAbsoluteTop_1(selectedElem) - containerTop;
    width = getElementPropertyInt(selectedElem, 'offsetWidth');
    height = getElementPropertyInt(selectedElem, 'offsetHeight');
    if (width == 0 || height == 0) {
      setIntStyleAttribute(this$static.focusable, 'left', 0);
      setIntStyleAttribute(this$static.focusable, 'top', 0);
      return;
    }
    setStyleAttribute(this$static.focusable, 'left', left + 'px');
    setStyleAttribute(this$static.focusable, 'top', top_0 + 'px');
    setStyleAttribute(this$static.focusable, 'width', width + 'px');
    setStyleAttribute(this$static.focusable, 'height', height + 'px');
    scrollIntoView_1(this$static.focusable);
    $updateAriaAttributes(this$static);
    $setFocus(this$static, true);
  }
}

function $moveSelectionDown(this$static, sel, dig){
  var idx, parent_0, topClosedParent;
  if (jsEquals(sel, this$static.root)) {
    return;
  }
  topClosedParent = $getTopClosedParent(this$static, sel);
  if (isNotNull(topClosedParent)) {
    $moveSelectionDown(this$static, topClosedParent, false);
    return;
  }
  parent_0 = $getParentItem(sel);
  if (isNull(parent_0)) {
    parent_0 = this$static.root;
  }
  idx = $getChildIndex(parent_0, sel);
  if (!dig || !$getState(sel)) {
    if (idx < $getChildCount(parent_0) - 1) {
      $onSelection(this$static, $getChild(parent_0, idx + 1), true, true);
    }
     else {
      $moveSelectionDown(this$static, parent_0, false);
    }
  }
   else if ($getChildCount(sel) > 0) {
    $onSelection(this$static, $getChild(sel, 0), true, true);
  }
}

function $moveSelectionUp(this$static, sel){
  var idx, parent_0, sibling, topClosedParent;
  topClosedParent = $getTopClosedParent(this$static, sel);
  if (isNotNull(topClosedParent)) {
    $onSelection(this$static, topClosedParent, true, true);
    return;
  }
  parent_0 = $getParentItem(sel);
  if (isNull(parent_0)) {
    parent_0 = this$static.root;
  }
  idx = $getChildIndex(parent_0, sel);
  if (idx > 0) {
    sibling = $getChild(parent_0, idx - 1);
    $onSelection(this$static, $findDeepestOpenChild(this$static, sibling), true, true);
  }
   else {
    $onSelection(this$static, parent_0, true, true);
  }
}

function $onSelection(this$static, item, fireEvents, moveFocus){
  if (jsEquals(item, this$static.root)) {
    return;
  }
  if (isNotNull(this$static.curSelection)) {
    $setSelected(this$static.curSelection, false);
  }
  this$static.curSelection = item;
  if (isNotNull(this$static.curSelection)) {
    if (moveFocus) {
      $moveFocus(this$static);
    }
    $setSelected(this$static.curSelection, true);
    if (fireEvents) {
      fire_3(this$static, this$static.curSelection);
    }
  }
}

function $orphan_0(this$static, widget){
  try {
    $setParent(widget, null);
  }
   finally {
    this$static.childWidgets.remove_2(widget);
  }
}

function $removeItem(this$static, item){
  this$static.root.removeItem(item);
}

function $setFocus(this$static, focus_0){
  if (focus_0) {
    ($clinit_203() , impl_4).focus_0(this$static.focusable);
  }
   else {
    ($clinit_203() , impl_4).blur_0(this$static.focusable);
  }
}

function $setImages(this$static, images, useLeafImages){
  var image, size;
  this$static.images = images;
  this$static.useLeafImages = useLeafImages;
  if (!useLeafImages) {
    image = $treeLeaf(images).createImage();
    setStyleAttribute($getElement(image), 'visibility', 'hidden');
    $add_0(get_1(), image);
    size = $getWidth(image) + 7;
    $removeFromParent(image);
    this$static.indentValue = size + 'px';
  }
}

function $setSelectedItem(this$static, item){
  $setSelectedItem_0(this$static, item, true);
}

function $setSelectedItem_0(this$static, item, fireEvents){
  if (isNull(item)) {
    if (isNull(this$static.curSelection)) {
      return;
    }
    $setSelected(this$static.curSelection, false);
    this$static.curSelection = null;
    return;
  }
  $onSelection(this$static, item, fireEvents, true);
}

function $showClosedImage(this$static, treeItem){
  $showImage(treeItem, $treeClosed(this$static.images));
}

function $showImage(treeItem, proto){
  var child, holder;
  holder = $getImageHolderElement(treeItem);
  child = getFirstChild(holder);
  if (isNull(child)) {
    appendChild(holder, $cast(proto.createElement_1()));
  }
   else {
    proto.applyTo($cast(child));
  }
}

function $showLeafImage(this$static, treeItem){
  if (this$static.useLeafImages || $isFullNode(treeItem)) {
    $showImage(treeItem, $treeLeaf(this$static.images));
  }
   else if ($isRTL(getCurrentLocale())) {
    setStyleAttribute($getElement(treeItem), 'paddingRight', this$static.indentValue);
  }
   else {
    setStyleAttribute($getElement(treeItem), 'paddingLeft', this$static.indentValue);
  }
}

function $showOpenImage(this$static, treeItem){
  $showImage(treeItem, $treeOpen(this$static.images));
}

function $updateAriaAttributes(this$static){
  var curSelectionContentElem, curSelectionIndex, curSelectionLevel, curSelectionParent, tempItem;
  curSelectionContentElem = $getContentElem(this$static.curSelection);
  curSelectionLevel = -1;
  tempItem = this$static.curSelection;
  while (isNotNull(tempItem)) {
    tempItem = $getParentItem(tempItem);
    ++curSelectionLevel;
  }
  setState(curSelectionContentElem, 'aria-level', valueOf(curSelectionLevel + 1));
  curSelectionParent = $getParentItem(this$static.curSelection);
  if (isNull(curSelectionParent)) {
    curSelectionParent = this$static.root;
  }
  setState(curSelectionContentElem, 'aria-setsize', valueOf($getChildCount(curSelectionParent)));
  curSelectionIndex = $getChildIndex(curSelectionParent, this$static.curSelection);
  setState(curSelectionContentElem, 'aria-posinset', valueOf(curSelectionIndex + 1));
  if ($getChildCount(this$static.curSelection) == 0) {
    removeState(curSelectionContentElem, 'aria-expanded');
  }
   else {
    if ($getState(this$static.curSelection)) {
      setState(curSelectionContentElem, 'aria-expanded', 'true');
    }
     else {
      setState(curSelectionContentElem, 'aria-expanded', 'false');
    }
  }
  setState(curSelectionContentElem, 'aria-selected', 'true');
  setState(this$static.focusable, 'aria-activedescendant', getElementAttribute(curSelectionContentElem, 'id'));
}

function addMouseDownHandler_2(handler){
  return $addHandler_1(this, handler, getType_8());
}

function addMouseMoveHandler_2(handler){
  return $addDomHandler(this, handler, getType_9());
}

function addMouseOutHandler_2(handler){
  return $addDomHandler(this, handler, getType_10());
}

function addMouseUpHandler_2(handler){
  return $addDomHandler(this, handler, getType_11());
}

function doAttachChildren_1(){
  try {
    tryCommand(this, ($clinit_198() , attachCommand));
  }
   finally {
    setEventListener(this.focusable, this);
  }
}

function doDetachChildren_1(){
  try {
    tryCommand(this, ($clinit_198() , detachCommand));
  }
   finally {
    setEventListener(this.focusable, null);
  }
}

function getClass_129(){
  return Lcom_google_gwt_user_client_ui_Tree_2_classLit;
}

function isArrowKey(code){
  switch (code) {
    case 63233:
    case 63235:
    case 63232:
    case 63234:
    case 40:
    case 39:
    case 38:
    case 37:
      return true;
    default:return false;
  }
}

function iterator_2(){
  var widgets;
  widgets = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 331, 2, this.childWidgets.size_0(), 0);
  this.childWidgets.keySet().toArray(widgets);
  return createWidgetIterator(this, widgets);
}

function onBrowserEvent_0(event_0){
  var chain, e, eventType, item;
  eventType = eventGetType(event_0);
  switch (eventType) {
    case 128:
      {
        if (isNull(this.curSelection)) {
          if ($getChildCount(this.root) > 0) {
            $onSelection(this, $getChild(this.root, 0), true, true);
          }
          $onBrowserEvent(this, event_0);
          return;
        }
      }

    case 256:
    case 512:
      if (eventGetAltKey(event_0) || eventGetMetaKey(event_0)) {
        $onBrowserEvent(this, event_0);
        return;
      }

  }
  switch (eventType) {
    case 1:
      {
        e = eventGetTarget_0(event_0);
        if (shouldTreeDelegateFocusToElement(e)) {
        }
         else if (isNotNull(this.curSelection)) {
          $setFocus(this, true);
        }
        break;
      }

    case 4:
      {
        if (jsEquals(eventGetCurrentTarget_0(event_0), $getElement(this)) && $getButton(event_0) == 1) {
          $elementClicked(this, eventGetTarget_0(event_0));
        }
        break;
      }

    case 128:
      {
        $keyboardNavigation(this, event_0);
        this.lastWasKeyDown = true;
        break;
      }

    case 256:
      {
        if (!this.lastWasKeyDown) {
          $keyboardNavigation(this, event_0);
        }
        this.lastWasKeyDown = false;
        break;
      }

    case 512:
      {
        if (eventGetKeyCode(event_0) == 9) {
          chain = $ArrayList(new ArrayList);
          $collectElementChain(this, chain, $getElement(this), eventGetTarget_0(event_0));
          item = $findItemByChain(this, chain, 0, this.root);
          if (jsNotEquals(item, $getSelectedItem(this))) {
            $setSelectedItem_0(this, item, true);
          }
        }
        this.lastWasKeyDown = false;
        break;
      }

  }
  switch (eventType) {
    case 128:
    case 512:
      {
        if (isArrowKey(eventGetKeyCode(event_0))) {
          eventCancelBubble(event_0, true);
          eventPreventDefault_0(event_0);
          return;
        }
      }

  }
  $onBrowserEvent(this, event_0);
}

function onLoad_1(){
  $updateStateRecursive(this.root);
}

function remove_5(w){
  var item;
  item = dynamicCast(this.childWidgets.get(w), 97);
  if (isNull(item)) {
    return false;
  }
  $setWidget_0(item, null);
  return true;
}

function setFocus_0(focus_0){
  $setFocus(this, focus_0);
}

function shouldTreeDelegateFocusToElement(elem){
  $clinit_231();
  var name_0 = elem.nodeName;
  return name_0 == 'SELECT' || (name_0 == 'INPUT' || (name_0 == 'TEXTAREA' || (name_0 == 'OPTION' || (name_0 == 'BUTTON' || name_0 == 'LABEL'))));
}

function standardizeKeycode(code){
  switch (code) {
    case 63233:
      code = 40;
      break;
    case 63235:
      code = 39;
      break;
    case 63232:
      code = 38;
      break;
    case 63234:
      code = 37;
  }
  if ($isRTL(getCurrentLocale())) {
    if (code == 39) {
      code = 37;
    }
     else if (code == 37) {
      code = 39;
    }
  }
  return code;
}

function Tree(){
}

_ = Tree.prototype = new Widget;
_.addMouseDownHandler = addMouseDownHandler_2;
_.addMouseMoveHandler = addMouseMoveHandler_2;
_.addMouseOutHandler = addMouseOutHandler_2;
_.addMouseUpHandler = addMouseUpHandler_2;
_.doAttachChildren = doAttachChildren_1;
_.doDetachChildren = doDetachChildren_1;
_.getClass$ = getClass_129;
_.iterator_0 = iterator_2;
_.onBrowserEvent = onBrowserEvent_0;
_.onLoad = onLoad_1;
_.remove_0 = remove_5;
_.setFocus = setFocus_0;
_.typeId$ = 235;
_.curSelection = null;
_.focusable = null;
_.images = null;
_.indentValue = null;
_.isAnimationEnabled = false;
_.lastWasKeyDown = false;
_.root = null;
_.useLeafImages = false;
function $clinit_232(){
  $clinit_232 = nullMethod;
  $clinit_191();
  7;
  200;
  75;
  itemAnimation = $TreeItem$TreeItemAnimation(new TreeItem$TreeItemAnimation);
  impl_6 = $TreeItem$TreeItemImpl(new TreeItem$TreeItemImpl);
}

function $$init_128(){
}

function $TreeItem(this$static){
  var elem;
  $clinit_232();
  $UIObject(this$static);
  $$init_128();
  elem = clone_0(BASE_BARE_ELEM, true);
  this$static.setElement(elem);
  this$static.contentElem = getFirstChild(elem);
  setElementAttribute(this$static.contentElem, 'id', createUniqueId());
  return this$static;
}

function $TreeItem_0(this$static, widget){
  $clinit_232();
  $TreeItem(this$static);
  $setWidget_0(this$static, widget);
  return this$static;
}

function $addItem_0(this$static, widget){
  var ret;
  ret = $TreeItem_0(new TreeItem, widget);
  this$static.addItem(ret);
  return ret;
}

function $convertToFullNode(this$static){
  impl_6.convertToFullNode(this$static);
}

function $getChild(this$static, index){
  if (index < 0 || index >= $getChildCount(this$static)) {
    return null;
  }
  return dynamicCast($get_3(this$static.children, index), 97);
}

function $getChildCount(this$static){
  if (isNull(this$static.children)) {
    return 0;
  }
  return $size_1(this$static.children);
}

function $getChildIndex(this$static, child){
  if (isNull(this$static.children)) {
    return -1;
  }
  return $indexOf_2(this$static.children, child);
}

function $getChildren_0(this$static){
  return this$static.children;
}

function $getContentElem(this$static){
  return this$static.contentElem;
}

function $getFocusable(this$static){
  var focus_0, w;
  focus_0 = $getFocusableWidget(this$static);
  if (isNull(focus_0)) {
    w = $getWidget(this$static);
    if (instanceOf(w, 108)) {
      focus_0 = dynamicCast(w, 108);
    }
  }
  return focus_0;
}

function $getFocusableWidget(this$static){
  var w;
  w = $getWidget(this$static);
  if (instanceOf(w, 109)) {
    return dynamicCast(w, 109);
  }
   else {
    return null;
  }
}

function $getImageElement(this$static){
  return getFirstChild($getImageHolderElement(this$static));
}

function $getImageHolderElement(this$static){
  if (!$isFullNode(this$static)) {
    $convertToFullNode(this$static);
  }
  return this$static.imageHolder;
}

function $getParentItem(this$static){
  return this$static.parent_0;
}

function $getState(this$static){
  return this$static.open_0;
}

function $getTree(this$static){
  return this$static.tree;
}

function $getWidget(this$static){
  return this$static.widget;
}

function $initChildren(this$static){
  $convertToFullNode(this$static);
  this$static.childSpanElem = createDiv();
  appendChild($getElement(this$static), this$static.childSpanElem);
  setStyleAttribute(this$static.childSpanElem, 'whiteSpace', 'nowrap');
  this$static.children = $ArrayList(new ArrayList);
}

function $isFullNode(this$static){
  return isNotNull(this$static.imageHolder);
}

function $remove_2(this$static){
  if (isNotNull(this$static.parent_0)) {
    this$static.parent_0.removeItem(this$static);
  }
   else if (isNotNull(this$static.tree)) {
    $removeItem(this$static.tree, this$static);
  }
}

function $setParentItem(this$static, parent_0){
  this$static.parent_0 = parent_0;
}

function $setSelected(this$static, selected){
  if (this$static.selected == selected) {
    return;
  }
  this$static.selected = selected;
  setStyleName_0($getContentElem(this$static), 'gwt-TreeItem-selected', selected);
}

function $setState(this$static, open_0){
  $setState_0(this$static, open_0, true);
}

function $setState_0(this$static, open_0, fireEvents){
  if (open_0 && $getChildCount(this$static) == 0) {
    return;
  }
  if (this$static.open_0 != open_0) {
    this$static.open_0 = open_0;
    $updateState(this$static, true, true);
    if (fireEvents && isNotNull(this$static.tree)) {
      $fireStateChanged(this$static.tree, this$static, open_0);
    }
  }
}

function $setTree(this$static, newTree){
  var i, n;
  if (jsEquals(this$static.tree, newTree)) {
    return;
  }
  if (isNotNull(this$static.tree)) {
    if (jsEquals($getSelectedItem(this$static.tree), this$static)) {
      $setSelectedItem(this$static.tree, null);
    }
    if (isNotNull(this$static.widget)) {
      $orphan_0(this$static.tree, this$static.widget);
    }
  }
  this$static.tree = newTree;
  for (i = 0 , n = $getChildCount(this$static); i < n; ++i) {
    $setTree(dynamicCast($get_3(this$static.children, i), 97), newTree);
  }
  $updateState(this$static, false, true);
  if (isNotNull(newTree)) {
    if (isNotNull(this$static.widget)) {
      $adopt_0(newTree, this$static.widget, this$static);
    }
  }
}

function $setWidget_0(this$static, newWidget){
  if (isNotNull(newWidget)) {
    $removeFromParent(newWidget);
  }
  if (isNotNull(this$static.widget)) {
    try {
      if (isNotNull(this$static.tree)) {
        $orphan_0(this$static.tree, this$static.widget);
      }
    }
     finally {
      $removeChild(this$static.contentElem, $getElement(this$static.widget));
      this$static.widget = null;
    }
  }
  setInnerHTML(this$static.contentElem, '');
  this$static.widget = newWidget;
  if (isNotNull(newWidget)) {
    appendChild(this$static.contentElem, $getElement(newWidget));
    if (isNotNull(this$static.tree)) {
      $adopt_0(this$static.tree, this$static.widget, this$static);
    }
    if (shouldTreeDelegateFocusToElement($getElement(this$static.widget))) {
      setElementAttribute($getElement(this$static.widget), 'tabIndex', '-1');
    }
  }
}

function $updateState(this$static, animate, updateTreeSelection){
  if (isNull(this$static.tree) || !this$static.tree.isAttached()) {
    return;
  }
  if ($getChildCount(this$static) == 0) {
    if (isNotNull(this$static.childSpanElem)) {
      setVisible(this$static.childSpanElem, false);
    }
    $showLeafImage(this$static.tree, this$static);
    return;
  }
  if (animate && isNotNull(this$static.tree) && this$static.tree.isAttached()) {
    $setItemState(itemAnimation, this$static, $isAnimationEnabled(this$static.tree));
  }
   else {
    $setItemState(itemAnimation, this$static, false);
  }
  if (this$static.open_0) {
    $showOpenImage(this$static.tree, this$static);
  }
   else {
    $showClosedImage(this$static.tree, this$static);
  }
  if (updateTreeSelection) {
    $maybeUpdateSelection(this$static.tree, this$static, this$static.open_0);
  }
}

function $updateStateRecursive(this$static){
  $updateStateRecursiveHelper(this$static);
  $maybeUpdateSelection(this$static.tree, this$static, this$static.open_0);
}

function $updateStateRecursiveHelper(this$static){
  var i, n;
  $updateState(this$static, false, false);
  for (i = 0 , n = $getChildCount(this$static); i < n; ++i) {
    $updateStateRecursiveHelper(dynamicCast($get_3(this$static.children, i), 97));
  }
}

function addItem(item){
  if (isNotNull($getParentItem(item)) || isNotNull($getTree(item))) {
    $remove_2(item);
  }
  if (isNull(this.children)) {
    $initChildren(this);
  }
  $setParentItem(item, this);
  $add_3(this.children, item);
  if ($isRTL(getCurrentLocale())) {
    setStyleAttribute($getElement(item), 'marginRight', '16px');
  }
   else {
    setStyleAttribute($getElement(item), 'marginLeft', '16px');
  }
  appendChild(this.childSpanElem, $getElement(item));
  $setTree(item, this.tree);
  if ($size_1(this.children) == 1) {
    $updateState(this, false, false);
  }
}

function getClass_130(){
  return Lcom_google_gwt_user_client_ui_TreeItem_2_classLit;
}

function removeItem(item){
  if (isNull(this.children) || !$contains_0(this.children, item)) {
    return;
  }
  $setTree(item, null);
  removeChild(this.childSpanElem, $getElement(item));
  $setParentItem(item, null);
  $remove_7(this.children, item);
  if ($size_1(this.children) == 0) {
    $updateState(this, false, false);
  }
}

function TreeItem(){
}

_ = TreeItem.prototype = new UIObject;
_.addItem = addItem;
_.getClass$ = getClass_130;
_.removeItem = removeItem;
_.typeId$ = 236;
_.childSpanElem = null;
_.children = null;
_.contentElem = null;
_.imageHolder = null;
_.open_0 = false;
_.parent_0 = null;
_.selected = false;
_.tree = null;
_.widget = null;
var BASE_BARE_ELEM = null, BASE_INTERNAL_ELEM = null, impl_6, itemAnimation;
function $clinit_233(){
  $clinit_233 = nullMethod;
  $clinit_232();
}

function $$init_129(){
}

function $Tree$1(this$static, this$0){
  $clinit_233();
  this$static.this$0 = this$0;
  $TreeItem(this$static);
  $$init_129();
  return this$static;
}

function addItem_0(item){
  if (isNotNull($getParentItem(item)) || isNotNull($getTree(item))) {
    $remove_2(item);
  }
  appendChild($getElement(this.this$0), $getElement(item));
  $setTree(item, $getTree(this));
  $setParentItem(item, null);
  $add_3($getChildren_0(this), item);
  if ($isRTL(getCurrentLocale())) {
    setIntStyleAttribute($getElement(item), 'marginRight', 0);
  }
   else {
    setIntStyleAttribute($getElement(item), 'marginLeft', 0);
  }
}

function getClass_131(){
  return Lcom_google_gwt_user_client_ui_Tree$1_2_classLit;
}

function removeItem_0(item){
  if (!$contains_0($getChildren_0(this), item)) {
    return;
  }
  $setTree(item, null);
  $setParentItem(item, null);
  $remove_7($getChildren_0(this), item);
  removeChild($getElement(this.this$0), $getElement(item));
}

function Tree$1(){
}

_ = Tree$1.prototype = new TreeItem;
_.addItem = addItem_0;
_.getClass$ = getClass_131;
_.removeItem = removeItem_0;
_.typeId$ = 237;
_.this$0 = null;
function $clinit_234(){
  $clinit_234 = nullMethod;
  DEFAULT_RESOURCES = $com_google_gwt_user_client_ui_Tree_Resources_default_InlineClientBundleGenerator(new com_google_gwt_user_client_ui_Tree_Resources_default_InlineClientBundleGenerator);
}

function $$init_130(){
}

function $Tree$ImageAdapter(this$static){
  $clinit_234();
  $Tree$ImageAdapter_0(this$static, DEFAULT_RESOURCES);
  return this$static;
}

function $Tree$ImageAdapter_0(this$static, resources){
  $clinit_234();
  $Object(this$static);
  $$init_130();
  this$static.treeClosed = create_2(resources.treeClosed_0());
  this$static.treeLeaf = create_2(resources.treeLeaf_0());
  this$static.treeOpen = create_2(resources.treeOpen_0());
  return this$static;
}

function $treeClosed(this$static){
  return this$static.treeClosed;
}

function $treeLeaf(this$static){
  return this$static.treeLeaf;
}

function $treeOpen(this$static){
  return this$static.treeOpen;
}

function getClass_132(){
  return Lcom_google_gwt_user_client_ui_Tree$ImageAdapter_2_classLit;
}

function Tree$ImageAdapter(){
}

_ = Tree$ImageAdapter.prototype = new Object_0;
_.getClass$ = getClass_132;
_.typeId$ = 0;
_.treeClosed = null;
_.treeLeaf = null;
_.treeOpen = null;
var DEFAULT_RESOURCES;
function $$init_131(this$static){
}

function $TreeItem$TreeItemAnimation(this$static){
  $Animation(this$static);
  $$init_131(this$static);
  return this$static;
}

function $onUpdate(this$static, progress){
  var height, scrollWidth;
  height = round_int(progress * this$static.scrollHeight_0);
  if (!this$static.opening) {
    height = this$static.scrollHeight_0 - height;
  }
  height = max(height, 1);
  setStyleAttribute(this$static.curItem.childSpanElem, 'height', height + 'px');
  scrollWidth = getElementPropertyInt(this$static.curItem.childSpanElem, 'scrollWidth');
  setStyleAttribute(this$static.curItem.childSpanElem, 'width', scrollWidth + 'px');
}

function $setItemState(this$static, item, animate){
  $cancel(this$static);
  if (animate) {
    this$static.curItem = item;
    this$static.opening = item.open_0;
    $run(this$static, min_0(200, 75 * $getChildCount(this$static.curItem)));
  }
   else {
    setVisible(item.childSpanElem, item.open_0);
  }
}

function getClass_133(){
  return Lcom_google_gwt_user_client_ui_TreeItem$TreeItemAnimation_2_classLit;
}

function onComplete_0(){
  if (isNotNull(this.curItem)) {
    if (this.opening) {
      setVisible(this.curItem.childSpanElem, true);
      $onUpdate(this, 1);
      setStyleAttribute(this.curItem.childSpanElem, 'height', 'auto');
    }
     else {
      setVisible(this.curItem.childSpanElem, false);
    }
    setStyleAttribute(this.curItem.childSpanElem, 'overflow', 'visible');
    setStyleAttribute(this.curItem.childSpanElem, 'width', 'auto');
    this.curItem = null;
  }
}

function onStart_0(){
  this.scrollHeight_0 = 0;
  if (!this.opening) {
    this.scrollHeight_0 = $getScrollHeight(this.curItem.childSpanElem);
  }
  setStyleAttribute(this.curItem.childSpanElem, 'overflow', 'hidden');
  $onStart(this);
  if (this.opening) {
    setVisible(this.curItem.childSpanElem, true);
    this.scrollHeight_0 = $getScrollHeight(this.curItem.childSpanElem);
  }
}

function onUpdate(progress){
  $onUpdate(this, progress);
}

function TreeItem$TreeItemAnimation(){
}

_ = TreeItem$TreeItemAnimation.prototype = new Animation;
_.getClass$ = getClass_133;
_.onComplete = onComplete_0;
_.onStart = onStart_0;
_.onUpdate = onUpdate;
_.typeId$ = 238;
_.curItem = null;
_.opening = true;
_.scrollHeight_0 = 0;
function $$init_132(){
}

function $TreeItem$TreeItemImpl(this$static){
  $Object(this$static);
  $$init_132();
  $initializeClonableElements();
  return this$static;
}

function $convertToFullNode_0(item){
  var itemTable, tdContent, tdImg, tr;
  if (isNull(item.imageHolder)) {
    itemTable = clone_0(($clinit_232() , BASE_INTERNAL_ELEM), true);
    appendChild($getElement(item), itemTable);
    tr = getFirstChild(getFirstChild(itemTable));
    tdImg = getFirstChild(tr);
    tdContent = getNextSibling(tdImg);
    setStyleAttribute($getElement(item), 'padding', '0px');
    appendChild(tdContent, item.contentElem);
    item.imageHolder = tdImg;
  }
}

function $initializeClonableElements(){
  var contentElem, tbody, tdContent, tdImg, tr;
  if (isClient()) {
    $clinit_232() , BASE_INTERNAL_ELEM = createTable();
    contentElem = createDiv();
    tbody = createTBody();
    tr = createTR();
    tdImg = createTD();
    tdContent = createTD();
    appendChild(($clinit_232() , BASE_INTERNAL_ELEM), tbody);
    appendChild(tbody, tr);
    appendChild(tr, tdImg);
    appendChild(tr, tdContent);
    setStyleAttribute(tdImg, 'verticalAlign', 'middle');
    setStyleAttribute(tdContent, 'verticalAlign', 'middle');
    appendChild(tdContent, contentElem);
    setStyleAttribute(contentElem, 'display', 'inline');
    setStyleName(contentElem, 'gwt-TreeItem');
    setStyleAttribute(($clinit_232() , BASE_INTERNAL_ELEM), 'whiteSpace', 'nowrap');
    $clinit_232() , BASE_BARE_ELEM = createDiv();
    setStyleAttribute(($clinit_232() , BASE_BARE_ELEM), 'padding', '3px');
    appendChild(($clinit_232() , BASE_BARE_ELEM), contentElem);
    setRole(contentElem, 'treeitem');
  }
}

function convertToFullNode(item){
  $convertToFullNode_0(item);
}

function getClass_134(){
  return Lcom_google_gwt_user_client_ui_TreeItem$TreeItemImpl_2_classLit;
}

function TreeItem$TreeItemImpl(){
}

_ = TreeItem$TreeItemImpl.prototype = new Object_0;
_.convertToFullNode = convertToFullNode;
_.getClass$ = getClass_134;
_.typeId$ = 0;
function $$init_133(){
}

function $UIObject$DebugIdImpl(this$static){
  $Object(this$static);
  $$init_133();
  return this$static;
}

function getClass_135(){
  return Lcom_google_gwt_user_client_ui_UIObject$DebugIdImpl_2_classLit;
}

function UIObject$DebugIdImpl(){
}

_ = UIObject$DebugIdImpl.prototype = new Object_0;
_.getClass$ = getClass_135;
_.typeId$ = 0;
function $$init_134(){
}

function $WidgetCollection(this$static, parent_0){
  $Object(this$static);
  $$init_134();
  this$static.parent_0 = parent_0;
  this$static.array = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 331, 2, 4, 0);
  return this$static;
}

function $add_2(this$static, w){
  $insert_1(this$static, w, this$static.size);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size; ++i) {
    if (jsEquals(this$static.array[i], w)) {
      return i;
    }
  }
  return -1;
}

function $insert_1(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
  if (this$static.size == this$static.array.length) {
    newArray = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 331, 2, this$static.array.length * 2, 0);
    for (i = 0; i < this$static.array.length; ++i) {
      setCheck(newArray, i, this$static.array[i]);
    }
    this$static.array = newArray;
  }
  ++this$static.size;
  for (i = this$static.size - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $iterator_0(this$static){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this$static);
}

function $remove_3(this$static, index){
  var i;
  if (index < 0 || index >= this$static.size) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
  --this$static.size;
  for (i = index; i < this$static.size; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size, null);
}

function $remove_4(this$static, w){
  var index;
  index = $indexOf(this$static, w);
  if (index == -1) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  $remove_3(this$static, index);
}

function $size(this$static){
  return this$static.size;
}

function getClass_136(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit;
}

function iterator_3(){
  return $iterator_0(this);
}

function WidgetCollection(){
}

_ = WidgetCollection.prototype = new Object_0;
_.getClass$ = getClass_136;
_.iterator_0 = iterator_3;
_.typeId$ = 0;
_.array = null;
_.parent_0 = null;
_.size = 0;
function $$init_135(this$static){
}

function $WidgetCollection$WidgetIterator(this$static, this$0){
  this$static.this$0 = this$0;
  $Object(this$static);
  $$init_135(this$static);
  return this$static;
}

function $next_1(this$static){
  if (this$static.index >= this$static.this$0.size) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  return this$static.this$0.array[++this$static.index];
}

function getClass_137(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit;
}

function hasNext_1(){
  return this.index < this.this$0.size - 1;
}

function next_2(){
  return $next_1(this);
}

function remove_6(){
  if (this.index < 0 || this.index >= this.this$0.size) {
    throw $IllegalStateException(new IllegalStateException);
  }
  this.this$0.parent_0.remove_0(this.this$0.array[this.index--]);
}

function WidgetCollection$WidgetIterator(){
}

_ = WidgetCollection$WidgetIterator.prototype = new Object_0;
_.getClass$ = getClass_137;
_.hasNext = hasNext_1;
_.next_0 = next_2;
_.remove = remove_6;
_.typeId$ = 0;
_.index = -1;
_.this$0 = null;
function copyWidgetArray(widgets){
  var clone, i;
  clone = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 331, 2, widgets.length, 0);
  for (i = 0; i < widgets.length; ++i) {
    setCheck(clone, i, widgets[i]);
  }
  return clone;
}

function createWidgetIterator(container, contained){
  return $WidgetIterators$1(new WidgetIterators$1, contained, container);
}

function $$init_136(this$static){
  this$static.widgets = this$static.val$contained;
  $gotoNextIndex(this$static);
}

function $WidgetIterators$1(this$static, val$contained, val$container){
  this$static.val$contained = val$contained;
  this$static.val$container = val$container;
  $Object(this$static);
  $$init_136(this$static);
  return this$static;
}

function $gotoNextIndex(this$static){
  ++this$static.index;
  while (this$static.index < this$static.val$contained.length) {
    if (isNotNull(this$static.val$contained[this$static.index])) {
      return;
    }
    ++this$static.index;
  }
}

function $hasNext_0(this$static){
  return this$static.index < this$static.val$contained.length;
}

function $next_2(this$static){
  var w;
  if (!$hasNext_0(this$static)) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  this$static.last = this$static.index;
  w = this$static.val$contained[this$static.index];
  $gotoNextIndex(this$static);
  return w;
}

function getClass_138(){
  return Lcom_google_gwt_user_client_ui_WidgetIterators$1_2_classLit;
}

function hasNext_2(){
  return $hasNext_0(this);
}

function next_3(){
  return $next_2(this);
}

function remove_7(){
  if (this.last < 0) {
    throw $IllegalStateException(new IllegalStateException);
  }
  if (!this.widgetsWasCopied) {
    this.widgets = copyWidgetArray(this.widgets);
    this.widgetsWasCopied = true;
  }
  this.val$container.remove_0(this.val$contained[this.last]);
  this.last = -1;
}

function WidgetIterators$1(){
}

_ = WidgetIterators$1.prototype = new Object_0;
_.getClass$ = getClass_138;
_.hasNext = hasNext_2;
_.next_0 = next_3;
_.remove = remove_7;
_.typeId$ = 0;
_.index = -1;
_.last = -1;
_.val$contained = null;
_.val$container = null;
_.widgetsWasCopied = false;
function $$init_137(){
}

function $com_google_gwt_user_client_ui_Tree_Resources_default_InlineClientBundleGenerator(this$static){
  $Object(this$static);
  $$init_137();
  return this$static;
}

function $treeClosed_0(){
  if (isNull(treeClosed)) {
    treeClosed = $ImageResourcePrototype(new ImageResourcePrototype, 'treeClosed', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqklEQVR42mNgGAVYQVbl9v9h6WsxcHbVjv8ENScXbf6/7+iD/79+/fmPDP78/fd/9eZr/xMLN+E3JCJj3f/PX77DMQPDGTj72/cfQJesw29AONCAt+8+wjHIAGQ+UQY8ffYKrBEdg8RBYUGUATAM0wjDhA0AOvHOvUfkGxCXt+H/zEXH/p+/ePP/5au34fjshZv/J84+/B8kTzAqU0s3Y00HKcWb/w/DZA8Agl3oOCRuvDUAAAAASUVORK5CYII=', 0, 0, 16, 16, false, false);
  }
  return treeClosed;
}

function $treeLeaf_0(){
  if (isNull(treeLeaf)) {
    treeLeaf = $ImageResourcePrototype(new ImageResourcePrototype, 'treeLeaf', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAEklEQVR42mNgGAWjYBSMAggAAAQQAAGvRYgsAAAAAElFTkSuQmCC', 0, 0, 16, 16, false, false);
  }
  return treeLeaf;
}

function $treeOpen_0(){
  if (isNull(treeOpen)) {
    treeOpen = $ImageResourcePrototype(new ImageResourcePrototype, 'treeOpen', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR42mNgGAVYQVbl9v9h6WsxcHbVjv8ENScXbf6/7+iD/79+/fmPDP78/fd/9eZr/xMLN+E3JCJj3f/PX77D8dt3H+Hsb99/AF2yDr8B4UADQJpwYaIMePrsFVDRGQwMEgeFBVEGwDDIVmQ+YQOATrxz7xH5BsTlbfg/c9Gx/+cv3vx/+eptOD574eb/ibMP/wfJE4zK1NLNWNNBSvHm/8Mw2QMAtl7wOMv7lGEAAAAASUVORK5CYII=', 0, 0, 16, 16, false, false);
  }
  return treeOpen;
}

function getClass_139(){
  return Lcom_google_gwt_user_client_ui_com_1google_1gwt_1user_1client_1ui_1Tree_1Resources_1default_1InlineClientBundleGenerator_2_classLit;
}

function treeClosed_0(){
  return $treeClosed_0();
}

function treeLeaf_0(){
  return $treeLeaf_0();
}

function treeOpen_0(){
  return $treeOpen_0();
}

function com_google_gwt_user_client_ui_Tree_Resources_default_InlineClientBundleGenerator(){
}

_ = com_google_gwt_user_client_ui_Tree_Resources_default_InlineClientBundleGenerator.prototype = new Object_0;
_.getClass$ = getClass_139;
_.treeClosed_0 = treeClosed_0;
_.treeLeaf_0 = treeLeaf_0;
_.treeOpen_0 = treeOpen_0;
_.typeId$ = 0;
var treeClosed = null, treeLeaf = null, treeOpen = null;
function $$init_138(){
}

function $ClippedImageImpl(this$static){
  $Object(this$static);
  $$init_138();
  return this$static;
}

function $adjust(img, url, left, top_0, width, height){
  var style;
  style = 'url(' + url + ') no-repeat ' + (-left + 'px ') + (-top_0 + 'px');
  $setProperty($getStyle(img), 'background', style);
  $setPropertyPx($getStyle(img), 'width', width);
  $setPropertyPx($getStyle(img), 'height', height);
}

function $createStructure(this$static, url, left, top_0, width, height){
  var tmp;
  tmp = $createSpanElement(get_0());
  $setInnerHTML(tmp, this$static.getHTML(url, left, top_0, width, height));
  return $getFirstChildElement_0(tmp);
}

function $getHTML(url, left, top_0, width, height){
  var clippedImgHtml, style;
  style = 'width: ' + width + 'px; height: ' + height + 'px; background: url(' + url + ') no-repeat ' + (-left + 'px ') + (-top_0 + 'px');
  clippedImgHtml = "<img src='" + getModuleBaseURL() + "clear.cache.gif' style='" + style + "' border='0'>";
  return clippedImgHtml;
}

function adjust(img, url, left, top_0, width, height){
  $adjust(img, url, left, top_0, width, height);
}

function createStructure(url, left, top_0, width, height){
  return $createStructure(this, url, left, top_0, width, height);
}

function getClass_140(){
  return Lcom_google_gwt_user_client_ui_impl_ClippedImageImpl_2_classLit;
}

function getHTML(url, left, top_0, width, height){
  return $getHTML(url, left, top_0, width, height);
}

function ClippedImageImpl(){
}

_ = ClippedImageImpl.prototype = new Object_0;
_.adjust = adjust;
_.createStructure = createStructure;
_.getClass$ = getClass_140;
_.getHTML = getHTML;
_.typeId$ = 0;
function $clinit_245(){
  $clinit_245 = nullMethod;
  impl_7 = $ClippedImageImpl(new ClippedImageImpl);
}

function $$init_139(this$static){
}

function $ClippedImagePrototype(this$static, url, left, top_0, width, height){
  $clinit_245();
  $AbstractImagePrototype(this$static);
  $$init_139(this$static);
  this$static.url = url;
  this$static.left = left;
  this$static.top_0 = top_0;
  this$static.width = width;
  this$static.height = height;
  return this$static;
}

function applyTo_0(imageElement){
  impl_7.adjust(imageElement, this.url, this.left, this.top_0, this.width, this.height);
}

function createElement_1(){
  return impl_7.createStructure(this.url, this.left, this.top_0, this.width, this.height);
}

function createImage(){
  return $Image(new Image_0, this.url, this.left, this.top_0, this.width, this.height);
}

function getClass_141(){
  return Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit;
}

function ClippedImagePrototype(){
}

_ = ClippedImagePrototype.prototype = new AbstractImagePrototype;
_.applyTo = applyTo_0;
_.createElement_1 = createElement_1;
_.createImage = createImage;
_.getClass$ = getClass_141;
_.typeId$ = 0;
_.height = 0;
_.left = 0;
_.top_0 = 0;
_.url = null;
_.width = 0;
var impl_7;
function $clinit_246(){
  $clinit_246 = nullMethod;
  implPanel = $FocusImpl(new FocusImpl);
  instanceOf(implPanel, 113)?$FocusImpl(new FocusImpl):implPanel;
}

function $$init_140(){
}

function $FocusImpl(this$static){
  $clinit_246();
  $Object(this$static);
  $$init_140();
  return this$static;
}

function blur_0(elem){
  $blur(elem);
}

function createFocusable(){
  var e;
  e = $cast($createDivElement(get_0()));
  $setTabIndex(e, 0);
  return e;
}

function focus_1(elem){
  $focus(elem);
}

function getClass_142(){
  return Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit;
}

function getFocusImplForPanel(){
  $clinit_246();
  return implPanel;
}

function FocusImpl(){
}

_ = FocusImpl.prototype = new Object_0;
_.blur_0 = blur_0;
_.createFocusable = createFocusable;
_.focus_0 = focus_1;
_.getClass$ = getClass_142;
_.typeId$ = 0;
var implPanel;
function $$init_141(){
}

function $OutputStream(this$static){
  $Object(this$static);
  $$init_141();
  return this$static;
}

function getClass_143(){
  return Ljava_io_OutputStream_2_classLit;
}

function OutputStream(){
}

_ = OutputStream.prototype = new Object_0;
_.getClass$ = getClass_143;
_.typeId$ = 0;
function $$init_142(){
}

function $FilterOutputStream(this$static){
  $OutputStream(this$static);
  $$init_142();
  return this$static;
}

function getClass_144(){
  return Ljava_io_FilterOutputStream_2_classLit;
}

function FilterOutputStream(){
}

_ = FilterOutputStream.prototype = new OutputStream;
_.getClass$ = getClass_144;
_.typeId$ = 0;
function $$init_143(){
}

function $PrintStream(this$static){
  $FilterOutputStream(this$static);
  $$init_143();
  return this$static;
}

function getClass_145(){
  return Ljava_io_PrintStream_2_classLit;
}

function PrintStream(){
}

_ = PrintStream.prototype = new FilterOutputStream;
_.getClass$ = getClass_145;
_.typeId$ = 0;
function $$init_144(){
}

function $ArrayStoreException(this$static){
  $RuntimeException(this$static);
  $$init_144();
  return this$static;
}

function getClass_146(){
  return Ljava_lang_ArrayStoreException_2_classLit;
}

function ArrayStoreException(){
}

_ = ArrayStoreException.prototype = new RuntimeException;
_.getClass$ = getClass_146;
_.typeId$ = 249;
function $$init_145(){
}

function $Class(this$static){
  $Object(this$static);
  $$init_145();
  return this$static;
}

function $getName_0(this$static){
  return this$static.typeName;
}

function createForArray(packageName, className, seedName, componentType){
  var clazz;
  clazz = $Class(new Class);
  setName(clazz, packageName, className, seedName);
  clazz , 4;
  clazz , Ljava_lang_Object_2_classLit;
  clazz , componentType;
  return clazz;
}

function createForClass(packageName, className, seedName, superclass){
  var clazz;
  clazz = $Class(new Class);
  setName(clazz, packageName, className, seedName);
  clazz , superclass;
  return clazz;
}

function createForEnum(packageName, className, seedName, superclass, enumConstantsFunc){
  var clazz;
  clazz = $Class(new Class);
  setName(clazz, packageName, className, seedName);
  clazz , isNotNull(enumConstantsFunc)?8:0;
  clazz , (clazz , superclass);
  clazz , enumConstantsFunc;
  return clazz;
}

function createForPrimitive(packageName, className, seedName){
  var clazz;
  clazz = $Class(new Class);
  setName(clazz, packageName, className, seedName);
  clazz , 1;
  return clazz;
}

function getClass_147(){
  return Ljava_lang_Class_2_classLit;
}

function isClassMetadataEnabled(){
  return true;
}

function setName(clazz, packageName, className, seedName){
  if (clazz , isClassMetadataEnabled()) {
    clazz.typeName = packageName + className;
  }
   else {
    clazz.typeName = 'Class$' + (jsNotEquals(seedName, null)?seedName:'' + hashCode__devirtual$(clazz));
  }
}

function Class(){
}

_ = Class.prototype = new Object_0;
_.getClass$ = getClass_147;
_.typeId$ = 256;
_.typeName = null;
function $$init_146(){
}

function $ClassCastException(this$static){
  $RuntimeException(this$static);
  $$init_146();
  return this$static;
}

function getClass_148(){
  return Ljava_lang_ClassCastException_2_classLit;
}

function ClassCastException(){
}

_ = ClassCastException.prototype = new RuntimeException;
_.getClass$ = getClass_148;
_.typeId$ = 257;
function isNaN_0(x){
  return isNaN(x);
}

function $$init_147(){
}

function $IllegalArgumentException(this$static, message){
  $RuntimeException_0(this$static, message);
  $$init_147();
  return this$static;
}

function getClass_149(){
  return Ljava_lang_IllegalArgumentException_2_classLit;
}

function IllegalArgumentException(){
}

_ = IllegalArgumentException.prototype = new RuntimeException;
_.getClass$ = getClass_149;
_.typeId$ = 260;
function $$init_148(){
}

function $IllegalStateException(this$static){
  $RuntimeException(this$static);
  $$init_148();
  return this$static;
}

function $IllegalStateException_0(this$static, s){
  $RuntimeException_0(this$static, s);
  $$init_148();
  return this$static;
}

function getClass_150(){
  return Ljava_lang_IllegalStateException_2_classLit;
}

function IllegalStateException(){
}

_ = IllegalStateException.prototype = new RuntimeException;
_.getClass$ = getClass_150;
_.typeId$ = 261;
function $$init_149(){
}

function $IndexOutOfBoundsException(this$static){
  $RuntimeException(this$static);
  $$init_149();
  return this$static;
}

function $IndexOutOfBoundsException_0(this$static, message){
  $RuntimeException_0(this$static, message);
  $$init_149();
  return this$static;
}

function getClass_151(){
  return Ljava_lang_IndexOutOfBoundsException_2_classLit;
}

function IndexOutOfBoundsException(){
}

_ = IndexOutOfBoundsException.prototype = new RuntimeException;
_.getClass$ = getClass_151;
_.typeId$ = 247;
function toString_0(value){
  return valueOf(value);
}

function abs(x){
  return x < 0?-x:x;
}

function ceil(x){
  return Math.ceil(x);
}

function cos(x){
  return Math.cos(x);
}

function floor(x){
  return Math.floor(x);
}

function log(x){
  return Math.log(x);
}

function max(x, y){
  return x > y?x:y;
}

function min_0(x, y){
  return x < y?x:y;
}

function $$init_150(){
}

function $NullPointerException(this$static){
  $RuntimeException(this$static);
  $$init_150();
  return this$static;
}

function $NullPointerException_0(this$static, message){
  $RuntimeException_0(this$static, message);
  $$init_150();
  return this$static;
}

function getClass_152(){
  return Ljava_lang_NullPointerException_2_classLit;
}

function NullPointerException(){
}

_ = NullPointerException.prototype = new RuntimeException;
_.getClass$ = getClass_152;
_.typeId$ = 264;
function $$init_151(){
}

function $StackTraceElement(this$static, className, methodName, fileName, lineNumber){
  $Object(this$static);
  $$init_151();
  this$static , className;
  this$static , methodName;
  this$static , fileName;
  this$static , lineNumber;
  return this$static;
}

function getClass_153(){
  return Ljava_lang_StackTraceElement_2_classLit;
}

function StackTraceElement(){
}

_ = StackTraceElement.prototype = new Object_0;
_.getClass$ = getClass_153;
_.typeId$ = 267;
function $clinit_267(){
  $clinit_267 = nullMethod;
  $String$1(new String$1);
}

function $charAt(this$static, index){
  return this$static.charCodeAt(index);
}

function $compareTo_1(this$static, other){
  return compareTo_1(this$static, other);
}

function $compareToIgnoreCase(this$static, other){
  return compareTo_1($toLowerCase(this$static), $toLowerCase(other));
}

function $equals_1(this$static, other){
  if (!instanceOf(other, 1)) {
    return false;
  }
  return __equals(this$static, other);
}

function $equalsIgnoreCase(this$static, other){
  if (other == null)
    return false;
  return this$static == other || this$static.toLowerCase() == other.toLowerCase();
}

function $indexOf_0(this$static, str){
  return this$static.indexOf(str);
}

function $indexOf_1(this$static, str, startIndex){
  return this$static.indexOf(str, startIndex);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $length_1(this$static){
  return this$static.length;
}

function $startsWith(this$static, prefix){
  return $indexOf_0(this$static, prefix) == 0;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $toLowerCase(this$static){
  return this$static.toLowerCase();
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

function __equals(me, other){
  return String(me) == other;
}

function compareTo_1(thisStr, otherStr){
  thisStr = String(thisStr);
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function compareTo_2(p0){
  return $compareTo_1(this, dynamicCast(p0, 1));
}

function equals_3(other){
  return $equals_1(this, other);
}

function getClass_154(){
  return Ljava_lang_String_2_classLit;
}

function hashCode_5(){
  return getHashCode_0(this);
}

function valueOf(x){
  $clinit_267();
  return '' + x;
}

_ = String.prototype;
_.compareTo$ = compareTo_2;
_.equals$ = equals_3;
_.getClass$ = getClass_154;
_.hashCode$ = hashCode_5;
_.typeId$ = 2;
function $$init_152(){
}

function $String$1(this$static){
  $Object(this$static);
  $$init_152();
  return this$static;
}

function $compare(a, b){
  return $compareToIgnoreCase(a, b);
}

function compare_1(p0, p1){
  return $compare(dynamicCast(p0, 1), dynamicCast(p1, 1));
}

function getClass_155(){
  return Ljava_lang_String$1_2_classLit;
}

function String$1(){
}

_ = String$1.prototype = new Object_0;
_.compare = compare_1;
_.getClass$ = getClass_155;
_.typeId$ = 0;
function $clinit_269(){
  $clinit_269 = nullMethod;
  back = createObject();
  front = createObject();
  256;
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = $length_1(str);
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = $charAt(str, i + 3) + 31 * ($charAt(str, i + 2) + 31 * ($charAt(str, i + 1) + 31 * ($charAt(str, i) + 31 * hashCode))) | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  return hashCode | 0;
}

function getHashCode_0(str){
  $clinit_269();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back[key];
  if (result == null) {
    result = compute(str);
  }
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back = front;
    front = createObject();
    count_0 = 0;
  }
  ++count_0;
}

var back, count_0 = 0, front;
function $clinit_270(){
  $clinit_270 = nullMethod;
  $PrintStream(new PrintStream);
  $PrintStream(new PrintStream);
}

function currentTimeMillis_1(){
  $clinit_270();
  return fromDouble(currentTimeMillis0());
}

function currentTimeMillis0(){
  return (new Date).getTime();
}

function $$init_153(){
}

function $UnsupportedOperationException(this$static){
  $RuntimeException(this$static);
  $$init_153();
  return this$static;
}

function $UnsupportedOperationException_0(this$static, message){
  $RuntimeException_0(this$static, message);
  $$init_153();
  return this$static;
}

function getClass_156(){
  return Ljava_lang_UnsupportedOperationException_2_classLit;
}

function UnsupportedOperationException(){
}

_ = UnsupportedOperationException.prototype = new RuntimeException;
_.getClass$ = getClass_156;
_.typeId$ = 269;
function $$init_154(){
}

function $AbstractCollection(this$static){
  $Object(this$static);
  $$init_154();
  return this$static;
}

function $advanceToFind(iter, o){
  var t;
  while (iter.hasNext()) {
    t = iter.next_0();
    if (jsEquals(o, null)?jsEquals(t, null):equals__devirtual$(o, t)) {
      return iter;
    }
  }
  return null;
}

function add_0(o){
  throw $UnsupportedOperationException_0(new UnsupportedOperationException, 'Add not supported on this collection');
}

function clear(){
  var iter;
  iter = this.iterator_0();
  while (iter.hasNext()) {
    iter.next_0();
    iter.remove();
  }
}

function contains(o){
  var iter;
  iter = $advanceToFind(this.iterator_0(), o);
  return isNotNull(iter);
}

function getClass_157(){
  return Ljava_util_AbstractCollection_2_classLit;
}

function isEmpty(){
  return this.size_0() == 0;
}

function remove_8(o){
  var iter;
  iter = $advanceToFind(this.iterator_0(), o);
  if (isNotNull(iter)) {
    iter.remove();
    return true;
  }
   else {
    return false;
  }
}

function toArray(a){
  var i, it, result, size;
  size = this.size_0();
  if (a.length < size) {
    a = createFrom(a, size);
  }
  result = a;
  it = this.iterator_0();
  for (i = 0; i < size; ++i) {
    setCheck(result, i, it.next_0());
  }
  if (a.length > size) {
    setCheck(a, size, null);
  }
  return a;
}

function AbstractCollection(){
}

_ = AbstractCollection.prototype = new Object_0;
_.add = add_0;
_.clear = clear;
_.contains_0 = contains;
_.getClass$ = getClass_157;
_.isEmpty = isEmpty;
_.remove_1 = remove_8;
_.toArray = toArray;
_.typeId$ = 3;
function $$init_155(){
}

function $AbstractMap(this$static){
  $Object(this$static);
  $$init_155();
  return this$static;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet().iterator_0(); iter.hasNext();) {
    entry = dynamicCast(iter.next_0(), 52);
    k = entry.getKey();
    if (jsEquals(key, null)?jsEquals(k, null):equals__devirtual$(key, k)) {
      if (remove) {
        iter.remove();
      }
      return entry;
    }
  }
  return null;
}

function $isEmpty(this$static){
  return this$static.size_0() == 0;
}

function $keySet(this$static){
  var entrySet;
  entrySet = this$static.entrySet();
  return $AbstractMap$1(new AbstractMap$1, this$static, entrySet);
}

function clear_0(){
  this.entrySet().clear();
}

function containsKey(key){
  return isNotNull($implFindEntry(this, key, false));
}

function equals_4(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (maskUndefined(obj) === maskUndefined(this)) {
    return true;
  }
  if (!instanceOf(obj, 150)) {
    return false;
  }
  otherMap = dynamicCast(obj, 150);
  if (this.size_0() != otherMap.size_0()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator_0(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 52);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!this.containsKey(otherKey)) {
      return false;
    }
    if (!equalsWithNullCheck(otherValue, this.get(otherKey))) {
      return false;
    }
  }
  return true;
}

function get_3(key){
  var entry;
  entry = $implFindEntry(this, key, false);
  return isNull(entry)?null:entry.getValue();
}

function getClass_158(){
  return Ljava_util_AbstractMap_2_classLit;
}

function hashCode_6(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = this.entrySet().iterator_0(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 52);
    hashCode += entry.hashCode$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function keySet(){
  return $keySet(this);
}

function put(key, value){
  throw $UnsupportedOperationException_0(new UnsupportedOperationException, 'Put not supported on this map');
}

function remove_9(key){
  var entry;
  entry = $implFindEntry(this, key, true);
  return isNull(entry)?null:entry.getValue();
}

function size_0(){
  return this.entrySet().size_0();
}

function AbstractMap(){
}

_ = AbstractMap.prototype = new Object_0;
_.clear = clear_0;
_.containsKey = containsKey;
_.equals$ = equals_4;
_.get = get_3;
_.getClass$ = getClass_158;
_.hashCode$ = hashCode_6;
_.keySet = keySet;
_.put = put;
_.remove_2 = remove_9;
_.size_0 = size_0;
_.typeId$ = 272;
function $$init_156(this$static){
  $clearImpl(this$static);
}

function $AbstractHashMap(this$static){
  $AbstractMap(this$static);
  $$init_156(this$static);
  return this$static;
}

function $addAllHashEntries(this$static, dest){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add(array[i]);
      }
    }
  }
}

function $addAllStringEntries(this$static, dest){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = new_$(this$static, key.substring(1));
      dest.add(entry);
    }
  }
}

function $clear(this$static){
  $clearImpl(this$static);
}

function $clearImpl(this$static){
  this$static.hashCodeMap = createArray();
  this$static.stringMap = createObject();
  this$static.nullSlotLive = false;
  this$static.nullSlot = null;
  this$static.size = 0;
}

function $containsKey(this$static, key){
  return jsEquals(key, null)?this$static.nullSlotLive:instanceOf(key, 1)?$hasStringValue(this$static, dynamicCast(key, 1)):$hasHashValue(this$static, key, this$static.getHashCode(key));
}

function $get_2(this$static, key){
  return jsEquals(key, null)?this$static.nullSlot:instanceOf(key, 1)?$getStringValue(this$static, dynamicCast(key, 1)):$getHashValue(this$static, key, this$static.getHashCode(key));
}

function $getHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return entry.getValue();
      }
    }
  }
  return null;
}

function $getStringValue(this$static, key){
  return this$static.stringMap[':' + key];
}

function $hasHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function $hasStringValue(this$static, key){
  return ':' + key in this$static.stringMap;
}

function $put(this$static, key, value){
  return jsEquals(key, null)?$putNullSlot(this$static, value):instanceOf(key, 1)?$putStringValue(this$static, dynamicCast(key, 1), value):$putHashValue(this$static, key, value, this$static.getHashCode(key));
}

function $putHashValue(this$static, key, value, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        var previous = entry.getValue();
        entry.setValue(value);
        return previous;
      }
    }
  }
   else {
    array = this$static.hashCodeMap[hashCode] = [];
  }
  var entry = new_$_0(key, value);
  array.push(entry);
  ++this$static.size;
  return null;
}

function $putNullSlot(this$static, value){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = value;
  if (!this$static.nullSlotLive) {
    this$static.nullSlotLive = true;
    ++this$static.size;
  }
  return result;
}

function $putStringValue(this$static, key, value){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  if (key in stringMap) {
    result = stringMap[key];
  }
   else {
    ++this$static.size;
  }
  stringMap[key] = value;
  return result;
}

function $remove_5(this$static, key){
  return jsEquals(key, null)?$removeNullSlot(this$static):instanceOf(key, 1)?$removeStringValue(this$static, dynamicCast(key, 1)):$removeHashValue(this$static, key, this$static.getHashCode(key));
}

function $removeHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        if (array.length == 1) {
          delete this$static.hashCodeMap[hashCode];
        }
         else {
          array.splice(i, 1);
        }
        --this$static.size;
        return entry.getValue();
      }
    }
  }
  return null;
}

function $removeNullSlot(this$static){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = null;
  if (this$static.nullSlotLive) {
    this$static.nullSlotLive = false;
    --this$static.size;
  }
  return result;
}

function $removeStringValue(this$static, key){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  if (key in stringMap) {
    result = stringMap[key];
    --this$static.size;
    delete stringMap[key];
  }
  return result;
}

function $size_0(this$static){
  return this$static.size;
}

function clear_1(){
  $clear(this);
}

function containsKey_0(key){
  return $containsKey(this, key);
}

function entrySet_0(){
  return $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, this);
}

function equalsBridge(value1, value2){
  return this.equals(value1, value2);
}

function get_4(key){
  return $get_2(this, key);
}

function getClass_159(){
  return Ljava_util_AbstractHashMap_2_classLit;
}

function put_0(key, value){
  return $put(this, key, value);
}

function remove_10(key){
  return $remove_5(this, key);
}

function size_1(){
  return $size_0(this);
}

function AbstractHashMap(){
}

_ = AbstractHashMap.prototype = new AbstractMap;
_.clear = clear_1;
_.containsKey = containsKey_0;
_.entrySet = entrySet_0;
_.equalsBridge = equalsBridge;
_.get = get_4;
_.getClass$ = getClass_159;
_.put = put_0;
_.remove_2 = remove_10;
_.size_0 = size_1;
_.typeId$ = 273;
_.hashCodeMap = null;
_.nullSlot = null;
_.nullSlotLive = false;
_.size = 0;
_.stringMap = null;
function $$init_157(){
}

function $AbstractSet(this$static){
  $AbstractCollection(this$static);
  $$init_157();
  return this$static;
}

function equals_5(o){
  var iter, other, otherItem;
  if (maskUndefined(o) === maskUndefined(this)) {
    return true;
  }
  if (!instanceOf(o, 101)) {
    return false;
  }
  other = dynamicCast(o, 101);
  if (other.size_0() != this.size_0()) {
    return false;
  }
  for (iter = other.iterator_0(); iter.hasNext();) {
    otherItem = iter.next_0();
    if (!this.contains_0(otherItem)) {
      return false;
    }
  }
  return true;
}

function getClass_160(){
  return Ljava_util_AbstractSet_2_classLit;
}

function hashCode_7(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator_0(); iter.hasNext();) {
    next = iter.next_0();
    if (jsNotEquals(next, null)) {
      hashCode += hashCode__devirtual$(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}

function AbstractSet(){
}

_ = AbstractSet.prototype = new AbstractCollection;
_.equals$ = equals_5;
_.getClass$ = getClass_160;
_.hashCode$ = hashCode_7;
_.typeId$ = 274;
function $$init_158(){
}

function $AbstractHashMap$EntrySet(this$static, this$0){
  this$static.this$0 = this$0;
  $AbstractSet(this$static);
  $$init_158();
  return this$static;
}

function $contains(this$static, o){
  var entry, key, value;
  if (instanceOf(o, 52)) {
    entry = dynamicCast(o, 52);
    key = entry.getKey();
    if ($containsKey(this$static.this$0, key)) {
      value = $get_2(this$static.this$0, key);
      return this$static.this$0.equals(entry.getValue(), value);
    }
  }
  return false;
}

function clear_2(){
  $clear(this.this$0);
}

function contains_0(o){
  return $contains(this, o);
}

function getClass_161(){
  return Ljava_util_AbstractHashMap$EntrySet_2_classLit;
}

function iterator_4(){
  return $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, this.this$0);
}

function remove_11(entry){
  var key;
  if ($contains(this, entry)) {
    key = dynamicCast(entry, 52).getKey();
    $remove_5(this.this$0, key);
    return true;
  }
  return false;
}

function size_2(){
  return $size_0(this.this$0);
}

function AbstractHashMap$EntrySet(){
}

_ = AbstractHashMap$EntrySet.prototype = new AbstractSet;
_.clear = clear_2;
_.contains_0 = contains_0;
_.getClass$ = getClass_161;
_.iterator_0 = iterator_4;
_.remove_1 = remove_11;
_.size_0 = size_2;
_.typeId$ = 275;
_.this$0 = null;
function $$init_159(this$static){
}

function $AbstractHashMap$EntrySetIterator(this$static, this$0){
  var list;
  this$static.this$0 = this$0;
  $Object(this$static);
  $$init_159(this$static);
  list = $ArrayList(new ArrayList);
  if (this$static.this$0.nullSlotLive) {
    list.add($AbstractHashMap$MapEntryNull(new AbstractHashMap$MapEntryNull, this$static.this$0));
  }
  $addAllStringEntries(this$static.this$0, list);
  $addAllHashEntries(this$static.this$0, list);
  this$static.iter = list.iterator_0();
  return this$static;
}

function $next_3(this$static){
  return this$static.last = dynamicCast(this$static.iter.next_0(), 52);
}

function getClass_162(){
  return Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit;
}

function hasNext_3(){
  return this.iter.hasNext();
}

function next_4(){
  return $next_3(this);
}

function remove_12(){
  if (isNull(this.last)) {
    throw $IllegalStateException_0(new IllegalStateException, 'Must call next() before remove().');
  }
   else {
    this.iter.remove();
    $remove_5(this.this$0, this.last.getKey());
    this.last = null;
  }
}

function AbstractHashMap$EntrySetIterator(){
}

_ = AbstractHashMap$EntrySetIterator.prototype = new Object_0;
_.getClass$ = getClass_162;
_.hasNext = hasNext_3;
_.next_0 = next_4;
_.remove = remove_12;
_.typeId$ = 0;
_.iter = null;
_.last = null;
_.this$0 = null;
function $$init_160(){
}

function $AbstractMapEntry(this$static){
  $Object(this$static);
  $$init_160();
  return this$static;
}

function equals_6(other){
  var entry;
  if (instanceOf(other, 52)) {
    entry = dynamicCast(other, 52);
    if (equalsWithNullCheck(this.getKey(), entry.getKey()) && equalsWithNullCheck(this.getValue(), entry.getValue())) {
      return true;
    }
  }
  return false;
}

function getClass_163(){
  return Ljava_util_AbstractMapEntry_2_classLit;
}

function hashCode_8(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  if (jsNotEquals(this.getKey(), null)) {
    keyHash = hashCode__devirtual$(this.getKey());
  }
  if (jsNotEquals(this.getValue(), null)) {
    valueHash = hashCode__devirtual$(this.getValue());
  }
  return keyHash ^ valueHash;
}

function AbstractMapEntry(){
}

_ = AbstractMapEntry.prototype = new Object_0;
_.equals$ = equals_6;
_.getClass$ = getClass_163;
_.hashCode$ = hashCode_8;
_.typeId$ = 276;
function $$init_161(){
}

function $AbstractHashMap$MapEntryNull(this$static, this$0){
  this$static.this$0 = this$0;
  $AbstractMapEntry(this$static);
  $$init_161();
  return this$static;
}

function getClass_164(){
  return Ljava_util_AbstractHashMap$MapEntryNull_2_classLit;
}

function getKey(){
  return null;
}

function getValue(){
  return this.this$0.nullSlot;
}

function setValue(object){
  return $putNullSlot(this.this$0, object);
}

function AbstractHashMap$MapEntryNull(){
}

_ = AbstractHashMap$MapEntryNull.prototype = new AbstractMapEntry;
_.getClass$ = getClass_164;
_.getKey = getKey;
_.getValue = getValue;
_.setValue = setValue;
_.typeId$ = 277;
_.this$0 = null;
function $$init_162(){
}

function $AbstractHashMap$MapEntryString(this$static, key, this$0){
  this$static.this$0 = this$0;
  $AbstractMapEntry(this$static);
  $$init_162();
  this$static.key = key;
  return this$static;
}

function getClass_165(){
  return Ljava_util_AbstractHashMap$MapEntryString_2_classLit;
}

function getKey_0(){
  return this.key;
}

function getValue_0(){
  return $getStringValue(this.this$0, this.key);
}

function new_$(this$outer, key){
  return $AbstractHashMap$MapEntryString(new AbstractHashMap$MapEntryString, key, this$outer);
}

function setValue_0(object){
  return $putStringValue(this.this$0, this.key, object);
}

function AbstractHashMap$MapEntryString(){
}

_ = AbstractHashMap$MapEntryString.prototype = new AbstractMapEntry;
_.getClass$ = getClass_165;
_.getKey = getKey_0;
_.getValue = getValue_0;
_.setValue = setValue_0;
_.typeId$ = 278;
_.key = null;
_.this$0 = null;
function $$init_163(){
}

function $AbstractList(this$static){
  $AbstractCollection(this$static);
  $$init_163();
  return this$static;
}

function add_1(obj){
  this.add_0(this.size_0(), obj);
  return true;
}

function add_2(index, element){
  throw $UnsupportedOperationException_0(new UnsupportedOperationException, 'Add not supported on this list');
}

function checkIndex(index, size){
  if (index < 0 || index >= size) {
    indexOutOfBounds(index, size);
  }
}

function clear_3(){
  this.removeRange(0, this.size_0());
}

function equals_7(o){
  var elem, elemOther, iter, iterOther, other;
  if (maskUndefined(o) === maskUndefined(this)) {
    return true;
  }
  if (!instanceOf(o, 67)) {
    return false;
  }
  other = dynamicCast(o, 67);
  if (this.size_0() != other.size_0()) {
    return false;
  }
  iter = this.iterator_0();
  iterOther = other.iterator_0();
  while (iter.hasNext()) {
    elem = iter.next_0();
    elemOther = iterOther.next_0();
    if (!(jsEquals(elem, null)?jsEquals(elemOther, null):equals__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function getClass_166(){
  return Ljava_util_AbstractList_2_classLit;
}

function hashCode_9(){
  var iter, k, obj;
  k = 1;
  31;
  iter = this.iterator_0();
  while (iter.hasNext()) {
    obj = iter.next_0();
    k = 31 * k + (jsEquals(obj, null)?0:hashCode__devirtual$(obj));
    k = ~~k;
  }
  return k;
}

function indexOutOfBounds(index, size){
  throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Index: ' + index + ', Size: ' + size);
}

function iterator_5(){
  return $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this);
}

function listIterator(from){
  return $AbstractList$ListIteratorImpl(new AbstractList$ListIteratorImpl, from, this);
}

function remove_13(index){
  throw $UnsupportedOperationException_0(new UnsupportedOperationException, 'Remove not supported on this list');
}

function removeRange(fromIndex, endIndex){
  var i, iter;
  iter = this.listIterator(fromIndex);
  for (i = fromIndex; i < endIndex; ++i) {
    iter.next_0();
    iter.remove();
  }
}

function AbstractList(){
}

_ = AbstractList.prototype = new AbstractCollection;
_.add = add_1;
_.add_0 = add_2;
_.clear = clear_3;
_.equals$ = equals_7;
_.getClass$ = getClass_166;
_.hashCode$ = hashCode_9;
_.iterator_0 = iterator_5;
_.listIterator = listIterator;
_.remove_3 = remove_13;
_.removeRange = removeRange;
_.typeId$ = 4;
function $$init_164(this$static){
}

function $AbstractList$IteratorImpl(this$static, this$0){
  this$static.this$0_0 = this$0;
  $Object(this$static);
  $$init_164(this$static);
  return this$static;
}

function $hasNext_1(this$static){
  return this$static.i < this$static.this$0_0.size_0();
}

function getClass_167(){
  return Ljava_util_AbstractList$IteratorImpl_2_classLit;
}

function hasNext_4(){
  return $hasNext_1(this);
}

function next_5(){
  if (!$hasNext_1(this)) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  return this.this$0_0.get_0(this.last = this.i++);
}

function remove_14(){
  if (this.last < 0) {
    throw $IllegalStateException(new IllegalStateException);
  }
  this.this$0_0.remove_3(this.last);
  this.i = this.last;
  this.last = -1;
}

function AbstractList$IteratorImpl(){
}

_ = AbstractList$IteratorImpl.prototype = new Object_0;
_.getClass$ = getClass_167;
_.hasNext = hasNext_4;
_.next_0 = next_5;
_.remove = remove_14;
_.typeId$ = 0;
_.i = 0;
_.last = -1;
_.this$0_0 = null;
function $$init_165(){
}

function $AbstractList$ListIteratorImpl(this$static, start, this$0){
  var size;
  this$static.this$0 = this$0;
  $AbstractList$IteratorImpl(this$static, this$0);
  $$init_165();
  size = this$static.this$0.size_0();
  if (start < 0 || start > size) {
    indexOutOfBounds(start, size);
  }
  this$static.i = start;
  return this$static;
}

function getClass_168(){
  return Ljava_util_AbstractList$ListIteratorImpl_2_classLit;
}

function AbstractList$ListIteratorImpl(){
}

_ = AbstractList$ListIteratorImpl.prototype = new AbstractList$IteratorImpl;
_.getClass$ = getClass_168;
_.typeId$ = 279;
_.this$0 = null;
function $$init_166(){
}

function $AbstractMap$1(this$static, this$0, val$entrySet){
  this$static.this$0 = this$0;
  this$static.val$entrySet = val$entrySet;
  $AbstractSet(this$static);
  $$init_166();
  return this$static;
}

function contains_1(key){
  return this.this$0.containsKey(key);
}

function getClass_169(){
  return Ljava_util_AbstractMap$1_2_classLit;
}

function iterator_6(){
  var outerIter;
  outerIter = this.val$entrySet.iterator_0();
  return $AbstractMap$1$1(new AbstractMap$1$1, this, outerIter);
}

function size_3(){
  return this.val$entrySet.size_0();
}

function AbstractMap$1(){
}

_ = AbstractMap$1.prototype = new AbstractSet;
_.contains_0 = contains_1;
_.getClass$ = getClass_169;
_.iterator_0 = iterator_6;
_.size_0 = size_3;
_.typeId$ = 281;
_.this$0 = null;
_.val$entrySet = null;
function $$init_167(){
}

function $AbstractMap$1$1(this$static, this$1, val$outerIter){
  this$static , this$1;
  this$static.val$outerIter = val$outerIter;
  $Object(this$static);
  $$init_167();
  return this$static;
}

function getClass_170(){
  return Ljava_util_AbstractMap$1$1_2_classLit;
}

function hasNext_5(){
  return this.val$outerIter.hasNext();
}

function next_6(){
  var entry;
  entry = dynamicCast(this.val$outerIter.next_0(), 52);
  return entry.getKey();
}

function remove_15(){
  this.val$outerIter.remove();
}

function AbstractMap$1$1(){
}

_ = AbstractMap$1$1.prototype = new Object_0;
_.getClass$ = getClass_170;
_.hasNext = hasNext_5;
_.next_0 = next_6;
_.remove = remove_15;
_.typeId$ = 0;
_.val$outerIter = null;
function $$init_168(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 343, 0, 0, 0);
}

function $ArrayList(this$static){
  $AbstractList(this$static);
  $$init_168(this$static);
  return this$static;
}

function $add_3(this$static, o){
  setCheck(this$static.array, this$static.size++, o);
  return true;
}

function $add_4(this$static, index, o){
  if (index < 0 || index > this$static.size) {
    indexOutOfBounds(index, this$static.size);
  }
  splice_1(this$static.array, index, 0, o);
  ++this$static.size;
}

function $clear_0(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 343, 0, 0, 0);
  this$static.size = 0;
}

function $contains_0(this$static, o){
  return $indexOf_2(this$static, o) != -1;
}

function $get_3(this$static, index){
  checkIndex(index, this$static.size);
  return this$static.array[index];
}

function $indexOf_2(this$static, o){
  return $indexOf_3(this$static, o, 0);
}

function $indexOf_3(this$static, o, index){
  for (; index < this$static.size; ++index) {
    if (equalsWithNullCheck(o, this$static.array[index])) {
      return index;
    }
  }
  return -1;
}

function $remove_6(this$static, index){
  var previous;
  previous = $get_3(this$static, index);
  splice_0(this$static.array, index, 1);
  --this$static.size;
  return previous;
}

function $remove_7(this$static, o){
  var i;
  i = $indexOf_2(this$static, o);
  if (i == -1) {
    return false;
  }
  $remove_6(this$static, i);
  return true;
}

function $size_1(this$static){
  return this$static.size;
}

function $toArray(this$static, out){
  var i;
  if (out.length < this$static.size) {
    out = createFrom(out, this$static.size);
  }
  for (i = 0; i < this$static.size; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  if (out.length > this$static.size) {
    setCheck(out, this$static.size, null);
  }
  return out;
}

function add_3(o){
  return $add_3(this, o);
}

function add_4(index, o){
  $add_4(this, index, o);
}

function clear_4(){
  $clear_0(this);
}

function contains_2(o){
  return $contains_0(this, o);
}

function get_5(index){
  return $get_3(this, index);
}

function getClass_171(){
  return Ljava_util_ArrayList_2_classLit;
}

function isEmpty_0(){
  return this.size == 0;
}

function remove_16(index){
  return $remove_6(this, index);
}

function remove_17(o){
  return $remove_7(this, o);
}

function removeRange_0(fromIndex, endIndex){
  var count;
  checkIndex(fromIndex, this.size);
  if (endIndex < fromIndex || endIndex > this.size) {
    indexOutOfBounds(endIndex, this.size);
  }
  count = endIndex - fromIndex;
  splice_0(this.array, fromIndex, count);
  this.size -= count;
}

function size_4(){
  return $size_1(this);
}

function splice_0(array, index, deleteCount){
  array.splice(index, deleteCount);
}

function splice_1(array, index, deleteCount, value){
  array.splice(index, deleteCount, value);
}

function toArray_0(out){
  return $toArray(this, out);
}

function ArrayList(){
}

_ = ArrayList.prototype = new AbstractList;
_.add = add_3;
_.add_0 = add_4;
_.clear = clear_4;
_.contains_0 = contains_2;
_.get_0 = get_5;
_.getClass$ = getClass_171;
_.isEmpty = isEmpty_0;
_.remove_3 = remove_16;
_.remove_1 = remove_17;
_.removeRange = removeRange_0;
_.size_0 = size_4;
_.toArray = toArray_0;
_.typeId$ = 5;
_.size = 0;
function insertionSort(array, low, high, comp){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && comp.compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      setCheck(array, j, array[j - 1]);
      setCheck(array, j - 1, t);
    }
  }
}

function merge(src, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    if (topIdx >= srcHigh || srcLow < srcMid && comp.compare(src[srcLow], src[topIdx]) <= 0) {
      setCheck(dest, destLow++, src[srcLow++]);
    }
     else {
      setCheck(dest, destLow++, src[topIdx++]);
    }
  }
}

function mergeSort(x, fromIndex, toIndex, comp){
  var temp;
  temp = cloneSubrange(x, fromIndex, toIndex);
  mergeSort_0(temp, x, fromIndex, toIndex, -fromIndex, comp);
}

function mergeSort_0(temp, array, low, high, ofs, comp){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high, comp);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs, comp);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs, comp);
  if (comp.compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      setCheck(array, low++, temp[tempLow++]);
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
}

function sort(array){
  mergeSort(array, 0, array.length, natural());
}

function $clinit_290(){
  $clinit_290 = nullMethod;
  NATURAL = $Comparators$1(new Comparators$1);
}

function natural(){
  $clinit_290();
  return NATURAL;
}

var NATURAL;
function $$init_169(){
}

function $Comparators$1(this$static){
  $Object(this$static);
  $$init_169();
  return this$static;
}

function compare_2(o1, o2){
  return dynamicCast(o1, 146).compareTo$(o2);
}

function getClass_172(){
  return Ljava_util_Comparators$1_2_classLit;
}

function Comparators$1(){
}

_ = Comparators$1.prototype = new Object_0;
_.compare = compare_2;
_.getClass$ = getClass_172;
_.typeId$ = 0;
function $$init_170(){
}

function $HashMap(this$static){
  $AbstractHashMap(this$static);
  $$init_170();
  return this$static;
}

function equals_8(value1, value2){
  return equalsWithNullCheck(value1, value2);
}

function getClass_173(){
  return Ljava_util_HashMap_2_classLit;
}

function getHashCode_1(key){
  return ~~hashCode__devirtual$(key);
}

function HashMap(){
}

_ = HashMap.prototype = new AbstractHashMap;
_.equals = equals_8;
_.getClass$ = getClass_173;
_.getHashCode = getHashCode_1;
_.typeId$ = 296;
function $$init_171(){
}

function $HashSet(this$static){
  $AbstractSet(this$static);
  $$init_171();
  this$static.map = $HashMap(new HashMap);
  return this$static;
}

function $add_5(this$static, o){
  var old;
  old = $put(this$static.map, o, this$static);
  return jsEquals(old, null);
}

function $size_2(this$static){
  return $size_0(this$static.map);
}

function add_5(o){
  return $add_5(this, o);
}

function clear_5(){
  $clear(this.map);
}

function contains_3(o){
  return $containsKey(this.map, o);
}

function getClass_174(){
  return Ljava_util_HashSet_2_classLit;
}

function isEmpty_1(){
  return $isEmpty(this.map);
}

function iterator_7(){
  return $keySet(this.map).iterator_0();
}

function remove_18(o){
  return jsNotEquals($remove_5(this.map, o), null);
}

function size_5(){
  return $size_2(this);
}

function HashSet(){
}

_ = HashSet.prototype = new AbstractSet;
_.add = add_5;
_.clear = clear_5;
_.contains_0 = contains_3;
_.getClass$ = getClass_174;
_.isEmpty = isEmpty_1;
_.iterator_0 = iterator_7;
_.remove_1 = remove_18;
_.size_0 = size_5;
_.typeId$ = 297;
_.map = null;
function $$init_172(){
}

function $MapEntryImpl(this$static, key, value){
  $AbstractMapEntry(this$static);
  $$init_172();
  this$static.key = key;
  this$static.value = value;
  return this$static;
}

function $getValue(this$static){
  return this$static.value;
}

function getClass_175(){
  return Ljava_util_MapEntryImpl_2_classLit;
}

function getKey_1(){
  return this.key;
}

function getValue_1(){
  return $getValue(this);
}

function new_$_0(key, value){
  return $MapEntryImpl(new MapEntryImpl, key, value);
}

function setValue_1(value){
  var old;
  old = $getValue(this);
  this.value = value;
  return old;
}

function MapEntryImpl(){
}

_ = MapEntryImpl.prototype = new AbstractMapEntry;
_.getClass$ = getClass_175;
_.getKey = getKey_1;
_.getValue = getValue_1;
_.setValue = setValue_1;
_.typeId$ = 300;
_.key = null;
_.value = null;
function $$init_173(){
}

function $NoSuchElementException(this$static){
  $RuntimeException(this$static);
  $$init_173();
  return this$static;
}

function getClass_176(){
  return Ljava_util_NoSuchElementException_2_classLit;
}

function NoSuchElementException(){
}

_ = NoSuchElementException.prototype = new RuntimeException;
_.getClass$ = getClass_176;
_.typeId$ = 301;
function equalsWithNullCheck(a, b){
  return maskUndefined(a) === maskUndefined(b) || jsNotEquals(a, null) && equals__devirtual$(a, b);
}

function $$init_174(){
}

function $DummyEntryPoint_0(this$static){
  $Object(this$static);
  $$init_174();
  return this$static;
}

function $onModuleLoad_1(){
}

function getClass_177(){
  return Lmx_gwtutils_internal_DummyEntryPoint_2_classLit;
}

function DummyEntryPoint_0(){
}

_ = DummyEntryPoint_0.prototype = new Object_0;
_.getClass$ = getClass_177;
_.typeId$ = 0;
function $$init_175(){
}

function $DummyEntryPoint_1(this$static){
  $Object(this$static);
  $$init_175();
  return this$static;
}

function $onModuleLoad_2(){
}

function getClass_178(){
  return Lnx_core_internal_DummyEntryPoint_2_classLit;
}

function DummyEntryPoint_1(){
}

_ = DummyEntryPoint_1.prototype = new Object_0;
_.getClass$ = getClass_178;
_.typeId$ = 0;
function $clinit_306(){
  $clinit_306 = nullMethod;
  $clinit_231();
}

function $$init_176(){
}

function $DnDTree(this$static, panel){
  $clinit_306();
  $Tree(this$static);
  $$init_176();
  this$static.dragController = $DnDTree$1(new DnDTree$1, panel, false, this$static);
  $setBehaviorDragProxy(this$static.dragController, true);
  $setBehaviorConstrainedToBoundaryPanel(this$static.dragController, true);
  $setBehaviorMultipleSelection(this$static.dragController, false);
  return this$static;
}

function $makeDraggable_2(this$static, item){
  $makeDraggable(this$static.dragController, $getWidget(item));
}

function $makeDroppable(this$static, item){
  var dropper;
  dropper = $DnDTree$2(new DnDTree$2, $getWidget(item), this$static);
  $registerDropController(this$static.dragController, dropper);
}

function getClass_179(){
  return Lnx_ui_gwttree_internal_DnDTree_2_classLit;
}

function DnDTree(){
}

_ = DnDTree.prototype = new Tree;
_.getClass$ = getClass_179;
_.typeId$ = 302;
_.dragController = null;
function $clinit_307(){
  $clinit_307 = nullMethod;
  $clinit_13();
}

function $$init_177(){
}

function $DnDTree$1(this$static, $anonymous0, $anonymous1, this$0){
  $clinit_307();
  this$static , this$0;
  $PickupDragController(this$static, $anonymous0, $anonymous1);
  $$init_177();
  return this$static;
}

function getClass_180(){
  return Lnx_ui_gwttree_internal_DnDTree$1_2_classLit;
}

function restoreSelectedWidgetsLocation_0(){
}

function restoreSelectedWidgetsStyle_0(){
}

function saveSelectedWidgetsLocationAndStyle_0(){
}

function DnDTree$1(){
}

_ = DnDTree$1.prototype = new PickupDragController;
_.getClass$ = getClass_180;
_.restoreSelectedWidgetsLocation = restoreSelectedWidgetsLocation_0;
_.restoreSelectedWidgetsStyle = restoreSelectedWidgetsStyle_0;
_.saveSelectedWidgetsLocationAndStyle = saveSelectedWidgetsLocationAndStyle_0;
_.typeId$ = 0;
function $$init_178(){
}

function $DnDTree$2(this$static, $anonymous0, this$0){
  this$static , this$0;
  $SimpleDropController(this$static, $anonymous0);
  $$init_178();
  return this$static;
}

function getClass_181(){
  return Lnx_ui_gwttree_internal_DnDTree$2_2_classLit;
}

function onDrop_1(context){
}

function DnDTree$2(){
}

_ = DnDTree$2.prototype = new SimpleDropController;
_.getClass$ = getClass_181;
_.onDrop = onDrop_1;
_.typeId$ = 303;
function $$init_179(){
}

function $GwtTreeEntryPoint(this$static){
  $Object(this$static);
  $$init_179();
  return this$static;
}

function $onModuleLoad_3(){
  var folder, i, leaf, tree;
  tree = $DnDTree(new DnDTree, get_1());
  for (i = 1; i <= 3; ++i) {
    leaf = $addItem(tree, $Label_0(new Label, 'Leaf ' + i));
    $makeDraggable_2(tree, leaf);
  }
  for (i = 1; i <= 3; ++i) {
    folder = $addItem(tree, $Label_0(new Label, 'Folder ' + i));
    $makeDraggable_2(tree, folder);
    $makeDroppable(tree, folder);
  }
  $add_0(get_2('treecontainer'), $Label_0(new Label, 'Tree'));
  $add_0(get_2('treecontainer'), tree);
}

function getClass_182(){
  return Lnx_ui_gwttree_internal_GwtTreeEntryPoint_2_classLit;
}

function GwtTreeEntryPoint(){
}

_ = GwtTreeEntryPoint.prototype = new Object_0;
_.getClass$ = getClass_182;
_.typeId$ = 0;
function $$init_180(){
}

function $DummyEntryPoint_2(this$static){
  $Object(this$static);
  $$init_180();
  return this$static;
}

function $onModuleLoad_4(){
}

function getClass_183(){
  return Lnx_ui_internal_DummyEntryPoint_2_classLit;
}

function DummyEntryPoint_2(){
}

_ = DummyEntryPoint_2.prototype = new Object_0;
_.getClass$ = getClass_183;
_.typeId$ = 0;
function $$init_181(){
}

function $DummyEntryPoint_3(this$static){
  $Object(this$static);
  $$init_181();
  return this$static;
}

function $onModuleLoad_5(){
}

function getClass_184(){
  return Lorg_hamcrest_DummyEntryPoint_2_classLit;
}

function DummyEntryPoint_3(){
}

_ = DummyEntryPoint_3.prototype = new Object_0;
_.getClass$ = getClass_184;
_.typeId$ = 0;
var $entry = registerEntry();
function gwtOnLoad(errFn, modName, modBase){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      $entry(init_0)();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    $entry(init_0)();
  }
}

var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object', 'Object_0', null), Lcom_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.drop.', 'AbstractDropController', 'AbstractDropController', Ljava_lang_Object_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_drop_AbstractPositioningDropController_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.drop.', 'AbstractPositioningDropController', 'AbstractPositioningDropController', Lcom_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.drop.', 'AbsolutePositionDropController', 'AbsolutePositionDropController', Lcom_allen_1sauer_gwt_dnd_client_drop_AbstractPositioningDropController_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController$Draggable_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.drop.', 'AbsolutePositionDropController$Draggable', 'AbsolutePositionDropController$Draggable', Ljava_lang_Object_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_drop_BoundaryDropController_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.drop.', 'BoundaryDropController', 'BoundaryDropController', Lcom_allen_1sauer_gwt_dnd_client_drop_AbsolutePositionDropController_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_drop_SimpleDropController_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.drop.', 'SimpleDropController', 'SimpleDropController', Lcom_allen_1sauer_gwt_dnd_client_drop_AbstractDropController_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImpl_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.util.impl.', 'DOMUtilImpl', 'DOMUtilImpl', Ljava_lang_Object_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.util.impl.', 'DOMUtilImplStandard', 'DOMUtilImplStandard', Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImpl_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplOpera_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.util.impl.', 'DOMUtilImplOpera', 'DOMUtilImplOpera', Lcom_allen_1sauer_gwt_dnd_client_util_impl_DOMUtilImplStandard_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_util_AbstractArea_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.util.', 'AbstractArea', 'AbstractArea', Ljava_lang_Object_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_util_AbstractLocation_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.util.', 'AbstractLocation', 'AbstractLocation', Ljava_lang_Object_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_util_CoordinateLocation_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.util.', 'CoordinateLocation', 'CoordinateLocation', Lcom_allen_1sauer_gwt_dnd_client_util_AbstractLocation_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_util_DragEntryPoint_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.util.', 'DragEntryPoint', 'DragEntryPoint', Ljava_lang_Object_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_util_WidgetArea_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.util.', 'WidgetArea', 'WidgetArea', Lcom_allen_1sauer_gwt_dnd_client_util_AbstractArea_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_util_WidgetLocation_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.util.', 'WidgetLocation', 'WidgetLocation', Lcom_allen_1sauer_gwt_dnd_client_util_AbstractLocation_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_util_com_1allen_1sauer_1gwt_1dnd_1client_1util_1DragClientBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.util.', 'com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator', 'com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator', Ljava_lang_Object_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_util_com_1allen_1sauer_1gwt_1dnd_1client_1util_1DragClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.util.', 'com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator$1', 'com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator$1', Ljava_lang_Object_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_AbstractDragController_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.', 'AbstractDragController', 'AbstractDragController', Ljava_lang_Object_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_DragContext_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.', 'DragContext', 'DragContext', Ljava_lang_Object_2_classLit), Ljava_util_EventObject_2_classLit = createForClass('java.util.', 'EventObject', 'EventObject', Ljava_lang_Object_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_DragEvent_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.', 'DragEvent', 'DragEvent', Ljava_util_EventObject_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_DragEndEvent_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.', 'DragEndEvent', 'DragEndEvent', Lcom_allen_1sauer_gwt_dnd_client_DragEvent_2_classLit), Ljava_util_AbstractCollection_2_classLit = createForClass('java.util.', 'AbstractCollection', 'AbstractCollection', Ljava_lang_Object_2_classLit), Ljava_util_AbstractList_2_classLit = createForClass('java.util.', 'AbstractList', 'AbstractList', Ljava_util_AbstractCollection_2_classLit), Ljava_util_ArrayList_2_classLit = createForClass('java.util.', 'ArrayList', 'ArrayList', Ljava_util_AbstractList_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_DragStartEvent_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.', 'DragStartEvent', 'DragStartEvent', Lcom_allen_1sauer_gwt_dnd_client_DragEvent_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.', 'DropControllerCollection$Candidate', 'DropControllerCollection$Candidate', Ljava_lang_Object_2_classLit), _3Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_2_classLit = createForArray('[Lcom.allen_sauer.gwt.dnd.client.', 'DropControllerCollection$Candidate;', 'Array_0', Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection$Candidate_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_DropControllerCollection_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.', 'DropControllerCollection', 'DropControllerCollection', Ljava_lang_Object_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.', 'MouseDragHandler', 'MouseDragHandler', Ljava_lang_Object_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler$RegisteredDraggable_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.', 'MouseDragHandler$RegisteredDraggable', 'MouseDragHandler$RegisteredDraggable', Ljava_lang_Object_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_MouseDragHandler$1_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.', 'MouseDragHandler$1', 'MouseDragHandler$1', Ljava_lang_Object_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.', 'PickupDragController', 'PickupDragController', Lcom_allen_1sauer_gwt_dnd_client_AbstractDragController_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_PickupDragController$SavedWidgetInfo_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.', 'PickupDragController$SavedWidgetInfo', 'PickupDragController$SavedWidgetInfo', Ljava_lang_Object_2_classLit), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable', 'Throwable', Ljava_lang_Object_2_classLit), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception', 'Exception', Ljava_lang_Throwable_2_classLit), Lcom_allen_1sauer_gwt_dnd_client_VetoDragException_2_classLit = createForClass('com.allen_sauer.gwt.dnd.client.', 'VetoDragException', 'VetoDragException', Ljava_lang_Exception_2_classLit), Lcom_google_common_DummyEntryPoint_2_classLit = createForClass('com.google.common.', 'DummyEntryPoint', 'DummyEntryPoint', Ljava_lang_Object_2_classLit), Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation', 'Animation', Ljava_lang_Object_2_classLit), _3Lcom_google_gwt_animation_client_Animation_2_classLit = createForArray('[Lcom.google.gwt.animation.client.', 'Animation;', 'Array_0', Lcom_google_gwt_animation_client_Animation_2_classLit), Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer', 'Timer', Ljava_lang_Object_2_classLit), Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation$1', 'Animation$1', Lcom_google_gwt_user_client_Timer_2_classLit), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException', 'RuntimeException', Ljava_lang_Exception_2_classLit), Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client.', 'Scheduler', 'Scheduler', Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl', 'SchedulerImpl', Lcom_google_gwt_core_client_Scheduler_2_classLit), Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl$1', 'SchedulerImpl$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl$2', 'SchedulerImpl$2', Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$Collector', 'StackTraceCreator$Collector', Ljava_lang_Object_2_classLit), Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang.', 'StackTraceElement', 'StackTraceElement', Ljava_lang_Object_2_classLit), _3Ljava_lang_StackTraceElement_2_classLit = createForArray('[Ljava.lang.', 'StackTraceElement;', 'Array_0', Ljava_lang_StackTraceElement_2_classLit), Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$CollectorMoz', 'StackTraceCreator$CollectorMoz', Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit), Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorOpera_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$CollectorOpera', 'StackTraceCreator$CollectorOpera', Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2_classLit), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException', 'JavaScriptException', Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$', 'JavaScriptObject', Ljava_lang_Object_2_classLit), Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImpl', 'DOMImpl', Ljava_lang_Object_2_classLit), Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplStandard', 'DOMImplStandard', Lcom_google_gwt_dom_client_DOMImpl_2_classLit), Lcom_google_gwt_dom_client_DOMImplOpera_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplOpera', 'DOMImplOpera', Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String', 'String_0', Ljava_lang_Object_2_classLit), Ljava_lang_Enum_2_classLit = createForClass('java.lang.', 'Enum', 'Enum', Ljava_lang_Object_2_classLit), Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit', 'Style$Unit', Ljava_lang_Enum_2_classLit, values_1), _3Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Unit;', 'Array_0', Lcom_google_gwt_dom_client_Style$Unit_2_classLit), Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$1', 'Style$Unit$1', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$2', 'Style$Unit$2', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$3', 'Style$Unit$3', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$4', 'Style$Unit$4', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$5', 'Style$Unit$5', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$6', 'Style$Unit$6', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$7', 'Style$Unit$7', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$8', 'Style$Unit$8', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$9', 'Style$Unit$9', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$BorderStyle', 'Style$BorderStyle', Ljava_lang_Enum_2_classLit, values_0), _3Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$BorderStyle;', 'Array_0', Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit), Lcom_google_gwt_dom_client_Style$BorderStyle$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$BorderStyle$1', 'Style$BorderStyle$1', Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$BorderStyle$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$BorderStyle$2', 'Style$BorderStyle$2', Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$BorderStyle$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$BorderStyle$3', 'Style$BorderStyle$3', Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$BorderStyle$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$BorderStyle$4', 'Style$BorderStyle$4', Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit, null), Lcom_google_gwt_dom_client_Style$BorderStyle$5_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$BorderStyle$5', 'Style$BorderStyle$5', Lcom_google_gwt_dom_client_Style$BorderStyle_2_classLit, null), Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2_classLit = createForClass('com.google.gwt.dom.client.', 'StyleInjector$StyleInjectorImpl', 'StyleInjector$StyleInjectorImpl', Ljava_lang_Object_2_classLit), Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client.', 'StyleInjector$1', 'StyleInjector$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent', 'GwtEvent', Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent', 'DomEvent', Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent$Type', 'GwtEvent$Type', Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent$Type', 'DomEvent$Type', Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit), Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseEvent', 'MouseEvent', Lcom_google_gwt_event_dom_client_DomEvent_2_classLit), Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseDownEvent', 'MouseDownEvent', Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit), Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseMoveEvent', 'MouseMoveEvent', Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit), Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOutEvent', 'MouseOutEvent', Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit), Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseUpEvent', 'MouseUpEvent', Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit), Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'PrivateMap', 'PrivateMap', Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'CloseEvent', 'CloseEvent', Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_event_logical_shared_OpenEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'OpenEvent', 'OpenEvent', Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_event_logical_shared_SelectionEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'SelectionEvent', 'SelectionEvent', Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2_classLit = createForClass('com.google.gwt.event.shared.', 'DefaultHandlerRegistration', 'DefaultHandlerRegistration', Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager', 'HandlerManager', Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$HandlerRegistry', 'HandlerManager$HandlerRegistry', Ljava_lang_Object_2_classLit), Lcom_google_gwt_event_shared_HandlerManager$1_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$1', 'HandlerManager$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_impl_CldrImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'CldrImpl', 'CldrImpl', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'LocaleInfoImpl', 'LocaleInfoImpl', Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_1shared_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'LocaleInfoImpl_shared', 'LocaleInfoImpl_shared', Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_2_classLit), Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_1_2_classLit = createForClass('com.google.gwt.i18n.client.impl.', 'LocaleInfoImpl_', 'LocaleInfoImpl_', Lcom_google_gwt_i18n_client_impl_LocaleInfoImpl_1shared_2_classLit), Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client.', 'HasDirection$Direction', 'HasDirection$Direction', Ljava_lang_Enum_2_classLit, values_2), _3Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForArray('[Lcom.google.gwt.i18n.client.', 'HasDirection$Direction;', 'Array_0', Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit), Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit = createForClass('com.google.gwt.i18n.client.', 'LocaleInfo', 'LocaleInfo', Ljava_lang_Object_2_classLit), D_classLit = createForPrimitive('', 'double', ' D'), _3D_classLit = createForArray('', '[D', 'Array_0', D_classLit), _3_3D_classLit = createForArray('', '[[D', 'Array_0', _3D_classLit), Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit = createForClass('com.google.gwt.resources.client.impl.', 'ImageResourcePrototype', 'ImageResourcePrototype', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_impl_DOMImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'DOMImpl', 'DOMImpl_0', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_impl_DOMImplStandard_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'DOMImplStandard', 'DOMImplStandard_0', Lcom_google_gwt_user_client_impl_DOMImpl_2_classLit), Lcom_google_gwt_user_client_impl_DOMImplOpera_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'DOMImplOpera', 'DOMImplOpera_0', Lcom_google_gwt_user_client_impl_DOMImplStandard_2_classLit), Lcom_google_gwt_user_client_impl_WindowImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'WindowImpl', 'WindowImpl', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_impl_ClippedImageImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'ClippedImageImpl', 'ClippedImageImpl', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbstractImagePrototype', 'AbstractImagePrototype', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'ClippedImagePrototype', 'ClippedImagePrototype', Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit), Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'FocusImpl', 'FocusImpl', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'UIObject', 'UIObject', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Widget', 'Widget', Lcom_google_gwt_user_client_ui_UIObject_2_classLit), Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Panel', 'Panel', Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ComplexPanel', 'ComplexPanel', Lcom_google_gwt_user_client_ui_Panel_2_classLit), Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbsolutePanel', 'AbsolutePanel', Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit), _3Ljava_lang_Throwable_2_classLit = createForArray('[Ljava.lang.', 'Throwable;', 'Array_0', Ljava_lang_Throwable_2_classLit), Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException', 'AttachDetachException', Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$1', 'AttachDetachException$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$2', 'AttachDetachException$2', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel', 'SimplePanel', Lcom_google_gwt_user_client_ui_Panel_2_classLit), _3Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'Widget;', 'Array_0', Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_FocusPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusPanel', 'FocusPanel', Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit), Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Label', 'Label', Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$HorizontalAlignmentConstant', 'HasHorizontalAlignment$HorizontalAlignmentConstant', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image', 'Image_0', Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$State', 'Image$State', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_Image$ClippedState_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$ClippedState', 'Image$ClippedState', Lcom_google_gwt_user_client_ui_Image$State_2_classLit), Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel', 'RootPanel', Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit), Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$DefaultRootPanel', 'RootPanel$DefaultRootPanel', Lcom_google_gwt_user_client_ui_RootPanel_2_classLit), Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$1', 'RootPanel$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$2', 'RootPanel$2', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel$1', 'SimplePanel$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_Tree_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Tree', 'Tree', Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lcom_google_gwt_user_client_ui_Tree$ImageAdapter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Tree$ImageAdapter', 'Tree$ImageAdapter', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_TreeItem_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TreeItem', 'TreeItem', Lcom_google_gwt_user_client_ui_UIObject_2_classLit), Lcom_google_gwt_user_client_ui_Tree$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Tree$1', 'Tree$1', Lcom_google_gwt_user_client_ui_TreeItem_2_classLit), Lcom_google_gwt_user_client_ui_TreeItem$TreeItemImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TreeItem$TreeItemImpl', 'TreeItem$TreeItemImpl', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_TreeItem$TreeItemAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TreeItem$TreeItemAnimation', 'TreeItem$TreeItemAnimation', Lcom_google_gwt_animation_client_Animation_2_classLit), Lcom_google_gwt_user_client_ui_UIObject$DebugIdImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'UIObject$DebugIdImpl', 'UIObject$DebugIdImpl', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection', 'WidgetCollection', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection$WidgetIterator', 'WidgetCollection$WidgetIterator', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_WidgetIterators$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetIterators$1', 'WidgetIterators$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_ui_com_1google_1gwt_1user_1client_1ui_1Tree_1Resources_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'com_google_gwt_user_client_ui_Tree_Resources_default_InlineClientBundleGenerator', 'com_google_gwt_user_client_ui_Tree_Resources_default_InlineClientBundleGenerator', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_CommandCanceledException_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandCanceledException', 'CommandCanceledException', Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_user_client_CommandExecutor_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor', 'CommandExecutor', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$CircularIterator', 'CommandExecutor$CircularIterator', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$1', 'CommandExecutor$1', Lcom_google_gwt_user_client_Timer_2_classLit), Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$2', 'CommandExecutor$2', Lcom_google_gwt_user_client_Timer_2_classLit), Lcom_google_gwt_user_client_IncrementalCommandCanceledException_2_classLit = createForClass('com.google.gwt.user.client.', 'IncrementalCommandCanceledException', 'IncrementalCommandCanceledException', Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_user_client_Timer$1_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer$1', 'Timer$1', Ljava_lang_Object_2_classLit), Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$ClosingEvent', 'Window$ClosingEvent', Lcom_google_gwt_event_shared_GwtEvent_2_classLit), Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$WindowHandlers', 'Window$WindowHandlers', Lcom_google_gwt_event_shared_HandlerManager_2_classLit), Ljava_io_OutputStream_2_classLit = createForClass('java.io.', 'OutputStream', 'OutputStream', Ljava_lang_Object_2_classLit), Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io.', 'FilterOutputStream', 'FilterOutputStream', Ljava_io_OutputStream_2_classLit), Ljava_io_PrintStream_2_classLit = createForClass('java.io.', 'PrintStream', 'PrintStream', Ljava_io_FilterOutputStream_2_classLit), Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException', 'IndexOutOfBoundsException', Ljava_lang_RuntimeException_2_classLit), Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException', 'ArrayStoreException', Ljava_lang_RuntimeException_2_classLit), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class', 'Class', Ljava_lang_Object_2_classLit), Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException', 'ClassCastException', Ljava_lang_RuntimeException_2_classLit), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException', 'IllegalArgumentException', Ljava_lang_RuntimeException_2_classLit), Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException', 'IllegalStateException', Ljava_lang_RuntimeException_2_classLit), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException', 'NullPointerException', Ljava_lang_RuntimeException_2_classLit), Ljava_lang_String$1_2_classLit = createForClass('java.lang.', 'String$1', 'String$1', Ljava_lang_Object_2_classLit), Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang.', 'UnsupportedOperationException', 'UnsupportedOperationException', Ljava_lang_RuntimeException_2_classLit), _3Ljava_lang_Object_2_classLit = createForArray('[Ljava.lang.', 'Object;', 'Array_0', Ljava_lang_Object_2_classLit), Ljava_util_AbstractMap_2_classLit = createForClass('java.util.', 'AbstractMap', 'AbstractMap', Ljava_lang_Object_2_classLit), Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util.', 'AbstractHashMap', 'AbstractHashMap', Ljava_util_AbstractMap_2_classLit), Ljava_util_AbstractSet_2_classLit = createForClass('java.util.', 'AbstractSet', 'AbstractSet', Ljava_util_AbstractCollection_2_classLit), Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySet', 'AbstractHashMap$EntrySet', Ljava_util_AbstractSet_2_classLit), Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySetIterator', 'AbstractHashMap$EntrySetIterator', Ljava_lang_Object_2_classLit), Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util.', 'AbstractMapEntry', 'AbstractMapEntry', Ljava_lang_Object_2_classLit), Ljava_util_AbstractHashMap$MapEntryNull_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryNull', 'AbstractHashMap$MapEntryNull', Ljava_util_AbstractMapEntry_2_classLit), Ljava_util_AbstractHashMap$MapEntryString_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryString', 'AbstractHashMap$MapEntryString', Ljava_util_AbstractMapEntry_2_classLit), Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$IteratorImpl', 'AbstractList$IteratorImpl', Ljava_lang_Object_2_classLit), Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$ListIteratorImpl', 'AbstractList$ListIteratorImpl', Ljava_util_AbstractList$IteratorImpl_2_classLit), Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util.', 'AbstractMap$1', 'AbstractMap$1', Ljava_util_AbstractSet_2_classLit), Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util.', 'AbstractMap$1$1', 'AbstractMap$1$1', Ljava_lang_Object_2_classLit), Ljava_util_Comparators$1_2_classLit = createForClass('java.util.', 'Comparators$1', 'Comparators$1', Ljava_lang_Object_2_classLit), Ljava_util_HashMap_2_classLit = createForClass('java.util.', 'HashMap', 'HashMap', Ljava_util_AbstractHashMap_2_classLit), Ljava_util_HashSet_2_classLit = createForClass('java.util.', 'HashSet', 'HashSet', Ljava_util_AbstractSet_2_classLit), Ljava_util_MapEntryImpl_2_classLit = createForClass('java.util.', 'MapEntryImpl', 'MapEntryImpl', Ljava_util_AbstractMapEntry_2_classLit), Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util.', 'NoSuchElementException', 'NoSuchElementException', Ljava_lang_RuntimeException_2_classLit), Lmx_gwtutils_internal_DummyEntryPoint_2_classLit = createForClass('mx.gwtutils.internal.', 'DummyEntryPoint', 'DummyEntryPoint_0', Ljava_lang_Object_2_classLit), Lnx_core_internal_DummyEntryPoint_2_classLit = createForClass('nx.core.internal.', 'DummyEntryPoint', 'DummyEntryPoint_1', Ljava_lang_Object_2_classLit), Lnx_ui_gwttree_internal_DnDTree_2_classLit = createForClass('nx.ui.gwttree.internal.', 'DnDTree', 'DnDTree', Lcom_google_gwt_user_client_ui_Tree_2_classLit), Lnx_ui_gwttree_internal_DnDTree$1_2_classLit = createForClass('nx.ui.gwttree.internal.', 'DnDTree$1', 'DnDTree$1', Lcom_allen_1sauer_gwt_dnd_client_PickupDragController_2_classLit), Lnx_ui_gwttree_internal_DnDTree$2_2_classLit = createForClass('nx.ui.gwttree.internal.', 'DnDTree$2', 'DnDTree$2', Lcom_allen_1sauer_gwt_dnd_client_drop_SimpleDropController_2_classLit), Lnx_ui_gwttree_internal_GwtTreeEntryPoint_2_classLit = createForClass('nx.ui.gwttree.internal.', 'GwtTreeEntryPoint', 'GwtTreeEntryPoint', Ljava_lang_Object_2_classLit), Lnx_ui_internal_DummyEntryPoint_2_classLit = createForClass('nx.ui.internal.', 'DummyEntryPoint', 'DummyEntryPoint_2', Ljava_lang_Object_2_classLit), Lorg_hamcrest_DummyEntryPoint_2_classLit = createForClass('org.hamcrest.', 'DummyEntryPoint', 'DummyEntryPoint_3', Ljava_lang_Object_2_classLit);
$stats && $stats({moduleName:'nxuigwttree',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
if (nxuigwttree) nxuigwttree.onScriptLoad(gwtOnLoad);
})();
