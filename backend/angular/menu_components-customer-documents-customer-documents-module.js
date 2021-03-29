(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu_components-customer-documents-customer-documents-module"],{

/***/ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngx-webcam/fesm5/ngx-webcam.js ***!
  \*****************************************************/
/*! exports provided: WebcamComponent, WebcamImage, WebcamInitError, WebcamMirrorProperties, WebcamModule, WebcamUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamComponent", function() { return WebcamComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamImage", function() { return WebcamImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamInitError", function() { return WebcamInitError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamMirrorProperties", function() { return WebcamMirrorProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamModule", function() { return WebcamModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamUtil", function() { return WebcamUtil; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





/**
 * Container class for a captured webcam image
 * @author basst314, davidshen84
 */
var WebcamImage = /** @class */ (function () {
    function WebcamImage(imageAsDataUrl, mimeType, imageData) {
        this._mimeType = null;
        this._imageAsBase64 = null;
        this._imageAsDataUrl = null;
        this._imageData = null;
        this._mimeType = mimeType;
        this._imageAsDataUrl = imageAsDataUrl;
        this._imageData = imageData;
    }
    /**
     * Extracts the Base64 data out of the given dataUrl.
     * @param dataUrl the given dataUrl
     * @param mimeType the mimeType of the data
     */
    WebcamImage.getDataFromDataUrl = function (dataUrl, mimeType) {
        return dataUrl.replace("data:" + mimeType + ";base64,", '');
    };
    Object.defineProperty(WebcamImage.prototype, "imageAsBase64", {
        /**
         * Get the base64 encoded image data
         * @returns base64 data of the image
         */
        get: function () {
            return this._imageAsBase64 ? this._imageAsBase64
                : this._imageAsBase64 = WebcamImage.getDataFromDataUrl(this._imageAsDataUrl, this._mimeType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamImage.prototype, "imageAsDataUrl", {
        /**
         * Get the encoded image as dataUrl
         * @returns the dataUrl of the image
         */
        get: function () {
            return this._imageAsDataUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamImage.prototype, "imageData", {
        /**
         * Get the ImageData object associated with the canvas' 2d context.
         * @returns the ImageData of the canvas's 2d context.
         */
        get: function () {
            return this._imageData;
        },
        enumerable: true,
        configurable: true
    });
    return WebcamImage;
}());

var WebcamUtil = /** @class */ (function () {
    function WebcamUtil() {
    }
    /**
     * Lists available videoInput devices
     * @returns a list of media device info.
     */
    WebcamUtil.getAvailableVideoInputs = function () {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return Promise.reject('enumerateDevices() not supported.');
        }
        return new Promise(function (resolve, reject) {
            navigator.mediaDevices.enumerateDevices()
                .then(function (devices) {
                resolve(devices.filter(function (device) { return device.kind === 'videoinput'; }));
            })
                .catch(function (err) {
                reject(err.message || err);
            });
        });
    };
    return WebcamUtil;
}());

var WebcamComponent = /** @class */ (function () {
    function WebcamComponent() {
        /** Defines the max width of the webcam area in px */
        this.width = 640;
        /** Defines the max height of the webcam area in px */
        this.height = 480;
        /** Defines base constraints to apply when requesting video track from UserMedia */
        this.videoOptions = WebcamComponent_1.DEFAULT_VIDEO_OPTIONS;
        /** Flag to enable/disable camera switch. If enabled, a switch icon will be displayed if multiple cameras were found */
        this.allowCameraSwitch = true;
        /** Flag to control whether an ImageData object is stored into the WebcamImage object. */
        this.captureImageData = false;
        /** The image type to use when capturing snapshots */
        this.imageType = WebcamComponent_1.DEFAULT_IMAGE_TYPE;
        /** The image quality to use when capturing snapshots (number between 0 and 1) */
        this.imageQuality = WebcamComponent_1.DEFAULT_IMAGE_QUALITY;
        /** EventEmitter which fires when an image has been captured */
        this.imageCapture = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits a mediaError if webcam cannot be initialized (e.g. missing user permissions) */
        this.initError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits when the webcam video was clicked */
        this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits the active deviceId after the active video device was switched */
        this.cameraSwitched = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** available video devices */
        this.availableVideoInputs = [];
        /** Indicates whether the video device is ready to be switched */
        this.videoInitialized = false;
        /** Index of active video in availableVideoInputs */
        this.activeVideoInputIndex = -1;
        /** MediaStream object in use for streaming UserMedia data */
        this.mediaStream = null;
        /** width and height of the active video stream */
        this.activeVideoSettings = null;
    }
    WebcamComponent_1 = WebcamComponent;
    Object.defineProperty(WebcamComponent.prototype, "trigger", {
        /**
         * If the given Observable emits, an image will be captured and emitted through 'imageCapture' EventEmitter
         */
        set: function (trigger) {
            var _this = this;
            if (this.triggerSubscription) {
                this.triggerSubscription.unsubscribe();
            }
            // Subscribe to events from this Observable to take snapshots
            this.triggerSubscription = trigger.subscribe(function () {
                _this.takeSnapshot();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "switchCamera", {
        /**
         * If the given Observable emits, the active webcam will be switched to the one indicated by the emitted value.
         * @param switchCamera Indicates which webcam to switch to
         *   true: cycle forwards through available webcams
         *   false: cycle backwards through available webcams
         *   string: activate the webcam with the given id
         */
        set: function (switchCamera) {
            var _this = this;
            if (this.switchCameraSubscription) {
                this.switchCameraSubscription.unsubscribe();
            }
            // Subscribe to events from this Observable to switch video device
            this.switchCameraSubscription = switchCamera.subscribe(function (value) {
                if (typeof value === 'string') {
                    // deviceId was specified
                    _this.switchToVideoInput(value);
                }
                else {
                    // direction was specified
                    _this.rotateVideoInput(value !== false);
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get MediaTrackConstraints to request streaming the given device
     * @param deviceId
     * @param baseMediaTrackConstraints base constraints to merge deviceId-constraint into
     * @returns
     */
    WebcamComponent.getMediaConstraintsForDevice = function (deviceId, baseMediaTrackConstraints) {
        var result = baseMediaTrackConstraints ? baseMediaTrackConstraints : this.DEFAULT_VIDEO_OPTIONS;
        if (deviceId) {
            result.deviceId = { exact: deviceId };
        }
        return result;
    };
    /**
     * Tries to harvest the deviceId from the given mediaStreamTrack object.
     * Browsers populate this object differently; this method tries some different approaches
     * to read the id.
     * @param mediaStreamTrack
     * @returns deviceId if found in the mediaStreamTrack
     */
    WebcamComponent.getDeviceIdFromMediaStreamTrack = function (mediaStreamTrack) {
        if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().deviceId) {
            return mediaStreamTrack.getSettings().deviceId;
        }
        else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().deviceId) {
            var deviceIdObj = mediaStreamTrack.getConstraints().deviceId;
            return WebcamComponent_1.getValueFromConstrainDOMString(deviceIdObj);
        }
    };
    /**
     * Tries to harvest the facingMode from the given mediaStreamTrack object.
     * Browsers populate this object differently; this method tries some different approaches
     * to read the value.
     * @param mediaStreamTrack
     * @returns facingMode if found in the mediaStreamTrack
     */
    WebcamComponent.getFacingModeFromMediaStreamTrack = function (mediaStreamTrack) {
        if (mediaStreamTrack) {
            if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().facingMode) {
                return mediaStreamTrack.getSettings().facingMode;
            }
            else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().facingMode) {
                var facingModeConstraint = mediaStreamTrack.getConstraints().facingMode;
                return WebcamComponent_1.getValueFromConstrainDOMString(facingModeConstraint);
            }
        }
    };
    /**
     * Determines whether the given mediaStreamTrack claims itself as user facing
     * @param mediaStreamTrack
     */
    WebcamComponent.isUserFacing = function (mediaStreamTrack) {
        var facingMode = WebcamComponent_1.getFacingModeFromMediaStreamTrack(mediaStreamTrack);
        return facingMode ? 'user' === facingMode.toLowerCase() : false;
    };
    /**
     * Extracts the value from the given ConstrainDOMString
     * @param constrainDOMString
     */
    WebcamComponent.getValueFromConstrainDOMString = function (constrainDOMString) {
        if (constrainDOMString) {
            if (constrainDOMString instanceof String) {
                return String(constrainDOMString);
            }
            else if (Array.isArray(constrainDOMString) && Array(constrainDOMString).length > 0) {
                return String(constrainDOMString[0]);
            }
            else if (typeof constrainDOMString === 'object') {
                if (constrainDOMString['exact']) {
                    return String(constrainDOMString['exact']);
                }
                else if (constrainDOMString['ideal']) {
                    return String(constrainDOMString['ideal']);
                }
            }
        }
        return null;
    };
    WebcamComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.detectAvailableDevices()
            .then(function () {
            // start video
            _this.switchToVideoInput(null);
        })
            .catch(function (err) {
            _this.initError.next({ message: err });
            // fallback: still try to load webcam, even if device enumeration failed
            _this.switchToVideoInput(null);
        });
    };
    WebcamComponent.prototype.ngOnDestroy = function () {
        this.stopMediaTracks();
        this.unsubscribeFromSubscriptions();
    };
    /**
     * Takes a snapshot of the current webcam's view and emits the image as an event
     */
    WebcamComponent.prototype.takeSnapshot = function () {
        // set canvas size to actual video size
        var _video = this.nativeVideoElement;
        var dimensions = { width: this.width, height: this.height };
        if (_video.videoWidth) {
            dimensions.width = _video.videoWidth;
            dimensions.height = _video.videoHeight;
        }
        var _canvas = this.canvas.nativeElement;
        _canvas.width = dimensions.width;
        _canvas.height = dimensions.height;
        // paint snapshot image to canvas
        var context2d = _canvas.getContext('2d');
        context2d.drawImage(_video, 0, 0);
        // read canvas content as image
        var mimeType = this.imageType ? this.imageType : WebcamComponent_1.DEFAULT_IMAGE_TYPE;
        var quality = this.imageQuality ? this.imageQuality : WebcamComponent_1.DEFAULT_IMAGE_QUALITY;
        var dataUrl = _canvas.toDataURL(mimeType, quality);
        // get the ImageData object from the canvas' context.
        var imageData = null;
        if (this.captureImageData) {
            imageData = context2d.getImageData(0, 0, _canvas.width, _canvas.height);
        }
        this.imageCapture.next(new WebcamImage(dataUrl, mimeType, imageData));
    };
    /**
     * Switches to the next/previous video device
     * @param forward
     */
    WebcamComponent.prototype.rotateVideoInput = function (forward) {
        if (this.availableVideoInputs && this.availableVideoInputs.length > 1) {
            var increment = forward ? 1 : (this.availableVideoInputs.length - 1);
            var nextInputIndex = (this.activeVideoInputIndex + increment) % this.availableVideoInputs.length;
            this.switchToVideoInput(this.availableVideoInputs[nextInputIndex].deviceId);
        }
    };
    /**
     * Switches the camera-view to the specified video device
     */
    WebcamComponent.prototype.switchToVideoInput = function (deviceId) {
        this.videoInitialized = false;
        this.stopMediaTracks();
        this.initWebcam(deviceId, this.videoOptions);
    };
    /**
     * Event-handler for video resize event.
     * Triggers Angular change detection so that new video dimensions get applied
     */
    WebcamComponent.prototype.videoResize = function () {
        // here to trigger Angular change detection
    };
    Object.defineProperty(WebcamComponent.prototype, "videoWidth", {
        get: function () {
            var videoRatio = this.getVideoAspectRatio();
            return Math.min(this.width, this.height * videoRatio);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "videoHeight", {
        get: function () {
            var videoRatio = this.getVideoAspectRatio();
            return Math.min(this.height, this.width / videoRatio);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "videoStyleClasses", {
        get: function () {
            var classes = '';
            if (this.isMirrorImage()) {
                classes += 'mirrored ';
            }
            return classes.trim();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamComponent.prototype, "nativeVideoElement", {
        get: function () {
            return this.video.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the video aspect ratio of the active video stream
     */
    WebcamComponent.prototype.getVideoAspectRatio = function () {
        // calculate ratio from video element dimensions if present
        var videoElement = this.nativeVideoElement;
        if (videoElement.videoWidth && videoElement.videoWidth > 0 &&
            videoElement.videoHeight && videoElement.videoHeight > 0) {
            return videoElement.videoWidth / videoElement.videoHeight;
        }
        // nothing present - calculate ratio based on width/height params
        return this.width / this.height;
    };
    /**
     * Init webcam live view
     */
    WebcamComponent.prototype.initWebcam = function (deviceId, userVideoTrackConstraints) {
        var _this = this;
        var _video = this.nativeVideoElement;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // merge deviceId -> userVideoTrackConstraints
            var videoTrackConstraints = WebcamComponent_1.getMediaConstraintsForDevice(deviceId, userVideoTrackConstraints);
            navigator.mediaDevices.getUserMedia({ video: videoTrackConstraints })
                .then(function (stream) {
                _this.mediaStream = stream;
                _video.srcObject = stream;
                _video.play();
                _this.activeVideoSettings = stream.getVideoTracks()[0].getSettings();
                var activeDeviceId = WebcamComponent_1.getDeviceIdFromMediaStreamTrack(stream.getVideoTracks()[0]);
                _this.cameraSwitched.next(activeDeviceId);
                // Initial detect may run before user gave permissions, returning no deviceIds. This prevents later camera switches. (#47)
                // Run detect once again within getUserMedia callback, to make sure this time we have permissions and get deviceIds.
                _this.detectAvailableDevices()
                    .then(function () {
                    _this.activeVideoInputIndex = activeDeviceId ? _this.availableVideoInputs
                        .findIndex(function (mediaDeviceInfo) { return mediaDeviceInfo.deviceId === activeDeviceId; }) : -1;
                    _this.videoInitialized = true;
                })
                    .catch(function () {
                    _this.activeVideoInputIndex = -1;
                    _this.videoInitialized = true;
                });
            })
                .catch(function (err) {
                _this.initError.next({ message: err.message, mediaStreamError: err });
            });
        }
        else {
            this.initError.next({ message: 'Cannot read UserMedia from MediaDevices.' });
        }
    };
    WebcamComponent.prototype.getActiveVideoTrack = function () {
        return this.mediaStream ? this.mediaStream.getVideoTracks()[0] : null;
    };
    WebcamComponent.prototype.isMirrorImage = function () {
        if (!this.getActiveVideoTrack()) {
            return false;
        }
        // check for explicit mirror override parameter
        {
            var mirror = 'auto';
            if (this.mirrorImage) {
                if (typeof this.mirrorImage === 'string') {
                    mirror = String(this.mirrorImage).toLowerCase();
                }
                else {
                    // WebcamMirrorProperties
                    if (this.mirrorImage.x) {
                        mirror = this.mirrorImage.x.toLowerCase();
                    }
                }
            }
            switch (mirror) {
                case 'always':
                    return true;
                case 'never':
                    return false;
            }
        }
        // default: enable mirroring if webcam is user facing
        return WebcamComponent_1.isUserFacing(this.getActiveVideoTrack());
    };
    /**
     * Stops all active media tracks.
     * This prevents the webcam from being indicated as active,
     * even if it is no longer used by this component.
     */
    WebcamComponent.prototype.stopMediaTracks = function () {
        if (this.mediaStream && this.mediaStream.getTracks) {
            // getTracks() returns all media tracks (video+audio)
            this.mediaStream.getTracks()
                .forEach(function (track) { return track.stop(); });
        }
    };
    /**
     * Unsubscribe from all open subscriptions
     */
    WebcamComponent.prototype.unsubscribeFromSubscriptions = function () {
        if (this.triggerSubscription) {
            this.triggerSubscription.unsubscribe();
        }
        if (this.switchCameraSubscription) {
            this.switchCameraSubscription.unsubscribe();
        }
    };
    /**
     * Reads available input devices
     */
    WebcamComponent.prototype.detectAvailableDevices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            WebcamUtil.getAvailableVideoInputs()
                .then(function (devices) {
                _this.availableVideoInputs = devices;
                resolve(devices);
            })
                .catch(function (err) {
                _this.availableVideoInputs = [];
                reject(err);
            });
        });
    };
    var WebcamComponent_1;
    WebcamComponent.DEFAULT_VIDEO_OPTIONS = { facingMode: 'environment' };
    WebcamComponent.DEFAULT_IMAGE_TYPE = 'image/jpeg';
    WebcamComponent.DEFAULT_IMAGE_QUALITY = 0.92;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], WebcamComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], WebcamComponent.prototype, "height", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "videoOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], WebcamComponent.prototype, "allowCameraSwitch", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "mirrorImage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], WebcamComponent.prototype, "captureImageData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], WebcamComponent.prototype, "imageType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], WebcamComponent.prototype, "imageQuality", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "imageCapture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "initError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "imageClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WebcamComponent.prototype, "cameraSwitched", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('video', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "video", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WebcamComponent.prototype, "canvas", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]])
    ], WebcamComponent.prototype, "trigger", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]])
    ], WebcamComponent.prototype, "switchCamera", null);
    WebcamComponent = WebcamComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'webcam',
            template: "<div class=\"webcam-wrapper\" (click)=\"imageClick.next();\">\r\n  <video #video [width]=\"videoWidth\" [height]=\"videoHeight\" [class]=\"videoStyleClasses\" autoplay muted playsinline (resize)=\"videoResize()\"></video>\r\n  <div class=\"camera-switch\" *ngIf=\"allowCameraSwitch && availableVideoInputs.length > 1 && videoInitialized\" (click)=\"rotateVideoInput(true)\"></div>\r\n  <canvas #canvas [width]=\"width\" [height]=\"height\"></canvas>\r\n</div>\r\n",
            styles: [".webcam-wrapper{display:inline-block;position:relative;line-height:0}.webcam-wrapper video.mirrored{transform:scale(-1,1)}.webcam-wrapper canvas{display:none}.webcam-wrapper .camera-switch{background-color:rgba(0,0,0,.1);background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s}.webcam-wrapper .camera-switch:hover{background-color:rgba(0,0,0,.18)}"]
        })
    ], WebcamComponent);
    return WebcamComponent;
}());

var COMPONENTS = [
    WebcamComponent
];
var WebcamModule = /** @class */ (function () {
    function WebcamModule() {
    }
    WebcamModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                COMPONENTS
            ],
            exports: [
                COMPONENTS
            ]
        })
    ], WebcamModule);
    return WebcamModule;
}());

var WebcamInitError = /** @class */ (function () {
    function WebcamInitError() {
        this.message = null;
        this.mediaStreamError = null;
    }
    return WebcamInitError;
}());

var WebcamMirrorProperties = /** @class */ (function () {
    function WebcamMirrorProperties() {
    }
    return WebcamMirrorProperties;
}());


//# sourceMappingURL=ngx-webcam.js.map


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/Subject.js":
/*!***************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/Subject.js ***!
  \***************************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]; });


//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./src/app/menu_components/customer-documents/customer-documents-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/menu_components/customer-documents/customer-documents-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: CustomerDocumentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDocumentsRoutingModule", function() { return CustomerDocumentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_documents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-documents.component */ "./src/app/menu_components/customer-documents/customer-documents.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        children: [{
                path: '',
                component: _customer_documents_component__WEBPACK_IMPORTED_MODULE_2__["CustomerDocumentsComponent"]
            }]
    }
];
var CustomerDocumentsRoutingModule = /** @class */ (function () {
    function CustomerDocumentsRoutingModule() {
    }
    CustomerDocumentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomerDocumentsRoutingModule);
    return CustomerDocumentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/menu_components/customer-documents/customer-documents.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/menu_components/customer-documents/customer-documents.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"row\">\r\n  \r\n  <div class =\"col-md-5\">\r\n      <app-tab-layout [tab_layout_ui_data_to_receive]=\"tab_layout_ui_data_to_send\">\r\n          <ng-template>\r\n                    <div class=\"tab-pane\"  id=\"link1\"  >\r\n                      <span *ngIf = \"flagg != 0\">   <form [formGroup]=\"CustomerDocumentEditForm\" (ngSubmit)=\"form_submit(formDirective, 1)\" #formDirective=\"ngForm\">    \r\n                            <app-html-components [html_data_to_pass] = \"customer_document_Edit_html_elements\" [form_data]=\"this.CustomerDocumentEditForm\" (html_events)= \"get_html_events($event)\">\r\n                              </app-html-components>     \r\n                             <button style=\"width: 50%;margin-top: 2%\" class=\"col-md-12 btn btn-primary btn-md\" [disabled]=\"!CustomerDocumentEditForm.valid\" mat-raised-button type=\"submit\" >Edit Document</button>\r\n                             <input [hidden]=\"true\" required=\"true\" formControlName=\"prevent_warning\">  </form></span>\r\n                             <span *ngIf = \"flagg==0\" >Please select a Document from right panel</span>\r\n  \r\n                            </div>\r\n  <div class=\"tab-pane active\" id=\"link2\" >\r\n    \r\n      <form [formGroup]=\"CustomerDocumentForm\" (ngSubmit)=\"form_submit(formDirective, 0)\" #formDirective=\"ngForm\">        \r\n          <app-html-components [html_data_to_pass] = \"customer_document_html_elements\" [form_data]=\"this.CustomerDocumentForm\" (html_events)= \"get_html_events($event)\" >\r\n              <ng-template #standardTemplate let-item>\r\n                  <div>\r\n                      <span *ngIf=\"item=='kyc_reg_show_webcam'\">\r\n                          <button class=\"btn\" type=\"button\" (click)=\"toggleWebcam();\">Show/Hide Webcam</button>\r\n                          <button class=\"btn\" type=\"button\" *ngIf=\"showWebcam\" (click)=\"triggerSnapshot();\">Scan Signature</button>\r\n\r\n                          <div  *ngIf=\"showWebcam\">\r\n                              <webcam [height]=\"150\" [width]=\"150\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" (imageCapture)=\"handleImage1($event)\" *ngIf=\"showWebcam\"\r\n                              [allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\"\r\n                              [videoOptions]=\"videoOptions\"\r\n                              [imageQuality]=\"1\"\r\n                              (cameraSwitched)=\"cameraWasSwitched($event)\"\r\n                              (initError)=\"handleInitError($event)\"></webcam>\r\n\r\n\r\n                    </div>\r\n                              \r\n                        <div class=\"snapshot\" *ngIf=\"webcamImage\">\r\n                        \r\n                        <img [src]=\"webcamImage.imageAsDataUrl\" #webcam_image/>\r\n                      </div>\r\n                      <!--<div class=\"snapshot\" *ngIf=\"webcamSignature\">\r\n                          <h2>nice</h2>\r\n                        <img [src]=\"webcamSignature.imageAsDataUrl\"/>\r\n                      </div>-->\r\n                        </span>\r\n                  </div>\r\n            <!--<div style=\"height:200px; width:200px;background-color:red\" *ngIf=\"showWebcam\">\r\n              <webcam [height]=\"200\" [width]=\"200\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" (imageCapture)=\"handleImage1($event)\" *ngIf=\"showWebcam\"\r\n              [allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\"\r\n              [videoOptions]=\"videoOptions\"\r\n              [imageQuality]=\"1\"\r\n              (cameraSwitched)=\"cameraWasSwitched($event)\"\r\n              (initError)=\"handleInitError($event)\"\r\n      ></webcam>\r\n      <button class=\"btn\" type=\"button\" (click)=\"triggerSnapshot();\">Snap Photo</button>\r\n    </div>-->\r\n    </ng-template>\r\n        </app-html-components> \r\n     \r\n      <!-- <div style=\"text-align:center\">\r\n        \r\n          <div>\r\n            <webcam [height]=\"200\" [width]=\"200\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" (imageCapture)=\"handleImage1($event)\" *ngIf=\"showWebcam\"\r\n                    [allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\"\r\n                    [videoOptions]=\"videoOptions\"\r\n                    [imageQuality]=\"1\"\r\n                    (cameraSwitched)=\"cameraWasSwitched($event)\"\r\n                    (initError)=\"handleInitError($event)\"\r\n            ></webcam>\r\n            <br/>\r\n            <button class=\"btn\" type=\"button\" (click)=\"triggerSnapshot();\">Snap Photo</button>\r\n            <button class=\"btn\" type=\"button\" (click)=\"triggerSnapshot1();\">Snap Signature</button>\r\n            <button class=\"btn\" type=\"button\" (click)=\"toggleWebcam();\">Toggle Webcam</button>-->\r\n           <!-- <br/>\r\n            <button class=\"actionBtn\" (click)=\"showNextWebcam(true);\" [disabled]=\"!multipleWebcamsAvailable\">Next Webcam</button>\r\n            <input id=\"cameraSwitchCheckbox\" type=\"checkbox\" [(ngModel)]=\"allowCameraSwitch\"><label for=\"cameraSwitchCheckbox\">Allow Camera Switch</label>\r\n            <br/>\r\n            DeviceId: <input id=\"deviceId\" type=\"text\" [(ngModel)]=\"deviceId\" style=\"width: 500px\">\r\n            <button (click)=\"showNextWebcam(deviceId);\">Activate</button>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"snapshot\" *ngIf=\"webcamImage\">\r\n          <h2>nice</h2>\r\n          <img [src]=\"webcamImage.imageAsDataUrl\"/>\r\n        </div>\r\n        <div class=\"snapshot\" *ngIf=\"webcamSignature\">\r\n            <h2>nice</h2>\r\n          <img [src]=\"webcamSignature.imageAsDataUrl\"/>\r\n        </div> -->  \r\n        <!-- <button style=\"float: right\" type=\"button\" (click)=\"this.basic_function_obj.find_invalid(this.loanlistForm)\" class=\"btn\"><b>Validate Form</b></button>             -->\r\n        <button style=\"width: 50%;margin-top: 2%\" class=\"col-md-12 btn btn-primary btn-md\" [disabled]=\"!CustomerDocumentForm.valid\" mat-raised-button type=\"submit\" >Add Document </button>  \r\n        <input [hidden]=\"true\" required=\"true\" formControlName=\"prevent_warning\">\r\n        </form> \r\n      \r\n  </div>\r\n  \r\n  </ng-template>\r\n  </app-tab-layout>\r\n  \r\n  </div>\r\n  <div class=\"col-md-7\" style=\"margin-top: 32px;\">\r\n      <mat-card>  <div class = \"col-md-6\">\r\n          <app-search-box  [search_box]=\"search_box\" (fn_on_search)= \"fn_on_search($event)\" (html_events)= \"fn_tableData_display($event.value)\"></app-search-box>\r\n\r\n       </div>\r\n  <app-table [table_data] = \"table_data_to_send\">\r\n    <ng-template>\r\n        <tr *ngFor = \"let l of DocumentDetails index as i\" ><td>{{i+1}}</td>\r\n               \r\n                <td (click) = changeTab(l.id) *ngIf=\"l.folder == '01'\">KYC</td>\r\n                <td (click) = changeTab(l.id) *ngIf=\"l.folder == '02'\">Income Documents</td>\r\n                <td (click) = changeTab(l.id) *ngIf=\"l.folder == '03'\">Bank Statements</td>\r\n                <td (click) = changeTab(l.id) *ngIf=\"l.folder == '04'\">Land Documents</td>\r\n                <td (click) = changeTab(l.id) *ngIf=\"l.folder == '05'\">Asset Documents</td>\r\n                <td (click) = changeTab(l.id) *ngIf=\"l.folder == '06'\">Liability Documents</td>\r\n                <td (click) = changeTab(l.id) *ngIf=\"l.folder == '07'\">IT Returns</td>\r\n                <td (click) = changeTab(l.id) *ngIf=\"l.folder == '09'\">Balance Sheets</td>\r\n\r\n                <td (click) = changeTab(l.id) *ngIf=\"l.folder == '08'\">Licence & Registration documents</td>\r\n                <td>{{l.document_name}}</td>\r\n                <td><a href=\"http://localhost/coligo_management_suite/backend/images/{{l.document}}\"  id=\"docs\" target=\"_blank\"><button style= \"margin-left: 10%\"><i class=\"fa fa-download\"></i></button></a> \r\n                <button (click)= fn_delete(l.id) style= \"margin-left: 5%\"> <i class=\"fa fa-trash\" ></i></button></td>\r\n                </tr>\r\n              \r\n        </ng-template> \r\n    </app-table> </mat-card>  \r\n</div>\r\n  </div>\r\n   \r\n"

/***/ }),

/***/ "./src/app/menu_components/customer-documents/customer-documents.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/menu_components/customer-documents/customer-documents.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".actionBtn {\n  margin-top: 5px;\n  margin-bottom: 2px;\n  font-size: 1.2em; }\n\n.snapshot {\n  text-align: center; }\n\n.snapshot img {\n    max-width: 150px;\n    max-height: 150px; }\n\nul.links {\n  padding-bottom: 20px; }\n"

/***/ }),

/***/ "./src/app/menu_components/customer-documents/customer-documents.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/menu_components/customer-documents/customer-documents.component.ts ***!
  \************************************************************************************/
/*! exports provided: CustomerDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDocumentsComponent", function() { return CustomerDocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _services_notificationservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notificationservice.service */ "./src/app/services/notificationservice.service.ts");
/* harmony import */ var _services_basic_functions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/basic-functions.service */ "./src/app/services/basic-functions.service.ts");
/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var _services_posting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/posting.service */ "./src/app/services/posting.service.ts");
/* harmony import */ var _services_getting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/getting.service */ "./src/app/services/getting.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_datatable_trigger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/datatable-trigger.service */ "./src/app/services/datatable-trigger.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CustomerDocumentsComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function CustomerDocumentsComponent(validation_obj, g, notify, basic_function_obj, spin, p, fb, dt_trig, chRef, authservice) {
        this.validation_obj = validation_obj;
        this.g = g;
        this.notify = notify;
        this.basic_function_obj = basic_function_obj;
        this.spin = spin;
        this.p = p;
        this.fb = fb;
        this.dt_trig = dt_trig;
        this.chRef = chRef;
        this.authservice = authservice;
        // toggle webcam on/off
        this.showWebcam = false;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {};
        this.errors = [];
        // latest snapshot
        this.webcamImage = null;
        this.webcamSignature = null;
        // webcam snapshot trigger
        this.trigger = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.trigger1 = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.sl_no = 0;
        this.switch_tab = 0;
        this.fileToUpload = null;
        // ui data
        this.tab_layout_ui_data_to_send = {
            tab_heading: 'Add/Edit Customer Documents',
            tab_subheading: '',
            need_card: true,
            tab_id: 'invent_tab',
            tab_content_component_selector_data: [{
                    tab_name: 'Edit Documents'
                },
                {
                    tab_name: 'Add Documents',
                    is_active: true
                }]
        };
        this.CustomerDocumentForm = this.fb.group({
            doc_cus_id: [''],
            doc_cus_name: [''],
            doc_cus_folder: [''],
            doc_cus_document: [''],
            kyc_reg_webcam: [''],
            prevent_warning: ['']
        });
        this.CustomerDocumentEditForm = this.fb.group({
            doc_cus_edit_id: [''],
            doc_cus_edit_name: [''],
            doc_cus_edit_folder: [''],
            doc_cus_edit_document: [''],
            prevent_warning: ['']
        });
        this.table_data_to_send = {
            minmax: {
                need_minmax: false,
            },
            table: {
                is_datatable: false,
                table_id: 'document_table',
                have_non_sort_col: true,
                non_sort_cols: '3',
                need_colour: true,
                color_cols: '',
                need_header: true,
                // tslint:disable-next-line: max-line-length
                header: 'sl_no.~folder~file_name~Actions'
            },
            excel: {
                need_export_to_excel: false,
            },
            column_search: {
                need_column_search: false
            }
        };
        this.search_box = {
            placeholder: 'Search id /names',
            searchbox_id: 'kyc_search',
            search_tablename: 'customer_info',
            search_db: this.authservice.getHeadDatabaseSession(),
            search_columnname: 'id~cus_first_name~aadhar~id1_value~email~contact1_value',
            view_columnname: 'id~cus_first_name~cus_last_name',
        };
        this.customer_document_html_elements = [
            {
                no_of_elements_in_a_row: '1',
                color: '',
                need_card: true,
                table_view: false,
                card_label: 'Documents',
                elements: [
                    {
                        textbox: true,
                        label: 'Customer ID',
                        required: true,
                        name: 'doc_cus_id',
                        classes: ['cus_doc_id'],
                        readonly: true,
                        line_break_value: '6',
                        placeholder: 'please enter details',
                        float_placeholder: 'never'
                    },
                    {
                        textbox: true,
                        label: 'Customer Name',
                        required: true,
                        name: 'doc_cus_name',
                        classes: ['doc_cus_name'],
                        readonly: true,
                        line_break_value: '6',
                        placeholder: 'please enter details',
                        float_placeholder: 'never'
                    },
                    {
                        select: true,
                        label: 'Folder',
                        name: 'doc_cus_folder',
                        classes: ['doc_cus_folder'],
                        multiple: false,
                        placeholder: 'Select Folder',
                        line_break_value: '6',
                        required: true,
                        options: [
                            {
                                viewValue: 'KYC',
                                value: '01'
                            },
                            {
                                viewValue: 'Income Documents',
                                value: '02'
                            },
                            {
                                viewValue: 'Bank Statements',
                                value: '03'
                            },
                            {
                                viewValue: 'Land Documents',
                                value: '04'
                            },
                            {
                                viewValue: 'Asset Documents',
                                value: '05'
                            },
                            {
                                viewValue: 'Liability Documents',
                                value: '06'
                            },
                            {
                                viewValue: 'IT Returns',
                                value: '07'
                            },
                            {
                                viewValue: 'Balance Sheets',
                                value: '09'
                            },
                            {
                                viewValue: 'Licence & Registration documents',
                                value: '08'
                            }
                        ],
                    },
                    {
                        filechooser: true,
                        required: false,
                        line_break_value: '6',
                        classes: ['doc_cus_document'],
                        label: 'Choose image',
                        name: 'doc_cus_document'
                    },
                    /*{
                      button: true,
                      value: 'Show/Hide Webcam',
                      classes: ['kyc_reg_webcam'],
                      name: 'kyc_reg_webcam',
                     }*/
                    {
                        custom_element: true,
                        custom_element_identification: 'kyc_reg_show_webcam',
                        need_block: false,
                        is_element_required: false
                    },
                ]
            }
        ];
        this.customer_document_Edit_html_elements = [
            {
                no_of_elements_in_a_row: '1',
                color: '',
                need_card: true,
                table_view: false,
                card_label: 'Loan List',
                elements: [
                    {
                        textbox: true,
                        label: 'Customer ID',
                        required: true,
                        name: 'doc_cus_edit_id',
                        classes: ['cus_doc_edit_id'],
                        readonly: true,
                        line_break_value: '6',
                        placeholder: 'please enter details',
                        float_placeholder: 'never'
                    },
                    {
                        textbox: true,
                        label: 'Customer Name',
                        required: true,
                        name: 'doc_cus_edit_name',
                        classes: ['doc_cus_edit_name'],
                        readonly: true,
                        line_break_value: '6',
                        placeholder: 'please enter details',
                        float_placeholder: 'never'
                    },
                    {
                        select: true,
                        label: 'Folder',
                        name: 'doc_cus_edit_folder',
                        classes: ['doc_cus_edit_folder'],
                        multiple: false,
                        placeholder: 'Select Folder',
                        line_break_value: '6',
                        required: true,
                        options: [
                            {
                                viewValue: 'Kyc',
                                value: '01'
                            },
                            {
                                viewValue: 'Income Documents',
                                value: '02'
                            },
                            {
                                viewValue: 'Bank Statements',
                                value: '03'
                            },
                            {
                                viewValue: 'Land Documents',
                                value: '04'
                            },
                            {
                                viewValue: 'Asset Documents',
                                value: '05'
                            },
                            {
                                viewValue: 'Liability Documents',
                                value: '06'
                            },
                            {
                                viewValue: 'IT Returns',
                                value: '07'
                            },
                            {
                                viewValue: 'Balance Sheets',
                                value: '09'
                            },
                            {
                                viewValue: 'Licence & Registration documents',
                                value: '08'
                            }
                        ],
                    },
                    {
                        filechooser: true,
                        required: false,
                        line_break_value: '6',
                        classes: ['doc_cus_edit_document'],
                        label: 'Choose image',
                        name: 'doc_cus_edit_document'
                    }
                ]
            }
        ];
    }
    CustomerDocumentsComponent.prototype.fn_on_search = function (search_term) {
        var _this = this;
        this.spin.trig_spin(true);
        var res = search_term.split('-');
        var get_data = {
            table_name: 'customer_info',
            data: res[1],
            db: this.authservice.getHeadDatabaseSession()
        };
        this.p.do_simple_id_read(get_data)
            .subscribe(function (response) {
            var data = response.row;
            // this.DocumentDetails = data
            // this.DocumentDetails = data['cus_first_name'];
            _this.id_to_edit = data['id'];
            _this.cus_name = data['cus_first_name'] + ' ' + data['cus_middle_name'] + ' ' + data['cus_last_name'];
            _this.cus_branch_code = data['branch_code'];
            _this.branch_code = _this.authservice.getBranchCodeSession();
            if (_this.branch_code === _this.cus_branch_code) {
                // tslint:disable-next-line: comment-format
                _this.CustomerDocumentForm.patchValue({
                    doc_cus_id: data['id'],
                    doc_cus_name: data['cus_first_name'],
                    prevent_warning: '0'
                });
            }
            else {
                _this.notify.normal_alert('Customer Does not exist in this Branch  !!!');
            }
            _this.spin.trig_spin(false);
        }, function (error) {
            _this.notify.openSnackBar(error, 'Close', 'red-snackbar');
            _this.spin.trig_spin(false);
        });
        this.dt_trig.trig_datatable(false, this.table_data_to_send.table.table_id, '', false);
        this.spin.trig_spin(true);
        var data_id = {
            'id': this.id_to_edit
        };
        var get_data1 = {
            table_name: 'cus_documents',
            data: res[1],
            condition_column: 'cus_id',
            db: this.authservice.getDatabaseSession()
        };
        this.p.do_single_fetch_with_where_condition(get_data1)
            .subscribe(function (response) {
            _this.spin.trig_spin(false);
            var data = response.rows;
            data.forEach(function (element) {
                _this.element = element.document;
                _this.element = _this.element.split('_');
                _this.element.shift();
                _this.element = _this.element.join(' ');
                element.document_name = _this.element;
                // this.DocumentDetails['document'] = this.element;
            });
            _this.DocumentDetails = data;
            // this.cus_name = data[0].cus_name;
            _this.chRef.detectChanges();
            _this.dt_trig.trig_datatable(true, _this.table_data_to_send.table.table_id, '', true);
        });
        //
    };
    CustomerDocumentsComponent.prototype.get_html_events = function (event_obj) {
        if (event_obj.uniq_identity === 'doc_cus_document') {
            if (event_obj.e_type === 'change') {
                this.fileToUpload = event_obj.value.item(0);
                this.filename = Date.now() + '_' + this.fileToUpload.name;
            }
        }
        if (event_obj.uniq_identity === 'doc_cus_edit_document') {
            if (event_obj.e_type === 'change') {
                this.fileToUpload = event_obj.value.item(0);
                this.filename = Date.now() + '_' + this.fileToUpload.name;
            }
        }
        if (event_obj.uniq_identity === 'kyc_reg_webcam') {
            if (event_obj.e_type === 'click') {
                this.toggleWebcam();
            }
        }
    };
    CustomerDocumentsComponent.prototype.form_submit = function (formDirective, switch_tab) {
        var _this = this;
        this.notify.askForConfirmation().then(function (trig) {
            if (trig === true) {
                console.log(_this.fileToUpload);
                console.log(_this.filename);
                _this.p.addfile(_this.fileToUpload, _this.filename)
                    .subscribe(function (response) {
                    // this.spin.trig_spin(false);
                }, function (error) {
                    _this.notify.openSnackBar(error, 'Close', 'red-snackbar');
                    _this.spin.trig_spin(false);
                });
                if (switch_tab === 0) {
                    if (_this.CustomerDocumentForm.valid) {
                        _this.spin.trig_spin(true);
                        _this.filename1 = _this.fileToUpload.name;
                        var form_data = _this.CustomerDocumentForm.value;
                        var final_form_data = {
                            'cus_id': form_data.doc_cus_id,
                            'cus_name': form_data.doc_cus_name,
                            'folder': form_data.doc_cus_folder,
                            'document': _this.filename
                        };
                        var insert_data = {
                            table_name: 'cus_documents',
                            data: final_form_data,
                            db: _this.authservice.getDatabaseSession()
                        };
                        _this.p.do_single_insertion(insert_data)
                            .subscribe(function (response) {
                            if (response.flag === 1) {
                                _this.notify.openSnackBarSuccess();
                                $('#remove').click();
                            }
                            else if (response.flag === 0) {
                                _this.notify.openSnackBar('Not every column inserted', '', 'red-snackbar');
                            }
                            _this.spin.trig_spin(false);
                            var get_data1 = {
                                table_name: 'cus_documents',
                                data: _this.id_to_edit,
                                condition_column: 'cus_id',
                                db: _this.authservice.getDatabaseSession()
                            };
                            _this.p.do_single_fetch_with_where_condition(get_data1)
                                .subscribe(function (response_sec) {
                                _this.spin.trig_spin(false);
                                var data = response_sec.rows;
                                data.forEach(function (element) {
                                    _this.element = element.document;
                                    _this.element = _this.element.split('_');
                                    _this.element.shift();
                                    _this.element = _this.element.join(' ');
                                    element.document_name = _this.element;
                                    // this.DocumentDetails['document'] = this.element;
                                });
                                _this.DocumentDetails = data;
                                // this.cus_name = data[0].cus_name;
                                _this.chRef.detectChanges();
                                _this.dt_trig.trig_datatable(true, _this.table_data_to_send.table.table_id, '', true);
                            });
                        }, function (error) {
                            console.log(error);
                            _this.spin.trig_spin(false);
                        });
                        formDirective.resetForm();
                        _this.CustomerDocumentForm.reset({
                            doc_cus_id: _this.id_to_edit,
                            doc_cus_name: _this.cus_name,
                            prevent_warning: ['0']
                        });
                    }
                    else {
                        _this.notify.openSnackBar('Form NOT valid', 'Close', 'red-snackbar');
                    }
                }
                else if (switch_tab === 1) {
                    if (_this.CustomerDocumentEditForm.valid) {
                        _this.spin.trig_spin(true);
                        _this.p.addfile(_this.fileToUpload, _this.filename)
                            .subscribe(function (response) {
                            // this.spin.trig_spin(false);
                        }, function (error) {
                            _this.notify.openSnackBar(error, 'Close', 'red-snackbar');
                            _this.spin.trig_spin(false);
                        });
                        var form_data = _this.CustomerDocumentEditForm.value;
                        var final_form_edit_data = {
                            'cus_id': form_data.doc_cus_edit_id,
                            'cus_name': form_data.doc_cus_edit_name,
                            'folder': form_data.doc_cus_edit_folder,
                            'document': _this.filename,
                        };
                        var data = {
                            data_to_update: final_form_edit_data,
                            condition: {
                                id: [_this.id_to_edit]
                            }
                        };
                        var update_data = {
                            table_name: 'cus_documents',
                            data: data,
                            db: _this.authservice.getDatabaseSession()
                        };
                        _this.p.do_simple_update(update_data)
                            .subscribe(function (response) {
                            if (response.no_of_rows_updated[0] === 1) {
                                _this.notify.openSnackBar('Data Updated Successfully', '', 'green-snackbar');
                                $('#remove').click();
                                _this.ngOnInit();
                            }
                            else {
                                _this.notify.openSnackBar('Error in updating', '', 'red-snackbar');
                            }
                            _this.spin.trig_spin(false);
                        }, function (error) {
                            console.log(error);
                            _this.spin.trig_spin(false);
                        });
                    }
                    else {
                        _this.notify.openSnackBar('Form NOT valid', 'Close', 'red-snackbar');
                    }
                }
            }
        });
    };
    /*fn_tableData_display(value) {
      this.dt_trig.trig_datatable(false, this.table_data_to_send.table.table_id, '', false);
  
      this.val = value;
    this.spin.trig_spin(true);
    const data_id = {
      'id': this.id_to_edit
    };
    const get_data: DBOperation = {
      table_name: 'cus_documents',
      data: data_id,
      db: this.authservice.getDatabaseSession()
    }
    console.log(get_data);
    this.p.do_simple_read_cus_documents(get_data)
     .subscribe(response => {
      this.spin.trig_spin(false);
      const data = response.rows;
      this.DocumentDetails = data[0];
     // const cus_name = data[0].cus_name;
      this.chRef.detectChanges();
      this.dt_trig.trig_datatable(true, this.table_data_to_send.table.table_id, '', true);
   });
    }*/
    CustomerDocumentsComponent.prototype.fn_delete = function (id) {
        var _this = this;
        this.notify.askForConfirmation().then(function (trig) {
            if (trig === true) {
                _this.spin.trig_spin(true);
                var data = {
                    'id': id
                };
                var get_data = {
                    table_name: 'cus_documents',
                    data: data,
                    db: _this.authservice.getDatabaseSession()
                };
                _this.p.do_delete(get_data)
                    .subscribe(function (response) {
                    if (response.no_of_rows_deleted = 1) {
                        _this.notify.openSnackBar('Data Deleted Successfully', '', 'green-snackbar');
                        // this.fn_tableData_display(this.val);
                    }
                    else {
                        _this.notify.openSnackBar('Error in Deleting', '', 'red-snackbar');
                    }
                    _this.spin.trig_spin(false);
                    var get_data1 = {
                        table_name: 'cus_documents',
                        data: _this.id_to_edit,
                        condition_column: 'cus_id',
                        db: _this.authservice.getDatabaseSession()
                    };
                    _this.p.do_single_fetch_with_where_condition(get_data1)
                        .subscribe(function (response_sec) {
                        _this.spin.trig_spin(false);
                        var sec_data = response_sec.rows;
                        sec_data.forEach(function (element) {
                            _this.element = element.document;
                            _this.element = _this.element.split('_');
                            _this.element.shift();
                            _this.element = _this.element.join(' ');
                            element.document_name = _this.element;
                            // this.DocumentDetails['document'] = this.element;
                        });
                        _this.DocumentDetails = sec_data;
                        // this.cus_name = data[0].cus_name;
                        _this.chRef.detectChanges();
                        _this.dt_trig.trig_datatable(true, _this.table_data_to_send.table.table_id, '', true);
                    });
                }, function (error) {
                    console.log(error);
                    if (error.status === 401) {
                        _this.notify.normal_alert('Permission Denied');
                    }
                    _this.spin.trig_spin(false);
                });
            }
        });
    };
    CustomerDocumentsComponent.prototype.changeTab = function (id) {
        var _this = this;
        this.flagg = 1;
        var get_data = {
            table_name: 'cus_documents',
            data: id,
            db: this.authservice.getDatabaseSession()
        };
        this.id_to_edit = id;
        $('#invent_tab_1').click();
        this.p.do_simple_id_read(get_data)
            .subscribe(function (response) {
            var data = response.row;
            _this.CustomerDocumentEditForm.patchValue({
                doc_cus_edit_id: data['cus_id'],
                doc_cus_edit_name: data['cus_name'],
                doc_cus_edit_folder: data['folder'],
                doc_cus_edit_document: data['document'],
                prevent_warning: '0'
            });
        }, function (error) {
            _this.notify.openSnackBar(error, 'Close', 'red-snackbar');
        });
    };
    CustomerDocumentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spin.trig_spin(true);
        var data = {
            table_name: 'cus_documents',
            db: this.authservice.getDatabaseSession()
        };
        this.p.get_max_id(data)
            .subscribe(function (response_max_id) {
            _this.spin.trig_spin(false);
            var data_max_id = response_max_id.rows[0];
            var max_id = data_max_id['max_id'];
            if (max_id !== null) {
                _this.p.security_get_existing_customer_by_last_timestamp(data)
                    .subscribe(function (response) {
                    // tslint:disable-next-line: no-shadowed-variable
                    var data = response.rows[0];
                    _this.DocumentDetails = data;
                    // data['document'] = data['document'].split('_').join(' ');
                    // this.cus_name = data[0].cus_name;
                    _this.chRef.detectChanges();
                    _this.dt_trig.trig_datatable(true, _this.table_data_to_send.table.table_id, '', true);
                });
            }
        });
        ngx_webcam__WEBPACK_IMPORTED_MODULE_11__["WebcamUtil"].getAvailableVideoInputs()
            .then(function (mediaDevices) {
            _this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
        this.flagg = 0;
        var self = this;
        setTimeout(function () {
            self.CustomerDocumentForm.patchValue({
                prevent_warning: '0'
            });
            self.CustomerDocumentEditForm.patchValue({
                prevent_warning: '0'
            });
        }, 10);
    };
    CustomerDocumentsComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
    };
    CustomerDocumentsComponent.prototype.triggerSnapshot1 = function () {
        this.trigger1.next();
    };
    CustomerDocumentsComponent.prototype.toggleWebcam = function () {
        this.showWebcam = !this.showWebcam;
        $('.webcam_image').hide();
    };
    CustomerDocumentsComponent.prototype.handleInitError = function (error) {
        this.errors.push(error);
    };
    CustomerDocumentsComponent.prototype.showNextWebcam = function (directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    };
    CustomerDocumentsComponent.prototype.handleImage = function (webcamImage) {
        console.log('received webcam image', webcamImage);
        this.webcamImage = webcamImage;
        // this.webcamSignature = webcamSignature;
    };
    /*public handleImage(webcamImage: WebcamImage): void {
      console.log('received webcam image', webcamImage);
      this.webcamImage = webcamImage;
    }*/
    CustomerDocumentsComponent.prototype.handleImage1 = function (webcamSignature) {
        console.log('received webcam image', webcamSignature);
        this.webcamSignature = webcamSignature;
    };
    CustomerDocumentsComponent.prototype.cameraWasSwitched = function (deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    };
    Object.defineProperty(CustomerDocumentsComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerDocumentsComponent.prototype, "nextWebcamObservable", {
        get: function () {
            return this.nextWebcam.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CustomerDocumentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-documents',
            template: __webpack_require__(/*! ./customer-documents.component.html */ "./src/app/menu_components/customer-documents/customer-documents.component.html"),
            styles: [__webpack_require__(/*! ./customer-documents.component.scss */ "./src/app/menu_components/customer-documents/customer-documents.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"], _services_getting_service__WEBPACK_IMPORTED_MODULE_6__["GettingService"], _services_notificationservice_service__WEBPACK_IMPORTED_MODULE_2__["NotificationserviceService"], _services_basic_functions_service__WEBPACK_IMPORTED_MODULE_3__["BasicFunctionsService"], _services_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"], _services_posting_service__WEBPACK_IMPORTED_MODULE_5__["PostingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _services_datatable_trigger_service__WEBPACK_IMPORTED_MODULE_8__["DatatableTriggerService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], CustomerDocumentsComponent);
    return CustomerDocumentsComponent;
}());



/***/ }),

/***/ "./src/app/menu_components/customer-documents/customer-documents.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/menu_components/customer-documents/customer-documents.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomerDocumentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDocumentsModule", function() { return CustomerDocumentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_component_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/component/component.module */ "./src/app/modules/component/component.module.ts");
/* harmony import */ var _modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/angular-material/angular-material.module */ "./src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js");
/* harmony import */ var _customer_documents_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-documents-routing.module */ "./src/app/menu_components/customer-documents/customer-documents-routing.module.ts");
/* harmony import */ var _customer_documents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-documents.component */ "./src/app/menu_components/customer-documents/customer-documents.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CustomerDocumentsModule = /** @class */ (function () {
    function CustomerDocumentsModule() {
    }
    CustomerDocumentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_webcam__WEBPACK_IMPORTED_MODULE_6__["WebcamModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _modules_component_component_module__WEBPACK_IMPORTED_MODULE_4__["ComponentModule"],
                _modules_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                _customer_documents_routing_module__WEBPACK_IMPORTED_MODULE_7__["CustomerDocumentsRoutingModule"]
            ],
            declarations: [_customer_documents_component__WEBPACK_IMPORTED_MODULE_8__["CustomerDocumentsComponent"]]
        })
    ], CustomerDocumentsModule);
    return CustomerDocumentsModule;
}());



/***/ }),

/***/ "./src/app/services/getting.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/getting.service.ts ***!
  \*********************************************/
/*! exports provided: GettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingService", function() { return GettingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_endpoints_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-endpoints.service */ "./src/app/services/api-endpoints.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GettingService = /** @class */ (function () {
    function GettingService(http, api_obj) {
        this.http = http;
        this.api_obj = api_obj;
    }
    GettingService.prototype.kyc_get_existing_customer_by_last_timestamp = function () {
        return this.http.get(this.api_obj.kyc_fetch_customer_by_ts_endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    GettingService.prototype.get_existing_employee_by_last_timestamp = function () {
        return this.http.get(this.api_obj.fetch_employee_by_ts_endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    GettingService.prototype.kyc_get_all_customer = function () {
        return this.http.get(this.api_obj.kyc_fetch_all_customer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    GettingService.prototype.get_all_employee = function () {
        return this.http.get(this.api_obj.fetch_all_employee).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    GettingService.prototype.errorHandler = function (erro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(erro.statusText || 'Error of server');
    };
    GettingService.prototype.get_default_db = function () {
        return this.http.get(this.api_obj.get_default_db_endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    GettingService.prototype.do_get_binder_session = function () {
        return this.http.get(this.api_obj.do_get_binder_session).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    GettingService.prototype.do_get_max_sd_id = function () {
        return this.http.get(this.api_obj.do_get_max_sd_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    GettingService.prototype.do_get_branch_code = function () {
        return this.http.get(this.api_obj.do_get_branch_code).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    GettingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _api_endpoints_service__WEBPACK_IMPORTED_MODULE_4__["ApiEndpointsService"]])
    ], GettingService);
    return GettingService;
}());



/***/ })

}]);
//# sourceMappingURL=menu_components-customer-documents-customer-documents-module.js.map