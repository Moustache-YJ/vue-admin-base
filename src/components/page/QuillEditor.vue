<template>
   <div class='edit_container'>
        <el-upload
          class="avatar-uploader" 
          :action="serverUrl"
          name="file"
          :show-file-list="false"
          list-type="picture"
          :multiple="false"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          :before-upload="beforeUpload">
        </el-upload>
        <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
   </div>
</template>
<script>

import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import option from '../../utils/quill/index'
// 图片上传使用的element图片上传，富文本编辑器使用的是base64，图片太大，我们使用的是回显
export default {
  components: {
    quillEditor
  },
  props: {
      /*编辑器的内容*/
      value: {
        type: String
      },
  },
  data () {
    return {
        editorOption:{...option},
        content:this.value,
        serverUrl:''
    };
  },
  computed: {
    editor() {
        return this.$refs.myQuillEditor.quill;
    },
  },
  methods: {
        onEditorReady(editor) { // 准备编辑器
 
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
        // 点击上传文件前
        beforeUpload(){
            //内容改变事件
            this.$emit("input", this.content);
        },
        uploadSuccess(response, file, fileList){
            // res为图片服务器返回的数据
            // 获取富文本组件实例
            let quill = this.$refs.myQuillEditor.quill;
            // 如果上传成功
            if (res.code == 200) {
            // 获取光标所在位置
            let length = quill.getSelection().index;
            // 插入图片  res.url为服务器返回的图片地址
            quill.insertEmbed(length, "image", res.result.url);
            // 调整光标到最后
            quill.setSelection(length + 1);
            } else {
                this.$message.error("图片插入失败");
             }
        },
        uploadError(err, file, fileList){

        }
  },
  //   创建实例的时候将图片自定义的点击方法传入
  beforeCreate(){
     // 重写点击image的方法
     option.modules.toolbar.handlers.image = (value) =>{
        document.querySelector(".avatar-uploader input").click();
        // this.$refs['upload'].input.click()
     }
  },
  mounted() {
  },
}
</script>
<style lang='less' scoped>
</style>