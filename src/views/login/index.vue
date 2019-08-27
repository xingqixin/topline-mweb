<template>
  <div>
    <van-nav-bar title="登录"/>
    <van-cell-group>
         <van-field
            v-model="user.mobile"
            label="手机号"
            placeholder="请输入手机号"
            v-validate="'required'"
            name='mobile'
            :error-message="errors.first('mobile')"
        />
        <van-field
            v-model="user.code"
            type="password"
            label="密码"
            placeholder="请输入密码"
            v-validate="'required'"
            name='code'
            :error-message="errors.first('code')"
        />

         <!-- <van-field
            v-model="user.mobile"
            label="手机号"
            placeholder="请输入手机号"
            name='mobile'
        />
        <van-field
            v-model="user.code"
            type="password"
            label="验证码"
            name='code'
            placeholder="请输入验证码"
        /> -->
    </van-cell-group>
    <div class="loginBut">
        <van-button type="info" square size="large" :loading="loginInfo" @click="loginOn">登录</van-button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import request from '@/utils/request.js'
import { login } from '@/api/user'
// 代码的优化将以前直接请求axios的方法优化封装为request的方法,其中在axios的文档中查找了拦截器的使用
// 代码再次优化,在页面中不要出现axios和request的封装的调用,将不同的请求封装为不同的函数,然后在需要的时候再调用,一般所有的请求我们都放在api中
export default {
  name: 'LoginIndex',
  // 给出数据
  data () {
    return {
      user: {
        //   接口文档要求的两个字段
        mobile: '13911111111',
        code: '246810'
      },
      loginInfo: false
    }
  },
  created () {
    this.customValidateMessage()
    // this.$validator.localize('zh_CN', dict)
  },
  methods: {
    async loginOn () {
      try {
        // try 和catch的异常处理
        // // 表单验证
        const isValid = await this.$validator.validate()
        if (!isValid) {
          return
        }
        this.loginInfo = true
        const { data } = await login(this.user)
        this.loginInfo = false
        // 发请求
        console.log(data)
      } catch (err) {
        console.log(err)
        if (err.response && err.response.status === 400) {
          // toast.fail 是轻提示的书写方式是vant里面的方法
          this.$toast.fail('手机号或验证码错误')
          this.loginInfo = false
        }
      }
    },
    customValidateMessage () {
      this.$validator.localize('zh_CN', {
        custom: {
          // mobile 是要验证的字段的名字
          mobile: {
            required: '手机号不能为空'
          },
          code: {
            required: '验证码不能为空'
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scope>
// lang 规定的是语言
.loginBut {
    padding: 20px;
    color: #fff;
    .van-button {
        border-radius: 10px
    }
}
</style>
