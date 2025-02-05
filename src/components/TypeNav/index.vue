<template>
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="onMouseLeaveCategories" @mouseenter="onMouseEnterCategories">
                <h2 class="all">全部商品分类</h2>
                <div class="sort" v-show="showCategories">
                    <div class="all-sort-list2" @click.prevent="goSearch">
                        <div class="item"
                             v-for="(categoryOne, index) in categoryList"
                             :key="categoryOne.categoryId"
                             :class="{cur: currentLevelOneIndex === index}"
                             @mouseenter="currentLevelOneIndexChange(index)"
                        >
                            <h3>
                                <a href="#" :data-categoryname="categoryOne.categoryName"
                                   :data-category1id="categoryOne.categoryId">
                                    {{ categoryOne.categoryName }}
                                </a>
                            </h3>
                            <div class="item-list clearfix"
                                 :style="{display: currentLevelOneIndex === index ? 'block' : 'none'}">
                                <div class="subitem" v-for="categoryTwo in categoryOne.categoryChild"
                                     :key="categoryTwo.categoryId">
                                    <dl class="fore">
                                        <dt>
                                            <a href="" :data-categoryname="categoryTwo.categoryName"
                                               :data-category2id="categoryTwo.categoryId">
                                                {{ categoryTwo.categoryName }}
                                            </a>
                                        </dt>
                                        <dd>
                                            <em v-for="categoryThree in categoryTwo.categoryChild"
                                                :key="categoryThree.categoryId">
                                                <a href="#" :data-categoryname="categoryThree.categoryName"
                                                   :data-category3id="categoryThree.categoryId">
                                                    {{ categoryThree.categoryName }}
                                                </a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav class="nav">
                <a href="#">服装城</a>
                <a href="#">美妆馆</a>
                <a href="#">尚品汇超市</a>
                <a href="#">全球购</a>
                <a href="#">闪购</a>
                <a href="#">团购</a>
                <a href="#">有趣</a>
                <a href="#">秒杀</a>
            </nav>

        </div>
    </div>
</template>


<script>
import {mapGetters} from "vuex";
import throttle from "lodash/throttle";

export default {
    name: "TypeNav",
    data() {
        return {
            currentLevelOneIndex: -1,
            // 是否展开1级目录
            showCategories: true,
        }
    },
    computed: {
        ...mapGetters({
            categoryList: 'categories'
        })
    },
    methods: {
        currentLevelOneIndexChange: throttle(function (index) {
            this.currentLevelOneIndex = index;
        }, 50),
        goSearch(event) {
            const {dataset} = event.target;
            const {categoryname, category1id, category2id, category3id} = dataset;
            // 利用了事件委托，因此只有当dataset中有categoryname时，说明是 <a> 标签，需要跳转
            if (categoryname) {
                const location = {name: 'search'};
                const query = {categoryName: categoryname};
                if (category1id) {
                    query.category1Id = category1id;
                } else if (category2id) {
                    query.category2Id = category2id;
                } else {
                    query.category3Id = category3id;
                }
                location.query = query;
                if (this.$route.params) {
                    location.params = this.$route.params;
                }
                this.$router.push(location);
            }

        },
        onMouseEnterCategories() {
            this.showCategories = true;
        },
        onMouseLeaveCategories() {
            this.currentLevelOneIndex = -1;
            if (this.$route.path !== '/home' && this.$route.path !== '/') {
                this.showCategories = false;
            }
        }
    },

    mounted() {
        if (this.$route.path !== '/home' && this.$route.path !== '/') {
            this.showCategories = false;
        }
    },

}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      ;

        .cur {
          background-color: skyblue;
        }
      }
    }
  }
}
</style>