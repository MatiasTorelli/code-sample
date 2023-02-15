<template>
  <main class="section">
    <section class="form">
      <span class="form__title">{{ $t('contactUs.title') }}</span>
      <InputText
        class="form__input"
        v-model="form.name"
        :label="$t('contactUs.inputs.name')"
      />
      <InputText
        class="form__input"
        v-model="form.email"
        :label="$t('contactUs.inputs.email')"
      />
      <InputTextarea
        class="form__input"
        v-model="form.description"
        :label="$t('contactUs.inputs.description')"
      />
      <span
        class="form__error"
        v-for="(error, index) in v$.$errors"
        :key="index"
      >
        {{ error.$message }}
      </span>
      <span
        v-if="formState === 'submitted'"
        class="form__success"
      >
        {{ $t('contactUs.submitMessage') }}
      </span>
      <span
        v-if="formState === 'failed'"
        class="form__error"
      >
        {{ $t('contactUs.errorCouldNotSubmit') }}
      </span>
      <BaseButton
        class="form__submit"
        @click="submit()"
      >
        {{ $t('base.send') }}
      </BaseButton>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useConsultsStore } from '@/stores/consults'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import InputText from '../components/shared/InputText.vue'
import InputTextarea from '../components/shared/InputTextarea.vue'
import BaseButton from '../components/shared/BaseButton.vue'

const { locale, messages } = useI18n()
const consultsStore = useConsultsStore()

const form = ref({
  name: null,
  email: null,
  description: null
})

const formState = ref(undefined)

const v$ = useVuelidate(
  {
    name: {
      required: helpers.withMessage(messages.value[locale.value].contactUs.errorRequiredName, required)
    },
    email: {
      required: helpers.withMessage(messages.value[locale.value].contactUs.errorRequiredEmail, required),
      email: helpers.withMessage(messages.value[locale.value].contactUs.errorInvalidEmail, email)
    },
    description: {
      required: helpers.withMessage(messages.value[locale.value].contactUs.errorRequiredDescription, required)
    }
  },
  form
)

const submit = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) {
    return
  }
  v$.value.$reset()
  formState.value = await consultsStore.createProjectConsultation(form.value.name, form.value.email, form.value.description)
  if (formState.value === 'failed') {
    return
  }
  form.value.name = null
  form.value.email = null
  form.value.description = null
}
</script>

<style lang="postcss" scoped>
@import 'css/typographies.css';
@import 'css/colors.css';
@import 'css/responsive.css';

.section {
  min-height: calc(100vh - 80px);
  padding-top: 100px;
  
  @add-mixin resolution-mobile {
    height: auto;
    padding: 100px 40px 100px 40px;
  }

  .form {
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-flow: row wrap;

    @add-mixin resolution-mobile {
      flex-flow: column wrap;
    }

    &__title {
      @extend #typography-headline-3;
      white-space: pre-line;
      margin-bottom: 80px;
      display: block;
    }

    &__input {
      width: 480px;
      margin-bottom: 24px;

      @add-mixin resolution-mobile {
        width: 100%;
      }

      &:nth-child(2) {
        margin-right: 40px;
        
        @add-mixin resolution-mobile {
          margin-right: 0;
        }
      }

      &:nth-child(4) {
        width: 100%;
      }
    }

    &__success, &__error {
      @extend #typography-subtitle-2;
      width: 100%;
      height: 40px;
      padding-left: 12px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      margin-bottom: 8px;

      &:last-of-type {
        margin-bottom: 32px;
      }
    }

    &__success {
      background-color: $color-success;
    }

    &__error {
      background-color: $color-error;
    }

    &__submit {
      margin-bottom: 48px;
    }
  }
}
</style>
