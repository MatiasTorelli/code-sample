<template>
  <section class="section">
    <span class="title">{{ $t('aboutUs.sectionLeadership.title') }}</span>
    <div
      class="member"
      v-for="(member, index) in membersList"
      :key="index"
    >
      <img
        class="image"
        :src="getImageUrl(member.image)"
        :alt="member.name"
      >
      <div class="info">
        <span class="info__name">{{ member.name }}</span>
        <span class="info__role">{{ member.role }}</span>
        <span class="info__description">{{ member.description }}</span>
        <div class="info__socialMedias">
          <Component
            v-for="(socialMedia, index) in member.socialMedias"
            :key="index"
            :is="getIcon(socialMedia.logo)"
            @click="openNewTab(socialMedia.url)"
            class="icon"
            color="black"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { readonly } from 'vue'
import { useI18n } from 'vue-i18n'
import { useIcon } from '@/utils/composables/icon.js'
import { useImage } from '@/utils/composables/image.js'

const { locale, messages } = useI18n()
const { getIcon } = useIcon()
const { getImageUrl } = useImage()

const membersList = readonly(messages.value[locale.value].aboutUs.sectionLeadership.members)

const openNewTab = (url) => {
  window.open(url, '_blank');
}
</script>

<style lang="postcss" scoped>
@import 'css/typographies.css';
@import 'css/responsive.css';

.section {
  padding: 100px 0 200px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @add-mixin resolution-mobile {
    padding: 0 40px 100px 40px;
  }

  .title {
    @extend #typography-headline-2;
    margin-bottom: 100px;

    @add-mixin resolution-mobile {
      @extend #typography-headline-4;
    }
  }

  .member {
    max-width: 800px;
    display: flex;
    flex-flow: row nowrap;
    
    @add-mixin resolution-mobile {
      flex-flow: column nowrap;
      align-items: center;
    }

    .image {
      width: 200px;
      border-radius: 50%;
      margin-right: 60px;

      @add-mixin resolution-mobile {
        width: 140px;
        height: 140px;
        margin-right: 0;
      }
    }

    .info {
      margin-top: 20px;
      display: flex;
      flex-flow: column nowrap;

      @add-mixin resolution-mobile {
        align-items: center;
      }

      &__name {
        @extend #typography-headline-5;
        margin-bottom: 8px;
      }
    
      &__role {
        @extend #typography-subtitle-1;
        margin-bottom: 20px;
      }
    
      &__description {
        @extend #typography-body-1;
        margin-bottom: 12px;
        
        @add-mixin resolution-mobile {
          text-align: center;
          margin-bottom: 20px;
        }
      }

      &__socialMedias {
        display: flex;
        flex-flow: row nowrap;

        .icon {
          margin-right: 8px;
          cursor: pointer;
        }

        .icon:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
