/**
 * 有一个数组存放要匹配的数据
 * 另一个数组来进行配， 找到匹配到的数据
 */

var t = ['<div class="w-editoring-tag sui-form {{ type!=edit act-then hide }}" style="margin-bottom: 0;">',
            '<div class="ft-right pb_5 pt_10">',
                '<span class="sui-btn btn-primary btn-large itemInfo_save">',
                    '保存',
                '</span>',
                '<a class="sui-btn btn-large ml_5 itemInfo_return" href="#/item/index/">',
                    '返回',
                '</a>',
            '</div>',
            '<div class="itemInfoEdit">',
                '<div class="itemContent">',
                          '<input type="hidden" name="item_iid" value="{{info.num_iid}}">',
                    '<div act-if="info.pic_url == undefined" class="itemImg">',
                        '<img src="http://img01.taobaocdn.com/imgextra/i1/TB2.LMucFXXXXXgXXXXXXXXXXXX-350475995.gif" alt="picture">',
                    '</div>',
                    '<div act-if="info.pic_url != undefined" class="itemImg">',
                        '<img src="{{info.pic_url}}" alt="picture">',
                    '</div>',
                    '<div class="itemMessageEdit">',
                        '<div class="pb_10">',
                            '<span>宝贝标题：</span>',
                            '<textarea rows="1" name="item_title" maxlength="60">{{info.title}}</textarea>',
                            '<div class="ft-right">还能输入<span class="fc-red item_title_left">30</span>个字</div>',
                        '</div>',

                        '<div act-if="userType!=B" class="pb_10">',
                            '<span class="v-top">宝贝卖点：</span>',
                            '<textarea rows="3" class="v-top" name="item_sell_point" maxlength="150">{{info.sell_point}}</textarea>',
                            '<div class="ft-right">还能输入<span class="fc-green item_sell_point_left">150</span>字</div>',
                        '</div>',
                        '<div act-if="userTpye==B" class="pb_10">',
                            '<span class="v-top">宝贝卖点：</span>',
                            '<input type="text" class="w90" >',
                            '<input type="text" class="w90" style="margin-left:10px">',
                            '<input type="text" class="w90" style="margin-left:10px">',
                            '<input type="text" class="w90" style="margin-left:10px">',
                            '<input type="text" class="w90" style="margin-left:10px">',
                            '<div class="ft-right" style="width:90%">您发<span class="fc-green">2</span>三大四</div>',
                        '</div>',
                        '<div class="pb_10">',
                            '<span>一口价：￥</span>',
                            '<input name="item_price" type="text" class="w90" value="{{info.price}}" data-rules="required|newnumber">',
                        '</div>',
                        '<div class="pb_10">',
                            '<span>宝贝库存：</span>',
                            '<input name="item_num" type="text" class="w90" value="{{info.num}}" data-rules="required|gt=0" {{info.skus != undefined ? disabled : }}>件',
                        '</div>',
                        '<div class="pb_10">',
                                '<span>商家编码：</span>',
                                '<input name="item_outer_id" type="text" class="w90" maxlength="30" value="{{info.outer_id}}">',
                        '</div>',
                        '<div class="pb_10">',
                                '<span>&nbsp;&nbsp;&nbsp;条形码：</span>',
                                '<input name="item_barcode" type="text" class="w90" maxlength="30" value="{{info.barcode}}">',
                        '</div>',
                        '<div class="pb_10">',
                                '<span>运费模板：</span>',
                                '<select name="item_delivery" data-style="bordered" data-size="large" data-trigger="click" data-max-width="100" data-max-height="120"  value="{{info.postage_id}}">',
                                    '<option value="-1">请选择模版</option>',
                                    '<option act-loop="tmp in delivery" value="{{tmp.template_id}}" {{ tmp.template_id == info.postage_id ? selected : }}>{{tmp.name}}</option>',
                                '</select>',
                        '</div>',
                        '<div class="pb_10">',
                                '<span>&nbsp;&nbsp;&nbsp;上下架：</span>',
                                '<label class="flip-switch">',
                                    '<input type="checkbox" name="item_sale" {{ info.approve_status == onsale ? checked : }}>',
                                    '<span class="switch-btn" data-on="已上架" data-off="未上架"></span>',
                                '</label>',
                                '<span act-if="info.approve_status == onsale">    <span class="item_updown_text">上架时间</span>    <span class="item_updown_time">{{info.list_time}}</span></span>',
                                '<span act-if="info.approve_status != onsale">    <span class="item_updown_text">下架时间</span>    <span class="item_updown_time">{{info.delist_time}}</span></span>',
                        '</div>',
                        '<div class="pb_10">',
                            '橱窗状态：',
                            '<label class="flip-switch">',
                                '<input type="checkbox" {{ info.has_showcase == true ? checked :  }} name="item_showCase">',
                                '<span class="switch-btn" data-on="已推荐" data-off="未推荐"></span>',
                            '</label>',
                        '</div>',
                    '</div>',
                    '<div act-if="info.skus != undefined" class="pt_10">',
                            '<table class="skuTable_modal sui-table table-bordered-simple sui-form" style="margin-bottom: 0;">',
                                '<thead>',
                                '<tr>',
                                    '<th><div>宝贝规格</div></th>',
                                    '<th width="140"><div>价格</div></th>',
                                    '<th width="160"><div>库存</div></th>',
                                '</tr>',
                                '</thead>',

                                '<tbody>',
                                    '<tr act-loop="sku in info.skus.sku">',
                                            '<td><div>{{sku.skuName}}</div><input name="sku_id" value="{{sku.sku_id}}" type="hidden"><input name="sku_properties" value="{{sku.properties}}" type="hidden"><input name="sku_outerId" value="{{sku.outer_id}}" type="hidden"></td>',
                                            '<td><label><input name="sku_id_price" type="text" value="{{sku.price}}" class="input-default w70" data-rules="required|newnumber"><span class="ml_5">元</span></label></td>',
                                            '<td><label><input name="sku_id_num" type="text" value="{{sku.quantity}}" class="input-default w70" data-rules="required|gt=0"><span class="ml_5">件</span></label></td>',
                                    '</tr>',
                                '</tbody>',
                            '</table>',
                    '</div>',
                '</div>',
            '</div>'];

var s = [2,3,4,'a','b','c'];

// 全部遍历
function test1(){}

function test2(){

}