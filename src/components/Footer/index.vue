<template>
  <footer class="footer-container d-flex align-center justify-space-between px-8">
    <div class="d-flex align-center no-ar">
      <div class="d-flex align-center mr-8">
        <i class="material-icons mr-2">radio_button_checked</i>
        <span>No Ar</span>
      </div>
      <div class="d-flex align-center mr-8">
        <i class="material-icons mr-2">personal_video</i>
        <span>Encontro - 10:00</span>
      </div>
      <div class="d-flex align-center mr-8">
        <i class="material-icons mr-2">update</i>
        <span>
          Última atualização em
          <strong>10:28</strong>
        </span>
      </div>
    </div>

    <div class="d-flex align-center today">
      <div>
        <small class="mr-1">Quinta,</small>
        <strong class="mr-1">30</strong>
        <small class="mr-1">de</small>
        <strong class="mr-1">Maio</strong>
        <small class="mr-1">de</small>
        <strong class="mr-4">2019</strong>
      </div>

      <h6>// 10:30:42</h6>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer.footer-container {
  height: 46px;
  width: 100%;
  background: #212121;

  div.no-ar {
    div:first-of-type {
      span {
        font-size: 14px;
      }
      i {
        font-size: 15px;
        font-weight: bold;
      }
      i,
      span {
        color: #fe8600;
      }
    }
    div:nth-child(2) {
      i {
        color: #757575;
        font-size: 14px;
        font-weight: bold;
      }
      span {
        color: #fff;
        text-transform: uppercase;
        font-size: 14px;
      }
    }

    div:nth-child(3) {
      i {
        color: #757575;
        font-size: 16px;
        font-weight: bold;
      }
      span {
        font-size: 14px;
        font-style: italic;
        color: #a9a4a4;

        strong {
          color: #cec9c9;
        }
      }
    }
  }

  div.today {
    div {
      small,
      strong {
        font-size: 14px;
        font-style: italic;
      }

      small {
        color: #a9a4a4;
      }
      strong {
        color: #cec9c9;
      }
    }

    h6 {
      color: #fe8600;
      font-size: 25px;
    }
  }

  i {
    line-height: unset;
  }
}
</style>