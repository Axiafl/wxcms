Page({   data:{     qRCodeMsg:''   },   getQRCode: function(){     var _this = this;          wx.scanCode({              success: function(res){         console.log(res);            _this.setData({           qRCodeMsg: res.result         });         wx.showToast({           title: '成功',           duration: 2000         })       }     })   } })