### mapcube-example: [https://overu.github.io/mapcube-example/index.html](https://overu.github.io/mapcube-example/index.html)


### wx-ast-explorer: [https://overu.github.io/wx-ast-explorer/index.html](https://overu.github.io/wx-ast-explorer/index.html)
### like:
1. delimiters ``{{}}``
   ```html
   <view> {{ message }} </view>
   ```
2. base data bind
   ```html
   <view id="item-{{id}}"> </view>
   <view hidden="{{flag ? true : false}}"> Hidden </view>
   <template is="some" data="{{for: a, bar: b}}"></template>
   ```
3. wx:for wx:for-item wx:for-item
   ```html
   <view wx:for="{{array}}">
     {{index}}: {{item.message}}
   </view>

   <view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
     {{idx}}: {{itemName.message}}
   </view>
   
   <view wx:for="{{[1, 2, 3]}}">
     <view> {{index}}: </view>
     <view> {{item}} </view>
   </view>

   <view wx:for="{{[1,2,3]}} ">
     {{item}}
   </view>
   ```
4. wx:if、wx:elif、wx:else
   ```html
   <view wx:if="{{condition}}"> True </view>

   <view wx:if="{{length > 5}}"> 1 </view>
   <view wx:elif="{{length > 2}}"> 2 </view>
   <view wx:else> 3 </view>
   ```
5. template
   ```html
   <!-- name -->
   <template name="foo">
     <view>
       <view>{{name}}</view>
     </view>
   </template>

   <!-- is -->
   <template is="foo" data="{{foo}}" />
   <template is="{{item % 2 == 0 ? 'even' : 'odd'}}"  />
   ```
6. template external
   ```html
   <!-- import -->
   <import src="item.wxml"/>
   <template is="item" data="{{text: 'forbar'}}"/>

   <!-- include -->
   <include src="footer.wxml"/>
   ```
