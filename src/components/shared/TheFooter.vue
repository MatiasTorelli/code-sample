<template>
  <footer class="footer">
    <div class="section">
      <span class="title">{{ $t('base.footer.sections.title') }}</span>
      <RouterLink
        :to="{ name: 'home' }"
        class="item"
      >
        {{ $t('base.footer.sections.pages.home') }}
      </RouterLink>
      <RouterLink
        :to="{ name: 'aboutUs' }"
        class="item"
      >
        {{ $t('base.footer.sections.pages.aboutUs') }}
      </RouterLink>
      <RouterLink
        :to="{ name: 'contact' }"
        class="item"
      >
        {{ $t('base.footer.sections.pages.contact') }}
      </RouterLink>
      <RouterLink
        :to="{ name: 'termsAndConditions'}"
        class="item"
      >
        {{ $t('base.footer.sections.pages.terms') }}
      </RouterLink>
      <RouterLink
        :to="{ name: 'privacyPolicy'}"
        class="item"
      >
        {{ $t('base.footer.sections.pages.privacyPolicy') }}
      </RouterLink>
    </div>

    <div class="section">
      <span class="title">{{ $t('base.footer.offices.title') }}</span>
      <span class="item">{{ $t('base.footer.offices.addres') }}</span>
    </div>

    <div class="section">
      <span class="title">{{ $t('base.footer.contact.title') }}</span>
      <span class="item">{{ $t('base.footer.contact.email') }}</span>
    </div>

    <div class="info">
      <LogoWhiteVariant class="logo" />
      <span class="copyright">{{ $t('base.footer.info.copyright') }}</span>
      <div class="socialMedias">
        <Component
          v-for="(socialMedia, index) in socialMedias"
          :key="index"
          :is="getIcon(socialMedia.logo)"
          @click="openNewTab(socialMedia.url)"
          class="socialMedias__icon"
        />
      </div>
    </div>
  </footer>
</template>

<script setup>
import { readonly } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIcon } from '@/utils/composables/icon.js'
import LogoWhiteVariant from '@/assets/svg/LogoWhiteVariant.vue'

const { locale, messages } = useI18n()
const { getIcon } = useIcon()

const socialMedias = readonly(messages.value[locale.value].base.footer.info.socialMedias)

const openNewTab = (url) => {
  window.open(url, '_blank');
}
</script>

<style lang="postcss" scoped>
@import 'css/typographies.css';
@import 'css/colors.css';
@import 'css/responsive.css';

.footer {
  display: flex;
  padding: 0 100px 34px 100px;
  background-color: $color-dark-purple;
  color: $color-white;
  flex-flow: row nowrap;
  justify-content: space-between;

  @add-mixin resolution-mobile {
    padding: 0 40px 34px 40px;
    flex-flow: row wrap;
  }

  .section {
    margin-top: 60px;
    display: flex;
    flex-flow: column nowrap;

    .title {
      @extend #typography-subtitle-1;
      margin-bottom: 20px;

      &:before {
        content: '';
        width: 24px;
        height: 1px;
        background-color: $color-white;
        position: absolute;
        bottom: -4px;
      }
    }

    .item {
      @extend #typography-subtitle-2;
      margin-bottom: 8px;
      white-space: pre-line;
      text-decoration: none;
      color: $color-white;
    }
  }

  .info {
    width: 400px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .logo {
      margin-top: 12px;
    }

    .copyright {
      @extend #typography-subtitle-2;
      margin-bottom: 16px;
    }

    .socialMedias {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;

        &__icon {
          margin-right: 16px;
          cursor: pointer;

          &:last-child {
            margin-right: 0;
          }
        }
    }
  }
}
</style>