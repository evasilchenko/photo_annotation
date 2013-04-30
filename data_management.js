
if(typeof jQuery === 'undefined') {
  alert("Please add jquery to your site before loading this project");
}

// S.E.A.F - incapsulates our code to make sure that we don't have any problems interacting with other libraries.
// Pass in the jQuery object because we use it for some functionality

var imageAnnotate = imageAnnotate || {};

imageAnnotate.DataManagement = function () {

  var annotations = [];
  var Annotation = function (key, title, message) {
    return {
      key: key,
      title: title,
      message: message
    };
  };

  // The connection object that is used during the saving and retreival operations of DataManager
  var Connection = function(options) {
    this._options = options;
  };

  Connection.prototype = {
    getRootUrl: function() {
      return this._options.endPointUrl;
    },

    getCreateNewUrl: function () {
      return this._options.endPointUrl + options.createNewSuffix;
    },

    getDeleteUrl: function () {
      return this._options.endPointUrl + options.deleteSuffix;
    }
  }

  // The data object used in sending and retreiving annotation data
  var DataManager = function (connection) {
    this._connection = connection;
  };

  DataManager.prototype  = {
    saveNewAnnotation: function (annotation) {
      $.post(this._connection.getCreateNewUrl(), annotation, function (data) {
        var result = $.parseJSON(data);

        if(result.success) {

        }
        else {
          alert("There was a problem saving your annotation: " + result.message);
        }
      });
    },

    deleteAnnotation: function (annotation) {
      $.post(deleteUrl, annotation, function (data) {
        var result = $.parseJSON(data);

        if(result.success) {

        }
        else {
          alert("There was a problem saving your annotation: " + result.message);
        }
      });
    }
  };

  var connection =  new Connection({ endPointUrl: 'http://myurl.com', createNewSuffix: '/create', deleteSuffix: '/delete' });
  var dataManager = new DataManager(connection);

  // set up our menu items after the document has loaded
  $(document).ready(function() {
    $(".add-annotate").parent().append('<div class="annotate-image"/>');
    $(".annotate-image").append('<div class="menu"/>')
                        .append('<div class="add"/>')
                        .append('<div class="remove"/>');
  });
};