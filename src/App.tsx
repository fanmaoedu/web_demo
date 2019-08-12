
import React, { Component } from 'react'
import { Layout, Menu, Icon, Row, Col, Button, Input, Tabs, Checkbox, List, Avatar, Skeleton } from 'antd';
import * as faker from 'faker/locale/zh_CN';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const { TabPane } = Tabs;

interface appPorps { }
interface appState {
  collapsed: boolean
}

class App extends Component<appPorps, appState> {
  constructor(props: appPorps, state: appState) {
    super(props);
    this.state = {
      collapsed: false
    }
    
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const data = [
      {
        title: '蛤蜊玉笋水饺',
        imageurl:'http://p1.meituan.net/xianfu/f907224ba607deb812dd8de706d8332780849.jpg'
      },
      {
        title: '玉米猪肉水饺',
        imageurl:'http://p0.meituan.net/xianfu/e4b585d5fcffa041539664d337e75cf976285.jpg'
      },
      {
        title: '开洋三鲜水饺',
        imageurl:'http://p0.meituan.net/xianfu/1e7ba7953c79a0ab4d944cf55a216fc6215866.jpg'
      },
      {
        title: '西芹牛肉水饺',
        imageurl:'http://p0.meituan.net/xianfu/1e7ba7953c79a0ab4d944cf55a216fc6215866.jpg'
      },
    ];
    console.log('faker',faker.address.city())
    return (
      <Layout>
        <Sider trigger={null} style={{ minHeight: '100vh' }} collapsible collapsed={this.state.collapsed} >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>商家首页</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>订单管理</span>
                </span>
              }
            >
              <Menu.Item key="sub1-1">
                <span>预订单</span>
              </Menu.Item>
              <Menu.Item key="sub1-2">
                <span>催单</span>
              </Menu.Item>
              <Menu.Item key="sub1-3">
                <span>退单</span>
              </Menu.Item>
              <Menu.Item key="sub1-4">
                <span>历史订单</span>
              </Menu.Item>
              <Menu.Item key="2">
                <span>餐损赔付</span>
              </Menu.Item>
              <Menu.Item key="2">
                <span>异常配送</span>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="3">
              <Icon type="upload" />
              <span>商品管理</span>
            </Menu.Item>
            <SubMenu key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  <span>顾客管理</span>
                </span>
              } >
              <Menu.Item key="sub2-1">
                <span>顾客分析</span>
              </Menu.Item>
              <Menu.Item key="sub2-2">
                <span>顾客画像</span>
              </Menu.Item>
              <Menu.Item key="sub2-3">
                <span>精准营销</span>
              </Menu.Item>
              <Menu.Item key="sub2-4">
                <span>顾客评价</span>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="5">
              <Icon type="upload" />
              <span>财务管理</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="upload" />
              <span>经营分析</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="upload" />
              <span>门店推广</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="upload" />
              <span>营销活动</span>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="upload" />
              <span>配送服务</span>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
            }}
          >
            <Row>
              <Col span={18}>
                <Button.Group>
                  <Button type='default'>新建商品</Button>
                  <Button type='default'>批量新建/传图/修改</Button>
                </Button.Group>
              </Col>
              <Col span={6}>
                <Search placeholder="商品搜索" onSearch={value => console.log(value)} enterButton />
              </Col>
            </Row>
            <Tabs defaultActiveKey="1">
              <TabPane tab={"全部("+faker.random.number({min:0,max:100})+")"} key="1">
                <Row>
                  <Col span={4}>
                    <Menu mode="inline" defaultSelectedKeys={["1"]}>
                      <Menu.Item key="1">超值套餐</Menu.Item>
                      <Menu.Item key="2">招牌水饺</Menu.Item>
                      <Menu.Item key="3">滋补汤品</Menu.Item>
                      <Menu.Item key="4">夏季新品</Menu.Item>
                      <Menu.Item key="5">小食配菜</Menu.Item>
                      <Menu.Item key="6">汤饺</Menu.Item>
                      <Menu.Item key="7">小食</Menu.Item>
                      <Menu.Item key="8">来杯喝的</Menu.Item>
                      <Menu.Item key="9">招牌套餐</Menu.Item>
                      <Menu.Item key="10">特色面类</Menu.Item>
                    </Menu>
                  </Col>
                  <Col span={20}>
                    <Row style={{ borderBottom: '1px solid #f0f0f0', paddingBottom: '10px' }}>
                      <Col span={20} offset={1}>
                        <Checkbox>全选</Checkbox>
                        <Button.Group size='default'>
                          <Button>批量上架</Button>
                          <Button>批量下架</Button>
                          <Button>批量删除</Button>
                          <Button>批量上传图片</Button>
                          <Button>批量修改名称</Button>
                          <Button>批量改库存</Button>
                          <Button>批量改份量</Button>
                        </Button.Group>
                      </Col>
                    </Row>
                    <List
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<img src={item.imageurl} style={{width:94,height:74}} />}
                            title={<a href={faker.image.food()}>{item.title}</a>}
                            description={faker.address.city()}
                          />
                          <Button >编辑</Button>
                        </List.Item>
                      )}
                    />

                  </Col>
                </Row>



              </TabPane>
              <TabPane tab={"售卖中("+faker.random.number({min:0,max:100})+")"} key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab={"已下架("+faker.random.number({min:0,max:100})+")"} key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab={"已售完("+faker.random.number({min:0,max:100})+")"} key="4">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab={"图片问题("+faker.random.number({min:0,max:100})+")"} key="5">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab={"无标签("+faker.random.number({min:0,max:100})+")"} key="6">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Content>
        </Layout>
      </Layout>
    )
  }
}


export default App;
